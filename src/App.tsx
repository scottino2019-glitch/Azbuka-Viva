import React, { useState, useEffect, useCallback } from 'react';
import { Volume2, Settings2, CheckCircle2, Play, Square, Menu, X } from 'lucide-react';
import { RUSSIAN_ALPHABET } from './data/russianAlphabet';
import { AppSection, RussianLetter } from './types/alphabet';
import { TeacherLessonStage } from './components/TeacherLessonStage';
import { AlphabetPosterGrid } from './components/AlphabetPosterGrid';
import { ExceptionsCompendium } from './components/ExceptionsCompendium';
import { ListeningGame } from './components/ListeningGame';
import { VoiceSettingsModal } from './components/VoiceSettingsModal';
import {
  getAvailableSystemVoices,
  isSpeechSupported,
  playTeacherSequence,
  speakSingle,
  stopAllSpeech,
  SequenceStep,
} from './utils/systemSpeech';

type RailFilter = 'all' | 'vowel' | 'consonant' | 'sign' | 'false-friend';

const STORAGE_LEARNED_KEY = 'azbuka_viva_learned_v1';
const STORAGE_INDEX_KEY = 'azbuka_viva_active_index_v1';
const STORAGE_VOICE_PREFS_KEY = 'azbuka_viva_voice_prefs_v1';

interface SavedVoicePrefs {
  forceRussianVoice: boolean;
  selectedRuVoiceURI: string;
  selectedItVoiceURI: string;
  speechRate: number;
  speechPitch: number;
}

const loadVoicePrefs = (): Partial<SavedVoicePrefs> => {
  try {
    const raw = localStorage.getItem(STORAGE_VOICE_PREFS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // Ignore
  }
  return {};
};

export default function App() {
  const savedPrefs = loadVoicePrefs();

  const [activeSection, setActiveSection] = useState<AppSection>('lesson');
  const [selectedIndex, setSelectedIndex] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_INDEX_KEY);
      if (saved !== null) {
        const parsed = Number(saved);
        if (!Number.isNaN(parsed) && parsed >= 0 && parsed < RUSSIAN_ALPHABET.length) {
          return parsed;
        }
      }
    } catch {
      // Ignore storage errors
    }
    return 0;
  });

  const [learnedLetters, setLearnedLetters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LEARNED_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Ignore storage errors
    }
    return [];
  });

  const [railFilter, setRailFilter] = useState<RailFilter>('all');
  const [slowMode, setSlowMode] = useState<boolean>(false);
  const [forceRussianVoice, setForceRussianVoice] = useState<boolean>(
    savedPrefs.forceRussianVoice ?? true
  );
  const [speechRate, setSpeechRate] = useState<number>(
    savedPrefs.speechRate ?? 0.92
  );
  const [speechPitch, setSpeechPitch] = useState<number>(
    savedPrefs.speechPitch ?? 1.0
  );

  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);
  const [isSequencePlaying, setIsSequencePlaying] = useState<boolean>(false);
  const [showVoiceModal, setShowVoiceModal] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [speechNotice, setSpeechNotice] = useState<string | null>(null);

  const [ruVoices, setRuVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [itVoices, setItVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [allVoices, setAllVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedRuVoiceURI, setSelectedRuVoiceURI] = useState<string>(
    savedPrefs.selectedRuVoiceURI ?? ''
  );
  const [selectedItVoiceURI, setSelectedItVoiceURI] = useState<string>(
    savedPrefs.selectedItVoiceURI ?? ''
  );
  const [voicesLoaded, setVoicesLoaded] = useState<boolean>(false);

  const currentLetter = RUSSIAN_ALPHABET[selectedIndex] ?? RUSSIAN_ALPHABET[0];

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_INDEX_KEY, String(selectedIndex));
    } catch {
      // Ignore
    }
  }, [selectedIndex]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_LEARNED_KEY, JSON.stringify(learnedLetters));
    } catch {
      // Ignore
    }
  }, [learnedLetters]);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_VOICE_PREFS_KEY,
        JSON.stringify({
          forceRussianVoice,
          selectedRuVoiceURI,
          selectedItVoiceURI,
          speechRate,
          speechPitch,
        })
      );
    } catch {
      // Ignore
    }
  }, [
    forceRussianVoice,
    selectedRuVoiceURI,
    selectedItVoiceURI,
    speechRate,
    speechPitch,
  ]);

  const refreshSystemVoices = useCallback(() => {
    if (!isSpeechSupported()) return;
    const { ruVoices: rvs, itVoices: ivs, allVoices: avs } =
      getAvailableSystemVoices();

    setRuVoices(rvs);
    setItVoices(ivs);
    setAllVoices(avs);
    setVoicesLoaded(true);

    setSelectedRuVoiceURI((prev) => {
      const matchInAll = (v: SpeechSynthesisVoice) =>
        (v.voiceURI || v.name) === prev;
      if (prev && avs.some(matchInAll)) return prev;
      const localRu = rvs.find((v) => v.localService);
      const firstRu = localRu ?? rvs[0] ?? avs[0];
      return firstRu ? firstRu.voiceURI || firstRu.name : '';
    });

    setSelectedItVoiceURI((prev) => {
      const matchInAll = (v: SpeechSynthesisVoice) =>
        (v.voiceURI || v.name) === prev;
      if (prev && avs.some(matchInAll)) return prev;
      const localIt = ivs.find((v) => v.localService);
      const firstIt = localIt ?? ivs[0] ?? avs[0];
      return firstIt ? firstIt.voiceURI || firstIt.name : '';
    });
  }, []);

  const handleCloseVoiceModal = useCallback(() => {
    setShowVoiceModal(false);
  }, []);

  useEffect(() => {
    if (!isSpeechSupported()) return;

    refreshSystemVoices();
    window.speechSynthesis.onvoiceschanged = refreshSystemVoices;

    // Fallback polling for browsers that populate getVoices() asynchronously without firing onvoiceschanged
    const t1 = window.setTimeout(refreshSystemVoices, 250);
    const t2 = window.setTimeout(refreshSystemVoices, 900);
    const t3 = window.setTimeout(refreshSystemVoices, 2200);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      stopAllSpeech();
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [refreshSystemVoices]);

  const handleStopSpeech = useCallback(() => {
    stopAllSpeech();
    setActiveSpeechId(null);
    setIsSequencePlaying(false);
  }, []);

  const handleSpeakRussian = useCallback(
    (text: string, id: string, overrideRate?: number) => {
      if (!isSpeechSupported()) {
        setSpeechNotice(
          'Il tuo browser non supporta la sintesi vocale di sistema (Web Speech API).'
        );
        return;
      }
      setSpeechNotice(null);
      setIsSequencePlaying(false);
      const effectiveRate =
        overrideRate ?? (slowMode ? Math.max(0.55, speechRate - 0.22) : speechRate);

      speakSingle({
        lang: 'ru-RU',
        text,
        rate: effectiveRate,
        pitch: speechPitch,
        voiceURI: selectedRuVoiceURI,
        ruVoiceURI: selectedRuVoiceURI,
        forceRussianVoice: true,
        onStart: () => setActiveSpeechId(id),
        onEnd: () => setActiveSpeechId((curr) => (curr === id ? null : curr)),
        onError: () => {
          setActiveSpeechId(null);
          setSpeechNotice(
            'Audio non disponibile su questo dispositivo: apri "Imposta voci di sistema" per scegliere un\'altra voce.'
          );
        },
      });
    },
    [slowMode, speechRate, speechPitch, selectedRuVoiceURI]
  );

  const handleSpeakItalian = useCallback(
    (text: string, id: string) => {
      if (!isSpeechSupported()) {
        setSpeechNotice(
          'Il tuo browser non supporta la sintesi vocale di sistema (Web Speech API).'
        );
        return;
      }
      setSpeechNotice(null);
      setIsSequencePlaying(false);
      const effectiveRate = slowMode
        ? Math.max(0.62, speechRate - 0.16)
        : speechRate;

      speakSingle({
        lang: 'it-IT',
        text,
        rate: effectiveRate,
        pitch: speechPitch,
        voiceURI: forceRussianVoice ? selectedRuVoiceURI : selectedItVoiceURI,
        ruVoiceURI: selectedRuVoiceURI,
        forceRussianVoice,
        onStart: () => setActiveSpeechId(id),
        onEnd: () => setActiveSpeechId((curr) => (curr === id ? null : curr)),
        onError: () => setActiveSpeechId(null),
      });
    },
    [
      slowMode,
      speechRate,
      speechPitch,
      forceRussianVoice,
      selectedRuVoiceURI,
      selectedItVoiceURI,
    ]
  );

  const handleTestVoiceFromModal = useCallback(() => {
    const sampleText = forceRussianVoice
      ? 'Ciao! Sono la tua maestra russa. Ascolta questa parola: Арбуз, молоко, ёжик!'
      : 'Ciao! Ecco la spiegazione in italiano. Ora ascolta in russo: Арбуз!';

    if (forceRussianVoice) {
      handleSpeakRussian(sampleText, 'voice-test', speechRate);
    } else {
      handleSpeakItalian(sampleText, 'voice-test');
    }
  }, [forceRussianVoice, speechRate, handleSpeakRussian, handleSpeakItalian]);

  const handlePlayFullLesson = useCallback(
    (letter: RussianLetter) => {
      if (!isSpeechSupported()) {
        setSpeechNotice(
          'Il tuo browser non supporta la sintesi vocale di sistema (Web Speech API).'
        );
        return;
      }
      setSpeechNotice(null);
      setIsSequencePlaying(true);

      const ruEffective = slowMode
        ? Math.max(0.55, speechRate - 0.22)
        : speechRate;
      const itEffective = slowMode
        ? Math.max(0.62, speechRate - 0.16)
        : speechRate;

      const steps: SequenceStep[] = [
        {
          id: 'intro',
          lang: 'it-IT',
          text: `Lezione numero ${letter.index}. ${letter.teacherLesson.intro} ${letter.teacherLesson.mouthTip}`,
          pauseAfterMs: 450,
        },
        {
          id: 'letter',
          lang: 'ru-RU',
          text: letter.soundTtsRu,
          pauseAfterMs: 550,
        },
        {
          id: 'mnemonic',
          lang: 'ru-RU',
          text: letter.mnemonic.ttsRu,
          pauseAfterMs: 500,
        },
        {
          id: 'example-0',
          lang: 'ru-RU',
          text: letter.examples[0]?.ttsRu ?? letter.mnemonic.ttsRu,
          pauseAfterMs: 450,
        },
        {
          id: 'phrase',
          lang: 'ru-RU',
          text: letter.miniPhrase.ttsRu,
          pauseAfterMs: 400,
        },
      ];

      playTeacherSequence({
        steps,
        ruRate: ruEffective,
        itRate: itEffective,
        pitch: speechPitch,
        ruVoiceURI: selectedRuVoiceURI,
        itVoiceURI: selectedItVoiceURI,
        forceRussianVoice,
        onStepChange: (stepId) => setActiveSpeechId(stepId),
        onComplete: () => {
          setActiveSpeechId(null);
          setIsSequencePlaying(false);
        },
      });
    },
    [
      slowMode,
      speechRate,
      speechPitch,
      forceRussianVoice,
      selectedRuVoiceURI,
      selectedItVoiceURI,
    ]
  );

  const toggleLearned = (uppercase: string) => {
    setLearnedLetters((prev) =>
      prev.includes(uppercase)
        ? prev.filter((item) => item !== uppercase)
        : [...prev, uppercase]
    );
  };

  const handleSelectLetterIndex = (idx: number) => {
    handleStopSpeech();
    setSelectedIndex(idx);
    setActiveSection('lesson');
  };

  const handleJumpToLetterByUppercase = (uppercase: string) => {
    const foundIdx = RUSSIAN_ALPHABET.findIndex(
      (item) => item.uppercase === uppercase
    );
    if (foundIdx >= 0) {
      handleSelectLetterIndex(foundIdx);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredRailLetters = RUSSIAN_ALPHABET.filter((l) => {
    if (railFilter === 'all') return true;
    if (railFilter === 'false-friend') return l.isFalseFriend;
    return l.category === railFilter;
  });

  const navItems: { id: AppSection; label: string }[] = [
    { id: 'lesson', label: 'Lezione' },
    { id: 'poster', label: 'Sillabario 33' },
    { id: 'exceptions', label: 'Eccezioni' },
    { id: 'game', label: "Gioco d'Ascolto" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#E6DFD0] text-[#1C1917]">
      {/* Top Bar scura Lavagna (3 zone separate da gap-8, 1 sola riga) */}
      <header className="bg-[#122923] text-white border-b-2 border-[#9C6F44]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => {
              handleStopSpeech();
              setActiveSection('lesson');
            }}
            className="font-display text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            Azbuka Viva
          </button>

          <nav
            aria-label="Sezioni del corso"
            className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#D6D3D1]"
          >
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    handleStopSpeech();
                    setActiveSection(item.id);
                  }}
                  className={`py-1.5 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'border-[#F59E0B] text-white font-bold'
                      : 'border-transparent hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (isSequencePlaying) {
                  handleStopSpeech();
                } else {
                  setActiveSection('lesson');
                  handlePlayFullLesson(currentLetter);
                }
              }}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isSequencePlaying
                  ? 'bg-[#DC2626] text-white hover:bg-red-700'
                  : 'bg-[#F59E0B] text-[#1C1917] hover:bg-[#FBBF24]'
              }`}
            >
              {isSequencePlaying ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>Ferma audio</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Lezione: {currentLetter.uppercase}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg border border-[#346C5C] text-white cursor-pointer"
              aria-label="Apri menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#214B3F] bg-[#16332B] px-4 py-3 flex flex-wrap gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  handleStopSpeech();
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-[#F59E0B] text-[#1C1917]'
                    : 'bg-[#214B3F] text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 max-w-[1320px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {speechNotice && (
          <div className="mb-6 bg-[#FEF3C7] border-2 border-[#D97706] rounded-xl px-4 py-3 text-sm font-semibold text-[#78350F] flex items-center justify-between gap-4">
            <span>{speechNotice}</span>
            <button
              type="button"
              onClick={() => setSpeechNotice(null)}
              className="text-xs font-bold underline shrink-0 cursor-pointer"
            >
              Chiudi
            </button>
          </div>
        )}

        {/* SEZIONE 1: LAVAGNA DELLA MAESTRA */}
        {activeSection === 'lesson' && (
          <div className="space-y-6">
            {/* Hero compatto ad alto contrasto */}
            <section className="bg-[#16332B] text-white border-2 border-[#9C6F44] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-sm">
              <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#FCD34D]">
                    <span>Corso di Alfabeto Russo</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">
                      {learnedLetters.length} / {RUSSIAN_ALPHABET.length} lettere imparate
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {forceRussianVoice
                        ? 'Voce russa di sistema (ru-RU)'
                        : 'Voce doppia (it-IT + ru-RU)'}
                    </span>
                  </div>
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-2 text-balance">
                    Impara a leggere il russo come con una maestra vera
                  </h1>
                  <p className="text-sm sm:text-base text-[#E7E5E4] mt-2 leading-relaxed max-w-2xl">
                    La maestra russa spiega ogni lettera in italiano con il suo accento naturale, legge gli esempi e le frasi ad alta voce e ti avvisa su tutte le eccezioni di pronuncia.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      handleSpeakItalian(
                        'Ciao! Sono la tua maestra russa. Scegli una lettera dalla lavagna qui a sinistra, ascolta il suono e fai attenzione a tutte le eccezioni!',
                        'welcome-teacher'
                      )
                    }
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeSpeechId === 'welcome-teacher'
                        ? 'bg-[#F59E0B] text-[#1C1917]'
                        : 'bg-white text-[#16332B] hover:bg-[#FEF3C7]'
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Saluto della Maestra</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      refreshSystemVoices();
                      setShowVoiceModal(true);
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#214B3F] border border-[#346C5C] text-white hover:bg-[#2A5E4F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Settings2 className="w-4 h-4" />
                    <span>Imposta voci di sistema</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[210px] bg-[#122923]">
                <img
                  src="/src/assets/images/teacher_classroom_welcome_1795459279966.jpg"
                  alt="La maestra di russo davanti alla lavagna con le lettere cirilliche e un'anguria disegnata"
                  referrerPolicy="no-referrer"
                  className="w-full h-full lg:absolute lg:inset-0 object-cover"
                />
              </div>
            </section>

            {/* Layout a Due Zone (Sinistra: Indice Blu Notte 33 Lettere | Destra: Lezione) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <aside className="lg:col-span-4 bg-[#F7F3EA] border-2 border-[#C9BFA9] rounded-2xl overflow-hidden lg:sticky lg:top-6 shadow-xs">
                <div className="bg-[#172554] text-white px-5 py-3.5 flex items-center justify-between gap-2">
                  <h2 className="font-display text-base font-bold">
                    Indice dell'Alfabeto (33)
                  </h2>
                  <span className="text-xs font-bold text-[#FCD34D] tabular-nums">
                    {learnedLetters.length}/33 imparate
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-extrabold mb-3">
                    <span className="text-[#B91C1C]">Rosso: Vocali</span>
                    <span aria-hidden="true" className="text-[#A8A095]">·</span>
                    <span className="text-[#1D4ED8]">Blu: Consonanti</span>
                    <span aria-hidden="true" className="text-[#A8A095]">·</span>
                    <span className="text-[#B45309]">Ambra: Segni</span>
                  </div>

                  <div className="flex flex-wrap gap-1 p-1 bg-[#E6DFD0] rounded-xl mb-4">
                    {[
                      { id: 'all', label: 'Tutte' },
                      { id: 'vowel', label: 'Vocali' },
                      { id: 'consonant', label: 'Consonanti' },
                      { id: 'sign', label: 'Segni' },
                      { id: 'false-friend', label: 'Falsi amici' },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setRailFilter(f.id as RailFilter)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          railFilter === f.id
                            ? 'bg-[#172554] text-white shadow-xs'
                            : 'text-[#44403C] hover:text-[#1C1917]'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-4 gap-2 max-h-[470px] overflow-y-auto azbuka-scroll pr-1">
                    {filteredRailLetters.map((item) => {
                      const isActive = item.index - 1 === selectedIndex;
                      const isLearned = learnedLetters.includes(item.uppercase);
                      const letterColor =
                        item.category === 'vowel'
                          ? 'text-[#B91C1C]'
                          : item.category === 'consonant'
                            ? 'text-[#1D4ED8]'
                            : 'text-[#B45309]';

                      return (
                        <button
                          key={item.uppercase}
                          type="button"
                          onClick={() => handleSelectLetterIndex(item.index - 1)}
                          className={`relative flex flex-col items-center justify-center py-2.5 px-1 rounded-xl border-2 transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#16332B] border-[#9C6F44] text-white shadow-xs'
                              : 'bg-white border-[#D6CCB8] hover:border-[#1D4ED8]'
                          }`}
                        >
                          {isLearned && (
                            <CheckCircle2
                              className={`w-3.5 h-3.5 absolute top-1 right-1 ${
                                isActive ? 'text-[#FCD34D]' : 'text-[#059669]'
                              }`}
                            />
                          )}
                          <span
                            className={`font-display text-xl font-extrabold leading-none ${
                              isActive ? 'text-[#FCD34D]' : letterColor
                            }`}
                          >
                            {item.uppercase}
                          </span>
                          <span
                            className={`text-[11px] font-mono font-semibold mt-1 ${
                              isActive ? 'text-[#E7E5E4]' : 'text-[#57534E]'
                            }`}
                          >
                            {item.namePhoneticIt.split(' ')[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>

              <div className="lg:col-span-8">
                <TeacherLessonStage
                  letter={currentLetter}
                  totalLetters={RUSSIAN_ALPHABET.length}
                  isLearned={learnedLetters.includes(currentLetter.uppercase)}
                  onToggleLearned={toggleLearned}
                  onPrev={() =>
                    handleSelectLetterIndex(Math.max(0, selectedIndex - 1))
                  }
                  onNext={() =>
                    handleSelectLetterIndex(
                      Math.min(RUSSIAN_ALPHABET.length - 1, selectedIndex + 1)
                    )
                  }
                  activeSpeechId={activeSpeechId}
                  isSequencePlaying={isSequencePlaying}
                  slowMode={slowMode}
                  onToggleSlowMode={() => setSlowMode((s) => !s)}
                  onSpeakRussian={handleSpeakRussian}
                  onSpeakItalian={handleSpeakItalian}
                  onPlayFullLesson={handlePlayFullLesson}
                  onStopSpeech={handleStopSpeech}
                />
              </div>
            </div>
          </div>
        )}

        {/* SEZIONE 2: SILLABARIO ILLUSTRATO COMPLETO */}
        {activeSection === 'poster' && (
          <AlphabetPosterGrid
            letters={RUSSIAN_ALPHABET}
            learnedLetters={learnedLetters}
            activeSpeechId={activeSpeechId}
            onSelectLetterForLesson={handleSelectLetterIndex}
            onSpeakRussian={handleSpeakRussian}
          />
        )}

        {/* SEZIONE 3: TUTTE LE ECCEZIONI */}
        {activeSection === 'exceptions' && (
          <ExceptionsCompendium
            activeSpeechId={activeSpeechId}
            onSpeakRussian={handleSpeakRussian}
            onSpeakItalian={handleSpeakItalian}
            onJumpToLetter={handleJumpToLetterByUppercase}
          />
        )}

        {/* SEZIONE 4: GIOCO D'ASCOLTO */}
        {activeSection === 'game' && (
          <ListeningGame
            letters={RUSSIAN_ALPHABET}
            onSpeakRussian={handleSpeakRussian}
            onSpeakItalian={handleSpeakItalian}
          />
        )}
      </main>

      <VoiceSettingsModal
        isOpen={showVoiceModal}
        onClose={handleCloseVoiceModal}
        forceRussianVoice={forceRussianVoice}
        onChangeForceRussianVoice={setForceRussianVoice}
        ruVoices={ruVoices}
        itVoices={itVoices}
        allVoices={allVoices}
        selectedRuVoiceURI={selectedRuVoiceURI}
        onChangeRuVoiceURI={setSelectedRuVoiceURI}
        selectedItVoiceURI={selectedItVoiceURI}
        onChangeItVoiceURI={setSelectedItVoiceURI}
        speechRate={speechRate}
        onChangeSpeechRate={setSpeechRate}
        speechPitch={speechPitch}
        onChangeSpeechPitch={setSpeechPitch}
        voicesLoaded={voicesLoaded}
        onRefreshVoices={refreshSystemVoices}
        onTestVoice={handleTestVoiceFromModal}
      />

      <footer className="border-t-2 border-[#9C6F44] bg-[#122923] text-[#D6D3D1] py-5 px-4 sm:px-6 mt-8">
        <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>Azbuka Viva — Lezioni sull'alfabeto russo con voce russa di sistema e spiegazioni d'insegnante.</span>
          <span className="text-[#FCD34D] font-semibold">33 lettere · Tutte le eccezioni fonetiche · Illustrazioni mnemoniche</span>
        </div>
      </footer>
    </div>
  );
}

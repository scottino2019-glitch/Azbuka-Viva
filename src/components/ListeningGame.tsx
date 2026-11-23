import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Volume2, RotateCcw, Award, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { RussianLetter } from '../types/alphabet';
import { LetterIllustration } from './LetterIllustration';
import { playClassroomChime } from '../utils/systemSpeech';

interface ListeningGameProps {
  letters: RussianLetter[];
  onSpeakRussian: (text: string, id: string, overrideRate?: number) => void;
  onSpeakItalian: (text: string, id: string) => void;
}

type GameMode = 'letter-sound' | 'picture-match' | 'exception-trap';

interface ExceptionQuizItem {
  promptWord: string;
  stressedWord: string;
  ttsRu: string;
  questionIt: string;
  correctOption: string;
  options: string[];
  explanationIt: string;
}

const EXCEPTION_QUIZ_BANK: ExceptionQuizItem[] = [
  {
    promptWord: 'молоко',
    stressedWord: 'молоко́',
    ttsRu: 'молоко',
    questionIt: 'Come si legge davvero la parola scritta "молоко́"?',
    correctOption: 'ma-la-KÒ (le due О atone diventano A)',
    options: [
      'ma-la-KÒ (le due О atone diventano A)',
      'mo-lo-KÒ (tutte le O restano O)',
      'ma-lo-KÀ (cambia solo l\'ultima)',
      'me-le-KÒ (diventano E)'
    ],
    explanationIt: 'Per la regola dell\'Akan\'e, tutte le О senza accento si leggono A!'
  },
  {
    promptWord: 'что',
    stressedWord: 'что́',
    ttsRu: 'что',
    questionIt: 'Come pronuncia un madrelingua russo la parola "что"?',
    correctOption: 'shto (ЧТ qui suona ШТ)',
    options: [
      'shto (ЧТ qui suona ШТ)',
      'chto (con C di ciao)',
      'kto (come chi)',
      'tshto'
    ],
    explanationIt: 'Eccezione celebre: "что" (cosa) e "чтобы" si leggono sempre con SH (shto)!'
  },
  {
    promptWord: 'сегодня',
    stressedWord: 'сего́дня',
    ttsRu: 'сегодня',
    questionIt: 'Attenzione alla lettera Г in "сего́дня" (oggi): come si legge?',
    correctOption: 'si-VÒD-nya (Г si legge V!)',
    options: [
      'si-VÒD-nya (Г si legge V!)',
      'se-GÒD-nya (Г si legge G dura)',
      'si-KÒD-nya (Г diventa K)',
      'se-DÒN-ya (la Г è muta)'
    ],
    explanationIt: 'Come nei finali -ого/-его, in "сегодня" la Г si pronuncia come una V!'
  },
  {
    promptWord: 'снег',
    stressedWord: 'сне́г',
    ttsRu: 'снег',
    questionIt: 'Che suono senti alla fine della parola "сне́г" (neve)?',
    correctOption: 'snek (la Г finale diventa K)',
    options: [
      'snek (la Г finale diventa K)',
      'sneg (con G dura sonora)',
      'snekh (con H aspirata)',
      'snev (come V)'
    ],
    explanationIt: 'Per l\'assordimento finale, Б→П, В→Ф, Г→К, Д→Т, Ж→Ш, З→С!'
  },
  {
    promptWord: 'жираф',
    stressedWord: 'жира́ф',
    ttsRu: 'жираф',
    questionIt: 'Dopo la Ж sempre dura di "жира́ф", come suona la И?',
    correctOption: 'zhy-RÀF (suona come Ы profonda)',
    options: [
      'zhy-RÀF (suona come Ы profonda)',
      'zhi-RÀF (suona come I italiana sorridente)',
      'shi-RÀF (la Ж diventa Ш)',
      'zhe-RÀF'
    ],
    explanationIt: 'Ж, Ш e Ц sono sempre dure: anche se si scrive И, si pronuncia Ы!'
  },
  {
    promptWord: 'солнце',
    stressedWord: 'со́лнце',
    ttsRu: 'солнце',
    questionIt: 'Quale lettera NON si pronuncia in "со́лнце" (sole)?',
    correctOption: 'La Л è muta → SÒN-tse',
    options: [
      'La Л è muta → SÒN-tse',
      'La Н è muta → SÒL-tse',
      'La Ц è muta → SÒL-ne',
      'Si pronunciano tutte → SÒLN-tse'
    ],
    explanationIt: 'Nel gruppo consonantico ЛНЦ la Л sparisce e si legge semplicemente SÒN-tse.'
  },
  {
    promptWord: 'конечно',
    stressedWord: 'коне́чно',
    ttsRu: 'конечно',
    questionIt: 'Come si legge la parola quotidiana "коне́чно" (certamente)?',
    correctOption: 'ka-NÈSH-na (ЧН → ШН e О → A)',
    options: [
      'ka-NÈSH-na (ЧН → ШН e О → A)',
      'ko-NÈCH-no',
      'ka-NÈCH-na',
      'ko-NÈSH-no'
    ],
    explanationIt: 'In "конечно" e "скучно" il gruppo ЧН si legge SHN, e le О atone diventano A!'
  },
  {
    promptWord: 'хлеб',
    stressedWord: 'хле́б',
    ttsRu: 'хлеб',
    questionIt: 'Come si pronuncia davvero "хле́б" (pane)?',
    correctOption: 'khlep (Х = H aspirata, Б finale = P)',
    options: [
      'khlep (Х = H aspirata, Б finale = P)',
      'ksleb (Х = ks, Б = B)',
      'khleb (con B sonora finale)',
      'klep'
    ],
    explanationIt: 'Х è una H aspirata dalla gola (mai ks!) e la Б finale si assorda in P.'
  }
];

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const ListeningGame: React.FC<ListeningGameProps> = ({
  letters,
  onSpeakRussian,
}) => {
  const [mode, setMode] = useState<GameMode>('letter-sound');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [streak, setStreak] = useState(0);

  const [targetLetter, setTargetLetter] = useState<RussianLetter>(letters[0]);
  const [letterOptions, setLetterOptions] = useState<RussianLetter[]>([]);

  const [excIndex, setExcIndex] = useState(0);
  const [excOptions, setExcOptions] = useState<string[]>([]);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const playableLetters = useMemo(
    () => letters.filter((l) => l.category !== 'sign'),
    [letters]
  );

  const generateLetterRound = useCallback(
    (autoSpeak = false) => {
      const chosen =
        playableLetters[Math.floor(Math.random() * playableLetters.length)];
      const distractors = shuffleArray(
        playableLetters.filter((l) => l.uppercase !== chosen.uppercase)
      ).slice(0, 3);
      const allOpts = shuffleArray([chosen, ...distractors]);

      setTargetLetter(chosen);
      setLetterOptions(allOpts);
      setSelectedAnswer(null);
      setIsCorrect(null);

      if (autoSpeak) {
        const textToSpeak =
          mode === 'picture-match' ? chosen.mnemonic.ttsRu : chosen.nameTtsRu;
        onSpeakRussian(textToSpeak, 'game-prompt');
      }
    },
    [mode, playableLetters, onSpeakRussian]
  );

  const generateExceptionRound = useCallback(
    (nextIdx: number, autoSpeak = false) => {
      const item = EXCEPTION_QUIZ_BANK[nextIdx % EXCEPTION_QUIZ_BANK.length];
      setExcIndex(nextIdx % EXCEPTION_QUIZ_BANK.length);
      setExcOptions(shuffleArray(item.options));
      setSelectedAnswer(null);
      setIsCorrect(null);

      if (autoSpeak) {
        onSpeakRussian(item.ttsRu, 'game-prompt');
      }
    },
    [onSpeakRussian]
  );

  useEffect(() => {
    if (mode === 'exception-trap') {
      generateExceptionRound(0, false);
    } else {
      generateLetterRound(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const handlePlayPrompt = (slow = false) => {
    if (mode === 'exception-trap') {
      const item = EXCEPTION_QUIZ_BANK[excIndex];
      onSpeakRussian(item.ttsRu, 'game-prompt', slow ? 0.65 : undefined);
    } else if (mode === 'picture-match') {
      onSpeakRussian(
        targetLetter.mnemonic.ttsRu,
        'game-prompt',
        slow ? 0.65 : undefined
      );
    } else {
      onSpeakRussian(
        targetLetter.nameTtsRu,
        'game-prompt',
        slow ? 0.65 : undefined
      );
    }
  };

  const handleAnswerLetter = (picked: RussianLetter) => {
    if (selectedAnswer !== null) return;
    const right = picked.uppercase === targetLetter.uppercase;
    setSelectedAnswer(picked.uppercase);
    setIsCorrect(right);
    setAttempts((a) => a + 1);
    if (right) {
      setScore((s) => s + 1);
      setStreak((st) => st + 1);
      playClassroomChime('success');
    } else {
      setStreak(0);
      playClassroomChime('tryAgain');
    }
  };

  const handleAnswerException = (pickedOption: string) => {
    if (selectedAnswer !== null) return;
    const item = EXCEPTION_QUIZ_BANK[excIndex];
    const right = pickedOption === item.correctOption;
    setSelectedAnswer(pickedOption);
    setIsCorrect(right);
    setAttempts((a) => a + 1);
    if (right) {
      setScore((s) => s + 1);
      setStreak((st) => st + 1);
      playClassroomChime('success');
    } else {
      setStreak(0);
      playClassroomChime('tryAgain');
    }
  };

  const handleNextRound = () => {
    if (mode === 'exception-trap') {
      generateExceptionRound(excIndex + 1, true);
    } else {
      generateLetterRound(true);
    }
  };

  const currentExceptionItem = EXCEPTION_QUIZ_BANK[excIndex];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header scuro del Gioco */}
      <div className="bg-[#172554] text-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold">
            Gioco di Ascolto e Riconoscimento
          </h2>
          <p className="text-sm text-[#BFDBFE] mt-1">
            Ascolta la voce russa del sistema e metti alla prova l'orecchio su lettere, immagini e trappole fonetiche!
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm tabular-nums shrink-0 bg-[#0F172A] px-4 py-2.5 rounded-xl border border-[#334155]">
          <div>
            <span className="text-xs text-[#94A3B8] block">Punteggio</span>
            <strong className="font-display text-xl font-bold text-white">
              {score} / {attempts}
            </strong>
          </div>
          <div className="h-8 w-px bg-[#334155]" />
          <div>
            <span className="text-xs text-[#94A3B8] block">Serie</span>
            <strong className="font-display text-xl font-bold text-[#FCD34D] inline-flex items-center gap-1">
              <Award className="w-4 h-4" />
              {streak}
            </strong>
          </div>
        </div>
      </div>

      {/* Modalità */}
      <div className="flex flex-wrap items-center gap-1 p-1 bg-[#D6CCB8] rounded-xl w-fit">
        {[
          { id: 'letter-sound', label: '1. Riconosci la Lettera' },
          { id: 'picture-match', label: '2. Caccia all\'Immagine (Bambini)' },
          { id: 'exception-trap', label: '3. Sfida delle Eccezioni' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setMode(tab.id as GameMode)}
            className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === tab.id
                ? 'bg-[#16332B] text-white shadow-xs'
                : 'text-[#292524] hover:text-[#1C1917]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Lavagna del Quiz */}
      <div className="bg-white border-2 border-[#C9BFA9] rounded-2xl overflow-hidden shadow-xs">
        <div className="bg-[#16332B] text-white p-6 sm:p-8 flex flex-col items-center text-center">
          {mode === 'exception-trap' ? (
            <>
              <span className="text-xs font-bold text-[#FCD34D]">
                Ascolta e scegli la pronuncia corretta
              </span>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-2">
                {currentExceptionItem.stressedWord}
              </div>
              <p className="text-base font-semibold text-[#E7E5E4] mt-2">
                {currentExceptionItem.questionIt}
              </p>
            </>
          ) : (
            <span className="text-sm font-bold text-[#D1FAE5]">
              {mode === 'picture-match'
                ? 'Premi Ascolta e trova l\'immagine della parola!'
                : 'Premi Ascolta e tocca la lettera russa corretta!'}
            </span>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handlePlayPrompt(false)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-[#F59E0B] text-[#1C1917] hover:bg-[#FBBF24] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Volume2 className="w-5 h-5" />
              <span>Ascolta la pronuncia</span>
            </button>

            <button
              type="button"
              onClick={() => handlePlayPrompt(true)}
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-bold bg-[#214B3F] border border-[#346C5C] text-white hover:bg-[#2A5E4F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Riascolta lento</span>
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* Opzioni */}
          {mode === 'exception-trap' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {excOptions.map((opt) => {
                const isPicked = selectedAnswer === opt;
                const isTrueOption = opt === currentExceptionItem.correctOption;
                let cardStyle =
                  'bg-[#F7F3EA] border-[#C9BFA9] hover:border-[#1D4ED8] text-[#1C1917]';

                if (selectedAnswer !== null) {
                  if (isTrueOption) {
                    cardStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950';
                  } else if (isPicked) {
                    cardStyle = 'bg-red-50 border-red-500 text-red-950';
                  } else {
                    cardStyle = 'bg-[#F7F3EA] border-[#D6CCB8] opacity-60';
                  }
                }

                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleAnswerException(opt)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 rounded-xl border-2 text-left text-sm font-bold transition-all cursor-pointer disabled:cursor-default ${cardStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {letterOptions.map((opt) => {
                const isPicked = selectedAnswer === opt.uppercase;
                const isTrueOption = opt.uppercase === targetLetter.uppercase;
                let cardStyle =
                  'bg-[#F7F3EA] border-[#C9BFA9] hover:border-[#1D4ED8]';

                if (selectedAnswer !== null) {
                  if (isTrueOption) {
                    cardStyle =
                      'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-200';
                  } else if (isPicked) {
                    cardStyle = 'bg-red-50 border-red-500';
                  } else {
                    cardStyle = 'bg-[#F7F3EA] border-[#D6CCB8] opacity-55';
                  }
                }

                return (
                  <button
                    key={opt.uppercase}
                    type="button"
                    onClick={() => handleAnswerLetter(opt)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center text-center transition-all cursor-pointer disabled:cursor-default ${cardStyle}`}
                  >
                    {mode === 'picture-match' ? (
                      <>
                        <LetterIllustration
                          uppercase={opt.uppercase}
                          className="w-24 h-24"
                        />
                        <span className="font-display text-lg font-bold text-[#1C1917] mt-2">
                          {opt.mnemonic.wordIt}
                        </span>
                        {selectedAnswer !== null && (
                          <span className="font-mono text-xs font-bold text-[#1D4ED8] mt-0.5">
                            {opt.uppercase} · {opt.mnemonic.wordRu}
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <span
                          className={`font-display text-5xl font-extrabold ${
                            opt.category === 'vowel'
                              ? 'text-[#DC2626]'
                              : 'text-[#1D4ED8]'
                          }`}
                        >
                          {opt.uppercase} {opt.lowercase}
                        </span>
                        {selectedAnswer !== null && (
                          <span className="text-xs font-bold text-[#44403C] mt-2">
                            {opt.namePhoneticIt} ({opt.mnemonic.wordIt})
                          </span>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Feedback della Maestra */}
          {selectedAnswer !== null && (
            <div
              className={`mt-6 rounded-xl p-4 border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isCorrect
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-950'
                  : 'bg-[#FEF3C7] border-[#D97706] text-[#78350F]'
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                )}
                <div className="text-sm">
                  <p className="font-bold">
                    {isCorrect
                      ? 'Bravissimo! Orecchio perfetto!'
                      : mode === 'exception-trap'
                        ? `Quasi! La risposta esatta era: ${currentExceptionItem.correctOption}`
                        : `Quasi! La lettera giusta era ${targetLetter.uppercase} (${targetLetter.mnemonic.wordStressed} — ${targetLetter.mnemonic.wordIt}).`}
                  </p>
                  <p className="text-xs mt-1 font-medium">
                    {mode === 'exception-trap'
                      ? currentExceptionItem.explanationIt
                      : targetLetter.soundIt}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNextRound}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#172554] text-white hover:bg-[#1D4ED8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Prossima domanda</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#E0D8C8] flex items-center justify-between text-xs text-[#57534E]">
            <span>Audio generato direttamente dalla voce di sistema (senza AI).</span>
            <button
              type="button"
              onClick={() => {
                setScore(0);
                setAttempts(0);
                setStreak(0);
                handleNextRound();
              }}
              className="inline-flex items-center gap-1 font-bold text-[#1C1917] hover:text-[#1D4ED8] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Azzera punteggio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import {
  Volume2,
  Square,
  Play,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  BookOpen,
  Sparkles,
  MessageCircle,
  Gauge,
} from 'lucide-react';
import { RussianLetter } from '../types/alphabet';
import { LetterIllustration } from './LetterIllustration';
import { CursivePreview } from './CursivePreview';

interface TeacherLessonStageProps {
  letter: RussianLetter;
  totalLetters: number;
  isLearned: boolean;
  onToggleLearned: (uppercase: string) => void;
  onPrev: () => void;
  onNext: () => void;
  activeSpeechId: string | null;
  isSequencePlaying: boolean;
  slowMode: boolean;
  onToggleSlowMode: () => void;
  onSpeakRussian: (text: string, id: string, overrideRate?: number) => void;
  onSpeakItalian: (text: string, id: string) => void;
  onPlayFullLesson: (letter: RussianLetter) => void;
  onStopSpeech: () => void;
}

export const TeacherLessonStage: React.FC<TeacherLessonStageProps> = ({
  letter,
  totalLetters,
  isLearned,
  onToggleLearned,
  onPrev,
  onNext,
  activeSpeechId,
  isSequencePlaying,
  slowMode,
  onToggleSlowMode,
  onSpeakRussian,
  onSpeakItalian,
  onPlayFullLesson,
  onStopSpeech,
}) => {
  const chalkStyles = {
    vowel: {
      chalkColor: 'text-[#FCA5A5]',
      badgeText: 'text-[#FCA5A5]',
      categoryName: 'Vocale',
    },
    consonant: {
      chalkColor: 'text-[#93C5FD]',
      badgeText: 'text-[#93C5FD]',
      categoryName: 'Consonante',
    },
    sign: {
      chalkColor: 'text-[#FCD34D]',
      badgeText: 'text-[#FCD34D]',
      categoryName: 'Segno muto',
    },
  }[letter.category];

  return (
    <div className="space-y-6">
      {/* Toolbar di Controllo Voce & Lezione */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F4EFE4] border border-[#C9BFA9] rounded-xl px-4 py-3">
        <div className="flex flex-wrap items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={() =>
              isSequencePlaying ? onStopSpeech() : onPlayFullLesson(letter)
            }
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              isSequencePlaying
                ? 'bg-[#DC2626] text-white hover:bg-red-700'
                : 'bg-[#1D4ED8] text-white hover:bg-blue-800'
            }`}
          >
            {isSequencePlaying ? (
              <>
                <Square className="w-4 h-4 fill-current" />
                <span>Ferma la Maestra</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Ascolta Lezione Guidata</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onToggleSlowMode}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              slowMode
                ? 'bg-[#FEF3C7] border-[#D97706] text-[#78350F]'
                : 'bg-white border-[#C9BFA9] text-[#292524] hover:bg-[#FAF6EE]'
            }`}
            title="Rallenta la pronuncia per ascoltare meglio ogni sillaba"
          >
            <Gauge className="w-4 h-4" />
            <span>{slowMode ? 'Velocità: Lenta (Bambini)' : 'Velocità: Normale'}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => onToggleLearned(letter.uppercase)}
          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            isLearned
              ? 'bg-[#059669] border-[#047857] text-white'
              : 'bg-white border-[#C9BFA9] text-[#292524] hover:bg-[#FAF6EE]'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isLearned ? 'Lettera imparata' : 'Segna imparata'}</span>
        </button>
      </div>

      {/* SETTORE 1: LAVAGNA SCURA DELLA LETTERA + CARTA VISIVA */}
      <section className="bg-white border border-[#C9BFA9] rounded-2xl overflow-hidden shadow-xs">
        <div className="bg-[#EFE9DC] border-b border-[#D6CCB8] px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#44403C]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="tabular-nums text-[#1C1917]">
              Lezione {letter.index} di {totalLetters}
            </span>
            <span aria-hidden="true">·</span>
            <span>{chalkStyles.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>{letter.hardnessLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[#1D4ED8]">IPA {letter.ipa}</span>
          </div>
          {letter.isFalseFriend && (
            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#B45309]">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Falso amico</span>
            </span>
          )}
        </div>

        <div className="p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Lavagna Verde Scura con Gessetti Colorati */}
          <div className="lg:col-span-5">
            <div
              className={`h-full rounded-2xl bg-[#16332B] border-4 border-[#9C6F44] p-6 flex flex-col items-center justify-center text-center transition-all ${
                activeSpeechId === 'letter' || activeSpeechId === 'name'
                  ? 'ring-4 ring-amber-400'
                  : ''
              }`}
            >
              <div className="flex items-baseline justify-center gap-4 select-none">
                <span
                  className={`font-display text-7xl sm:text-8xl font-extrabold leading-none ${chalkStyles.chalkColor}`}
                >
                  {letter.uppercase}
                </span>
                <span
                  className={`font-display text-6xl sm:text-7xl font-bold leading-none ${chalkStyles.chalkColor} opacity-90`}
                >
                  {letter.lowercase}
                </span>
              </div>

              <p className="mt-4 text-sm text-[#E7E5E4]">
                Nome:{' '}
                <strong className="font-bold text-white">
                  {letter.nameRu}
                </strong>{' '}
                <span className={`font-mono text-xs ${chalkStyles.badgeText}`}>
                  ({letter.namePhoneticIt})
                </span>
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => onSpeakRussian(letter.soundTtsRu, 'letter')}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeSpeechId === 'letter'
                      ? 'bg-[#F59E0B] text-[#1C1917]'
                      : 'bg-white text-[#1C1917] hover:bg-[#FEF3C7]'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Ascolta suono</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSpeakRussian(letter.nameTtsRu, 'name')}
                  className={`inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeSpeechId === 'name'
                      ? 'bg-[#F59E0B] text-[#1C1917]'
                      : 'bg-[#214B3F] text-white border border-[#346C5C] hover:bg-[#2A5E4F]'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Nome</span>
                </button>
              </div>
            </div>
          </div>

          {/* Carta Illustrata Calda per Memoria Visiva */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div
              className={`flex-1 flex flex-col sm:flex-row items-center gap-5 bg-[#FFFDF5] rounded-2xl border border-[#D6CCB8] p-5 transition-all ${
                activeSpeechId === 'mnemonic' ? 'ring-2 ring-[#1D4ED8]' : ''
              }`}
            >
              <div className="shrink-0 bg-white rounded-2xl p-2 border border-[#D6CCB8] shadow-xs">
                <LetterIllustration
                  uppercase={letter.uppercase}
                  className="w-28 h-28 sm:w-32 sm:h-32"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <span className="text-xs font-extrabold text-[#B45309]">
                  Parola chiave visiva
                </span>
                <div className="mt-1 flex flex-wrap items-baseline justify-center sm:justify-start gap-2.5">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#1C1917]">
                    {letter.mnemonic.wordStressed}
                  </span>
                  <span className="font-mono text-sm font-bold text-[#1D4ED8]">
                    [{letter.mnemonic.phoneticIt}]
                  </span>
                </div>
                <p className="text-base font-bold text-[#292524] mt-0.5">
                  = {letter.mnemonic.wordIt}
                </p>
                <p className="mt-2 text-sm text-[#44403C] leading-relaxed">
                  {letter.mnemonic.visualTrick}
                </p>

                <div className="mt-3.5 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      onSpeakRussian(letter.mnemonic.ttsRu, 'mnemonic')
                    }
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeSpeechId === 'mnemonic'
                        ? 'bg-[#1D4ED8] text-white'
                        : 'bg-[#172554] text-white hover:bg-[#1D4ED8]'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Ascolta "{letter.mnemonic.wordRu}"</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onSpeakRussian(letter.mnemonic.ttsRu, 'mnemonic-slow', 0.65)
                    }
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold bg-white border border-[#C9BFA9] text-[#292524] hover:border-[#1D4ED8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Lento</span>
                  </button>
                </div>
              </div>
            </div>

            {letter.isFalseFriend && letter.falseFriendWarning && (
              <div className="bg-[#FEF3C7] border border-[#D97706] rounded-xl px-4 py-3 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-[#78350F] leading-snug">
                  {letter.falseFriendWarning}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SETTORE 2: LA SPIEGAZIONE DELLA MAESTRA */}
      <section
        className={`bg-white border border-[#C9BFA9] rounded-2xl overflow-hidden transition-all ${
          activeSpeechId === 'intro' ? 'ring-2 ring-[#1D4ED8]' : ''
        }`}
      >
        <div className="bg-[#16332B] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <MessageCircle className="w-5 h-5 text-[#FCD34D]" />
            <h2 className="font-display text-lg sm:text-xl font-bold">
              La spiegazione della Maestra
            </h2>
          </div>

          <button
            type="button"
            onClick={() =>
              onSpeakItalian(
                `${letter.teacherLesson.intro} ${letter.teacherLesson.mouthTip}`,
                'intro'
              )
            }
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeSpeechId === 'intro'
                ? 'bg-[#F59E0B] text-[#1C1917]'
                : 'bg-white text-[#16332B] hover:bg-[#FEF3C7]'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Ascolta spiegazione</span>
          </button>
        </div>

        <div className="p-6 sm:p-7 space-y-5">
          <p className="text-[15px] sm:text-base font-medium text-[#1C1917] leading-relaxed">
            {letter.teacherLesson.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#F7F3EA] border border-[#D6CCB8] p-4">
              <h3 className="text-xs font-extrabold text-[#16332B] mb-1.5">
                Come mettere bocca e lingua
              </h3>
              <p className="text-sm text-[#292524] leading-relaxed">
                {letter.teacherLesson.mouthTip}
              </p>
            </div>
            <div className="rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] p-4">
              <h3 className="text-xs font-extrabold text-[#1E3A8A] mb-1.5">
                Paragone con l'italiano
              </h3>
              <p className="text-sm text-[#1E293B] leading-relaxed">
                <strong className="text-[#172554]">{letter.soundIt}.</strong>{' '}
                {letter.teacherLesson.comparisonIt}
              </p>
            </div>
          </div>

          <CursivePreview letter={letter} />
        </div>
      </section>

      {/* SETTORE 3: SILLABE ED ESEMPI PRATICI */}
      <section className="bg-white border border-[#C9BFA9] rounded-2xl overflow-hidden">
        <div className="bg-[#1E3A8A] text-white px-6 py-4 flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-[#93C5FD]" />
          <h2 className="font-display text-lg sm:text-xl font-bold">
            Sillabe ed esempi con lettura ad alta voce
          </h2>
        </div>

        <div className="p-6 sm:p-7">
          {/* Sillabe del Sillabario a Tavolette */}
          <div className="mb-6">
            <p className="text-xs font-bold text-[#57534E] mb-3">
              Tocca le sillabe per allenare l'orecchio (come sul sillabario russo)
            </p>
            <div className="flex flex-wrap gap-2.5">
              {letter.syllables.map((item) => {
                const id = `syl-${item.syllable}`;
                const isActive = activeSpeechId === id;
                return (
                  <button
                    key={item.syllable}
                    type="button"
                    onClick={() => onSpeakRussian(item.ttsRu, id)}
                    className={`group flex flex-col items-start px-3.5 py-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white'
                        : item.isTrap
                          ? 'bg-[#FEF3C7] border-[#D97706] hover:border-[#B45309] text-[#1C1917] shadow-[0_2px_0_#D97706]'
                          : 'bg-[#F4EFE4] border-[#C9BFA9] hover:border-[#1D4ED8] text-[#1C1917] shadow-[0_2px_0_#C9BFA9]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg font-extrabold">
                        {item.syllable}
                      </span>
                      <Volume2
                        className={`w-3.5 h-3.5 ${
                          isActive
                            ? 'text-white'
                            : 'text-[#57534E] group-hover:text-[#1D4ED8]'
                        }`}
                      />
                    </div>
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isActive ? 'text-blue-100' : 'text-[#44403C]'
                      }`}
                    >
                      {item.phoneticIt}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3 Parole d'esempio con righe alternate */}
          <div className="rounded-xl border border-[#D6CCB8] overflow-hidden divide-y divide-[#D6CCB8]">
            {letter.examples.map((ex, idx) => {
              const id = `example-${idx}`;
              const isActive = activeSpeechId === id;
              return (
                <div
                  key={ex.displayRu}
                  className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                    isActive
                      ? 'bg-blue-50'
                      : idx % 2 === 0
                        ? 'bg-white'
                        : 'bg-[#F7F3EA]'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-2xl font-bold text-[#1C1917]">
                        {ex.displayRu}
                      </span>
                      <span className="font-mono text-sm font-bold text-[#1D4ED8]">
                        [{ex.phoneticIt}]
                      </span>
                      <span className="text-sm font-bold text-[#292524]">
                        = {ex.meaningIt}
                      </span>
                    </div>
                    {ex.noteIt && (
                      <p className="text-xs font-semibold text-[#57534E] mt-1">
                        {ex.noteIt}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => onSpeakRussian(ex.ttsRu, id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#1D4ED8] text-white'
                          : 'bg-[#172554] text-white hover:bg-[#1D4ED8]'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Ascolta parola</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onSpeakRussian(ex.ttsRu, `${id}-slow`, 0.65)}
                      className="px-3 py-2 rounded-lg text-xs font-bold bg-white border border-[#C9BFA9] text-[#292524] hover:border-[#1D4ED8] whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Lento
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mini-Frase completa su barra Blu Notte ad alto contrasto */}
          <div
            className={`mt-5 rounded-xl bg-[#172554] text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
              activeSpeechId === 'phrase' ? 'ring-4 ring-amber-400' : ''
            }`}
          >
            <div>
              <span className="text-xs font-bold text-[#93C5FD]">
                Frase d'esempio completa
              </span>
              <p className="font-display text-lg sm:text-xl font-bold text-white mt-1">
                {letter.miniPhrase.displayRu}
              </p>
              <p className="font-mono text-xs text-[#FCD34D] mt-1">
                [{letter.miniPhrase.phoneticIt}]
              </p>
              <p className="text-sm text-[#E2E8F0] mt-0.5">
                "{letter.miniPhrase.meaningIt}"
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSpeakRussian(letter.miniPhrase.ttsRu, 'phrase')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeSpeechId === 'phrase'
                  ? 'bg-[#F59E0B] text-[#1C1917]'
                  : 'bg-white text-[#172554] hover:bg-[#FEF3C7]'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>Leggi la frase</span>
            </button>
          </div>
        </div>
      </section>

      {/* SETTORE 4: LAVAGNA DELLE ECCEZIONI (Settore Ambra ad alta evidenza) */}
      <section className="bg-[#FFFBEB] border-2 border-[#D97706] rounded-2xl overflow-hidden">
        <div className="bg-[#B45309] text-white px-6 py-4 flex items-center gap-2.5">
          <Sparkles className="w-5 h-5 text-[#FDE68A]" />
          <h2 className="font-display text-lg sm:text-xl font-bold">
            Attenzione alle eccezioni di "{letter.uppercase}"
          </h2>
        </div>

        <div className="p-6 sm:p-7">
          <p className="text-sm font-medium text-[#78350F] mb-5">
            Regole speciali, cambi di suono e trappole ortografiche legate a questa lettera, con esempi da ascoltare subito.
          </p>

          <div className="space-y-5">
            {letter.exceptions.map((exc, excIdx) => (
              <div
                key={exc.title}
                className="rounded-xl bg-white border border-[#E5C185] p-5 shadow-xs"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#1C1917]">
                      {exc.title}
                    </h3>
                    <p className="text-xs font-extrabold text-[#B45309] mt-0.5">
                      {exc.ruleSummary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onSpeakItalian(
                        `${exc.title}. ${exc.explanationIt}`,
                        `exc-it-${excIdx}`
                      )
                    }
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeSpeechId === `exc-it-${excIdx}`
                        ? 'bg-[#B45309] text-white'
                        : 'bg-[#FEF3C7] border border-[#D97706] text-[#78350F] hover:bg-[#FDE68A]'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Ascolta regola</span>
                  </button>
                </div>

                <p className="text-sm text-[#292524] leading-relaxed mt-2.5">
                  {exc.explanationIt}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exc.examples.map((ex, exIdx) => {
                    const id = `exc-${excIdx}-${exIdx}`;
                    const isActive = activeSpeechId === id;
                    return (
                      <button
                        key={ex.written}
                        type="button"
                        onClick={() => onSpeakRussian(ex.ttsRu, id)}
                        className={`flex items-center justify-between gap-3 p-3 rounded-lg border text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white'
                            : 'bg-[#FAF6EE] border-[#D6CCB8] hover:border-[#1D4ED8]'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="font-display text-lg font-bold">
                              {ex.stressed}
                            </span>
                            <span
                              className={`font-mono text-xs font-bold ${
                                isActive ? 'text-blue-100' : 'text-[#1D4ED8]'
                              }`}
                            >
                              → {ex.readAs}
                            </span>
                          </div>
                          <p
                            className={`text-xs font-medium mt-0.5 truncate ${
                              isActive ? 'text-blue-100' : 'text-[#44403C]'
                            }`}
                          >
                            {ex.meaningIt}
                          </p>
                        </div>
                        <Volume2
                          className={`w-4 h-4 shrink-0 ${
                            isActive ? 'text-white' : 'text-[#57534E]'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigazione Precedente / Successiva */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={letter.index === 1}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-white border border-[#C9BFA9] text-[#1C1917] hover:bg-[#F4EFE4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Lettera precedente</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={letter.index === totalLetters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#16332B] text-white hover:bg-[#1E473C] disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>Prossima lettera</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

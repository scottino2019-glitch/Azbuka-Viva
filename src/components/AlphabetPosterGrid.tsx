import React, { useState } from 'react';
import { Volume2, BookOpen, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { RussianLetter } from '../types/alphabet';
import { LetterIllustration } from './LetterIllustration';

interface AlphabetPosterGridProps {
  letters: RussianLetter[];
  learnedLetters: string[];
  activeSpeechId: string | null;
  onSelectLetterForLesson: (index: number) => void;
  onSpeakRussian: (text: string, id: string) => void;
}

type PosterFilter = 'all' | 'vowel' | 'consonant' | 'sign' | 'false-friend';

export const AlphabetPosterGrid: React.FC<AlphabetPosterGridProps> = ({
  letters,
  learnedLetters,
  activeSpeechId,
  onSelectLetterForLesson,
  onSpeakRussian,
}) => {
  const [filter, setFilter] = useState<PosterFilter>('all');

  const filtered = letters.filter((l) => {
    if (filter === 'all') return true;
    if (filter === 'false-friend') return l.isFalseFriend;
    return l.category === filter;
  });

  return (
    <div className="space-y-8">
      {/* Introduzione alle 3 Famiglie con contrasto netto */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <button
          type="button"
          onClick={() => setFilter('vowel')}
          className="group bg-[#FFF5F5] border-2 border-[#FCA5A5] rounded-2xl overflow-hidden text-left hover:border-[#DC2626] transition-colors cursor-pointer flex flex-col shadow-xs"
        >
          <div className="relative aspect-16/9 w-full bg-red-100 overflow-hidden">
            <img
              src="/src/assets/images/family_vowels_garden_1795459280526.jpg"
              alt="Illustrazione del giardino delle vocali russe con anguria, nuvola e anatra"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="p-4 flex-1">
            <span className="text-xs font-extrabold text-[#B91C1C]">
              10 Vocali (Rosso nel sillabario)
            </span>
            <h3 className="font-display text-lg font-bold text-[#1C1917] mt-0.5">
              Le Vocali Cantanti
            </h3>
            <p className="text-xs font-medium text-[#44403C] mt-1 leading-relaxed">
              5 dure (А, О, У, Ы, Э) e 5 dolci (Я, Ё, Ю, И, Е) che addolciscono le consonanti prima.
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setFilter('consonant')}
          className="group bg-[#EFF6FF] border-2 border-[#93C5FD] rounded-2xl overflow-hidden text-left hover:border-[#1D4ED8] transition-colors cursor-pointer flex flex-col shadow-xs"
        >
          <div className="relative aspect-16/9 w-full bg-blue-100 overflow-hidden">
            <img
              src="/src/assets/images/family_consonants_friends_1795459281746.jpg"
              alt="Illustrazione del villaggio delle consonanti con giraffa, riccio, casa e gatto"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="p-4 flex-1">
            <span className="text-xs font-extrabold text-[#1D4ED8]">
              21 Consonanti (Blu nel sillabario)
            </span>
            <h3 className="font-display text-lg font-bold text-[#1C1917] mt-0.5">
              Le Consonanti e i Falsi Amici
            </h3>
            <p className="text-xs font-medium text-[#44403C] mt-1 leading-relaxed">
              Suoni amichevoli, ronzii come Ж e З, e 7 lettere che sembrano latine ma cambiano suono!
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setFilter('sign')}
          className="group bg-[#FFFBEB] border-2 border-[#FCD34D] rounded-2xl overflow-hidden text-left hover:border-[#B45309] transition-colors cursor-pointer flex flex-col shadow-xs"
        >
          <div className="relative aspect-16/9 w-full bg-amber-100 overflow-hidden">
            <img
              src="/src/assets/images/family_special_signs_1795459282091.jpg"
              alt="Illustrazione dei suoni speciali e segni muti con teiera, topolino, formaggio e trottola"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="p-4 flex-1">
            <span className="text-xs font-extrabold text-[#B45309]">
              2 Segni Muti (Ъ e Ь)
            </span>
            <h3 className="font-display text-lg font-bold text-[#1C1917] mt-0.5">
              I Segni Segreti Silenziosi
            </h3>
            <p className="text-xs font-medium text-[#44403C] mt-1 leading-relaxed">
              Non hanno voce propria, ma separano o addolciscono le parole cambiando il significato!
            </p>
          </div>
        </button>
      </section>

      {/* Filtri Tabellone su barra scura */}
      <div className="bg-[#16332B] text-white rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold">
            Sillabario Illustrato — Tutte le 33 Lettere
          </h2>
          <p className="text-sm text-[#D1FAE5] mt-0.5">
            Tocca l'altoparlante per ascoltare subito lettera e parola chiave, oppure apri la lezione completa.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1 p-1 bg-[#0F241E] rounded-xl">
          {[
            { id: 'all', label: 'Tutte (33)' },
            { id: 'vowel', label: 'Vocali (10)' },
            { id: 'consonant', label: 'Consonanti (21)' },
            { id: 'sign', label: 'Segni (2)' },
            { id: 'false-friend', label: 'Falsi amici (7)' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as PosterFilter)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#F59E0B] text-[#1C1917]'
                  : 'text-[#E7E5E4] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Griglia delle 33 Carte Illustrate con bordo e testata colorata */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((letter) => {
          const isLearned = learnedLetters.includes(letter.uppercase);
          const speechId = `poster-${letter.uppercase}`;
          const isSpeaking = activeSpeechId === speechId;

          const theme =
            letter.category === 'vowel'
              ? {
                  headerBg: 'bg-[#FEE2E2]',
                  textColor: 'text-[#B91C1C]',
                  border: 'border-[#E5A9A9]',
                }
              : letter.category === 'consonant'
                ? {
                    headerBg: 'bg-[#DBEAFE]',
                    textColor: 'text-[#1D4ED8]',
                    border: 'border-[#A5C3EC]',
                  }
                : {
                    headerBg: 'bg-[#FEF3C7]',
                    textColor: 'text-[#B45309]',
                    border: 'border-[#E5C185]',
                  };

          return (
            <div
              key={letter.uppercase}
              className={`bg-white border-2 rounded-2xl overflow-hidden flex flex-col justify-between transition-all ${
                isSpeaking
                  ? 'border-[#1D4ED8] ring-2 ring-blue-300'
                  : `${theme.border} hover:border-[#1C1917]`
              }`}
            >
              <div>
                <div
                  className={`${theme.headerBg} px-4 py-2 flex items-center justify-between gap-2 text-xs font-bold`}
                >
                  <span className={`tabular-nums ${theme.textColor}`}>
                    {letter.index}.{' '}
                    {letter.category === 'vowel'
                      ? 'Vocale'
                      : letter.category === 'consonant'
                        ? 'Consonante'
                        : 'Segno muto'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {letter.isFalseFriend && (
                      <AlertTriangle
                        className="w-3.5 h-3.5 text-[#B45309]"
                        aria-label="Falso amico"
                      />
                    )}
                    {isLearned && (
                      <CheckCircle2
                        className="w-4 h-4 text-[#059669]"
                        aria-label="Lettera imparata"
                      />
                    )}
                  </div>
                </div>

                <div className="p-4 flex items-center gap-3">
                  <LetterIllustration
                    uppercase={letter.uppercase}
                    className="w-20 h-20 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-display text-4xl font-extrabold ${theme.textColor}`}
                      >
                        {letter.uppercase}
                      </span>
                      <span
                        className={`font-display text-3xl font-bold ${theme.textColor} opacity-80`}
                      >
                        {letter.lowercase}
                      </span>
                    </div>
                    <p className="font-display text-base font-bold text-[#1C1917] mt-1 truncate">
                      {letter.mnemonic.wordStressed}
                    </p>
                    <p className="text-xs font-semibold text-[#44403C]">
                      {letter.mnemonic.wordIt} ·{' '}
                      <span className="font-mono text-[#1D4ED8]">
                        {letter.mnemonic.phoneticIt}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-[#F7F3EA] border-t border-[#E0D8C8] flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() =>
                    onSpeakRussian(
                      `${letter.soundTtsRu}. ${letter.mnemonic.ttsRu}`,
                      speechId
                    )
                  }
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSpeaking
                      ? 'bg-[#1D4ED8] text-white'
                      : 'bg-[#172554] text-white hover:bg-[#1D4ED8]'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Ascolta</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectLetterForLesson(letter.index - 1)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-[#C9BFA9] text-[#1C1917] hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Apri lezione</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

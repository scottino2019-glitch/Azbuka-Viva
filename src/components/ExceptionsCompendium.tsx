import React from 'react';
import { Volume2, AlertCircle } from 'lucide-react';
import { EXCEPTIONS_COMPENDIUM } from '../data/exceptionsGuide';

interface ExceptionsCompendiumProps {
  activeSpeechId: string | null;
  onSpeakRussian: (text: string, id: string) => void;
  onSpeakItalian: (text: string, id: string) => void;
  onJumpToLetter: (uppercase: string) => void;
}

const FAMILY_HEADER_THEMES = [
  'bg-[#B45309] text-white',
  'bg-[#1E3A8A] text-white',
  'bg-[#991B1B] text-white',
  'bg-[#16332B] text-white',
  'bg-[#7C2D12] text-white',
  'bg-[#334155] text-white',
];

export const ExceptionsCompendium: React.FC<ExceptionsCompendiumProps> = ({
  activeSpeechId,
  onSpeakRussian,
  onSpeakItalian,
  onJumpToLetter,
}) => {
  return (
    <div className="space-y-8">
      <div className="bg-[#16332B] text-white border-2 border-[#9C6F44] rounded-2xl p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-7 h-7 text-[#FCD34D] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Tutte le Regole ed Eccezioni dell'Alfabeto Russo
            </h2>
            <p className="text-sm sm:text-base text-[#E7E5E4] mt-2 leading-relaxed max-w-3xl">
              Il segreto per leggere il russo esattamente come un madrelingua non è imparare solo i 33 simboli, ma conoscere le sue 6 grandi famiglie di eccezioni. Tocca ogni esempio qui sotto per ascoltare la pronuncia reale con la voce russa di sistema!
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {EXCEPTIONS_COMPENDIUM.map((family, idx) => {
          const headerTheme =
            FAMILY_HEADER_THEMES[idx % FAMILY_HEADER_THEMES.length];

          return (
            <section
              key={family.id}
              className="bg-white border border-[#C9BFA9] rounded-2xl overflow-hidden shadow-xs"
            >
              <div
                className={`${headerTheme} px-6 py-4 flex flex-wrap items-center justify-between gap-3`}
              >
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold">
                    {family.title}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90 mt-0.5">
                    {family.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onSpeakItalian(
                      `${family.title}. ${family.teacherSummary}`,
                      `comp-it-${family.id}`
                    )
                  }
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeSpeechId === `comp-it-${family.id}`
                      ? 'bg-[#F59E0B] text-[#1C1917]'
                      : 'bg-white text-[#1C1917] hover:bg-[#FEF3C7]'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Ascolta la Maestra</span>
                </button>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-sm font-medium text-[#292524] leading-relaxed">
                  {family.teacherSummary}
                </p>

                <div className="mt-5 space-y-5">
                  {family.rules.map((rule) => (
                    <div
                      key={rule.id}
                      className="rounded-xl bg-[#F7F3EA] border border-[#D6CCB8] p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="font-display text-base font-bold text-[#1C1917]">
                          {rule.heading}
                        </h4>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {rule.lettersInvolved.map((ltr) => (
                            <button
                              key={ltr}
                              type="button"
                              onClick={() => onJumpToLetter(ltr)}
                              className="w-8 h-8 rounded-lg bg-[#172554] font-display text-sm font-bold text-white hover:bg-[#1D4ED8] transition-colors cursor-pointer"
                              title={`Vai alla lezione della lettera ${ltr}`}
                            >
                              {ltr}
                            </button>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-[#292524] mt-2 leading-relaxed">
                        {rule.explanationIt}
                      </p>

                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {rule.examples.map((ex) => {
                          const speechId = `comp-${rule.id}-${ex.written}`;
                          const isActive = activeSpeechId === speechId;
                          return (
                            <button
                              key={ex.written}
                              type="button"
                              onClick={() => onSpeakRussian(ex.ttsRu, speechId)}
                              className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white'
                                  : 'bg-white border-[#C9BFA9] hover:border-[#1D4ED8]'
                              }`}
                            >
                              <div className="min-w-0">
                                <div className="font-display text-lg font-bold">
                                  {ex.written}
                                </div>
                                <div
                                  className={`font-mono text-xs font-bold mt-0.5 ${
                                    isActive ? 'text-blue-100' : 'text-[#1D4ED8]'
                                  }`}
                                >
                                  {ex.readAs}
                                </div>
                                <div
                                  className={`text-xs font-medium mt-0.5 ${
                                    isActive ? 'text-blue-100' : 'text-[#44403C]'
                                  }`}
                                >
                                  {ex.meaningIt}
                                </div>
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
          );
        })}
      </div>
    </div>
  );
};

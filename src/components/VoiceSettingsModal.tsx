import React, { useEffect } from 'react';
import { Volume2, RefreshCw, X } from 'lucide-react';
import { isSpeechSupported } from '../utils/systemSpeech';

interface VoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  forceRussianVoice: boolean;
  onChangeForceRussianVoice: (val: boolean) => void;
  ruVoices: SpeechSynthesisVoice[];
  itVoices: SpeechSynthesisVoice[];
  allVoices: SpeechSynthesisVoice[];
  selectedRuVoiceURI: string;
  onChangeRuVoiceURI: (uri: string) => void;
  selectedItVoiceURI: string;
  onChangeItVoiceURI: (uri: string) => void;
  speechRate: number;
  onChangeSpeechRate: (rate: number) => void;
  speechPitch: number;
  onChangeSpeechPitch: (pitch: number) => void;
  voicesLoaded: boolean;
  onRefreshVoices: () => void;
  onTestVoice: () => void;
}

export const VoiceSettingsModal: React.FC<VoiceSettingsModalProps> = ({
  isOpen,
  onClose,
  forceRussianVoice,
  onChangeForceRussianVoice,
  ruVoices,
  itVoices,
  allVoices,
  selectedRuVoiceURI,
  onChangeRuVoiceURI,
  selectedItVoiceURI,
  onChangeItVoiceURI,
  speechRate,
  onChangeSpeechRate,
  speechPitch,
  onChangeSpeechPitch,
  voicesLoaded,
  onRefreshVoices,
  onTestVoice,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    onRefreshVoices();
  }, [isOpen, onRefreshVoices]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const otherVoicesForRu = allVoices.filter(
    (v) => !ruVoices.some((rv) => rv.voiceURI === v.voiceURI && rv.name === v.name)
  );
  const otherVoicesForIt = allVoices.filter(
    (v) => !itVoices.some((iv) => iv.voiceURI === v.voiceURI && iv.name === v.name)
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="voice-modal-title"
    >
      <div
        className="w-full max-w-2xl bg-white border-2 border-[#172554] rounded-2xl overflow-hidden shadow-xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header scuro */}
        <div className="bg-[#172554] text-white px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h2 id="voice-modal-title" className="font-display text-lg font-bold">
              Imposta Voci di Sistema (senza AI)
            </h2>
            <p className="text-xs text-[#BFDBFE] mt-0.5 tabular-nums">
              {voicesLoaded
                ? `Trovate ${allVoices.length} voci sul dispositivo (${ruVoices.length} russe, ${itVoices.length} italiane)`
                : 'Ricerca delle voci di sistema in corso...'}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1E3A8A] text-white hover:bg-[#2563EB] transition-colors cursor-pointer"
            aria-label="Chiudi impostazioni voce"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto azbuka-scroll">
          {!isSpeechSupported() ? (
            <div className="bg-red-50 border border-red-300 rounded-xl p-4 text-sm text-red-900">
              Questo browser non supporta la sintesi vocale Web Speech API. Prova con Chrome, Edge o Safari aggiornati.
            </div>
          ) : (
            <>
              {/* Scelta modalità lingua */}
              <div>
                <span className="block text-xs font-extrabold text-[#44403C] mb-2">
                  Modalità di lettura della Maestra
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => onChangeForceRussianVoice(true)}
                    className={`p-3 rounded-xl border-2 text-left text-xs font-bold transition-colors cursor-pointer ${
                      forceRussianVoice
                        ? 'bg-[#16332B] border-[#16332B] text-white'
                        : 'bg-[#F7F3EA] border-[#C9BFA9] text-[#292524] hover:border-[#16332B]'
                    }`}
                  >
                    <div className="text-sm font-extrabold">Maestra Russa (Consigliata)</div>
                    <div className={`mt-1 font-medium ${forceRussianVoice ? 'text-[#D1FAE5]' : 'text-[#57534E]'}`}>
                      Usa la voce russa (ru-RU) sia per gli esempi sia per parlare italiano con accento russo.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => onChangeForceRussianVoice(false)}
                    className={`p-3 rounded-xl border-2 text-left text-xs font-bold transition-colors cursor-pointer ${
                      !forceRussianVoice
                        ? 'bg-[#172554] border-[#172554] text-white'
                        : 'bg-[#F7F3EA] border-[#C9BFA9] text-[#292524] hover:border-[#172554]'
                    }`}
                  >
                    <div className="text-sm font-extrabold">Due Voci Separate</div>
                    <div className={`mt-1 font-medium ${!forceRussianVoice ? 'text-[#BFDBFE]' : 'text-[#57534E]'}`}>
                      Voce italiana (it-IT) per le spiegazioni e voce russa (ru-RU) per lettere ed esempi.
                    </div>
                  </button>
                </div>
              </div>

              {/* Selezione Voce Russa */}
              <div className="bg-[#F7F3EA] border border-[#D6CCB8] rounded-xl p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label
                    htmlFor="modal-ru-voice-select"
                    className="text-xs font-extrabold text-[#1C1917]"
                  >
                    Voce Russa Principale
                  </label>
                  <button
                    type="button"
                    onClick={onRefreshVoices}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1D4ED8] hover:underline cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Ricarica elenco voci</span>
                  </button>
                </div>

                {allVoices.length > 0 ? (
                  <select
                    id="modal-ru-voice-select"
                    value={selectedRuVoiceURI}
                    onChange={(e) => onChangeRuVoiceURI(e.target.value)}
                    className="w-full rounded-lg border border-[#C9BFA9] bg-white px-3 py-2.5 text-sm font-semibold text-[#1C1917]"
                  >
                    {ruVoices.length > 0 && (
                      <optgroup label="Voci Russe (ru-RU)">
                        {ruVoices.map((v) => (
                          <option key={`${v.voiceURI}-${v.name}`} value={v.voiceURI || v.name}>
                            {v.name} ({v.lang})
                          </option>
                        ))}
                      </optgroup>
                    )}
                    {otherVoicesForRu.length > 0 && (
                      <optgroup
                        label={
                          ruVoices.length === 0
                            ? 'Altre voci sul dispositivo (nessuna ru-RU trovata)'
                            : 'Altre voci disponibili sul dispositivo'
                        }
                      >
                        {otherVoicesForRu.map((v) => (
                          <option key={`${v.voiceURI}-${v.name}`} value={v.voiceURI || v.name}>
                            {v.name} ({v.lang})
                          </option>
                        ))}
                      </optgroup>
                    )}
                  </select>
                ) : (
                  <p className="text-xs text-[#78350F] bg-[#FEF3C7] border border-[#D97706] rounded-lg p-3">
                    Il browser non ha ancora esposto voci di sistema. Premi "Ricarica elenco voci" oppure verifica nelle impostazioni del tuo sistema operativo che la sintesi vocale (es. Russo ru-RU) sia installata.
                  </p>
                )}

                {ruVoices.length === 0 && allVoices.length > 0 && (
                  <p className="text-xs text-[#78350F] bg-[#FEF3C7] border border-[#D97706] rounded-lg p-2.5">
                    Nessuna voce etichettata <strong>ru-RU</strong> trovata: puoi comunque scegliere una voce dall'elenco o installare la voce russa nel sistema operativo.
                  </p>
                )}
              </div>

              {/* Selezione Voce Italiana se modalità doppia */}
              {!forceRussianVoice && (
                <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4 space-y-2">
                  <label
                    htmlFor="modal-it-voice-select"
                    className="block text-xs font-extrabold text-[#1E3A8A]"
                  >
                    Voce Italiana per le Spiegazioni
                  </label>
                  {allVoices.length > 0 ? (
                    <select
                      id="modal-it-voice-select"
                      value={selectedItVoiceURI}
                      onChange={(e) => onChangeItVoiceURI(e.target.value)}
                      className="w-full rounded-lg border border-[#93C5FD] bg-white px-3 py-2.5 text-sm font-semibold text-[#1C1917]"
                    >
                      {itVoices.length > 0 && (
                        <optgroup label="Voci Italiane (it-IT)">
                          {itVoices.map((v) => (
                            <option key={`${v.voiceURI}-${v.name}`} value={v.voiceURI || v.name}>
                              {v.name} ({v.lang})
                            </option>
                          ))}
                        </optgroup>
                      )}
                      {otherVoicesForIt.length > 0 && (
                        <optgroup label="Altre voci disponibili">
                          {otherVoicesForIt.map((v) => (
                            <option key={`${v.voiceURI}-${v.name}`} value={v.voiceURI || v.name}>
                              {v.name} ({v.lang})
                            </option>
                          ))}
                        </optgroup>
                      )}
                    </select>
                  ) : (
                    <p className="text-xs text-[#1E3A8A]">
                      Verrà usata la voce predefinita del browser.
                    </p>
                  )}
                </div>
              )}

              {/* Velocità e Tono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FAF6EE] border border-[#D6CCB8] rounded-xl p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1C1917] mb-2">
                    <label htmlFor="speech-rate-slider">Velocità di lettura</label>
                    <span className="font-mono text-[#1D4ED8] tabular-nums">
                      {speechRate.toFixed(2)}x
                    </span>
                  </div>
                  <input
                    id="speech-rate-slider"
                    type="range"
                    min={0.55}
                    max={1.2}
                    step={0.05}
                    value={speechRate}
                    onChange={(e) => onChangeSpeechRate(Number(e.target.value))}
                    className="w-full accent-[#1D4ED8] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#57534E] mt-1">
                    <span>Molto lenta</span>
                    <span>Normale</span>
                    <span>Veloce</span>
                  </div>
                </div>

                <div className="bg-[#FAF6EE] border border-[#D6CCB8] rounded-xl p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1C1917] mb-2">
                    <label htmlFor="speech-pitch-slider">Tono della voce</label>
                    <span className="font-mono text-[#1D4ED8] tabular-nums">
                      {speechPitch.toFixed(2)}
                    </span>
                  </div>
                  <input
                    id="speech-pitch-slider"
                    type="range"
                    min={0.8}
                    max={1.2}
                    step={0.05}
                    value={speechPitch}
                    onChange={(e) => onChangeSpeechPitch(Number(e.target.value))}
                    className="w-full accent-[#1D4ED8] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#57534E] mt-1">
                    <span>Più grave</span>
                    <span>Naturale</span>
                    <span>Più acuta</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Azioni */}
        <div className="bg-[#F4EFE4] border-t border-[#D6CCB8] px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onTestVoice}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#1D4ED8] text-white hover:bg-blue-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Prova questa voce adesso</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-sm font-bold bg-white border border-[#C9BFA9] text-[#1C1917] hover:bg-[#FAF6EE] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Salva e chiudi
          </button>
        </div>
      </div>
    </div>
  );
};

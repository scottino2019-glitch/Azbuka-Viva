export interface SystemVoiceInfo {
  ruVoices: SpeechSynthesisVoice[];
  itVoices: SpeechSynthesisVoice[];
  selectedRuVoiceURI: string;
  selectedItVoiceURI: string;
  supported: boolean;
}

export interface SequenceStep {
  id: string;
  lang: 'it-IT' | 'ru-RU';
  text: string;
  pauseAfterMs?: number;
}

const stripStressMarks = (text: string): string => text.replace(/\u0301/g, '');

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function getAvailableSystemVoices(): {
  ruVoices: SpeechSynthesisVoice[];
  itVoices: SpeechSynthesisVoice[];
} {
  if (!isSpeechSupported()) {
    return { ruVoices: [], itVoices: [] };
  }
  const all = window.speechSynthesis.getVoices();
  const ruVoices = all.filter((v) => v.lang.toLowerCase().startsWith('ru'));
  const itVoices = all.filter((v) => v.lang.toLowerCase().startsWith('it'));
  return { ruVoices, itVoices };
}

export function pickBestVoice(
  voices: SpeechSynthesisVoice[],
  preferredURI?: string
): SpeechSynthesisVoice | null {
  if (voices.length === 0) return null;
  if (preferredURI) {
    const exact = voices.find((v) => v.voiceURI === preferredURI);
    if (exact) return exact;
  }
  const local = voices.find((v) => v.localService);
  return local ?? voices[0];
}

let activeSequenceToken = 0;
let activeTimeoutId: number | null = null;

export function stopAllSpeech(): void {
  activeSequenceToken += 1;
  if (activeTimeoutId !== null) {
    window.clearTimeout(activeTimeoutId);
    activeTimeoutId = null;
  }
  if (isSpeechSupported()) {
    window.speechSynthesis.cancel();
  }
}

export interface SpeakOptions {
  lang: 'it-IT' | 'ru-RU';
  text: string;
  rate?: number;
  voiceURI?: string;
  forceRussianVoice?: boolean;
  ruVoiceURI?: string;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
}

export function speakSingle({
  lang,
  text,
  rate = 0.92,
  voiceURI,
  forceRussianVoice = true,
  ruVoiceURI,
  onStart,
  onEnd,
  onError,
}: SpeakOptions): void {
  if (!isSpeechSupported()) {
    onError?.();
    return;
  }

  stopAllSpeech();
  const token = activeSequenceToken;

  const { ruVoices, itVoices } = getAvailableSystemVoices();
  const useRussianEngine = lang === 'ru-RU' || forceRussianVoice;

  const cleanText = stripStressMarks(text);
  const utterance = new SpeechSynthesisUtterance(cleanText);

  if (useRussianEngine) {
    const chosenRu = pickBestVoice(ruVoices, ruVoiceURI || voiceURI);
    if (chosenRu) {
      utterance.voice = chosenRu;
      utterance.lang = chosenRu.lang;
    } else {
      utterance.lang = 'ru-RU';
    }
  } else {
    const chosenIt = pickBestVoice(itVoices, voiceURI);
    if (chosenIt) {
      utterance.voice = chosenIt;
      utterance.lang = chosenIt.lang;
    } else {
      utterance.lang = 'it-IT';
    }
  }

  utterance.rate = rate;
  utterance.pitch = 1.0;

  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    if (token === activeSequenceToken) {
      onEnd?.();
    }
  };

  utterance.onstart = () => {
    if (token === activeSequenceToken) {
      onStart?.();
    }
  };
  utterance.onend = finish;
  utterance.onerror = () => {
    if (!settled) {
      settled = true;
      onError?.();
    }
  };

  window.speechSynthesis.speak(utterance);
}

export interface PlaySequenceOptions {
  steps: SequenceStep[];
  ruRate: number;
  itRate: number;
  ruVoiceURI?: string;
  itVoiceURI?: string;
  forceRussianVoice?: boolean;
  onStepChange: (stepId: string | null) => void;
  onComplete: () => void;
}

export function playTeacherSequence({
  steps,
  ruRate,
  itRate,
  ruVoiceURI,
  itVoiceURI,
  forceRussianVoice = true,
  onStepChange,
  onComplete,
}: PlaySequenceOptions): void {
  if (!isSpeechSupported() || steps.length === 0) {
    onStepChange(null);
    onComplete();
    return;
  }

  stopAllSpeech();
  const token = activeSequenceToken;
  const { ruVoices, itVoices } = getAvailableSystemVoices();
  const ruVoice = pickBestVoice(ruVoices, ruVoiceURI);
  const itVoice = pickBestVoice(itVoices, itVoiceURI);

  const runIndex = (idx: number) => {
    if (token !== activeSequenceToken) return;
    if (idx >= steps.length) {
      onStepChange(null);
      onComplete();
      return;
    }

    const step = steps[idx];
    onStepChange(step.id);

    const cleanText = stripStressMarks(step.text);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const useRussianEngine = step.lang === 'ru-RU' || forceRussianVoice;

    if (useRussianEngine) {
      if (ruVoice) {
        utterance.voice = ruVoice;
        utterance.lang = ruVoice.lang;
      } else {
        utterance.lang = 'ru-RU';
      }
      utterance.rate = step.lang === 'ru-RU' ? ruRate : itRate;
    } else {
      if (itVoice) {
        utterance.voice = itVoice;
        utterance.lang = itVoice.lang;
      } else {
        utterance.lang = 'it-IT';
      }
      utterance.rate = itRate;
    }

    utterance.pitch = 1.0;

    const advance = () => {
      if (token !== activeSequenceToken) return;
      const pause = step.pauseAfterMs ?? 380;
      activeTimeoutId = window.setTimeout(() => {
        runIndex(idx + 1);
      }, pause);
    };

    utterance.onend = advance;
    utterance.onerror = advance;

    window.speechSynthesis.speak(utterance);
  };

  runIndex(0);
}

export function playClassroomChime(kind: 'success' | 'tryAgain' | 'tap'): void {
  if (typeof window === 'undefined') return;
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!AudioCtx) return;

  try {
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    const playTone = (freq: number, startOffset: number, duration: number, gainVal: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + startOffset);
      gain.gain.setValueAtTime(0.0001, now + startOffset);
      gain.gain.exponentialRampToValueAtTime(gainVal, now + startOffset + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + startOffset + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + startOffset);
      osc.stop(now + startOffset + duration + 0.02);
    };

    if (kind === 'success') {
      playTone(523.25, 0, 0.16, 0.08);
      playTone(659.25, 0.1, 0.22, 0.09);
      playTone(783.99, 0.2, 0.3, 0.08);
    } else if (kind === 'tryAgain') {
      playTone(330, 0, 0.14, 0.06);
      playTone(293.66, 0.12, 0.2, 0.05);
    } else {
      playTone(587.33, 0, 0.08, 0.04);
    }

    window.setTimeout(() => {
      ctx.close().catch(() => {});
    }, 900);
  } catch {
    // Ignore audio context restriction errors
  }
}

export type LetterCategory = 'vowel' | 'consonant' | 'sign';

export type HardnessType =
  | 'hard-indicator'
  | 'soft-indicator'
  | 'paired'
  | 'always-hard'
  | 'always-soft'
  | 'modifier';

export interface ExceptionExample {
  written: string;
  stressed: string;
  readAs: string;
  meaningIt: string;
  ttsRu: string;
}

export interface LetterException {
  title: string;
  ruleSummary: string;
  explanationIt: string;
  examples: ExceptionExample[];
}

export interface LetterExample {
  displayRu: string;
  ttsRu: string;
  phoneticIt: string;
  meaningIt: string;
  noteIt?: string;
}

export interface SyllableItem {
  syllable: string;
  ttsRu: string;
  phoneticIt: string;
  isTrap?: boolean;
  trapNote?: string;
}

export interface RussianLetter {
  index: number;
  uppercase: string;
  lowercase: string;
  nameRu: string;
  nameTtsRu: string;
  namePhoneticIt: string;
  soundTtsRu: string;
  category: LetterCategory;
  hardness: HardnessType;
  hardnessLabel: string;
  isFalseFriend: boolean;
  falseFriendWarning?: string;
  soundIt: string;
  ipa: string;
  cursiveNote: string;
  cursiveTrap?: string;
  mnemonic: {
    wordRu: string;
    wordStressed: string;
    ttsRu: string;
    phoneticIt: string;
    wordIt: string;
    visualTrick: string;
  };
  teacherLesson: {
    intro: string;
    mouthTip: string;
    comparisonIt: string;
  };
  syllables: SyllableItem[];
  examples: LetterExample[];
  miniPhrase: {
    displayRu: string;
    ttsRu: string;
    phoneticIt: string;
    meaningIt: string;
  };
  exceptions: LetterException[];
}

export interface ExceptionFamily {
  id: string;
  title: string;
  subtitle: string;
  teacherSummary: string;
  rules: {
    id: string;
    heading: string;
    lettersInvolved: string[];
    explanationIt: string;
    examples: {
      written: string;
      readAs: string;
      meaningIt: string;
      ttsRu: string;
    }[];
  }[];
}

export type AppSection = 'lesson' | 'poster' | 'exceptions' | 'game';

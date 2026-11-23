import React from 'react';
import { RussianLetter } from '../types/alphabet';

interface CursivePreviewProps {
  letter: RussianLetter;
}

const CURSIVE_SPECIAL_SVGS: Record<string, React.ReactNode> = {
  Г: (
    <svg viewBox="0 0 100 56" className="w-24 h-12" aria-hidden="true">
      <path d="M22 44 C26 24, 34 14, 42 14 C48 14, 44 26, 40 42" stroke="currentColor" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M58 28 C62 20, 68 20, 66 32 C65 39, 64 43, 70 42 C74 41, 78 36, 82 32" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Д: (
    <svg viewBox="0 0 100 56" className="w-24 h-12" aria-hidden="true">
      <path d="M28 14 C25 28, 22 40, 18 42 C14 44, 16 36, 28 38 C38 40, 44 34, 44 22 C44 12, 32 10, 26 16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M72 24 C64 20, 58 28, 60 35 C62 40, 70 36, 72 26 L68 48 C66 54, 58 53, 60 46 C62 41, 72 36, 80 32" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  ),
  И: (
    <svg viewBox="0 0 100 56" className="w-24 h-12" aria-hidden="true">
      <path d="M18 14 L18 38 C18 44, 28 42, 36 22 L34 38 C34 43, 40 42, 44 36" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M60 24 L57 38 C56 43, 64 42, 72 24 L69 38 C68 43, 74 42, 79 36" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  ),
  П: (
    <svg viewBox="0 0 100 56" className="w-24 h-12" aria-hidden="true">
      <path d="M16 42 L24 16 M38 16 L32 42 M18 16 C26 12, 34 12, 42 15" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M58 24 L56 42 M57 30 C62 22, 72 22, 71 32 L69 40 C69 43, 74 43, 78 38" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Т: (
    <svg viewBox="0 0 100 56" className="w-24 h-12" aria-hidden="true">
      <path d="M16 16 C24 13, 34 13, 44 16 M22 18 L18 42 M30 16 L26 42 M38 18 L34 42" stroke="currentColor" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M55 24 L52 42 M54 28 C58 22, 65 22, 64 31 L62 42 M63 29 C67 22, 75 22, 74 31 L72 40 C72 43, 77 42, 81 37" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  ),
};

export const CursivePreview: React.FC<CursivePreviewProps> = ({ letter }) => {
  const customSvg = CURSIVE_SPECIAL_SVGS[letter.uppercase];

  return (
    <div className="bg-[#EFE9DC] rounded-xl border border-[#C9BFA9] p-4">
      <div className="flex items-center justify-between gap-4 mb-2.5">
        <span className="text-xs font-bold text-[#44403C]">
          Come si scrive a mano (Corsivo russo)
        </span>
        {letter.cursiveTrap && (
          <span className="text-xs font-extrabold text-[#B45309]">
            Attenzione al corsivo
          </span>
        )}
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center min-w-[108px] h-14 px-3 bg-white rounded-lg border border-[#C9BFA9] text-[#1C1917] shadow-xs">
          {customSvg ? (
            customSvg
          ) : (
            <span className="text-3xl italic font-serif tracking-wider select-none">
              {letter.uppercase} {letter.lowercase}
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-[#292524] leading-relaxed">
          {letter.cursiveNote}
        </p>
      </div>
    </div>
  );
};

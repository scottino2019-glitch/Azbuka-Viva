import React from 'react';

interface LetterIllustrationProps {
  uppercase: string;
  className?: string;
}

export const LetterIllustration: React.FC<LetterIllustrationProps> = ({
  uppercase,
  className = 'w-32 h-32',
}) => {
  const renderArtwork = () => {
    switch (uppercase) {
      case 'А':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF2F2" />
            <path d="M22 72 Q60 112 98 72 Z" fill="#16A34A" />
            <path d="M27 72 Q60 104 93 72 Z" fill="#DCFCE7" />
            <path d="M31 72 Q60 98 89 72 Z" fill="#EF4444" />
            <circle cx="48" cy="79" r="2.2" fill="#1C1917" />
            <circle cx="60" cy="83" r="2.2" fill="#1C1917" />
            <circle cx="72" cy="79" r="2.2" fill="#1C1917" />
            <circle cx="54" cy="75" r="1.8" fill="#1C1917" />
            <circle cx="66" cy="75" r="1.8" fill="#1C1917" />
            <path d="M40 58 L60 22 L80 58" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M47 46 L73 46" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" />
          </g>
        );
      case 'Б':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#EFF6FF" />
            <ellipse cx="42" cy="52" rx="18" ry="22" transform="rotate(-18 42 52)" fill="#F59E0B" />
            <ellipse cx="78" cy="52" rx="18" ry="22" transform="rotate(18 78 52)" fill="#F59E0B" />
            <ellipse cx="44" cy="76" rx="13" ry="14" transform="rotate(15 44 76)" fill="#FBBF24" />
            <ellipse cx="76" cy="76" rx="13" ry="14" transform="rotate(-15 76 76)" fill="#FBBF24" />
            <circle cx="40" cy="50" r="6" fill="#FEF3C7" />
            <circle cx="80" cy="50" r="6" fill="#FEF3C7" />
            <rect x="56" y="42" width="8" height="44" rx="4" fill="#1E3A8A" />
            <path d="M58 42 Q50 28 44 30" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M62 42 Q70 28 76 30" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'В':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#EFF6FF" />
            <polygon points="35,44 43,22 54,38" fill="#64748B" />
            <polygon points="85,44 77,22 66,38" fill="#64748B" />
            <circle cx="60" cy="62" r="26" fill="#94A3B8" />
            <ellipse cx="60" cy="72" rx="14" ry="12" fill="#E2E8F0" />
            <circle cx="50" cy="56" r="3.5" fill="#1E293B" />
            <circle cx="70" cy="56" r="3.5" fill="#1E293B" />
            <circle cx="51" cy="55" r="1.2" fill="#FFFFFF" />
            <circle cx="71" cy="55" r="1.2" fill="#FFFFFF" />
            <polygon points="56,68 64,68 60,74" fill="#1E293B" />
            <path d="M55 79 Q60 83 65 79" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'Г':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#ECFDF5" />
            <rect x="51" y="58" width="18" height="36" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <path d="M26 62 C26 32, 94 32, 94 62 Z" fill="#DC2626" />
            <circle cx="44" cy="48" r="5" fill="#FFFFFF" />
            <circle cx="64" cy="40" r="6" fill="#FFFFFF" />
            <circle cx="77" cy="52" r="4" fill="#FFFFFF" />
            <path d="M36 94 Q60 89 84 94" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'Д':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#EFF6FF" />
            <rect x="33" y="54" width="54" height="38" rx="4" fill="#FDE68A" stroke="#B45309" strokeWidth="2.5" />
            <polygon points="24,56 60,24 96,56" fill="#DC2626" />
            <rect x="70" y="28" width="9" height="16" fill="#9A3412" />
            <rect x="52" y="68" width="16" height="24" rx="2" fill="#92400E" />
            <rect x="38" y="62" width="10" height="10" rx="1.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
            <rect x="72" y="62" width="10" height="10" rx="1.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>
        );
      case 'Е':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF2F2" />
            <circle cx="40" cy="36" r="10" fill="#64748B" />
            <circle cx="80" cy="36" r="10" fill="#64748B" />
            <ellipse cx="60" cy="62" rx="28" ry="23" fill="#CBD5E1" />
            <ellipse cx="47" cy="58" rx="10" ry="8" fill="#334155" />
            <ellipse cx="73" cy="58" rx="10" ry="8" fill="#334155" />
            <circle cx="48" cy="58" r="3.5" fill="#FFFFFF" />
            <circle cx="72" cy="58" r="3.5" fill="#FFFFFF" />
            <circle cx="48" cy="58" r="1.8" fill="#0F172A" />
            <circle cx="72" cy="58" r="1.8" fill="#0F172A" />
            <ellipse cx="60" cy="70" rx="8" ry="6" fill="#F8FAFC" />
            <circle cx="60" cy="69" r="3.5" fill="#0F172A" />
          </g>
        );
      case 'Ё':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF2F2" />
            <path d="M26 72 C24 44, 52 32, 76 42 L84 52 L78 58 L88 64 L78 72 Z" fill="#78350F" />
            <path d="M36 42 L42 32 L48 40 L56 30 L62 40 L70 33 L73 43" fill="#78350F" />
            <ellipse cx="66" cy="68" rx="24" ry="16" fill="#FDE68A" />
            <circle cx="76" cy="64" r="3" fill="#1C1917" />
            <circle cx="89" cy="68" r="3.5" fill="#1C1917" />
            <circle cx="48" cy="24" r="4" fill="#DC2626" />
            <circle cx="66" cy="24" r="4" fill="#DC2626" />
          </g>
        );
      case 'Ж':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEFCE8" />
            <path d="M52 94 L56 44 L68 44 L72 94 Z" fill="#F59E0B" />
            <ellipse cx="64" cy="40" rx="16" ry="11" fill="#FBBF24" />
            <line x1="58" y1="30" x2="54" y2="20" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
            <line x1="68" y1="30" x2="72" y2="20" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
            <circle cx="54" cy="20" r="3" fill="#92400E" />
            <circle cx="72" cy="20" r="3" fill="#92400E" />
            <circle cx="68" cy="38" r="2.5" fill="#1C1917" />
            <circle cx="62" cy="58" r="4" fill="#B45309" />
            <circle cx="58" cy="72" r="4.5" fill="#B45309" />
            <circle cx="66" cy="82" r="3.5" fill="#B45309" />
          </g>
        );
      case 'З':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#EFF6FF" />
            <ellipse cx="60" cy="64" rx="25" ry="26" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
            <path d="M39 54 Q52 50 56 58" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M81 54 Q68 50 64 58" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M40 68 Q52 65 55 72" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
            <ellipse cx="60" cy="76" rx="14" ry="10" fill="#CBD5E1" />
            <circle cx="50" cy="56" r="3" fill="#0F172A" />
            <circle cx="70" cy="56" r="3" fill="#0F172A" />
            <polygon points="40,42 46,24 54,38" fill="#1E293B" />
            <polygon points="80,42 74,24 66,38" fill="#1E293B" />
          </g>
        );
      case 'И':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF2F2" />
            <path d="M60 20 C76 38, 76 66, 68 82 L52 82 C44 66, 44 38, 60 20 Z" fill="#EF4444" />
            <polygon points="47,68 32,84 48,80" fill="#2563EB" />
            <polygon points="73,68 88,84 72,80" fill="#2563EB" />
            <circle cx="60" cy="50" r="9" fill="#BAE6FD" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M52 84 L60 98 L68 84 Z" fill="#F59E0B" />
          </g>
        );
      case 'Й':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#EFF6FF" />
            <path d="M36 46 L84 46 L76 92 L44 92 Z" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
            <rect x="33" y="39" width="54" height="9" rx="4" fill="#EC4899" />
            <circle cx="60" cy="68" r="10" fill="#F43F5E" />
            <path d="M56 58 Q60 52 65 56" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M46 28 Q60 18 74 28" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'К':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FFF7ED" />
            <polygon points="36,48 38,24 54,40" fill="#EA580C" />
            <polygon points="84,48 82,24 66,40" fill="#EA580C" />
            <circle cx="60" cy="64" r="26" fill="#FB923C" />
            <circle cx="50" cy="59" r="3.5" fill="#1C1917" />
            <circle cx="70" cy="59" r="3.5" fill="#1C1917" />
            <polygon points="56,67 64,67 60,72" fill="#F43F5E" />
            <line x1="26" y1="66" x2="44" y2="68" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round" />
            <line x1="26" y1="74" x2="44" y2="73" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round" />
            <line x1="94" y1="66" x2="76" y2="68" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round" />
            <line x1="94" y1="74" x2="76" y2="73" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      case 'Л':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF3C7" />
            <circle cx="60" cy="60" r="32" fill="#D97706" />
            <circle cx="60" cy="62" r="22" fill="#FBBF24" />
            <circle cx="44" cy="44" r="6" fill="#FBBF24" />
            <circle cx="76" cy="44" r="6" fill="#FBBF24" />
            <circle cx="52" cy="58" r="3" fill="#1C1917" />
            <circle cx="68" cy="58" r="3" fill="#1C1917" />
            <polygon points="55,66 65,66 60,72" fill="#78350F" />
            <path d="M53 75 Q60 80 67 75" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'М':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF3C7" />
            <circle cx="36" cy="38" r="10" fill="#92400E" />
            <circle cx="84" cy="38" r="10" fill="#92400E" />
            <circle cx="36" cy="38" r="5" fill="#FDE68A" />
            <circle cx="84" cy="38" r="5" fill="#FDE68A" />
            <circle cx="60" cy="62" r="27" fill="#B45309" />
            <ellipse cx="60" cy="70" rx="13" ry="10" fill="#FDE68A" />
            <circle cx="50" cy="56" r="3.2" fill="#1C1917" />
            <circle cx="70" cy="56" r="3.2" fill="#1C1917" />
            <ellipse cx="60" cy="66" rx="5" ry="3.5" fill="#1C1917" />
          </g>
        );
      case 'Н':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#F1F5F9" />
            <ellipse cx="56" cy="66" rx="28" ry="22" fill="#64748B" />
            <path d="M74 60 Q92 46 86 32 Q74 44 68 54 Z" fill="#F8FAFC" stroke="#475569" strokeWidth="2" />
            <path d="M64 56 Q72 48 70 40 Q62 46 58 54 Z" fill="#F8FAFC" stroke="#475569" strokeWidth="1.5" />
            <circle cx="54" cy="58" r="3.2" fill="#0F172A" />
            <ellipse cx="42" cy="44" rx="5" ry="8" fill="#64748B" />
          </g>
        );
      case 'О':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF2F2" />
            <circle cx="44" cy="62" r="16" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="2.5" />
            <circle cx="62" cy="52" r="20" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="2.5" />
            <circle cx="78" cy="64" r="15" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="2.5" />
            <rect x="42" y="54" width="38" height="23" fill="#FFFFFF" />
            <line x1="38" y1="77" x2="82" y2="77" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="53" cy="58" r="2.5" fill="#1E3A8A" />
            <circle cx="69" cy="58" r="2.5" fill="#1E3A8A" />
            <path d="M56 65 Q61 70 66 65" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'П':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#EFF6FF" />
            <ellipse cx="60" cy="66" rx="24" ry="30" fill="#1E293B" />
            <ellipse cx="60" cy="70" rx="16" ry="22" fill="#FFFFFF" />
            <circle cx="52" cy="50" r="3" fill="#FFFFFF" />
            <circle cx="68" cy="50" r="3" fill="#FFFFFF" />
            <circle cx="52" cy="50" r="1.5" fill="#0F172A" />
            <circle cx="68" cy="50" r="1.5" fill="#0F172A" />
            <polygon points="54,55 66,55 60,63" fill="#F59E0B" />
            <ellipse cx="49" cy="95" rx="7" ry="3.5" fill="#F59E0B" />
            <ellipse cx="71" cy="95" rx="7" ry="3.5" fill="#F59E0B" />
          </g>
        );
      case 'Р':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#ECFEFF" />
            <polygon points="78,60 98,42 98,78" fill="#0284C7" />
            <ellipse cx="54" cy="60" rx="28" ry="19" fill="#0EA5E9" />
            <path d="M52 41 Q60 28 68 44" fill="#38BDF8" />
            <circle cx="39" cy="56" r="4" fill="#FFFFFF" />
            <circle cx="38" cy="56" r="2" fill="#0F172A" />
            <circle cx="24" cy="48" r="3" fill="#BAE6FD" />
            <circle cx="20" cy="37" r="4" fill="#BAE6FD" />
          </g>
        );
      case 'С':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEFCE8" />
            <circle cx="60" cy="60" r="24" fill="#FACC15" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1="60"
                y1="26"
                x2="60"
                y2="18"
                stroke="#F59E0B"
                strokeWidth="4"
                strokeLinecap="round"
                transform={`rotate(${deg} 60 60)`}
              />
            ))}
            <circle cx="52" cy="56" r="2.8" fill="#78350F" />
            <circle cx="68" cy="56" r="2.8" fill="#78350F" />
            <path d="M53 66 Q60 72 67 66" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'Т':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FFF7ED" />
            <circle cx="38" cy="36" r="9" fill="#F97316" />
            <circle cx="82" cy="36" r="9" fill="#F97316" />
            <circle cx="60" cy="62" r="27" fill="#FB923C" />
            <path d="M54 36 L60 46 L66 36" stroke="#1C1917" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M35 56 L45 58" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
            <path d="M85 56 L75 58" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="60" cy="70" rx="12" ry="9" fill="#FFFFFF" />
            <circle cx="50" cy="58" r="3" fill="#1C1917" />
            <circle cx="70" cy="58" r="3" fill="#1C1917" />
            <polygon points="56,66 64,66 60,71" fill="#EA580C" />
          </g>
        );
      case 'У':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF2F2" />
            <ellipse cx="58" cy="72" rx="24" ry="18" fill="#FACC15" />
            <circle cx="68" cy="46" r="15" fill="#FDE047" />
            <polygon points="80,45 96,49 80,53" fill="#F97316" />
            <circle cx="72" cy="43" r="2.8" fill="#1C1917" />
            <path d="M44 70 Q56 64 64 74" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'Ф':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FDF2F8" />
            <line x1="58" y1="74" x2="58" y2="98" stroke="#F43F5E" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M58 84 L46 80 L54 90" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" fill="none" />
            <ellipse cx="58" cy="64" rx="16" ry="12" fill="#FB7185" />
            <path d="M68 60 C78 46, 62 30, 74 26" stroke="#FB7185" strokeWidth="6" strokeLinecap="round" fill="none" />
            <circle cx="76" cy="27" r="6" fill="#FB7185" />
            <path d="M81 27 Q88 30 85 37 L79 31 Z" fill="#1C1917" />
          </g>
        );
      case 'Х':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FFFBEB" />
            <path d="M26 76 C26 46, 94 46, 94 76 Z" fill="#D97706" />
            <ellipse cx="60" cy="76" rx="34" ry="8" fill="#B45309" />
            <line x1="42" y1="53" x2="50" y2="62" stroke="#FEF3C7" strokeWidth="3" strokeLinecap="round" />
            <line x1="58" y1="50" x2="66" y2="60" stroke="#FEF3C7" strokeWidth="3" strokeLinecap="round" />
            <line x1="74" y1="53" x2="80" y2="62" stroke="#FEF3C7" strokeWidth="3" strokeLinecap="round" />
          </g>
        );
      case 'Ц':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FDF2F8" />
            <line x1="60" y1="54" x2="60" y2="94" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="48" cy="76" rx="10" ry="5" transform="rotate(-25 48 76)" fill="#22C55E" />
            <circle cx="60" cy="30" r="10" fill="#F472B6" />
            <circle cx="44" cy="40" r="10" fill="#F472B6" />
            <circle cx="76" cy="40" r="10" fill="#F472B6" />
            <circle cx="48" cy="54" r="10" fill="#F472B6" />
            <circle cx="72" cy="54" r="10" fill="#F472B6" />
            <circle cx="60" cy="43" r="9" fill="#FACC15" />
          </g>
        );
      case 'Ч':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#EFF6FF" />
            <ellipse cx="60" cy="68" rx="24" ry="20" fill="#2563EB" />
            <path d="M82 60 C96 58, 96 78, 82 76" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M36 68 L22 50 L29 47 L40 60" fill="#2563EB" />
            <ellipse cx="60" cy="48" rx="14" ry="4" fill="#93C5FD" />
            <circle cx="60" cy="41" r="4.5" fill="#1D4ED8" />
            <circle cx="52" cy="68" r="3" fill="#FFFFFF" />
            <circle cx="68" cy="68" r="3" fill="#FFFFFF" />
            <circle cx="60" cy="77" r="3" fill="#FFFFFF" />
          </g>
        );
      case 'Ш':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#EFF6FF" />
            <ellipse cx="60" cy="48" rx="24" ry="28" fill="#EF4444" />
            <ellipse cx="60" cy="48" rx="12" ry="28" fill="#FACC15" />
            <line x1="48" y1="74" x2="54" y2="86" stroke="#64748B" strokeWidth="2" />
            <line x1="72" y1="74" x2="66" y2="86" stroke="#64748B" strokeWidth="2" />
            <rect x="50" y="86" width="20" height="11" rx="2" fill="#92400E" />
          </g>
        );
      case 'Щ':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#EFF6FF" />
            <rect x="26" y="44" width="68" height="16" rx="8" fill="#B45309" />
            {[32, 40, 48, 56, 64, 72, 80, 88].map((x) => (
              <line key={x} x1={x} y1="60" x2={x} y2="84" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" />
            ))}
          </g>
        );
      case 'Ъ':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF3C7" />
            <rect x="34" y="54" width="52" height="36" rx="6" fill="#D97706" />
            <path d="M44 54 V40 A16 16 0 0 1 76 40 V54" stroke="#78350F" strokeWidth="6" fill="none" />
            <circle cx="60" cy="70" r="5" fill="#FEF3C7" />
            <rect x="58" y="72" width="4" height="9" fill="#FEF3C7" />
          </g>
        );
      case 'Ы':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEFCE8" />
            <polygon points="26,76 86,42 94,76" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="26" y="76" width="68" height="14" rx="3" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="54" cy="68" r="5" fill="#FEF9C3" />
            <circle cx="74" cy="66" r="6" fill="#FEF9C3" />
            <circle cx="42" cy="83" r="3.5" fill="#FEF9C3" />
            <circle cx="66" cy="83" r="4" fill="#FEF9C3" />
          </g>
        );
      case 'Ь':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF3C7" />
            <circle cx="44" cy="52" r="11" fill="#94A3B8" />
            <circle cx="72" cy="52" r="11" fill="#94A3B8" />
            <circle cx="44" cy="52" r="6" fill="#FBCFE8" />
            <circle cx="72" cy="52" r="6" fill="#FBCFE8" />
            <ellipse cx="58" cy="68" rx="18" ry="15" fill="#CBD5E1" />
            <circle cx="52" cy="65" r="2.5" fill="#0F172A" />
            <circle cx="64" cy="65" r="2.5" fill="#0F172A" />
            <circle cx="58" cy="72" r="3" fill="#F43F5E" />
            <path d="M76 74 Q94 78 88 90" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'Э':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF2F2" />
            <rect x="26" y="74" width="44" height="12" rx="6" fill="#334155" />
            <rect x="30" y="54" width="34" height="20" rx="4" fill="#F59E0B" />
            <rect x="34" y="58" width="14" height="10" rx="2" fill="#BAE6FD" />
            <path d="M62 62 L82 40 L92 64" stroke="#D97706" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M86 64 L98 68 L90 78 Z" fill="#64748B" />
          </g>
        );
      case 'Ю':
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF2F2" />
            <rect x="57" y="24" width="6" height="14" rx="3" fill="#DC2626" />
            <polygon points="32,56 88,56 60,94" fill="#2563EB" />
            <polygon points="36,56 84,56 76,68 44,68" fill="#FACC15" />
            <polygon points="44,68 76,68 68,80 52,80" fill="#EF4444" />
            <ellipse cx="60" cy="56" rx="28" ry="8" fill="#38BDF8" />
          </g>
        );
      case 'Я':
      default:
        return (
          <g>
            <circle cx="60" cy="60" r="48" fill="#FEF2F2" />
            <path d="M60 36 C42 32, 30 48, 34 68 C38 86, 52 92, 60 88 C68 92, 82 86, 86 68 C90 48, 78 32, 60 36 Z" fill="#DC2626" />
            <path d="M60 36 Q62 24 66 22" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <ellipse cx="70" cy="27" rx="9" ry="5" transform="rotate(-25 70 27)" fill="#22C55E" />
            <ellipse cx="47" cy="52" rx="4" ry="8" transform="rotate(-20 47 52)" fill="#FCA5A5" opacity="0.7" />
          </g>
        );
    }
  };

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      {renderArtwork()}
    </svg>
  );
};

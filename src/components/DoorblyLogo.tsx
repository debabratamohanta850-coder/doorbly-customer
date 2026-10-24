import React, { useState } from 'react';

export const DOORBLY_OFFICIAL_LOGO_URL =
  'https://fktznwvrlsgmbrisyyac.supabase.co/storage/v1/object/sign/logo/Glossy%20Teal%20Connected%20Loop%20Emblem.png?token=eyJraWQiOiJiMjQwZDFlOC0wZDVkLTQ1Y2EtYTdmYy1kNDllYWUyODljMGUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJsb2dvL0dsb3NzeSBUZWFsIENvbm5lY3RlZCBMb29wIEVtYmxlbS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkyODI4ODE5LCJleHAiOjE4MjQzNjQ4MTl9.xMGnyLgwL6ZOHURKaK14X3rYxuPPoVw9of98_tFIWkvfYAwMYizB7V68jt3jcs_Qq2SAT6wzMcVlT1jf2OOF3Q';

interface Props {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact';
  alt?: string;
  flipOnEntrance?: boolean;
  interactiveFlip?: boolean;
}

export const DoorblyLogo: React.FC<Props> = ({
  className = '',
  size = 'md',
  variant = 'compact',
  alt = 'Doorbly Official Company Logo',
  flipOnEntrance = false,
  interactiveFlip = true
}) => {
  const [imgError, setImgError] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  // Calibrated dimensions for the official emblem icon
  const iconSizeMap = {
    xs: 'w-5 h-5',
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const textSizeMap = {
    xs: 'text-sm font-black tracking-tight',
    sm: 'text-base font-black tracking-tight',
    md: 'text-xl font-black tracking-tight',
    lg: 'text-3xl font-black tracking-tight',
    xl: 'text-4xl font-black tracking-tight'
  };

  const chosenIconSize = iconSizeMap[size] || iconSizeMap.md;
  const chosenTextSize = textSizeMap[size] || textSizeMap.md;

  const handleTriggerFlip = () => {
    if (!interactiveFlip || isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => setIsFlipping(false), 950);
  };

  const shouldFlip = flipOnEntrance || isFlipping;

  return (
    <div
      onClick={handleTriggerFlip}
      className={`inline-flex items-center gap-1.5 select-none ${
        interactiveFlip ? 'cursor-pointer' : ''
      } ${className}`}
      title={interactiveFlip ? 'Tap to flip Doorbly emblem' : undefined}
    >
      <div className="perspective-500 shrink-0 inline-flex items-center justify-center">
        <img
          src={imgError ? '/doorbly-official-logo.png' : DOORBLY_OFFICIAL_LOGO_URL}
          alt={alt}
          className={`${chosenIconSize} object-contain shrink-0 transition-opacity duration-200 drop-shadow-xs ${
            shouldFlip ? 'animate-emblem-flip' : ''
          }`}
          loading="eager"
          onError={() => setImgError(true)}
        />
      </div>

      {variant === 'full' && (
        <span className={`font-sans leading-none text-slate-900 ${chosenTextSize}`}>
          door<span className="text-[#0F766E]">bly</span>
        </span>
      )}
    </div>
  );
};

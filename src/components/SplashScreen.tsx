import React, { useEffect, useState } from 'react';
import { DoorblyLogo } from './DoorblyLogo';

interface Props {
  onComplete: () => void;
  statusText?: string;
}

export const SplashScreen: React.FC<Props> = ({
  onComplete,
  statusText = 'Ready'
}) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(onComplete, 250);
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F766E] text-white transition-opacity duration-250 select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Doorbly Official Logo Lockup with 3D Flip on Entrance */}
        <div className="px-7 py-3.5 rounded-3xl bg-white flex items-center justify-center shadow-xl relative transform animate-logo-flip">
          <DoorblyLogo size="lg" variant="full" flipOnEntrance={true} interactiveFlip={true} />
        </div>

        <div className="text-center pt-1">
          <p className="text-xs text-teal-100 font-bold tracking-widest uppercase">
            Odisha Doorstep Services
          </p>
        </div>

        <div className="pt-4 flex flex-col items-center space-y-2">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span className="text-[11px] text-teal-100/90 font-medium tracking-wide">
            {statusText}
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 text-[10px] text-teal-200/80 font-medium">
        Fast • Trusted • Pay After Service
      </div>
    </div>
  );
};

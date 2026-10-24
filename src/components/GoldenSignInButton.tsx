import React from 'react';

interface GoldenSignInButtonProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  label?: string;
  isLoggedIn?: boolean;
  userName?: string;
  loading?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const GoldenSignInButton: React.FC<GoldenSignInButtonProps> = ({
  onClick,
  className = '',
  size = 'sm',
  fullWidth = false,
  label,
  isLoggedIn = false,
  userName,
  loading = false,
  type = 'button',
  disabled = false
}) => {
  const displayLabel = label || (isLoggedIn ? userName || 'Profile' : 'Sign In');

  // Realistic hardware button size scaling
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs min-h-[34px] min-w-[72px] rounded-xl',
    md: 'px-5 py-2 text-xs min-h-[40px] min-w-[120px] rounded-xl',
    lg: 'px-6 py-3 text-sm min-h-[48px] min-w-[160px] rounded-2xl'
  };

  const spinnerSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-4 h-4'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        btn-golden-3d
        border-[1.5px] border-black
        ${size === 'sm' ? 'btn-golden-3d-sm' : ''}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : 'inline-flex'}
        items-center justify-center
        font-black tracking-wide select-none
        cursor-pointer
        disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
        relative overflow-hidden group
        ${className}
      `}
      title={displayLabel}
    >
      {/* Upper Specular Glass Curved Reflection (gives polished jewel / physical button luster) */}
      <span
        className="absolute inset-x-1 top-0.5 h-[45%] rounded-t-[9px] bg-gradient-to-b from-white/75 via-white/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle lower inner rim bevel reflection */}
      <span
        className="absolute inset-x-1.5 bottom-0.5 h-[1.5px] rounded-b-md bg-white/20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Periodic Ambient Shining Gleam (sweeps across button periodically like polished gold) */}
      <span
        className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/75 to-transparent animate-gold-shine pointer-events-none"
        aria-hidden="true"
      />

      {/* Fast interactive gleam on hover */}
      <span
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-20 -translate-x-full group-hover:translate-x-[320%] transition-transform duration-700 pointer-events-none ease-out"
        aria-hidden="true"
      />

      {loading ? (
        <span
          className={`${spinnerSizes[size]} border-2 border-white border-t-transparent rounded-full animate-spin shrink-0`}
        />
      ) : (
        <span className="relative z-10 truncate leading-none text-white font-black tracking-wider text-center drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.95)]">
          {displayLabel}
        </span>
      )}
    </button>
  );
};

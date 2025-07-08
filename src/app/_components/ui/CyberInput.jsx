'use client';

import React from 'react';

const CyberInput = ({ as: Component = 'input', error, ...props }) => {
  const hasError = !!error;
  return (
    <div className="relative group w-full">
      <Component
        {...props}
        className={`relative z-10 w-full bg-black/50 border-2 rounded-lg px-4 py-3 text-cyan-300 focus:outline-none placeholder:text-cyan-700/50 transition-all duration-300 peer ${
          hasError
            ? 'border-red-500/70 focus:border-red-500'
            : 'border-cyan-900/50 focus:border-cyan-500'
        }`}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${props.name}-error` : undefined}
      />
      
      {/* Glow effect on focus */}
      <div className={`absolute -inset-0.5 rounded-lg opacity-0 peer-focus:opacity-75 blur transition-opacity duration-300 -z-10 ${
        hasError ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
      }`}></div>

      {/* Corner Brackets */}
      <div className={`absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 transition-all duration-300 rounded-tl-lg ${hasError ? 'border-red-500/70' : 'border-cyan-500/0 group-hover:border-cyan-500/70 peer-focus:border-cyan-500'}`}></div>
      <div className={`absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 transition-all duration-300 rounded-tr-lg ${hasError ? 'border-red-500/70' : 'border-cyan-500/0 group-hover:border-cyan-500/70 peer-focus:border-cyan-500'}`}></div>
      <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 transition-all duration-300 rounded-bl-lg ${hasError ? 'border-red-500/70' : 'border-cyan-500/0 group-hover:border-cyan-500/70 peer-focus:border-cyan-500'}`}></div>
      <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 transition-all duration-300 rounded-br-lg ${hasError ? 'border-red-500/70' : 'border-cyan-500/0 group-hover:border-cyan-500/70 peer-focus:border-cyan-500'}`}></div>

      {hasError && (
        <p id={`${props.name}-error`} className="text-red-400 text-xs mt-1 pl-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default CyberInput;

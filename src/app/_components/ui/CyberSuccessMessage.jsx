'use client';

import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const CyberSuccessMessage = ({ onClose }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '...TRANSMISSION SUCCESSFUL...\n\n> STATUS: 200 OK\n> MESSAGE: Your signal has been received.\n> We will respond within 24-48 standard hours.\n\n> Closing connection...';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20); // Typing speed

    // Auto-close after a delay
    const closeTimeout = setTimeout(() => {
        onClose();
    }, 8000);

    return () => {
        clearInterval(typingInterval);
        clearTimeout(closeTimeout);
    };
  }, [fullText, onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="relative font-mono text-green-400 bg-black/70 p-6 md:p-8 rounded-3xl border-2 border-green-500/50 w-full max-w-2xl shadow-lg shadow-green-500/20 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-grid-green/[0.05] z-0"></div>
        <div className="absolute inset-0 scanline opacity-50 z-0"></div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" aria-label="Close">
          <X className="w-6 h-6" />
        </button>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-green-300 mb-4">[// SECURE_CHANNEL_CONFIRMATION //]</h2>
          <pre className="whitespace-pre-wrap text-sm md:text-base">
            {displayedText}
            <span className="blinking-cursor">_</span>
          </pre>
        </div>
        <style jsx>{`
          .scanline { width: 100%; height: 100%; position: absolute; top: 0; left: 0; background: linear-gradient( to bottom, rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50% ); background-size: 100% 4px; animation: scan 10s linear infinite; pointer-events: none; }
          @keyframes scan { from { background-position: 0 0; } to { background-position: 0 -200px; } }
          .blinking-cursor { animation: blink 1s step-end infinite; font-weight: bold; position: relative; top: 1px; margin-left: 2px; }
          @keyframes blink { from, to { color: transparent; } 50% { color: #34d399; } }
          @keyframes fade-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        `}</style>
      </div>
    </div>
  );
};

export default CyberSuccessMessage;
'use client';

import React from 'react';

const CyberTextDisplay = ({ data }) => {
  const renderMessageWithLineNumbers = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => (
      <div key={index} className="flex">
        <span className="text-gray-600 w-8 flex-shrink-0 select-none">{String(index + 1).padStart(2, '0')}</span>
        <span>
          {line}
          {index === lines.length - 1 && <span className="blinking-cursor">_</span>}
        </span>
      </div>
    ));
  };

  return (
    <div className="font-mono text-green-400 bg-black/50 p-4 md:p-6 rounded-3xl border border-green-500/30 h-full min-h-[300px] lg:min-h-full relative overflow-hidden text-sm md:text-base break-all">
      <div className="absolute inset-0 bg-grid-green/[0.05] z-0"></div>
      <div className="absolute inset-0 scanline opacity-50 z-0"></div>
      <div className="relative z-10 glitch-container">
        <p className="text-gray-500 text-xs select-none">{'// INCOMING_TRANSMISSION_BUFFER'}</p>
        <div className="mt-4 space-y-1">
          <div className="flex items-start">
            <span className="text-cyan-400 w-20 sm:w-24 flex-shrink-0 select-none">usr_name:</span>
            <span className="text-white ml-2">&#39;{data.name}&#39;</span>
          </div>
          <div className="flex items-start">
            <span className="text-cyan-400 w-20 sm:w-24 flex-shrink-0 select-none">usr_email:</span>
            <span className="text-white ml-2">&#39;{data.email}&#39;</span>
          </div>
          <div className="flex items-start">
            <span className="text-cyan-400 w-20 sm:w-24 flex-shrink-0 select-none">subject:</span>
            <span className="text-white ml-2">&#39;{data.subject}&#39;</span>
          </div>
          <div className="flex items-start mt-2">
            <span className="text-cyan-400 w-20 sm:w-24 flex-shrink-0 select-none">message:</span>
          </div>
          <div className="pl-4 border-l-2 border-green-500/20 ml-4 mt-1">
            {renderMessageWithLineNumbers(data.message)}
          </div>
        </div>
      </div>
      <style jsx>{`
        .scanline {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(
            to bottom,
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.25) 50%
          );
          background-size: 100% 4px;
          animation: scan 10s linear infinite;
          pointer-events: none;
        }
        @keyframes scan {
          from { background-position: 0 0; }
          to { background-position: 0 -200px; }
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
          font-weight: bold;
          position: relative;
          top: 1px;
          margin-left: 2px;
        }
        @keyframes blink {
          from, to { color: transparent; }
          50% { color: #34d399; }
        }
      `}</style>
    </div>
  );
};

export default CyberTextDisplay;

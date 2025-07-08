'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import HighlightText from './HighlightText';

const ServiceCard = ({ service, className, highlight = ''}) => {
  const Icon = service.icon;
  return (
    <div className={`relative bg-black/30 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 ${className || ''}`}>
      {/* Decorative Gradient */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-spin-slow"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 mb-6 flex items-center justify-center bg-blue-900/50 rounded-2xl border border-blue-500/30">
          {Icon && <Icon className="w-8 h-8 md:w-10 md:h-10 text-blue-300" />}
        </div>
         <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          <HighlightText text={service.title} highlight={highlight} />
        </h3>
        <p className="text-gray-400 text-sm md:text-base mb-4 flex-grow">
          <HighlightText text={service.description} highlight={highlight} />
        </p>
      </div>
      
      <div className="relative z-10 mt-auto">
        <Link
          href={service.link}
          className="inline-flex items-center font-semibold text-blue-300 group-hover:text-white transition-colors"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
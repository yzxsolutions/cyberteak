'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = ({ isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed bottom-4 sm:top-6 sm:bottom-auto left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full sm:-translate-y-full pointer-events-none'
      }`}
    >
      <div
        className={`relative h-16 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full overflow-hidden transition-all duration-500 ease-in-out shadow-lg shadow-white/5 ${
          isHovered ? 'w-full max-w-md' : 'w-24'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-around w-full">
          <Link
            href="/services"
            className={`text-white cursor-pointer font-semibold text-base sm:text-lg hover:text-blue-400 transition-all duration-300 ease-in-out whitespace-nowrap ${
              isHovered ? 'opacity-100 px-4' : 'opacity-0 w-0 px-0 pointer-events-none'
            }`}
            style={{ transitionDelay: isHovered ? '100ms' : '0ms' }}
          >
            Services
          </Link>
          <Link href="/">
            <Image src="/images/cyberteak_logo.svg" width={100} height={100} alt="Logo" className="h-10 cursor-pointer" />
          </Link>
          <Link
            href="/contact"
            className={`text-white cursor-pointer font-semibold text-base sm:text-lg hover:text-blue-400 transition-all duration-300 ease-in-out whitespace-nowrap ${
              isHovered ? 'opacity-100 px-4' : 'opacity-0 w-0 px-0 pointer-events-none'
            }`}
            style={{ transitionDelay: isHovered ? '100ms' : '0ms' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
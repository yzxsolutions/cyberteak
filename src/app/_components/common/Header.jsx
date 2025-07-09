'use client';

import Image from 'next/image';
import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, easeIn } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { headerServices } from '../../_data/services';

const Header = ({ isScrolled }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  return (
    <div
      className="fixed bottom-4 sm:top-6 sm:bottom-auto left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 ease-in-out"
    >
      <div
        className={`relative flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full overflow-visible transition-all duration-300 ease-in-out shadow-lg shadow-white/5 ${
          isHovered ? 'w-full max-w-md' : 'w-24'
        } ${isScrolled ? 'h-14' : 'h-16'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-around w-full">
          <div
            className="relative"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 text-white cursor-pointer font-semibold hover:text-blue-400 transition-all duration-300 ease-in-out whitespace-nowrap ${
                isHovered ? 'opacity-100 px-4' : 'opacity-0 w-0 px-0 pointer-events-none'
              } ${isScrolled ? 'text-sm' : 'text-base sm:text-lg'}`}
              style={{ transitionDelay: isHovered ? '100ms' : '0ms' }}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesMenuOpen && isHovered ? 'rotate-180' : ''}`} />
            </Link>
            <AnimatePresence>
              {isServicesMenuOpen && isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max max-w-4xl"
                >
                  <div className="bg-black/80 backdrop-blur-lg rounded-2xl border border-white/10 p-6 shadow-2xl shadow-blue-500/10">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4">
                      {headerServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            tabIndex={isServicesMenuOpen && isHovered ? 0 : -1}
                            className="group flex items-center gap-3 text-white/80 hover:text-blue-400 transition-colors duration-200 whitespace-nowrap py-1 text-sm"
                          >
                            <Icon className="w-4 h-4 text-white/50 group-hover:text-blue-400 transition-colors duration-200" />
                            {service.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/">
            <Image src="/images/cyberteak_logo.svg" width={100} height={100} alt="Logo" className={`cursor-pointer transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`} />
          </Link>
          <Link
            href="/contact"
            className={`text-white cursor-pointer font-semibold hover:text-blue-400 transition-all duration-300 ease-in-out whitespace-nowrap ${
              isHovered ? 'opacity-100 px-4' : 'opacity-0 w-0 px-0 pointer-events-none'
            } ${isScrolled ? 'text-sm' : 'text-base sm:text-lg'}`}
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
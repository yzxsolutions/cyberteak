'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Aurora from '../_components/ui/Aurora';
import { Montserrat } from 'next/font/google'; 
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '../_components/common/Header';
import Link from 'next/link';
import Footer from '../_components/common/Footer';
import CardSwap, { Card } from '../_components/ui/CardSwap'; // prettier-ignore
import { ArrowRight, ArrowLeft, ShieldCheck, DatabaseZap, Users, ServerCog, ArrowUp } from 'lucide-react';
import Particles from '../_components/ui/Particles';
import { servicesData } from '../_data/services';
import { cardData, productsData, whyChooseUsData } from '../_data/marketing';
import ServiceCard from '../_components/ui/ServiceCard';

// Configure the Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'], // Specify the subsets you need (e.g., 'latin', 'cyrillic', etc.)
  display: 'swap',   // Controls how the font is displayed while loading
  variable: '--font-montserrat', // Define a CSS variable for Tailwind to use
});

export default function Page() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);
  const servicesContainerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // --- GSAP Intro Animation ---
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set([imageRef.current, titleRef.current, subtitleRef.current], { autoAlpha: 0 });

    tl.fromTo(
      imageRef.current,
      { y: -50, scale: 0.8 },
      { y: 0, scale: 1, autoAlpha: 1, duration: 1.2 }
    ).fromTo(
      titleRef.current,
      { y: 20 },
      { y: 0, autoAlpha: 1, duration: 0.8 },
      '-=0.7'
    ).fromTo(
      subtitleRef.current,
      { y: 20 },
      { y: 0, autoAlpha: 1, duration: 0.8 },
      '-=0.6'
    );

    // --- Locomotive Scroll Initialization ---
    // We need to check for containerRef.current to avoid errors on fast refresh
    if (containerRef.current) {
      import('locomotive-scroll').then((locomotiveModule) => {
        scrollRef.current = new locomotiveModule.default({
          el: containerRef.current,
          smooth: true,
          lerp: 0.08,
        });

        // Listen for scroll events to toggle header visibility
        scrollRef.current.on('scroll', (instance) => {
          const scrollY = instance.scroll.y;
          setIsScrolled(scrollY > 50);
          setShowBackToTop(scrollY > 400);
        });
      });
    }

    // --- Cleanup ---
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
      tl.kill();
    };
  }, []);

  // Animate content on the left when card changes
  useEffect(() => {
    if (contentRef.current) {
      // Use GSAP to animate the new content in
      gsap.fromTo(contentRef.current.children,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
      );
    }
  }, [activeCardIndex]);

  const activeCard = cardData[activeCardIndex];

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0);
    }
  };

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (servicesContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = servicesContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // A little buffer to account for fractional pixels
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = servicesContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons, { passive: true });
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const handleServiceScroll = (direction) => {
    if (servicesContainerRef.current) {
      // Based on md card width + gap: 400px + 32px
      const scrollAmount = 432;
      const currentScroll = servicesContainerRef.current.scrollLeft;

      const newScrollPosition =
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      servicesContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main ref={containerRef} data-scroll-container className="bg-black">
      <section data-scroll-section className="relative h-screen w-full overflow-hidden">
        {/* Optional: Adds a subtle grid background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-top [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="h-full w-full flex items-center justify-center">
        
          <Aurora
            colorStops={['#1855FF', '#000000', '#1855FF']}
            blend={1.5}
            amplitude={1.0}
            speed={0.5}
          />
          
          <div className="absolute flex flex-col items-center justify-center gap-4 z-20">
            <div ref={imageRef} className="invisible">
              <Image src="/images/cyberteak_logo.svg" alt="CyberTeak Logo" width={200} height={200} />
            </div>
            <h1
              ref={titleRef}
              className={`invisible tracking-widest text-5xl font-bold md:text-7xl text-center z-10 gradient-text-blue-center ${montserrat.variable}`}
            >
              CyberTeak
            </h1>
            <h5 ref={subtitleRef} className="invisible text-white font-bold tracking-widest text-center z-10 text-lg">
              Your Shield in the Digital World
            </h5>
          </div>
        </div>

        {/* Scroll Down Mouse Icon */}
        <div data-scroll data-scroll-speed="1" data-scroll-position="top" className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-8 border-2 border-white rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
          </div>
        </div>

      </section>

      <section id="about" data-scroll-section className="relative min-h-screen w-full bg-black text-white flex items-center justify-center py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div ref={contentRef} className="flex flex-col gap-6 px-4">
            <div>{activeCard.icon}</div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-blue-right">{activeCard.title}</h2>
            <p className="text-lg text-gray-300">{activeCard.description}</p>
            {activeCard.cta && (
              <div className="mt-6">
                <a
                  href={activeCard.cta.link}
                  className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                >
                  {activeCard.cta.text}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>

          {/* Right Side: CardSwap */}
          <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center px-4 md:px-0 overflow-hidden">
            <CardSwap
              width={780}
              height={480}
              cardDistance={50}
              verticalDistance={50}
              delay={4000}
              pauseOnHover={true}
              onFrontCardChange={setActiveCardIndex}
            >
              {cardData.map((card, index) => (
                <Card key={index} className='relative h-full w-full overflow-hidden rounded-2xl shadow-lg shadow-blue-500/10'>
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </section>

       {/* Our Products Section */}
        <section id="products" data-scroll-section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text-blue-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              Our Products
            </motion.h2>
            <div className="space-y-24">
              {productsData.map((product, index) => (
                <div
                  key={product.title}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
                >
                  <motion.div
                    className={`relative w-full h-96 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20 group transition-shadow duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/30 ${
                      index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </motion.div>
                  <motion.div
                    className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
                  >
                    <h3 className="text-3xl font-bold mb-4 gradient-text-blue-right">{product.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{product.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Why Choose Us Section */}
      <section id="why-us" data-scroll-section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-blue-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose CyberTeak?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We go beyond traditional cybersecurity, offering a predictive, comprehensive, and accessible platform to secure your digital world.
          </motion.p>
          <div className="max-w-4xl mx-auto divide-y divide-white/10">
            {whyChooseUsData.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-8 py-12 first:pt-0 last:pb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-900/50 rounded-2xl border border-blue-500/30 mx-auto sm:mx-0">
                  {feature.icon}
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section data-scroll-section className="relative bg-black text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text-blue-center">
            About CyberTeak
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-16">
            CyberTeak, powered by Codeteak Technologies Pvt Ltd, is at the forefront of digital defense. We are a team of passionate cybersecurity experts dedicated to providing innovative and proactive security solutions. Our mission is to empower businesses to thrive in a secure digital ecosystem, protecting their assets from the ever-evolving landscape of cyber threats.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-6 bg-black/20 rounded-2xl border border-white/10 transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-blue-900/50 rounded-2xl border border-blue-500/30">
                <ShieldCheck className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-400">To deliver cutting-edge cybersecurity services that protect our clients' most valuable assets and ensure their peace of mind.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black/20 rounded-2xl border border-white/10 transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-blue-900/50 rounded-2xl border border-blue-500/30">
                <Users className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Team</h3>
              <p className="text-gray-400">A collective of certified professionals with deep expertise in ethical hacking, threat intelligence, and security architecture.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black/20 rounded-2xl border border-white/10 transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-blue-900/50 rounded-2xl border border-blue-500/30">
                <DatabaseZap className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Approach</h3>
              <p className="text-gray-400">We combine advanced technology with a proactive, intelligence-driven methodology to stay ahead of cyber adversaries.</p>
            </div>
          </div>
        </div>
      </section>

      <section id='services' data-scroll-section className="relative min-h-screen w-full bg-black text-white flex flex-col justify-center py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#1855FF', '#00A1FF']}
            particleCount={150}
            particleSpread={12}
            speed={0.05}
            particleBaseSize={80}
            alphaParticles={true}
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center gradient-text-blue-center">
            A Fortress For Your Data
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our suite of services designed to protect your digital assets. Scroll horizontally to see our featured offerings or view all our services.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 mb-20"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="relative w-full">
          <button
            onClick={() => handleServiceScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <div
            ref={servicesContainerRef}
            className="w-full p-4 md:p-10 flex gap-8 pl-4 md:pl-[calc(50%-500px)] overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                className="w-[350px] h-[450px] md:w-[400px] md:h-[500px] flex-shrink-0 snap-start"
              />
            ))}
          </div>

          <button
            onClick={() => handleServiceScroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      <Footer />
      </main>
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
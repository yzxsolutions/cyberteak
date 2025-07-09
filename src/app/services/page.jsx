'use client';

import { useState, useEffect } from 'react';
import Header from '../_components/common/Header';
import Footer from '../_components/common/Footer';
import { servicesData } from '../_data/services';
import ServiceCard from '../_components/ui/ServiceCard';
import { Montserrat } from 'next/font/google';
import Particles from '../_components/ui/Particles';
import { Search, X, Loader2, ChevronRight, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const SERVICES_PER_PAGE = 9;

function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const isSearching = searchQuery !== debouncedQuery;
  const [currentPage, setCurrentPage] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Debounce the search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Filter services based on the debounced query
  useEffect(() => {
    const lowercasedQuery = debouncedQuery.toLowerCase().trim();
    if (lowercasedQuery === '') {
      setFilteredServices(servicesData);
    } else {
      const newFilteredServices = servicesData.filter(service => {
        const titleMatch = service.title.toLowerCase().includes(lowercasedQuery);
        const descriptionMatch = service.description.toLowerCase().includes(lowercasedQuery);
        const longDescriptionMatch = service.longDescription.toLowerCase().includes(lowercasedQuery);
        const keyFeaturesMatch = service.keyFeatures.some(feature => feature.toLowerCase().includes(lowercasedQuery));
        const slugMatch = service.slug.toLowerCase().replace(/-/g, ' ').includes(lowercasedQuery);

        return titleMatch || descriptionMatch || longDescriptionMatch || keyFeaturesMatch || slugMatch;
      });
      setFilteredServices(newFilteredServices);
    }
    setCurrentPage(1); // Reset to first page on new search
  }, [debouncedQuery]);

  // Effect for Back to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Pagination logic
  const indexOfLastService = currentPage * SERVICES_PER_PAGE;
  const indexOfFirstService = indexOfLastService - SERVICES_PER_PAGE;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(filteredServices.length / SERVICES_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    const servicesSection = document.getElementById('services-grid');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getPaginationItems = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage < 5) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (currentPage > totalPages - 4) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const paginationItems = getPaginationItems();

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main className={`bg-black text-white ${montserrat.variable} font-sans min-h-screen`}>
        <section className="relative pt-28 md:pt-40 pb-16 md:pb-24">
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={['#1855FF', '#00A1FF']}
              particleCount={100}
              particleSpread={15}
              speed={0.03}
              particleBaseSize={40}
              alphaParticles={true}
            />
          </div>
          <div className="container mx-auto px-4 z-10 relative">
            <nav className="flex items-center text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white font-medium">Services</span>
            </nav>

            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold gradient-text-blue-center mb-4">
                Our Services
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                We offer a comprehensive suite of cybersecurity services designed to protect your organization from the full spectrum of digital threats. Explore our offerings to find the right solutions for your security needs.
              </p>
            </div>

            <div className="mb-12">
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search services (e.g., 'Penetration Testing', 'Cloud', 'Compliance')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  {isSearching ? (
                    <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
                  ) : (
                    searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                        aria-label="Clear search"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            <div id="services-grid">
              {filteredServices.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentServices.map(service => (
                      <ServiceCard key={service.slug} service={service} highlight={debouncedQuery} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-16 space-x-2 sm:space-x-4">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 transition-colors"
                        aria-label="Previous page"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Previous</span>
                      </button>

                      <div className="flex items-center space-x-2">
                        {paginationItems.map((page, index) =>
                          page === '...' ? (
                            <span
                              key={`dots-${index}`}
                              className="flex items-center justify-center w-10 h-10 text-gray-500"
                            >
                              ...
                            </span>
                          ) : (
                            <button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              className={`w-10 h-10 rounded-lg transition-colors ${
                                currentPage === page
                                  ? 'bg-blue-600 text-white font-bold'
                                  : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50'
                              }`}
                            >
                              {page}
                            </button>
                          )
                        )}
                      </div>

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 transition-colors"
                        aria-label="Next page"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold text-gray-300">No Services Found</h3>
                  <p className="text-gray-400 mt-2">Your search for "{searchQuery}" did not match any services. Try a different keyword.</p>
                </div>
              )}
            </div>
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

export default ServicesPage;
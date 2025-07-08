'use client';

import { useState, useEffect } from 'react';
import Header from '../_components/common/Header';
import Footer from '../_components/common/Footer';
import { servicesData } from '../_data/services';
import ServiceCard from '../_components/ui/ServiceCard';
import { Montserrat } from 'next/font/google';
import Particles from '../_components/ui/Particles';
import { Search, X, Loader2 } from 'lucide-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const isSearching = searchQuery !== debouncedQuery;

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
  }, [debouncedQuery]);

  return (
    <>
      <Header isVisible={true} />
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

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map(service => (
                  <ServiceCard key={service.slug} service={service} highlight={debouncedQuery} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-300">No Services Found</h3>
                <p className="text-gray-400 mt-2">Your search for "{searchQuery}" did not match any services. Try a different keyword.</p>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default ServicesPage;


import { notFound } from 'next/navigation';
import { servicesData } from '../../_data/services';
import Header from '../../_components/common/Header';
import Footer from '../../_components/common/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Particles from '../../_components/ui/Particles';

// This function can be used by Next.js to pre-render all service pages at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <Header isVisible={true} />
      <main className="bg-black text-white font-sans">
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={['#1855FF', '#00A1FF']}
              particleCount={50}
              particleSpread={10}
              speed={0.02}
              particleBaseSize={40}
              alphaParticles={true}
            />
          </div>
          <div className="container mx-auto px-4 z-10 relative">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-blue-900/50 rounded-2xl border border-blue-500/30">
                <Icon className="w-12 h-12 text-blue-300" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold gradient-text-blue-left">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-300 mt-2 max-w-3xl">{service.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-black/20 border border-white/10 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white">Service Overview</h2>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {service.longDescription}
                  </p>
                </div>

                <div className="bg-black/20 border border-white/10 rounded-2xl p-8 mt-12">
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Process</h2>
                  <div className="space-y-8">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-900/50 border border-blue-500/30 mr-6">
                          <span className="font-bold text-xl text-blue-300">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <p className="text-gray-400 mt-1">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-28">
                  <div className="bg-black/20 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-white">Key Features</h3>
                    <ul className="space-y-4">
                      {service.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                    >
                      Request a Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}


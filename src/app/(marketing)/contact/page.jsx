// In ContactPage.js
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header from '../../_components/common/Header';
import Footer from '../../_components/common/Footer';
import { Send, Briefcase, Phone } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import CyberSuccessMessage from '../../_components/ui/CyberSuccessMessage';
import CyberInput from '../../_components/ui/CyberInput';
import CyberTextDisplay from '../../_components/ui/CyberTextDisplay';
import Link from 'next/link';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [hasTyped, setHasTyped] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission loading
  const audioRef = useRef(null);

  // === IMPORTANT: Replace with your deployed Google Apps Script Web App URL ===
  const GOOGLE_APP_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxq_NYHGJ7ETDEtxP49YM6l463UzF9gXTvvUP8t_Gcohzc1VQc_ZmsDt2P1Emqz-A7g/exec';
  // ===========================================================================


  const playTypingSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = Math.random() * 0.2 + 0.1; // Randomize volume for realism
      audioRef.current.playbackRate = Math.random() * 0.4 + 0.8; // Randomize speed
      audioRef.current.play().catch(error => {/* Ignore play errors, e.g., user hasn't interacted yet */});
    }
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = 'Name is required.';
    if (!data.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (data.phone.trim() && !/^\+?[0-9\s-()]{7,20}$/.test(data.phone)) {
      newErrors.phone = 'Phone number is invalid.';
    }
    if (!data.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!data.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  useEffect(() => {
    const validationErrors = validateForm(formData);
    const touchedErrors = Object.keys(validationErrors).reduce((acc, key) => {
      if (touched[key]) {
        acc[key] = validationErrors[key];
      }
      return acc;
    }, {});
    setErrors(touchedErrors);
  }, [formData, touched]);

  const handleChange = (e) => {
    if (!hasTyped) {
      setHasTyped(true);
    }
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    playTypingSound();
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
    setHasTyped(false);
    setErrors({});
    setTouched({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true); // Set submitting state
      try {
        const response = await fetch(GOOGLE_APP_SCRIPT_WEB_APP_URL, {
          // We are redirecting the POST request through a serverless function to handle CORS
          // This is a common pattern when the target API (like Google Apps Script)
          // doesn't easily support preflight OPTIONS requests from browsers.
          method: "POST",
          body: new URLSearchParams(formData) // Send as form data
        });

        
        // With a proper CORS setup, we can now check the response status
        if (response.ok) {
          const result = await response.json();
          console.log('Form submission successful:', result);
          setShowSuccess(true);
        } else {
          console.error('Failed to initiate form submission to Apps Script.');
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error sending form data to Apps Script:', error);
        alert('An error occurred while sending your message. Please try again.');
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    } else {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, phone: true, subject: true, message: true });
    }
  };

  return (
    <>
      <Header isVisible={true} />
      {showSuccess && <CyberSuccessMessage onClose={handleSuccessClose} />}
      <audio ref={audioRef} src="/sounds/cyber-keyboard.mp3" preload="auto"></audio>
      <main className={`bg-black text-white ${montserrat.variable} font-sans overflow-x-hidden`}>
        <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-top [mask-image:linear-gradient(to_bottom,white,transparent)]"></div> 
          <div className="container mx-auto px-4 z-10">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold gradient-text-blue-center mb-4">
                Get In Touch
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                Have a question or a project in mind? We&#39;d love to hear from you. Reach out to us, and let&apos;s build something secure together.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-blue-500 text-white font-bold py-3 px-6 md:px-8 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  <Briefcase className="w-5 h-5" />
                  Explore Our Services
                </Link>
                <a
                  href="tel:9995203149"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-3 px-6 md:px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-black/20 border border-white/10 rounded-3xl p-4 sm:p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-blue-500/5">
              {/* Cyber Display */}
              {hasTyped && <CyberTextDisplay data={formData} />}

              {/* Contact Form */}
              <div className={hasTyped ? '' : 'lg:col-span-2'}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <CyberInput type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} onBlur={handleBlur} required error={errors.name} />
                    <CyberInput type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} onBlur={handleBlur} required error={errors.email} />
                  </div>
                  <CyberInput type="tel" name="phone" placeholder="Phone (Optional)" value={formData.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} />
                  <CyberInput type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} onBlur={handleBlur} required error={errors.subject} />
                  <CyberInput as="textarea" name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} onBlur={handleBlur} required error={errors.message} />
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                      disabled={isSubmitting} // Disable button during submission
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
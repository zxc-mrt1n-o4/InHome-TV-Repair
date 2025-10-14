'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function TVRepairLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    let phoneNumber = value.replace(/\D/g, '');
    
    // Don't allow 1 as first digit (regional code)
    if (phoneNumber.startsWith('1')) {
      phoneNumber = phoneNumber.slice(1);
    }
    
    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/tv-repair-callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service_type: 'In-Home TV Repair & Installation (Visit)'
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }
      
      setSubmitMessage('Thank you! We will call you back within 30 minutes to schedule your TV repair visit.');
      setFormData({ name: '', phone: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('There was an error submitting your request. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Mobile Optimized */}
      <header className="bg-white shadow-md border-b border-slate-200 sticky top-0 z-50">
        <div className="w-full px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Section - Responsive */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
              <div className="min-w-0 flex-1">
                <div className="text-sm sm:text-lg lg:text-xl font-black text-slate-800 truncate">
                  In-Home TV Repair
                </div>
                <div className="text-xs text-cyan-600 font-semibold">
                  We Come to You!
                </div>
              </div>
            </div>
            
            {/* CTA Button - Responsive */}
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 text-white font-bold py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base whitespace-nowrap flex-shrink-0 ml-2"
            >
              <span className="hidden sm:inline">Request Callback</span>
              <span className="sm:hidden">Get Quote</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Info Bar */}
        <div className="bg-cyan-50 border-t border-cyan-100 py-2 px-3 sm:hidden">
          <div className="flex items-center justify-center space-x-4 text-xs text-slate-700">
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="w-4 h-4 text-cyan-600" />
              <span>Same-Day</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="w-4 h-4 text-cyan-600" />
              <span>All Brands</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="w-4 h-4 text-cyan-600" />
              <span>90-Day Warranty</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-white py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                Professional <span className="text-cyan-600">In-Home TV Repair & Installation</span> in Charlotte, NC
              </h1>
              
              {/* IN-HOME Service Badge - Mobile Optimized */}
              <div className="inline-flex flex-col sm:flex-row items-center sm:space-x-2 bg-cyan-100 border-2 border-cyan-600 text-cyan-800 font-bold py-3 px-4 sm:px-6 rounded-lg mb-4 sm:mb-6 w-full sm:w-auto">
                <div className="flex items-center space-x-2 mb-1 sm:mb-0">
                  <span className="text-2xl">🏠</span>
                  <span className="text-base sm:text-lg">WE COME TO YOUR HOME</span>
                </div>
                <span className="text-sm sm:text-base text-center sm:text-left">No Need to Unplug or Move Your TV!</span>
              </div>
              
              <p className="text-xl text-slate-600 mb-6">
                Expert in-home TV repair and installation services. We come directly to your home or business. Fix all brands and models - screen issues, connectivity problems, smart TV setup, and professional wall mounting.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircleIcon className="w-6 h-6 text-cyan-600" />
                  <span>In-Home Service</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircleIcon className="w-6 h-6 text-cyan-600" />
                  <span>Same-Day Available</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircleIcon className="w-6 h-6 text-cyan-600" />
                  <span>All Brands</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircleIcon className="w-6 h-6 text-cyan-600" />
                  <span>90-Day Warranty</span>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                Get Free Quote
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/services/tv-repair.webp"
                  alt="TV Repair Service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Common TV Problems We Fix
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our expert technicians can diagnose and repair all these issues and more
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Screen not turning on',
              'No picture or sound',
              'Board overheat or shutdown',
              'HDMI connection problems',
              'Smart TV connectivity issues',
              'Remote control not working',
              'Lines or discoloration on screen of TV',
              'Netflix, Hulu, or streaming app issues',
              'Audio problems'
            ].map((issue, index) => (
              <div key={index} className="flex items-start space-x-3 bg-slate-50 rounded-lg p-4 border border-slate-200">
                <CheckCircleIcon className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">{issue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose In-Home Service?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              <span className="font-bold text-cyan-600">We come to you!</span> No need to disconnect, transport, or wait in repair shops.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ClockIcon className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Same-Day Service</h3>
              <p className="text-slate-600">
                Fast response times when you need us most
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShieldCheckIcon className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">90-Day Warranty</h3>
              <p className="text-slate-600">
                All repairs backed by our quality guarantee
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <WrenchScrewdriverIcon className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Expert Technicians</h3>
              <p className="text-slate-600">
                Licensed and experienced professionals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <PhoneIcon className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">In-Home Service</h3>
              <p className="text-slate-600">
                We come to you for convenient repairs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 sm:py-20 bg-white scroll-mt-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
              Request In-Home Service
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto px-2">
              Fill out the form below and we'll call you back within 30 minutes to schedule your in-home visit.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-base sm:text-lg transition-all"
                  placeholder="Your full name"
                  disabled={isSubmitting}
                  autoComplete="name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  maxLength={14}
                  className="w-full px-4 py-3 sm:py-4 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-base sm:text-lg transition-all"
                  placeholder="(XXX) XXX-XXXX"
                  disabled={isSubmitting}
                  autoComplete="tel"
                  inputMode="numeric"
                />
              </div>
              
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 disabled:bg-cyan-400 text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Request Callback'}
                </button>
                <p className="text-xs sm:text-sm text-slate-500 mt-3">
                  📞 We'll call you back within 30 minutes
                </p>
              </div>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 sm:p-5 rounded-lg text-sm sm:text-base ${
                    submitMessage.includes('Thank you')
                      ? 'bg-green-50 text-green-800 border-2 border-green-400'
                      : 'bg-red-50 text-red-800 border-2 border-red-400'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <span className="text-lg sm:text-xl flex-shrink-0">
                      {submitMessage.includes('Thank you') ? '✅' : '❌'}
                    </span>
                    <span className="flex-1">{submitMessage}</span>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">In-Home TV Repair & Installation</h3>
              <p className="text-slate-300">
                Professional In-Home TV Repair & Installation Services in Charlotte, NC
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-slate-300 mb-2">Phone: (980) 987-0005</p>
              <p className="text-slate-300">Service Area: Charlotte, NC and surrounding areas</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-slate-300">Mon-Sat: 8am-9pm</p>
              <p className="text-slate-300">Emergency service available</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} In-Home TV Repair & Installation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

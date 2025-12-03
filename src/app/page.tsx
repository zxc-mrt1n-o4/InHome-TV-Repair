'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  BoltIcon
} from '@heroicons/react/24/solid';
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
      {/* Header - Mobile First */}
      <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="w-full px-4 max-w-md mx-auto sm:max-w-7xl sm:px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex-1">
              <div className="text-lg font-black text-slate-800">
                TV Repair Charlotte
              </div>
              <div className="flex items-center space-x-1 text-sm font-bold" style={{color: '#FF5722'}}>
                <HomeIcon className="w-4 h-4" />
                <span>We Come to You!</span>
              </div>
            </div>
            
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg text-base"
              style={{backgroundColor: '#FF5722'}} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64A19'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF5722'}
            >
              Call Me Back
            </button>
          </div>
        </div>
        
        {/* Mobile Benefits Bar */}
        <div className="border-t py-5 px-4" style={{backgroundColor: '#FFF3E0', borderColor: '#FFCCBC'}}>
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center space-y-1">
                <CheckCircleIcon className="w-8 h-8" style={{color: '#FF5722'}} />
                <span className="text-sm font-bold text-slate-700">Same-Day</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <CheckCircleIcon className="w-8 h-8" style={{color: '#FF5722'}} />
                <span className="text-sm font-bold text-slate-700">All Brands</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <CheckCircleIcon className="w-8 h-8" style={{color: '#FF5722'}} />
                <span className="text-sm font-bold text-slate-700">Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile First */}
      <section className="py-8" style={{background: 'linear-gradient(to bottom right, #FFF3E0, white)'}}>
        <div className="w-full px-4 max-w-md mx-auto sm:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
              Professional <span style={{color: '#FF5722'}}>TV Repair</span><br />in Charlotte, NC
            </h1>
            
            {/* Mobile Service Badge */}
            <div className="border-2 font-bold py-4 px-6 rounded-xl mb-6" style={{backgroundColor: '#FFF3E0', borderColor: '#FF5722', color: '#D84315'}}>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <HomeIcon className="w-8 h-8" style={{color: '#FF5722'}} />
                <span className="text-lg">WE COME TO YOU</span>
              </div>
              <div className="text-sm">No need to unplug or move your TV!</div>
            </div>
            
            {/* Mobile Image */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-xl mb-6">
              <Image
                src="/services/tv-repair.webp"
                alt="TV Repair Service"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Expert TV repair at your home. We fix all brands - screen issues, connectivity problems, smart TV setup, and wall mounting.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200 text-xl w-full"
              style={{backgroundColor: '#FF5722'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64A19'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF5722'}
            >
              <PhoneIcon className="w-6 h-6" />
              <span>Get Free Quote Now</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Common Issues Section - Mobile First */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              TV Problems We Fix
            </h2>
            <p className="text-base text-slate-600">
              Our technicians fix all these issues at your home
            </p>
          </div>
          
          <div className="space-y-3">
            {[
              'Screen not turning on',
              'No picture or sound', 
              'HDMI connection problems',
              'Smart TV connectivity issues',
              'Remote control not working',
              'Netflix & streaming app issues',
              'Audio problems',
              'Lines on screen',
              'Board overheating'
            ].map((issue, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-50 rounded-xl p-4 border border-slate-200">
                <CheckCircleIcon className="w-7 h-7 flex-shrink-0" style={{color: '#FF5722'}} />
                <span className="text-slate-700 font-medium">{issue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Mobile First */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="w-full px-4 max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Why Choose Us?
            </h2>
            <p className="text-base text-slate-600">
              <span className="font-bold" style={{color: '#FF5722'}}>We come to you!</span> No need to disconnect or transport your TV.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <ClockIcon className="w-8 h-8" style={{color: '#FF5722'}} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Same-Day</h3>
              <p className="text-sm text-slate-600">Fast response times</p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <ShieldCheckIcon className="w-8 h-8" style={{color: '#FF5722'}} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Warranty</h3>
              <p className="text-sm text-slate-600">90-day guarantee</p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <WrenchScrewdriverIcon className="w-8 h-8" style={{color: '#FF5722'}} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Expert Tech</h3>
              <p className="text-sm text-slate-600">Licensed professionals</p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <PhoneIcon className="w-8 h-8" style={{color: '#FF5722'}} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">In-Home</h3>
              <p className="text-sm text-slate-600">We come to you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Mobile First */}
      <section id="contact" className="py-12 bg-white scroll-mt-16">
        <div className="w-full px-4 max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Get Free Quote
            </h2>
            <p className="text-base text-slate-600">
              We'll call you back within 30 minutes to schedule your visit.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-base font-semibold text-slate-700 mb-3">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl text-lg transition-all"
                placeholder="Enter your full name"
                disabled={isSubmitting}
                autoComplete="name"
                onFocus={(e) => {e.target.style.borderColor = '#FF5722'; e.target.style.boxShadow = '0 0 0 3px rgba(255, 87, 34, 0.1)'}}
                onBlur={(e) => {e.target.style.borderColor = '#cbd5e1'; e.target.style.boxShadow = 'none'}}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-base font-semibold text-slate-700 mb-3">
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
                className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl text-lg transition-all"
                placeholder="(XXX) XXX-XXXX"
                disabled={isSubmitting}
                autoComplete="tel"
                inputMode="numeric"
                onFocus={(e) => {e.target.style.borderColor = '#FF5722'; e.target.style.boxShadow = '0 0 0 3px rgba(255, 87, 34, 0.1)'}}
                onBlur={(e) => {e.target.style.borderColor = '#cbd5e1'; e.target.style.boxShadow = 'none'}}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white font-bold text-xl py-5 rounded-xl transition-all duration-200 shadow-lg"
              style={{backgroundColor: isSubmitting ? '#FFAB91' : '#FF5722'}}
              onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#E64A19')}
              onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#FF5722')}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calling You...
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <PhoneIcon className="w-6 h-6" />
                  <span>Call Me Back Now</span>
                </span>
              )}
            </button>
            
            <p className="flex items-center justify-center space-x-1 text-sm text-slate-500">
              <BoltIcon className="w-4 h-4" />
              <span>30-minute response time guaranteed</span>
            </p>

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-5 rounded-xl text-base ${
                  submitMessage.includes('Thank you')
                    ? 'bg-green-50 text-green-800 border-2 border-green-400'
                    : 'bg-red-50 text-red-800 border-2 border-red-400'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className={`w-6 h-6 flex-shrink-0 ${
                    submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'
                  }`} />
                  <span className="flex-1">{submitMessage}</span>
                </div>
              </motion.div>
            )}
          </form>
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

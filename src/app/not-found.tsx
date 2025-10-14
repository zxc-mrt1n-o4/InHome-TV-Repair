'use client';

import Link from 'next/link';
import { PhoneIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function NotFound() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-9xl font-black text-cyan-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
          >
            <HomeIcon className="w-6 h-6" />
            <span>Go to Homepage</span>
          </Link>

          <a
            href="tel:+19808002277"
            className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-cyan-600 font-semibold py-4 px-8 rounded-lg border-2 border-cyan-600 transition-colors duration-200"
          >
            <PhoneIcon className="w-6 h-6" />
            <span>Call (980) 800-2277</span>
          </a>
        </div>

        {/* Help Text */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Need TV Repair or Installation Service?
          </h3>
          <p className="text-slate-600 mb-4">
            We're here to help with all your TV repair and installation needs in Charlotte, NC.
          </p>
          <p className="text-sm text-slate-500">
            Same-day service • Professional installation • All brands • 90-day warranty
          </p>
        </div>
      </div>
    </div>
  );
}

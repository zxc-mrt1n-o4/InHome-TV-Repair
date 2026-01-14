'use client';

import Link from 'next/link';
import { PhoneIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-primary-light flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-10">
        <div>
          <h1 className="text-9xl font-black text-primary-dark mb-4">404</h1>
          <h2 className="text-4xl font-bold text-primary mb-4">Page Not Found</h2>
          <p className="text-lg text-primary/80">
            Sorry, the page you are looking for is not available. Let us guide you back to better
            repair solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 rounded-xl bg-primary text-white font-semibold py-4 px-8 shadow-lg shadow-primary/40 transition-colors duration-200 hover:bg-primary-dark"
          >
            <HomeIcon className="w-6 h-6" />
            <span>Go to Homepage</span>
          </Link>

          <a
            href="tel:+19808002277"
            className="inline-flex items-center justify-center space-x-2 rounded-xl border-2 border-transparent bg-secondary text-primary font-semibold py-4 px-8 transition-colors duration-200 hover:border-primary-dark hover:bg-secondary-dark/80"
          >
            <PhoneIcon className="w-6 h-6" />
            <span>Call (980) 800-2277</span>
          </a>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-7 border border-white/50">
          <h3 className="text-2xl font-bold text-primary-dark mb-3">
            Need TV Repair or Installation?
          </h3>
          <p className="text-primary/80 mb-4">
            We deliver same-day in-home service across Charlotte, NC and keep your devices running strong.
          </p>
          <p className="text-sm font-medium text-primary-dark/80">
            Same-day service - Professional installation - All brands covered - 90-day warranty
          </p>
        </div>
      </div>
    </div>
  );
}

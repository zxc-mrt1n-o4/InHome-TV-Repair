'use client';

import { useEffect } from 'react';

export default function HydrationFix() {
  useEffect(() => {
    // Comprehensive browser extension cleanup
    const cleanupBrowserExtensions = () => {
      // Common extension attributes that cause hydration mismatches
      const extensionAttributes = [
        'speedupyoutubeads',
        'data-extension',
        'data-adblock',
        'data-grammarly',
        'data-lastpass',
        'data-honey',
        'data-darkreader',
        'data-colorblindly',
        'data-stylish',
        'data-userscript',
        'cz-shortcut-listen',
        'data-new-gr-c-s-check-loaded',
        'data-gr-ext-installed',
      ];
      
      // Clean up document element
      extensionAttributes.forEach(attr => {
        if (document.documentElement.hasAttribute(attr)) {
          document.documentElement.removeAttribute(attr);
        }
        if (document.body.hasAttribute(attr)) {
          document.body.removeAttribute(attr);
        }
      });

      // Remove extension-injected elements that might cause issues
      const extensionSelectors = [
        'script[src*="extension"]',
        'link[href*="extension"]',
        'style[data-extension]',
        '[id*="extension"]',
        '[class*="extension"]',
      ];

      extensionSelectors.forEach(selector => {
        try {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => {
            if (el.parentNode && !el.hasAttribute('data-keep')) {
              el.remove();
            }
          });
        } catch (e) {
          // Ignore errors from aggressive cleanup
        }
      });
    };

    // Run cleanup multiple times to catch late-loading extensions
    cleanupBrowserExtensions();
    
    const timeouts = [
      setTimeout(cleanupBrowserExtensions, 100),
      setTimeout(cleanupBrowserExtensions, 500),
      setTimeout(cleanupBrowserExtensions, 1000),
    ];

    // Set up a mutation observer to catch extension modifications
    const observer = new MutationObserver((mutations) => {
      let needsCleanup = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const target = mutation.target as Element;
          if (target === document.documentElement || target === document.body) {
            const attrName = mutation.attributeName;
            if (attrName && (
              attrName.includes('extension') ||
              attrName.includes('speedup') ||
              attrName.includes('adblock') ||
              attrName.includes('grammarly')
            )) {
              needsCleanup = true;
            }
          }
        }
      });
      
      if (needsCleanup) {
        setTimeout(cleanupBrowserExtensions, 0);
      }
    });

    // Observe changes to html and body elements
    observer.observe(document.documentElement, {
      attributes: true,
      attributeOldValue: true,
    });

    observer.observe(document.body, {
      attributes: true,
      attributeOldValue: true,
    });

    // Cleanup
    return () => {
      timeouts.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);

  // This component doesn't render anything
  return null;
} 
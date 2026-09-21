/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScreenshotsShowcase } from './components/ScreenshotsShowcase';
import { DownloadSection } from './components/DownloadSection';
import { FAQPrivacySection } from './components/FAQPrivacySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { APP_CONFIG } from './data/appData';
import { Download, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');

  // Sync with browser URL pathname and hash for clean, separate URLs (e.g. mysite.com/download)
  useEffect(() => {
    const handleUrlChange = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();

      if (pathname.includes('/download') || hash === 'download') {
        setCurrentTab('download');
      } else if (
        pathname.includes('/faq') ||
        pathname.includes('/privacy') ||
        hash === 'faq' ||
        hash === 'privacy' ||
        hash === 'faq-privacy'
      ) {
        setCurrentTab('faq-privacy');
      } else if (pathname.includes('/contact') || hash === 'contact') {
        setCurrentTab('contact');
      } else {
        setCurrentTab('home');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setCurrentTab(tab);
    const targetPath = tab === 'home' ? '/' : `/${tab}`;
    window.history.pushState(null, '', targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToScreenshots = () => {
    if (currentTab !== 'home') {
      handleSelectTab('home');
      setTimeout(() => {
        const el = document.getElementById('screenshots');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('screenshots');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Navigation Header */}
      <Navbar currentTab={currentTab} onSelectTab={handleSelectTab} />

      {/* Main View Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <HeroSection
              onGoToDownload={() => handleSelectTab('download')}
              onScrollToScreenshots={scrollToScreenshots}
            />

            <ScreenshotsShowcase />

            {/* Bottom Download Banner on Home */}
            <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3.5 py-1 text-xs font-semibold text-amber-400 border border-amber-400/20 mb-4">
                  <Zap className="h-3.5 w-3.5" />
                  <span>Ready to boost your copy-paste speed?</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Get Clipboard: Multi Copier CMC Today
                </h2>

                <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                  Free, lightweight Android APK with zero ads and 100% on-device local storage.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => handleSelectTab('download')}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 text-base shadow-lg transition-all"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download APK</span>
                  </button>

                  <a
                    href={APP_CONFIG.parentWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-4 text-sm transition-all"
                  >
                    <span>Visit LinkShare Tools Portal</span>
                    <ExternalLink className="h-4 w-4 text-amber-400" />
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {currentTab === 'download' && (
          <DownloadSection onGoToContact={() => handleSelectTab('contact')} />
        )}

        {currentTab === 'faq-privacy' && (
          <FAQPrivacySection onGoToContact={() => handleSelectTab('contact')} />
        )}

        {currentTab === 'contact' && <ContactSection />}
      </main>

      {/* Persistent Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}

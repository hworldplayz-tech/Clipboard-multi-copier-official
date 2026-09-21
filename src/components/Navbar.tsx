import React from 'react';
import { PageTab } from '../types';
import { APP_CONFIG } from '../data/appData';
import { Download, ExternalLink, Menu, X, Shield, HelpCircle, Phone, Smartphone } from 'lucide-react';

interface NavbarProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      {/* Main navigation bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand logo & title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left transition-opacity hover:opacity-90"
        >
          {/* App icon replicating the golden yellow clipboard icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-sm ring-1 ring-amber-500/20 font-bold">
            <svg
              className="h-5 w-5 fill-slate-900"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V5h2v3h10V5h2v14z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                Multi Copier
              </span>
              <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900 uppercase">
                CMC
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Official Site • by LinkShare
            </p>
          </div>
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => handleNavClick('home')}
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
              currentTab === 'home'
                ? 'bg-amber-50 text-amber-900 font-semibold'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Overview & Features
          </button>
          <button
            onClick={() => handleNavClick('faq-privacy')}
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
              currentTab === 'faq-privacy'
                ? 'bg-amber-50 text-amber-900 font-semibold'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            FAQ & Privacy
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
              currentTab === 'contact'
                ? 'bg-amber-50 text-amber-900 font-semibold'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Primary CTA button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('download')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold shadow-sm transition-all ${
              currentTab === 'download'
                ? 'bg-slate-900 text-white'
                : 'bg-amber-400 text-slate-950 hover:bg-amber-300 hover:shadow'
            }`}
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('download')}
            className="flex items-center gap-1.5 rounded-lg bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-950"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-3 sm:hidden">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                currentTab === 'home'
                  ? 'bg-amber-100 font-semibold text-amber-900'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Smartphone className="h-4 w-4 text-amber-600" />
              App Overview & Screens
            </button>
            <button
              onClick={() => handleNavClick('download')}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                currentTab === 'download'
                  ? 'bg-amber-100 font-semibold text-amber-900'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Download className="h-4 w-4 text-amber-600" />
              Download APK
            </button>
            <button
              onClick={() => handleNavClick('faq-privacy')}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                currentTab === 'faq-privacy'
                  ? 'bg-amber-100 font-semibold text-amber-900'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="h-4 w-4 text-amber-600" />
              FAQ & Privacy Policy
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                currentTab === 'contact'
                  ? 'bg-amber-100 font-semibold text-amber-900'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Phone className="h-4 w-4 text-amber-600" />
              Contact & Support (LinkShare)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

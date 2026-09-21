import React from 'react';
import { PageTab } from '../types';
import { APP_CONFIG } from '../data/appData';
import { ExternalLink, ShieldCheck, Heart, Smartphone } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const handleNav = (tab: PageTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400 text-xs">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400 text-slate-950 font-bold">
                <svg className="h-4 w-4 fill-slate-900" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V5h2v3h10V5h2v14z" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-bold text-white">Clipboard: Multi Copier CMC</span>
                <p className="text-[11px] text-amber-300/90 font-medium">Official Android Utility by LinkShare</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The lightweight multi-clipboard utility for Android with a floating quick copier docked over any running application.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-400 text-[11px]">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Subdomain: <code className="text-amber-300 font-mono">{APP_CONFIG.suggestedSubdomain}</code></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Site Navigation
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Overview & Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('download')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Download APK
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq-privacy')}
                  className="hover:text-amber-300 transition-colors"
                >
                  FAQ & Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* LinkShare Ecosystem */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              LinkShare Official Ecosystem
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Main tools platform and centralized support center:
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={APP_CONFIG.parentWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-slate-800/80 p-2.5 text-xs text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <span>Main Website: <strong>linksshare.online</strong></span>
                <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
              </a>
              <a
                href={APP_CONFIG.parentContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-slate-800/80 p-2.5 text-xs text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <span>Official Contact: <strong>linksshare.online/contact</strong></span>
                <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Clipboard: Multi Copier CMC. All rights reserved. Powered by LinkShare.
          </div>
          <div className="flex items-center gap-4">
            <span>Package: {APP_CONFIG.packageName}</span>
            <span>•</span>
            <span>Version: v{APP_CONFIG.version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

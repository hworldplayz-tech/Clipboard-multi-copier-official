import React from 'react';
import { APP_CONFIG } from '../data/appData';
import {
  Download,
  Smartphone,
  Copy,
  Zap,
  ShieldCheck,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface HeroSectionProps {
  onGoToDownload: () => void;
  onScrollToScreenshots: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGoToDownload,
  onScrollToScreenshots,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50 pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Subtle geometric background accent */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 -z-10 h-72 w-72 rounded-full bg-amber-100/30 blur-2xl pointer-events-none"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-3.5 py-1 text-xs font-bold text-amber-950 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Official Android APK Release</span>
            <span className="text-amber-800/60">•</span>
            <span>v{APP_CONFIG.version}</span>
          </div>

          <a
            href={APP_CONFIG.parentWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300 transition-colors"
          >
            <span>by LinkShare</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </a>
        </div>

        {/* Main Hero Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
            Multi-Clip Android Copying.
            <br />
            <span className="text-amber-500 drop-shadow-xs">Floating Over Any App.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            <strong>Clipboard: Multi Copier CMC</strong> eliminates the constant switching between apps. Keep multiple clips, links, and text snippets readily accessible through a docked floating side drawer with 1-tap Copy & Paste.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onGoToDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 py-3.5 text-base shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
            >
              <Download className="h-5 w-5" />
              <span>Download APK</span>
            </button>

            <button
              onClick={onScrollToScreenshots}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 text-base transition-all"
            >
              <Smartphone className="h-5 w-5 text-amber-600" />
              <span>View Sample Screenshots</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>100% On-Device Offline Storage</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>No Cloud Tracking / Zero Ads</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Lightweight & Battery-Friendly</span>
            </div>
          </div>
        </div>

        {/* App Specifications Bar */}
        <div className="mt-12 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="px-2 pt-2 sm:pt-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Package Name
              </span>
              <p className="text-xs font-mono font-semibold text-slate-800 truncate mt-0.5">
                {APP_CONFIG.packageName}
              </p>
            </div>
            <div className="px-2 pt-2 sm:pt-0 sm:pl-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Latest Version
              </span>
              <p className="text-xs font-bold text-slate-800 mt-0.5">
                v{APP_CONFIG.version} Stable
              </p>
            </div>
            <div className="px-2 pt-2 sm:pt-0 sm:pl-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                OS Requirement
              </span>
              <p className="text-xs font-bold text-slate-800 mt-0.5">
                Android 8.0 or higher
              </p>
            </div>
            <div className="px-2 pt-2 sm:pt-0 sm:pl-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                APK File Size
              </span>
              <p className="text-xs font-bold text-slate-800 mt-0.5">
                {APP_CONFIG.fileSize}
              </p>
            </div>
            <div className="px-2 pt-2 sm:pt-0 sm:pl-4 col-span-2 sm:col-span-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Main Portal
              </span>
              <p className="text-xs font-semibold text-amber-600 mt-0.5">
                LinkShare Ecosystem
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              What Clipboard: Multi Copier CMC Does
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Designed around the exact multitasking workflows shown in the authentic app screens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-4">
                <Zap className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Floating Quick Copier Over Any App
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Activate the 3D Launcher and a slim pill docks at your screen edge. Tap it to pull out the floating drawer over WhatsApp, Telegram, Chrome, or any document.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-4">
                <Copy className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                1-Tap Copy & 1-Tap Paste
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every saved clip in the floating drawer features dedicated <strong>Copy</strong> and <strong>Paste</strong> buttons, so you can paste repetitive messages and numbers in seconds.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-4">
                <Layers className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Workspace Hub & Search
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Filter by Pinned, Links, Numbers, and Media. Review character/word counts, edit text on the fly, and pin frequently used templates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

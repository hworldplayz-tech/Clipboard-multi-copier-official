import React, { useState } from 'react';
import { SCREENSHOT_LIST } from '../data/appData';
import { ScreenshotData } from '../types';
import {
  Smartphone,
  Maximize2,
  CheckCircle2,
  Rocket,
  Copy,
  ClipboardList,
  Layers,
  Sparkles,
  Zap,
  ArrowRight,
  Shield,
  Play,
  RotateCcw,
} from 'lucide-react';

interface ScreenshotsShowcaseProps {
  id?: string;
  headline?: string;
  subtitle?: string;
}

export const ScreenshotsShowcase: React.FC<ScreenshotsShowcaseProps> = ({
  id = 'screenshots',
  headline,
  subtitle,
}) => {
  const [activeScreenId, setActiveScreenId] = useState<string>('floating-whatsapp');
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [interactiveMode, setInteractiveMode] = useState<'idle' | 'active' | 'drawer-open'>('drawer-open');

  const currentScreen = SCREENSHOT_LIST.find((s) => s.id === activeScreenId) || SCREENSHOT_LIST[0];

  return (
    <section id={id} className="py-14 sm:py-20 bg-slate-100/70 border-y border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 mb-3">
            <Smartphone className="h-3.5 w-3.5 text-amber-600" />
            <span>App Visuals & Live Walkthrough</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {headline || 'Sample Screenshots of Clipboard Multi Copier CMC'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {subtitle || 'Built specifically to solve multi-copy frustrations on Android. Review the exact interface below, showing the 3D Launcher, Workspace, and the live Floating Quick Copier in action over WhatsApp.'}
          </p>
        </div>

        {/* Screen selector tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SCREENSHOT_LIST.map((screen, idx) => {
            const isActive = screen.id === activeScreenId;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveScreenId(screen.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 shadow-md ring-2 ring-slate-900'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-mono ${
                    isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {idx + 1}
                </span>
                <span>{screen.title.split('(')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Grid: Interactive Device Frame + Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Mobile Phone Frame Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              {/* Device outer frame */}
              <div className="relative overflow-hidden rounded-[40px] border-[10px] border-slate-900 bg-slate-950 shadow-2xl ring-1 ring-black/20">
                {/* Top speaker & camera notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center h-4 w-28 rounded-full bg-slate-900">
                  <div className="h-2 w-2 rounded-full bg-slate-800 mr-2"></div>
                  <div className="h-1.5 w-10 rounded-full bg-slate-800"></div>
                </div>

                {/* Device Screen Content Area (360x740 Aspect) */}
                <div className="relative h-[640px] w-full overflow-hidden bg-white select-none">
                  {renderScreenContent(activeScreenId, interactiveMode, setInteractiveMode)}
                </div>

                {/* Android bottom nav bar */}
                <div className="h-3 w-full bg-slate-950 flex items-center justify-center">
                  <div className="h-1 w-28 rounded-full bg-slate-600/70"></div>
                </div>
              </div>

              {/* Zoom / Inspect button overlay */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute -bottom-4 right-4 flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-md border border-slate-200 hover:bg-slate-50 transition-all z-10"
              >
                <Maximize2 className="h-3.5 w-3.5 text-amber-600" />
                <span>Full Detail View</span>
              </button>
            </div>
          </div>

          {/* Right Column: Screen Explanation & Feature Highlights */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-lg bg-amber-100/70 px-3 py-1 text-xs font-bold text-amber-900">
              <span>Screen {SCREENSHOT_LIST.findIndex((s) => s.id === currentScreen.id) + 1} of 4</span>
              <span>•</span>
              <span className="font-mono">{currentScreen.screenType}</span>
            </div>

            <h3 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900">
              {currentScreen.title}
            </h3>
            <p className="text-sm font-medium text-amber-700 mt-1">
              {currentScreen.subtitle}
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed border-l-2 border-amber-400 pl-3.5">
              {currentScreen.description}
            </p>

            {/* Bullet points */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Interface Elements
              </h4>
              <ul className="space-y-2.5">
                {currentScreen.bulletPoints.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Screenshot navigation footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Extracted directly from genuine Android APK test builds.
              </div>
              <div className="flex items-center gap-2">
                {SCREENSHOT_LIST.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreenId(s.id)}
                    className={`h-2.5 rounded-full transition-all ${
                      s.id === activeScreenId ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to ${s.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Gallery of all Screenshots */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">
              All 4 App Interfaces at a Glance
            </h3>
            <span className="text-xs text-slate-500 font-medium">Click any card to load in frame</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCREENSHOT_LIST.map((item, idx) => {
              const isSelected = item.id === activeScreenId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveScreenId(item.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    isSelected
                      ? 'border-amber-400 bg-amber-50/60 shadow-sm ring-1 ring-amber-400'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="rounded bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                      Screen {idx + 1}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {item.id === 'floating-whatsapp' ? 'Live Chat Overlaid' : 'Internal View'}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full detail zoom modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base">{currentScreen.title}</h4>
                <p className="text-xs text-slate-500">{currentScreen.subtitle}</p>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="flex justify-center">
              <div className="w-[300px] h-[540px] rounded-3xl border-4 border-slate-900 overflow-hidden shadow-inner bg-white">
                {renderScreenContent(activeScreenId, interactiveMode, setInteractiveMode)}
              </div>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => setIsZoomOpen(false)}
                className="rounded-xl bg-slate-900 px-6 py-2 text-xs font-bold text-white hover:bg-slate-800"
              >
                Close Zoom View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Helper renderer for the exact screens from user screenshots
function renderScreenContent(
  screenId: string,
  interactiveState: 'idle' | 'active' | 'drawer-open',
  setInteractiveState: React.Dispatch<React.SetStateAction<'idle' | 'active' | 'drawer-open'>>
) {
  switch (screenId) {
    case 'launcher-idle':
      return <ScreenLauncherIdle />;
    case 'launcher-active':
      return <ScreenLauncherActive />;
    case 'workspace':
      return <ScreenWorkspace />;
    case 'floating-whatsapp':
    default:
      return (
        <ScreenFloatingWhatsApp
          interactiveState={interactiveState}
          setInteractiveState={setInteractiveState}
        />
      );
  }
}

// 1. Screen: 3D Launcher Idle
function ScreenLauncherIdle() {
  return (
    <div className="flex flex-col h-full bg-white text-slate-900 text-xs">
      {/* App Header */}
      <div className="pt-6 px-4 pb-3 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-amber-400 flex items-center justify-center shadow-sm">
            <svg className="h-4 w-4 fill-slate-900" viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V5h2v3h10V5h2v14z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm text-slate-900">Multi Copier</div>
            <div className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Clipboard Active
            </div>
          </div>
        </div>
        <div className="p-2 text-slate-700">
          <svg className="h-4 w-4 fill-slate-700" viewBox="0 0 24 24">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 text-center font-bold">
        <div className="flex-1 py-3 text-amber-500 border-b-2 border-amber-400 flex items-center justify-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
          3D LAUNCHER
        </div>
        <div className="flex-1 py-3 text-slate-400">
          WORKSPACE
        </div>
      </div>

      {/* Center 3D Button Idle */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative flex items-center justify-center h-48 w-48 rounded-full bg-gradient-to-b from-slate-100 to-slate-200 shadow-[0_15px_30px_rgba(0,0,0,0.1),inset_0_-4px_6px_rgba(0,0,0,0.06)] border border-slate-300">
          <div className="flex flex-col items-center justify-center h-40 w-40 rounded-full bg-white shadow-inner">
            <div className="h-10 w-10 text-slate-800 mb-2 flex items-center justify-center">
              <svg className="h-8 w-8 stroke-slate-800 stroke-[2] fill-none" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>
            <span className="font-extrabold tracking-wider text-sm text-slate-900">
              LAUNCH
            </span>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500 leading-relaxed max-w-[240px]">
          Press & hold the 3D button for 2 sec to launch Floating Quick Copier will dock at center-left
        </p>
      </div>
    </div>
  );
}

// 2. Screen: 3D Launcher Active (Yellow Rocket & Docked Pill)
function ScreenLauncherActive() {
  return (
    <div className="flex flex-col h-full bg-white text-slate-900 text-xs relative">
      {/* Floating Pill on left screen edge */}
      <div className="absolute left-0 top-[280px] z-30 flex items-center rounded-r-2xl bg-amber-400 border border-amber-500 shadow-lg px-1.5 py-2">
        <div className="flex flex-col items-center gap-1">
          <div className="text-[9px] font-bold text-slate-900">⇅</div>
          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-white text-slate-900 shadow-sm text-[10px] font-black">
            1
          </div>
        </div>
      </div>

      {/* App Header */}
      <div className="pt-6 px-4 pb-3 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-amber-400 flex items-center justify-center shadow-sm">
            <svg className="h-4 w-4 fill-slate-900" viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V5h2v3h10V5h2v14z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm text-slate-900">Multi Copier</div>
            <div className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Clipboard Active
            </div>
          </div>
        </div>
        <div className="p-2 text-slate-700">
          <svg className="h-4 w-4 fill-slate-700" viewBox="0 0 24 24">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 text-center font-bold">
        <div className="flex-1 py-3 text-amber-500 border-b-2 border-amber-400 flex items-center justify-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
          3D LAUNCHER
        </div>
        <div className="flex-1 py-3 text-slate-400">
          WORKSPACE
        </div>
      </div>

      {/* Center 3D Button Active */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative flex items-center justify-center h-48 w-48 rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 p-2 shadow-[0_0_35px_rgba(251,191,36,0.5)]">
          <div className="flex flex-col items-center justify-center h-full w-full rounded-full bg-gradient-to-b from-white to-slate-50 shadow-inner">
            <div className="h-10 w-10 text-amber-500 mb-1 flex items-center justify-center">
              <Rocket className="h-9 w-9 fill-amber-400 text-amber-600" />
            </div>
            <span className="font-extrabold tracking-wider text-sm text-amber-600">
              LAUNCHED
            </span>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-600 leading-relaxed max-w-[240px]">
          Side Floater is active at screen left! Tap or drag the floating pill anytime to open history.
        </p>

        {/* Action buttons */}
        <div className="mt-6 w-full flex flex-col gap-2.5 px-2">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-2.5 font-bold text-slate-950 shadow-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h4v10H7V7z" />
            </svg>
            Open Side Copier
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl bg-rose-50 border border-rose-200 py-2.5 font-bold text-rose-600">
            <span className="h-2 w-2 rounded-full bg-rose-500"></span>
            Stop Launcher
          </button>
        </div>
      </div>
    </div>
  );
}

// 3. Screen: Workspace Hub
function ScreenWorkspace() {
  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 text-xs">
      {/* App Header */}
      <div className="pt-6 px-4 pb-3 flex items-center justify-between border-b border-slate-100 bg-white">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-amber-400 flex items-center justify-center shadow-sm">
            <svg className="h-4 w-4 fill-slate-900" viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V5h2v3h10V5h2v14z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm text-slate-900">Multi Copier</div>
            <div className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Clipboard Active
            </div>
          </div>
        </div>
        <div className="p-2 text-slate-700">
          <svg className="h-4 w-4 fill-slate-700" viewBox="0 0 24 24">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 text-center font-bold bg-white">
        <div className="flex-1 py-3 text-slate-400">
          3D LAUNCHER
        </div>
        <div className="flex-1 py-3 text-amber-500 border-b-2 border-amber-400">
          WORKSPACE
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="p-3 bg-white border-b border-slate-200 flex items-center gap-2">
        <button className="flex items-center gap-1 rounded-xl bg-amber-400 px-3 py-2 text-[11px] font-bold text-slate-950">
          📋 P
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 py-2 text-[11px] font-semibold text-slate-700">
          📑 Side Drawer
        </button>
        <button className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 font-bold">
          +
        </button>
        <button className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
          ≡
        </button>
      </div>

      {/* Search Bar */}
      <div className="p-3">
        <div className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3 py-2 text-slate-400 shadow-sm">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span className="text-[11px]">Search clipboard history...</span>
        </div>
      </div>

      {/* Filter chips */}
      <div className="px-3 pb-3 flex items-center gap-1.5 overflow-x-auto text-[11px]">
        <span className="rounded-lg bg-amber-400 px-3 py-1 font-bold text-slate-950">All</span>
        <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 font-medium text-slate-600">Pinned</span>
        <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 font-medium text-slate-600">Links</span>
        <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 font-medium text-slate-600">Numbers</span>
        <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 font-medium text-slate-600">Media</span>
      </div>

      {/* Clip History Card */}
      <div className="px-3 space-y-2.5">
        <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 shadow-sm">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" readOnly />
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-700">General</span>
              <span>Just now</span>
            </div>
            <span>📌</span>
          </div>

          <div className="text-sm font-medium text-slate-900 py-1">
            helo world
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span>10 chars • 2 words</span>
            <div className="flex items-center gap-2">
              <button className="text-slate-500 hover:text-slate-800">✏️</button>
              <button className="text-rose-500 hover:text-rose-700">🗑️</button>
              <button className="flex items-center gap-1 rounded-lg bg-amber-400 px-2.5 py-1 text-[10px] font-bold text-slate-950">
                📋 Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Screen: Live Floating Side Drawer docked over WhatsApp
function ScreenFloatingWhatsApp({
  interactiveState,
  setInteractiveState,
}: {
  interactiveState: 'idle' | 'active' | 'drawer-open';
  setInteractiveState: React.Dispatch<React.SetStateAction<'idle' | 'active' | 'drawer-open'>>;
}) {
  return (
    <div className="relative flex flex-col h-full bg-[#efeae2] text-xs overflow-hidden">
      {/* WhatsApp Background Chat UI */}
      <div className="bg-[#075e54] text-white px-3 py-2.5 flex items-center justify-between shadow">
        <div className="flex items-center gap-2">
          <span className="text-xs">←</span>
          <div className="h-6 w-6 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-[10px]">
            W
          </div>
          <div>
            <div className="font-bold text-xs truncate max-w-[120px]">Real Estate Property</div>
            <div className="text-[9px] text-emerald-200">You, Contact</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/90">
          <span>📹</span>
          <span>⋮</span>
        </div>
      </div>

      {/* WhatsApp Chat Messages Stream */}
      <div className="flex-1 p-3 space-y-2 overflow-y-auto">
        <div className="flex justify-end">
          <div className="rounded-lg bg-[#dcf8c6] px-2.5 py-1.5 max-w-[80%] text-slate-800 shadow-sm">
            <div className="text-emerald-800 font-bold underline text-[11px]">12345678</div>
            <div className="text-[9px] text-slate-500 text-right mt-0.5">10:55 AM ✓✓</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-lg bg-[#dcf8c6] px-2.5 py-1.5 max-w-[80%] text-slate-800 shadow-sm">
            <div>Hello world</div>
            <div className="text-[9px] text-slate-500 text-right mt-0.5">1:12 PM ✓✓</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-lg bg-[#dcf8c6] px-2.5 py-1.5 max-w-[80%] text-slate-800 shadow-sm">
            <div className="font-mono text-[11px]">1111121</div>
            <div className="text-[9px] text-slate-500 text-right mt-0.5">1:13 PM ✓✓</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-lg bg-[#dcf8c6] px-2.5 py-1.5 max-w-[80%] text-slate-800 shadow-sm">
            <div className="text-emerald-800 font-bold underline text-[11px]">123456789</div>
            <div className="text-[9px] text-slate-500 text-right mt-0.5">1:13 PM ✓✓</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-lg bg-[#dcf8c6] px-2.5 py-1.5 max-w-[80%] text-slate-800 shadow-sm">
            <div>Hello World</div>
            <div className="text-[9px] text-slate-500 text-right mt-0.5">3:03 PM ✓✓</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-lg bg-[#dcf8c6] px-2.5 py-1.5 max-w-[80%] text-slate-800 shadow-sm">
            <div className="space-y-0.5">
              <div>Hello World</div>
              <div>Hello World</div>
              <div>Hello World</div>
            </div>
            <div className="text-[9px] text-slate-500 text-right mt-0.5">3:04 PM ✓✓</div>
          </div>
        </div>
      </div>

      {/* Floating Side Copier Drawer (Docked from left edge) */}
      <div className="absolute inset-y-0 left-0 w-[145px] sm:w-[155px] bg-[#0b1528] text-white border-r-2 border-amber-400 z-40 shadow-2xl flex flex-col p-2.5">
        {/* Drawer Header Controls */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-700/60 text-amber-400 mb-2.5">
          <button className="text-sm font-black text-slate-300 hover:text-white">✕</button>
          <button className="text-sm font-black text-slate-300 hover:text-white">≡</button>
          <button className="text-lg font-black text-amber-400 hover:text-amber-300">+</button>
        </div>

        {/* Stored Quick-Clips with 1-Tap Copy & 1-Tap Paste */}
        <div className="flex-1 space-y-2 overflow-y-auto pr-0.5">
          {/* Clip 1 */}
          <div className="rounded-xl bg-[#14233c] p-2 border border-slate-700/50 shadow-sm">
            <div className="text-[11px] font-medium text-slate-200 truncate mb-1.5">
              Hello World
            </div>
            <div className="grid grid-cols-2 gap-1">
              <button className="flex items-center justify-center gap-0.5 rounded bg-slate-700/60 py-1 text-[9px] font-semibold text-amber-300 hover:bg-slate-700">
                📋 Copy
              </button>
              <button className="flex items-center justify-center gap-0.5 rounded bg-amber-400 py-1 text-[9px] font-bold text-slate-950 hover:bg-amber-300">
                📌 Paste
              </button>
            </div>
          </div>

          {/* Clip 2 */}
          <div className="rounded-xl bg-[#14233c] p-2 border border-slate-700/50 shadow-sm">
            <div className="text-[10px] font-mono text-slate-300 break-all line-clamp-2 mb-1.5">
              https://whatsapp.com/channel/0029VamSzhm9M...
            </div>
            <div className="grid grid-cols-2 gap-1">
              <button className="flex items-center justify-center gap-0.5 rounded bg-slate-700/60 py-1 text-[9px] font-semibold text-amber-300 hover:bg-slate-700">
                📋 Copy
              </button>
              <button className="flex items-center justify-center gap-0.5 rounded bg-amber-400 py-1 text-[9px] font-bold text-slate-950 hover:bg-amber-300">
                📌 Paste
              </button>
            </div>
          </div>

          {/* Clip 3 */}
          <div className="rounded-xl bg-[#14233c] p-2 border border-slate-700/50 shadow-sm">
            <div className="text-[11px] font-medium text-slate-200 truncate mb-1.5">
              helo world
            </div>
            <div className="grid grid-cols-2 gap-1">
              <button className="flex items-center justify-center gap-0.5 rounded bg-slate-700/60 py-1 text-[9px] font-semibold text-amber-300 hover:bg-slate-700">
                📋 Copy
              </button>
              <button className="flex items-center justify-center gap-0.5 rounded bg-amber-400 py-1 text-[9px] font-bold text-slate-950 hover:bg-amber-300">
                📌 Paste
              </button>
            </div>
          </div>
        </div>

        {/* Drawer footer label */}
        <div className="text-[9px] text-center text-slate-400 pt-2 border-t border-slate-800">
          Floating Quick Copier
        </div>
      </div>

      {/* WhatsApp Input Bar */}
      <div className="bg-white p-2 flex items-center gap-2 border-t border-slate-300">
        <div className="flex-1 rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-400">
          Message
        </div>
        <div className="h-7 w-7 rounded-full bg-[#00a884] flex items-center justify-center text-white text-[10px]">
          🎤
        </div>
      </div>
    </div>
  );
}

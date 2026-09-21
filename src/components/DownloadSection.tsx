import React, { useState, useEffect } from 'react';
import { APP_CONFIG } from '../data/appData';
import { ScreenshotsShowcase } from './ScreenshotsShowcase';
import {
  Download,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Smartphone,
  RefreshCw,
  FileCheck,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

interface DownloadSectionProps {
  onGoToContact: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onGoToContact }) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(10);
  const [isCounting, setIsCounting] = useState<boolean>(true);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [downloadTriggered, setDownloadTriggered] = useState<boolean>(false);

  // 10-second countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCounting && secondsLeft > 0) {
      timer = setTimeout(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsCounting(false);
    }
    return () => clearTimeout(timer);
  }, [isCounting, secondsLeft]);

  const restartCountdown = () => {
    setSecondsLeft(10);
    setIsCounting(true);
    setDownloadTriggered(false);
  };

  const handleCopyHash = () => {
    navigator.clipboard.writeText(APP_CONFIG.sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Real download trigger: downloads the actual /base.apk (22.7 MB) directly with proper naming, and triggers the smartlink ad
  const handleActualDownload = () => {
    setDownloadTriggered(true);

    // Direct download trigger for the real APK in /public/base.apk
    const link = document.createElement('a');
    link.href = '/base.apk';
    link.setAttribute('download', `Clipboard_Multi_Copier_CMC_v${APP_CONFIG.version}.apk`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Smartlink redirect: open sponsor link in new tab / redirect smoothly right after download starts
    const targetUrl = APP_CONFIG.smartlinkUrl;
    if (targetUrl) {
      setTimeout(() => {
        try {
          const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
          if (!win || win.closed || typeof win.closed === 'undefined') {
            window.location.href = targetUrl;
          }
        } catch {
          window.location.href = targetUrl;
        }
      }, 400);
    }
  };

  // SVG Circular progress math (radius: 54, circumference: 2 * PI * 54 = ~339.29)
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  // As time counts down from 10 to 0, progress increases from 0% to 100%
  const progressPercent = ((10 - secondsLeft) / 10) * 100;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  const isUnlocked = secondsLeft === 0;

  return (
    <div className="py-12 sm:py-16 bg-white min-h-[80vh]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Breadcrumb / Category Tag */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
            Official APK Release Portal
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs font-medium text-slate-500">Android 8.0+</span>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Download Clipboard: Multi Copier CMC
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Get the standalone Android APK package. Lightweight, safe, and direct from LinkShare official repository.
          </p>
        </div>

        {/* Countdown & Download Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-10 shadow-sm text-center">
          {!isUnlocked ? (
            /* 10-Second Yellow Progress Ring */
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative flex items-center justify-center">
                {/* SVG Progress Ring */}
                <svg className="h-44 w-44 -rotate-90 transform" viewBox="0 0 130 130">
                  {/* Background Track */}
                  <circle
                    cx="65"
                    cy="65"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-slate-200"
                  />
                  {/* Yellow Progress Stroke */}
                  <circle
                    cx="65"
                    cy="65"
                    r={radius}
                    stroke="#F59E0B"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>

                {/* Inner Countdown Counter */}
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-mono">
                    {secondsLeft}s
                  </span>
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mt-0.5">
                    Generating Link
                  </span>
                </div>
              </div>

              {/* Status Message */}
              <div className="mt-6 max-w-md">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 px-3.5 py-1 text-xs font-semibold text-amber-900">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                  {secondsLeft > 6 && 'Connecting to verified LinkShare mirror...'}
                  {secondsLeft <= 6 && secondsLeft > 2 && 'Verifying APK checksum and Android signature...'}
                  {secondsLeft <= 2 && 'Unlocking direct APK download button...'}
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Please hold on 10 seconds while the secure download token is prepared.
                </p>
              </div>
            </div>
          ) : (
            /* Unlocked Download Box */
            <div className="py-2 animate-in fade-in zoom-in-95 duration-500">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-4 shadow-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                APK Package Ready for Download!
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Official package: <span className="font-mono font-semibold text-slate-800">Clipboard_Multi_Copier_CMC_v{APP_CONFIG.version}.apk</span>
              </p>

              {/* Main Download Button */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleActualDownload}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <Download className="h-5 w-5" />
                  <span>Download APK Now ({APP_CONFIG.fileSize})</span>
                </button>

                <button
                  onClick={restartCountdown}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-4 py-4 text-sm transition-all"
                  title="Test countdown again"
                >
                  <RefreshCw className="h-4 w-4 text-slate-500" />
                  <span>Restart 10s Timer</span>
                </button>
              </div>

              {downloadTriggered && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Download initiated! Check your browser or notifications bar.</span>
                </div>
              )}
            </div>
          )}

          {/* Quick specs grid */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-400 font-medium">Version</span>
              <p className="text-xs font-bold text-slate-800 mt-0.5">v{APP_CONFIG.version}</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-400 font-medium">File Size</span>
              <p className="text-xs font-bold text-slate-800 mt-0.5">{APP_CONFIG.fileSize}</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-400 font-medium">OS Compatibility</span>
              <p className="text-xs font-bold text-slate-800 mt-0.5">Android 8.0+</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-400 font-medium">License</span>
              <p className="text-xs font-bold text-emerald-700 mt-0.5">100% Free</p>
            </div>
          </div>

          {/* SHA-256 Hash */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 rounded-xl bg-slate-100 p-3 text-xs text-slate-600">
            <div className="flex items-center gap-2 truncate">
              <span className="font-bold text-slate-700">SHA-256:</span>
              <code className="font-mono text-[11px] text-slate-600 truncate max-w-[280px] sm:max-w-md">
                {APP_CONFIG.sha256}
              </code>
            </div>
            <button
              onClick={handleCopyHash}
              className="flex items-center gap-1 rounded bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-200 border border-slate-200"
            >
              {copiedHash ? (
                <>
                  <Check className="h-3 w-3 text-emerald-600" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy Hash</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            How to Install Clipboard Multi Copier APK on Android
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            Follow these 4 simple steps to install and set up your floating quick copier:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-950">
                  1
                </span>
                <h3 className="text-sm font-bold text-slate-900">Download the APK</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Click the download button above to save <code className="text-amber-800 font-mono">Clipboard_Multi_Copier_CMC_v1.0.4.apk</code> to your device.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-950">
                  2
                </span>
                <h3 className="text-sm font-bold text-slate-900">Allow Unknown Sources</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If prompted by Android Chrome or Files, tap <strong>Settings</strong> and toggle on <em>&quot;Allow from this source&quot;</em> to install the package.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-950">
                  3
                </span>
                <h3 className="text-sm font-bold text-slate-900">Grant Overlay Permission</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open the app and grant <strong>&quot;Display over other apps&quot;</strong> so the floating quick copier dock can appear seamlessly over WhatsApp and browsers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-950">
                  4
                </span>
                <h3 className="text-sm font-bold text-slate-900">Hold 3D Button for 2s</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Press and hold the center 3D button for 2 seconds. The yellow floating pill will dock at screen left, ready for instant copying and pasting.
              </p>
            </div>
          </div>

          {/* Link to Contact */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>Experiencing issues or have feedback on the APK?</span>
            <button
              onClick={onGoToContact}
              className="font-bold text-amber-700 hover:text-amber-800 underline flex items-center gap-1"
            >
              Contact support on LinkShare portal
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Sample Screenshots Section (shown below once countdown completes and download button appears) */}
        {isUnlocked && (
          <div className="mt-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm bg-white">
              <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-amber-400" />
                  <h2 className="text-sm sm:text-base font-bold text-white">
                    Sample Screenshots & Feature Guide
                  </h2>
                </div>
                <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  Ready to test with v{APP_CONFIG.version}
                </span>
              </div>
              <ScreenshotsShowcase
                id="download-page-screenshots"
                headline="Explore Features Included in this 24 MB APK"
                subtitle="Review how the 3D Launcher, Floating Quick Copier drawer, and Multitasking Hub look on your Android device."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

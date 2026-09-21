import React, { useState } from 'react';
import { APP_CONFIG } from '../data/appData';
import {
  ExternalLink,
  Mail,
  Globe,
  MessageSquare,
  Copy,
  Check,
  Smartphone,
  ShieldCheck,
  Send,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [subject, setSubject] = useState('Bug Report / Feedback');
  const [deviceModel, setDeviceModel] = useState('');
  const [androidVersion, setAndroidVersion] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const formattedInquiry = `[Clipboard: Multi Copier CMC Inquiry]
Category: ${subject}
Device: ${deviceModel || 'Not specified'}
Android Version: ${androidVersion || 'Not specified'}
App Version: v${APP_CONFIG.version}

Message:
${message || 'Hi LinkShare team, I have a question regarding Clipboard: Multi Copier CMC.'}`;

  const handleCopyAndRedirect = () => {
    navigator.clipboard.writeText(formattedInquiry);
    setCopied(true);
    setTimeout(() => {
      window.open(APP_CONFIG.parentContactUrl, '_blank', 'noopener,noreferrer');
      setCopied(false);
    }, 800);
  };

  const handleEmailDirect = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${APP_CONFIG.developerEmail}?subject=${encodeURIComponent(
      `[Clipboard Multi Copier CMC] ${subject}`
    )}&body=${encodeURIComponent(formattedInquiry)}`;
    window.location.href = mailto;
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-[80vh]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 mb-3">
            <Globe className="h-3.5 w-3.5 text-amber-600" />
            <span>LinkShare Unified Support</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Support
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Official communication channels for Clipboard: Multi Copier CMC.
          </p>
        </div>

        {/* Primary Notice Card regarding LinkShare */}
        <div className="rounded-3xl border-2 border-amber-400/80 bg-white p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 font-bold text-lg shadow-sm">
              LS
            </div>
            <div className="flex-1">
              <span className="rounded bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-900 uppercase">
                Official Notice
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                Official Support Routed via LinkShare (linksshare.online)
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Clipboard: Multi Copier CMC</strong> is developed and maintained as an Android APK utility under the <strong>LinkShare</strong> product suite. Because the main official site for all tools is <strong>LinkShare</strong>, all official support queries, feature requests, and bug reports are handled through our primary contact portal at <code className="bg-slate-100 px-1.5 py-0.5 rounded text-amber-800 font-semibold font-mono">linksshare.online/contact</code>.
              </p>

              {/* Direct CTA to LinkShare Contact */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={APP_CONFIG.parentContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-amber-400 hover:bg-slate-800 shadow-sm transition-all"
                >
                  <span>Open linksshare.online/contact</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href={APP_CONFIG.parentWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                >
                  <span>Visit Main LinkShare Portal</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details & Inquiry Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Official Info & Domain Details */}
          <div className="md:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Globe className="h-4 w-4 text-amber-600" />
                Domain & Deployment
              </h3>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400 block">Subdomain:</span>
                  <code className="font-mono font-semibold text-slate-800">
                    {APP_CONFIG.suggestedSubdomain}
                  </code>
                </div>
                <div>
                  <span className="text-slate-400 block">Primary Root Domain:</span>
                  <a
                    href={APP_CONFIG.parentWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-semibold text-amber-700 hover:underline"
                  >
                    linksshare.online
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block">Hosting Architecture:</span>
                  <span className="font-medium text-slate-700">Vercel / Static Edge (High Speed & SEO-Optimized)</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-600" />
                Developer Direct Email
              </h3>
              <p className="text-xs text-slate-600 mb-2">
                You can also email the developer directly regarding Android APK compatibility:
              </p>
              <a
                href={`mailto:${APP_CONFIG.developerEmail}`}
                className="inline-block font-mono text-xs font-bold text-slate-800 hover:text-amber-600 underline break-all"
              >
                {APP_CONFIG.developerEmail}
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Response Guarantee
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Legitimate bug reports and compatibility issues submitted via LinkShare or direct email are reviewed for next APK maintenance releases.
              </p>
            </div>
          </div>

          {/* Right Column: Pre-Formatted Inquiry Generator */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-4 w-4 text-amber-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Compose APK Inquiry or Bug Report
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Fill this quick format to copy your message and send it through the LinkShare contact form or via email.
              </p>

              <form onSubmit={handleEmailDirect} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Inquiry Category
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800 focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Bug Report (Floating Quick Copier)">Bug Report (Floating Quick Copier)</option>
                    <option value="Crash / App Not Opening">Crash / App Not Opening</option>
                    <option value="Android Permission Assistance">Android Permission Assistance</option>
                    <option value="Feature Suggestion">Feature Suggestion</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Device Model (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Samsung Galaxy S23, Redmi Note 12"
                      value={deviceModel}
                      onChange={(e) => setDeviceModel(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Android Version (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Android 13, Android 14"
                      value={androidVersion}
                      onChange={(e) => setAndroidVersion(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Your Message / Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe what happened, steps to reproduce, or your suggestion..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* Two Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyAndRedirect}
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 py-3 text-xs font-bold text-slate-950 transition-all shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-slate-950" />
                        <span>Copied! Opening linksshare.online...</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy & Go to linksshare.online/contact</span>
                      </>
                    )}
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 py-3 px-4 text-xs font-semibold text-slate-700 transition-all"
                  >
                    <Send className="h-3.5 w-3.5 text-slate-500" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

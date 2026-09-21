import React, { useState } from 'react';
import { FAQS, PRIVACY_POLICY_SECTIONS, APP_CONFIG } from '../data/appData';
import { HelpCircle, ShieldCheck, ChevronDown, ChevronUp, Lock, CheckCircle2, ExternalLink } from 'lucide-react';

interface FAQPrivacySectionProps {
  onGoToContact: () => void;
}

export const FAQPrivacySection: React.FC<FAQPrivacySectionProps> = ({ onGoToContact }) => {
  const [activeTab, setActiveTab] = useState<'faq' | 'privacy'>('faq');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-[80vh]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
            <span>Official Documentation & Transparency</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            FAQ & Privacy Policy
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Everything you need to know about permissions, on-device data safety, and operating Clipboard: Multi Copier CMC.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-2xl bg-white p-1.5 border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('faq')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'faq'
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="h-4 w-4" />
              <span>Frequently Asked Questions</span>
            </button>

            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'privacy'
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Lock className="h-4 w-4" />
              <span>Privacy Policy</span>
            </button>
          </div>
        </div>

        {/* FAQ Content */}
        {activeTab === 'faq' && (
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-slate-50"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="rounded-lg bg-slate-100 p-1 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* LinkShare inquiry callout */}
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
              <div>
                <span className="font-bold text-amber-950">Have a question not listed here?</span>
                <p className="text-slate-600 text-xs mt-0.5">
                  Reach out directly to the developer on the central LinkShare support page.
                </p>
              </div>
              <button
                onClick={onGoToContact}
                className="rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2 text-xs shrink-0 shadow-sm"
              >
                Go to Contact Page
              </button>
            </div>
          </div>
        )}

        {/* Privacy Policy Content */}
        {activeTab === 'privacy' && (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-bold">
                Last updated: September 2026
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Privacy Policy for Clipboard: Multi Copier CMC
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Official privacy guarantee for the Android APK utility provided by LinkShare.
              </p>
            </div>

            {/* Core Trust Highlight Box */}
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-900 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold mb-1">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Zero Cloud Storage • 100% Local Privacy</span>
              </div>
              <p className="text-emerald-800 text-xs leading-relaxed">
                Clipboard: Multi Copier CMC was created with a privacy-by-design architecture. Your copied texts, credentials, phone numbers, and messages stay on your physical phone hardware. We do not operate remote clipboard sync servers.
              </p>
            </div>

            <div className="space-y-6">
              {PRIVACY_POLICY_SECTIONS.map((sec, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>Tool publisher: <strong>LinkShare ({APP_CONFIG.parentWebsite})</strong></span>
              <a
                href={APP_CONFIG.parentContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                Inquiries via LinkShare Portal
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export type PageTab = 'home' | 'download' | 'faq-privacy' | 'contact';

export interface AppMetadata {
  name: string;
  shortName: string;
  tagline: string;
  version: string;
  releaseDate: string;
  fileSize: string;
  packageName: string;
  androidMinVersion: string;
  targetArchitecture: string;
  parentBrand: string;
  parentWebsite: string;
  parentContactUrl: string;
  suggestedSubdomain: string;
  developerEmail: string;
  sha256: string;
}

export interface ScreenshotData {
  id: string;
  title: string;
  subtitle: string;
  screenType: 'launcher-idle' | 'launcher-active' | 'workspace' | 'floating-whatsapp';
  description: string;
  bulletPoints: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'usage' | 'permissions' | 'privacy' | 'troubleshooting';
}

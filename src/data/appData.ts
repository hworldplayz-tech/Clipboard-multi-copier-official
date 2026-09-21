import { AppMetadata, FAQItem, ScreenshotData } from '../types';

export const APP_CONFIG: AppMetadata = {
  name: 'Clipboard: Multi Copier CMC',
  shortName: 'Multi Copier CMC',
  tagline: 'Floating quick copier and multi-item clipboard manager for Android.',
  version: '1.0.4',
  releaseDate: 'September 2026',
  fileSize: '24 MB',
  packageName: 'com.linkshare.clipboard.multicopier.cmc',
  androidMinVersion: 'Android 8.0 (Oreo) and above',
  targetArchitecture: 'arm64-v8a, armeabi-v7a',
  parentBrand: 'LinkShare',
  parentWebsite: 'https://linksshare.online',
  parentContactUrl: 'https://linksshare.online/contact',
  suggestedSubdomain: 'clipboard-multi-copier.linksshare.online',
  developerEmail: 'syedhamzaalinaqvi4@gmail.com',
  sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
  smartlinkUrl: 'https://verticallysaturate.com/b0edwkc85?key=5bdc694a63022f759df90e3b5e885b4a',
};

export const SCREENSHOT_LIST: ScreenshotData[] = [
  {
    id: 'launcher-active',
    title: '3D Launcher (Active State)',
    subtitle: 'Side Floater docked at screen left',
    screenType: 'launcher-active',
    description:
      'Once triggered, the 3D Launcher activates a persistent floating pill docked at the left edge of your screen. Tap or drag the pill anytime to open clip history over any app.',
    bulletPoints: [
      'Visual rocket indicator with 360-degree status glow',
      'Floating quick pill with item counter badge and quick-drag handle',
      'One-tap "Open Side Copier" and instant "Stop Launcher" controls',
      'Background clipboard listener runs smoothly with minimal battery usage',
    ],
  },
  {
    id: 'floating-whatsapp',
    title: 'Floating Side Copier (Live Multitasking)',
    subtitle: '1-tap copy and paste over WhatsApp & social apps',
    screenType: 'floating-whatsapp',
    description:
      'The signature feature in action: A compact dark-navy sidebar floats directly over active messaging chats, allowing you to copy or paste multiple saved items in seconds without switching applications.',
    bulletPoints: [
      'Floats cleanly over WhatsApp, Telegram, browsers, and forms',
      'Instant "Copy" and "Paste" action buttons for every saved clip',
      'Stores text notes, web URLs, channel invites, and numbers',
      'Quick add (+) and quick reorder controls directly from the floating dock',
    ],
  },
  {
    id: 'workspace',
    title: 'Workspace Clipboard Hub',
    subtitle: 'Organize, search, and manage your copied history',
    screenType: 'workspace',
    description:
      'Full workspace dashboard with smart categorization, instant search, character/word metrics, pinned notes, and quick clipboard cleanup.',
    bulletPoints: [
      'Filter clips by All, Pinned, Links, Numbers, and Media',
      'Real-time search across your complete clipboard history',
      'Card metadata including character and word counts with time stamps',
      'One-tap pin, edit, delete, and copy actions for each entry',
    ],
  },
  {
    id: 'launcher-idle',
    title: '3D Launcher (Idle State)',
    subtitle: 'Press & hold to launch background copier',
    screenType: 'launcher-idle',
    description:
      'The main standby hub featuring a tactile 3D circular button. Press and hold the 3D button for 2 seconds to initialize the floating quick copier service.',
    bulletPoints: [
      'Intuitive 2-second press & hold activation mechanic',
      'Status badge indicating active clipboard listening',
      'Quick switch between 3D Launcher and Workspace tabs',
      'Integrated dark mode and light mode theme switcher',
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    category: 'usage',
    question: 'How does the Floating Quick Copier work?',
    answer:
      'From the 3D Launcher screen, press and hold the 3D button for 2 seconds. A small yellow pill docks on the left side of your screen. Whenever you are chatting on WhatsApp, filling a web form, or writing an email, simply tap the pill to reveal your copied clips and paste them instantly without switching apps.',
  },
  {
    category: 'permissions',
    question: 'Why does the app ask for "Display over other apps" permission?',
    answer:
      'Android requires the "SYSTEM_ALERT_WINDOW" (Display over other apps) permission so the floating side drawer and quick-pill can overlay on top of other running applications like messaging and social media. This permission is used strictly for the floating interface.',
  },
  {
    category: 'privacy',
    question: 'Does Clipboard Multi Copier upload my clipboard to any server?',
    answer:
      'No. Your copied text, links, passwords, and clips are stored 100% locally on your device in a private local database. Clipboard Multi Copier CMC operates completely offline and never transmits your data to LinkShare or any external cloud server.',
  },
  {
    category: 'usage',
    question: 'How do I categorize or pin important clips?',
    answer:
      'In the Workspace tab, tap the Pin icon on any clip card to keep it permanently at the top of your list. You can also filter between All, Pinned, Links, Numbers, and Media using the top filter chips.',
  },
  {
    category: 'troubleshooting',
    question: 'What should I do if the floating pill closes in the background?',
    answer:
      'Some Android phone manufacturers (such as Xiaomi MIUI/HyperOS, Samsung OneUI, or OnePlus OxygenOS) have aggressive battery savers. Set Clipboard Multi Copier CMC battery usage to "Unrestricted" or "Don\'t optimize" in your phone Settings to ensure uninterrupted floating dock availability.',
  },
  {
    category: 'permissions',
    question: 'How is this app related to LinkShare (linksshare.online)?',
    answer:
      'Clipboard Multi Copier CMC is an official standalone Android APK utility developed by the creators of LinkShare (linksshare.online). The official website is hosted under the LinkShare umbrella domain, and all official inquiries and support are handled through linksshare.online/contact.',
  },
];

export const PRIVACY_POLICY_SECTIONS = [
  {
    title: '1. On-Device Storage Only',
    content:
      'All clipboard records, text entries, web links, numerical strings, and user notes saved within Clipboard: Multi Copier CMC remain strictly on your local device storage. The application does not transmit or synchronize your clipboard history with any external servers, third-party analytics, or cloud databases.',
  },
  {
    title: '2. Required Android Permissions',
    content:
      'The app requests only the permissions necessary for its core functionality: (a) Display Over Other Apps (SYSTEM_ALERT_WINDOW) to render the floating side dock over other applications; (b) Background Service / Foreground Notification to keep the clipboard listener active while you multitask; (c) Post Notifications (Android 13+) to show launcher status.',
  },
  {
    title: '3. Third-Party Trackers & Ads',
    content:
      'Clipboard: Multi Copier CMC contains zero third-party advertising SDKs, zero user telemetry trackers, and zero analytics scripts. The application does not collect your advertising ID, location, or hardware identifiers.',
  },
  {
    title: '4. User Data Control & Deletion',
    content:
      'You maintain full control over your clipboard history at all times. You can edit or permanently delete individual clips using the trash icon in the Workspace, or wipe all stored history at once. Uninstalling the APK automatically purges all locally cached clipboard data from your device.',
  },
];

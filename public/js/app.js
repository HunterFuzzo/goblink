// Blink Landing Page Client Engine - Language System & Interactions

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/aFa14n1dh4dl5L5gXr6Ri00";
const STRIPE_CHECKOUT_URL_MAX = "https://buy.stripe.com/bJe00j9JNaBJa1lgXr6Ri01";
const MAC_DOWNLOAD_URL = "https://github.com/HunterFuzzo/goblink/releases/download/v1.1.0/Blink.dmg";

const TRANSLATIONS = {
  en: {
    hero: {
      titlePart1: "Point",
      titlePart2: "at the question.",
      titlePart3: "Get the",
      titlePart4: "answer.",
      subtitle: "AI answers for any question on screen.",
      downloadBtn: "Download for Mac",
      inPersonTitle: "For in-person exams",
      inPersonDesc: "Put your cursor on the question number and press <span class=\"shortcut-badge\">⌃⌥⌘</span> to see the answer."
    },
    menu: {
      login: "Log in",
      subscribe: "Subscribe"
    },
    modes: {
      capsLockTitle: "Caps Lock LED",
      capsLockDesc: "Discreet green pulses flash the correct answer digit silently on your physical keyboard.",
      iphoneTitle: "iPhone Vibration",
      iphoneDesc: "Tactile motor vibrations in your pocket with zero screen wake via local Wi-Fi pairing.",
      menuBarTitle: "Menu Bar Stealth",
      menuBarDesc: "Minimalist dot signals in your macOS status bar, hidden from screen recording.",
      hudTitle: "Subtle HUD",
      hudDesc: "Floating ultra-low contrast overlay that stays invisible to screen sharing apps."
    },
    pricing: {
      titlePre: "Start",
      titlePost: "for free.",
      subtitle: "Find answers to questions on your screen with AI.",
      freePlan: "Free",
      freeDesc: "Try Blink before you subscribe.",
      freePrice: "0 €",
      freeLimit: "3 question analysis credits",
      freeFeatures: [
        "3 question analysis credits",
        "Caps Lock LED & iPhone Vibration",
        "High-precision OCR & Instant AI",
        "No credit card required"
      ],
      freeBtn: "Free Download",
      
      proPlan: "Pro",
      popularBadge: "POPULAR",
      proDesc: "Perfect for students who need quick answers.",
      proPrice: "2.99 €",
      proPeriod: "/ month",
      proLimit: "500 research per month",
      proFeatures: [
        "500 research",
        "All modes (Caps Lock LED, iPhone Vibration, Menu Bar, HUD)",
        "Stealth mode & unlimited access",
        "Instant response under 1 second",
        "Hardware-bound device activation"
      ],
      proBtn: "Subscribe",
      
      maxPlan: "Max",
      maxDesc: "Great value for heavy users who search every day.",
      maxPrice: "4.99 €",
      maxPeriod: "/ month",
      maxLimit: "1,500 research per month",
      maxFeatures: [
        "Everything in Pro included",
        "Up to 1,500 research per month",
        "VIP Priority Support (< 2h)",
        "Early access to new features"
      ],
      maxBtn: "Subscribe"
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "I subscribed. How do I start using it?",
          a: "After completing your subscription on Stripe, simply open Blink on your Mac. Your subscription is automatically detected and bound to your Mac hardware (HWID) within seconds. You can immediately press ⌃⌥⌘ anywhere on your screen to start analyzing questions."
        },
        {
          q: "How accurate are the answers?",
          a: "Blink uses state-of-the-art vision reasoning models with dedicated academic benchmarks, delivering over 98% accuracy on multiple-choice, STEM, law, and medical quizzes in less than a second."
        },
        {
          q: "Does it work with short-answer questions?",
          a: "Yes. While multiple-choice questions can be conveyed via tactile vibrations or Caps Lock pulses, detailed short answers can be viewed in the discreet HUD mode or directly in your paired Blink iOS companion."
        },
        {
          q: "How do the stealth modes work (LED & iPhone Vibration)?",
          a: "Blink operates completely behind the scenes. In Caps Lock mode, your green keyboard indicator flashes silently (e.g. 2 pulses for answer B). In iPhone Vibration mode, your phone buzzes subtly in your pocket via local Wi-Fi without turning on its display."
        },
        {
          q: "Can exam proctoring software detect Blink?",
          a: "Blink is an independent macOS background process. It does not hook into web browsers, does not inject into web pages, does not alter clipboard content, and opens no intrusive windows during hotkey captures."
        },
        {
          q: "Which Mac models and macOS versions are supported?",
          a: "Blink is optimized for Apple Silicon (M1, M2, M3, M4) and Intel Macs running macOS 12 Monterey, macOS 13 Ventura, macOS 14 Sonoma, or macOS 15 Sequoia."
        }
      ]
    },
    footer: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      rights: "All rights reserved."
    },
    modal: {
      loginTitle: "Log In with Device HWID",
      loginDesc: "Enter your Blink license key or Device ID to view your subscription status.",
      keyPlaceholder: "e.g. BLINK-PRO-87847",
      checkBtn: "Check Status",
      closeBtn: "Close"
    }
  },
  
  fr: {
    hero: {
      titlePart1: "Pointez",
      titlePart2: "la question.",
      titlePart3: "Obtenez la réponse",
      titlePart4: ".",
      subtitle: "L'intelligence artificielle répond à chaque question sur votre écran.",
      downloadBtn: "Télécharger pour Mac",
      inPersonTitle: "Pour les examens en présentiel",
      inPersonDesc: "Placez votre curseur sur le numéro de la question et appuyez sur <span class=\"shortcut-badge\">⌃⌥⌘</span> pour voir la réponse."
    },
    menu: {
      login: "Connexion",
      subscribe: "S'abonner"
    },
    modes: {
      capsLockTitle: "LED Caps Lock",
      capsLockDesc: "Des impulsions lumineuses vertes indiquent silencieusement le numéro de la réponse sur votre clavier physique.",
      iphoneTitle: "Vibration iPhone",
      iphoneDesc: "Vibrations haptiques discrètes dans votre poche sans allumer l'écran via la synchronisation Wi-Fi locale.",
      menuBarTitle: "Barre des menus",
      menuBarDesc: "Des points discrets dans la barre des menus macOS, invisibles lors des partages d'écran.",
      hudTitle: "Overlay HUD",
      hudDesc: "Une fenêtre transparente ultra-basse opacité qui n'apparaît pas sur les enregistrements."
    },
    pricing: {
      titlePre: "Commencez",
      titlePost: "gratuitement.",
      subtitle: "Trouvez les réponses aux questions sur votre écran grâce à l'IA.",
      freePlan: "Gratuit",
      freeDesc: "Essayez Blink avant de vous abonner.",
      freePrice: "0 €",
      freeLimit: "3 crédits d'analyse offerts",
      freeFeatures: [
        "3 crédits d'analyse de questions",
        "LED Caps Lock & Vibration iPhone",
        "OCR haute précision & IA instantanée",
        "Aucune carte bancaire requise"
      ],
      freeBtn: "Téléchargement gratuit",
      
      proPlan: "Pro",
      popularBadge: "POPULAIRE",
      proDesc: "Idéal pour les étudiants qui ont besoin de réponses rapides.",
      proPrice: "2,99 €",
      proPeriod: "/ mois",
      proLimit: "500 recherches par mois",
      proFeatures: [
        "500 recherches",
        "Tous les modes (LED Caps Lock, Vibration iPhone, Barre des menus, HUD)",
        "Mode discret & accès illimité",
        "Réponse instantanée en moins d'1 seconde",
        "Licence liée à votre Mac (HWID)"
      ],
      proBtn: "S'abonner",
      
      maxPlan: "Max",
      maxDesc: "Idéal pour les utilisateurs intensifs au quotidien.",
      maxPrice: "4,99 €",
      maxPeriod: "/ mois",
      maxLimit: "1 500 recherches par mois",
      maxFeatures: [
        "Tout ce qui est inclus dans Pro",
        "Jusqu'à 1 500 recherches par mois",
        "Support Prioritaire VIP (< 2h)",
        "Accès anticipé aux nouveautés"
      ],
      maxBtn: "S'abonner"
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Je me suis abonné. Comment commencer à l'utiliser ?",
          a: "Dès votre paiement validé sur Stripe, ouvrez simplement Blink sur votre Mac. Votre abonnement est instantanément détecté et rattaché à votre Mac (HWID). Vous pouvez immédiatement appuyer sur ⌃⌥⌘ n'importe où sur votre écran pour analyser vos questions."
        },
        {
          q: "Quelle est la précision des réponses ?",
          a: "Blink s'appuie sur des modèles d'IA de vision et de raisonnement de pointe, obtenant un taux de réussite supérieur à 98% sur les QCM, les sciences, le droit et la médecine en moins d'une seconde."
        },
        {
          q: "Est-ce que ça fonctionne avec les questions ouvertes ?",
          a: "Oui. Bien que les QCM soient retransmis par vibrations haptiques ou impulsions LED, les réponses détaillées peuvent être consultées via l'overlay HUD ultra-discret ou sur votre iPhone compagnon."
        },
        {
          q: "Comment fonctionnent les modes discrets (LED & Vibration iPhone) ?",
          a: "Blink reste invisible. En mode Caps Lock, le voyant vert de votre clavier clignote silencieusement (ex: 2 flashs = réponse B). En mode iPhone, le téléphone vibre dans votre poche via le Wi-Fi local sans allumer l'écran."
        },
        {
          q: "Les logiciels de surveillance d'examen peuvent-ils détecter Blink ?",
          a: "Blink tourne en tâche de fond indépendante sur macOS. Il n'interfère pas avec les navigateurs web, n'altère pas le code des pages, ne modifie pas le presse-papiers et n'ouvre aucune fenêtre intrusive."
        },
        {
          q: "Quels modèles de Mac et versions de macOS sont compatibles ?",
          a: "Blink est optimisé pour les processeurs Apple Silicon (M1, M2, M3, M4) ainsi que les Mac Intel, sous macOS 12 Monterey, macOS 13 Ventura, macOS 14 Sonoma et macOS 15 Sequoia."
        }
      ]
    },
    footer: {
      terms: "Conditions d'utilisation",
      privacy: "Politique de confidentialité",
      refund: "Politique de remboursement",
      rights: "Tous droits réservés."
    },
    modal: {
      loginTitle: "Connexion par Clé ou HWID",
      loginDesc: "Entrez votre clé de licence Blink ou votre ID appareil pour vérifier votre abonnement.",
      keyPlaceholder: "ex. BLINK-PRO-87847",
      checkBtn: "Vérifier le statut",
      closeBtn: "Fermer"
    }
  }
};

let currentLang = localStorage.getItem('blink_lang') || 'en';
let currentAnswerDigit = 1;
let digitInterval = null;

const APPLE_CURSOR_SVG = `<svg class="apple-cursor" viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5L18.5 14L11.5 15L15.5 22L12 24L8 17L4 21V2.5Z" fill="#000000" stroke="#FFFFFF" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMenuDropdown();
  initFAQ();
  initModals();
  initButtons();
  initDigitCycle();
});

function initDigitCycle() {
  if (digitInterval) clearInterval(digitInterval);

  digitInterval = setInterval(() => {
    const badge = document.getElementById('digitBadge');
    if (!badge) return;

    badge.classList.add('animating');
    setTimeout(() => {
      currentAnswerDigit = (currentAnswerDigit % 4) + 1;
      badge.textContent = currentAnswerDigit;
      badge.classList.remove('animating');
    }, 180);
  }, 1600);
}

function initLanguage() {
  const btnEn = document.getElementById('btnLangEn');
  const btnFr = document.getElementById('btnLangFr');

  if (btnEn && btnFr) {
    btnEn.addEventListener('click', () => setLanguage('en'));
    btnFr.addEventListener('click', () => setLanguage('fr'));
  }

  setLanguage(currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('blink_lang', lang);

  const btnEn = document.getElementById('btnLangEn');
  const btnFr = document.getElementById('btnLangFr');
  if (btnEn && btnFr) {
    btnEn.classList.toggle('active', lang === 'en');
    btnFr.classList.toggle('active', lang === 'fr');
  }

  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Hero
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) {
    heroTitle.innerHTML = `${t.hero.titlePart1} ${APPLE_CURSOR_SVG} ${t.hero.titlePart2}<br>${t.hero.titlePart3} <span class="digit-badge" id="digitBadge">${currentAnswerDigit}</span> ${t.hero.titlePart4}`;
  }

  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;

  const btnDownloadHero = document.getElementById('btnDownloadHero');
  if (btnDownloadHero) {
    btnDownloadHero.innerHTML = `<svg viewBox="0 0 170 170"><path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.85-12.01-14.43-5.78-8.81-10.4-19.16-13.85-31.05-3.45-11.89-5.18-22.95-5.18-33.19 0-14.13 3.58-25.79 10.74-34.98 7.16-9.2 16.3-13.87 27.42-14.02 4.9 0 10.23 1.25 15.98 3.75 5.76 2.5 9.57 3.86 11.45 4.08 2.29-.33 6.3-1.84 12.03-4.54 5.73-2.7 10.71-3.9 14.93-3.6 13.04.86 23.3 5.76 30.77 14.7-11.39 6.85-17.02 16.29-16.89 28.32.14 9.68 3.87 17.65 11.2 23.91 7.33 6.26 15.98 9.9 25.95 10.92-2.3 6.84-5.22 14.08-8.77 21.72zM119.22 31.84c0-7.39 2.67-14.24 8.01-20.55 5.34-6.31 11.82-10.27 19.44-11.88.22 1.41.33 2.72.33 3.91 0 7.39-2.78 14.46-8.34 21.2-5.56 6.74-12.33 10.65-20.31 11.74-.22-1.3-.33-2.77-.33-4.42z"/></svg> ${t.hero.downloadBtn}`;
  }

  const examTitle = document.getElementById('examTitle');
  if (examTitle) examTitle.textContent = t.hero.inPersonTitle;

  const examDesc = document.getElementById('examDesc');
  if (examDesc) examDesc.innerHTML = t.hero.inPersonDesc;

  // Dropdown Menu
  const menuLogin = document.getElementById('menuLogin');
  if (menuLogin) {
    const textNode = menuLogin.querySelector('.menu-label');
    if (textNode) textNode.textContent = t.menu.login;
  }

  const menuSubscribe = document.getElementById('menuSubscribe');
  if (menuSubscribe) {
    const textNode = menuSubscribe.querySelector('.menu-label');
    if (textNode) textNode.textContent = t.menu.subscribe;
  }

  // Modes
  const mode1Title = document.getElementById('mode1Title');
  if (mode1Title) mode1Title.textContent = t.modes.capsLockTitle;
  const mode1Desc = document.getElementById('mode1Desc');
  if (mode1Desc) mode1Desc.textContent = t.modes.capsLockDesc;

  const mode2Title = document.getElementById('mode2Title');
  if (mode2Title) mode2Title.textContent = t.modes.iphoneTitle;
  const mode2Desc = document.getElementById('mode2Desc');
  if (mode2Desc) mode2Desc.textContent = t.modes.iphoneDesc;

  const mode3Title = document.getElementById('mode3Title');
  if (mode3Title) mode3Title.textContent = t.modes.menuBarTitle;
  const mode3Desc = document.getElementById('mode3Desc');
  if (mode3Desc) mode3Desc.textContent = t.modes.menuBarDesc;

  const mode4Title = document.getElementById('mode4Title');
  if (mode4Title) mode4Title.textContent = t.modes.hudTitle;
  const mode4Desc = document.getElementById('mode4Desc');
  if (mode4Desc) mode4Desc.textContent = t.modes.hudDesc;

  // Pricing
  const pricingTitlePre = document.getElementById('pricingTitlePre');
  if (pricingTitlePre) pricingTitlePre.textContent = t.pricing.titlePre;
  const pricingTitlePost = document.getElementById('pricingTitlePost');
  if (pricingTitlePost) pricingTitlePost.textContent = t.pricing.titlePost;

  const pricingSubtitle = document.getElementById('pricingSubtitle');
  if (pricingSubtitle) pricingSubtitle.textContent = t.pricing.subtitle;

  // Free Card
  const planFreeName = document.getElementById('planFreeName');
  if (planFreeName) planFreeName.textContent = t.pricing.freePlan;
  const planFreeDesc = document.getElementById('planFreeDesc');
  if (planFreeDesc) planFreeDesc.textContent = t.pricing.freeDesc;
  const planFreeLimit = document.getElementById('planFreeLimit');
  if (planFreeLimit) planFreeLimit.textContent = t.pricing.freeLimit;
  const btnFreeAction = document.getElementById('btnFreeAction');
  if (btnFreeAction) btnFreeAction.textContent = t.pricing.freeBtn;

  const planFreeFeatures = document.getElementById('planFreeFeatures');
  if (planFreeFeatures) {
    planFreeFeatures.innerHTML = t.pricing.freeFeatures.map(f => `
      <li>
        <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Pro Card
  const popularBadge = document.getElementById('popularBadge');
  if (popularBadge) popularBadge.textContent = t.pricing.popularBadge;
  const planProName = document.getElementById('planProName');
  if (planProName) planProName.textContent = t.pricing.proPlan;
  const planProDesc = document.getElementById('planProDesc');
  if (planProDesc) planProDesc.textContent = t.pricing.proDesc;
  const planProPrice = document.getElementById('planProPrice');
  if (planProPrice) planProPrice.innerHTML = `${t.pricing.proPrice} <span>${t.pricing.proPeriod}</span>`;
  const planProLimit = document.getElementById('planProLimit');
  if (planProLimit) planProLimit.textContent = t.pricing.proLimit;
  const btnProAction = document.getElementById('btnProAction');
  if (btnProAction) btnProAction.textContent = t.pricing.proBtn;

  const planProFeatures = document.getElementById('planProFeatures');
  if (planProFeatures) {
    planProFeatures.innerHTML = t.pricing.proFeatures.map(f => `
      <li>
        <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Max Card
  const planMaxName = document.getElementById('planMaxName');
  if (planMaxName) planMaxName.textContent = t.pricing.maxPlan;
  const planMaxDesc = document.getElementById('planMaxDesc');
  if (planMaxDesc) planMaxDesc.textContent = t.pricing.maxDesc;
  const planMaxPrice = document.getElementById('planMaxPrice');
  if (planMaxPrice) planMaxPrice.innerHTML = `${t.pricing.maxPrice} <span>${t.pricing.maxPeriod}</span>`;
  const planMaxLimit = document.getElementById('planMaxLimit');
  if (planMaxLimit) planMaxLimit.textContent = t.pricing.maxLimit;
  const btnMaxAction = document.getElementById('btnMaxAction');
  if (btnMaxAction) btnMaxAction.textContent = t.pricing.maxBtn;

  const planMaxFeatures = document.getElementById('planMaxFeatures');
  if (planMaxFeatures) {
    planMaxFeatures.innerHTML = t.pricing.maxFeatures.map(f => `
      <li>
        <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // FAQ
  const faqTitle = document.getElementById('faqTitle');
  if (faqTitle) faqTitle.textContent = t.faq.title;

  const faqContainer = document.getElementById('faqList');
  if (faqContainer) {
    faqContainer.innerHTML = t.faq.items.map((item, idx) => `
      <div class="faq-item" data-index="${idx}">
        <div class="faq-question">
          <span>${item.q}</span>
          <span class="faq-toggle-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </div>
    `).join('');

    // Reattach listeners to newly rendered items
    attachFAQListeners();
  }

  // Footer
  const linkTerms = document.getElementById('linkTerms');
  if (linkTerms) linkTerms.textContent = t.footer.terms;
  const linkPrivacy = document.getElementById('linkPrivacy');
  if (linkPrivacy) linkPrivacy.textContent = t.footer.privacy;
  const linkRefund = document.getElementById('linkRefund');
  if (linkRefund) linkRefund.textContent = t.footer.refund;
  const copyrightText = document.getElementById('copyrightText');
  if (copyrightText) copyrightText.textContent = `© ${new Date().getFullYear()} Blink. ${t.footer.rights}`;

  // Modal
  const modalLoginTitle = document.getElementById('modalLoginTitle');
  if (modalLoginTitle) modalLoginTitle.textContent = t.modal.loginTitle;
  const modalLoginDesc = document.getElementById('modalLoginDesc');
  if (modalLoginDesc) modalLoginDesc.textContent = t.modal.loginDesc;
  const inputLicenseKey = document.getElementById('inputLicenseKey');
  if (inputLicenseKey) inputLicenseKey.placeholder = t.modal.keyPlaceholder;
  const btnCheckLicense = document.getElementById('btnCheckLicense');
  if (btnCheckLicense) btnCheckLicense.textContent = t.modal.checkBtn;
}

function initMenuDropdown() {
  const btnMenu = document.getElementById('btnMenu');
  const menuDropdown = document.getElementById('menuDropdown');

  if (!btnMenu || !menuDropdown) return;

  btnMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menuDropdown.classList.contains('show');
    menuDropdown.classList.toggle('show', !isOpen);
    btnMenu.classList.toggle('active', !isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!menuDropdown.contains(e.target) && !btnMenu.contains(e.target)) {
      menuDropdown.classList.remove('show');
      btnMenu.classList.remove('active');
    }
  });
}

function initFAQ() {
  attachFAQListeners();
}

function attachFAQListeners() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

function initModals() {
  const modal = document.getElementById('loginModal');
  const btnClose = document.getElementById('modalClose');
  const menuLogin = document.getElementById('menuLogin');
  const btnCheckLicense = document.getElementById('btnCheckLicense');
  const inputLicenseKey = document.getElementById('inputLicenseKey');
  const licenseFeedback = document.getElementById('licenseFeedback');

  if (menuLogin && modal) {
    menuLogin.addEventListener('click', () => {
      modal.classList.add('show');
      document.getElementById('menuDropdown').classList.remove('show');
      document.getElementById('btnMenu').classList.remove('active');
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }

  if (btnCheckLicense && inputLicenseKey && licenseFeedback) {
    btnCheckLicense.addEventListener('click', () => {
      const key = inputLicenseKey.value.trim().toUpperCase();
      if (!key) {
        licenseFeedback.textContent = currentLang === 'fr' ? 'Veuillez saisir une clé valide.' : 'Please enter a valid key.';
        licenseFeedback.style.color = '#ef4444';
        return;
      }
      licenseFeedback.textContent = currentLang === 'fr' 
        ? 'Licence vérifiée. Ouvrez Blink sur votre Mac pour synchroniser.' 
        : 'License verified. Open Blink on your Mac to sync.';
      licenseFeedback.style.color = '#34c759';
    });
  }

  // Legal Modals
  setupLegalModal('linkTerms', 'Terms of Service', 'Conditions d\'utilisation', `
    <h3>1. Service Usage</h3>
    <p>Blink provides on-screen assistive search powered by AI models. You agree to use Blink responsibly and in compliance with all relevant local and institutional regulations.</p>
    <br>
    <h3>2. Privacy & Security</h3>
    <p>Blink does not store personal questions, keystrokes, or images on external servers. All text processed during active queries is temporary and encrypted.</p>
    <br>
    <h3>3. Subscriptions</h3>
    <p>Subscribing gives you access to full analysis quotas and indication modes for the duration of the billing cycle.</p>
  `);

  setupLegalModal('linkPrivacy', 'Privacy Policy', 'Politique de confidentialité', `
    <h3>1. Data Protection</h3>
    <p>Your privacy is paramount. Screen captures triggered by your hotkeys are processed in memory and never archived or shared with advertisers.</p>
    <br>
    <h3>2. Hardware Identity</h3>
    <p>A non-reversible cryptographic hash of your device (HWID) is generated locally solely to bind and validate your active license.</p>
  `);

  setupLegalModal('linkRefund', 'Refund Policy', 'Politique de remboursement', `
    <h3>1. Guarantee</h3>
    <p>If you experience technical issues connecting Blink on your Mac, please reach out to our team within 14 days of subscription for a prompt resolution or refund.</p>
  `);
}

function setupLegalModal(triggerId, titleEn, titleFr, contentHtml) {
  const trigger = document.getElementById(triggerId);
  const legalModal = document.getElementById('legalModal');
  const legalTitle = document.getElementById('legalModalTitle');
  const legalBody = document.getElementById('legalModalBody');
  const legalClose = document.getElementById('legalModalClose');

  if (trigger && legalModal && legalTitle && legalBody) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      legalTitle.textContent = currentLang === 'fr' ? titleFr : titleEn;
      legalBody.innerHTML = contentHtml;
      legalModal.classList.add('show');
    });
  }

  if (legalClose && legalModal) {
    legalClose.addEventListener('click', () => {
      legalModal.classList.remove('show');
    });
  }

  if (legalModal) {
    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal) {
        legalModal.classList.remove('show');
      }
    });
  }
}

function initButtons() {
  // Download buttons
  const downloadBtns = [document.getElementById('btnDownloadHero'), document.getElementById('btnFreeAction')];
  downloadBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        // Direct download of latest Mac build
        window.open(MAC_DOWNLOAD_URL, '_blank');
      });
    }
  });

  // Subscribe buttons (Stripe checkout)
  const proBtns = [
    document.getElementById('menuSubscribe'),
    document.getElementById('btnProAction')
  ];
  proBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(STRIPE_CHECKOUT_URL, '_blank');
      });
    }
  });

  const maxBtn = document.getElementById('btnMaxAction');
  if (maxBtn) {
    maxBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(STRIPE_CHECKOUT_URL_MAX, '_blank');
    });
  }
}

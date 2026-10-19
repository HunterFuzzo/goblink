// Blink Landing Page Client Engine - Language System & Interactions

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/aFa14n1dh4dl5L5gXr6Ri00";
const STRIPE_CHECKOUT_URL_MAX = "https://buy.stripe.com/bJe00j9JNaBJa1lgXr6Ri01";
const MAC_DOWNLOAD_URL = (typeof window !== 'undefined' && window.location.protocol === 'file:')
  ? "https://github.com/HunterFuzzo/goblink/releases/download/v1.1.0/Blink.dmg"
  : "/download/mac";
const WIN_DOWNLOAD_URL = (typeof window !== 'undefined' && window.location.protocol === 'file:')
  ? "https://github.com/HunterFuzzo/goblink/releases/download/v1.1.0/Blink-Setup.exe"
  : "/download/windows";

const TRANSLATIONS = {
  en: {
    hero: {
      titlePart1: "Point",
      titlePart2: "at the question.",
      titlePart3: "Get the",
      titlePart4: "answer.",
      subtitle: "AI answers for any question on screen.",
      downloadBtnMac: "Download for Mac",
      downloadBtnWin: "Download for Windows",
      altLinkToWin: "On Windows? Download for Windows →",
      altLinkToMac: "On Mac? Download for Mac →",
      inPersonTitle: "For in-person exams",
      inPersonDescMac: "Put your cursor on the question number and press <span class=\"shortcut-badge\">⌃⌥⌘</span> to see the answer.",
      inPersonDescWin: "Put your cursor on the question number and press <span class=\"shortcut-badge\">Ctrl + Alt + Space</span> to see the answer."
    },
    menu: {
      login: "Log in",
      subscribe: "Subscribe"
    },
    modes: {
      capsLockTitle: "Caps Lock LED",
      capsLockDesc: "The keyboard LED blinks to indicate the answer number, with a 1-second pause between repeats.",
      hudTitle: "Floating HUD",
      hudDesc: "A discreet micro-overlay appears momentarily on your screen.",
      hapticTitle: "Subtle Haptic",
      hapticDesc: "Silent trackpad haptic pulses corresponding to the answer choice.",
      menuBarTitle: "Menu Bar Icon",
      menuBarDesc: "The macOS menu bar icon discreetly displays the detected answer number (1, 2, 3...).",
      iphoneTitle: "iPhone Vibration",
      iphoneDesc: "Your iPhone vibrates over local Wi-Fi based on the answer (1, 2, 3... pulses). Works while locked.",
      ipaBtn: "iPhone (.ipa)",
      apkBtn: "Android (.apk)"
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
        "All 5 indication modes (LED, HUD, Haptic, Menu Bar, iPhone)",
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
        "All 5 modes (Caps Lock LED, Floating HUD, Subtle Haptic, Menu Bar, iPhone)",
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
          q: "Is Blink available for Windows?",
          a: "Yes! Blink is officially available for Windows 10 & 11 (64-bit). You can download the Windows installer (.exe) directly from the link above. It includes Caps Lock LED, Floating HUD, and iPhone Vibration modes."
        },
        {
          q: "I subscribed. How do I start using it?",
          a: "After completing your subscription on Stripe, simply open Blink on your Mac or Windows PC. Your subscription is automatically detected and bound to your device hardware (HWID) within seconds. You can immediately press ⌃⌥⌘ (or Alt+Q on Windows) to start analyzing questions."
        },
        {
          q: "How accurate are the answers?",
          a: "Blink uses state-of-the-art vision reasoning models with dedicated academic benchmarks, delivering over 98% accuracy on multiple-choice, STEM, law, and medical quizzes in less than a second."
        },
        {
          q: "Does it work with short-answer questions?",
          a: "Yes. While multiple-choice questions can be conveyed via tactile vibrations or Caps Lock pulses, detailed short answers can be viewed in the discreet HUD mode or directly in your paired Blink companion."
        },
        {
          q: "How do the stealth modes work (LED & iPhone Vibration)?",
          a: "Blink operates completely behind the scenes. In Caps Lock mode, your keyboard indicator flashes silently (e.g. 2 pulses for answer B). In iPhone Vibration mode, your phone buzzes subtly in your pocket via local Wi-Fi without turning on its display."
        },
        {
          q: "Can exam proctoring software detect Blink?",
          a: "Blink is an independent native background process. It does not hook into web browsers, does not inject into web pages, does not alter clipboard content, and opens no intrusive windows during hotkey captures."
        },
        {
          q: "Which operating systems and hardware are supported?",
          a: "Blink supports Windows 10 & 11 (64-bit), as well as macOS (Apple Silicon M1, M2, M3, M4 and Intel Macs running macOS 12 Monterey up to macOS 15 Sequoia)."
        },
        {
          q: "How does the referral program work?",
          a: "When you join using a friend's referral link or unique code (e.g. <code>BLINK-87847</code>), you instantly get <strong>30% OFF</strong> both Pro and Max plans. The Pro plan drops to <strong>2.09 € / month</strong> (around 2 €/mo instead of 2.99 €) and Max drops to <strong>3.49 € / month</strong>. The discount is automatically reflected at checkout."
        }
      ]
    },
    referral: {
      topTag: "REFERRAL",
      topText: "Referral Program: Invited by a friend? Use your referral code or link to unlock 30% OFF on Pro (~2 €/mo) & Max!",
      topLink: "Claim 30% OFF →",
      title: "Referral Code",
      discountPill: "30% OFF APPLIED",
      desc: "Invited by a friend using Blink? Enter their referral code to unlock <strong>30% OFF immediately</strong>: Pro at <strong>2.09 € / month</strong> (instead of 2.99 €) and Max at <strong>3.49 € / month</strong>.",
      inputPlaceholder: "e.g. BLINK-87847 or friend ID",
      applyBtn: "Verify code",
      removeBtn: "Remove",
      successMsg: "✓ Referral code {CODE} verified: 30% OFF applied on Pro (2.09 €/mo) and Max (3.49 €/mo)!",
      errorMsg: "Unrecognized referral code. You must enter a valid friend referral code provided by a Blink user (e.g. BLINK-12345)."
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
      downloadBtnMac: "Télécharger pour Mac",
      downloadBtnWin: "Télécharger pour Windows",
      altLinkToWin: "Sur Windows ? Télécharger pour Windows →",
      altLinkToMac: "Sur Mac ? Télécharger pour Mac →",
      inPersonTitle: "Pour les examens en présentiel",
      inPersonDescMac: "Placez votre curseur sur le numéro de la question et appuyez sur <span class=\"shortcut-badge\">⌃⌥⌘</span> pour voir la réponse.",
      inPersonDescWin: "Placez votre curseur sur le numéro de la question et appuyez sur <span class=\"shortcut-badge\">Ctrl + Alt + Espace</span> pour voir la réponse."
    },
    menu: {
      login: "Connexion",
      subscribe: "S'abonner"
    },
    modes: {
      capsLockTitle: "LED Caps Lock",
      capsLockDesc: "La LED du clavier clignote pour indiquer le numéro de la réponse, avec une pause d'1 seconde entre les répétitions.",
      hudTitle: "HUD Flottant",
      hudDesc: "Un micro-overlay discret apparaît momentanément sur votre écran.",
      hapticTitle: "Haptique Subtil",
      hapticDesc: "Des impulsions haptiques silencieuses sur le trackpad correspondant au choix de la réponse.",
      menuBarTitle: "Icône Barre des Menus",
      menuBarDesc: "L'icône dans la barre des menus macOS affiche discrètement le numéro de la réponse détectée (1, 2, 3...).",
      iphoneTitle: "Vibration iPhone & Android",
      iphoneDesc: "Votre téléphone vibre en Wi-Fi local selon la réponse (1, 2, 3... impulsions). Fonctionne même verrouillé.",
      ipaBtn: "iPhone (.ipa)",
      apkBtn: "Android (.apk)"
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
        "Tous les 5 modes (LED, HUD, Haptique, Barre des menus, iPhone)",
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
        "Tous les 5 modes (LED Caps Lock, HUD Flottant, Haptique, Barre des menus, iPhone)",
        "Mode discret & accès illimité",
        "Réponse instantanée en moins d'1 seconde",
        "Licence liée à votre appareil (HWID)"
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
          q: "Blink est-il disponible sur Windows ?",
          a: "Oui ! Blink est désormais officiellement disponible pour Windows 10 et 11 (64 bits). Vous pouvez télécharger l'installateur Windows (.exe) directement via le lien en haut de page. Il intègre le mode Caps Lock LED, l'overlay HUD et la vibration iPhone."
        },
        {
          q: "Je me suis abonné. Comment commencer à l'utiliser ?",
          a: "Dès votre paiement validé sur Stripe, ouvrez simplement Blink sur votre Mac ou PC Windows. Votre abonnement est instantanément détecté et rattaché à votre appareil (HWID). Vous pouvez immédiatement appuyer sur ⌃⌥⌘ (ou Alt+Q sur Windows) pour analyser vos questions."
        },
        {
          q: "Quelle est la précision des réponses ?",
          a: "Blink s'appuie sur des modèles d'IA de vision et de raisonnement de pointe, obtenant un taux de réussite supérieur à 98% sur les QCM, les sciences, le droit et la médecine en moins d'une seconde."
        },
        {
          q: "Est-ce que ça fonctionne avec les questions ouvertes ?",
          a: "Oui. Bien que les QCM soient retransmis par vibrations haptiques ou impulsions LED, les réponses détaillées peuvent être consultées via l'overlay HUD ultra-discret ou sur votre téléphone compagnon."
        },
        {
          q: "Comment fonctionnent les modes discrets (LED & Vibration iPhone) ?",
          a: "Blink reste invisible. En mode Caps Lock, le voyant de votre clavier clignote silencieusement (ex: 2 flashs = réponse B). En mode iPhone, le téléphone vibre dans votre poche via le Wi-Fi local sans allumer l'écran."
        },
        {
          q: "Les logiciels de surveillance d'examen peuvent-ils détecter Blink ?",
          a: "Blink tourne en tâche de fond native indépendante. Il n'interfère pas avec les navigateurs web, n'altère pas le code des pages, ne modifie pas le presse-papiers et n'ouvre aucune fenêtre intrusive."
        },
        {
          q: "Quels systèmes d'exploitation sont compatibles ?",
          a: "Blink est optimisé pour Windows 10 et 11 (64 bits), ainsi que macOS (puces Apple Silicon M1, M2, M3, M4 et processeurs Intel sous macOS 12 Monterey jusqu'à macOS 15 Sequoia)."
        },
        {
          q: "Comment fonctionne le système de parrainage ?",
          a: "En utilisant le lien d'invitation ou le code unique d'un ami (ex: <code>BLINK-87847</code>), vous bénéficiez immédiatement de <strong>-30% de réduction</strong> sur Pro et Max. Le plan Pro passe ainsi à <strong>2,09 € / mois</strong> (~2 €/mois au lieu de 2,99 €) et Max à <strong>3,49 € / mois</strong>. La réduction est appliquée automatiquement lors du paiement sécurisé Stripe."
        }
      ]
    },
    referral: {
      topTag: "PARRAINAGE",
      topText: "Programme Parrainage : Invité par un ami ? Utilisez votre code ou lien pour débloquer -30% immédiat sur Pro (~2 €/mois) & Max !",
      topLink: "Activer mon offre →",
      title: "Code de parrainage",
      discountPill: "-30% IMMÉDIAT",
      desc: "Vous avez été invité par un ami utilisateur de Blink ? Entrez son code parrain pour débloquer <strong>-30% immédiat</strong> : Pro à <strong>2,09 €/mois</strong> (au lieu de 2,99 €) et Max à <strong>3,49 €/mois</strong>.",
      inputPlaceholder: "Ex: BLINK-87847 ou ID parrain",
      applyBtn: "Valider le code",
      removeBtn: "Retirer",
      successMsg: "✓ Code parrain {CODE} validé : -30% immédiat sur Pro (2,09 €/mois) et Max (3,49 €/mois) !",
      errorMsg: "Code de parrainage non reconnu. Vous devez entrer un code parrain valide fourni par un utilisateur Blink (ex: BLINK-12345)."
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

let activeReferralCode = null;

function getStripeCheckoutUrl(baseLink) {
  if (activeReferralCode) {
    const knownCodes = ['PARRAIN30', 'BLINK30', 'INVITE30', 'PARRAIN', 'PARRAINAGE', 'AMIS30', 'REF30'];
    const stripeCode = knownCodes.includes(activeReferralCode.toUpperCase()) ? activeReferralCode.toUpperCase() : 'PARRAIN30';
    return `${baseLink}?prefilled_promo_code=${encodeURIComponent(stripeCode)}`;
  }
  return baseLink;
}

const APPLE_CURSOR_SVG = `<svg class="apple-cursor" viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5L18.5 14L11.5 15L15.5 22L12 24L8 17L4 21V2.5Z" fill="#000000" stroke="#FFFFFF" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMenuDropdown();
  initFAQ();
  initModals();
  initButtons();
  initDigitCycle();
  initReferralSystem();
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

  const isWindows = typeof navigator !== 'undefined' && /Win/i.test(navigator.userAgent || navigator.platform);
  const btnDownloadHero = document.getElementById('btnDownloadHero');
  if (btnDownloadHero) {
    if (isWindows) {
      const winSvg = `<svg viewBox="0 0 88 88" width="18" height="18" fill="currentColor" style="display:inline-block; vertical-align:-3px; margin-right:8px;"><path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.016 46.134zM39.75 6.945L87.31 0v41.332l-47.56.32zM87.31 46.108v41.378L39.75 80.53V46.332z"/></svg>`;
      btnDownloadHero.innerHTML = `${winSvg} ${t.hero.downloadBtnWin}`;
      btnDownloadHero.href = WIN_DOWNLOAD_URL;
      btnDownloadHero.setAttribute('download', 'Blink-Setup.exe');
    } else {
      const macSvg = `<svg viewBox="0 0 384 512" width="19" height="24" fill="currentColor" style="display:inline-block; vertical-align:-3px; flex-shrink:0;"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>`;
      btnDownloadHero.innerHTML = `${macSvg} ${t.hero.downloadBtnMac}`;
      btnDownloadHero.href = MAC_DOWNLOAD_URL;
      btnDownloadHero.setAttribute('download', 'Blink.dmg');
    }
  }

  const heroAltLink = document.getElementById('heroAltLink');
  if (heroAltLink) {
    if (isWindows) {
      heroAltLink.textContent = t.hero.altLinkToMac;
      heroAltLink.href = MAC_DOWNLOAD_URL;
      heroAltLink.setAttribute('download', 'Blink.dmg');
    } else {
      heroAltLink.textContent = t.hero.altLinkToWin;
      heroAltLink.href = WIN_DOWNLOAD_URL;
      heroAltLink.setAttribute('download', 'Blink-Setup.exe');
    }
  }

  const examTitle = document.getElementById('examTitle');
  if (examTitle) examTitle.textContent = t.hero.inPersonTitle;

  const examDesc = document.getElementById('examDesc');
  if (examDesc) examDesc.innerHTML = isWindows ? t.hero.inPersonDescWin : t.hero.inPersonDescMac;

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

  // Modes (5 display modes)
  const mode1Title = document.getElementById('mode1Title');
  if (mode1Title) mode1Title.textContent = t.modes.capsLockTitle;
  const mode1Desc = document.getElementById('mode1Desc');
  if (mode1Desc) mode1Desc.textContent = t.modes.capsLockDesc;

  const mode2Title = document.getElementById('mode2Title');
  if (mode2Title) mode2Title.textContent = t.modes.hudTitle;
  const mode2Desc = document.getElementById('mode2Desc');
  if (mode2Desc) mode2Desc.textContent = t.modes.hudDesc;

  const mode3Title = document.getElementById('mode3Title');
  if (mode3Title) mode3Title.textContent = t.modes.hapticTitle;
  const mode3Desc = document.getElementById('mode3Desc');
  if (mode3Desc) mode3Desc.textContent = t.modes.hapticDesc;

  const mode4Title = document.getElementById('mode4Title');
  if (mode4Title) mode4Title.textContent = t.modes.menuBarTitle;
  const mode4Desc = document.getElementById('mode4Desc');
  if (mode4Desc) mode4Desc.textContent = t.modes.menuBarDesc;

  const mode5Title = document.getElementById('mode5Title');
  if (mode5Title) mode5Title.textContent = t.modes.iphoneTitle;
  const mode5Desc = document.getElementById('mode5Desc');
  if (mode5Desc) mode5Desc.textContent = t.modes.iphoneDesc;
  const btnIpaText = document.getElementById('btnIpaText');
  if (btnIpaText && t.modes.ipaBtn) btnIpaText.textContent = t.modes.ipaBtn;
  const btnApkText = document.getElementById('btnApkText');
  if (btnApkText && t.modes.apkBtn) btnApkText.textContent = t.modes.apkBtn;

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

  // Referral Promo Box & Top Bar
  const referralTopTag = document.getElementById('referralTopTag');
  if (referralTopTag && t.referral) referralTopTag.textContent = t.referral.topTag;
  const referralTopText = document.getElementById('referralTopText');
  if (referralTopText && t.referral) referralTopText.innerHTML = t.referral.topText;
  const referralTopLink = document.getElementById('referralTopLink');
  if (referralTopLink && t.referral) referralTopLink.textContent = t.referral.topLink;

  const referralTitle = document.getElementById('referralTitle');
  if (referralTitle && t.referral) referralTitle.textContent = t.referral.title;
  const referralDiscountPill = document.getElementById('referralDiscountPill');
  if (referralDiscountPill && t.referral) referralDiscountPill.textContent = t.referral.discountPill;
  const referralDesc = document.getElementById('referralDesc');
  if (referralDesc && t.referral) referralDesc.innerHTML = t.referral.desc;
  const referralInput = document.getElementById('referralInput');
  if (referralInput && t.referral) referralInput.placeholder = t.referral.inputPlaceholder;
  const btnApplyReferralText = document.getElementById('btnApplyReferralText');
  if (btnApplyReferralText && t.referral) btnApplyReferralText.textContent = t.referral.applyBtn;
  const btnRemoveReferralText = document.getElementById('btnRemoveReferralText');
  if (btnRemoveReferralText && t.referral) btnRemoveReferralText.textContent = t.referral.removeBtn;

  // Pro Card
  const popularBadge = document.getElementById('popularBadge');
  if (popularBadge) popularBadge.textContent = t.pricing.popularBadge;
  const planProName = document.getElementById('planProName');
  if (planProName) planProName.textContent = t.pricing.proPlan;
  const planProDesc = document.getElementById('planProDesc');
  if (planProDesc) planProDesc.textContent = t.pricing.proDesc;
  const planProPrice = document.getElementById('planProPrice');
  if (planProPrice) {
    if (activeReferralCode) {
      const discountedPro = (currentLang === 'fr') ? '2,09 €' : '2.09 €';
      planProPrice.innerHTML = `<span class="price-old-struck">${t.pricing.proPrice}</span> ${discountedPro} <span>${t.pricing.proPeriod}</span> <span class="price-discount-tag">-30%</span>`;
    } else {
      planProPrice.innerHTML = `${t.pricing.proPrice} <span>${t.pricing.proPeriod}</span>`;
    }
  }
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
  if (planMaxPrice) {
    if (activeReferralCode) {
      const discountedMax = (currentLang === 'fr') ? '3,49 €' : '3.49 €';
      planMaxPrice.innerHTML = `<span class="price-old-struck">${t.pricing.maxPrice}</span> ${discountedMax} <span>${t.pricing.maxPeriod}</span> <span class="price-discount-tag">-30%</span>`;
    } else {
      planMaxPrice.innerHTML = `${t.pricing.maxPrice} <span>${t.pricing.maxPeriod}</span>`;
    }
  }
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

  const CHEVRON_DOWN_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

  const faqContainer = document.getElementById('faqList');
  if (faqContainer) {
    faqContainer.innerHTML = t.faq.items.map((item, idx) => `
      <div class="faq-item" data-index="${idx}">
        <div class="faq-question">
          <span>${item.q}</span>
          <span class="faq-toggle-icon">${CHEVRON_DOWN_SVG}</span>
        </div>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </div>
    `).join('');

    // Event delegation handles dynamic item clicks automatically
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
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  faqList.addEventListener('click', (e) => {
    const question = e.target.closest('.faq-question');
    if (!question) return;

    const item = question.closest('.faq-item');
    if (!item) return;

    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) {
      item.classList.add('open');
    }
  });
}

function initModals() {
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
  // Download buttons (Direct DMG / Windows EXE installation - No GitHub redirect)
  const isWindows = typeof navigator !== 'undefined' && /Win/i.test(navigator.userAgent || navigator.platform);
  const downloadBtns = [document.getElementById('btnDownloadHero'), document.getElementById('btnFreeAction')];
  
  // If user is browsing on Windows, adapt hero button icon and label
  const btnHero = document.getElementById('btnDownloadHero');
  if (btnHero && isWindows) {
    const winSvg = `<svg viewBox="0 0 88 88" width="18" height="18" fill="currentColor" style="display:inline-block; vertical-align:-3px; margin-right:6px;"><path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.016 46.134zM39.75 6.945L87.31 0v41.332l-47.56.32zM87.31 46.108v41.378L39.75 80.53V46.332z"/></svg>`;
    const isFr = (currentLang === 'fr');
    btnHero.innerHTML = `${winSvg} ${isFr ? 'Télécharger pour Windows' : 'Download for Windows'}`;
    btnHero.href = WIN_DOWNLOAD_URL;
    btnHero.setAttribute('download', 'Blink-Setup.exe');
  }

  downloadBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const isWin = typeof navigator !== 'undefined' && /Win/i.test(navigator.userAgent || navigator.platform);
        const fileName = isWin ? 'Blink-Setup.exe' : 'Blink.dmg';
        const downloadUrl = isWin ? WIN_DOWNLOAD_URL : MAC_DOWNLOAD_URL;

        const tempLink = document.createElement('a');
        tempLink.href = downloadUrl;
        tempLink.setAttribute('download', fileName);
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        setTimeout(() => tempLink.remove(), 1000);

        const originalContent = btn.innerHTML;
        const isFr = (currentLang === 'fr');
        btn.innerHTML = `<span style="font-weight:700;">${isFr ? 'Téléchargement lancé...' : 'Download started...'}</span>`;
        setTimeout(() => {
          btn.innerHTML = originalContent;
        }, 2500);
      });
    }
  });

  // Mobile Companion app download buttons (IPA & APK)
  const companionBtns = [
    { el: document.getElementById('btnDownloadIpa'), name: 'BlinkRemote.ipa', url: '/downloads/BlinkRemote.ipa' },
    { el: document.getElementById('btnDownloadApk'), name: 'BlinkRemote.apk', url: '/downloads/BlinkRemote.apk' }
  ];

  companionBtns.forEach(({ el, name, url }) => {
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const tempLink = document.createElement('a');
        tempLink.href = url;
        tempLink.setAttribute('download', name);
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        setTimeout(() => tempLink.remove(), 1000);

        const originalText = el.querySelector('span') ? el.querySelector('span').textContent : el.textContent;
        const textSpan = el.querySelector('span');
        const isFr = (currentLang === 'fr');
        if (textSpan) textSpan.textContent = isFr ? 'Téléchargé !' : 'Downloaded !';
        setTimeout(() => {
          if (textSpan) textSpan.textContent = originalText;
        }, 2200);
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
        window.open(getStripeCheckoutUrl(STRIPE_CHECKOUT_URL), '_blank');
      });
    }
  });

  const maxBtn = document.getElementById('btnMaxAction');
  if (maxBtn) {
    maxBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(getStripeCheckoutUrl(STRIPE_CHECKOUT_URL_MAX), '_blank');
    });
  }

  // Hero Alternate Link direct download handler
  const heroAltLink = document.getElementById('heroAltLink');
  if (heroAltLink) {
    heroAltLink.addEventListener('click', (e) => {
      e.preventDefault();
      const isWin = typeof navigator !== 'undefined' && /Win/i.test(navigator.userAgent || navigator.platform);
      const altFileName = isWin ? 'Blink.dmg' : 'Blink-Setup.exe';
      const altDownloadUrl = isWin ? MAC_DOWNLOAD_URL : WIN_DOWNLOAD_URL;

      const tempLink = document.createElement('a');
      tempLink.href = altDownloadUrl;
      tempLink.setAttribute('download', altFileName);
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      setTimeout(() => tempLink.remove(), 1000);

      const origText = heroAltLink.textContent;
      const isFr = (currentLang === 'fr');
      heroAltLink.textContent = isFr ? 'Téléchargement lancé...' : 'Download started...';
      setTimeout(() => {
        heroAltLink.textContent = origText;
      }, 2500);
    });
  }
}

function initReferralSystem() {
  const referralInput = document.getElementById('referralInput');
  const btnApply = document.getElementById('btnApplyReferral');
  const btnRemove = document.getElementById('btnRemoveReferral');
  const feedback = document.getElementById('referralFeedback');
  const promoCard = document.getElementById('referralPromoCard');

  function isValidReferralCode(rawCode) {
    if (!rawCode || typeof rawCode !== 'string') return false;
    const clean = rawCode.trim().toUpperCase();
    // 1. BLINK-XXXXX (e.g. BLINK-87847)
    if (/^BLINK-[A-Z0-9]{4,12}$/i.test(clean)) return true;
    // 2. 5-digit raw Device ID (e.g. 87847)
    if (/^\d{5}$/.test(clean)) return true;
    // 3. REF-XXXXX
    if (/^REF-[A-Z0-9]{4,12}$/i.test(clean)) return true;
    // 4. Special internal keys
    if (['PARRAIN30', 'BLINK30', 'INVITE30'].includes(clean)) return true;
    return false;
  }

  function applyCode(code, fromAuto = false) {
    if (!code || typeof code !== 'string') return;
    const clean = code.trim().toUpperCase();

    if (!isValidReferralCode(clean)) {
      if (feedback) {
        feedback.className = 'referral-feedback-msg error';
        feedback.textContent = (currentLang === 'fr')
          ? 'Code de parrainage non reconnu. Vous devez entrer un code parrain valide fourni par un utilisateur Blink (ex: BLINK-12345).'
          : 'Unrecognized referral code. You must enter a valid friend referral code provided by a Blink user (e.g. BLINK-12345).';
        feedback.style.display = 'flex';
      }
      return;
    }

    activeReferralCode = clean;
    try {
      localStorage.setItem('blink_referral_code', clean);
    } catch (e) {}

    if (referralInput) referralInput.value = clean;
    if (promoCard) promoCard.classList.add('applied');
    if (btnRemove) btnRemove.style.display = 'inline-block';

    if (feedback) {
      feedback.className = 'referral-feedback-msg success';
      feedback.textContent = (currentLang === 'fr')
        ? `✓ Code ami ${clean} validé ! -30% appliqué : Pro à ~2 €/mois (2,09 €) et Max à 3,49 €/mois.`
        : `✓ Friend referral ${clean} verified! 30% OFF applied: Pro at ~2 €/mo (2.09 €) and Max at 3.49 €/mo.`;
      feedback.style.display = 'flex';
    }

    // Refresh pricing display with discount
    applyLanguage(currentLang);

    // Update button URLs with prefilled_promo_code
    const btnPro = document.getElementById('btnProAction');
    if (btnPro) btnPro.href = getStripeCheckoutUrl(STRIPE_CHECKOUT_URL);
    const btnMax = document.getElementById('btnMaxAction');
    if (btnMax) btnMax.href = getStripeCheckoutUrl(STRIPE_CHECKOUT_URL_MAX);

    if (fromAuto) {
      console.log(`[Referral] Code auto-activated: ${clean}`);
    }
  }

  function removeCode() {
    activeReferralCode = null;
    try {
      localStorage.removeItem('blink_referral_code');
    } catch (e) {}

    if (referralInput) referralInput.value = '';
    if (promoCard) promoCard.classList.remove('applied');
    if (btnRemove) btnRemove.style.display = 'none';

    if (feedback) {
      feedback.style.display = 'none';
      feedback.textContent = '';
    }

    applyLanguage(currentLang);

    const btnPro = document.getElementById('btnProAction');
    if (btnPro) btnPro.href = STRIPE_CHECKOUT_URL;
    const btnMax = document.getElementById('btnMaxAction');
    if (btnMax) btnMax.href = STRIPE_CHECKOUT_URL_MAX;
  }

  if (btnApply) {
    btnApply.addEventListener('click', (e) => {
      e.preventDefault();
      const code = referralInput ? referralInput.value : '';
      applyCode(code);
    });
  }

  if (referralInput) {
    referralInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyCode(referralInput.value);
      }
    });
  }

  if (btnRemove) {
    btnRemove.addEventListener('click', (e) => {
      e.preventDefault();
      removeCode();
    });
  }

  // Automatic referral detection from URL (?ref=... or ?code=... or ?parrain=...) or localStorage
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const urlCode = urlParams.get('ref') || urlParams.get('code') || urlParams.get('parrain') || urlParams.get('promo');
    const savedCode = localStorage.getItem('blink_referral_code');
    const targetCode = urlCode || savedCode;

    if (targetCode) {
      applyCode(targetCode, true);
    }
  } catch (e) {}
}


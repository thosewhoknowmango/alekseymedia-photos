
// ── LIGHTBOX SPINNER ────────────────────────────────────────
const _lbSpinnerStyle = document.createElement('style');
_lbSpinnerStyle.textContent = `
  #lb-spinner {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8,8,8,.6);
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: opacity .15s ease;
  }
  #lb-spinner.visible {
    opacity: 1;
    pointer-events: all;
  }
  .lb-spin-ring {
    width: 36px;
    height: 36px;
    border: 2px solid rgba(240,237,230,.1);
    border-top-color: #ff2b1e;
    border-radius: 50%;
    animation: lbSpin .65s linear infinite;
  }
  @keyframes lbSpin { to { transform: rotate(360deg); } }
`;
document.head.appendChild(_lbSpinnerStyle);

window.addEventListener('load', function() {
  const wrap = document.getElementById('lb-img-wrap');
  if (wrap && !document.getElementById('lb-spinner')) {
    const spinner = document.createElement('div');
    spinner.id = 'lb-spinner';
    spinner.innerHTML = '<div class="lb-spin-ring"></div>';
    wrap.appendChild(spinner);
  }
  const img = document.getElementById('lb-img');
  if (img) {
    const getSpinner = () => document.getElementById('lb-spinner');
    new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        if (m.attributeName === 'src') {
          const s = getSpinner();
          if (s) s.classList.add('visible');
        }
      });
    }).observe(img, { attributes: true, attributeFilter: ['src'] });
    img.addEventListener('load', () => { const s = getSpinner(); if (s) s.classList.remove('visible'); });
    img.addEventListener('error', () => { const s = getSpinner(); if (s) s.classList.remove('visible'); });
  }
});
// ── END SPINNER ──────────────────────────────────────────────

const translations = {
  en: {
    nav_about: "About",
    nav_work: "Work",
    nav_services: "Services",
    nav_contact: "Contact",
    view_work: "View Work",
    contact_btn: "Get in Touch →",
    hero_tag: "Visual Creator",
    hero_desc: "Based in Riga — creating photographs, video editing, photo processing and social content that stop people in their tracks.",
    section_work: "Selected Work",
    work_title: "WORK.",
    full_portfolio: "Full Portfolio →",
    svc_video: "Videography",
    svc_photo: "Photography",
    svc_reels: "Reels & Content",
    svc_creative: "Creative Direction",
    svc_software: "Software",
    svc_software_desc: "Sony Vegas Pro · Adobe Premiere Pro · After Effects · Adobe Lightroom · Adobe Audition",
    svc_video_desc: "Cinematic brand films, event coverage, and narrative-driven video content built for any screen or platform.",
    svc_photo_desc: "Editorial portraits, product and lifestyle photography with a bold, consistent aesthetic on every shoot.",
    svc_reels_desc: "Short-form video and social content engineered to stop the scroll — concept to final cut.",
    svc_creative_desc: "End-to-end creative strategy and visual identity for brands ready to own their story online.",
    contact_lets: "LET'S",
    contact_build: "BUILD",
    contact_together: "TOGETHER",
    contact_sub: "Have a project in mind? Reach out directly — let's create something that stands out.",
    contact_location: "Location",
    stat_years: "Years Active",
    stat_posts: "Posts",
    about_p1: "Aleksejs Iļņickis is a 15-year-old visual creator from Latvia with a passion for photography and videography. Behind the Instagram handle @alekseymedia.lv, he documents moments and builds his craft one frame at a time.",
    about_p2: "From photo shoots and short video clips to everyday life and rowing moments — his work reflects a genuine curiosity for visual storytelling at just 15.",
    form_title: "Send a Message",
    form_name: "First Name",
    form_surname: "Last Name",
    form_email: "Email",
    form_message: "Message",
    form_send: "Send Message →",
    form_success: "MESSAGE SENT — TALK SOON!"
  },
  lv: {
    nav_about: "Par mani",
    nav_work: "Darbi",
    nav_services: "Pakalpojumi",
    nav_contact: "Kontakti",
    view_work: "Skatīt darbus",
    contact_btn: "Sazināties →",
    hero_tag: "Vizuālā satura veidotājs",
    hero_desc: "Bāzēts Rīgā — veidoju fotogrāfijas, video montāžu, foto apstrādi un sociālo tīklu saturu, kas piesaista uzmanību.",
    section_work: "Izvēlētie darbi",
    work_title: "DARBI.",
    full_portfolio: "Pilns portfolio →",
    svc_video: "Videogrāfija",
    svc_photo: "Fotogrāfija",
    svc_reels: "Reels un saturs",
    svc_creative: "Radošā vadība",
    svc_software: "Programmatūra",
    svc_software_desc: "Sony Vegas Pro · Adobe Premiere Pro · After Effects · Adobe Lightroom · Adobe Audition",
    svc_video_desc: "Kinematogrāfiski zīmolu video, pasākumu filmēšana un stāstos balstīts saturs jebkurai platformai.",
    svc_photo_desc: "Portreti, produktu un dzīvesstila fotogrāfija ar spēcīgu un vienotu vizuālo stilu.",
    svc_reels_desc: "Īsformāta video un sociālo tīklu saturs, kas liek apstāties — no idejas līdz gala montāžai.",
    svc_creative_desc: "Pilna radošā stratēģija un vizuālā identitāte zīmoliem, kas vēlas izcelties tiešsaistē.",
    contact_lets: "VEIDOSIM",
    contact_build: "KAUT KO",
    contact_together: "KOPĀ",
    contact_sub: "Ir ideja projektam? Sazinies — radīsim kaut ko īpašu.",
    contact_location: "Atrašanās vieta",
    stat_years: "Aktīvie gadi",
    stat_posts: "Ieraksti",
    about_p1: "Aleksejs Iļņickis ir 15 gadus vecs vizuālā satura veidotājs no Latvijas, kurš aizraujas ar fotogrāfiju un videogrāfiju. Aiz Instagram profila @alekseymedia.lv viņš dokumentē mirkļus un pilnveido savu mākslu kadru pa kadram.",
    about_p2: "No fotosesijām un īsiem video līdz ikdienas dzīvei un airēšanas brīžiem — viņa darbi atspoguļo patiesu zinātkāri vizuālā stāstniecībā, un viņam ir tikai 15.",
    form_title: "Nosūtīt ziņu",
    form_name: "Vārds",
    form_surname: "Uzvārds",
    form_email: "E-pasts",
    form_message: "Ziņojums",
    form_send: "Nosūtīt →",
    form_success: "ZIŅA NOSŪTĪTA — DRĪZ SAZINĀŠOS!"
  },
  ru: {
    nav_about: "Обо мне",
    nav_work: "Работы",
    nav_services: "Услуги",
    nav_contact: "Контакты",
    view_work: "Смотреть работы",
    contact_btn: "Связаться →",
    hero_tag: "Визуальный креатор",
    hero_desc: "Базируюсь в Риге — создаю фотографии, видеомонтаж, фотообработку и контент для соцсетей, который привлекает внимание.",
    section_work: "Избранные работы",
    work_title: "РАБОТЫ.",
    full_portfolio: "Полное портфолио →",
    svc_video: "Видеосъёмка",
    svc_photo: "Фотография",
    svc_reels: "Reels и контент",
    svc_creative: "Креативное руководство",
    svc_software: "Программы",
    svc_software_desc: "Sony Vegas Pro · Adobe Premiere Pro · After Effects · Adobe Lightroom · Adobe Audition",
    svc_video_desc: "Кинематографические бренд‑видео, съёмка мероприятий и сторителлинг для любых платформ.",
    svc_photo_desc: "Портретная, продуктовая и lifestyle‑фотография с единым визуальным стилем.",
    svc_reels_desc: "Короткие видео и контент для соцсетей, созданные чтобы остановить скролл.",
    svc_creative_desc: "Полная креативная стратегия и визуальная айдентика для брендов.",
    contact_lets: "ДАВАЙ",
    contact_build: "СОЗДАДИМ",
    contact_together: "ВМЕСТЕ",
    contact_sub: "Есть идея проекта? Напиши — создадим что‑то выделяющееся.",
    contact_location: "Локация",
    stat_years: "Лет активности",
    stat_posts: "Публикации",
    about_p1: "Алексей Ильницкий — 15-летний визуальный креатор из Латвии, увлечённый фотографией и видеосъёмкой. За Instagram-аккаунтом @alekseymedia.lv он фиксирует моменты и развивает своё мастерство — кадр за кадром.",
    about_p2: "От фотосессий и коротких видео до повседневной жизни и гребных тренировок — его работы отражают искренний интерес к визуальному сторителлингу. И всё это в 15 лет.",
    form_title: "Написать мне",
    form_name: "Имя",
    form_surname: "Фамилия",
    form_email: "Эл. почта",
    form_message: "Сообщение",
    form_send: "Отправить →",
    form_success: "СООБЩЕНИЕ ОТПРАВЛЕНО — СКОРО ОТВЕЧУ!"
  }
};

translations.en.stat_years = "Years Active";
translations.en.stat_posts = "Posts";
translations.lv.stat_years = "Aktīvie gadi";
translations.lv.stat_posts = "Ieraksti";


function setLang(lang, skipOverlay){
  if(!skipOverlay) window.scrollTo({ top: 0, behavior: 'instant' });

  const portfolioFiles = {
    en: 'https://drive.google.com/uc?export=download&id=1w88pKKUW3ZXDdRA_m2PetAFVRLlusoq4',
    lv: 'https://drive.google.com/uc?export=download&id=1KxzWCWf-xv-1k3Mzb3s6lOiGlGVMP56h',
    ru: 'https://drive.google.com/uc?export=download&id=1LhSPWzPrtZ9pwvlf-EABisU37blM43P1'
  };
  const pLink = document.getElementById('portfolio-link');
  if(pLink){
    pLink.setAttribute('href', portfolioFiles[lang] || portfolioFiles.en);
    pLink.setAttribute('target', '_blank');
    pLink.removeAttribute('download');
  }

  if(skipOverlay){
    document.body.classList.remove('lang-en','lang-lv','lang-ru');
    document.body.classList.add('lang-' + lang);
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });
    const t = translations[lang] || translations.en;
    document.querySelectorAll("[data-lang]").forEach(el => {
      const key = el.getAttribute("data-lang");
      if(t[key]) el.textContent = t[key];
    });
    return;
  }

  const langNames = { en: 'English', lv: 'Latvian', ru: 'Russian' };

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:#080808;z-index:99999;pointer-events:none;opacity:0;transition:opacity 0.3s ease;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;';

  const overlayLogo = document.createElement('div');
  overlayLogo.style.cssText = "font-family:'Bebas Neue',sans-serif;font-size:clamp(32px,6vw,56px);letter-spacing:.12em;color:#f0ede6;opacity:0;transform:translateY(14px);transition:opacity 0.35s ease 0.15s,transform 0.35s ease 0.15s;";
  overlayLogo.innerHTML = 'ALEKSEY<span style="color:#ff2b1e">MEDIA</span>';

  const overlayBar = document.createElement('div');
  overlayBar.style.cssText = 'width:0;height:1px;background:#ff2b1e;transition:width 0.45s ease 0.2s;';

  const overlayLang = document.createElement('div');
  overlayLang.style.cssText = "font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:#ff2b1e;opacity:0;transform:translateY(8px);transition:opacity 0.35s ease 0.3s,transform 0.35s ease 0.3s;";
  overlayLang.textContent = langNames[lang] || lang.toUpperCase();

  overlay.appendChild(overlayLogo);
  overlay.appendChild(overlayBar);
  overlay.appendChild(overlayLang);
  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    setTimeout(() => {
      overlayLogo.style.opacity = '1';
      overlayLogo.style.transform = 'translateY(0)';
      overlayLang.style.opacity = '1';
      overlayLang.style.transform = 'translateY(0)';
      overlayBar.style.width = '100px';
    }, 50);

    setTimeout(() => {
      document.body.classList.remove('lang-en','lang-lv','lang-ru');
      document.body.classList.add('lang-' + lang);

      document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
      });

      const t = translations[lang] || translations.en;
      document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if(t[key]) el.textContent = t[key];
      });

      document.querySelectorAll('.hero-name .word').forEach(el => {
        el.style.animation = 'none';
        el.style.transform = 'translateY(110%)';
      });
      document.querySelectorAll('.hero-tag, .hero-bottom, .hero-ticker, .nav-logo-wrap, .nav-links').forEach(el => {
        el.style.animation = 'none';
        el.style.opacity = '0';
      });
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('on');
      });

      setTimeout(() => {
        overlay.style.opacity = '0';

        document.querySelectorAll('.hero-name .word').forEach(el => {
          el.style.animation = '';
          el.style.transform = '';
        });
        document.querySelectorAll('.hero-tag').forEach(el => {
          el.style.animation = 'popIn .7s cubic-bezier(.16,1,.3,1) .55s forwards';
        });
        document.querySelectorAll('.hero-bottom').forEach(el => {
          el.style.animation = 'popIn .7s cubic-bezier(.16,1,.3,1) 1.1s forwards';
        });
        document.querySelectorAll('.hero-ticker').forEach(el => {
          el.style.animation = 'popIn .8s cubic-bezier(.16,1,.3,1) .5s forwards';
        });
        document.querySelectorAll('.nav-logo-wrap').forEach(el => {
          el.style.animation = 'popIn .6s cubic-bezier(.16,1,.3,1) .1s forwards';
        });
        document.querySelectorAll('.nav-links').forEach(el => {
          el.style.animation = 'popIn .6s cubic-bezier(.16,1,.3,1) .25s forwards';
        });

        // Show LV/RU badge next to logo
        const badge = document.getElementById('lang-badge');
        if(badge){
          badge.classList.remove('show');
          setTimeout(() => {
            badge.textContent = lang !== 'en' ? lang.toUpperCase() : '';
            if(lang !== 'en') badge.classList.add('show');
          }, 200);
        }

        setTimeout(() => overlay.remove(), 400);
      }, 900);
    }, 900);
  });
}

setLang('en', true);
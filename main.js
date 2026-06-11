/* ═══════════════════════════════════════════════════════════
   EMT — main.js
   1. PCB trace-routing animation  (hero canvas)
   2. PCB spark animation          (About mini-canvas)
   3. Navbar / fade-in / counters / i18n / theme
   ═══════════════════════════════════════════════════════════ */

/* ─── TRANSLATIONS ───────────────────────────────────────────── */
const translations = {
  en: {
    'nav.about':'About','nav.services':'Services','nav.industries':'Industries',
    'nav.team':'Our People','nav.contact':'Contact','nav.whatsapp':'WhatsApp',
    'hero.sub':'Electronics Manufacturing Technologies LTD',
    'hero.line1':'Electronics','hero.line2':'Manufacturing',
    'hero.desc':'Assembly and integration solutions for electronic products at the highest level',
    'hero.cta1':'Our Services','hero.cta2':'Contact Us',
    'stat.years':'Years of Experience','stat.clients':'Happy Clients',
    'stat.industries':'Industries','stat.quality':'Product Quality',
    'about.label':'About the Company',
    'about.title':'Innovation and Precision in Every<br><span class="highlight">Electronic Component</span>',
    'about.lead':'<strong>EMT</strong> — Electronics Manufacturing Technologies LTD — is a leading company in manufacturing and soldering of electronic components, with over 20 years of industry experience.',
    'about.p1':'We specialize in PCB assembly, manual and automated soldering (SMT), and complete integration of electronic products from the first stage to the final product.',
    'about.p2':'Located in Park HiTech Yokneam, we provide fast, reliable and flexible service — from medical devices to the defense industry.',
    'services.label':'What We Offer',
    'services.title':'Professional <span class="highlight">Services</span>',
    's1.title':'SMT Assembly','s1.desc':'Automated surface mount assembly with high precision, including BGA, QFN and fine-pitch components',
    's2.title':'Manual Soldering','s2.desc':'Precise manual soldering for special components, repairs and prototypes by certified technicians',
    's3.title':'Assembly &amp; Integration','s3.desc':'Complete assembly of electronic products, including wiring, connections and integration into final enclosures',
    's4.title':'QA Testing','s4.desc':'Comprehensive testing including ICT, AOI, X-Ray and functional tests to ensure maximum quality',
    's5.title':'Custom Solutions','s5.desc':'Development and manufacture of custom electronic solutions, from prototype to serial production',
    's6.title':'Logistics &amp; Supply','s6.desc':'Supply chain management, component inventory and fast delivery times for projects of any scale',
    'industries.label':'Fields of Activity',
    'industries.title':'Industries <span class="highlight">We Serve</span>',
    'i1.title':'Telecommunications','i1.desc':'Communication equipment, routers, signal amplifiers and advanced broadcasting systems',
    'i2.title':'Medical Devices','i2.desc':'Diagnostic, monitoring and life-support devices to strict medical standards',
    'i3.title':'Defense Industry','i3.desc':'Electronic systems for defense applications in accordance with required regulations',
    'i4.title':'Computing Systems','i4.desc':'Server equipment, industrial computers and digital signal processors (DSP)',
    'i5.title':'Optical Equipment','i5.desc':'Vision instruments, laser systems, imaging equipment and photonic products',
    'i6.title':'Industrial Automation','i6.desc':'Industrial controllers, sensors and SCADA systems for manufacturing processes',
    'spot.label':'Recognition',
    'spot.title':'Employee <span class="highlight">Spotlight</span>',
    'spot.text':'Behind every perfect board there is a person who refuses to cut corners. Alex has been with EMT for years, bringing rare precision, quiet dedication and the kind of enthusiasm that raises the whole team\'s game. We are proud to have him on board.',
    'spot.name':'Alex',
    'spot.role':'Senior PCB Assembly Technician',
    'team.label':'Our People',
    'team.title':'The Heart of <span class="highlight">EMT</span>',
    'team.desc':'Great electronics starts with great people. Our team of engineers, technicians and specialists has been growing together for over two decades — sharing knowledge, celebrating achievements and constantly raising the bar. Inside EMT you will find not just colleagues, but people who genuinely care about the result.',
    'contact.label':"Let's Talk",'contact.title':'Get in <span class="highlight">Touch</span>',
    'cl.email':'Email','cl.address':'Address','cl.address.val':'HaMada 2, Park HiTech, Yokneam',
    'cl.whatsapp':'WhatsApp','cl.whatsapp.val':'Send a message now',
    'footer.copy':'© 2024 EMT Electronics Manufacturing Technologies LTD. All rights reserved.',
    'footer.about':'About','footer.services':'Services','footer.contact':'Contact',
  },
  ru: {
    'nav.about':'О нас','nav.services':'Услуги','nav.industries':'Отрасли',
    'nav.team':'Команда','nav.contact':'Контакты','nav.whatsapp':'WhatsApp',
    'hero.sub':'Electronics Manufacturing Technologies LTD',
    'hero.line1':'Электронное','hero.line2':'Производство',
    'hero.desc':'Решения по сборке и интеграции электронных продуктов на высочайшем уровне',
    'hero.cta1':'Наши услуги','hero.cta2':'Связаться',
    'stat.years':'Лет опыта','stat.clients':'Довольных клиентов',
    'stat.industries':'Отраслей','stat.quality':'Качество продукции',
    'about.label':'О компании',
    'about.title':'Инновации и точность в каждом<br><span class="highlight">электронном компоненте</span>',
    'about.lead':'<strong>EMT</strong> — Electronics Manufacturing Technologies LTD — ведущая компания в области производства и пайки электронных компонентов с более чем 20-летним опытом.',
    'about.p1':'Мы специализируемся на сборке PCB, ручной и автоматической пайке (SMT), а также полной интеграции электронных изделий от первого этапа до готового продукта.',
    'about.p2':'Расположенные в Park HiTech Yokneam, мы предоставляем быстрое и надёжное обслуживание — от медицинских приборов до оборонной промышленности.',
    'services.label':'Что мы предлагаем',
    'services.title':'Профессиональные <span class="highlight">услуги</span>',
    's1.title':'SMT монтаж','s1.desc':'Автоматизированный монтаж поверхностных компонентов с высокой точностью, включая BGA, QFN и мелкошаговые компоненты',
    's2.title':'Ручная пайка','s2.desc':'Точная ручная пайка специальных компонентов, ремонт и прототипы сертифицированными техниками',
    's3.title':'Сборка и интеграция','s3.desc':'Полная сборка электронных изделий, включая проводку, соединения и интеграцию в конечный корпус',
    's4.title':'Тестирование QA','s4.desc':'Комплексное тестирование: ICT, AOI, рентгеновский контроль и функциональные тесты',
    's5.title':'Индивидуальные решения','s5.desc':'Разработка и производство кастомных электронных решений — от прототипа до серийного производства',
    's6.title':'Логистика и поставки','s6.desc':'Управление цепочкой поставок, склад компонентов и быстрые сроки доставки',
    'industries.label':'Сферы деятельности',
    'industries.title':'Отрасли, которые мы <span class="highlight">обслуживаем</span>',
    'i1.title':'Телекоммуникации','i1.desc':'Коммуникационное оборудование, маршрутизаторы, усилители сигнала и системы вещания',
    'i2.title':'Медицинские приборы','i2.desc':'Диагностика, мониторинг и системы жизнеобеспечения по строгим медицинским стандартам',
    'i3.title':'Оборонная промышленность','i3.desc':'Электронные системы для оборонного применения согласно требованиям классификации',
    'i4.title':'Вычислительные системы','i4.desc':'Серверное оборудование, промышленные компьютеры и цифровые сигнальные процессоры (DSP)',
    'i5.title':'Оптическое оборудование','i5.desc':'Оптические приборы, лазерные системы, оборудование для визуализации',
    'i6.title':'Промышленная автоматизация','i6.desc':'Промышленные контроллеры, датчики и системы SCADA для производственных процессов',
    'spot.label':'Признание',
    'spot.title':'Лучший <span class="highlight">сотрудник</span>',
    'spot.text':'За каждой безупречной платой стоит человек, который не идёт на компромисс с качеством. Лёха работает в EMT уже много лет — приносит редкую точность, преданность делу и энтузиазм, который поднимает уровень всей команды. Мы гордимся, что он с нами.',
    'spot.name':'Лёха',
    'spot.role':'Старший техник по сборке плат',
    'team.label':'Наша команда',
    'team.title':'Сердце <span class="highlight">EMT</span>',
    'team.desc':'Качественная электроника начинается с людей. Наша команда инженеров, технологов и специалистов растёт вместе уже более двадцати лет — делится опытом, отмечает успехи и постоянно движется вперёд. В EMT вы найдёте не просто коллег, а людей, которым важен результат и которые вкладывают душу в каждый проект.',
    'contact.label':'Свяжитесь с нами','contact.title':'Напишите <span class="highlight">нам</span>',
    'cl.email':'Email','cl.address':'Адрес','cl.address.val':'HaMada 2, Park HiTech, Yokneam',
    'cl.whatsapp':'WhatsApp','cl.whatsapp.val':'Написать сейчас',
    'footer.copy':'© 2024 EMT Electronics Manufacturing Technologies LTD. Все права защищены.',
    'footer.about':'О нас','footer.services':'Услуги','footer.contact':'Контакты',
  },
  he: {
    'nav.about':'אודות','nav.services':'שירותים','nav.industries':'תעשיות',
    'nav.team':'הצוות','nav.contact':'צור קשר','nav.whatsapp':'WhatsApp',
    'hero.sub':'Electronics Manufacturing Technologies LTD',
    'hero.line1':'ייצור','hero.line2':'אלקטרוניקה',
    'hero.desc':'פתרונות הרכבה ואינטגרציה למוצרי אלקטרוניקה ברמה הגבוהה ביותר',
    'hero.cta1':'השירותים שלנו','hero.cta2':'צרו קשר',
    'stat.years':'שנות ניסיון','stat.clients':'לקוחות מרוצים',
    'stat.industries':'תחומי פעילות','stat.quality':'איכות מוצר',
    'about.label':'אודות החברה',
    'about.title':'חדשנות ודיוק בכל<br><span class="highlight">רכיב אלקטרוני</span>',
    'about.lead':'<strong>EMT</strong> — Electronics Manufacturing Technologies LTD — חברה מובילה בתחום ייצור ולחמה של רכיבים אלקטרוניים, עם ניסיון של למעלה מ-20 שנה.',
    'about.p1':'אנו מתמחים בהרכבת מעגלים מודפסים, לחמה ידנית ואוטומטית (SMT), ואינטגרציה מלאה של מוצרים אלקטרוניים משלב ראשון ועד מוצר מוגמר.',
    'about.p2':'ממוקמים בפארק הייטק יוקנעם, אנו מספקים שירות מהיר, אמין וגמיש — ממכשירים רפואיים ועד התעשייה הביטחונית.',
    'services.label':'מה אנחנו מציעים',
    'services.title':'שירותים <span class="highlight">מקצועיים</span>',
    's1.title':'הרכבת SMT','s1.desc':'הרכבה אוטומטית של רכיבי SMT בדיוק גבוה, כולל BGA, QFN ורכיבי pitch עדין',
    's2.title':'לחמה ידנית','s2.desc':'לחמה ידנית מדויקת לרכיבים מיוחדים, תיקונים ואבות-טיפוס על ידי טכנאים מוסמכים',
    's3.title':'הרכבה ואינטגרציה','s3.desc':'הרכבה מלאה של מוצרים אלקטרוניים, כולל חיווט, חיבורים ואינטגרציה למארז הסופי',
    's4.title':'בדיקות QA','s4.desc':'בדיקות מקיפות הכוללות ICT, AOI, רנטגן ובדיקות פונקציונליות להבטחת איכות מרבית',
    's5.title':'פתרונות מותאמים','s5.desc':'פיתוח וייצור פתרונות אלקטרוניים מותאמים אישית, מאב-טיפוס לייצור סדרתי',
    's6.title':'לוגיסטיקה ואספקה','s6.desc':'ניהול שרשרת אספקה, מלאי רכיבים וזמני אספקה מהירים לפרויקטים בכל היקף',
    'industries.label':'תחומי פעילות',
    'industries.title':'תעשיות בהן אנו <span class="highlight">פועלים</span>',
    'i1.title':'תקשורת','i1.desc':'ציוד תקשורת, ראוטרים, מגברי אות ומערכות שידור מתקדמות',
    'i2.title':'מכשור רפואי','i2.desc':'מכשירי אבחון, ניטור ותמיכת חיים בהתאם לתקנים רפואיים מחמירים',
    'i3.title':'תעשייה ביטחונית','i3.desc':'מערכות אלקטרוניות ליישומי ביטחון בהתאם לתקנות הנדרשות',
    'i4.title':'מערכות מחשוב','i4.desc':'ציוד שרתים, מחשבים תעשייתיים ומעבדי אות דיגיטלי (DSP)',
    'i5.title':'ציוד אופטי','i5.desc':'מכשירים אופטיים, מערכות לייזר, ציוד הדמיה ומוצרים פוטוניים',
    'i6.title':'אוטומציה תעשייתית','i6.desc':'בקרים תעשייתיים, חיישנים ומערכות SCADA לתהליכי ייצור',
    'spot.label':'הוקרה',
    'spot.title':'עובד <span class="highlight">מצטיין</span>',
    'spot.text':'מאחורי כל לוח מושלם עומד אדם שלא מתפשר על איכות. אלכס עובד ב-EMT שנים רבות — מביא דיוק נדיר, מסירות שקטה והתלהבות שמרימה את כל הצוות. אנחנו גאים שהוא איתנו.',
    'spot.name':'אלכס',
    'spot.role':'טכנאי בכיר להרכבת מעגלים',
    'team.label':'הצוות שלנו',
    'team.title':'הלב של <span class="highlight">EMT</span>',
    'team.desc':'אלקטרוניקה מעולה מתחילה באנשים מעולים. צוות המהנדסים, הטכנאים והמומחים שלנו גדל יחד במשך למעלה מעשרים שנה — משתף ידע, חוגג הישגים ומעלה את הרף ללא הרף. ב-EMT תמצאו לא רק עמיתים לעבודה, אלא אנשים שאכפת להם מהתוצאה.',
    'contact.label':'בואו נדבר','contact.title':'צרו <span class="highlight">קשר</span>',
    'cl.email':'אימייל','cl.address':'כתובת','cl.address.val':'המדע 2, פארק הייטק, יוקנעם',
    'cl.whatsapp':'WhatsApp','cl.whatsapp.val':'שלחו הודעה עכשיו',
    'footer.copy':'© 2024 EMT Electronics Manufacturing Technologies LTD. כל הזכויות שמורות.',
    'footer.about':'אודות','footer.services':'שירותים','footer.contact':'צור קשר',
  },
};

/* ─── I18N ────────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('emt-lang') || 'en';
const langCycle = ['en', 'ru', 'he'];


function reorderFooter(rtl) {
  const inner  = document.querySelector('.footer-inner');
  if (!inner) return;
  const logo   = inner.querySelector('.footer-logo');
  const copy   = inner.querySelector('.footer-copy');
  const flinks = inner.querySelector('.footer-links');
  if (rtl) {
    /* Target: [Links] [Copy] [Logo] — logo on the far RIGHT */
    inner.appendChild(copy);
    inner.appendChild(logo);
    flinks.style.flexDirection = 'row-reverse';
  } else {
    /* Restore: [Logo] [Copy] [Links] */
    inner.prepend(copy);
    inner.prepend(logo);
    flinks.style.flexDirection = '';
  }
}

function applyLang(lang) {
  currentLang = lang; localStorage.setItem('emt-lang', lang);
  const d = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = d[el.getAttribute('data-i18n')]; if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('.lang-opt').forEach(el =>
    el.classList.toggle('active', el.classList.contains('lang-' + lang)));
  document.documentElement.lang = lang;
  const rtl = lang === 'he';
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  reorderFooter(rtl);
}
document.querySelectorAll('.lang-opt').forEach(el => {
  el.addEventListener('click', () => {
    const lang = ['en','ru','he'].find(l => el.classList.contains('lang-' + l));
    if (lang) applyLang(lang);
  });
});

/* ─── THEME ───────────────────────────────────────────────────── */
let currentTheme = localStorage.getItem('emt-theme') || 'dark';
function applyTheme(t) {
  currentTheme = t; localStorage.setItem('emt-theme', t);
  document.documentElement.setAttribute('data-theme', t);
}
document.getElementById('theme-toggle').addEventListener('click', () =>
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));
applyTheme(currentTheme);
applyLang(currentLang);

/* ─── HAMBURGER MENU ──────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobile-nav');

function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));

document.addEventListener('click', (e) => {
  if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) closeMobileNav();
});

/* ─── UTILS ──────────────────────────────────────────────────── */
const rand = (a, b) => Math.random() * (b - a) + a;

/* ═══════════════════════════════════════════════════════════════
   PCB TRACE-ROUTING ANIMATION
   Маршруты рисуются в реальном времени:
   • курсор тянет линию по сетке (L-образные трассы)
   • в узлах появляются контактные площадки (pads)
   • в изломах — via-переходы (кольца)
   • крупные IC-чипы с ножками в ключевых точках
   • фаза: draw → dwell → fade → restart
   ═══════════════════════════════════════════════════════════════ */
function buildPCBTrace(canvas) {
  const ctx  = canvas.getContext('2d');

  /* palette dark (mix-blend-mode:screen) */
  const TRACE1 = '#00c864';
  const TRACE2 = '#00a8d4';
  const PAD    = '#00ff88';
  const VIA    = '#40e0ff';
  const HEAD   = '#ffffff';
  const POWER  = '#ffcc00';

  /* palette light (mix-blend-mode:normal на светлом фоне) */
  const L_TRACE1 = '#007a3c';
  const L_TRACE2 = '#005fa3';
  const L_PAD    = '#006b35';
  const L_VIA    = '#0077aa';
  const L_HEAD   = '#1a2e60';
  const L_POWER  = '#a06200';

  const isLight = () => document.documentElement.dataset.theme === 'light';

  /* маппинг тёмной палитры → светлой */
  function mc(col) {
    if (!isLight()) return col;
    const map = { [TRACE1]: L_TRACE1, [TRACE2]: L_TRACE2, [PAD]: L_PAD,
                  [VIA]: L_VIA, [HEAD]: L_HEAD, [POWER]: L_POWER };
    return map[col] || col;
  }

  const GRID   = 32;   /* шаг сетки, px */
  const ROUTE_COUNT = 55;

  let W, H, routes, phase, dwellT, fadeAlpha;

  /* ── геометрия маршрута ── */
  function makeRoute(a, b, delay) {
    /* L-излом: сначала по X, затем по Y (или наоборот) */
    const horiz = Math.random() > 0.5;
    const corner = horiz ? { x: b.x, y: a.y } : { x: a.x, y: b.y };
    const d0 = Math.hypot(corner.x - a.x, corner.y - a.y);
    const d1 = Math.hypot(b.x - corner.x, b.y - corner.y);
    const total = d0 + d1;
    if (total < GRID * 1.5) return null;  /* слишком короткая — пропускаем */

    const isPower = Math.random() < 0.06;
    return {
      a, corner, b,
      d0, total,
      prog:  0,
      spd:   rand(1.8, 5.5),
      delay,
      col:   isPower ? POWER : (Math.random() > 0.68 ? TRACE2 : TRACE1),
      width: isPower ? 1.6 : (Math.random() > 0.75 ? 1.0 : 0.7),
      done:  false,
    };
  }

  /* точка на маршруте при заданном прогрессе */
  function headAt(r, prog) {
    if (prog <= r.d0) {
      const t = prog / (r.d0 || 1);
      return { x: r.a.x + (r.corner.x - r.a.x) * t, y: r.a.y + (r.corner.y - r.a.y) * t };
    }
    const t = (prog - r.d0) / ((r.total - r.d0) || 1);
    return { x: r.corner.x + (r.b.x - r.corner.x) * t, y: r.corner.y + (r.b.y - r.corner.y) * t };
  }

  /* ── построение сцены ── */
  function buildScene() {
    const cols = Math.floor(W / GRID);
    const rows = Math.floor(H / GRID);

    /* все точки сетки */
    const pts = [];
    for (let r = 1; r < rows; r++)
      for (let c = 1; c < cols; c++)
        pts.push({ x: c * GRID, y: r * GRID });

    routes = [];
    let delay = 0;
    let attempts = 0;
    while (routes.length < ROUTE_COUNT && attempts < ROUTE_COUNT * 4) {
      attempts++;
      const a = pts[Math.floor(Math.random() * pts.length)];
      const b = pts[Math.floor(Math.random() * pts.length)];
      if (a === b) continue;
      if (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) > GRID * 14) continue;
      const r = makeRoute(a, b, delay);
      if (!r) continue;
      routes.push(r);
      delay += Math.floor(rand(0, 18));   /* стаггер старта */
    }

    /* IC-чипы: прямоугольники с ножками в случайных точках сетки */
    const chips = [];
    const chipCount = Math.min(4, Math.floor(W * H / 200000));
    for (let i = 0; i < chipCount; i++) {
      const cx = (Math.floor(rand(3, cols - 6))) * GRID;
      const cy = (Math.floor(rand(3, rows - 4))) * GRID;
      const w  = (Math.floor(rand(3, 6))) * GRID;
      const h  = (Math.floor(rand(2, 4))) * GRID;
      chips.push({ x: cx, y: cy, w, h });
    }
    return chips;
  }

  let chips = [];

  function restart() {
    chips    = buildScene();
    phase    = 'draw';
    dwellT   = 0;
    fadeAlpha = 1;
  }

  /* ── рисуем один маршрут ── */
  function drawRoute(r, alpha) {
    const prog  = r.prog;
    const lt    = isLight();
    const col   = mc(r.col);
    ctx.globalAlpha = alpha;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.lineWidth   = r.width * (lt ? 1.15 : 1);
    ctx.strokeStyle = col;
    ctx.shadowColor = col;
    ctx.shadowBlur  = lt ? 0 : (r.width > 2 ? 6 : 3);

    ctx.beginPath();
    ctx.moveTo(r.a.x, r.a.y);
    if (prog <= r.d0) {
      const pt = headAt(r, prog);
      ctx.lineTo(pt.x, pt.y);
    } else {
      ctx.lineTo(r.corner.x, r.corner.y);
      const pt = headAt(r, prog);
      ctx.lineTo(pt.x, pt.y);
    }
    ctx.stroke();

    ctx.shadowBlur = 0;

    /* pad на старте */
    drawPad(r.a.x, r.a.y, 4, mc(PAD), alpha);

    if (r.done) {
      /* pad на финише */
      drawPad(r.b.x, r.b.y, 4, mc(PAD), alpha);
      /* via в изломе */
      if (r.d0 > 1 && r.total - r.d0 > 1)
        drawVia(r.corner.x, r.corner.y, alpha);
    }

    /* курсор-голова */
    if (!r.done) {
      const pt  = headAt(r, prog);
      const hcol = mc(HEAD);
      ctx.globalAlpha = alpha;
      ctx.shadowColor = lt ? col : HEAD;
      ctx.shadowBlur  = lt ? 8 : 14;
      ctx.fillStyle   = hcol;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, lt ? 4 : 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      /* ореол вокруг головы */
      ctx.globalAlpha = alpha * (lt ? 0.18 : 0.25);
      ctx.fillStyle   = col;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 9, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }

  function drawPad(x, y, r, col, alpha) {
    const lt = isLight();
    ctx.globalAlpha = alpha;
    ctx.shadowColor = col;
    ctx.shadowBlur  = lt ? 0 : 8;
    ctx.fillStyle   = col;
    ctx.beginPath();
    ctx.arc(x, y, lt ? r * 1.3 : r, 0, Math.PI * 2);
    ctx.fill();

    /* кольцо: золотое в тёмной теме, медное в светлой */
    ctx.globalAlpha = alpha * (lt ? 0.9 : 0.6);
    ctx.strokeStyle = lt ? '#8b4513' : '#ffd700';
    ctx.lineWidth   = lt ? 1.0 : 0.8;
    ctx.shadowBlur  = 0;
    ctx.beginPath();
    ctx.arc(x, y, (lt ? r * 1.3 : r) + 2, 0, Math.PI * 2);
    ctx.stroke();

    ctx.shadowBlur = 0; ctx.globalAlpha = 1;
  }

  function drawVia(x, y, alpha) {
    const vCol = mc(VIA);
    const lt   = isLight();
    ctx.globalAlpha = alpha;
    ctx.shadowColor = vCol;
    ctx.shadowBlur  = lt ? 0 : 10;
    ctx.strokeStyle = vCol;
    ctx.lineWidth   = lt ? 1.2 : 1.0;
    ctx.beginPath(); ctx.arc(x, y, lt ? 4 : 3.5, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = lt ? 'rgba(0,100,180,0.15)' : 'rgba(0,180,255,0.18)';
    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0; ctx.globalAlpha = 1;
  }

  /* IC-чип */
  function drawChip(ch, alpha) {
    const lt    = isLight();
    const cCol  = lt ? '#006633' : '#00ff88';
    ctx.globalAlpha = alpha * (lt ? 0.65 : 0.55);
    ctx.strokeStyle = cCol;
    ctx.lineWidth   = lt ? 1.1 : 0.9;
    ctx.shadowColor = cCol;
    ctx.shadowBlur  = lt ? 0 : 6;
    ctx.strokeRect(ch.x, ch.y, ch.w, ch.h);

    const pinStep = GRID;
    ctx.lineWidth = lt ? 0.9 : 0.7;
    ctx.shadowBlur = 0;
    for (let px = ch.x + pinStep / 2; px < ch.x + ch.w; px += pinStep) {
      ctx.beginPath(); ctx.moveTo(px, ch.y);        ctx.lineTo(px, ch.y - 8);        ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px, ch.y + ch.h); ctx.lineTo(px, ch.y + ch.h + 8); ctx.stroke();
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
  }

  /* ── главный цикл ── */
  function draw() {
    ctx.clearRect(0, 0, W, H);   /* прозрачный фон → видна фоновая картинка */

    let allDone = true;

    for (const r of routes) {
      if (r.delay > 0) { r.delay--; allDone = false; continue; }
      if (!r.done) {
        allDone = false;
        r.prog += r.spd;
        if (r.prog >= r.total) { r.prog = r.total; r.done = true; }
      }
      drawRoute(r, phase === 'fade' ? fadeAlpha : 1);
    }

    /* IC-чипы появляются вместе с трассами */
    chips.forEach(ch => drawChip(ch, phase === 'fade' ? fadeAlpha : 0.7));

    /* ── FSM фаз ── */
    if (phase === 'draw' && allDone) {
      phase  = 'dwell';
      dwellT = 160;   /* ~2.7 сек при 60fps */
    }
    if (phase === 'dwell') {
      if (--dwellT <= 0) { phase = 'fade'; fadeAlpha = 1; }
    }
    if (phase === 'fade') {
      fadeAlpha -= 0.016;
      if (fadeAlpha <= 0) restart();
    }
  }

  let raf;
  const loop = () => { draw(); raf = requestAnimationFrame(loop); };
  const ro   = new ResizeObserver(() => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; restart(); });
  ro.observe(canvas);
  W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight;
  restart(); loop();
  return () => { cancelAnimationFrame(raf); ro.disconnect(); };
}

/* ═══════════════════════════════════════════════════════════════
   PCB SPARK  (About mini-canvas — без изменений)
   ═══════════════════════════════════════════════════════════════ */
function buildCircuitBoard(canvas, opts) {
  const { nodeCount=30,edgeColor='rgba(0,207,255,.20)',padColor='rgba(0,255,136,.55)',
          sparkColor1='#00ff88',sparkColor2='#00cfff',bgColor='rgba(6,13,26,.30)',clearBg=false } = opts||{};
  const ctx=canvas.getContext('2d'); let W,H,nodes,edges,sparks;
  function resize(){W=canvas.width=canvas.offsetWidth;H=canvas.height=canvas.offsetHeight;init();}
  function init(){
    const cols=Math.ceil(Math.sqrt(nodeCount*(W/H))),rows=Math.ceil(nodeCount/cols);
    const cw=W/cols,ch=H/rows; nodes=[];
    for(let r=0;r<rows;r++) for(let c=0;c<cols;c++)
      nodes.push({x:cw*c+rand(cw*.15,cw*.85),y:ch*r+rand(ch*.15,ch*.85)});
    edges=[]; const maxD=Math.max(cw,ch)*2.4;
    for(let i=0;i<nodes.length;i++){
      let conn=0;
      const s=nodes.map((n,j)=>({j,d:Math.hypot(n.x-nodes[i].x,n.y-nodes[i].y)}))
        .filter(({j,d})=>j!==i&&d<maxD&&d>10).sort((a,b)=>a.d-b.d);
      for(const {j} of s){
        if(conn>=3)break;
        if(edges.some(e=>(e.a===i&&e.b===j)||(e.a===j&&e.b===i)))continue;
        const A=nodes[i],B=nodes[j],cx=Math.random()>.5?B.x:A.x;
        edges.push({a:i,b:j,cornerX:cx,cornerY:cx===B.x?A.y:B.y}); conn++;
      }
    }
    sparks=edges.map(e=>({e,pos:rand(0,1),speed:rand(.0015,.005),color:Math.random()>.5?sparkColor1:sparkColor2}));
  }
  function eP(e){const A=nodes[e.a];return[{x:A.x,y:A.y},{x:e.cornerX,y:e.cornerY},{x:nodes[e.b].x,y:nodes[e.b].y}];}
  function ptOn(e,t){const p=eP(e),d0=Math.hypot(p[1].x-p[0].x,p[1].y-p[0].y),d1=Math.hypot(p[2].x-p[1].x,p[2].y-p[1].y),tot=d0+d1;if(!tot)return p[0];const dist=t*tot;if(dist<=d0){const r=dist/(d0||1);return{x:p[0].x+(p[1].x-p[0].x)*r,y:p[0].y+(p[1].y-p[0].y)*r};}const r=(dist-d0)/(d1||1);return{x:p[1].x+(p[2].x-p[1].x)*r,y:p[1].y+(p[2].y-p[1].y)*r};}
  function draw(){
    if(clearBg) ctx.clearRect(0,0,W,H); else { ctx.fillStyle=bgColor;ctx.fillRect(0,0,W,H); }
    ctx.strokeStyle=edgeColor;ctx.lineWidth=1;
    for(const e of edges){const p=eP(e);ctx.beginPath();ctx.moveTo(p[0].x,p[0].y);ctx.lineTo(p[1].x,p[1].y);ctx.lineTo(p[2].x,p[2].y);ctx.stroke();}
    ctx.fillStyle=padColor;for(const n of nodes){ctx.beginPath();ctx.arc(n.x,n.y,3,0,Math.PI*2);ctx.fill();}
    for(const s of sparks){
      const pt=ptOn(s.e,s.pos),tr=ptOn(s.e,Math.max(0,s.pos-.06)),mid=ptOn(s.e,(s.pos+Math.max(0,s.pos-.06))/2);
      const g=ctx.createLinearGradient(tr.x,tr.y,pt.x,pt.y);g.addColorStop(0,'transparent');g.addColorStop(1,s.color);
      ctx.strokeStyle=g;ctx.lineWidth=1.8;ctx.shadowColor=s.color;ctx.shadowBlur=10;
      ctx.beginPath();ctx.moveTo(tr.x,tr.y);ctx.lineTo(mid.x,mid.y);ctx.lineTo(pt.x,pt.y);ctx.stroke();
      ctx.shadowBlur=18;ctx.fillStyle=s.color;ctx.beginPath();ctx.arc(pt.x,pt.y,2.2,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
      s.pos+=s.speed;if(s.pos>1){s.pos=0;s.speed=rand(.0015,.005);s.color=Math.random()>.5?sparkColor1:sparkColor2;}
    }
  }
  let raf; const loop=()=>{draw();raf=requestAnimationFrame(loop);};
  const ro=new ResizeObserver(resize); ro.observe(canvas); resize(); loop();
  return()=>{cancelAnimationFrame(raf);ro.disconnect();};
}

/* ─── START ──────────────────────────────────────────────────── */
buildPCBTrace(document.getElementById('circuit-canvas'));
const mini = document.getElementById('mini-canvas');
if (mini) buildCircuitBoard(mini);

buildCircuitBoard(document.getElementById('bg-canvas'), {
  nodeCount: 55,
  edgeColor: 'rgba(0,207,255,.07)',
  padColor: 'rgba(0,255,136,.20)',
  sparkColor1: '#00ff88',
  sparkColor2: '#00cfff',
  clearBg: true
});

/* ─── NAVBAR ─────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () =>
  navbar.classList.toggle('scrolled', window.scrollY > 40), { passive: true });

/* ─── FADE-IN ────────────────────────────────────────────────── */
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const siblings = [...en.target.parentElement.querySelectorAll('.fade-in')];
    en.target.style.transitionDelay = `${siblings.indexOf(en.target) * 80}ms`;
    en.target.classList.add('visible');
    fadeObs.unobserve(en.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => fadeObs.observe(el));

/* ─── COUNTERS ───────────────────────────────────────────────── */
function animCount(el, target, dur) {
  const t0 = performance.now();
  const tick = now => {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.floor((1 - Math.pow(1-p,3)) * target);
    p < 1 ? requestAnimationFrame(tick) : (el.textContent = target);
  };
  requestAnimationFrame(tick);
}
let statsOk = false;
const statsEl = document.querySelector('.stats-bar');
if (statsEl) new IntersectionObserver(en => {
  if (en[0].isIntersecting && !statsOk) {
    statsOk = true;
    document.querySelectorAll('.stat-num[data-target]').forEach(el =>
      animCount(el, parseInt(el.dataset.target, 10), 1600));
  }
}, { threshold: 0.4 }).observe(statsEl);

/* ─── LIGHTBOX ───────────────────────────────────────────────── */
(function () {
  const photos  = [...document.querySelectorAll('.tg-item img')];
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lb-img');
  const lbCtr   = document.getElementById('lb-counter');
  const lbClose = document.getElementById('lb-close');
  const lbPrev  = document.getElementById('lb-prev');
  const lbNext  = document.getElementById('lb-next');
  let current   = 0;

  function setPhoto(idx) {
    current = (idx + photos.length) % photos.length;
    lbImg.style.opacity = '0';
    lbImg.onload = () => { lbImg.style.opacity = '1'; };
    lbImg.src = photos[current].src;
    lbImg.alt = photos[current].alt || '';
    lbCtr.textContent = (current + 1) + ' / ' + photos.length;
    /* if already cached, onload may not fire — force opacity */
    if (lbImg.complete) lbImg.style.opacity = '1';
  }

  function open(idx) {
    setPhoto(idx);
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function close() {
    lb.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* open on click */
  photos.forEach((img, i) =>
    img.closest('.tg-item').addEventListener('click', () => open(i)));

  /* controls */
  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => setPhoto(current - 1));
  lbNext.addEventListener('click', () => setPhoto(current + 1));

  /* click on dark backdrop = close */
  lb.addEventListener('click', e => { if (e.target === lb) close(); });

  /* keyboard */
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); setPhoto(current - 1); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  { e.preventDefault(); setPhoto(current + 1); }
    if (e.key === 'Escape') close();
  });
})();

/* ─── SMOOTH SCROLL ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return; e.preventDefault();
    t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

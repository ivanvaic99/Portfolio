const projects=[
 {title:'Weather App',desc:'Prognoza sa Open‑Meteo API‑jem (bez ključa)',img:'assets/weather.jpg',demo:'./projects/weather/',repo:'#'},
 {title:'BMI Kalkulator',desc:'Izračun BMI sa kategorizacijom',img:'assets/bmi.jpg',demo:'./projects/bmi/',repo:'#'},
 {title:'Notes / Blog Mini',desc:'Lokalne beleške (localStorage)',img:'assets/notes.jpg',demo:'./projects/notes/',repo:'#'},
 {title:'Pomodoro Timer',desc:'Fokus tehnika 25/5, clean UI',img:'assets/pomodoro.jpg',demo:'./projects/pomodoro/',repo:'#'},
 {title:'Password Generator',desc:'Jaki lozinke, više setova',img:'assets/password.jpg',demo:'./projects/password/',repo:'#'},
 {title:'Gradient Generator',desc:'Kreiraj CSS linear‑gradient',img:'assets/gradient.jpg',demo:'./projects/gradient/',repo:'#'},
 {title:'Galerija',desc:'CSS Grid galerija sa captionima',img:'assets/gallery.jpg',demo:'./projects/gallery/',repo:'#'},
 {title:'Portfolio V1',desc:'Prva verzija portfolija (eksterni link)',img:'assets/project-images/portfolio.jpg',demo:'https://ivanvaic99.github.io/Portfolio/',repo:'https://github.com/ivanvaic99/Portfolio'}
];

const projects=[
 {title:'Weather App',desc:'Prognoza sa Open‑Meteo API‑jem (bez ključa)',img:'assets/weather.jpg',demo:'./projects/weather/',repo:'#'},
 {title:'BMI Kalkulator',desc:'Izračun BMI sa kategorizacijom',img:'assets/bmi.jpg',demo:'./projects/bmi/',repo:'#'},
 {title:'Notes / Blog Mini',desc:'Lokalne beleške (localStorage)',img:'assets/notes.jpg',demo:'./projects/notes/',repo:'#'},
 {title:'Portfolio V1',desc:'Prva verzija portfolija (eksterni link)',img:'assets/project-images/portfolio.jpg',demo:'https://ivanvaic99.github.io/Portfolio/',repo:'https://github.com/ivanvaic99/Portfolio'}
];

// Render projects only where grid exists
(function(){
  const grid=document.getElementById('projectsGrid');
  if(!grid) return;
  grid.innerHTML=projects.map((p)=>`
    <article class="card reveal">
      <div class="thumb" data-img="${p.img}"></div>
      <div class="body">
        <div class="meta">Frontend • Vanilla JS</div>
        <h3 style="margin:0 0 6px">${p.title}</h3>
        <p style="margin:0 0 10px;color:#6b7280">${p.desc}</p>
        <div class="links">
          <a class="btn primary" href="${p.demo}" target="_blank" rel="noopener">Demo</a>
          ${p.repo && p.repo!=='#' ? `<a class="btn" href="${p.repo}" target="_blank" rel="noopener">Repo</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
})();

// IntersectionObserver for reveal-on-scroll
const io = new IntersectionObserver((entries)=>{
  for(const e of entries){
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

// Header shadow/background on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', ()=>{
  if(!header) return;
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Progress bars animate when visible (on pages that have .skill)
const pb = new IntersectionObserver((entries)=>{
  for(const e of entries){
    if(e.isIntersecting){
      const bar = e.target;
      const pct = bar.dataset.percent || '0';
      bar.querySelector('.fill').style.width = pct + '%';
      pb.unobserve(bar);
    }
  }
}, {threshold: 0.5});
document.querySelectorAll('.bar[data-percent]').forEach(el=> pb.observe(el));

// Year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();


// ===== v6 Analytics (disabled by default) =====
const ENABLE_GA4 = false; // set to true and put your ID
const GA4_ID = "G-XXXXXXXXXX";
const ENABLE_POSTHOG = false; // set to true and put your key
const POSTHOG_KEY = "phc_xxxxxxxxxxxxxxxxxxxxx";
const POSTHOG_HOST = "https://eu.posthog.com";

(function initAnalytics(){
  if(ENABLE_GA4){
    const s=document.createElement('script'); s.src=`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`; s.async=true; document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[]; function gtag(){dataLayer.push(arguments);} window.gtag=gtag;
    gtag('js', new Date()); gtag('config', GA4_ID);
  }
  if(ENABLE_POSTHOG){
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){
      function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",
      p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;void 0!==a?u=e[a]=[]:a="posthog";
      u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"};
      o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags group identify_group set_group".split(" ");
      for(n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init(POSTHOG_KEY,{api_host:POSTHOG_HOST,capture_pageview:true});
  }
})();

// ===== v6 Contact form (mailto with validation and UX) =====
window.sendMailto = function(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const status = document.getElementById('cfStatus');

  if(!name || !email || !message){
    status.textContent = "Popunite sva polja.";
    status.style.color = "#dc2626";
    return false;
  }
  const subject = encodeURIComponent(`Upit sa sajta — ${name}`);
  const body = encodeURIComponent(`Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`);
  window.location.href = `mailto:ivan.vaic22@gmail.com?subject=${subject}&body=${body}`;
  status.textContent = "Otvaram email klijent…";
  status.style.color = "#16a34a";
  return false;
};


// Parallax hover for cards
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const rect = card.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const rx = ((cy / rect.height) - 0.5) * -4; // rotation X
    const ry = ((cx / rect.width) - 0.5) * 4;   // rotation Y
    card.style.transform = `translateY(-4px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', ()=>{
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
  });
});

// Dark/Light theme toggle with localStorage
(function(){
  const key='theme_pref_v1';
  const root=document.documentElement;
  function apply(t){
    if(t==='light'){ root.classList.add('light'); }
    else{ root.classList.remove('light'); }
  }
  let pref = localStorage.getItem(key) || 'dark';
  apply(pref);

  // create toggle button in header actions if present
  const actions = document.querySelector('.actions');
  if(actions){
    const btn = document.createElement('button');
    btn.className='btn';
    btn.type='button';
    btn.textContent = pref==='light' ? 'Dark' : 'Light';
    btn.style.minWidth='80px';
    btn.onclick=()=>{
      pref = (pref==='light') ? 'dark' : 'light';
      localStorage.setItem(key, pref);
      apply(pref);
      btn.textContent = pref==='light' ? 'Dark' : 'Light';
    };
    actions.prepend(btn);
  }
})();


// Lazy-load project thumbnails: set background-image when visible
const thumbObserver = new IntersectionObserver((entries)=>{
  for(const e of entries){
    if(e.isIntersecting){
      const el = e.target;
      const src = el.getAttribute('data-img');
      if(src){ el.style.backgroundImage = `url('${src}')`; el.removeAttribute('data-img'); }
      thumbObserver.unobserve(el);
    }
  }
}, {threshold: 0.1});
document.querySelectorAll('.thumb[data-img]').forEach(el=> thumbObserver.observe(el));

// Hero parallax (mouse + scroll)
(function(){
  const art = document.querySelector('.hero-art');
  if(!art) return;
  let ry=0, rx=0;
  function onMove(e){
    const rect = art.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    rx = ((cy / rect.height) - 0.5) * -6;
    ry = ((cx / rect.width) - 0.5) * 6;
    apply();
  }
  function onScroll(){
    const offset = window.scrollY * 0.05;
    art.style.transform = `translateY(${ -offset }px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  function apply(){
    const offset = window.scrollY * 0.05;
    art.style.transform = `translateY(${ -offset }px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  art.addEventListener('mousemove', onMove);
  window.addEventListener('scroll', onScroll, {passive:true});
  apply();
})();

// Projekti – svi thumbovi iz assets/
const projects=[
 {title:'Weather App',desc:'Prognoza sa Open-Meteo (bez ključa)',img:'assets/weather.jpg',demo:'./projects/weather/',repo:'#'},
 {title:'BMI Kalkulator',desc:'Index telesne mase',img:'assets/bmi.jpg',demo:'./projects/bmi/',repo:'#'},
 {title:'Notes / Blog Mini',desc:'Beleške u localStorage',img:'assets/notes.jpg',demo:'./projects/notes/',repo:'#'},
 {title:'Pomodoro Timer',desc:'Fokus 25/5, pauza, reset',img:'assets/pomodoro.jpg',demo:'./projects/pomodoro/',repo:'#'},
 {title:'Password Generator',desc:'Jake lozinke, više setova',img:'assets/password.jpg',demo:'./projects/password/',repo:'#'},
 {title:'Gradient Generator',desc:'Kreiraj CSS linear-gradient',img:'assets/gradient.jpg',demo:'./projects/gradient/',repo:'#'},
 {title:'Galerija',desc:'CSS Grid galerija',img:'assets/gallery.jpg',demo:'./projects/gallery/',repo:'#'},
 {title:'Portfolio V1',desc:'Prva verzija (eksterni link)',img:'assets/portfolio.jpg',demo:'https://ivanvaic99.github.io/Portfolio/',repo:'https://github.com/ivanvaic99/Portfolio'}
];

// Render projekata
(function(){
  const grid=document.getElementById('projectsGrid');
  if(!grid) return;
  grid.innerHTML=projects.map((p)=>`
    <article class="card reveal">
      <div class="thumb" style="background-image:url('${p.img}')"></div>
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

// Reveal-on-scroll
const io = new IntersectionObserver((entries)=>{
  for(const e of entries){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// Header shadow + year
const header = document.querySelector('.site-header');
window.addEventListener('scroll', ()=>{ if(header) header.classList.toggle('scrolled', window.scrollY>10); });
const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

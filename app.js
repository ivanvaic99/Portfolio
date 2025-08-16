// Projekti (Portfolio V1 uklonjen). Kartice bez slika, sa gradient zaglavljem.
const projects=[
 {title:'Weather App',desc:'Prognoza (Open-Meteo API bez ključa)',demo:'./projects/weather/',repo:'#'},
 {title:'BMI Kalkulator',desc:'Indeks telesne mase',demo:'./projects/bmi/',repo:'#'},
 {title:'Notes / Blog Mini',desc:'Beleške u localStorage',demo:'./projects/notes/',repo:'#'},
 {title:'Pomodoro Timer',desc:'Fokus 25/5, pauza, reset',demo:'./projects/pomodoro/',repo:'#'},
 {title:'Password Generator',desc:'Jake lozinke, više setova',demo:'./projects/password/',repo:'#'},
 {title:'Gradient Generator',desc:'CSS linear-gradient',demo:'./projects/gradient/',repo:'#'},
 {title:'Galerija',desc:'CSS Grid galerija',demo:'./projects/gallery/',repo:'#'}
];

(function(){
  const grid=document.getElementById('projectsGrid');
  if(!grid) return;
  grid.innerHTML=projects.map((p)=>`
    <article class="card reveal">
      <div class="head">${p.title}</div>
      <div class="body">
        <div class="meta">Frontend • Vanilla JS</div>
        <p style="margin:0 0 10px;color:#9aa0aa">${p.desc}</p>
        <div class="links">
          <a class="chip" href="${p.demo}" target="_blank" rel="noopener">Demo</a>
          ${p.repo && p.repo!=='#' ? `<a class="chip" href="${p.repo}" target="_blank" rel="noopener">Repo</a>` : ''}
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

// Footer year
const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

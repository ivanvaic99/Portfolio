
# Ivan Vaić — Portfolio

Inspirisan, brz i responzivan lični portfolio: sticky header, čiste kartice, hero sekcija, lista projekata, sekcija „O meni“ i kontakt.
Repo je spreman za **GitHub Pages** deploy.

## ✨ Funkcije
- Dark/light minimalistički dizajn (neutralne boje nalik Nike UI).
- Grid projekata sa „Demo“ i „Repo“ linkovima.
- Hero sekcija sa kratkim pitch‑om.
- Sekcija „O meni“ + veštine/stack (po potrebi proširiti).
- Kontakt sa istaknutim emailom i telefonom.
- Uključen **profesionalni CV**: `assets/Ivan-Vaic-CV.pdf`.

## 📁 Struktura
```
portfolio/
├── index.html
├── styles.css
├── app.js
└── assets/
    ├── Ivan-Vaic-CV.pdf
    └── avatar.jpg
```

## 🚀 Deploy (GitHub Pages)
1. Napravi repo po imenu **portfolio** na svom GitHub nalogu.
2. Uploaduj sve fajlove iz ovog paketa.
3. Idi na **Settings → Pages**.
4. Postavi **Deploy from a branch**, izaberi **main** i **/** (root), *Save*.
5. Tvoj sajt će biti na `https://<tvoj-username>.github.io/portfolio/` (obično u roku od par minuta).

## 🧩 Projekti (funkcionalnost)
U `app.js` nalazi se niz `projects` kojim se renderuje grid. Svaki projekat ima:
- `title`, `desc`
- `demo` (URL do pokrenute aplikacije)
- `repo` (GitHub repozitorijum)

**Važno:** linkovi su postavljeni na tvoje postojeće stranice:
- Weather App → `https://ivanvaic99.github.io/Portfolio/weather/`
- BMI Kalkulator → `https://ivanvaic99.github.io/Portfolio/`
- Blog Notes → `https://ivanvaic99.github.io/Portfolio/`
- Portfolio V1 → `https://ivanvaic99.github.io/Portfolio/`

Ako su ovi projekti već deploy‑ovani i rade, biće 100% funkcionalni i sa ovog portfolija.  
Ako neki link ne radi, proveri da li je **repo public** i da li je **GitHub Pages** uključen za taj projekat, ili zameni `demo` link tačnim URL‑om.

### Dodavanje novog projekta
U `app.js`, dodaj novi objekat u niz `projects`, npr.:
```js
projects.push({
  title: 'To‑Do App',
  desc: 'Mala JS aplikacija za upravljanje zadacima.',
  demo: 'https://<tvoj-username>.github.io/todo/',
  repo: 'https://github.com/<tvoj-username>/todo'
});
```

## 📝 CV
Profesionalni CV je već ubačen: `assets/Ivan-Vaic-CV.pdf` (kontakt: **ivan.vaic22@gmail.com**, **0691999125**).  
Zameni ga svojim PDF‑om istog imena ako ažuriraš sadržaj.

## 🔧 Lokalno testiranje
Otvoriti `index.html` u browseru (dovoljno je dupli klik).  
Za GitHub Pages linkove (demo projekata) potrebna je internet konekcija.

## ✅ Checklista pre objave
- [ ] `assets/Ivan-Vaic-CV.pdf` je tvoj finalni CV.
- [ ] Svi `demo` linkovi u `app.js` zaista postoje i rade.
- [ ] Repo je **public**.
- [ ] Uključio si **Pages** (main / root).
- [ ] Otvorio/la si sajt i prošao/la kroz sve linkove bez greške.

## 📄 Licenca
Lični portfolio. Slobodno menjaš i koristiš.

## 🔍 Provera linkova
Na kartici svakog projekta pojavljuje se bedž (Demo radi / Proveri ručno / Demo ne radi) na osnovu brze provere linka.
Ako piše „Demo ne radi“, otvori `app.js` i postavi tačan `demo` URL ili uključi GitHub Pages za taj projekat.


## 🗂 Ugrađeni podprojekti (u istom repou)
- `projects/weather/` — Open‑Meteo demo (bez API ključa).
- `projects/bmi/` — BMI kalkulator (vanilla JS).
- `projects/notes/` — Notes/Blog mini (localStorage).

Demo linkovi u portfoliju sada idu relativno (`./projects/...`), tako da sve radi unutar **istog** repozitorijuma i preko **GitHub Pages**.


## 🎨 V2 vizuali
Dodate su HD thumbnail slike u `assets/project-images/` i blage animacije (hover/float). Mega navigacija je čista i brza, bez preklapanja.

## 🔗 LinkedIn
U headeru postoji LinkedIn dugme. Zameni URL svojim profilom (npr. `https://www.linkedin.com/in/ivan-vaic/`) direktno u `index.html` (traži: `class="btn linkedin"`).

## 💼 Usluge
Sekcija **Usluge** (Web sajt, Web app, UI/UX dorada) dodata je u `index.html` i stilizovana u `styles.css`.

## 💬 Testimoniali
Tri kartice u sekciji **Testimoniali** su primeri. Zameni tekst stvarnim preporukama klijenata/mentora u `index.html`.

## 🧾 Cenovnik (za Srbiju — početni)
- Web sajt (Landing): **6.000–12.000 RSD**
- Web aplikacija (Mini): **12.000–22.000 RSD**
- UI/UX dorada: **4.000–9.000 RSD**

Ovo su početne orijentacije; konačna cena zavisi od obima.

## 🔗 LinkedIn
U headeru je postavljen link koji si poslao (`/me?...`). Za javne posetioce je bolje da koristiš **/in/tvoj‑profil** link (npr. `https://www.linkedin.com/in/ivan-vaic/`) — možeš da zameniš direktno u `index.html`.


## ✉️ Kontakt forma
U dnu početne stranice dodata je forma sa validacijom. Slanje ide preko mailto ka `ivan.vaic22@gmail.com`.

## 📈 Analitika (opciono)
U `app.js` postoje flagovi:
```js
const ENABLE_GA4 = false; // promeni na true
const GA4_ID = "G-XXXXXXXXXX"; // postavi svoj ID
const ENABLE_POSTHOG = false;  // promeni na true
const POSTHOG_KEY = "phc_xxxxxxxxxxxxxxxxxxxxx"; // postavi svoj key
```
Omogući i postavi svoje vrednosti po potrebi.

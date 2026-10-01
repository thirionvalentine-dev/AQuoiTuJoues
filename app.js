const $ = s => document.querySelector(s);
const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const cats = [...new Set(JEUX.map(j => j.categorie))];

const carte = j => `<a class="carte" href="#/jeu/${j.id}"><b>${j.nom}</b>
  <span>${j.joueurs} joueurs · ${j.duree} · ${j.cartes}</span></a>`;

function liste(q) {
  const n = norm(q.trim());
  const res = JEUX.filter(j => norm(j.nom).includes(n));
  if (!res.length) return `<p class="vide">Aucun jeu trouvé pour « ${q} ».</p>`;
  if (n) return res.map(carte).join("");
  return cats.map(c => `<h2>${c}</h2>` + res.filter(j => j.categorie === c).map(carte).join("")).join("");
}

function accueil() {
  $("#app").innerHTML = `<input id="recherche" type="search" placeholder="Rechercher un jeu…" autocomplete="off">
    <div id="liste">${liste("")}</div>`;
  $("#recherche").oninput = e => $("#liste").innerHTML = liste(e.target.value);
}

function jeu(j) {
  const bloc = r => `<h3>${r.t}</h3>` + (r.p ? `<p>${r.p}</p>` : `<ul>${r.l.map(x => `<li>${x}</li>`).join("")}</ul>`);
  $("#app").innerHTML = `<article class="jeu"><a class="retour" href="#/">← Tous les jeux</a>
    <h1>${j.nom}</h1><p class="cat">${j.categorie}</p>
    <div class="infos"><div><strong>${j.joueurs}</strong>joueurs</div><div><strong>${j.duree}</strong>par partie</div><div><strong>${j.cartes}</strong>cartes</div></div>
    ${j.regles.map(bloc).join("")}</article>`;
}

function menu() {
  $("#menu").innerHTML = `<a class="accueil" href="#/">Accueil</a>` + cats.map(c =>
    `<details><summary>${c}</summary>${JEUX.filter(j => j.categorie === c).map(j => `<a href="#/jeu/${j.id}">${j.nom}</a>`).join("")}</details>`).join("");
}

function ouvrir(o) { $("#menu").hidden = $("#voile").hidden = !o; }

function route() {
  const m = location.hash.match(/^#\/jeu\/(.+)$/);
  const j = m && JEUX.find(x => x.id === m[1]);
  j ? jeu(j) : accueil();
  window.scrollTo(0, 0);
  ouvrir(false);
}

$("#burger").onclick = () => ouvrir($("#menu").hidden);
$("#voile").onclick = () => ouvrir(false);
window.onhashchange = route;
menu();
route();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");

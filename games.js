// Pour ajouter un jeu : copiez un bloc { ... }, changez les textes, mettez une virgule entre chaque bloc.
// "p" = paragraphe, "l" = liste à puces.
const JEUX = [
{
  id: "belote", nom: "Belote", categorie: "Jeux de plis",
  joueurs: "4 (2 équipes)", duree: "30 à 45 min", cartes: "32 cartes",
  regles: [
    {t: "But", p: "Marquer le plus de points avec son équipe. La partie se joue généralement en 1000 points."},
    {t: "Distribution", l: ["Chaque joueur reçoit 5 cartes (3 puis 2), puis une carte est retournée au centre.", "Au premier tour, chacun peut « prendre » à la couleur de cette carte, qui devient l'atout. Sinon, on propose une autre couleur au second tour.", "Le preneur reçoit la carte retournée, puis chacun complète sa main à 8 cartes."]},
    {t: "Valeur des cartes", l: ["Atout : Valet 20, 9 = 14, As 11, 10 = 10, Roi 4, Dame 3, 8 et 7 = 0.", "Autres couleurs : As 11, 10 = 10, Roi 4, Dame 3, Valet 2, 9, 8 et 7 = 0."]},
    {t: "Déroulement", l: ["Le joueur à droite du donneur ouvre le premier pli.", "Il faut fournir la couleur demandée. Sinon, on coupe à l'atout, et on surcoupe si possible.", "Le pli est remporté par la carte la plus forte, et le gagnant ouvre le suivant."]},
    {t: "Points", l: ["Le dernier pli (le « dix de der ») rapporte 10 points.", "Roi et Dame d'atout dans la même main : « Belote-Rebelote », 20 points.", "L'équipe qui a pris doit marquer plus de 81 points. Sinon elle est « dedans » et l'adversaire marque 162."]}
  ]
},
{
  id: "tarot", nom: "Tarot à 4", categorie: "Jeux de plis",
  joueurs: "3 à 5 (4 conseillé)", duree: "45 à 60 min", cartes: "Jeu de tarot (78 cartes, avec atouts)",
  regles: [
    {t: "But", p: "Le preneur joue seul contre les autres et doit atteindre un nombre de points qui dépend des bouts qu'il possède."},
    {t: "Les cartes", l: ["Les bouts sont l'Excuse, le 1 et le 21 d'atout.", "Le jeu contient 4 couleurs de 14 cartes, 21 atouts et l'Excuse.", "Valeurs : Roi 4,5 points, Dame 3,5, Cavalier 2,5, Valet 1,5, bouts 4,5 points, autres cartes 0,5. Total : 91 points."]},
    {t: "Distribution et enchères", l: ["À 4 joueurs : 18 cartes chacun et 6 cartes au « chien ».", "Chacun annonce à tour de rôle : Passe, Petite, Garde, Garde sans le chien ou Garde contre le chien.", "Le preneur retourne le chien, l'ajoute à sa main, puis écarte 6 cartes (ni Roi, ni bout)."]},
    {t: "Déroulement", l: ["Il faut fournir la couleur demandée. Si on n'en a pas, on doit jouer atout (en montant si possible).", "L'Excuse peut être jouée à tout moment et ne remporte pas le pli."]},
    {t: "Contrat", p: "Le preneur doit atteindre 56 points avec 3 bouts, 51 avec 2, 41 avec 1 et 36 avec aucun."}
  ]
},
{
  id: "huit-americain", nom: "Huit américain", categorie: "Jeux de défausse",
  joueurs: "2 à 5", duree: "15 min", cartes: "52 cartes",
  regles: [
    {t: "But", p: "Être le premier à poser toutes ses cartes."},
    {t: "Mise en place", p: "Chacun reçoit 7 cartes (5 à plus de 4 joueurs). Le reste forme la pioche, et on retourne la première carte à côté."},
    {t: "Déroulement", l: ["À son tour, on pose une carte de même couleur ou de même valeur que la carte visible.", "Un 8 peut être posé à tout moment, et son joueur choisit la nouvelle couleur.", "Si on ne peut pas jouer, on pioche une carte (on la pose si elle convient, sinon on passe)."]},
    {t: "Variantes courantes", l: ["Le 2 : le suivant pioche 2 cartes.", "L'As : le suivant passe son tour."]}
  ]
},
{
  id: "president", nom: "Président", categorie: "Jeux de défausse",
  joueurs: "3 à 6", duree: "20 min", cartes: "52 cartes",
  regles: [
    {t: "But", p: "Se débarrasser de toutes ses cartes le plus vite possible. Le premier devient « Président », le dernier « Trou du cul » (ou « Bouc »)."},
    {t: "Ordre des cartes", p: "Du plus faible au plus fort : 3, 4, 5, 6, 7, 8, 9, 10, Valet, Dame, Roi, As, 2."},
    {t: "Déroulement", l: ["On distribue toutes les cartes. Le premier joueur pose une carte, ou plusieurs de même valeur.", "Les suivants doivent poser le même nombre de cartes, de valeur supérieure ou égale, ou passer.", "Quand tout le monde passe, le dernier à avoir joué ramasse le pli et rejoue ce qu'il veut."]},
    {t: "Manches suivantes", p: "Le dernier donne ses 2 meilleures cartes au Président, qui lui donne 2 cartes de son choix en échange."}
  ]
},
{
  id: "bataille", nom: "Bataille", categorie: "Jeux simples",
  joueurs: "2", duree: "10 à 30 min", cartes: "32 ou 52 cartes",
  regles: [
    {t: "But", p: "Gagner toutes les cartes de l'adversaire."},
    {t: "Déroulement", l: ["On distribue tout le paquet, face cachée, moitié-moitié.", "Chacun retourne sa carte du dessus. La plus forte (As en haut) remporte les deux et les place sous son paquet.", "Égalité : c'est la « bataille ». Chacun pose une carte face cachée, puis une face visible. La plus forte emporte toutes les cartes."]},
    {t: "Remarque", p: "Le jeu ne demande aucun choix. C'est un jeu de hasard, idéal pour les enfants."}
  ]
},
{
  id: "pouilleux", nom: "Pouilleux (Vieux garçon)", categorie: "Jeux simples",
  joueurs: "2 à 6", duree: "10 min", cartes: "52 cartes (une Dame retirée)",
  regles: [
    {t: "But", p: "Ne pas rester avec la carte sans paire à la fin."},
    {t: "Mise en place", p: "Retirez une Dame du jeu (par exemple celle de pique). La Dame de trèfle n'aura alors aucune paire : c'est le « Pouilleux »."},
    {t: "Déroulement", l: ["On distribue toutes les cartes, et chacun pose devant lui les paires de même valeur.", "À tour de rôle, chacun tire une carte au hasard dans la main de son voisin. Si elle forme une paire, on la pose.", "Le dernier joueur avec le Pouilleux en main a perdu."]}
  ]
},
{
  id: "menteur", nom: "Menteur", categorie: "Jeux de bluff",
  joueurs: "3 à 8", duree: "15 min", cartes: "52 cartes",
  regles: [
    {t: "But", p: "Être le premier à se défausser de toutes ses cartes."},
    {t: "Déroulement", l: ["On distribue tout le paquet. Le premier joueur pose une ou plusieurs cartes face cachée en annonçant « un As » (ou « deux As », etc.).", "Le suivant pose à son tour des cartes face cachée en annonçant la valeur suivante (2, puis 3, puis 4, etc. jusqu'au Roi, puis on recommence à l'As).", "On peut mentir sur les cartes posées."]},
    {t: "Accusation", p: "N'importe quel joueur peut crier « Menteur ! » et retourner les dernières cartes posées. Si le joueur a menti, il ramasse toute la pile. Sinon, c'est l'accusateur qui la ramasse."}
  ]
}
];

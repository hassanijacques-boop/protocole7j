const MISSIONS = {};
function m(p,t,d) { return {p,t,d} }

// === JOUR 1 : Premier Contact ===
MISSIONS[1] = [
  m('Djism','Scan Corporel','Allonge-toi 5 min et scanne chaque partie de ton corps des pieds a la tete. Note les tensions sans les juger. SIMPLE : ferme les yeux, commence par les orteils et remonte lentement.'),
  m('Aql','Journal des Pensees','Prends 5 min pour ecrire tout ce qui te passe par la tete sans filtre. Relis et observe les schemas. PAS BESOIN d ecrire bien, juste ecrire.'),
  m('Nafs','Le Premier Non','Identifie UNE chose que tu fais par habitude (grignotage, scrolling) et dis-lui non aujourd hui. Observe ce que tu ressens apres ce refus.'),
  m('Qalb','Gratitude Simple','Note 3 choses toutes simples pour lesquelles tu es reconnaissant : ton souffle, l eau, le toit. RESSENS chaque gratitude dans ton coeur.'),
];

// === JOUR 2 : Eveil des Sens ===
MISSIONS[2] = [
  m('Djism','Marche Consciente','Marche 10 min dehors sans ecouteurs. Sens le sol sous tes pieds, l air sur ta peau. Regarde tout comme si c etait la premiere fois.'),
  m('Aql','Comptage des Souffles','Assieds-toi et compte 10 cycles (inspire-expire = 1). Chaque fois que l esprit s evade, ramene-le au chiffre. Sans jugement.'),
  m('Nafs','5 Secondes','Avant de ceder a une impulsion (tel, grignotage), compte 5s. Ces 5s sont ta fenetre de liberte. Tu choisis en conscience.'),
  m('Qalb','Regard Neuf','Regarde quelqu un aujourd hui ou ton reflet avec un regard neuf. Cherche UNE qualite que tu n avais jamais vue.'),
];

// === JOUR 3 : Ancrage ===
MISSIONS[3] = [
  m('Djism','Hydratation','Bois un verre d eau en pleine conscience : sens sa fraicheur, visualise chaque cellule hydratee. L eau est benediction.'),
  m('Aql','Lecture d une Page','Lis UNE page d un livre qui eleve. Ferme les yeux 30s apres et laisse le texte resonner. Pas plus d une page.'),
  m('Nafs','Le Premier Matin','Au reveil, ne touche PAS ton telephone pendant 10 min. Ecoute les bruits, reste dans le calme. Ce temps t appartient.'),
  m('Qalb','Sourire Interieur','Souviens-toi d un moment joyeux. Ferme les yeux, revis-le 1 min. Laisse le sourire monter. La joie est une priere.'),
];

// === JOUR 4 : Exploration ===
MISSIONS[4] = [
  m('Djism','Posture','Tiens la posture de l arbre : debout sur une jambe 30s, puis l autre. Sens l ancrage. L equilibre du corps reflete l equilibre de l ame.'),
  m('Aql','Pause Numero','Coupe les notifications PENDANT 2H. Observe ton esprit. Que decouvres-tu dans ce silence numerique ?'),
  m('Nafs','Confort Inverse','Quand l envie de confort arrive (canape, tel), fais l action opposee PENDANT 5 MIN. Juste pour defaire l habitude.'),
  m('Qalb','Gratitude Passive','Fais une gentillesse anonyme : laisse un mot doux, aide discretement, fais un compliment sans que la personne puisse te remercier.'),
];

// === JOUR 5 : Interieur ===
MISSIONS[5] = [
  m('Djism','Etirements','5 min d etirements : cou, epaules, dos, jambes. Pas de performance. Ou ca tire ? Ou c est facile ? Ton corps te parle, ecoute-le.'),
  m('Aql','Curiosite','Apprends un mot nouveau dans une langue que tu ne connais pas (arabe, japonais). La curiosite nourrit l esprit plus que le divertissement.'),
  m('Nafs','Choix du Matin','Choisis CONSCIEMMENT ce que tu vas porter et manger aujourd hui. Pas par habitude. Chaque choix conscient renforce la volonte.'),
  m('Qalb','Ecoute Active','Ecoute qqn sans l interrompre. Sans preparer ta reponse. Juste ecouter. C est le plus grand des respects.'),
];

// === JOUR 6 : Purification ===
MISSIONS[6] = [
  m('Djism','Respiration 4-7-8','Inspire par le nez 4s, bloque 7s, expire par la bouche 8s. 5 cycles. Calme le systeme nerveux en 30 secondes.'),
  m('Aql','Observer une Emotion','Quelle emotion domine en toi ? Ou est-elle dans le corps ? Observe-la sans la juger ni la chasser. Elle passera comme un nuage.'),
  m('Nafs','Silence Volontaire','Garde le silence 1h sauf necessite. Observe combien de fois tu voulais parler juste pour combler le vide.'),
  m('Qalb','Pardon Minuscule','Y a-t-il une petite rancune quelque part ? Relache 10% aujourd hui. Pas tout, juste 10%. C est un debut.'),
];

// === JOUR 7 : Bilan 1 ===
MISSIONS[7] = [
  m('Djism','Bilan Corps','Compare ton corps avec jour 1 : tensions differentes ? Zones plus vivantes ? Ecris une ligne. Ton corps est ton premier professeur.'),
  m('Aql','Bilan Mental','Qu as-tu appris sur ton mental cette semaine ? Quels schemas ? Note 2 lignes. La conscience est le debut de la transformation.'),
  m('Nafs','Victoire','Quel NON as-tu dit avec succes cette semaine ? Celebre. Chaque refus est une victoire sur le conditionnement.'),
  m('Qalb','Merci','Remercie qqn sincerement. Texte, appel ou regard. Sois precis : pas un merci vague, mais merci pour tel moment ou telle qualite.'),
];

// === JOUR 8 : Nouvel Elan ===
MISSIONS[8] = [
  m('Djism','Squats Lents','20 squats : 5s pour descendre, 5s pour monter. La lenteur transforme l effort en meditation. Chaque mouvement est une presence.'),
  m('Aql','Carte Mentale','Prends un souci. Dessine-le au centre. Trace des branches avec tes idees. Visualiser clarifie. Le mental a besoin de structure.'),
  m('Nafs','Privation Consciente','Prive-toi d une chose agreable aujourd hui : cafe, sucre, serie. L absence te montrera ton attachement. Tu es plus fort que tes habitudes.'),
  m('Qalb','Message Sincere','Envoie un message pour dire pourquoi tu apprecies qqn. Sois specifique : je me souviens de ce jour ou tu... Les details comptent.'),
];

// === JOUR 9 : Profondeur ===
MISSIONS[9] = [
  m('Djism','Marche Rapide','20 min de marche rapide. Ramene ton esprit au rythme de tes pas. Marcher c est prier avec les pieds. Chaque pas est une ancrage.'),
  m('Aql','Mot Ancre','Choisis un mot : Paix, Force, Patience. Assieds-toi 5 min, repete-le mentalement. Ancre-toi dans ce mot. Il est ton refuge.'),
  m('Nafs','Face a la Tentation','Place une tentation devant toi (gateau, tel). Reste 3 min sans y toucher. Observe l envie monter puis redescendre. Tu es le maître.'),
  m('Qalb','Pardon Partiel','A qui en veux-tu un peu ? Lache 20% aujourd hui. Pas tout d un coup : la guerison est progressive, comme tout vrai changement.'),
];

// === JOUR 10 : Consistence ===
MISSIONS[10] = [
  m('Djism','Danse','Mets ta musique preferee et danse 5 min sans retenue. Bouge sans choregraphie. Le corps heureux libere l esprit.'),
  m('Aql','Focus 15 Min','Choisis UNE tache. Fais-la 15 min sans interruption. Un seul onglet, pas de tel. Le focus est un muscle entraine-toi.'),
  m('Nafs','Journal','Ecris 5 min : qu a alimente tes impulsions ? Qu est-ce qui les a calmées ? Plus tu connais tes declencheurs, mieux tu les maitrises.'),
  m('Qalb','Beaute Naturelle','Prends un moment pour admirer la beaute autour de toi : un arbre, le ciel, une plante. La beaute est la nourriture du coeur.'),
];

// === JOUR 11 : Renforcement ===
MISSIONS[11] = [
  m('Djism','Gainage','30s de planche (ou sur les genoux). Sens le centre de ton corps. Tout part du noyau : physique, mental, spirituel.'),
  m('Aql','Affirmation','Ecris UNE affirmation positive sur toi : Je suis capable de... Repete-la 3 fois devant le miroir. La parole cree la realite.'),
  m('Nafs','Routine du Soir','Avant de dormir, laisse ton tel hors de la chambre. Les 30 dernieres minutes de ta journee t appartiennent. Lis, reflechis, prie.'),
  m('Qalb','Gratitude du Passe','Remercie pour UNE epreuve passee qui t a rendu plus fort. Meme dans la difficulte, il y a un cadeau cache. Trouve-le.'),
];

// === JOUR 12 : Liberation ===
MISSIONS[12] = [
  m('Djism','Yoga Simple','3 postures simples : Chat-Vache, Chien tete en bas, Enfant. 2 min chaque. Le corps est un temple, entretiens-le avec douceur.'),
  m('Aql','Desencombrement','Prends 10 min pour ranger UN tiroir ou une etagere. Le desordre exterieur cree du desordre interieur. L ordre apaise.'),
  m('Nafs','Dire Non','Refuse UNE demande aujourd hui (meme petite). Tu n es pas oblige d accepter tout ce qu on te demande. Le non est aussi sacre que le oui.'),
  m('Qalb','Cadeau Invisible','Fais quelque chose de gentil pour un inconnu : laisse passer quelqu un, souris, ramasse un dechet. Chaque geste compte.'),
];

// === JOUR 13 : Maitrise de Soi ===
MISSIONS[13] = [
  m('Djism','Respiration du Feu','20 respirations rapides par le nez (inspire-expire courtes), puis 1 longue expiration. 3 cycles. Active l energie vitale.'),
  m('Aql','Visualisation','Passe 5 min a visualiser TON objectif comme deja accompli. Vois-le, ressens-le, vis-le. La visualisation prepare le succes.'),
  m('Nafs','Defi Confort','Fais quelque chose d inconfortable MAIS utile : douche froide 30s, parler en public, appeler qqn. Le confort est une zone, pas une prison.'),
  m('Qalb','Souvenir Heureux','Ecris un souvenir heureux EN DETAIL : les odeurs, les couleurs, les sensations. Revivre la joie la multiplie.'),
];

// === JOUR 14 : Bilan 2 ===
MISSIONS[14] = [
  m('Djism','Bilan Physique','2 semaines : qu est-ce qui a change dans ton corps ? Energie ? Sommeil ? Douleurs ? Ecris 3 observations. Ton corps te parle, ecoute-le.'),
  m('Aql','Bilan Mental','Quels schemas de pensee as-tu identifies ? Lesquels veux-tu garder ? Lesquels veux-tu changer ? Note 2 intentions.'),
  m('Nafs','Parcours','Quel a ete ton plus grand defi ? Quelle ta plus grande victoire ? Le chemin est aussi important que la destination.'),
  m('Qalb','Pardon','Aujourd hui, pardonne COMPLETEMENT une petite offense. Pas pour l autre, pour toi. Le pardon est un cadeau que tu te fais.'),
];

// === JOUR 15 : Mi-Parcours ===
MISSIONS[15] = [
  m('Djism','Course Douce','15 min de course ou marche rapide. Pas de chrono. Sens le souffle devenir rythme. La regularity prime sur l intensite.'),
  m('Aql','Gratitude Mentale','Liste 10 choses que tu as apprises dans ta vie. Pas scolaire, la vie : cuisiner, pardonner, esperer. Mesure ton chemin.'),
  m('Nafs','Auto-Observation','Observe-toi sans jugement pendant 1h. Notes tes reactions, tes automatismes. Deviens le temoin de ta propre vie.'),
  m('Qalb','Appel du Coeur','Appelle ou ecris a qqn que tu n as pas contacte depuis longtemps. Les liens sont vivants, nourris-les.'),
];

// === JOUR 16 : Purification Interieure ===
MISSIONS[16] = [
  m('Djism','Detox Corps','Remplace un repas par un fruit ou une soupe legere. Sens la legerete. Le corps a besoin de pauses digestives pour se regenerer.'),
  m('Aql','Detox Mentale','Pas de reseaux sociaux AUJOURD HUI. Remplace par la lecture ou la marche. Tu vas decouvrir combien de temps tu gagnes.'),
  m('Nafs','Parole Controlee','Ne dis RIEN de negatif aujourd hui : ni critique, ni plainte, ni jugement. Si c est negatif, silence. Observe la puissance du silence.'),
  m('Qalb','Envoyer une Priere','Prends un moment pour faire un doua sincère pour qqn d autre. Prier pour les autres eleve le coeur.'),
];

// === JOUR 17 : Discipline ===
MISSIONS[17] = [
  m('Djism','Meme Exercice','Refais l exercice du jour 8 (squats lents) et compare. Sens le progres. La repetition transforme.'),
  m('Aql','Etude Approfondie','Prends 20 min pour etudier un sujet serieux : tafsir, hadith, science, philosophie. Pas de video rapide, une vraie etude.'),
  m('Nafs','Routine Matinale','Cree UNE routine matinale et suis-la AUJOURD HUI : reveil, douche, priere, lecture. Pas de tel avant tout ça.'),
  m('Qalb','Generosite','Donne quelque chose AUJOURD HUI : argent, temps, sourire, aide. Pas pour etre vu, pour la beaute du geste.'),
];

// === JOUR 18 : Expansion ===
MISSIONS[18] = [
  m('Djism','Plein Air','Passe 30 min dehors. Soleil, vent, pluie, peu importe. La nature est une pharmacie gratuite pour le corps et l esprit.'),
  m('Aql','Debat Interieur','Prends un sujet controversé : ecris 2 arguments POUR, 2 arguments CONTRE. Developpe ta capacite a voir les deux cotes.'),
  m('Nafs','Desir Retarde','Tu veux quelque chose aujourd hui ? Attends 1 HEURE avant de le prendre. Le desir diminue avec l attente. Teste.'),
  m('Qalb','Contemplation','Prends 10 min pour regarder le ciel ou les etoiles. Pas de mots, juste regarder. Le sentiment d immensite est une priere muette.'),
];

// === JOUR 19 : Integration ===
MISSIONS[19] = [
  m('Djism','Massage Auto','5 min d auto-massage : mains, pieds, visage, epaules. Avec de l huile si possible. Le toucher conscient guerit.'),
  m('Aql','Resume du Jour','Ecris 10 lignes sur ta journee. Qu as-tu appris ? Qu as-tu ressenti ? Qu as-tu evite ? Le journal est ton miroir intime.'),
  m('Nafs','Confort Difficile','Fais UNE chose que tu remets a plus tard depuis longtemps. L action dissout la peur. Agis maintenant.'),
  m('Qalb','Remerciement Universel','Remercie Allah pour une chose qui t a Deçu. La confiance dans le plan divin transforme les epreuves en cadeaux.'),
];

// === JOUR 20 : Bilan 3 ===
MISSIONS[20] = [
  m('Djism','Bilan Physique','3 semaines. Qu est-ce qui s est transforme ? Mesure : monte un escalier, tiens une posture. Compare au jour 1.'),
  m('Aql','Bilan Mental','Qu est-ce qui etait difficile ? Facile ? Surprenant ? Note 3 apprentissages. La reflexion est l ecole de la sagesse.'),
  m('Nafs','Habitude Consciente','Choisis UNE habitude que tu veux INSTALLER pour les 10 prochains jours. Ecris-la. L engagement ecrit est plus fort.'),
  m('Qalb','Gratitude pour Soi','Remercie TOI-MEME pour 3 choses que tu as accomplies. L auto-gratitude n est pas de l orgueil, c est de la reconnaissance du chemin.'),
];

// === JOUR 21 : Discipline Avancee ===
MISSIONS[21] = [
  m('Djism','Circuit 5 Min','5 min de : 20 squats, 15 pompes, 30s gainage, 10 burpees. Repos 1 min. 2 tours. Le corps est une machine, fais-la tourner.'),
  m('Aql','Resoudre un Probleme','Prends UN probleme concret et trouve 3 solutions possibles. Ecris-les. Le mental est un outil de resolution, pas de rumination.'),
  m('Nafs','Gratification Retardee','Aujourd hui, termine TOUTES tes taches importantes AVANT de te recompenser. La recompense meritee est plus douce.'),
  m('Qalb','Soin du Lien','Reconcille-toi avec qqn si tu le peux. Meme un petit geste. Les liens coupes pesent sur le coeur.'),
];

// === JOUR 22 : Legerete ===
MISSIONS[22] = [
  m('Djism','Marche Legere','Marche 25 min sans destination. Laisse tes pieds te guider. Pas de but, juste le mouvement. La marche est meditation en mouvement.'),
  m('Aql','Lacher Prise','Prends UN souci que tu ne peux pas controler. Ecris-le sur un papier, puis detruis-le. Confie a Allah ce qui est hors de ta main.'),
  m('Nafs','Satisfaction Consciente','Prends le temps de savourer UN vrais plaisir aujourd hui : un bon repas, un coucher de soleil. Pleinement presente.'),
  m('Qalb','Gratitude Ecrite','Ecris 10 choses pour lesquelles tu es reconnaissant en ce moment. Pas de pensees, ecris vraiment. L ecrit fige la gratitude.'),
];

// === JOUR 23 : Confiance ===
MISSIONS[23] = [
  m('Djism','Sautillements','3 min de sautillements sur place. Sens la legerete revenir. Le corps a besoin de jeux, pas seulement d exercices serieux.'),
  m('Aql','Autocritique Positive','Regarde UN de tes defauts avec honnetete. Que peux-tu y faire ? Ecris UNE action concrete pour l ameliorer.'),
  m('Nafs','Decisif','Aujourd hui, prends CHAQUE decision rapidement. Pas de hesitation. Meme des petites decisions : quoi manger, quoi porter. Devenir decisif.'),
  m('Qalb','Soutien Silencieux','Sois present pour qqn SANS rien dire. Juste a cote. Parfois le plus grand soutien est le silence partage.'),
];

// === JOUR 24 : Profondeur ===
MISSIONS[24] = [
  m('Djism','Respiration Carree','Inspire 4s, garde 4s, expire 4s, vide 4s. 5 cycles. La respiration carree stabilise les emotions comme une ancre stabilise un bateau.'),
  m('Aql','Carte de Vie','Dessine ta vie comme une ligne du temps. Les hauts, les bas. Mesure le chemin parcouru. Tu es plus fort que tu ne le crois.'),
  m('Nafs','Detachement','Prends un objet auquel tu tiens. Passe 5 min sans le toucher. Tu n es pas tes possessions. Le detachement est une forme de liberte.'),
  m('Qalb','Voeu pour l Humanite','Fais un doua pour l ensemble des croyants et des croyantes. Elargir le coeur a toute la communaute, c est grandir.'),
];

// === JOUR 25 : Acuite ===
MISSIONS[25] = [
  m('Djism','Pompes','Fais 20 pompes (ou sur genoux). Bras, torse, coeur. Sens la puissance qui monte. La force physique est un depot.'),
  m('Aql','Methode Pomodoro','Travaille 25 min, pause 5 min. 2 cycles. La concentration par intervalles est plus efficace que la force brute.'),
  m('Nafs','Non Elegant','Refuse poliment quelque chose aujourd hui. Un non peut-etre doux et ferme. Le non bien dit est plus respecte que le oui force.'),
  m('Qalb','Acte de Paix','Resous UN petit conflit aujourd hui (ou evite d en creer un). La paix commence par toi. Sois le premier a tendre la main.'),
];

// === JOUR 26 : Elevation ===
MISSIONS[26] = [
  m('Djism','Etirement du Matin','10 min d etirements au reveil. Dans le calme du matin, chaque etirement est une gratitude pour le jour qui commence.'),
  m('Aql','Versets','Lis 3 versets du Coran avec traduction. Prends le temps de reflechir a chaque mot. La repetition des paroles divines purifie.'),
  m('Nafs','Maitrise du Regard','Aujourd hui, controle ton regard : ne pose pas les yeux sur ce qui ne t est pas utile. Le regard est une porte, garde-la.'),
  m('Qalb','Cadeau Invisible','Prepare un petit geste pour qqn sans qu il sache que c est toi. La generosite cachee est la plus belle.'),
];

// === JOUR 27 : Synthese ===
MISSIONS[27] = [
  m('Djism','Mouvement Libre','15 min de mouvement libre : ce que tu veux, comme tu veux. Le corps a besoin de liberte, pas seulement de routines.'),
  m('Aql','Reflexion sur le Temps','Ecris sur le temps qui passe. Qu as-tu fait de ce mois ? Qu en retiens-tu ? Le temps est la seule ressource non renouvelable.'),
  m('Nafs','Bilan des Forces','Quelles sont TES 3 plus grandes forces interieures ? Dans quelles situations se sont-elles revelees ? Connais-toi toi-meme.'),
  m('Qalb','Gratitude du Chemin','Remercie pour 3 obstacles qui t ont fait grandir ce mois-ci. Sans eux, tu ne serais pas la ou tu es aujourd hui.'),
];

// === JOUR 28 : Preparation ===
MISSIONS[28] = [
  m('Djism','Bilan Corps Final','Fais le meme exercise que jour 1 (scan corporel). Compare. Qu est-ce qui a change ? Le corps garde la memoire du travail accompli.'),
  m('Aql','Bilan Mental Final','Relis tes notes des 27 jours. Quel a ete le plus grand changement dans ta maniere de penser ? Ecris-le comme un tresor.'),
  m('Nafs','Plan d Avenir','Ecris UNE habitude que tu veux GARDER apres le protocole. Comment vas-tu la maintenir ? La transformation durable est un choix quotidien.'),
  m('Qalb','Lettre Finale','Ecris une lettre a TOI-MEME pour le mois prochain. Dis-toi ce dont tu auras besoin, ce que tu as appris. Cette lettre est une boussole.'),
];

// === JOUR 29 : Cloture ===
MISSIONS[29] = [
  m('Djism','Celebration du Corps','Fais quelque chose qui fait du bien a ton corps : bain, marche, sport preferé. Ton corps t a accompagne 29 jours, remercie-le.'),
  m('Aql','Reflexion Finale','Relis TON parcours mental : quels sont les 3 plus grands enseignements ? Ecris-les sur une feuille. Cette feuille est ton heritage.'),
  m('Nafs','Liberte Choisie','Choisis CONSCIEMMENT de faire UNE chose que tu t etais interdite, juste pour montrer que tu as le choix. La maitrise n est pas la privation.'),
  m('Qalb','Partage','Partage ton experience avec qqn de confiance. Dis-lui ce que ce protocole t a apporté. Transmettre, c est multiplier.'),
];

// === JOUR 30 : Renaissance ===
MISSIONS[30] = [
  m('Djism','Fete du Corps','Danse, marche, cours, saute : 30 min de mouvement JOYEUX. Ton corps est vivant, celebre-le !'),
  m('Aql','Vue d Ensemble','Prends 10 min pour contempler le chemin des 30 jours. Tu as change. Mesure la distance entre le jour 1 et aujourd hui.'),
  m('Nafs','Engagement Durable','Choisis TROIS habitudes que tu gardes. Ecris-les. Signe. C est ton pacte avec toi-meme pour la suite.'),
  m('Qalb','Gratitude Universelle','Remercie Allah du fond du coeur pour ces 30 jours. Pour chaque epreuve. Chaque victoire. Chaque leçon. Le protocole est fini, le chemin continue.'),
];"""

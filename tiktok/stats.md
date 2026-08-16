# 📊 Suivi des stats — Campagne Human Matrix / Protocole 30J

Campagne lancée le 3 août 2026. Vidéo publiée chaque matin sur TikTok + YouTube Shorts.
**Chaîne YouTube vérifiée : https://www.youtube.com/@humanmatrix-m9z** (48 shorts au total, ~45 anciens + 3 nouveaux).

## Contexte vérifié le 05/08
- La chaîne existait AVANT la reprise : ~45 shorts publiés janv-fév 2026 (+ mai) — contenu « rappels islamiques + psychologie » (#Shahada #Tawhid #Islam #Psychologie #MentalNation #Éveil), ~12 300 vues cumulées
- → Les 97 abonnés d'avant sont des viewers QUALIFIÉS (public islam+psycho = cible exacte du P30J) ✅

| Date | Jour | TikTok (vues) | Vidéo YouTube | Vues YT | Abonnés YT | Notes |
|------|------|---------------|---------------|---------|------------|-------|
| 03/08 | J1 | 813 | « On a Tous mais on a jamais été aussi malheureux » (titre vérifié chaîne 06/08) | 10 | 97+ | Titre plan initial « Protocole 30J rééquilibre… » (sans hook) — retitré ou remplacé depuis |
| 04/08 | J2 | 811 | « On nous vend la guerre des sexes » | 77 | ~99 | |
| **05/08** | **J3** | **158** | « On nous a dit : vos traditions sont dépassées » | **379** 🚀 | **100** 🎉 | **376 vues le jour même = meilleur démarrage de la chaîne** |
| 06/08 | J4 | 82 | « On te vend l'idée que ton corps te définit. Il t'enferme. » | 90 | ~100 | 90 vues JOUR MÊME (publiée ~12h) — vérifié chaîne |
| 07/08 | J5 | | | | | |
| 08/08 | J6 | | | | | |
| 09/08 | J7 | | | | | |
| 10/08 | J8 | | | | | Début S2 famille |

## Repères
- Nouvelle chaîne : 200-400 vues = moyenne ; ~800 vues dès J1/J2 = excellent
- Décollage attendu J5-J15 : une vidéo > 2 000-5 000 vues
- TikTok : cycle de vie 24-72h ; YouTube Shorts : accumulation 2-6 semaines
- **Le TITRE compte énormément sur YouTube** (SEO, clic) — la J1 titrée uniquement par son CTA fait 7 vues vs 376 pour celle avec un hook choc
- Engagement TikTok ~5-7 % likes/vues ; conversion bio meilleure sur YouTube

## Lecture du 06/08
- **YouTube = la bonne nouvelle** : J4 = 90 vues le jour même sur « On te vend l'idée que ton corps te définit » (vérifié : cette vidéo porte les 90 vues, publiée ~12h). C'est déjà plus que le total J1 et au niveau de J2. La J3 « traditions dépassées » (379) continue d'accumuler — ne jamais juger YT avant 2 semaines. La stratégie titre-hook est validée ✅
- **TikTok : 813 → 811 → 158 → 82**. Cause identifiée (confirmé par Jacques le 06/08) : **J1-J2 publiées le MATIN (800+), J3-J4 à 12h-12h30 (<160)**. Même jour J3, la même vidéo fait 379 vues sur YT → le contenu n'est pas en cause.
  → **TEST EN COURS (J5-J7) : retour à la publication du matin** — rappel cron repassé à 06h00 Mayotte (`0 3 * * *` UTC). Critère : >300 vues = l'horaire était en cause, on garde le matin ; ~100 = normalisation du pool de test, l'horaire n'y est pour rien → on décidera ensuite (12h30 ou autre créneau).
- TikTok cycle 24-72h : J3/J4 peuvent encore grimper un peu.
- **Cron réparé** (06/08) : job `ded0d56b76a3` était en `state: error` (croniter) → re-save du schedule → `next_run_at` recalculé. Puis repassé à `0 3 * * *` = **06h00 Mayotte** pour le test horaire du matin. Voir skill campagne-tiktok §Pitfall.
- **Script youtube_channel_check.py corrigé** (06/08) : bug URL `https://www.youtube.com@handle/shorts` (le `@` était lu comme identifiants → DNS error) + retries sur fetch. Vérif chaîne fonctionnelle : total ~12 862 vues cumulées.

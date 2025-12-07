# 📋 Plan Complet - Site de Présentation de Mods SCW2

## 🎯 Vue d'Ensemble

Création d'un micro site statique pour présenter tous les mods disponibles pour Strip Club Wars 2, hébergé gratuitement sur GitHub Pages avec un workflow de maintenance simple.

---

## 🏗️ Architecture Technique

### Stack Recommandé
- **HTML5** sémantique et accessible
- **CSS3** avec Grid/Flexbox pour le layout responsive  
- **JavaScript Vanilla** pour l'interactivité (recherche, filtres)
- **JSON** pour stocker les données des mods
- **GitHub Pages** pour l'hébergement gratuit

### Avantages
- ✅ **Gratuit** : Hébergement GitHub Pages sans coût
- ✅ **Simple** : Pas de dépendances complexes
- ✅ **Maintenable** : Structure claire et documentation
- ✅ **Scalable** : Facile d'ajouter de nouveaux mods
- ✅ **Versionné** : Git pour suivre les modifications

---

## 📁 Structure du Repository

```
scw2-mods-showcase/
├── index.html              # Page principale
├── css/
│   ├── style.css          # Styles principaux
│   └── components.css     # Styles des composants
├── js/
│   ├── app.js             # Logique principale
│   ├── data.js            # Données des mods
│   └── utils.js           # Fonctions utilitaires
├── data/
│   └── mods.json          # Structure de données centralisée
├── assets/
│   ├── images/
│   │   ├── mods/          # Screenshots des mods
│   │   └── ui/            # Icônes et éléments UI
│   └── icons/             # Icônes catégories
├── README.md              # Documentation du projet
├── .gitignore            # Fichiers ignorés
└── CONTRIBUTING.md        # Guide pour contributeurs
```

---

## 📊 Structure de Données Optimisée

### Fichier `data/mods.json`

```json
{
  "site": {
    "title": "SCW2 Mods Showcase",
    "description": "Collection complète des mods pour Strip Club Wars 2",
    "version": "1.0.0",
    "lastUpdated": "2025-01-15"
  },
  "categories": [
    {"id": "gameplay", "name": "Gameplay", "icon": "🎮"},
    {"id": "graphics", "name": "Graphismes", "icon": "🎨"},
    {"id": "interface", "name": "Interface", "icon": "🖥️"},
    {"id": "audio", "name": "Audio", "icon": "🔊"},
    {"id": "utility", "name": "Utilitaires", "icon": "🛠️"}
  ],
  "mods": [
    {
      "id": "varied_dialogues",
      "name": "Varied Dialogues",
      "slug": "varied-dialogues",
      "version": "0.1",
      "author": "TonNom",
      "description": "Transforme les dialogues sexuels répétitifs en système psychologique dynamique avec 400+ variations.",
      "longDescription": "Système complet qui analyse les personnalités des NPCs pour générer des dialogues uniques basés sur leurs traits psychologiques, préférences et relation avec le joueur.",
      "category": "gameplay",
      "tags": ["dialogue", "psychologie", "ia", "rp"],
      "status": "stable",
      "compatibility": {
        "gameVersion": "1.0+",
        "dependencies": [],
        "conflicts": []
      },
      "features": [
        "400+ variations dialogues",
        "Système psychologique avancé", 
        "Apprentissage automatique",
        "Contexte dynamique"
      ],
      "media": {
        "screenshots": ["varied-dialogues-1.jpg", "varied-dialogues-2.jpg"],
        "video": null,
        "icon": "varied-dialogues-icon.png"
      },
      "links": {
        "download": "https://github.com/tonrepo/varied_dialogues/releases",
        "source": "https://github.com/tonrepo/varied_dialogues",
        "docs": "https://github.com/tonrepo/varied_dialogues/wiki",
        "issues": "https://github.com/tonrepo/varied_dialogues/issues"
      },
      "stats": {
        "downloads": 150,
        "stars": 12,
        "lastUpdate": "2025-01-10"
      },
      "installation": "Décompresser dans le dossier mods du jeu",
      "changelog": [
        {"version": "0.1", "date": "2025-01-10", "changes": ["Version initiale", "Système psychologique complet"]}
      ]
    }
  ]
}
```

---

## 🎨 Design et UX

### Style Visuel
- **Thème** : Gaming moderne avec fond sombre
- **Palette** : 
  - Fond : `#0a0a0a` (noir profond)
  - Cards : `#1a1a1a` (gris foncé)
  - Accents : `#00ff88` (néon vert)
  - Texte : `#ffffff` (blanc)
- **Typographie** : Inter ou Roboto (lisible, moderne)
- **Animations** : Hover effects, transitions fluides

### Layout Responsive
- **Mobile-first** approach
- **CSS Grid** pour la structure principale
- **Flexbox** pour les composants
- **Breakpoints** : 320px, 768px, 1024px, 1440px

### Pages/Sections
1. **Header** : Logo, recherche, navigation
2. **Filtres** : Catégories, statuts, tags
3. **Grille de Cards** : Preview des mods avec images
4. **Modal Détaillé** : Informations complètes du mod
5. **Footer** : Liens, crédits, informations

---

## ⚡ Fonctionnalités JavaScript

### Core Features
- **Recherche instantanée** dans noms et descriptions
- **Filtres multi-critères** (catégorie, statut, tags)
- **Tri** par nom, date, popularité
- **Modal interactif** avec galerie d'images
- **URL sharing** avec paramètres de filtre
- **Lazy loading** des images pour performance
- **LocalStorage** pour préférences utilisateur

### Interactions
- **Hover effects** sur les cards
- **Smooth scrolling** entre sections
- **Keyboard navigation** (accessibilité)
- **Touch gestures** pour mobile

---

## 🚀 Processus de Déploiement

### Configuration Initiale
1. **Créer compte GitHub** dédié (ex: `scw2-mods`)
2. **Créer repository** `scw2-mods.github.io`
3. **Cloner localement** pour développement
4. **Développer** le site avec la structure définie
5. **Push vers GitHub** pour déploiement automatique
6. **Configurer GitHub Pages** dans Settings > Pages

### Workflow d'Ajout de Mod
```bash
# 1. Ajouter les screenshots
git add assets/images/mods/nouveau-mod-*.jpg

# 2. Mettre à jour data/mods.json avec les infos du nouveau mod
# 3. Commit et push
git commit -m "Ajout du mod: Nom du Mod"
git push origin main

# 4. Déploiement automatique en 2-3 minutes sur GitHub Pages
```

### URL Finale
- **Site** : `https://scw2-mods.github.io`
- **Personnalisé** : Possibilité d'ajouter un domaine custom

---

## 📝 Questions de Décision

### À Définir Avant Développement
1. **Nom du compte GitHub** : 
   - `scw2-mods` ✅ (recommandé)
   - `stripclubwars2-mods`
   - Autre ?

2. **Style visuel** :
   - Gaming sombre avec néon ✅ (recommandé)
   - Plus professionnel/propre
   - Thème spécifique

3. **Fonctionnalités avancées** :
   - Stats de téléchargement
   - Système de notation
   - Commentaires utilisateurs
   - Notifications mises à jour

4. **Domaine personnalisé** :
   - `.github.io` gratuit ✅ (recommandé)
   - Domaine `.fr` payant
   - Sous-domaine existant

---

## 🎯 Prochaines Étapes

### Phase 1 : Infrastructure (Jour 1-2)
- [ ] Créer compte GitHub dédié
- [ ] Initialiser le repository avec structure de base
- [ ] Configurer GitHub Pages
- [ ] Mettre en place le HTML de base

### Phase 2 : Développement Core (Jour 3-5)
- [ ] Développer le CSS du design principal
- [ ] Implémenter les cards et la grille responsive
- [ ] Créer le système de filtres et recherche
- [ ] Développer le modal détaillé

### Phase 3 : Contenu (Jour 6-7)
- [ ] Ajouter les premiers mods (dont Varied Dialogues)
- [ ] Créer les screenshots et assets
- [ ] Rédiger la documentation
- [ ] Tester l'ensemble

### Phase 4 : Lancement (Jour 8)
- [ ] Déploiement final
- [ ] Test complet sur mobile/desktop
- [ ] Communication du site

---

## 📊 Maintenance Future

### Mises à Jour Simples
- **Ajout mod** : Modifier `data/mods.json` + assets + commit
- **Mise à jour mod** : Changer les infos dans le JSON
- **Suppression mod** : Retirer l'entrée du JSON

### Évolutions Possibles
- **API automatique** pour récupérer les infos depuis GitHub
- **Système de notation** intégré
- **Commentaires** utilisateurs
- **Stats détaillées** de téléchargement

---

## 🎉 Résultat Attendu

Un site professionnel, moderne et performant présentant tous les mods SCW2 avec :
- **Design attractif** et responsive
- **Navigation intuitive** avec recherche/filtres
- **Informations complètes** pour chaque mod
- **Maintenance simple** via Git
- **Hébergement gratuit** et fiable

*Ce plan servira de référence tout au long du développement du projet.*
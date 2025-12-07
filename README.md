# 🎮 SCW2 Mods Showcase

> Collection complète des mods pour Strip Club Wars 2

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://scw2mods.github.io)

## 📋 À Propos

Site web statique moderne présentant tous les mods disponibles pour **Strip Club Wars 2**. Ce projet offre une interface intuitive pour découvrir, rechercher et télécharger des mods créés par la communauté.

**🔗 Site en ligne :** [https://scw2mods.github.io](https://scw2mods.github.io)

## ✨ Fonctionnalités

- 🔍 **Recherche instantanée** - Trouvez rapidement le mod que vous cherchez
- 🏷️ **Filtres par catégorie** - Gameplay, Graphismes, Interface, Audio, Utilitaires
- 📊 **Tri multiple** - Par nom, date ou popularité
- 📱 **Design responsive** - Fonctionne parfaitement sur mobile, tablette et desktop
- ⚡ **Performance optimisée** - Chargement rapide avec lazy loading des images
- 🎨 **Interface moderne** - Design gaming sombre avec accents néon
- 🔗 **Partage facile** - URLs avec paramètres pour partager filtres et mods

## 🛠️ Stack Technique

- **HTML5** - Structure sémantique et accessible
- **CSS3** - Grid/Flexbox pour layout responsive
- **JavaScript Vanilla** - Pas de dépendances, code léger
- **JSON** - Stockage des données des mods
- **GitHub Pages** - Hébergement gratuit et fiable

## 📁 Structure du Projet

```
scw-mods/
├── index.html              # Page principale
├── css/
│   ├── style.css          # Styles principaux
│   └── components.css     # Styles des composants
├── js/
│   ├── app.js             # Logique principale
│   ├── data.js            # Gestion des données
│   └── utils.js           # Fonctions utilitaires
├── data/
│   └── mods.json          # Base de données des mods
├── assets/
│   ├── images/            # Images et screenshots
│   └── icons/             # Icônes
├── README.md              # Documentation
├── CONTRIBUTING.md        # Guide de contribution
└── .gitignore            # Fichiers ignorés
```

## 🚀 Installation & Développement Local

### Prérequis

- Un serveur web local (ex: Live Server pour VS Code, Python SimpleHTTPServer, etc.)
- Git

### Cloner le projet

```bash
git clone https://github.com/scw2mods/scw2mods.github.io.git
cd scw2mods.github.io
```

### Lancer en local

**Option 1 : VS Code Live Server**
1. Installer l'extension "Live Server"
2. Clic droit sur `index.html` → "Open with Live Server"

**Option 2 : Python**
```bash
# Python 3
python -m http.server 8000

# Puis ouvrir http://localhost:8000
```

**Option 3 : Node.js**
```bash
npx http-server -p 8000
```

## 📝 Ajouter un Nouveau Mod

### 1. Préparer les assets

Ajouter les screenshots du mod dans `assets/images/mods/` :
```
assets/images/mods/
├── mon-mod-1.jpg
├── mon-mod-2.jpg
└── mon-mod-icon.png
```

### 2. Modifier data/mods.json

Ajouter une entrée dans le tableau `mods` :

```json
{
  "id": "mon_mod",
  "name": "Mon Super Mod",
  "slug": "mon-super-mod",
  "version": "1.0",
  "author": "VotreNom",
  "description": "Description courte du mod (max 150 caractères)",
  "longDescription": "Description détaillée expliquant toutes les fonctionnalités...",
  "category": "gameplay",
  "tags": ["tag1", "tag2", "tag3"],
  "status": "stable",
  "compatibility": {
    "gameVersion": "1.0+",
    "dependencies": [],
    "conflicts": []
  },
  "features": [
    "Fonctionnalité 1",
    "Fonctionnalité 2",
    "Fonctionnalité 3"
  ],
  "media": {
    "screenshots": ["mon-mod-1.jpg", "mon-mod-2.jpg"],
    "video": null,
    "icon": "mon-mod-icon.png"
  },
  "links": {
    "download": "https://github.com/user/repo/releases",
    "source": "https://github.com/user/repo",
    "docs": "https://github.com/user/repo/wiki",
    "issues": "https://github.com/user/repo/issues"
  },
  "stats": {
    "downloads": 0,
    "stars": 0,
    "lastUpdate": "2025-12-07"
  },
  "installation": "Instructions d'installation...",
  "changelog": [
    {
      "version": "1.0",
      "date": "2025-12-07",
      "changes": ["Version initiale"]
    }
  ]
}
```

### 3. Tester localement

Vérifier que le mod s'affiche correctement en local avant de commit.

### 4. Commit et push

```bash
git add .
git commit -m "Ajout du mod: Mon Super Mod"
git push origin main
```

Le site sera automatiquement mis à jour sur GitHub Pages en 2-3 minutes.

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `css/style.css` via les variables CSS :

```css
:root {
    --color-bg-dark: #0a0a0a;      /* Fond principal */
    --color-bg-card: #1a1a1a;      /* Fond des cards */
    --color-accent: #00ff88;        /* Couleur d'accent */
    --color-text: #ffffff;          /* Texte principal */
    --color-text-muted: #a0a0a0;   /* Texte secondaire */
}
```

### Catégories

Modifier les catégories dans `data/mods.json` :

```json
"categories": [
  {"id": "nouvelle_categorie", "name": "Nouvelle Catégorie", "icon": "🎯"}
]
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails.

### Comment contribuer

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📜 License

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus d'informations.

## 👥 Auteurs

- **SCW2 Community** - *Développement initial*

## 🙏 Remerciements

- Tous les créateurs de mods de la communauté SCW2
- Les contributeurs du projet
- La communauté open source

## 📞 Support

- 🐛 **Signaler un bug** : [Issues](https://github.com/scw2mods/scw2mods.github.io/issues)
- 💬 **Discussions** : [Discussions](https://github.com/scw2mods/scw2mods.github.io/discussions)
- 📧 **Email** : contact@scw2mods.fr

---

**Fait avec ❤️ par la communauté SCW2**

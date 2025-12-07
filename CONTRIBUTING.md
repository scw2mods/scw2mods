# 🤝 Guide de Contribution

Merci de ton intérêt pour contribuer au **SCW2 Mods Showcase** ! Ce document explique comment participer au projet.

## 📋 Table des Matières

- [Code de Conduite](#code-de-conduite)
- [Comment Contribuer](#comment-contribuer)
- [Ajouter un Mod](#ajouter-un-mod)
- [Signaler un Bug](#signaler-un-bug)
- [Proposer une Fonctionnalité](#proposer-une-fonctionnalité)
- [Standards de Code](#standards-de-code)
- [Processus de Pull Request](#processus-de-pull-request)

## 📜 Code de Conduite

En participant à ce projet, tu acceptes de respecter notre code de conduite :

- 🤝 Être respectueux envers tous les contributeurs
- 💬 Communiquer de manière constructive
- 🎯 Rester concentré sur l'amélioration du projet
- ❤️ Accueillir les nouvelles personnes avec bienveillance

## 🚀 Comment Contribuer

Il existe plusieurs façons de contribuer :

1. **Ajouter un mod** - Partage tes créations ou celles d'autres créateurs
2. **Corriger des bugs** - Aide à améliorer le site
3. **Proposer des améliorations** - Nouvelles fonctionnalités ou optimisations
4. **Améliorer la documentation** - Rendre le projet plus accessible
5. **Design & UX** - Proposer des améliorations visuelles

## 📦 Ajouter un Mod

### Prérequis

- Le mod doit être compatible avec Strip Club Wars 2
- Le mod doit être hébergé sur un repository Git public (GitHub recommandé)
- Tu dois avoir des screenshots de qualité du mod
- Le mod doit être stable ou clairement marqué comme beta/alpha

### Étapes

#### 1. Fork le projet

```bash
git clone https://github.com/scw2mods/scw2mods.github.io.git
cd scw2mods.github.io
```

#### 2. Créer une branche

```bash
git checkout -b add-mod/nom-du-mod
```

#### 3. Ajouter les assets

Place tes screenshots dans `assets/images/mods/` :

**Format recommandé :**
- Format : JPG ou PNG
- Résolution : 1920x1080 ou 1280x720
- Poids : < 500 KB par image (optimisé)
- Nommage : `nom-du-mod-1.jpg`, `nom-du-mod-2.jpg`, etc.

```bash
cp mes-screenshots/*.jpg assets/images/mods/
```

#### 4. Modifier data/mods.json

Ajoute ton mod dans le tableau `mods` en respectant la structure :

```json
{
  "id": "nom_unique_du_mod",
  "name": "Nom Affiché du Mod",
  "slug": "nom-du-mod",
  "version": "1.0.0",
  "author": "Ton Pseudo",
  "description": "Description courte (max 150 caractères) pour la card",
  "longDescription": "Description détaillée complète expliquant ce que fait le mod, ses fonctionnalités principales, etc.",
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
    "screenshots": ["nom-du-mod-1.jpg", "nom-du-mod-2.jpg"],
    "video": null,
    "icon": null
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
  "installation": "Étapes d'installation claires et concises",
  "changelog": [
    {
      "version": "1.0.0",
      "date": "2025-12-07",
      "changes": ["Version initiale", "Autre changement"]
    }
  ]
}
```

**Champs obligatoires :**
- `id` : Identifiant unique (snake_case)
- `name` : Nom du mod
- `version` : Version actuelle
- `author` : Nom de l'auteur
- `description` : Description courte
- `longDescription` : Description détaillée
- `category` : Une des catégories (`gameplay`, `graphics`, `interface`, `audio`, `utility`)
- `status` : État du mod (`stable`, `beta`, `alpha`)
- `links.download` : Lien de téléchargement

#### 5. Valider le JSON

Vérifie que ton JSON est valide :
- Utilise un validateur JSON en ligne
- Teste le site en local

#### 6. Tester localement

```bash
# Lance un serveur local
python -m http.server 8000

# Ouvre http://localhost:8000
# Vérifie que ton mod s'affiche correctement
```

#### 7. Commit et Push

```bash
git add .
git commit -m "feat: Ajout du mod [Nom du Mod]"
git push origin add-mod/nom-du-mod
```

#### 8. Créer une Pull Request

- Va sur GitHub
- Clique sur "New Pull Request"
- Remplis le template avec les informations du mod
- Attends la review

### Template de Pull Request

```markdown
## Ajout du mod : [Nom du Mod]

### Informations
- **Nom** : Nom du Mod
- **Version** : 1.0.0
- **Auteur** : Ton Pseudo
- **Catégorie** : Gameplay

### Description
Brève description de ce que fait le mod.

### Checklist
- [ ] Screenshots ajoutés et optimisés
- [ ] JSON valide testé
- [ ] Testé en local
- [ ] Tous les liens fonctionnent
- [ ] Description claire et sans fautes
```

## 🐛 Signaler un Bug

### Avant de signaler

- Vérifie que le bug n'a pas déjà été signalé
- Teste sur plusieurs navigateurs si possible
- Rassemble les informations nécessaires

### Créer une Issue

Utilise le [template de bug report](https://github.com/scw2mods/scw2mods.github.io/issues/new?template=bug_report.md) :

```markdown
**Description du bug**
Description claire du problème.

**Pour reproduire**
1. Va sur '...'
2. Clique sur '...'
3. Scroll jusqu'à '...'
4. Voir l'erreur

**Comportement attendu**
Ce qui devrait se passer normalement.

**Screenshots**
Si applicable, ajoute des screenshots.

**Environnement:**
 - OS: [ex: Windows 11]
 - Navigateur: [ex: Chrome 120]
 - Version: [ex: 1.0.0]
```

## 💡 Proposer une Fonctionnalité

### Créer une Feature Request

Utilise le [template de feature request](https://github.com/scw2mods/scw2mods.github.io/issues/new?template=feature_request.md) :

```markdown
**Problème rencontré**
Description du problème que cette fonctionnalité résoudrait.

**Solution proposée**
Description claire de ce que tu aimerais voir implémenté.

**Alternatives considérées**
Autres solutions possibles auxquelles tu as pensé.

**Contexte additionnel**
Tout autre contexte ou screenshots.
```

## 📐 Standards de Code

### HTML

- Utiliser HTML5 sémantique
- Respecter l'accessibilité (ARIA labels, alt texts)
- Indentation : 4 espaces
- Balises en minuscules

### CSS

- Suivre la convention BEM pour les classes
- Variables CSS pour les valeurs réutilisables
- Mobile-first approach
- Commenter les sections importantes
- Indentation : 4 espaces

```css
/* ✅ Bon */
.mod-card {
    background-color: var(--color-bg-card);
}

.mod-card__title {
    font-size: 1.25rem;
}

.mod-card--featured {
    border-color: var(--color-accent);
}

/* ❌ Mauvais */
.modCard {
    background: #1a1a1a;
}
```

### JavaScript

- ES6+ moderne
- Nommage descriptif en camelCase
- Commenter les fonctions complexes
- Pas de `var`, utiliser `const` et `let`
- Indentation : 4 espaces

```javascript
// ✅ Bon
const formatModDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
};

// ❌ Mauvais
var fmt = function(d) {
    return new Date(d).toLocaleDateString('fr-FR');
}
```

### JSON

- Respecter la structure existante
- Indentation : 2 espaces
- Pas de trailing commas
- Valider avec un validateur JSON

## 🔄 Processus de Pull Request

### Checklist avant PR

- [ ] Code testé localement
- [ ] Pas de console.log() oubliés
- [ ] Screenshots optimisés (< 500 KB)
- [ ] JSON valide
- [ ] Commit messages clairs
- [ ] Branche à jour avec `main`

### Convention de commit

Utilise [Conventional Commits](https://www.conventionalcommits.org/) :

```
feat: Ajout du mod Super Combat
fix: Correction du filtre par catégorie
docs: Mise à jour du README
style: Amélioration du responsive mobile
refactor: Optimisation du code de recherche
perf: Amélioration des performances de chargement
```

### Review Process

1. **Soumission** : Tu crées une PR
2. **Review** : Un mainteneur review ton code
3. **Feedback** : Des modifications peuvent être demandées
4. **Approval** : La PR est approuvée
5. **Merge** : Ton code est intégré au projet
6. **Deploy** : Le site est automatiquement mis à jour

### Temps de réponse

- Reviews : 1-3 jours ouvrés
- Feedback : 1-2 jours ouvrés
- Merge : Immédiat après approval

## ❓ Questions

Si tu as des questions :

- 💬 [Discussions GitHub](https://github.com/scw2mods/scw2mods.github.io/discussions)
- 🐛 [Issues](https://github.com/scw2mods/scw2mods.github.io/issues)

## 🙏 Merci

Merci de prendre le temps de contribuer à SCW2 Mods Showcase ! Chaque contribution, aussi petite soit-elle, est précieuse. ❤️

---

**Fait avec ❤️ par la communauté SCW2**

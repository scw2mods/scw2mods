# 🚀 Prochaines Étapes

Le site **SCW2 Mods Showcase** est maintenant prêt ! Voici les étapes pour le déployer et le personnaliser.

## ✅ Ce qui est fait

- ✅ Structure complète du projet
- ✅ HTML sémantique et accessible
- ✅ CSS avec design gaming sombre et néon
- ✅ JavaScript pour recherche, filtres et modal
- ✅ Système de données JSON
- ✅ Mod "Varied Dialogues" en exemple
- ✅ Documentation complète (README + CONTRIBUTING)
- ✅ .gitignore configuré

## 📋 Prochaines Étapes

### 1. Tester en Local (MAINTENANT)

Teste le site localement pour vérifier que tout fonctionne :

```bash
# Avec Python 3
python -m http.server 8000

# Puis ouvre http://localhost:8000 dans ton navigateur
```

**À vérifier :**
- [ ] Le site se charge sans erreur
- [ ] Le mod Varied Dialogues s'affiche
- [ ] La recherche fonctionne
- [ ] Les filtres par catégorie fonctionnent
- [ ] Le tri fonctionne
- [ ] La modal s'ouvre au clic sur un mod
- [ ] Le design est correct
- [ ] Le responsive fonctionne (teste en mode mobile)

### 2. Créer le Repository GitHub

**Option recommandée : Repository utilisateur**
```bash
# Crée un repo nommé : scw2mods.github.io
# URL du site sera : https://scw2mods.github.io
```

**Étapes :**
1. Va sur https://github.com/new
2. Nom du repo : `scw2mods.github.io` (EXACTEMENT ce nom)
3. Description : "Collection complète des mods pour Strip Club Wars 2"
4. Public ✅
5. Ne pas initialiser avec README (on l'a déjà)
6. Crée le repository

### 3. Pousser le Code sur GitHub

```bash
cd /home/thomas/projets/scw-mods

# Initialiser git si pas déjà fait
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "feat: Initial commit - SCW2 Mods Showcase

- Structure complète du site
- Design gaming sombre avec néon
- Système de recherche et filtres
- Mod Varied Dialogues en exemple
- Documentation complète"

# Ajouter le remote
git remote add origin git@github.com:scw2mods/scw2mods.github.io.git

# Pousser sur GitHub
git push -u origin main
```

**Note :** Si GitHub utilise encore `master` au lieu de `main`, remplace `main` par `master` ou renomme ta branche :
```bash
git branch -M main
```

### 4. Activer GitHub Pages

1. Va sur le repo GitHub
2. Settings → Pages (dans le menu de gauche)
3. Source : Deploy from a branch
4. Branch : `main` (ou `master`) → `/root`
5. Save

**Attends 2-3 minutes**, puis ton site sera en ligne sur :
**https://scw2mods.github.io**

### 5. Ajouter des Assets (Images)

Le site fonctionne avec des placeholders, mais pour un meilleur rendu :

**Favicon :**
```bash
# Crée ou télécharge un favicon 64x64
# Place-le dans assets/icons/favicon.png
```

**Screenshots du mod :**
```bash
# Si tu as des screenshots pour Varied Dialogues
cp mes-screenshots/*.jpg assets/images/mods/

# Mets à jour data/mods.json :
# "screenshots": ["varied-dialogues-1.jpg", "varied-dialogues-2.jpg"]
```

### 6. Personnalisations Optionnelles

**Modifier les couleurs :**
Édite `css/style.css` (lignes 8-15) :
```css
:root {
    --color-accent: #00ff88;  /* Change cette couleur */
}
```

**Ajouter Google Analytics (optionnel) :**
Ajoute avant `</head>` dans `index.html` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 7. Ajouter Plus de Mods

Quand tu veux ajouter un nouveau mod :

1. Prépare les screenshots
2. Édite `data/mods.json`
3. Ajoute une nouvelle entrée dans le tableau `mods`
4. Commit et push :

```bash
git add .
git commit -m "feat: Ajout du mod [Nom du Mod]"
git push
```

Le site sera automatiquement mis à jour en 2-3 minutes.

## 🐛 Résolution de Problèmes

### Le site ne se charge pas en local
- Vérifie que le serveur Python tourne
- Ouvre la console du navigateur (F12) pour voir les erreurs
- Vérifie que tous les chemins de fichiers sont corrects

### GitHub Pages ne fonctionne pas
- Attends 5-10 minutes (première activation)
- Vérifie que le repository est bien PUBLIC
- Vérifie le nom : doit être `scw2mods.github.io`
- Va dans Settings → Pages pour voir les erreurs

### Le JSON ne se charge pas
- Valide ton JSON sur https://jsonlint.com/
- Vérifie qu'il n'y a pas de trailing commas
- Vérifie que tous les guillemets sont corrects

### Images ne s'affichent pas
- Vérifie les chemins dans `data/mods.json`
- Vérifie que les images existent dans `assets/images/mods/`
- Vérifie les noms de fichiers (sensible à la casse)

## 📞 Support

Si tu rencontres un problème :
1. Vérifie la console du navigateur (F12)
2. Lis les erreurs
3. Vérifie les fichiers concernés
4. Si besoin, demande de l'aide

## 🎉 Félicitations !

Une fois en ligne, ton site sera accessible à tous sur **https://scw2mods.github.io** !

N'hésite pas à :
- Partager le lien avec la communauté
- Ajouter de nouveaux mods
- Proposer des améliorations
- Contribuer au projet

**Bon lancement ! 🚀**

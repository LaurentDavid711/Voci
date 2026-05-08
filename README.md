# 🎶 Site Voci in Scena – Guide d’utilisation

Ce document explique comment modifier et mettre à jour le site internet de l’ensemble vocal **Voci in Scena**.


---

# 🌐 Accès au site

Le site est actuellement hébergé ici :
👉 https://laurentdavid711.github.io/voci-in-scena/

---

# 📁 Structure du projet

Voici les fichiers principaux :

* `index.html` → page d’accueil
* `directeurMusical.html` → page du chef de chœur
* `nousContacter.html` → page de contact
* `testrepertoire.html` → répertoire
* `styles.css` → design (couleurs, tailles, mise en page)
* `js/sidebar.js` → contenu dynamique du bandeau latéral
* `concerts.json` → informations sur les concerts
* `images/` → toutes les images du site

---

# ✏️ Modifier le contenu

## 🎯 Modifier le prochain concert

Le prochain concert affiché dans le bandeau latéral est défini dans :

👉 `concerts.json`

Exemple :

```json
{
  "date": "30 mai",
  "location": "Temple protestant du Foyer de l'Âme, 19h30",
  "program": "Brahms 'Sehnsucht'",
  "details": "<a href=\"https://maps...\">Localisation</a>"
}
```



## 📝 Modifier le texte d’une page

1. Ouvrir le fichier (ex : `index.html`)
2. Modifier directement le texte
3. Enregistrer

Exemple :

```html
<h1>Prochain concert</h1>
```



## 🖼️ Ajouter ou modifier une image

1. Ajouter l’image dans le dossier :

```
images/
```

2. L’utiliser dans une page :

```html
<img src="images/mon_image.jpg">
```


# 📬 Formulaire de contact

Le formulaire utilise **FormSubmit**.

Pour changer l’email :

Dans `nousContacter.html`, modifier :

```html
<form action="https://formsubmit.co/EMAIL">
```

---

# 💻 Tester le site en local

Avant de publier, on peut tester les modifications en local:

Dans le terminal :

```bash
python3 -m http.server 8000
```

Puis ouvrir dans le navigateur :

👉 http://localhost:8000

---

# 🚀 Mettre le site en ligne (Git)

## Étapes pour publier

Dans le terminal, à la racine du projet :

```bash
git add .
git commit -m "mise à jour du site"
git push
```

## Ce que ça fait

* `git add .` → prépare les modifications
* `git commit` → enregistre les modifications
* `git push` → envoie sur GitHub

👉 Le site est mis à jour automatiquement (1 à 2 minutes)

---

# ⚠️ Problèmes fréquents

## ❌ L’image ne s’affiche pas

* Vérifier le chemin (`images/...`)
* Vérifier le nom du fichier

---

## ❌ Le site ne se met pas à jour

* Attendre 1 à 2 minutes
* Vérifier que `git push` a bien fonctionné

---

## ❌ Un lien ne marche pas

* Vérifier `href="..."`

---

## ❌ Le formulaire ne redirige pas correctement

* Vérifier :

```html
<input type="hidden" name="_next" value="merci.html">
```

---


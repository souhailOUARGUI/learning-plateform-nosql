# Learning Platform NoSQL

Une API backend pour une plateforme d'apprentissage en ligne utilisant une base de données NoSQL.

## Voici la documentation de cet API:

https://documenter.getpostman.com/view/25064146/2sAYJAfyTH
<!--
## Table des matières

- [Installation](#installation)
- [Configuration](#configuration)
- [Structure du projet](#structure-du-projet)
- [Choix techniques](#choix-techniques)
- [Réponses aux questions](#réponses-aux-questions)
- [API Endpoints](#api-endpoints)
- [Captures d'écran](#captures-décran)
-->
## Installation

```bash
# Cloner le projet
git clone https://github.com/souhailOUARGUI/learning-plateform-nosql.git

# Installer les dépendances
npm install

# Démarrer le serveur en mode développement
npm run dev
```

## Configuration

1. Créez un fichier `.env` à la racine du projet
2. Ajoutez les variables d'environnement suivantes :

```env
PORT=3000
MONGODB_URI=votre_uri_mongodb
```

## Structure du projet

```
├── src/
│   ├── config/          # Configuration de l'application
│   ├── controllers/     # Contrôleurs
│   ├── middleware/      # Middleware personnalisés
│   ├── models/         # Modèles de données
│   ├── routes/         # Routes de l'API
│   ├── services/       # Logique métier
│   └── utils/          # Utilitaires
└── server.js          # Point d'entrée de l'application
```

<!--
## Réponses aux questions

[À COMPLETER]
Ici les questions des commentaires et les réponses détaillées:

### Question 1: [Titre de la question]

[ réponse détaillée]

### Question 2: [Titre de la question]

[ réponse détaillée]
-->

## Auteur

Souhail OUARGUI

<!--
## Licence

Ce projet est sous licence [choisissez votre licence] -->

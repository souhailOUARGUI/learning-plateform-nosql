// Question: Comment organiser le point d'entrée de l'application ?

// --> suivre ces etapes :
// - importation des dependences essentielles
// - Validation des des variables d'env
// - initialisation de l'app express
// - configuration des middlwares
// - importation des routes
// - Separer la configuration du serveur et son demarrage

// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
/* --> Séparer la création du serveur de son démarrage
  - Gérer la connexion à la base de données avant de démarrer le serveur
  - Mettre en place des gestionnaires pour arrêt propre
  - Utiliser des messages de log clairs pour le statut du serveur
  -Gérer les erreurs de démarrage */

const express = require("express");
const config = require("./config/env");
const db = require("./config/db");
const bodyParser = require("body-parser");

const courseRoutes = require("./routes/courseRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

async function startServer() {
  try {
    // TODO: Initialiser les connexions aux bases de données
    db.connectMongo();
    db.connectRedis();

    // TODO: Configurer les middlewares Express
    app.use(bodyParser.json());

    // TODO: Monter les routes
    app.use("/courses", courseRoutes);
    app.use("/students", studentRoutes);

    // TODO: Démarrer le serveur
    app.listen(config.port, () => {
      console.log(`Server Started, Listening to port ${config.port} `);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on("SIGTERM", async () => {
  // TODO: Implémenter la fermeture propre des connexions
  console.log("Fermeture des connexionns!!!");
  await db.db.close();
  process.exit(0);
});

startServer();

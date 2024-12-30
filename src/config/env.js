// Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
// Réponse : -> Faciliter le débogage en fournissant des messages d'erreur clairs dès le début
// -> Détecter immédiatement les erreurs de configuration plutôt qu'en cours d'exécution
// -> Assurer que toutes les informations nécessaires (connexion DB, clés API) sont présentes

// Question: Que se passe-t-il si une variable requise est manquante ?
// Réponse : -> Des erreurs d'exécution inattendues au moment où l'application tente d'utiliser la variable
// -> L'application refuse de démarrer

const dotenv = require("dotenv");
dotenv.config();

const requiredEnvVars = ["MONGODB_URI", "MONGODB_DB_NAME", "REDIS_URI"];

// Validation des variables d'environnement
function validateEnv() {
  // TODO: Implémenter la validation
  // Si une variable manque, lever une erreur explicative
  for (const variable in requiredEnvVars) {
    if (!process.env[variable]) {
      throw new Error(
        `La variable d'environnement ${variable} est manquante!!`
      );
    }
  }
}

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME,
  },
  redis: {
    uri: process.env.REDIS_URI,
  },
  port: process.env.PORT || 3000,
};

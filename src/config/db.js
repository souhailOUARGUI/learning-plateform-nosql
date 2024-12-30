// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : c'est bien pour centraliser la logique de connexion à un seul endroit, ainsi que ca permet la réutilisabilité de la meme connection dans differentes parties de l'application

// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : -> On doit tout d'abord écouter les signaux de fermeture de l'application (SIGTERM, SIGINT)
// -> et après on ferme les connexions avant l'arret de l'app

const { MongoClient } = require("mongodb");
const redis = require("redis");
const config = require("./env");

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  // Gérer les erreurs et les retries
  mongoClient = new MongoClient(config.mongodb.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoClient.connect((err) => {
    if (err) {
      console.error("MongoDB Connection error", err);
      process.exit(1);
    }
    db = mongoClient.db(config.mongodb.dbName);
    console.log("Connected to db");
  });
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  redisClient = redis.createClient();
  redisClient.on("error", (err) => {
    console.error("Redis error: ", err);
  });
}

// Export des fonctions et clients
module.exports = {
  // TODO: Exporter les clients et fonctions utiles
  connectMongo,
  connectRedis,
  db,
};

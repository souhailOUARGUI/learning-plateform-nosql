// Question: Pourquoi créer des services séparés ?
// Réponse: -> Isoler la logique métier des contrôleurs
//  -> Respecter le principe de responsabilité unique (Single Responsibility)
// -> Faciliter la réutilisation du code entre différentes parties de l'application

const { ObjectId } = require("mongodb");

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
  let doc;
  if (!ObjectId.isValid(id)) {
    throw new Error("Id invalid");
  }
  try {
    doc = await collection.findById(id);
    if (doc == null) {
      console.error("Object not found");
      throw new Error("Doc non trouvé");
    }
    return doc;
  } catch (error) {
    throw error;
  }
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  findOneById,
};

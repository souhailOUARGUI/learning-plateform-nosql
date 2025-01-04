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

async function findAll(collection) {
  const docs = await collection.find();
  return docs;
}

async function destroy(req, res, collection, id) {
  if (!ObjectId.isValid(id)) {
    throw new Error("invalid ID");
  }
  try {
    await collection.findByIdAndDelete(id).then((data) => {
      if (!data) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.json({ message: "Object deleted sucessfully " });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req, res, collection, id) {
  try {
    const obj = await collection.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!obj) {
      return res.status(404).json({ message: "Object not found " });
    }
    res.json({ message: "object updated", obj });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  findOneById,
  findAll,
  destroy,
  update,
};

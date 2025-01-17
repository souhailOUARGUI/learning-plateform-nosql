// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse :
// --> Définir des TTL (Time To Live) appropriés selon le type de données
// --> Utiliser des clés cohérentes et descriptives
// --> Éviter de stocker des données trop volumineuses
// --> Implémenter une stratégie de invalidation du cache
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse :
// --> Utiliser des conventions de nommage cohérentes
// --> Préfixer les clés par projet/environnement
// --> Éviter les caractères spéciaux
// --> Rester consistant dans la casse (tout en minuscule recommandé)
// --> Garder les clés lisibles et compréhensibles


// Fonctions utilitaires pour Redis
const { getRedisClient } = require("../config/db");

class RedisService {
  constructor() {
    this.DEFAULT_EXPIRATION = 3600; // 1 hour in seconds
  }

  async get(key) {
    const client = getRedisClient();
    return await client.get(key);
  }

  async set(key, value, expiration = this.DEFAULT_EXPIRATION) {
    const client = getRedisClient();
    await client.set(key, JSON.stringify(value), {
      EX: expiration,
    });
  }

  async delete(key) {
    const client = getRedisClient();
    await client.del(key);
  }

  async exists(key) {
    const client = getRedisClient();
    return await client.exists(key);
  }

  // Cache course data
  async getCachedCourse(courseId) {
    const key = `course:${courseId}`;
    const cachedCourse = await this.get(key);
    return cachedCourse ? JSON.parse(cachedCourse) : null;
  }

  async setCachedCourse(courseId, courseData) {
    const key = `course:${courseId}`;
    await this.set(key, courseData);
  }

  // Cache student data
  async getCachedStudent(studentId) {
    const key = `student:${studentId}`;
    const cachedStudent = await this.get(key);
    return cachedStudent ? JSON.parse(cachedStudent) : null;
  }

  async setCachedStudent(studentId, studentData) {
    const key = `student:${studentId}`;
    await this.set(key, studentData);
  }

  // Cache instructor data
  async getCachedInstructor(instructorId) {
    const key = `instructor:${instructorId}`;
    const cachedInstructor = await this.get(key);
    return cachedInstructor ? JSON.parse(cachedInstructor) : null;
  }

  async setCachedInstructor(instructorId, instructorData) {
    const key = `instructor:${instructorId}`;
    await this.set(key, instructorData);
  }

  // Clear cache by pattern
  async clearCache(pattern) {
    const client = getRedisClient();
    const keys = await client.keys(pattern);
    if (keys.length > 0) {
      await client.del(keys);
    }
  }
}

module.exports = new RedisService();

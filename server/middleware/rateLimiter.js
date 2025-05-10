import rateLimit from 'express-rate-limit';

// Limiter pour les requêtes d'authentification
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 tentatives
  message: 'Trop de tentatives de connexion, veuillez réessayer après 15 minutes'
});

// Limiter pour les requêtes API générales
export const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requêtes par minute
  message: 'Trop de requêtes, veuillez réessayer plus tard'
});

// Limiter pour les requêtes de création de compte
export const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 3, // 3 comptes par heure
  message: 'Trop de comptes créés, veuillez réessayer après une heure'
});

// Stricter limiter for AI routes
export const aiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 20, // Limit each IP to 20 requests per windowMs
    message: 'Too many AI requests, please try again after an hour'
}); 
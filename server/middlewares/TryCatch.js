const TryCatch = (handler) => {
    return async(req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (error) {
            // Log l'erreur
            console.error('Error:', error);
            
            // Déterminer le code d'état approprié
            const statusCode = error.statusCode || 500;
            
            // Envoyer une réponse d'erreur structurée
            res.status(statusCode).json({
                success: false,
                message: error.message || 'Une erreur est survenue',
                ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
            });
        }
    };
};

export default TryCatch;
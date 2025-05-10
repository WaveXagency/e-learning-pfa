import pkg from 'cohere-ai';
const { CohereClient } = pkg;

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY
});

export const generateResponse = async (message) => {
    try {
        const response = await cohere.chat({
            message: message,
            model: 'command',
            temperature: 0.7,
            maxTokens: 300
        });

        return response.text;
    } catch (error) {
        console.error('Error generating response:', error);
        throw error;
    }
}; 
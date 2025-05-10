import pkg from 'cohere-ai';
const { CohereClient } = pkg;

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY
});

export const detectErrors = async (text) => {
    try {
        const response = await cohere.generate({
            prompt: `Analyze the following text for errors and provide corrections:\n\n${text}`,
            model: 'command',
            temperature: 0.3,
            maxTokens: 200
        });

        return response.generations[0].text;
    } catch (error) {
        console.error('Error detecting errors:', error);
        throw error;
    }
}; 
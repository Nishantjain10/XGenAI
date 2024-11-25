import { GoogleGenerativeAI } from "@google/generative-ai";
import { PUBLIC_GEMINI_API_KEY } from '$env/static/public';

// Initialize the model
const genAI = new GoogleGenerativeAI(PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateReply(tweet: string) {
    try {
        const prompt = `
            Generate a thoughtful reply to this tweet. The reply should be:
            - Professional and engaging
            - Maximum 280 characters
            - Contextually relevant
            - Natural sounding
            
            Tweet: "${tweet}"
            
            Reply:
        `;

        const result = await model.generateContent(prompt);
        const response = result.response.text();
        
        // Ensure response is within Twitter's character limit
        return response.slice(0, 280);
    } catch (error) {
        console.error('Error generating reply:', error);
        throw error;
    }
} 
export const createAnonymousSession = async () => {
    try {
        return await account.createAnonymousSession();
    } catch (error) {
        console.error('Error creating anonymous session:', error);
        return null;
    }
}; 
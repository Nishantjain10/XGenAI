export class RateLimitHandler {
    private static readonly MAX_RETRIES = 3;
    private static readonly INITIAL_DELAY = 1000; // 1 second

    static async executeWithRetry(
        fn: () => Promise<Response>,
        endpoint: string
    ): Promise<Response> {
        let retryCount = 0;
        let delay = this.INITIAL_DELAY;

        while (retryCount < this.MAX_RETRIES) {
            const response = await fn();

            if (response.status !== 429) {
                return response;
            }

            // Get retry delay from headers or use exponential backoff
            const retryAfter = parseInt(response.headers.get('x-rate-limit-reset') || '0') * 1000;
            const waitTime = retryAfter > 0 ? retryAfter - Date.now() : delay;

            console.log(`Rate limited on ${endpoint}. Retrying in ${waitTime/1000} seconds...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));

            // Exponential backoff
            delay *= 2;
            retryCount++;
        }

        throw new Error(`Rate limit exceeded after ${this.MAX_RETRIES} retries`);
    }

    static getRateLimitInfo(response: Response) {
        return {
            limit: parseInt(response.headers.get('x-rate-limit-limit') || '0'),
            remaining: parseInt(response.headers.get('x-rate-limit-remaining') || '0'),
            reset: parseInt(response.headers.get('x-rate-limit-reset') || '0')
        };
    }
} 
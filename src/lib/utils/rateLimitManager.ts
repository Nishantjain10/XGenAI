export class RateLimitManager {
    private static readonly RATE_LIMIT_KEY = 'twitter_rate_limit';
    private static readonly MONTHLY_LIMIT_KEY = 'twitter_monthly_limit';
    private static readonly ENROLLMENT_DAY_KEY = 'twitter_enrollment_day';

    // Store rate limit info
    static setRateLimit(endpoint: string, info: {
        remaining: number;
        reset: number;
        limit: number;
    }) {
        const limits = this.getRateLimits();
        limits[endpoint] = {
            ...info,
            lastUpdated: Date.now()
        };
        localStorage.setItem(this.RATE_LIMIT_KEY, JSON.stringify(limits));
    }

    // Get rate limit info for an endpoint
    static getRateLimit(endpoint: string) {
        const limits = this.getRateLimits();
        return limits[endpoint];
    }

    // Check if we should pause requests
    static shouldPauseRequests(endpoint: string): boolean {
        const limit = this.getRateLimit(endpoint);
        if (!limit) return false;

        // If we have no remaining requests and haven't reached reset time
        if (limit.remaining <= 0 && Date.now() < limit.reset * 1000) {
            return true;
        }

        // Check monthly limit
        const monthlyUsage = this.getMonthlyUsage();
        if (monthlyUsage >= 500000) { // Standard Basic level limit
            const enrollmentDay = this.getEnrollmentDay();
            const today = new Date().getDate();
            // If we're not on enrollment day yet
            if (today !== enrollmentDay) {
                return true;
            }
            // Reset monthly usage on enrollment day
            this.resetMonthlyUsage();
        }

        return false;
    }

    // Get time until rate limit reset
    static getTimeUntilReset(endpoint: string): number {
        const limit = this.getRateLimit(endpoint);
        if (!limit) return 0;

        const resetTime = limit.reset * 1000; // Convert to milliseconds
        const now = Date.now();
        return Math.max(0, resetTime - now);
    }

    // Track monthly usage
    static incrementMonthlyUsage() {
        const usage = this.getMonthlyUsage();
        localStorage.setItem(this.MONTHLY_LIMIT_KEY, (usage + 1).toString());
    }

    private static getRateLimits(): Record<string, any> {
        const limits = localStorage.getItem(this.RATE_LIMIT_KEY);
        return limits ? JSON.parse(limits) : {};
    }

    private static getMonthlyUsage(): number {
        return parseInt(localStorage.getItem(this.MONTHLY_LIMIT_KEY) || '0');
    }

    private static resetMonthlyUsage() {
        localStorage.setItem(this.MONTHLY_LIMIT_KEY, '0');
    }

    private static getEnrollmentDay(): number {
        const day = localStorage.getItem(this.ENROLLMENT_DAY_KEY);
        if (!day) {
            const today = new Date().getDate();
            localStorage.setItem(this.ENROLLMENT_DAY_KEY, today.toString());
            return today;
        }
        return parseInt(day);
    }
} 
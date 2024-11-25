import { type Writable, writable } from 'svelte/store';
interface RateLimit {
  isLimited: boolean;
  reset: number;
  lastChecked?: number;
}

const RATE_LIMIT_KEY = 'twitter_rate_limit';

// Initialize from localStorage if available
const storedLimit = typeof window !== 'undefined' 
  ? localStorage.getItem(RATE_LIMIT_KEY)
  : null;

const initialState: RateLimit = storedLimit 
  ? JSON.parse(storedLimit)
  : { isLimited: false, reset: 0 };

export const rateLimit = writable<RateLimit>(initialState);

// Subscribe to changes and save to localStorage
if (typeof window !== 'undefined') {
  rateLimit.subscribe(value => {
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(value));
  });
} 
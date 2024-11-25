import { writable } from 'svelte/store';

interface RateLimit {
  remaining: number;
  reset: number;
  limit: number;
  isLimited: boolean;
}

export const rateLimit = writable<RateLimit>({
  remaining: 0,
  reset: 0,
  limit: 0,
  isLimited: false
}); 
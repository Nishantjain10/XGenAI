import { writable } from 'svelte/store';
import type { UserV2 } from 'twitter-api-v2';

export const twitterUser = writable<UserV2 | null>(null); 
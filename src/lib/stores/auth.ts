import { writable } from 'svelte/store';
import type { Models } from 'appwrite';

export const user = writable<Models.User<Models.Preferences> | null>(null); 
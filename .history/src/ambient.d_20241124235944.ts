declare module '$app/navigation' {
    export function goto(path: string): Promise<void>;
}

declare module '$app/environment' {
    export const browser: boolean;
} 
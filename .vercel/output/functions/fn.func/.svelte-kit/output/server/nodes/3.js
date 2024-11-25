

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/callback/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BTReqJLm.js","_app/immutable/chunks/vendor.DPX5suGc.js","_app/immutable/chunks/twitter.CCBczVg7.js","_app/immutable/chunks/public.CdQsj55-.js","_app/immutable/chunks/twitter.D1mL71c9.js"];
export const stylesheets = ["_app/immutable/assets/3.CO3ZAswY.css"];
export const fonts = [];

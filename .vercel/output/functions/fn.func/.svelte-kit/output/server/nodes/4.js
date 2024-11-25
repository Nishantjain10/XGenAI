

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CL50H7OA.js","_app/immutable/chunks/vendor.DPX5suGc.js","_app/immutable/chunks/twitter.D1mL71c9.js","_app/immutable/chunks/public.CdQsj55-.js"];
export const stylesheets = ["_app/immutable/assets/4.BmD5aqIU.css"];
export const fonts = [];

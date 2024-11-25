

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B3Ka2RJE.js","_app/immutable/chunks/vendor.DPX5suGc.js","_app/immutable/chunks/twitter.CCBczVg7.js","_app/immutable/chunks/public.CdQsj55-.js"];
export const stylesheets = ["_app/immutable/assets/5.CTDCXzGV.css"];
export const fonts = [];

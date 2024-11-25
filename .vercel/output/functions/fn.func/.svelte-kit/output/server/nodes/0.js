

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Brp7pUWE.js","_app/immutable/chunks/vendor.DPX5suGc.js"];
export const stylesheets = ["_app/immutable/assets/0.CLS2uclB.css"];
export const fonts = [];



export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D__rc-vU.js","_app/immutable/chunks/vendor.DPX5suGc.js"];
export const stylesheets = [];
export const fonts = [];

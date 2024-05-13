

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/advai/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.a61bb707.js","_app/immutable/chunks/scheduler.e80ae01c.js","_app/immutable/chunks/index.b2ac34d8.js"];
export const stylesheets = ["_app/immutable/assets/3.85bb1b08.css"];
export const fonts = [];

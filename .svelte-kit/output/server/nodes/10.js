

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/proto/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.55076250.js","_app/immutable/chunks/scheduler.e80ae01c.js","_app/immutable/chunks/index.b2ac34d8.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.9da56747.js"];
export const stylesheets = ["_app/immutable/assets/10.a62980a0.css"];
export const fonts = [];

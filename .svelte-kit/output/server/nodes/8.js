

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.f7236688.js","_app/immutable/chunks/scheduler.e80ae01c.js","_app/immutable/chunks/index.b2ac34d8.js"];
export const stylesheets = [];
export const fonts = [];

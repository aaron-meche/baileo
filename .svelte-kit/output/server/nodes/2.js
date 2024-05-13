

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6658919c.js","_app/immutable/chunks/scheduler.e80ae01c.js","_app/immutable/chunks/index.b2ac34d8.js"];
export const stylesheets = ["_app/immutable/assets/2.b6ab8e51.css"];
export const fonts = [];

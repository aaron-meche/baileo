

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/insomnia/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.9a6213da.js","_app/immutable/chunks/scheduler.e80ae01c.js","_app/immutable/chunks/index.b2ac34d8.js","_app/immutable/chunks/data.eb78c716.js","_app/immutable/chunks/index.e0bf5ff3.js","_app/immutable/chunks/index.9da56747.js","_app/immutable/chunks/_page.svelte_svelte_type_style_lang.32c5e887.js"];
export const stylesheets = ["_app/immutable/assets/_page.2c2a8959.css"];
export const fonts = [];

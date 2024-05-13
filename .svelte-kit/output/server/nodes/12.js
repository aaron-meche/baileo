

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/watch/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.3f0dc3bb.js","_app/immutable/chunks/scheduler.e80ae01c.js","_app/immutable/chunks/index.b2ac34d8.js","_app/immutable/chunks/data.eb78c716.js","_app/immutable/chunks/index.e0bf5ff3.js","_app/immutable/chunks/index.9da56747.js","_app/immutable/chunks/_page.svelte_svelte_type_style_lang.32c5e887.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/12.2d7fd6ae.css","_app/immutable/assets/_page.2c2a8959.css"];
export const fonts = [];

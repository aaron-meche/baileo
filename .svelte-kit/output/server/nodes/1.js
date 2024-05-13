

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f0cc5737.js","_app/immutable/chunks/scheduler.e80ae01c.js","_app/immutable/chunks/index.b2ac34d8.js","_app/immutable/chunks/singletons.c8208491.js","_app/immutable/chunks/index.e0bf5ff3.js","_app/immutable/chunks/paths.e70e99f1.js"];
export const stylesheets = [];
export const fonts = [];

import { c as create_ssr_component, b as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { m as mediaDB } from "../../../chunks/index2.js";
import "../../../chunks/data.js";
/* empty css                                                         *//* empty css                                                    */const MediaGrid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".media-grid.svelte-1gohohf{display:grid;grid-template-columns:repeat(auto-fit, minmax(24rem, 1fr));padding:0 var(--inline-moat)}.item.svelte-1gohohf{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:1rem;padding:1rem;border-radius:0.5rem;opacity:0.85;transition:opacity 200ms}.item.svelte-1gohohf:hover{background:var(--l1);opacity:1}img.svelte-1gohohf{width:100%;aspect-ratio:16 / 9;object-fit:cover;overflow:hidden;border-radius:0.5rem}.media-title.svelte-1gohohf{font-size:16pt;font-weight:600}",
  map: null
};
const MediaGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return ` <div class="media-grid svelte-1gohohf">${each(mediaDB, (item) => {
    return `<div class="item svelte-1gohohf"><img src="${"thumbnails/" + escape(item.title, true) + ".jpeg"}" alt="" class="svelte-1gohohf"> <div class="data"><div class="media-title svelte-1gohohf">${escape(item.title)}</div> <div class="media-type">${escape(item.type)}</div></div> </div>`;
  })}</div> `;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".filters.svelte-xxjtw2.svelte-xxjtw2{display:grid;grid-template-columns:auto min-content min-content;gap:0.5rem;padding:1rem var(--inline-moat)}.search.svelte-xxjtw2.svelte-xxjtw2{padding:0.5rem 1rem;background:var(--l1);border-radius:0.5rem}.option.svelte-xxjtw2.svelte-xxjtw2{padding:0.5rem 1rem;background:var(--l1);font-size:10pt;border-radius:0.5rem;cursor:pointer;transition:background 200ms}.option.svelte-xxjtw2.svelte-xxjtw2:hover{background:var(--l2);opacity:1}.option.svelte-xxjtw2 i.svelte-xxjtw2{margin-right:0.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <div class="filters horizontal-scroll svelte-xxjtw2" data-svelte-h="svelte-1vc0uu5"><input type="text" class="search svelte-xxjtw2" placeholder="Search"> <button class="option svelte-xxjtw2"><i class="fa-solid fa-filter svelte-xxjtw2"></i>Type</button> <button class="option svelte-xxjtw2"><i class="fa-solid fa-filter svelte-xxjtw2"></i>Category</button></div> <div class="media-grid">${validate_component(MediaGrid, "MediaGrid").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Page as default
};

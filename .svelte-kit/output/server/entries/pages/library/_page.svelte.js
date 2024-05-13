import { c as create_ssr_component, e as escape, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { d as db } from "../../../chunks/data.js";
import { m as mediaDB } from "../../../chunks/index2.js";
const MediaItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".media-item.svelte-1nevjl8{position:relative;width:16rem;display:grid;gap:1rem;padding:1rem;border-radius:0.25rem;cursor:pointer}.media-item.svelte-1nevjl8:hover{background:var(--l1)}img.svelte-1nevjl8{width:100%;aspect-ratio:16 / 9;object-fit:cover;border-radius:4pt;overflow:hidden}.progress.svelte-1nevjl8{height:2pt;background:var(--l2);border-radius:100vh;overflow:hidden}.value.svelte-1nevjl8{height:100%;background:var(--contrast);border-radius:inherit}.info.svelte-1nevjl8{font-weight:500}.caption.svelte-1nevjl8{opacity:0.5}",
  map: null
};
const MediaItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let media_type;
  let { item } = $$props;
  let progress;
  db.update((data) => {
    let lib = data.library;
    let libitem = lib.find((media) => media.title == item.title);
    if (libitem) {
      progress = libitem.progress * 100;
    }
    return data;
  });
  db.subscribe((data) => {
    data.library;
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$1);
  media_type = mediaDB.find((media) => media.title == item.title).type;
  return ` <a href="/watch" class="media-item svelte-1nevjl8"><div class="image"><img src="${"thumbnails/" + escape(item.title, true) + ".jpeg"}" alt="Thumbnail" loading="lazy" class="svelte-1nevjl8"></div> <div class="info svelte-1nevjl8"><div class="title">${escape(item.title)}</div>    <div class="caption svelte-1nevjl8">${escape(media_type)}</div> </div> ${progress ? `<div class="progress svelte-1nevjl8"><div class="value svelte-1nevjl8" style="${"width: " + escape(progress, true) + "%"}"></div></div>` : ``}</a> `;
});
const MediaGrid_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-lqg7i0{display:grid;grid-template-columns:repeat(auto-fill, minmax(160pt, 1fr))}",
  map: null
};
const MediaGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  return ` <div class="grid svelte-lqg7i0">${each(items, (item) => {
    return `${validate_component(MediaItem, "MediaItem").$$render($$result, { item }, {}, {})}`;
  })}</div> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let library = [];
  db.subscribe((data) => {
    library = data.library;
  });
  return ` <div class="page">${validate_component(MediaGrid, "MediaGrid").$$render($$result, { items: library }, {}, {})}</div> `;
});
export {
  Page as default
};

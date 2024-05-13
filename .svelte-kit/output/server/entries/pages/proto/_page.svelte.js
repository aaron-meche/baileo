import { c as create_ssr_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { m as mediaDB } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1sqkqy0{padding:2rem 0}.section-title.svelte-1sqkqy0{padding:0 2rem;font-size:16pt;font-weight:600;text-transform:capitalize}.horizontal-scroll.svelte-1sqkqy0{padding:0 1.25rem}.media-item.svelte-1sqkqy0{padding:0.75rem;font-family:LexendDeca}.media-item.svelte-1sqkqy0:hover{background:var(--l1)}.thumbnail.svelte-1sqkqy0{width:12rem;margin-bottom:0.75rem;aspect-ratio:16 / 9;object-fit:cover}.media-caption.svelte-1sqkqy0{font-size:10pt;font-weight:300;opacity:0.75}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let media_types = [];
  let media_categories = [];
  let media_categories_arr = [];
  mediaDB.forEach((item) => {
    let type = item.type;
    if (!media_types.includes(type))
      media_types.push(type);
    let category_array = item.cat.split(" ");
    category_array.forEach((category) => {
      if (!media_categories.includes(category))
        media_categories.push(category);
    });
  });
  for (let i = 0; i < media_types.length; i++) {
    mediaDB.filter((item) => item.type == media_types[i]);
  }
  for (let i = 0; i < media_categories.length; i++) {
    media_categories_arr[i] = mediaDB.filter((item) => item.cat.includes(media_categories[i]));
  }
  console.log(media_categories_arr);
  $$result.css.add(css);
  return ` ${each(media_categories, (cat, i) => {
    return `<section class="svelte-1sqkqy0"><div class="section-title svelte-1sqkqy0">${escape(cat)}</div> <div class="horizontal-scroll svelte-1sqkqy0">${each(media_categories_arr[i], (item) => {
      return `<button class="media-item svelte-1sqkqy0"><img class="thumbnail svelte-1sqkqy0" src="${"thumbnails/" + escape(item.title, true) + ".jpeg"}" alt=""> <div class="media-title svelte-1sqkqy0">${escape(item.title)}</div> <div class="media-caption svelte-1sqkqy0">${escape(item.type)}</div> </button>`;
    })}</div> </section>`;
  })} `;
});
export {
  Page as default
};

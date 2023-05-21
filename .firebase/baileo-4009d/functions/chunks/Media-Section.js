import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "./index2.js";
import { m as mediaDB, s as storage, a as shuffle } from "./main.js";
const MediaItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".item.s-GUAJxB7FvZtf.s-GUAJxB7FvZtf{display:grid;row-gap:10px;border-radius:5px;cursor:default}@media screen and (hover: hover){.item.s-GUAJxB7FvZtf:hover .active-hover.s-GUAJxB7FvZtf{opacity:1}}img.s-GUAJxB7FvZtf.s-GUAJxB7FvZtf{width:100%;border-radius:5px}.progress.s-GUAJxB7FvZtf.s-GUAJxB7FvZtf{height:4px;width:0%;border-radius:100vh;background:var(--accent)}.title.s-GUAJxB7FvZtf.s-GUAJxB7FvZtf{font-size:12pt;font-weight:500}.type.s-GUAJxB7FvZtf.s-GUAJxB7FvZtf{font-size:10pt;font-weight:400;color:lightgray}.active-hover.s-GUAJxB7FvZtf.s-GUAJxB7FvZtf{height:4px;width:100%;background:var(--accent);border-radius:100vh;opacity:0}",
  map: null
};
const Media_Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let type = mediaDB[title]["type"];
  let caption = type;
  let progress = 0;
  let progress_label = "";
  if (storage.exists(title + " progress")) {
    progress = storage.get(title + " progress") * 100;
    if (type == "TV Show") {
      progress_label = ` - S${storage.get(title + " season")}, E${storage.get(title + " episode")}`;
    }
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `

<div class="item s-GUAJxB7FvZtf" type="media-item"><div class="image"><img src="${"thumbnails/" + escape(title, true) + ".png"}" alt="Thumbnail" loading="lazy" class="s-GUAJxB7FvZtf">
        <div class="progress s-GUAJxB7FvZtf" style="${"width: " + escape(progress, true) + "%"}"></div></div>
    
        
    

    <div class="info"><div class="title s-GUAJxB7FvZtf">${escape(title)}</div>
        <div class="type s-GUAJxB7FvZtf">${escape(caption)} ${escape(progress_label)}</div></div>

    <div class="active-hover s-GUAJxB7FvZtf"></div></div>

`;
});
const MediaSection_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.s-k8GmzRitOWc4{display:grid;row-gap:20px;padding:20px;margin-bottom:75px}.title.s-k8GmzRitOWc4{width:fit-content;font-size:12pt;font-weight:700;text-transform:uppercase;color:var(--accent)}.media-grid.s-k8GmzRitOWc4{display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));gap:40px 20px}",
  map: null
};
const Media_Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, items } = $$props;
  items = shuffle(items);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  return `

<section class="s-k8GmzRitOWc4"><div class="title s-k8GmzRitOWc4">${escape(title)}</div>

	<div class="media-grid s-k8GmzRitOWc4">${each(items, (elem) => {
    return `<button>${validate_component(Media_Item, "MediaItem").$$render($$result, { title: elem }, {}, {})}
			</button>`;
  })}</div></section>

`;
});
export {
  Media_Section as M
};

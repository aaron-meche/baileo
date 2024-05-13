import { c as create_ssr_component, b as each, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { d as db } from "../../../chunks/data.js";
/* empty css                                                         */const css$1 = {
  code: ".error.svelte-s3ziko{display:grid;grid-gap:12pt;padding:0 12pt}img.svelte-s3ziko{width:240pt}p.svelte-s3ziko{width:240pt}",
  map: null
};
const SearchError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { val } = $$props;
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  $$result.css.add(css$1);
  return ` <div class="error svelte-s3ziko" data-svelte-h="svelte-64co4h"><img src="icons/dog.png" alt="" class="svelte-s3ziko"> <p class="svelte-s3ziko">Sorry, we have results to show!<br></p></div> `;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".media-grid.svelte-19e0aks{display:grid;grid-template-columns:repeat(auto-fill, minmax(160pt, 1fr));row-gap:8pt}.item.svelte-19e0aks{display:grid;grid-gap:8pt;padding:8pt}.item.svelte-19e0aks:hover{background:var(--l2)}.info.svelte-19e0aks{font-weight:500}.media-caption.svelte-19e0aks{font-weight:400;opacity:0.5}.thumbnail.svelte-19e0aks{width:100%;aspect-ratio:16 / 9;overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let search_result = [];
  db.subscribe((data) => {
    search_result = data.search_result;
  });
  $$result.css.add(css);
  return ` <div class="page moat-delete"><div class="search-bar" data-svelte-h="svelte-1xgkx8q"><input type="text" placeholder="I want to watch..."></div> <div class="media-grid svelte-19e0aks">${each(search_result, (item) => {
    return `<a href="${"/" + escape(item.type == "TV Show" ? "episode-selector" : "watch", true)}" class="item svelte-19e0aks"><img class="thumbnail svelte-19e0aks" src="${"thumbnails/" + escape(item.title, true) + ".jpeg"}" alt=""> <div class="info svelte-19e0aks"><div class="media-title">${escape(item.title)}</div> <div class="media-caption svelte-19e0aks">${escape(item.type)}</div></div> </a>`;
  })}</div> ${search_result.length == 0 ? `${validate_component(SearchError, "SearchError").$$render($$result, {}, {}, {})}` : ``}</div> `;
});
export {
  Page as default
};

import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { m as mediaDB } from "../../../chunks/main.js";
import { M as Media_Section } from "../../../chunks/Media-Section.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".search-wrapper.s-se148DCPr9DN{width:fit-content;border-bottom:solid 1px gray;margin:auto;margin-top:25px;display:grid;grid-auto-flow:column;align-items:center}img.s-se148DCPr9DN{height:15pt;display:inline-block;margin:10pt;cursor:default}input.s-se148DCPr9DN{all:unset;height:100%;width:clamp(25vw, 250pt, 75vw);display:inline-block}.clear-button.s-se148DCPr9DN{cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function searchMedia(attr, val) {
    let collection = [];
    for (let i = 0; i < Object.keys(mediaDB).length; i++) {
      if (mediaDB[Object.keys(mediaDB)[i]][attr] == val)
        collection.push(Object.keys(mediaDB)[i]);
    }
    return collection;
  }
  $$result.css.add(css);
  return `

${$$result.head += `<!-- HEAD_svelte-1c8tpdw_START -->${$$result.title = `<title>Search</title>`, ""}<!-- HEAD_svelte-1c8tpdw_END -->`, ""}



<div class="search-wrapper s-se148DCPr9DN"><img src="icons/search.svg" alt="Icon" class="s-se148DCPr9DN">
	<input type="text" placeholder="Search" class="s-se148DCPr9DN">
	
	<img class="clear-button s-se148DCPr9DN" src="icons/close.svg" alt="Icon"></div>

<div class="media-selection-pool">${validate_component(Media_Section, "MediaSection").$$render(
    $$result,
    {
      title: "TV Shows",
      items: searchMedia("type", "TV Show")
    },
    {},
    {}
  )}
	${validate_component(Media_Section, "MediaSection").$$render(
    $$result,
    {
      title: "Movies",
      items: searchMedia("type", "Movie")
    },
    {},
    {}
  )}</div>

`;
});
export {
  Page as default
};

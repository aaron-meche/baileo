import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { s as storage, m as mediaDB } from "../../chunks/main.js";
import { M as Media_Section } from "../../chunks/Media-Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function searchMedia(attr, val) {
    let collection = [];
    for (let i = 0; i < Object.keys(mediaDB).length; i++) {
      if (mediaDB[Object.keys(mediaDB)[i]][attr] == val)
        collection.push(Object.keys(mediaDB)[i]);
    }
    return collection;
  }
  let progressList = [];
  if (typeof window !== "undefined") {
    progressList = storage.search("progress");
    for (let i = 0; i < progressList.length; i++) {
      progressList[i] = progressList[i].replace(" progress", "");
    }
  }
  return `

${$$result.head += `<!-- HEAD_svelte-msq8vi_START -->${$$result.title = `<title>Baileo - Home</title>`, ""}<!-- HEAD_svelte-msq8vi_END -->`, ""}




<div class="media-selection-pool">${progressList.length !== 0 ? `${validate_component(Media_Section, "MediaSection").$$render(
    $$result,
    {
      title: "Continue Watching",
      items: progressList
    },
    {},
    {}
  )}` : ``}

	${validate_component(Media_Section, "MediaSection").$$render(
    $$result,
    {
      title: "Comedies",
      items: searchMedia("cat", "comedy")
    },
    {},
    {}
  )}
	${validate_component(Media_Section, "MediaSection").$$render(
    $$result,
    {
      title: "Animations",
      items: searchMedia("cat", "animation")
    },
    {},
    {}
  )}
	${validate_component(Media_Section, "MediaSection").$$render(
    $$result,
    {
      title: "Dramas",
      items: searchMedia("cat", "drama")
    },
    {},
    {}
  )}
	${validate_component(Media_Section, "MediaSection").$$render(
    $$result,
    {
      title: "Marvel",
      items: searchMedia("cat", "marvel")
    },
    {},
    {}
  )}
	${validate_component(Media_Section, "MediaSection").$$render(
    $$result,
    {
      title: "Romantic Comedies",
      items: searchMedia("cat", "romcom")
    },
    {},
    {}
  )}
	${validate_component(Media_Section, "MediaSection").$$render(
    $$result,
    {
      title: "Christmas",
      items: searchMedia("cat", "christmas")
    },
    {},
    {}
  )}
	${validate_component(Media_Section, "MediaSection").$$render(
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

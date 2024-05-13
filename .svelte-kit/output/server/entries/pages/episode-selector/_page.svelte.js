import { c as create_ssr_component, e as escape, b as each } from "../../../chunks/ssr.js";
import "../../../chunks/data.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-uyvkub.svelte-uyvkub{padding:12pt 4pt}img.svelte-uyvkub.svelte-uyvkub{width:60%;border-radius:4pt}.section-title.svelte-uyvkub.svelte-uyvkub{margin-top:12pt;margin-left:12pt;margin-bottom:4pt;font-size:16pt;font-weight:600}.episode-selector.svelte-uyvkub.svelte-uyvkub{display:grid;grid-template-columns:1fr 1fr;gap:12pt;border-radius:2pt}.episode-selector.svelte-uyvkub>.svelte-uyvkub{height:fit-content;padding:4pt;background:var(--l1);border-radius:4pt}.item.svelte-uyvkub.svelte-uyvkub{width:calc(100% - 16pt);padding:8pt;border-radius:2pt;cursor:pointer}.item.svelte-uyvkub.svelte-uyvkub:hover{background:var(--l2)}.item.svelte-uyvkub .label.svelte-uyvkub{font-size:10pt}.item.active.svelte-uyvkub.svelte-uyvkub{font-weight:500;color:var(--accent);background:var(--l2)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let episodes;
  let media_title = "";
  let active_season = 1;
  let seasons = [];
  let progress = {};
  $$result.css.add(css);
  episodes = [];
  return ` <div class="wrapper svelte-uyvkub"><img src="${"thumbnails/" + escape(media_title, true) + ".jpeg"}" alt="" class="svelte-uyvkub"> <div class="section-title svelte-uyvkub">${escape(media_title)}</div> <div class="episode-selector svelte-uyvkub"><div class="season-list svelte-uyvkub">${each(seasons, (season, i) => {
    return `<button class="${"item " + escape(active_season - 1 == i ? "active" : "", true) + " svelte-uyvkub"}">Season ${escape(i + 1)} </button>`;
  })}</div> <div class="episode-list svelte-uyvkub">${each(episodes, (episode, i) => {
    return `<a href="/watch" class="${"item " + escape(
      active_season == progress.season && i + 1 == progress.episode ? "active" : "",
      true
    ) + " svelte-uyvkub"}"> <div class="label svelte-uyvkub">S${escape(active_season)} E${escape(i + 1)}</div> <div class="title">${escape(episode)}</div> </a>`;
  })}</div></div></div> `;
});
export {
  Page as default
};

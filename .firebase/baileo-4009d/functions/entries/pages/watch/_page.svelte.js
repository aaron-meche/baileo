import { c as create_ssr_component, e as escape, f as each, h as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { m as mediaDB, b as serverTypeConversion, s as storage } from "../../../chunks/main.js";
const TVPanel_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".top-bar.s-vHaLhKH0CMC1.s-vHaLhKH0CMC1{display:grid;grid-template-columns:auto min-content;align-items:center;margin-bottom:15px}.top-bar.s-vHaLhKH0CMC1 .title.s-vHaLhKH0CMC1{font-size:15pt;font-weight:500}.navigation.s-vHaLhKH0CMC1.s-vHaLhKH0CMC1{display:grid;grid-template-columns:repeat(2, 1fr);column-gap:10px}.navigation.s-vHaLhKH0CMC1 button.s-vHaLhKH0CMC1{height:20px;padding:5px;aspect-ratio:1 / 1;background:var(--fg);border-radius:100vh;cursor:pointer}.navigation.s-vHaLhKH0CMC1 button.inactive.s-vHaLhKH0CMC1{opacity:0.25;cursor:default}.navigation.s-vHaLhKH0CMC1 img.s-vHaLhKH0CMC1{height:100%;display:block}.episode-list.s-vHaLhKH0CMC1 .item.s-vHaLhKH0CMC1{position:relative;display:grid;grid-template-columns:auto min-content;column-gap:20px;align-items:center;width:calc(100% - 20px);padding:10px;border-radius:10px}.episode-list.s-vHaLhKH0CMC1 .item.s-vHaLhKH0CMC1:hover{background:var(--l-gradient)}.episode-list.s-vHaLhKH0CMC1 .item.active.s-vHaLhKH0CMC1{background:var(--b-gradient)}.episode-list.s-vHaLhKH0CMC1 .title.s-vHaLhKH0CMC1{color:lightgray;font-weight:400}.episode-list.s-vHaLhKH0CMC1 .active .title.s-vHaLhKH0CMC1{color:white}.episode-list.s-vHaLhKH0CMC1 .count.s-vHaLhKH0CMC1{font-size:10pt;font-weight:400;padding-left:5px;color:lightgray;border-left:solid 2px lightgray}",
  map: null
};
const TV_Panel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, media } = $$props;
  media.season;
  media.episode;
  let maxSeason = mediaDB[media.title]["sTotal"];
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.media === void 0 && $$bindings.media && media !== void 0)
    $$bindings.media(media);
  $$result.css.add(css$4);
  return `

<div class="top-bar s-vHaLhKH0CMC1"><div class="title s-vHaLhKH0CMC1">Season ${escape(media.season)} <span style="font-size: 10pt; color: gray;">of ${escape(maxSeason)}</span></div>

    <div class="navigation s-vHaLhKH0CMC1">${media.season !== 1 ? `<button class="left s-vHaLhKH0CMC1"><img src="icons/left.svg" alt="Icon" class="s-vHaLhKH0CMC1"></button>` : `<button class="left inactive s-vHaLhKH0CMC1"><img src="icons/left.svg" alt="Icon" class="s-vHaLhKH0CMC1"></button>`}

        ${media.season !== maxSeason ? `<button class="right s-vHaLhKH0CMC1"><img src="icons/right.svg" alt="Icon" class="s-vHaLhKH0CMC1"></button>` : `<button class="right inactive s-vHaLhKH0CMC1"><img src="icons/right.svg" alt="Icon" class="s-vHaLhKH0CMC1"></button>`}</div></div>

<div class="episode-list s-vHaLhKH0CMC1">${each(mediaDB[title]["s" + media.season], (episode, e) => {
    return `<button class="${"item " + escape(e + 1 == media.episode ? "active" : "", true) + " s-vHaLhKH0CMC1"}"><div class="title s-vHaLhKH0CMC1">${escape(serverTypeConversion(episode))}</div>
            <div class="count s-vHaLhKH0CMC1">E${escape(e + 1)}</div>
        </button>`;
  })}</div>

`;
});
const MoreToWatch_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".list.s-m2LZ31Nv1YxL{display:grid;grid-template-columns:repeat(auto-fill, minmax(350px, 1fr))}.module-title.s-m2LZ31Nv1YxL{text-align:center;font-size:15pt;font-weight:500;margin-bottom:15px}.media-item.s-m2LZ31Nv1YxL{display:grid;grid-template-columns:1fr 2fr;column-gap:20px;align-items:center;padding:15px;border-radius:10px}.media-item.s-m2LZ31Nv1YxL:hover{background:var(--l-gradient)}.title.s-m2LZ31Nv1YxL{font-size:12pt;font-weight:500}.caption.s-m2LZ31Nv1YxL{font-size:10pt;font-weight:400;color:gray}img.s-m2LZ31Nv1YxL{width:100%;border-radius:inherit}",
  map: null
};
const More_to_Watch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let category = mediaDB[title]["cat"];
  let pool = [];
  let concentratePool = [];
  for (let i = 0; i < Object.keys(mediaDB).length; i++) {
    if (mediaDB[Object.keys(mediaDB)[i]]["cat"] == category) {
      pool.push(Object.keys(mediaDB)[i]);
    }
  }
  if (pool.length < 3)
    concentratePool = pool;
  else {
    for (let i = 0; i < pool.length - 1; i++) {
      let ranItem = pool[Math.floor(Math.random() * pool.length)];
      if (concentratePool.includes(ranItem)) {
        i--;
        continue;
      } else if (ranItem == title) {
        i--;
        continue;
      }
      concentratePool.push(ranItem);
    }
  }
  function generateCaption(title2) {
    if (mediaDB[title2]["type"] == "TV Show") {
      let seasonCount = mediaDB[title2]["sTotal"];
      let template = `TV Show - ${seasonCount} Season${seasonCount > 1 ? "s" : ""}`;
      return template;
    } else {
      return "Movie";
    }
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$3);
  return `

<div class="module-title s-m2LZ31Nv1YxL">More ${escape(category.charAt(0).toUpperCase() + category.slice(1))}...</div>
<div class="list s-m2LZ31Nv1YxL">${each(concentratePool, (title2) => {
    return `<button class="media-item s-m2LZ31Nv1YxL"><img src="${"thumbnails/" + escape(title2, true) + ".png"}" alt="Media Thumbnail" class="s-m2LZ31Nv1YxL">
            <div class="info"><div class="title s-m2LZ31Nv1YxL">${escape(title2)}</div>
                <div class="caption s-m2LZ31Nv1YxL">${escape(generateCaption(title2))}</div></div>
        </button>`;
  })}</div>

`;
});
const BoldButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".button.s-be45Op0xSNWX{display:inline-flex;align-items:center;font-size:10pt;font-weight:500;text-transform:uppercase;transition:box-shadow 200ms;padding:10px;border-radius:5px;background:var(--fg)}.button.s-be45Op0xSNWX:hover{color:var(--accent)}img.s-be45Op0xSNWX{height:15pt;margin-right:5pt}",
  map: null
};
const Bold_Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon, text } = $$props;
  let source = `icons/${icon}.svg`;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `

<div class="button s-be45Op0xSNWX"><img${add_attribute("src", source, 0)} alt="Icon" class="s-be45Op0xSNWX">
    ${escape(text)}</div>

`;
});
const Toggle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".toggle.s-IxVFScgfBrOo.s-IxVFScgfBrOo{margin-left:5px;padding:2px;border-radius:100vh;background:rgb(50, 50, 50);border:solid 1px rgb(75, 75, 75)}.toggle.s-IxVFScgfBrOo .coin.s-IxVFScgfBrOo{height:10px;width:10px;margin-left:0;margin-right:15px;background:gray;border-radius:inherit;transition:margin 200ms, background 200ms, width 200ms}.toggle.active.s-IxVFScgfBrOo .coin.s-IxVFScgfBrOo{height:10px;width:15px;margin-left:10px;margin-right:0;background:var(--accent)}",
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$1);
  return `

<div class="${"toggle " + escape(active == "true" ? "active" : "", true) + " s-IxVFScgfBrOo"}"><div class="coin s-IxVFScgfBrOo"></div></div>

`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.s-4Xht8e93UYcz.s-4Xht8e93UYcz{display:grid;width:clamp(500px, 75vw, 100vw);margin:25px auto;row-gap:25px}@media screen and (max-width: 1000px){.app.s-4Xht8e93UYcz.s-4Xht8e93UYcz{width:100%;margin:0}.app.s-4Xht8e93UYcz>.s-4Xht8e93UYcz{margin:0 20px}.app.s-4Xht8e93UYcz>.video-wrapper.s-4Xht8e93UYcz{margin:0}}.module.s-4Xht8e93UYcz.s-4Xht8e93UYcz{height:min-content;overflow:hidden;background:var(--fg);border-radius:10px;padding:20px}.video-wrapper.s-4Xht8e93UYcz.s-4Xht8e93UYcz{max-height:70vh;background:black;box-shadow:var(--l-shadow);border-radius:10px;overflow:hidden}video.s-4Xht8e93UYcz.s-4Xht8e93UYcz{height:100%;width:100%;display:block}.more-menu.s-4Xht8e93UYcz.s-4Xht8e93UYcz{display:grid;align-items:center;grid-template-columns:1fr 1fr;column-gap:10px}.title.s-4Xht8e93UYcz.s-4Xht8e93UYcz{font-size:15pt;font-weight:500}.description.s-4Xht8e93UYcz.s-4Xht8e93UYcz{font-size:12pt;font-weight:400;color:gray}.action-buttons.s-4Xht8e93UYcz.s-4Xht8e93UYcz{cursor:default}.action-buttons.s-4Xht8e93UYcz button.s-4Xht8e93UYcz{position:relative;display:inline-flex;align-items:center;font-size:10pt;font-weight:500;text-transform:uppercase;padding:5px 10px;margin-right:10px;border-radius:5px}.action-buttons.s-4Xht8e93UYcz button.s-4Xht8e93UYcz:hover{background:var(--l-gradient)}.action-buttons.s-4Xht8e93UYcz img.s-4Xht8e93UYcz{height:20px;margin-right:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let media = {};
  if (typeof window !== "undefined") {
    media.title = storage.get("watching title");
    media.type = mediaDB[media.title]["type"];
    if (storage.exists(`${media.title} progress`)) {
      media.progress = Number(storage.get(`${media.title} progress`));
      if (media.type == "TV Show") {
        media.season = Number(storage.get(`${media.title} season`));
        media.episode = Number(storage.get(`${media.title} episode`));
      }
    } else {
      media.progress = 0;
      storage.set(`${media.title} progress`, 0);
      if (media.type == "TV Show") {
        media.season = 1;
        storage.set(`${media.title} season`, 1);
        media.episode = 1;
        storage.set(`${media.title} episode`, 1);
      }
    }
    let interval = setInterval(
      () => {
        if (document.querySelector("video").readyState == 4) {
          document.querySelector("video").currentTime = media.progress * document.querySelector("video").duration;
          clearInterval(interval);
        }
      },
      250
    );
    if (media.type == "TV Show") {
      media.episodeTitle = mediaDB[media.title]["s" + media.season][media.episode - 1];
      media.episodeDisplayTitle = serverTypeConversion(mediaDB[media.title]["s" + media.season][media.episode - 1]);
      media.path = `${media.title}/Season ${media.season}/${media.episodeTitle}.mp4`;
      media.description = `S${media.season}, E${media.episode} - ${media.episodeDisplayTitle}`;
    } else {
      media.path = `${media.title}.mp4`;
      media.description = "Movie";
    }
    setInterval(
      () => {
        if (document.querySelector("video").readyState == 4) {
          let currentTime = document.querySelector("video").currentTime;
          let maxTime = document.querySelector("video").duration;
          storage.set(`${media.title} progress`, currentTime / maxTime);
          if (currentTime > maxTime - storage.get("autoplay buffer") && storage.get("autoplay") == "true") {
            continueWatching();
          }
        }
      },
      750
    );
  }
  let statePref = {};
  function createStatePref(title) {
    statePref[title] = storage.get(title);
  }
  createStatePref("shuffle");
  createStatePref("autoplay");
  createStatePref("autoplay buffer");
  $$result.css.add(css);
  return `

${$$result.head += `<!-- HEAD_svelte-9f9ela_START -->${media.type == "TV Show" ? `${$$result.title = `<title>${escape(media.episodeDisplayTitle)}</title>`, ""}` : `${$$result.title = `<title>${escape(media.title)}</title>`, ""}`}<!-- HEAD_svelte-9f9ela_END -->`, ""}



${typeof window !== "undefined" ? `<div class="app s-4Xht8e93UYcz">
		<div class="video-wrapper s-4Xht8e93UYcz">
				
				<video src="${"https://209.163.185.11/videos/" + escape(media.path, true)}" controls autoplay class="s-4Xht8e93UYcz"></video>
			
				
			</div>

		
		<div class="more-menu s-4Xht8e93UYcz">
			<div class="info"><div class="title s-4Xht8e93UYcz">${escape(media.title)}</div>
				<div class="description s-4Xht8e93UYcz">${escape(media.description)}</div></div>

			${media.type == "TV Show" ? `
				<div style="text-align: right;"><button>${validate_component(Bold_Button, "BoldButton").$$render($$result, { icon: "next", text: "Next Episode" }, {}, {})}</button></div>` : ``}</div>

		
		<div class="action-buttons horizontal-scroll s-4Xht8e93UYcz"><button class="s-4Xht8e93UYcz"><img src="icons/download.svg" alt="Icon" class="s-4Xht8e93UYcz">
				Download
			</button>

			<button class="s-4Xht8e93UYcz"><img src="icons/shuffle.svg" alt="Icon" class="s-4Xht8e93UYcz">
				Shuffle
				${validate_component(Toggle, "Toggle").$$render($$result, { active: statePref["shuffle"] }, {}, {})}</button>

			<button class="s-4Xht8e93UYcz"><img src="icons/infinity.svg" alt="Icon" class="s-4Xht8e93UYcz">
				Autoplay
				${validate_component(Toggle, "Toggle").$$render($$result, { active: statePref["autoplay"] }, {}, {})}</button>

			<button class="s-4Xht8e93UYcz"><img src="icons/complete.svg" alt="Icon" class="s-4Xht8e93UYcz">
				Mark as Complete
			</button></div>
	



	
		${media.type == "TV Show" ? `<div class="module tv-episode-module s-4Xht8e93UYcz">${validate_component(TV_Panel, "TvModule").$$render($$result, { title: media.title, media }, {}, {})}</div>` : ``}

		<div class="module s-4Xht8e93UYcz">${validate_component(More_to_Watch, "MoreToWatchModule").$$render($$result, { title: media.title }, {}, {})}</div>
	</div>` : ``}

`;
});
export {
  Page as default
};

import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form.svelte-43pw7k.svelte-43pw7k{width:24rem;padding:2rem;margin:2rem auto;background:var(--l1);border-radius:1rem}.form-title.svelte-43pw7k.svelte-43pw7k{margin-bottom:1rem;font-size:24pt;font-weight:600}.spacer.svelte-43pw7k.svelte-43pw7k{height:1rem}.label.svelte-43pw7k.svelte-43pw7k{font-size:10pt;margin-bottom:0.5rem;opacity:0.5}i.svelte-43pw7k.svelte-43pw7k{margin-right:0.5rem}input.svelte-43pw7k.svelte-43pw7k{width:calc(100% - 2rem);padding:1rem;background:var(--l2);border-radius:0.5rem}input.svelte-43pw7k.svelte-43pw7k:focus{background:var(--l3)}button.add-key.svelte-43pw7k.svelte-43pw7k{padding:1rem 2rem;background:var(--l2);color:var(--accent);font-weight:500;text-align:center;border-radius:100vh}button.add-key.svelte-43pw7k.svelte-43pw7k:hover{background:var(--l3)}button.send.svelte-43pw7k.svelte-43pw7k{padding:1rem 2rem;margin-left:auto;background:var(--accent);border-radius:100vh;color:var(--pure);font-weight:500;transition:padding 400ms cubic-bezier(0.19, 1, 0.22, 1)}button.send.svelte-43pw7k.svelte-43pw7k:hover{padding:1rem 3rem;font-weight:600}button.send.svelte-43pw7k i.svelte-43pw7k{transition:margin-right 400ms cubic-bezier(0.19, 1, 0.22, 1)}button.send.svelte-43pw7k:hover i.svelte-43pw7k{margin-right:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <div class="form svelte-43pw7k" data-svelte-h="svelte-1ihdjxh"><div class="form-title svelte-43pw7k">Advanced AI Search</div> <div class="label svelte-43pw7k">I would like to learn about...</div> <input type="text" class="svelte-43pw7k"> <div class="spacer svelte-43pw7k"></div> <div class="label svelte-43pw7k">Specific statistics?</div> <button class="add-key svelte-43pw7k"><i class="fa-solid fa-plus svelte-43pw7k"></i> 
        Add Key</button> <button class="send svelte-43pw7k"><i class="fa-solid fa-paper-plane svelte-43pw7k"></i> 
        Send</button></div> `;
});
export {
  Page as default
};

import { c as create_ssr_component, b as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { d as db } from "../../../chunks/data.js";
const CreditCards_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "th.svelte-1buqiza.svelte-1buqiza{padding:4pt 8pt;text-align:left}.head.svelte-1buqiza.svelte-1buqiza{opacity:1}tr.svelte-1buqiza.svelte-1buqiza{opacity:0.75}tr.svelte-1buqiza.svelte-1buqiza:hover{background:var(--l1);opacity:1}td.svelte-1buqiza.svelte-1buqiza{padding:4pt 8pt;cursor:pointer;outline:none;border-radius:2pt}td.editable.svelte-1buqiza.svelte-1buqiza:hover{background:var(--l2);outline:solid 1pt var(--l6)}td.svelte-1buqiza.svelte-1buqiza:focus{background:var(--l2);outline:solid 1pt var(--accent) !important}td.svelte-1buqiza .progress.svelte-1buqiza{height:4pt;width:100%;background:var(--l2);border-radius:100vh;overflow:hidden}td.svelte-1buqiza .value.svelte-1buqiza{height:100%;background:var(--accent)}button.svelte-1buqiza.svelte-1buqiza{padding:8pt 12pt;margin-top:8pt;border:solid 1pt var(--l4);border-radius:4pt}button.svelte-1buqiza.svelte-1buqiza:hover{background:var(--l1);color:var(--accent)}",
  map: null
};
const CreditCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cards = [];
  db.subscribe((data) => {
    cards = data.credit_cards;
  });
  $$result.css.add(css$1);
  return ` <table><tr class="head svelte-1buqiza" data-svelte-h="svelte-18ct5pv"><th class="svelte-1buqiza">Bank</th> <th class="svelte-1buqiza">Card</th> <th class="svelte-1buqiza">Balance</th> <th class="svelte-1buqiza">Credit Limit</th> <th class="svelte-1buqiza">Due Date</th> <th class="svelte-1buqiza">Utilization</th></tr> ${each(cards, (card, i) => {
    return `<tr class="svelte-1buqiza"><td attr="bank" class="editable svelte-1buqiza" contenteditable>${escape(card.bank)}</td> <td attr="card" class="editable money svelte-1buqiza" contenteditable>${escape(card.card)}</td> <td attr="balance" class="editable money svelte-1buqiza" contenteditable>${escape(card.balance)}</td> <td attr="limit" class="editable svelte-1buqiza" contenteditable>${escape(card.limit)}</td> <td attr="due" class="editable svelte-1buqiza" contenteditable>${escape(card.due)}</td> <td class="svelte-1buqiza"><div class="progress svelte-1buqiza"><div class="value svelte-1buqiza" style="${"width: " + escape(Math.floor(100 * card.balance / card.limit), true) + "%"}"></div></div></td> </tr>`;
  })}</table> <button class="svelte-1buqiza" data-svelte-h="svelte-1vmjxxx">+ New Card</button> `;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".table-title.svelte-177n4yi{font-size:16pt;font-weight:600;margin-left:8pt;margin-bottom:8pt}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  db.subscribe((data) => {
    data.credit_cards;
  });
  $$result.css.add(css);
  return ` <div class="page"><section><div class="table-title svelte-177n4yi" data-svelte-h="svelte-108y8q">Credit Cards</div> ${validate_component(CreditCards, "CreditCards").$$render($$result, {}, {}, {})}</section></div> `;
});
export {
  Page as default
};

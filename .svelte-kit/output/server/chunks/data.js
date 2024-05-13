import { w as writable } from "./index.js";
import { s as storage } from "./index2.js";
let initial_db = {
  currently_watching: null,
  hue: 280,
  library: [],
  credit_cards: [],
  income: []
};
const app_title = "baileo 12/26 3";
const storage_ref = `localDB-${app_title}`;
const db = storage.exists(storage_ref) ? writable(JSON.parse(storage.read(storage_ref))) : writable(initial_db);
db.subscribe((db2) => {
  let data;
  if (Object.keys(db2) == void 0) {
    data = initial_db;
    if (typeof window !== "undefined")
      window.open("/", "_self");
  } else {
    data = JSON.stringify(db2);
  }
  storage.write(storage_ref, data);
});
export {
  db as d
};

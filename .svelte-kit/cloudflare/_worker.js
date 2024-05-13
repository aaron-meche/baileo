var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .svelte-kit/output/server/chunks/ssr.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback of callbacks) {
      callback(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component14) {
  current_component = component14;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component14, name) {
  if (!component14 || !component14.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component14;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css11) => css11.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_ssr = __esm({
  ".svelte-kit/output/server/chunks/ssr.js"() {
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    init_ssr();
    subscriber_queue = [];
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index14 = 0;
      while (index14 < str.length) {
        var eqIdx = str.indexOf("=", index14);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index14);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index14 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index14, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index14 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e3
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/index2.js
var storage, mediaDB;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    storage = {
      read: function(location) {
        if (typeof window == "undefined")
          return;
        if (storage.exists(location)) {
          return localStorage[location];
        } else {
          return "";
        }
      },
      write: function(location, value) {
        if (typeof window == "undefined")
          return;
        localStorage[location] = value;
      },
      clear: function() {
        if (typeof window == "undefined")
          return;
        localStorage.clear();
      },
      exists: function(location) {
        if (typeof window == "undefined")
          return;
        if (localStorage[location])
          return true;
        else
          return false;
      }
    };
    mediaDB = [
      {
        title: "American Auto",
        type: "TV Show",
        cat: "comedy",
        seasons: [
          ["Pilot", "White Van", "Earning Call", "The 10k Car", "Millibank, IA", "Commercial", "Recall", "Employee Morale", "Charity Dinner", "Profile"],
          ["Crisis", "Most Hated CEO", "Celebrity", "Cost Cutting", "Going Green", "The Letter", "Young Designers", "Hack", "Night Out", "Passion Project", "Funeral", "Dealer Event", "Judgement Day"]
        ]
      },
      {
        title: "Family Guy",
        type: "TV Show",
        cat: "comedy",
        seasons: [
          ["Death Has a Shadow", "I Never Met the Dead Man", "Chitty Chitty Death Bang", "Mind Over Murder", "A Hero Sits Next Door", "The Son Also Draws", "Brian - Portrait of a Dog"],
          ["Peter, Peter, Caviar Eater", "Holy Crap", "Da Boom", "Brian in Love", "Love Thy Trophy", "Death Is a Bitch", "The King Is Dead", "I Am Peter, Hear Me Roar", "If I-m Dyin", "I-m Lyin", "Running Mates", "A Picture is Worth 1,000 Bucks", "Fifteen Minutes of Shame", "Road to Rhode Island", "Let-s Go to the Hop", "Dammit Janet", "There-s Something About Paulie", "He-s Too Sexy for His Fat", "E. Peterbus Unum", "The Story on Page One", "Wasted Talent", "Fore, Father"],
          ["The Thin White Line", "Brian Does Hollywood", "Mr. Griffin Goes to Washington", "One If by Clam, Two If by Sea", "And the Wiener Is...", "Death Lives", "Lethal Weapons", "The Kiss Seen Around the World", "Mr. Saturday Knight", "A Fish Out of Water", "Emission Impossible", "To Love and Die in Dixie", "Screwed the Pooch", "Peter Griffin: Husband, Father... Brother()", "Ready, Willing, and Disabled", "A Very Special Family Guy Freakin- Christmas", "Brian Wallows and Peter-s Swallows", "From Method to Madness", "Stuck Together, Torn Apart", "Road to Europe", "Family Guy Viewer Mail #1", "When You Wish Upon a Weinstein"],
          ["North by North Quahog", "Fast Times at Buddy Cianci Jr. High", "Blind Ambition", "Don-t Make Me Over", "The Cleveland-Loretta Quagmire", "Petarded", "Brian the Bachelor", "8 Simple Rules for Buying My Teenage Daughter", "Breaking Out Is Hard to Do", "Model Misbehavior", "Peter-s Got Woods", "Perfect Castaway", "Jungle Love", "PTV Show", "Brian Goes Back to College", "The Courtship of Stewie-s Father", "The Fat Guy Strangler", "The Father, the Son, and the Holy Fonz", "Brian Sings and Swings", "Patriot Games", "I Take Thee Quagmire", "Sibling Rivalry", "Deep Throats", "Peterotica", "You May Now Kiss the... Uh... Guy Who Receives", "Petergeist", "The Griffin Family History", "Stewie B. Goode", "Bang-o Was His Name-o", "Stu and Stewie-s Excellent Adventure"],
          ["Stewie Loves Lois", "Mother Tucker", "Hell Comes to Quahog", "Saving Private Brian", "Whistle While Your Wife Works", "Prick Up Your Ears", "Chick Cancer", "Barely Legal", "Road to Rupert", "Peter-s Two Dads", "The Tan Aquatic with Steve Zissou", "Airport -07", "Bill & Peter-s Bogus Journey", "No Meals on Wheels", "Boys Do Cry", "No Chris Left Behind", "It Takes a Village Idiot, and I Married One", "Meet the Quagmires"],
          ["Blue Harvest", "Movin- Out (Brian-s Song)", "Believe It or Not, Joe-s Walking on Air", "Stewie Kills Lois (Part 1)", "Lois Kills Stewie (Part 2)", "Padre de Familia", "Peter-s Daughter", "McStroke", "Back to the Woods", "Play It Again, Brian", "The Former Life of Brian", "Long John Peter"],
          ["Love, Blactually", "I Dream of Jesus", "Road to Germany", "Baby Not on Board", "The Man with Two Brians", "Tales of a Third Grade Nothing", "Ocean-s Three and a Half", "Family Gay", "The Juice Is Loose", "Fox-y Lady", "Not All Dogs Go to Heaven", "420", "Stew-Roids", "We Love You, Conrad", "Three Kings", "Peter-s Progress"],
          ["Road to the Multiverse", "Family Goy", "Spies Reminiscent of Us", "Brian-s Got a Brand New Bag", "Hannah Banana", "Quagmire-s Baby", "Jerome Is the New Black", "Dog Gone", "Business Guy", "Big Man on Hippocampus", "Dial Meg for Murder", "Extra Large Medium", "Go, Stewie, Go!", "Peter-assment", "Brian Griffin-s House of Payne", "April in Quahog", "Brian & Stewie", "Quagmire-s Dad", "The Splendid Source", "Something, Something, Something, Dark Side", "Partial Terms of Endearment"],
          ["And Then There Were Fewer", "Excellence in Broadcasting", "Welcome Back, Carter", "Halloween on Spooner Street", "Baby, You Knock Me Out", "Brian Writes a Bestseller", "Road to the North Pole", "New Kidney in Town", "And I-m Joyce Kinney", "Friends of Peter G.", "German Guy", "The Hand That Rocks the Wheelchair", "Trading Places", "Tiegs for Two", "Brothers & Sisters", "The Big Bang Theory", "Foreign Affairs", "It-s a Trap!"],
          ["Lottery Fever", "Seahorse Seashell Party", "Screams of Silence: The Story of Brenda Q", "Stewie Goes for a Drive", "Back to the Pilot", "Thanksgiving", "Amish Guy", "Cool Hand Peter", "Grumpy Old Man", "Meg and Quagmire", "The Blind Side", "Livin- on a Prayer", "Tom Tucker: The Man and His Dream", "Be Careful What You Fish For", "Burning Down the Bayit", "Killer Queen", "Forget-Me-Not", "You Can-t Do That on Television, Peter", "Mr. and Mrs. Stewie", "Leggo My Meg-O", "Tea Peter", "Family Guy Viewer Mail #2", "Internal Affairs"],
          ["Into Fat Air", "Ratings Guy", "The Old Man and the Big -C-", "Yug Ylimaf", "Joe-s Revenge", "Lois Comes Out of Her Shell", "Friends Without Benefits", "Jesus, Mary and Joseph!", "Space Cadet", "Brian-s Play", "The Giggity Wife", "Valentine-s Day in Quahog", "Chris Cross", "Call Girl", "Turban Cowboy", "12 and a Half Angry Men", "Bigfat", "Total Recall", "Save the Clam", "Farmer Guy", "Roads to Vegas", "No Country Club for Old Men"],
          ["Finders Keepers", "Vestigal Peter", "Quagmire-s Quagmire", "A Fistful of Meg", "Boppa-dee Bappa-dee", "Life of Brian", "Into Harmony-s Way", "Christmas Guy", "Peter Problems", "Grimm Job", "Brian-s a Bad Father", "Mom-s the Word", "3 Acts of God", "Fresh Heir", "Secondhand Spoke", "Herpe the Love Sore", "The Most Interesting Man in the World", "Baby Got Black", "Meg Stinks!", "He-s Bla-ack!", "Chap Stewie"],
          ["The Simpsons Guy", "The Book of Joe", "Baking Bad", "Brian the Closer", "Turkey Guys", "The 2000-Year-Old Virgin", "Stewie, Chris, & Brian-s Excellent Adventure", "Our Idiot Brian", "This Little Piggy", "Quagmire-s Mom", "Encyclopedia Griffin", "Stewie Is Enceinte", "Dr. C and the Women", "#JOLO", "Once Bitten", "Roasted Guy", "Fighting Irish", "Take My Wife"],
          ["Pilling Them Softly", "Papa Has a Rollin- Son", "Guy, Robot", "Peternormal Activity", "Peter, Chris, & Brian", "Peter-s Sister", "Hot Pocket-Dial", "Brokeback Swanson", "A Shot in the Dark", "Candy, Quahog Marshmallow", "The Peanut Butter Kid", "Scammed Yankees", "An App a Day", "Underage Peter", "A Lot Going on Upstairs", "The Heartbreak Dog", "Take a Letter", "The New Adventures of Old Tom", "Run Chris, Run"],
          ["The Boys in the Band", "Bookie of the Year", "American Gigg-olo", "Inside Family Guy", "Chris Has Got a Date, Date, Date, Date, Date", "Hot Shots", "High School English", "Carter and Tricia", "How the Griffin Stole Christmas", "Passenger Fatty-Seven", "Gronkowsbees", "Peter-s Def Jam", "The Finer Strings", "The Dating Game", "Cop and a Half-wit", "Saturated Fat Guy", "Peter-s Lost Youth", "The Peter Principal", "Dearly Deported", "A House Full of Peters"],
          ["Emmy-Winning Episode", "Foxx in the Men House", "Nanny Goats", "Follow The Money", "Three Doctors", "The D in Apartment 23", "Petey IV", "Crimes and Meg-s Demeanor", "Don-t Be a Dickens at Christmas", "Boy (Dog) Meets Girl", "Dog Bites Bear", "Send In Stewie, Please", "V Is For Mystery", "Veteran Guy", "The Woof of Wall Street", "Family Guy Through the Years", "Switch the Flip", "HTTPete", "The Unkindest Cut", "Are You There God() It-s Me, Peter"],
          ["Married... with Cancer", "Dead Dog Walking", "Pal Stewie", "Big Trouble in Little Quahog", "Regarding Carter", "Stand by Meg", "The Griffin Winter Games", "Con Heiress", "Pawtucket Pete", "Hefty Shades of Gray", "Trump Guy", "Bri, Robot", "Trans-Fat", "Family Guy Lite", "No Giggity, No Doubt", "You Can-t Handle the Booth!", "Island Adventure", "Throw It Away", "Girl, Internetted", "Adam West High"],
          ["Yacht Rocky", "Bri-da", "Absolutely Babulous", "Disney the Reboot", "Cat Fight", "Peter and Lois- Wedding", "Heart Burn", "Shanksgiving", "Christmas is Coming", "Connies Celica", "Short Cuts", "Undergrounded", "Rich Old Stewie", "The Movement", "Baby Stewie", "Start Me Up", "Coma Guy", "Better Off Meg", "Holly Bibble", "Movin in Principal Shepherd-s Song"]
        ]
      },
      {
        title: "Frenemies",
        type: "TV Show",
        cat: "comedy",
        seasons: [
          ["Trisha-s New Boyfriend Is Hila-s Brother", "Trisha-s Obsession With Jewish People", "Possible Our Last Episode", "Is Trisha Smarter Than A 5th Grader()", "Trisha & Ethan Have a Huge Fight & She Storms Out", "Trisha & Ethan Reconcile... Kind of", "Couples Therapy With Dr. Drew", "Trisha & Ethan Fight About The Election", "Cheese Mukbang Disaster", "Trisha vs Charli & Dixie D-Amelio", "Trisha & Ethan Do Goat Yoga & Carpool Karaoke", "Trisha Was Kidnapped At Gunpoint", "Trisha Quits the Podcast & Storms Out", "The Fate Of Frenemies With Dr. Drew", "We Made The Only Honest Award Show - Introducing The Steamies", "Frenemies Is Under Attack", "Trisha Was Bullied and It-s NOT Okay!", "Pop Culture Trivia War & Friendship With Shane Is Over", "The David Dobrik & Jason Nash Episodes", "Newlywed Game (Trish & Moses vs Ethan & Hila)", "Erased David Dobrik Footage Proves Trisha Was Right All Along", "Ethan & Trisha Do An Athletics Competition", "David Dobrik & James Charles Drama Apocalypse", "Jewish Trivia Contest, David Dobrik & Scotty Sire", "David Dobrik-s Lawyers Go After Trisha & Cooking Competiton", "Responding To Jeff Wittek & New David Dobrik Footage", "Jeff Wittek Interview Fallout", "Responding To David Dobrik-s Apology", "Trisha-s Epic Passover Dinner At Ethan-s", "Trisha & Ethan Do Oddly Satisfying Trends", "Khloe Kardashian Photo Drama & Pizza Eating Contest", "James Charles Entire Channel Demonetized by YouTube", "Jeff Wittek, David Dobrik, & TRIVIA!", "Trisha-s Birthday Celebration", "[VLOG 1] Trisha & Ethan Go To Disneyland For Her Birthday", "Ethan Embarrassed Himself In Front Of Trisha-s Family", "Trisha & Ethan Got Bullied & Are Fighting Back", "Taking Trisha To Meme School", "[VLOG 2] Trisha & Ethan Hijack A Hollywood Tour Bus", "PREGNANCY ANNOUNCEMENT!", "Talking About Gabbie Hanna"]
        ]
      },
      {
        title: "Parks and Recreation",
        type: "TV Show",
        cat: "comedy classic",
        seasons: [
          ["Pilot", "Canvassing", "The Reporter", "Boys- Club", "The Banquet", "Rock Show"],
          ["Pawnee Zoo", "The Stakeout", "Beauty Pageant", "Practice Date", "Sister City", "Kaboom", "Greg Pitkins", "Ron and Tammy", "The Camel", "Hunting Trip", "Tom-s Divorce", "Christmas Scandal", "The Set Up", "Leslie-s House", "Sweetums", "Galentine-s Day", "Woman of the Year", "The Possum", "Park Safety", "Summer Catalog", "94 Meetings", "Telethon", "The Master Plan", "Freddy Spaghetti"],
          ["Go Big or Go Home", "Flu Season", "Time Capsule", "Ron and Tammy Part Two", "Media Blitz", "Indianapolis", "Harvest Festival", "Camping", "Andy and April-s Fancy Party", "Soulmates", "Jerry-s Painting", "Eagleton", "The Fight", "Road Trip", "The Bubble", "Li-l Sebastian"],
          ["I-m Leslie Knope", "Ron and Tammys", "Born and Raised", "Pawnee Rangers", "Meet n Greet", "End of the World", "The Treaty", "Smallest Park", "The Trial of Leslie Know", "Citizen Knope", "The Comeback Kid", "Campaign Ad", "Bowling for Votes", "Operation Ann", "Dave Returns", "Sweet Sixteen", "Campaign Shake-Up", "Lucky", "Live Ammo", "The Debate", "Bus Tour", "Win, Lose, or Draw"],
          ["Ms. Knope Goes to Washington", "Soda Tax", "How a Bill Becomes a Law", "Sex Education", "Halloween Suprise", "Ben-s Parents", "Leslie v April", "Pawnee Commons", "Ron and Diane", "Two Parties", "Women in Garbage", "Ann-s Decision", "Emergency Response", "Leslie and Ben", "Correspondent-s Lunch", "Bailout", "Partridge", "Animal Control", "Article Two", "Jerry-s Retirement", "Swing Vote", "Are You Better Off"],
          ["London", "The Pawnee-Eagleton Tip Off Classic", "Doppelga\xCC\u02C6ngers", "Gin it Up!", "Filibuster", "Recall Vote", "Fluoride", "The Cones of Dunshire", "Second Chunce", "New Beginnings", "Farmers Market", "Ann and Chris", "Anniversaries", "The Wall", "New Slogan", "Galentine-s Day", "Prom", "Flu Season 2", "One in 8,000", "Moving Up"],
          ["2017", "Ron and Jammy", "William Henry Harrison", "Leslie and Ron", "Gryzzlbox", "Save JJ-s", "Donna and Joe", "Ms. Ludgate-Dwyer Goes to Washington", "Pie-Mary", "The Johnny Karate Super Awesome Musical Explosion Show", "Two Funerals", "One Last Ride"]
        ]
      },
      {
        title: "Squid Game",
        type: "TV Show",
        cat: "drama",
        seasons: [
          ["Red Light", "Green Light", "Hell", "The Man with the Umbrella", "Stick to the Team", "A Fair World", "Gganbu", "VIPS", "Front Man", "One Lucky Day"]
        ]
      },
      {
        title: "Sherlock",
        type: "TV Show",
        cat: "drama",
        seasons: [
          ["A Study in Pink", "The Blind Banker", "The Great Game"],
          ["A Scandal in Belgravia", "The Hounds of Baskerville", "The Reichenbach Fall"],
          ["The Empty Hearse", "The Sign of Three", "His Last Vow"],
          ["The Six Thatchers", "The Lying Detective", "The Final Problem"]
        ]
      },
      {
        title: "Superstore",
        type: "TV Show",
        cat: "comedy classic",
        seasons: [
          ["Pilot", "Magazine Profile", "Shots and Salsa", "Mannequin", "Shoplifter", "Secret Shopper", "Color Wars", "Wedding Day Sale", "All-Nighter", "Demotion", "Labor"],
          ["Olympics", "Strike", "Back to Work", "Guns, Pills and Birds", "Spokesman Scandal", "Dog Adoption Day", "Halloween Theft", "Election Day", "Seasonal Help", "Black Friday", "Lost and Found", "Rebranding", "Ladies- Lunch", "Valentine-s Day", "Super Hot Store", "Wellness Fair", "Integrity Award", "Mateo-s Last Day", "Glenn-s Kids", "Spring Cleaning", "Cheyenne-s Wedding", "Tornado"],
          ["Grand Re-Opening", "Brett-s Dead", "Part-Time Hires", "Workplace Bullying", "Sal-s Dead", "Health Fund", "Christmas Eve", "Viral Video", "Golden Globes Party", "High Volume Store", "Angels and Mermaids", "Groundhog Day", "Video Game Release", "Safety Training", "Amnesty", "Target", "District Manager", "Local Vendors Day", "Lottery", "Gender Reveal", "Aftermath", "Town Hall"],
          ["Back to School", "Baby Shower", "Toxic Workplace", "Costume Competition", "Delivery Day", "Maternity Leave", "New Initiative", "Managers- Conference", "Shadowing Glenn", "Cloud 9 Academy", "Steps Challenge", "Blizzard", "Love Birds", "Minor Crimes", "Salary", "Easter", "Quincea\xF1era", "Cloud Green", "Scanners", "#Cloud9Fail", "Sandra-s Fight", "Employee Appreciation Day"],
          ["Cloud 9.0", "Testimonials", "Forced Hire", "Mall Closing", "Self-Care", "Trick-or-Treat", "Shoplifter Rehab", "Toy Drive", "Curbside Pickup", "Negotiations", "Lady Boss", "Myrtle", "Favoritism", "Sandra-s Wedding", "Cereal Bar", "Employee App", "Zephra Cares", "Playdate", "Carol-s Back", "Customer Safari", "California (Part 1)"],
          ["Essential", "California (Part 2)", "Floor Supervisor", "Prize Wheel", "Hair Care Products", "Biscuit", "The Trough", "Ground Rules", "Conspiracy", "Depositions", "Deep Cleaning", "Customer Satisfaction", "Lowell Anderson", "Perfect Store", "All Sales Final"]
        ]
      },
      {
        title: "The Office",
        type: "TV Show",
        cat: "comedy classic",
        seasons: [
          ["Pilot", "Diversity Day", "Health Care", "The Alliance", "Basketball", "Hot Girl"],
          ["The Dundies", "Sexual Harassment", "Office Olympics", "The Fire", "Halloween", "The Fight", "The Client", "Performance Review", "Email Surveillance", "Christmas Party", "Booze Cruise", "The Injury", "The Secret", "The Carpet", "Boys and Girls", "Valentine-s Day", "Dwight-s Speech", "Take Your Daughter to Work Day", "Michael-s Birthday", "Drug Testing", "Conflict Resolution", "Casino Night"],
          ["Gay Witch Hunt", "The Convention", "The Coup", "Grief Counseling", "Initiation", "Diwali", "Branch Closing", "The Merger", "The Convict", "A Benihana Christmas", "Back From Vacation", "Traveling Salesman", "The Return", "Ben Franklin", "Phyllis- Wedding", "Business School", "Cocktails", "The Negotiation", "Safety Training", "Product Recall", "Women-s Appreciation", "Beach Games", "The Job"],
          ["Fun Run", "Dunder Mifflin Infinity", "Launch Party", "Money", "Local Ad", "Branch Wars", "Survivor Man", "The Deposition", "Dinner Party", "Chair Model", "Night Out", "Did I Stutter", "Job Fair", "Goodbye, Toby"],
          ["Weight Loss", "Business Ethics", "Baby Shower", "Crime AID", "Employee Transfer", "Customer Survey", "Business Trip", "Frame Toby", "The Surplus", "Moroccan Christmas", "The Duel", "Prince Family Paper", "Stress Relief", "Lecture Circuit P1", "Lecture Circuit P2", "Blood Drive", "Golden Ticket", "New Boss", "Two Weeks", "Dream Team", "Michael Scott Paper Company", "Heavy Competition", "Broke", "Casual Friday", "Cafe Disco", "Company Picnic"],
          ["Gossip", "The Meeting", "The Promotion", "Niagra", "Mafia", "The Lover", "Koi Pond", "Double Date", "Murder", "Shareholder Meeting", "Scott-s Tots", "Secret Santa", "The Banker", "Sabre", "The Manager and the Salesman", "The Delivery", "St. Patrick-s Day", "New Leads", "Happy Hour", "Secretary-s Day", "Body Language", "The Cover Up", "The Chump", "Whistleblower"],
          ["Nepotism", "Counseling", "Andy-s Play", "Sex Ed", "The Sting", "Costume Contest", "Christening", "Viewing Party", "WUPHF.com", "China", "Classy Christmas", "Ultimatum", "The Seminar", "The Search", "PDA", "Threat Level Midnight", "Todd Packer", "Garage Sale", "Training Day", "Michael-s Last Dundies", "Goodbye, Michael", "The Inner Circle", "Dwight K. Schrute, (Acting) Manager", "Search Committee"],
          ["The List", "The Incentive", "Lotto", "Garden Party", "Spooked", "Doomsday", "Pam-s Replacement", "Gettysburg", "Mrs. California", "Christmas Wishes", "Trivia", "Pool Party", "Jury Duty", "Special Project", "Tallahassee", "After Hours", "Test the Store", "Last Day in Florida", "Get the Girl", "Welcome Party", "Angry Andy", "Fundraiser", "Turf War", "Free Family Portrait Studio"],
          ["New Guys", "Roy-s Wedding", "Andy-s Ancestry", "Work Bus", "Here Comes Treble", "The Boat", "The Whale", "The Target", "Dwight Christmas", "Lice", "Suit Warehouse", "Customer Loyalty", "Junior Salesman", "Vandalism", "Couples Discount", "Moving On", "The Farm", "Promos", "Stairmageddon", "Paper Airplane", "Livin- The Dream", "AARM", "Finale"]
        ]
      },
      {
        title: "21 Jump Street",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "A Quiet Place",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "American Pie",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "American Psycho",
        type: "Movie",
        cat: "drama horror"
      },
      {
        title: "Anchorman",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "Anchorman 2",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "Avengers ENDGAME",
        type: "Movie",
        cat: "marvel"
      },
      {
        title: "Bird Box",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "Black Panther",
        type: "Movie",
        cat: "marvel"
      },
      {
        title: "Cars",
        type: "Movie",
        cat: "animation"
      },
      {
        title: "Cars 2",
        type: "Movie",
        cat: "animation"
      },
      {
        title: "Cars 3",
        type: "Movie",
        cat: "animation"
      },
      {
        title: "Central Intelligence",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Clueless",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "Coraline",
        type: "Movie",
        cat: "animation horror"
      },
      {
        title: "Cowboy Bebop",
        type: "Movie",
        cat: "animation western"
      },
      {
        title: "Daddys Home",
        type: "Movie",
        cat: "christmas comedy"
      },
      {
        title: "Daddys Home 2",
        type: "Movie",
        cat: "christmas comedy"
      },
      {
        title: "Despicable Me",
        type: "Movie",
        cat: "animation"
      },
      {
        title: "Despicable Me 2",
        type: "Movie",
        cat: "animation"
      },
      {
        title: "Despicable Me 3",
        type: "Movie",
        cat: "animation"
      },
      {
        title: "Dumb and Dumber",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "Dumb and Dumber To",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "Elf",
        type: "Movie",
        cat: "christmas comedy"
      },
      {
        title: "Ferris Buellers Day Off",
        type: "Movie",
        cat: "comedy drama"
      },
      {
        title: "Fight Club",
        type: "Movie",
        cat: "thriller crime drama"
      },
      {
        title: "Five Nights at Freddys",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "Game Night",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Get Hard",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Halloween",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "Hidden Figures",
        type: "Movie",
        cat: "drama historical"
      },
      {
        title: "Horrible Bosses",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "House",
        type: "Movie",
        cat: "drama horror comedy"
      },
      {
        title: "Interstellar",
        type: "Movie",
        cat: "drama"
      },
      {
        title: "It - Chapter 2",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "It",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "Legally Blonde",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "Mean Girls",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Mean Girls 2",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "Minions The Rise of Gru",
        type: "Movie",
        cat: "animation"
      },
      {
        title: "Minions",
        type: "Movie",
        cat: "animation"
      },
      {
        title: "Miss Congeniality",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "No Country For Old Men",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "Old School",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Ratatouille",
        type: "Movie",
        cat: "animation"
      },
      {
        title: "Saving Private Ryan",
        type: "Movie",
        cat: "war drama action"
      },
      {
        title: "Spider Man Far From Home",
        type: "Movie",
        cat: "marvel"
      },
      {
        title: "Spider Man Homecoming",
        type: "Movie",
        cat: "marvel"
      },
      {
        title: "Spider Man No Way Home",
        type: "Movie",
        cat: "marvel"
      },
      {
        title: "Spy",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Step Brothers",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Superbad",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Ted",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Ted 2",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Texas Chainsaw Massacre",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "The Amazing Spider Man 2",
        type: "Movie",
        cat: "marvel"
      },
      {
        title: "The Bucket List",
        type: "Movie",
        cat: "drama"
      },
      {
        title: "The Cat In The Hat",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "The Conjuring",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "The Devil Wears Prada",
        type: "Movie",
        cat: "comedy drama"
      },
      {
        title: "The Exorcist",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "The Founder",
        type: "Movie",
        cat: "drama historical"
      },
      {
        title: "Grand Budapest Hotel",
        type: "Movie",
        cat: "comedy adventure"
      },
      {
        title: "The Hangover",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "The Hangover Part II",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "The Hangover Part III",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "The Incredible Hulk",
        type: "Movie",
        cat: "marvel"
      },
      {
        title: "The Intern",
        type: "Movie",
        cat: "drama"
      },
      {
        title: "The Interview",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "The Notebook",
        type: "Movie",
        cat: "drama"
      },
      {
        title: "The Other Guys",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "The Proposal",
        type: "Movie",
        cat: "romcom"
      },
      {
        title: "The Shining",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "The Truman Show",
        type: "Movie",
        cat: "comedy sci-fi"
      },
      {
        title: "The Waterboy",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "The Witch",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "The Wolf of Wall Street",
        type: "Movie",
        cat: "comedy drama"
      },
      {
        title: "Trick r Treat",
        type: "Movie",
        cat: "horror"
      },
      {
        title: "Vacation",
        type: "Movie",
        cat: "comedy"
      },
      {
        title: "Venom",
        type: "Movie",
        cat: "marvel"
      },
      {
        title: "Wedding Crashers",
        type: "Movie",
        cat: "comedy classic"
      },
      {
        title: "Were the Millers",
        type: "Movie",
        cat: "comedy classic"
      }
    ];
  }
});

// .svelte-kit/output/server/chunks/data.js
var initial_db, app_title, storage_ref, db;
var init_data = __esm({
  ".svelte-kit/output/server/chunks/data.js"() {
    init_chunks();
    init_index2();
    initial_db = {
      currently_watching: null,
      hue: 280,
      library: [],
      credit_cards: [],
      income: []
    };
    app_title = "baileo 12/26 3";
    storage_ref = `localDB-${app_title}`;
    db = storage.exists(storage_ref) ? writable(JSON.parse(storage.read(storage_ref))) : writable(initial_db);
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
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_ssr();
    init_data();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ` <div class="app"><div class="body">${slots.default ? slots.default({}) : ``}</div></div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ??= (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    imports = ["_app/immutable/nodes/0.7aa60bdf.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/paths.e70e99f1.js", "_app/immutable/chunks/data.eb78c716.js", "_app/immutable/chunks/index.e0bf5ff3.js", "_app/immutable/chunks/index.9da56747.js"];
    stylesheets = ["_app/immutable/assets/0.72734a66.css", "_app/immutable/assets/SearchError.7629b045.css", "_app/immutable/assets/Header.791b2c81.css"];
    fonts = ["_app/immutable/assets/ExtraLight.f62f749b.otf", "_app/immutable/assets/Light.7a764dbb.otf", "_app/immutable/assets/Regular.c33d1e4c.otf", "_app/immutable/assets/Medium.936e7364.otf", "_app/immutable/assets/Bold.5f661258.otf", "_app/immutable/assets/ExtraBold.abc7227b.otf", "_app/immutable/assets/Black.d997a70f.otf", "_app/immutable/assets/ExtraBlack.4817a787.otf", "_app/immutable/assets/Figtree-VariableFont_wght.7135c0e9.ttf", "_app/immutable/assets/LexendDeca-VariableFont_wght.384b721f.ttf"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_ssr();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ??= (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    imports2 = ["_app/immutable/nodes/1.f0cc5737.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/singletons.c8208491.js", "_app/immutable/chunks/index.e0bf5ff3.js", "_app/immutable/chunks/paths.e70e99f1.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var css, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_ssr();
    css = {
      code: ".message.svelte-1lt2143{display:grid;row-gap:1rem;max-width:20rem;padding:2rem;margin:4rem auto;background:var(--l1);text-align:center;border-radius:1rem}i.svelte-1lt2143{font-size:50pt}.title.svelte-1lt2143{font-size:20pt;font-weight:600}",
      map: null
    };
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return ` <div class="message svelte-1lt2143" data-svelte-h="svelte-1qffi03"><i class="fa-solid fa-face-sad-cry svelte-1lt2143"></i> <div class="title svelte-1lt2143">baileo.tv is offline</div> <div class="caption">But don&#39;t worry, we&#39;re coming back! The site is being completely redesigned from scratch.</div></div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => component_cache3 ??= (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    imports3 = ["_app/immutable/nodes/2.6658919c.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js"];
    stylesheets3 = ["_app/immutable/assets/2.b6ab8e51.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/advai/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var css2, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/advai/_page.svelte.js"() {
    init_ssr();
    css2 = {
      code: ".form.svelte-43pw7k.svelte-43pw7k{width:24rem;padding:2rem;margin:2rem auto;background:var(--l1);border-radius:1rem}.form-title.svelte-43pw7k.svelte-43pw7k{margin-bottom:1rem;font-size:24pt;font-weight:600}.spacer.svelte-43pw7k.svelte-43pw7k{height:1rem}.label.svelte-43pw7k.svelte-43pw7k{font-size:10pt;margin-bottom:0.5rem;opacity:0.5}i.svelte-43pw7k.svelte-43pw7k{margin-right:0.5rem}input.svelte-43pw7k.svelte-43pw7k{width:calc(100% - 2rem);padding:1rem;background:var(--l2);border-radius:0.5rem}input.svelte-43pw7k.svelte-43pw7k:focus{background:var(--l3)}button.add-key.svelte-43pw7k.svelte-43pw7k{padding:1rem 2rem;background:var(--l2);color:var(--accent);font-weight:500;text-align:center;border-radius:100vh}button.add-key.svelte-43pw7k.svelte-43pw7k:hover{background:var(--l3)}button.send.svelte-43pw7k.svelte-43pw7k{padding:1rem 2rem;margin-left:auto;background:var(--accent);border-radius:100vh;color:var(--pure);font-weight:500;transition:padding 400ms cubic-bezier(0.19, 1, 0.22, 1)}button.send.svelte-43pw7k.svelte-43pw7k:hover{padding:1rem 3rem;font-weight:600}button.send.svelte-43pw7k i.svelte-43pw7k{transition:margin-right 400ms cubic-bezier(0.19, 1, 0.22, 1)}button.send.svelte-43pw7k:hover i.svelte-43pw7k{margin-right:1rem}",
      map: null
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css2);
      return ` <div class="form svelte-43pw7k" data-svelte-h="svelte-1ihdjxh"><div class="form-title svelte-43pw7k">Advanced AI Search</div> <div class="label svelte-43pw7k">I would like to learn about...</div> <input type="text" class="svelte-43pw7k"> <div class="spacer svelte-43pw7k"></div> <div class="label svelte-43pw7k">Specific statistics?</div> <button class="add-key svelte-43pw7k"><i class="fa-solid fa-plus svelte-43pw7k"></i> 
        Add Key</button> <button class="send svelte-43pw7k"><i class="fa-solid fa-paper-plane svelte-43pw7k"></i> 
        Send</button></div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component_cache4, component4, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => component_cache4 ??= (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    imports4 = ["_app/immutable/nodes/3.a61bb707.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js"];
    stylesheets4 = ["_app/immutable/assets/3.85bb1b08.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/credit/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var css$1, CreditCards, css3, Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/credit/_page.svelte.js"() {
    init_ssr();
    init_data();
    css$1 = {
      code: "th.svelte-1buqiza.svelte-1buqiza{padding:4pt 8pt;text-align:left}.head.svelte-1buqiza.svelte-1buqiza{opacity:1}tr.svelte-1buqiza.svelte-1buqiza{opacity:0.75}tr.svelte-1buqiza.svelte-1buqiza:hover{background:var(--l1);opacity:1}td.svelte-1buqiza.svelte-1buqiza{padding:4pt 8pt;cursor:pointer;outline:none;border-radius:2pt}td.editable.svelte-1buqiza.svelte-1buqiza:hover{background:var(--l2);outline:solid 1pt var(--l6)}td.svelte-1buqiza.svelte-1buqiza:focus{background:var(--l2);outline:solid 1pt var(--accent) !important}td.svelte-1buqiza .progress.svelte-1buqiza{height:4pt;width:100%;background:var(--l2);border-radius:100vh;overflow:hidden}td.svelte-1buqiza .value.svelte-1buqiza{height:100%;background:var(--accent)}button.svelte-1buqiza.svelte-1buqiza{padding:8pt 12pt;margin-top:8pt;border:solid 1pt var(--l4);border-radius:4pt}button.svelte-1buqiza.svelte-1buqiza:hover{background:var(--l1);color:var(--accent)}",
      map: null
    };
    CreditCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let cards = [];
      db.subscribe((data) => {
        cards = data.credit_cards;
      });
      $$result.css.add(css$1);
      return ` <table><tr class="head svelte-1buqiza" data-svelte-h="svelte-18ct5pv"><th class="svelte-1buqiza">Bank</th> <th class="svelte-1buqiza">Card</th> <th class="svelte-1buqiza">Balance</th> <th class="svelte-1buqiza">Credit Limit</th> <th class="svelte-1buqiza">Due Date</th> <th class="svelte-1buqiza">Utilization</th></tr> ${each(cards, (card, i) => {
        return `<tr class="svelte-1buqiza"><td attr="bank" class="editable svelte-1buqiza" contenteditable>${escape(card.bank)}</td> <td attr="card" class="editable money svelte-1buqiza" contenteditable>${escape(card.card)}</td> <td attr="balance" class="editable money svelte-1buqiza" contenteditable>${escape(card.balance)}</td> <td attr="limit" class="editable svelte-1buqiza" contenteditable>${escape(card.limit)}</td> <td attr="due" class="editable svelte-1buqiza" contenteditable>${escape(card.due)}</td> <td class="svelte-1buqiza"><div class="progress svelte-1buqiza"><div class="value svelte-1buqiza" style="${"width: " + escape(Math.floor(100 * card.balance / card.limit), true) + "%"}"></div></div></td> </tr>`;
      })}</table> <button class="svelte-1buqiza" data-svelte-h="svelte-1vmjxxx">+ New Card</button> `;
    });
    css3 = {
      code: ".table-title.svelte-177n4yi{font-size:16pt;font-weight:600;margin-left:8pt;margin-bottom:8pt}",
      map: null
    };
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      db.subscribe((data) => {
        data.credit_cards;
      });
      $$result.css.add(css3);
      return ` <div class="page"><section><div class="table-title svelte-177n4yi" data-svelte-h="svelte-108y8q">Credit Cards</div> ${validate_component(CreditCards, "CreditCards").$$render($$result, {}, {}, {})}</section></div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component_cache5, component5, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component5 = async () => component_cache5 ??= (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    imports5 = ["_app/immutable/nodes/4.c93b045d.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/data.eb78c716.js", "_app/immutable/chunks/index.e0bf5ff3.js", "_app/immutable/chunks/index.9da56747.js", "_app/immutable/chunks/each.e59479a4.js"];
    stylesheets5 = ["_app/immutable/assets/4.d6e1bc4f.css"];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/episode-selector/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
var css4, Page4;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/episode-selector/_page.svelte.js"() {
    init_ssr();
    init_data();
    css4 = {
      code: ".wrapper.svelte-uyvkub.svelte-uyvkub{padding:12pt 4pt}img.svelte-uyvkub.svelte-uyvkub{width:60%;border-radius:4pt}.section-title.svelte-uyvkub.svelte-uyvkub{margin-top:12pt;margin-left:12pt;margin-bottom:4pt;font-size:16pt;font-weight:600}.episode-selector.svelte-uyvkub.svelte-uyvkub{display:grid;grid-template-columns:1fr 1fr;gap:12pt;border-radius:2pt}.episode-selector.svelte-uyvkub>.svelte-uyvkub{height:fit-content;padding:4pt;background:var(--l1);border-radius:4pt}.item.svelte-uyvkub.svelte-uyvkub{width:calc(100% - 16pt);padding:8pt;border-radius:2pt;cursor:pointer}.item.svelte-uyvkub.svelte-uyvkub:hover{background:var(--l2)}.item.svelte-uyvkub .label.svelte-uyvkub{font-size:10pt}.item.active.svelte-uyvkub.svelte-uyvkub{font-weight:500;color:var(--accent);background:var(--l2)}",
      map: null
    };
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let episodes;
      let media_title = "";
      let active_season = 1;
      let seasons = [];
      let progress = {};
      $$result.css.add(css4);
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
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  stylesheets: () => stylesheets6
});
var index6, component_cache6, component6, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    index6 = 5;
    component6 = async () => component_cache6 ??= (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    imports6 = ["_app/immutable/nodes/5.dfdd0520.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/each.e59479a4.js", "_app/immutable/chunks/index.9da56747.js", "_app/immutable/chunks/data.eb78c716.js", "_app/immutable/chunks/index.e0bf5ff3.js"];
    stylesheets6 = ["_app/immutable/assets/5.ad9ee43b.css"];
    fonts6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/insomnia/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => Page5
});
var css5, Page5;
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/insomnia/_page.svelte.js"() {
    init_ssr();
    init_data();
    css5 = {
      code: ".window.svelte-1o28opk{height:100vmax;width:100vmax;position:fixed;top:0;left:0;background:black}.ui.svelte-1o28opk{display:grid;grid-template-columns:2fr 3fr;color:red;font-size:36pt;font-weight:300;opacity:0.5;cursor:none\n    }.clock.svelte-1o28opk{height:100%;font-family:LexendDeca;text-align:center}.time.svelte-1o28opk{padding-top:36pt;margin:auto;font-size:8vmax;font-weight:600}video.svelte-1o28opk{display:block;height:fit-content;width:100%;aspect-ratio:16 / 9;border-radius:4pt;opacity:0.5;background:black}.media-info.svelte-1o28opk{font-size:5vmax}.media-caption.svelte-1o28opk{font-family:LexendDeca}",
      map: null
    };
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css5);
      return ` <div class="window svelte-1o28opk"><div class="ui svelte-1o28opk">${``}</div></div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  fonts: () => fonts7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component_cache7, component7, imports7, stylesheets7, fonts7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    index7 = 6;
    component7 = async () => component_cache7 ??= (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default;
    imports7 = ["_app/immutable/nodes/6.9a6213da.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/data.eb78c716.js", "_app/immutable/chunks/index.e0bf5ff3.js", "_app/immutable/chunks/index.9da56747.js", "_app/immutable/chunks/_page.svelte_svelte_type_style_lang.32c5e887.js"];
    stylesheets7 = ["_app/immutable/assets/_page.2c2a8959.css"];
    fonts7 = [];
  }
});

// .svelte-kit/output/server/entries/pages/library/_page.svelte.js
var page_svelte_exports6 = {};
__export(page_svelte_exports6, {
  default: () => Page6
});
var css$12, MediaItem, css6, MediaGrid, Page6;
var init_page_svelte6 = __esm({
  ".svelte-kit/output/server/entries/pages/library/_page.svelte.js"() {
    init_ssr();
    init_data();
    init_index2();
    css$12 = {
      code: ".media-item.svelte-1nevjl8{position:relative;width:16rem;display:grid;gap:1rem;padding:1rem;border-radius:0.25rem;cursor:pointer}.media-item.svelte-1nevjl8:hover{background:var(--l1)}img.svelte-1nevjl8{width:100%;aspect-ratio:16 / 9;object-fit:cover;border-radius:4pt;overflow:hidden}.progress.svelte-1nevjl8{height:2pt;background:var(--l2);border-radius:100vh;overflow:hidden}.value.svelte-1nevjl8{height:100%;background:var(--contrast);border-radius:inherit}.info.svelte-1nevjl8{font-weight:500}.caption.svelte-1nevjl8{opacity:0.5}",
      map: null
    };
    MediaItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let media_type;
      let { item } = $$props;
      let progress;
      db.update((data) => {
        let lib = data.library;
        let libitem = lib.find((media) => media.title == item.title);
        if (libitem) {
          progress = libitem.progress * 100;
        }
        return data;
      });
      db.subscribe((data) => {
        data.library;
      });
      if ($$props.item === void 0 && $$bindings.item && item !== void 0)
        $$bindings.item(item);
      $$result.css.add(css$12);
      media_type = mediaDB.find((media) => media.title == item.title).type;
      return ` <a href="/watch" class="media-item svelte-1nevjl8"><div class="image"><img src="${"thumbnails/" + escape(item.title, true) + ".jpeg"}" alt="Thumbnail" loading="lazy" class="svelte-1nevjl8"></div> <div class="info svelte-1nevjl8"><div class="title">${escape(item.title)}</div>    <div class="caption svelte-1nevjl8">${escape(media_type)}</div> </div> ${progress ? `<div class="progress svelte-1nevjl8"><div class="value svelte-1nevjl8" style="${"width: " + escape(progress, true) + "%"}"></div></div>` : ``}</a> `;
    });
    css6 = {
      code: ".grid.svelte-lqg7i0{display:grid;grid-template-columns:repeat(auto-fill, minmax(160pt, 1fr))}",
      map: null
    };
    MediaGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { items } = $$props;
      if ($$props.items === void 0 && $$bindings.items && items !== void 0)
        $$bindings.items(items);
      $$result.css.add(css6);
      return ` <div class="grid svelte-lqg7i0">${each(items, (item) => {
        return `${validate_component(MediaItem, "MediaItem").$$render($$result, { item }, {}, {})}`;
      })}</div> `;
    });
    Page6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let library = [];
      db.subscribe((data) => {
        library = data.library;
      });
      return ` <div class="page">${validate_component(MediaGrid, "MediaGrid").$$render($$result, { items: library }, {}, {})}</div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  fonts: () => fonts8,
  imports: () => imports8,
  index: () => index8,
  stylesheets: () => stylesheets8
});
var index8, component_cache8, component8, imports8, stylesheets8, fonts8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    index8 = 7;
    component8 = async () => component_cache8 ??= (await Promise.resolve().then(() => (init_page_svelte6(), page_svelte_exports6))).default;
    imports8 = ["_app/immutable/nodes/7.5e68baa9.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/each.e59479a4.js", "_app/immutable/chunks/data.eb78c716.js", "_app/immutable/chunks/index.e0bf5ff3.js", "_app/immutable/chunks/index.9da56747.js"];
    stylesheets8 = ["_app/immutable/assets/7.c76c0568.css"];
    fonts8 = [];
  }
});

// .svelte-kit/output/server/entries/pages/music/_page.svelte.js
var page_svelte_exports7 = {};
__export(page_svelte_exports7, {
  default: () => Page7
});
var Page7;
var init_page_svelte7 = __esm({
  ".svelte-kit/output/server/entries/pages/music/_page.svelte.js"() {
    init_ssr();
    Page7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ` `;
    });
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  component: () => component9,
  fonts: () => fonts9,
  imports: () => imports9,
  index: () => index9,
  stylesheets: () => stylesheets9
});
var index9, component_cache9, component9, imports9, stylesheets9, fonts9;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    index9 = 8;
    component9 = async () => component_cache9 ??= (await Promise.resolve().then(() => (init_page_svelte7(), page_svelte_exports7))).default;
    imports9 = ["_app/immutable/nodes/8.f7236688.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js"];
    stylesheets9 = [];
    fonts9 = [];
  }
});

// .svelte-kit/output/server/entries/pages/new/_page.svelte.js
var page_svelte_exports8 = {};
__export(page_svelte_exports8, {
  default: () => Page8
});
var css$13, MediaGrid2, css7, Page8;
var init_page_svelte8 = __esm({
  ".svelte-kit/output/server/entries/pages/new/_page.svelte.js"() {
    init_ssr();
    init_index2();
    init_data();
    css$13 = {
      code: ".media-grid.svelte-1gohohf{display:grid;grid-template-columns:repeat(auto-fit, minmax(24rem, 1fr));padding:0 var(--inline-moat)}.item.svelte-1gohohf{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:1rem;padding:1rem;border-radius:0.5rem;opacity:0.85;transition:opacity 200ms}.item.svelte-1gohohf:hover{background:var(--l1);opacity:1}img.svelte-1gohohf{width:100%;aspect-ratio:16 / 9;object-fit:cover;overflow:hidden;border-radius:0.5rem}.media-title.svelte-1gohohf{font-size:16pt;font-weight:600}",
      map: null
    };
    MediaGrid2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$13);
      return ` <div class="media-grid svelte-1gohohf">${each(mediaDB, (item) => {
        return `<div class="item svelte-1gohohf"><img src="${"thumbnails/" + escape(item.title, true) + ".jpeg"}" alt="" class="svelte-1gohohf"> <div class="data"><div class="media-title svelte-1gohohf">${escape(item.title)}</div> <div class="media-type">${escape(item.type)}</div></div> </div>`;
      })}</div> `;
    });
    css7 = {
      code: ".filters.svelte-xxjtw2.svelte-xxjtw2{display:grid;grid-template-columns:auto min-content min-content;gap:0.5rem;padding:1rem var(--inline-moat)}.search.svelte-xxjtw2.svelte-xxjtw2{padding:0.5rem 1rem;background:var(--l1);border-radius:0.5rem}.option.svelte-xxjtw2.svelte-xxjtw2{padding:0.5rem 1rem;background:var(--l1);font-size:10pt;border-radius:0.5rem;cursor:pointer;transition:background 200ms}.option.svelte-xxjtw2.svelte-xxjtw2:hover{background:var(--l2);opacity:1}.option.svelte-xxjtw2 i.svelte-xxjtw2{margin-right:0.5rem}",
      map: null
    };
    Page8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css7);
      return ` <div class="filters horizontal-scroll svelte-xxjtw2" data-svelte-h="svelte-1vc0uu5"><input type="text" class="search svelte-xxjtw2" placeholder="Search"> <button class="option svelte-xxjtw2"><i class="fa-solid fa-filter svelte-xxjtw2"></i>Type</button> <button class="option svelte-xxjtw2"><i class="fa-solid fa-filter svelte-xxjtw2"></i>Category</button></div> <div class="media-grid">${validate_component(MediaGrid2, "MediaGrid").$$render($$result, {}, {}, {})}</div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/9.js
var __exports10 = {};
__export(__exports10, {
  component: () => component10,
  fonts: () => fonts10,
  imports: () => imports10,
  index: () => index10,
  stylesheets: () => stylesheets10
});
var index10, component_cache10, component10, imports10, stylesheets10, fonts10;
var init__10 = __esm({
  ".svelte-kit/output/server/nodes/9.js"() {
    index10 = 9;
    component10 = async () => component_cache10 ??= (await Promise.resolve().then(() => (init_page_svelte8(), page_svelte_exports8))).default;
    imports10 = ["_app/immutable/nodes/9.5a69328c.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/each.e59479a4.js", "_app/immutable/chunks/index.9da56747.js", "_app/immutable/chunks/paths.e70e99f1.js", "_app/immutable/chunks/data.eb78c716.js", "_app/immutable/chunks/index.e0bf5ff3.js"];
    stylesheets10 = ["_app/immutable/assets/9.e8da5f28.css", "_app/immutable/assets/SearchError.7629b045.css", "_app/immutable/assets/Header.791b2c81.css"];
    fonts10 = [];
  }
});

// .svelte-kit/output/server/entries/pages/proto/_page.svelte.js
var page_svelte_exports9 = {};
__export(page_svelte_exports9, {
  default: () => Page9
});
var css8, Page9;
var init_page_svelte9 = __esm({
  ".svelte-kit/output/server/entries/pages/proto/_page.svelte.js"() {
    init_ssr();
    init_index2();
    css8 = {
      code: "section.svelte-1sqkqy0{padding:2rem 0}.section-title.svelte-1sqkqy0{padding:0 2rem;font-size:16pt;font-weight:600;text-transform:capitalize}.horizontal-scroll.svelte-1sqkqy0{padding:0 1.25rem}.media-item.svelte-1sqkqy0{padding:0.75rem;font-family:LexendDeca}.media-item.svelte-1sqkqy0:hover{background:var(--l1)}.thumbnail.svelte-1sqkqy0{width:12rem;margin-bottom:0.75rem;aspect-ratio:16 / 9;object-fit:cover}.media-caption.svelte-1sqkqy0{font-size:10pt;font-weight:300;opacity:0.75}",
      map: null
    };
    Page9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      $$result.css.add(css8);
      return ` ${each(media_categories, (cat, i) => {
        return `<section class="svelte-1sqkqy0"><div class="section-title svelte-1sqkqy0">${escape(cat)}</div> <div class="horizontal-scroll svelte-1sqkqy0">${each(media_categories_arr[i], (item) => {
          return `<button class="media-item svelte-1sqkqy0"><img class="thumbnail svelte-1sqkqy0" src="${"thumbnails/" + escape(item.title, true) + ".jpeg"}" alt=""> <div class="media-title svelte-1sqkqy0">${escape(item.title)}</div> <div class="media-caption svelte-1sqkqy0">${escape(item.type)}</div> </button>`;
        })}</div> </section>`;
      })} `;
    });
  }
});

// .svelte-kit/output/server/nodes/10.js
var __exports11 = {};
__export(__exports11, {
  component: () => component11,
  fonts: () => fonts11,
  imports: () => imports11,
  index: () => index11,
  stylesheets: () => stylesheets11
});
var index11, component_cache11, component11, imports11, stylesheets11, fonts11;
var init__11 = __esm({
  ".svelte-kit/output/server/nodes/10.js"() {
    index11 = 10;
    component11 = async () => component_cache11 ??= (await Promise.resolve().then(() => (init_page_svelte9(), page_svelte_exports9))).default;
    imports11 = ["_app/immutable/nodes/10.55076250.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/each.e59479a4.js", "_app/immutable/chunks/index.9da56747.js"];
    stylesheets11 = ["_app/immutable/assets/10.a62980a0.css"];
    fonts11 = [];
  }
});

// .svelte-kit/output/server/entries/pages/search/_page.svelte.js
var page_svelte_exports10 = {};
__export(page_svelte_exports10, {
  default: () => Page10
});
var css$14, SearchError, css9, Page10;
var init_page_svelte10 = __esm({
  ".svelte-kit/output/server/entries/pages/search/_page.svelte.js"() {
    init_ssr();
    init_data();
    css$14 = {
      code: ".error.svelte-s3ziko{display:grid;grid-gap:12pt;padding:0 12pt}img.svelte-s3ziko{width:240pt}p.svelte-s3ziko{width:240pt}",
      map: null
    };
    SearchError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { val } = $$props;
      if ($$props.val === void 0 && $$bindings.val && val !== void 0)
        $$bindings.val(val);
      $$result.css.add(css$14);
      return ` <div class="error svelte-s3ziko" data-svelte-h="svelte-64co4h"><img src="icons/dog.png" alt="" class="svelte-s3ziko"> <p class="svelte-s3ziko">Sorry, we have results to show!<br></p></div> `;
    });
    css9 = {
      code: ".media-grid.svelte-19e0aks{display:grid;grid-template-columns:repeat(auto-fill, minmax(160pt, 1fr));row-gap:8pt}.item.svelte-19e0aks{display:grid;grid-gap:8pt;padding:8pt}.item.svelte-19e0aks:hover{background:var(--l2)}.info.svelte-19e0aks{font-weight:500}.media-caption.svelte-19e0aks{font-weight:400;opacity:0.5}.thumbnail.svelte-19e0aks{width:100%;aspect-ratio:16 / 9;overflow:hidden}",
      map: null
    };
    Page10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let search_result = [];
      db.subscribe((data) => {
        search_result = data.search_result;
      });
      $$result.css.add(css9);
      return ` <div class="page moat-delete"><div class="search-bar" data-svelte-h="svelte-1xgkx8q"><input type="text" placeholder="I want to watch..."></div> <div class="media-grid svelte-19e0aks">${each(search_result, (item) => {
        return `<a href="${"/" + escape(item.type == "TV Show" ? "episode-selector" : "watch", true)}" class="item svelte-19e0aks"><img class="thumbnail svelte-19e0aks" src="${"thumbnails/" + escape(item.title, true) + ".jpeg"}" alt=""> <div class="info svelte-19e0aks"><div class="media-title">${escape(item.title)}</div> <div class="media-caption svelte-19e0aks">${escape(item.type)}</div></div> </a>`;
      })}</div> ${search_result.length == 0 ? `${validate_component(SearchError, "SearchError").$$render($$result, {}, {}, {})}` : ``}</div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/11.js
var __exports12 = {};
__export(__exports12, {
  component: () => component12,
  fonts: () => fonts12,
  imports: () => imports12,
  index: () => index12,
  stylesheets: () => stylesheets12
});
var index12, component_cache12, component12, imports12, stylesheets12, fonts12;
var init__12 = __esm({
  ".svelte-kit/output/server/nodes/11.js"() {
    index12 = 11;
    component12 = async () => component_cache12 ??= (await Promise.resolve().then(() => (init_page_svelte10(), page_svelte_exports10))).default;
    imports12 = ["_app/immutable/nodes/11.605d3ea2.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/each.e59479a4.js", "_app/immutable/chunks/index.9da56747.js", "_app/immutable/chunks/data.eb78c716.js", "_app/immutable/chunks/index.e0bf5ff3.js"];
    stylesheets12 = ["_app/immutable/assets/11.e2365519.css", "_app/immutable/assets/SearchError.7629b045.css"];
    fonts12 = [];
  }
});

// .svelte-kit/output/server/entries/pages/watch/_page.svelte.js
var page_svelte_exports11 = {};
__export(page_svelte_exports11, {
  default: () => Page11
});
var css10, Page11;
var init_page_svelte11 = __esm({
  ".svelte-kit/output/server/entries/pages/watch/_page.svelte.js"() {
    init_ssr();
    init_data();
    css10 = {
      code: ".viewer.svelte-1uyzt2e{display:grid;width:calc(100vw - (2 * var(--inline-moat)));padding:0 var(--inline-moat);row-gap:1rem}video.svelte-1uyzt2e{display:block;width:calc(100% - 0.5rem);padding:0.25rem;background:var(--l1);border-radius:4pt}.media-title.svelte-1uyzt2e{font-size:1.4rem;font-weight:700}.media-caption.svelte-1uyzt2e{font-weight:600;opacity:0.5}",
      map: null
    };
    Page11 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css10);
      return ` <div class="page padding-delete">${`<h2 data-svelte-h="svelte-a1w7t4">.....</h2>`}</div> `;
    });
  }
});

// .svelte-kit/output/server/nodes/12.js
var __exports13 = {};
__export(__exports13, {
  component: () => component13,
  fonts: () => fonts13,
  imports: () => imports13,
  index: () => index13,
  stylesheets: () => stylesheets13
});
var index13, component_cache13, component13, imports13, stylesheets13, fonts13;
var init__13 = __esm({
  ".svelte-kit/output/server/nodes/12.js"() {
    index13 = 12;
    component13 = async () => component_cache13 ??= (await Promise.resolve().then(() => (init_page_svelte11(), page_svelte_exports11))).default;
    imports13 = ["_app/immutable/nodes/12.3f0dc3bb.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js", "_app/immutable/chunks/data.eb78c716.js", "_app/immutable/chunks/index.e0bf5ff3.js", "_app/immutable/chunks/index.9da56747.js", "_app/immutable/chunks/_page.svelte_svelte_type_style_lang.32c5e887.js", "_app/immutable/chunks/each.e59479a4.js"];
    stylesheets13 = ["_app/immutable/assets/12.2d7fd6ae.css", "_app/immutable/assets/_page.2c2a8959.css"];
    fonts13 = [];
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_ssr();
var base = "";
var assets = base;
var initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page2);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width" />\n		<title>Baileo</title>\n		<script src="https://kit.fontawesome.com/5cf062dc93.js" crossorigin="anonymous"><\/script>\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "rzqvum"
};
function get_hooks() {
  return {};
}

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c2) {
  return escaped[c2] || c2;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index15 = p++;
    indexes.set(thing, index15);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index15] = `["${key2}",${flatten(value2)}]`;
        return index15;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index15] = str;
    return index15;
  }
  const index14 = flatten(value);
  if (index14 < 0)
    return `${index14}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_chunks();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
  "HEAD"
]);
var PAGE_METHODS = /* @__PURE__ */ new Set(["GET", "POST", "HEAD"]);
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
var HttpError = class {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ActionFailure = class {
  /**
   * @param {number} status
   * @param {T} [data]
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function error(status, body) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, body);
}
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder$3.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
var encoder$3 = new TextEncoder();
function text(body, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    const encoded = encoder$3.encode(body);
    headers.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers
    });
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | import('../runtime/control.js').HttpError | Error} */
    error2
  );
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = Array.from(ENDPOINT_METHODS).filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options2.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent)
    uses.push('"parent":1');
  if (node.uses?.route)
    uses.push('"route":1');
  if (node.uses?.url)
    uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return new Response(void 0, {
        status: e3.status,
        headers: { location: e3.location }
      });
    }
    throw e3;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (ENDPOINT_METHODS.has(method) && !PAGE_METHODS.has(method)) {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = (
  /** @type {const} */
  [
    "href",
    "pathname",
    "search",
    "searchParams",
    "toString",
    "toJSON"
  ]
);
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")})`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e3) {
    const error2 = (
      /** @type {any} */
      e3
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
async function load_server_data({
  event,
  state,
  node,
  parent,
  // TODO 2.0: Remove this
  track_server_fetches
}) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      if (track_server_fetches) {
        uses.dependencies.add(url2.href);
      }
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url
  });
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  return data;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  return async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
              ),
              request_headers: cloned_headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i)
        hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    else if (key2 === "age")
      age = value;
    else if (key2 === "vary" && value.trim() === "*")
      varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c2 = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c2;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d = this.#directives;
    this.#script_src = [];
    this.#style_src = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    this.#script_needs_csp = !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.#style_needs_csp = !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  /** @param {string} content */
  add_script(content) {
    if (this.#script_needs_csp) {
      if (this.#use_hashes) {
        this.#script_src.push(`sha256-${sha256(content)}`);
      } else if (this.#script_src.length === 0) {
        this.#script_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (this.#style_needs_csp) {
      if (this.#use_hashes) {
        this.#style_src.push(`sha256-${sha256(content)}`);
      } else if (this.#style_src.length === 0) {
        this.#style_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r3) => {
    fulfil = f;
    reject = r3;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done)
              deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets14 = new Set(client.stylesheets);
  const fonts14 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets14.add(url);
      for (const url of node.fonts)
        fonts14.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets14) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts14) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      assets && `assets: ${s(assets)}`,
      `base: ${base_expression}`,
      `env: ${s(public_env)}`
    ].filter(Boolean);
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch (e3) {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global}.resolve(${str})<\/script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({}),
        track_server_fetches: options2.track_server_fetches
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return redirect_response(e3.status, e3.location);
    }
    return static_error_page(
      options2,
      e3 instanceof HttpError ? e3.status : 500,
      (await handle_error_and_jsonify(event, options2, e3)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var encoder = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n2 == void 0 ? n2 : await manifest2._.nodes[n2]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e3) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e3
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e3) {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !state.prerendering) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index14 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index14]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: get_option(nodes, "ssr") ?? true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e3) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e3,
      resolve_opts
    });
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c2 = new_cookies[name];
      if (c2 && domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
        return c2.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = opts?.decode || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder });
      for (const c2 of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
          cookies2[c2.name] = c2.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      set_internal(name, value, { ...defaults, ...opts });
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, opts) {
    const path = opts.path ?? default_path;
    new_cookies[name] = {
      name,
      value,
      options: {
        ...opts,
        path
      }
    };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header, set_internal }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            set_internal(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  function validate(module, file) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2))
        continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
var valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
var valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
var valid_server_exports = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "HEAD",
  "fallback",
  "prerender",
  "trailingSlash",
  "config",
  "entries"
]);
var validate_layout_exports = validator(valid_layout_exports);
var validate_page_exports = validator(valid_page_exports);
var validate_layout_server_exports = validator(valid_layout_server_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state,
      get_cookie_header,
      set_internal
    });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e3) : route?.page && is_action_json_request(event) ? action_json_redirect(e3) : redirect_response(e3.status, e3.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e3);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e3) {
      return await handle_fatal_error(event2, options2, e3);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
var Server = class {
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    set_private_env(
      filter_private_env(env, {
        public_prefix: this.#options.env_public_prefix,
        private_prefix: this.#options.env_private_prefix
      })
    );
    set_public_env(
      filter_public_env(env, {
        public_prefix: this.#options.env_public_prefix,
        private_prefix: this.#options.env_private_prefix
      })
    );
    if (!this.#options.hooks) {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve }) => resolve(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
        };
      } catch (error2) {
        {
          throw error2;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};

// .svelte-kit/cloudflare-tmp/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set([".DS_Store", "action/American Psycho.jpeg", "action/Coraline.jpeg", "banks/American Express.png", "banks/Capital One.png", "banks/Chase.png", "banks/Discover.png", "banks/Lexus Financial.png", "banks/Synchrony.png", "banks/US Bank.png", "banks/Wells Fargo.png", "favicon.png", "icons/book.svg", "icons/close.svg", "icons/coins.svg", "icons/compass-fill.svg", "icons/compass.svg", "icons/credit-card.svg", "icons/delete.svg", "icons/dog.png", "icons/gear.svg", "icons/history.svg", "icons/left.svg", "icons/list.svg", "icons/logo.png", "icons/love.svg", "icons/moon.svg", "icons/play.svg", "icons/right.svg", "icons/search.svg", "icons/trash.svg", "icons/unlove.svg", "icons/video.svg", "logo.png", "thumbnails/21 Jump Street.jpeg", "thumbnails/A Quiet Place.jpeg", "thumbnails/American Auto.jpeg", "thumbnails/American Pie.jpeg", "thumbnails/American Psycho.jpeg", "thumbnails/Anchorman 2.jpeg", "thumbnails/Anchorman.jpeg", "thumbnails/Avengers ENDGAME.jpeg", "thumbnails/Bird Box.jpeg", "thumbnails/Black Panther.jpeg", "thumbnails/Cars 2.jpeg", "thumbnails/Cars 3.jpeg", "thumbnails/Cars.jpeg", "thumbnails/Central Intelligence.jpeg", "thumbnails/Clueless.jpeg", "thumbnails/Coraline.jpeg", "thumbnails/Cowboy Bebop.jpeg", "thumbnails/Daddys Home 2.jpeg", "thumbnails/Daddys Home.jpeg", "thumbnails/Despicable Me 2.jpeg", "thumbnails/Despicable Me 3.jpeg", "thumbnails/Despicable Me.jpeg", "thumbnails/Dumb and Dumber To.jpeg", "thumbnails/Dumb and Dumber.jpeg", "thumbnails/Elf.jpeg", "thumbnails/Family Guy.jpeg", "thumbnails/Ferris Buellers Day Off.jpeg", "thumbnails/Fight Club.jpeg", "thumbnails/Five Nights at Freddys.jpeg", "thumbnails/Frenemies.jpeg", "thumbnails/Game Night.jpeg", "thumbnails/Get Hard.jpeg", "thumbnails/Grand Budapest Hotel.jpeg", "thumbnails/Halloween.jpeg", "thumbnails/Hidden Figures.jpeg", "thumbnails/Horrible Bosses.jpeg", "thumbnails/House.jpeg", "thumbnails/Interstellar.jpeg", "thumbnails/It - Chapter 2.jpeg", "thumbnails/It.jpeg", "thumbnails/Just Friends.jpeg", "thumbnails/Just Married.jpeg", "thumbnails/Knives Out.jpeg", "thumbnails/Legally Blonde.jpeg", "thumbnails/Mean Girls 2.jpeg", "thumbnails/Mean Girls.jpeg", "thumbnails/Minions The Rise of Gru.jpeg", "thumbnails/Minions.jpeg", "thumbnails/Miss Congeniality.jpeg", "thumbnails/Modern Family.jpeg", "thumbnails/No Country For Old Men.jpeg", "thumbnails/Old School.jpeg", "thumbnails/Parks and Recreation.jpeg", "thumbnails/Pitch Perfect.jpeg", "thumbnails/Ratatouille.jpeg", "thumbnails/Saving Private Ryan.jpeg", "thumbnails/Sherlock.jpeg", "thumbnails/Spider Man Far From Home.jpeg", "thumbnails/Spider Man Homecoming.jpeg", "thumbnails/Spider Man No Way Home.jpeg", "thumbnails/Spy.jpeg", "thumbnails/Squid Game.jpeg", "thumbnails/Step Brothers.jpeg", "thumbnails/Superbad.jpeg", "thumbnails/Superstore.jpeg", "thumbnails/Ted 2.jpeg", "thumbnails/Ted.jpeg", "thumbnails/Texas Chainsaw Massacre.jpeg", "thumbnails/The Amazing Spider Man 2.jpeg", "thumbnails/The Bucket List.jpeg", "thumbnails/The Cat In The Hat.jpeg", "thumbnails/The Conjuring.jpeg", "thumbnails/The Devil Wears Prada.jpeg", "thumbnails/The Exorcist.jpeg", "thumbnails/The Founder.jpeg", "thumbnails/The Hangover Part II.jpeg", "thumbnails/The Hangover Part III.jpeg", "thumbnails/The Hangover.jpeg", "thumbnails/The Holiday.jpeg", "thumbnails/The Incredible Hulk.jpeg", "thumbnails/The Intern.jpeg", "thumbnails/The Interview.jpeg", "thumbnails/The Notebook.jpeg", "thumbnails/The Office.jpeg", "thumbnails/The Other Guys.jpeg", "thumbnails/The Proposal.jpeg", "thumbnails/The Shining.jpeg", "thumbnails/The Truman Show.jpeg", "thumbnails/The Waterboy.jpeg", "thumbnails/The Wedding Planner.jpeg", "thumbnails/The Witch.jpeg", "thumbnails/The Wolf of Wall Street.jpeg", "thumbnails/Trick r Treat.jpeg", "thumbnails/Vacation.jpeg", "thumbnails/Venom.jpeg", "thumbnails/Wanda Vision.jpeg", "thumbnails/Wedding Crashers.jpeg", "thumbnails/Were the Millers.jpeg", "thumbnails/old (large)/A Quiet Place.png", "thumbnails/old (large)/American Psycho.png", "thumbnails/old (large)/Avengers ENDGAME.png", "thumbnails/old (large)/Bird Box.jpeg", "thumbnails/old (large)/Black Panther.jpeg", "thumbnails/old (large)/Cars 2.png", "thumbnails/old (large)/Cars 3.png", "thumbnails/old (large)/Clueless.png", "thumbnails/old (large)/Coraline.png", "thumbnails/old (large)/Daddys Home 2.png", "thumbnails/old (large)/Despicable Me 2.png", "thumbnails/old (large)/Despicable Me 3.png", "thumbnails/old (large)/Despicable Me.png", "thumbnails/old (large)/Dumb and Dumber To.png", "thumbnails/old (large)/Dumb and Dumber.png", "thumbnails/old (large)/Elf.png", "thumbnails/old (large)/Family Guy.png", "thumbnails/old (large)/Frenemies.png", "thumbnails/old (large)/Hidden Figures.png", "thumbnails/old (large)/Interstellar.jpeg", "thumbnails/old (large)/It - Chapter 2.jpeg", "thumbnails/old (large)/It.png", "thumbnails/old (large)/Just Friends.png", "thumbnails/old (large)/Just Married.png", "thumbnails/old (large)/Knives Out.png", "thumbnails/old (large)/Legally Blonde.png", "thumbnails/old (large)/Mean Girls 2.png", "thumbnails/old (large)/Mean Girls.png", "thumbnails/old (large)/Minions The Rise of Gru.png", "thumbnails/old (large)/Minions.png", "thumbnails/old (large)/Miss Congeniality.png", "thumbnails/old (large)/Modern Family.png", "thumbnails/old (large)/Parks and Recreation.png", "thumbnails/old (large)/Pitch Perfect.png", "thumbnails/old (large)/Ratatouille.png", "thumbnails/old (large)/Sherlock.png", "thumbnails/old (large)/Spider Man Far From Home.png", "thumbnails/old (large)/Spider Man Homecoming.png", "thumbnails/old (large)/Spider Man No Way Home.png", "thumbnails/old (large)/Squid Game.png", "thumbnails/old (large)/Step Brothers.png", "thumbnails/old (large)/Superstore.png", "thumbnails/old (large)/Ted 2.jpeg", "thumbnails/old (large)/Ted.jpeg", "thumbnails/old (large)/Texas Chainsaw Massacre.jpeg", "thumbnails/old (large)/The Amazing Spider Man 2.png", "thumbnails/old (large)/The Conjuring.jpeg", "thumbnails/old (large)/The Devil Wears Prada.png", "thumbnails/old (large)/The Exorcist.jpeg", "thumbnails/old (large)/The Founder.jpeg", "thumbnails/old (large)/The Holiday.png", "thumbnails/old (large)/The Incredible Hulk.png", "thumbnails/old (large)/The Intern.png", "thumbnails/old (large)/The Notebook.png", "thumbnails/old (large)/The Office.png", "thumbnails/old (large)/The Proposal.png", "thumbnails/old (large)/The Waterboy.png", "thumbnails/old (large)/The Wedding Planner.png", "thumbnails/old (large)/The Witch.jpeg", "thumbnails/old (large)/Trick r Treat.png", "thumbnails/old (large)/Vacation.png", "thumbnails/old (large)/Venom.jpeg", "thumbnails/old (large)/Wanda Vision.png"]),
    mimeTypes: { ".jpeg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml" },
    _: {
      client: { "start": "_app/immutable/entry/start.3dbff448.js", "app": "_app/immutable/entry/app.0763173b.js", "imports": ["_app/immutable/entry/start.3dbff448.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/singletons.c8208491.js", "_app/immutable/chunks/index.e0bf5ff3.js", "_app/immutable/chunks/paths.e70e99f1.js", "_app/immutable/entry/app.0763173b.js", "_app/immutable/chunks/scheduler.e80ae01c.js", "_app/immutable/chunks/index.b2ac34d8.js"], "stylesheets": [], "fonts": [] },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5))),
        __memo(() => Promise.resolve().then(() => (init__6(), __exports6))),
        __memo(() => Promise.resolve().then(() => (init__7(), __exports7))),
        __memo(() => Promise.resolve().then(() => (init__8(), __exports8))),
        __memo(() => Promise.resolve().then(() => (init__9(), __exports9))),
        __memo(() => Promise.resolve().then(() => (init__10(), __exports10))),
        __memo(() => Promise.resolve().then(() => (init__11(), __exports11))),
        __memo(() => Promise.resolve().then(() => (init__12(), __exports12))),
        __memo(() => Promise.resolve().then(() => (init__13(), __exports13)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/advai",
          pattern: /^\/advai\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: "/credit",
          pattern: /^\/credit\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: "/episode-selector",
          pattern: /^\/episode-selector\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        },
        {
          id: "/insomnia",
          pattern: /^\/insomnia\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 6 },
          endpoint: null
        },
        {
          id: "/library",
          pattern: /^\/library\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 7 },
          endpoint: null
        },
        {
          id: "/music",
          pattern: /^\/music\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 8 },
          endpoint: null
        },
        {
          id: "/new",
          pattern: /^\/new\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 9 },
          endpoint: null
        },
        {
          id: "/proto",
          pattern: /^\/proto\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 10 },
          endpoint: null
        },
        {
          id: "/search",
          pattern: /^\/search\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 11 },
          endpoint: null
        },
        {
          id: "/watch",
          pattern: /^\/watch\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 12 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      }
    }
  };
})();
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/cloudflare-tmp/_worker.js
async function e(e3, t2) {
  let n2 = "string" != typeof t2 && "HEAD" === t2.method;
  n2 && (t2 = new Request(t2, { method: "GET" }));
  let r3 = await e3.match(t2);
  return n2 && r3 && (r3 = new Response(null, r3)), r3;
}
function t(e3, t2, n2, o2) {
  return ("string" == typeof t2 || "GET" === t2.method) && r(n2) && (n2.headers.has("Set-Cookie") && (n2 = new Response(n2.body, n2)).headers.append("Cache-Control", "private=Set-Cookie"), o2.waitUntil(e3.put(t2, n2.clone()))), n2;
}
var n = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function r(e3) {
  if (!n.has(e3.status))
    return false;
  if (~(e3.headers.get("Vary") || "").indexOf("*"))
    return false;
  let t2 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t2);
}
function o(n2) {
  return async function(r3, o2) {
    let a = await e(n2, r3);
    if (a)
      return a;
    o2.defer((e3) => {
      t(n2, r3, e3, o2);
    });
  };
}
var s2 = caches.default;
var c = t.bind(0, s2);
var r2 = e.bind(0, s2);
var e2 = o.bind(0, s2);
var server = new Server(manifest);
var worker = {
  async fetch(req, env, context) {
    await server.init({ env });
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await r2(req);
    if (res)
      return res;
    let { pathname } = new URL(req.url);
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
    }
    const stripped_pathname = pathname.replace(/\/$/, "");
    let is_static_asset = false;
    const filename = stripped_pathname.substring(1);
    if (filename) {
      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html");
    }
    const location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";
    if (is_static_asset || prerendered.has(pathname)) {
      res = await env.ASSETS.fetch(req);
    } else if (location && prerendered.has(location)) {
      res = new Response("", {
        status: 308,
        headers: {
          location
        }
      });
    } else {
      res = await server.respond(req, {
        // @ts-ignore
        platform: { env, context, caches, cf: req.cf },
        getClientAddress() {
          return req.headers.get("cf-connecting-ip");
        }
      });
    }
    pragma = res.headers.get("cache-control") || "";
    return pragma && res.status < 400 ? c(req, res, context) : res;
  }
};
var worker_default = worker;
export {
  worker_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=_worker.js.map

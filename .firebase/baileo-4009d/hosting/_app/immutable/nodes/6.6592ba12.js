import{S as be,i as ye,s as ke,d as U,U as je,v as Te,p,y as R,c as j,q as g,r as E,z as X,f as N,l as v,w as it,x as w,u,g as z,J as d,A as ve,L as H,V as dt,K as oe,I as J,R as ht,e as Ve,T as Et,k as re,h as he,C as Ce,D as Pe,E as Le,B as St,j as Mt,F as De,M as Bt}from"../chunks/index.435cddde.js";import{m as Y,c as mt,e as we,s as b,h as lt,d as ct}from"../chunks/main.5e90a5e0.js";const Z="src/lib/modules/TV-Panel.svelte";function at(n,e,s){const a=n.slice();return a[6]=e[s],a[10]=s,a}function vt(n){let e,s,a;const r={c:function(){e=p("button"),s=p("img"),this.h()},l:function(o){e=g(o,"BUTTON",{class:!0});var i=E(e);s=g(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(v),this.h()},h:function(){J(s.src,a="icons/left.svg")||u(s,"src",a),u(s,"alt","Icon"),u(s,"class","s-vHaLhKH0CMC1"),w(s,Z,52,42,1546),u(e,"class","left inactive s-vHaLhKH0CMC1"),w(e,Z,52,12,1516)},m:function(o,i){z(o,e,i),d(e,s)},p:H,d:function(o){o&&v(e)}};return U("SvelteRegisterBlock",{block:r,id:vt.name,type:"else",source:"(52:8) {:else}",ctx:n}),r}function _t(n){let e,s,a,r,t;const o={c:function(){e=p("button"),s=p("img"),this.h()},l:function(c){e=g(c,"BUTTON",{class:!0});var l=E(e);s=g(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(v),this.h()},h:function(){J(s.src,a="icons/left.svg")||u(s,"src",a),u(s,"alt","Icon"),u(s,"class","s-vHaLhKH0CMC1"),w(s,Z,50,59,1441),u(e,"class","left s-vHaLhKH0CMC1"),w(e,Z,50,12,1394)},m:function(c,l){z(c,e,l),d(e,s),r||(t=oe(e,"click",n[4],!1,!1,!1,!1),r=!0)},p:H,d:function(c){c&&v(e),r=!1,t()}};return U("SvelteRegisterBlock",{block:o,id:_t.name,type:"if",source:"(50:8) {#if media.season !== 1}",ctx:n}),o}function pt(n){let e,s,a;const r={c:function(){e=p("button"),s=p("img"),this.h()},l:function(o){e=g(o,"BUTTON",{class:!0});var i=E(e);s=g(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(v),this.h()},h:function(){J(s.src,a="icons/right.svg")||u(s,"src",a),u(s,"alt","Icon"),u(s,"class","s-vHaLhKH0CMC1"),w(s,Z,58,43,1812),u(e,"class","right inactive s-vHaLhKH0CMC1"),w(e,Z,58,12,1781)},m:function(o,i){z(o,e,i),d(e,s)},p:H,d:function(o){o&&v(e)}};return U("SvelteRegisterBlock",{block:r,id:pt.name,type:"else",source:"(58:8) {:else}",ctx:n}),r}function gt(n){let e,s,a,r,t;const o={c:function(){e=p("button"),s=p("img"),this.h()},l:function(c){e=g(c,"BUTTON",{class:!0});var l=E(e);s=g(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(v),this.h()},h:function(){J(s.src,a="icons/right.svg")||u(s,"src",a),u(s,"alt","Icon"),u(s,"class","s-vHaLhKH0CMC1"),w(s,Z,56,56,1705),u(e,"class","right s-vHaLhKH0CMC1"),w(e,Z,56,12,1661)},m:function(c,l){z(c,e,l),d(e,s),r||(t=oe(e,"click",n[5],!1,!1,!1,!1),r=!0)},p:H,d:function(c){c&&v(e),r=!1,t()}};return U("SvelteRegisterBlock",{block:o,id:gt.name,type:"if",source:"(56:8) {#if media.season !== maxSeason}",ctx:n}),o}function Xe(n){let e,s,a=we(n[6])+"",r,t,o,i,c=n[10]+1+"",l,_,f,h,m;function S(){return n[7](n[10])}const y={c:function(){e=p("button"),s=p("div"),r=R(a),t=j(),o=p("div"),i=R("E"),l=R(c),_=j(),this.h()},l:function(k){e=g(k,"BUTTON",{class:!0});var P=E(e);s=g(P,"DIV",{class:!0});var C=E(s);r=X(C,a),C.forEach(v),t=N(P),o=g(P,"DIV",{class:!0});var M=E(o);i=X(M,"E"),l=X(M,c),M.forEach(v),_=N(P),P.forEach(v),this.h()},h:function(){u(s,"class","title s-vHaLhKH0CMC1"),w(s,Z,66,12,2100),u(o,"class","count s-vHaLhKH0CMC1"),w(o,Z,67,12,2169),u(e,"class",f="item "+(n[10]+1==n[1].episode?"active":"")+" s-vHaLhKH0CMC1"),w(e,Z,65,8,1989)},m:function(k,P){z(k,e,P),d(e,s),d(s,r),d(e,t),d(e,o),d(o,i),d(o,l),d(e,_),h||(m=oe(e,"click",S,!1,!1,!1,!1),h=!0)},p:function(k,P){n=k,P&3&&a!==(a=we(n[6])+"")&&ve(r,a),P&2&&f!==(f="item "+(n[10]+1==n[1].episode?"active":"")+" s-vHaLhKH0CMC1")&&u(e,"class",f)},d:function(k){k&&v(e),h=!1,m()}};return U("SvelteRegisterBlock",{block:y,id:Xe.name,type:"each",source:"(65:4) {#each mediaDB[title]['s' + media.season] as episode, e}",ctx:n}),y}function Ke(n){let e,s,a,r=n[1].season+"",t,o,i,c,l,_,f,h,m,S;function y(I,T){return I[1].season!==1?_t:vt}let A=y(n),k=A(n);function P(I,T){return I[1].season!==I[2]?gt:pt}let C=P(n),M=C(n),W=Y[n[0]]["s"+n[1].season];je(W);let L=[];for(let I=0;I<W.length;I+=1)L[I]=Xe(at(n,W,I));const te={c:function(){e=p("div"),s=p("div"),a=R("Season "),t=R(r),o=j(),i=p("span"),c=R("of "),l=R(n[2]),_=j(),f=p("div"),k.c(),h=j(),M.c(),m=j(),S=p("div");for(let T=0;T<L.length;T+=1)L[T].c();this.h()},l:function(T){e=g(T,"DIV",{class:!0});var K=E(e);s=g(K,"DIV",{class:!0});var B=E(s);a=X(B,"Season "),t=X(B,r),o=N(B),i=g(B,"SPAN",{style:!0});var F=E(i);c=X(F,"of "),l=X(F,n[2]),F.forEach(v),B.forEach(v),_=N(K),f=g(K,"DIV",{class:!0});var ie=E(f);k.l(ie),h=N(ie),M.l(ie),ie.forEach(v),K.forEach(v),m=N(T),S=g(T,"DIV",{class:!0});var Q=E(S);for(let $=0;$<L.length;$+=1)L[$].l(Q);Q.forEach(v),this.h()},h:function(){it(i,"font-size","10pt"),it(i,"color","gray"),w(i,Z,46,45,1247),u(s,"class","title s-vHaLhKH0CMC1"),w(s,Z,46,4,1206),u(f,"class","navigation s-vHaLhKH0CMC1"),w(f,Z,48,4,1324),u(e,"class","top-bar s-vHaLhKH0CMC1"),w(e,Z,45,0,1180),u(S,"class","episode-list s-vHaLhKH0CMC1"),w(S,Z,63,0,1893)},m:function(T,K){z(T,e,K),d(e,s),d(s,a),d(s,t),d(s,o),d(s,i),d(i,c),d(i,l),d(e,_),d(e,f),k.m(f,null),d(f,h),M.m(f,null),z(T,m,K),z(T,S,K);for(let B=0;B<L.length;B+=1)L[B]&&L[B].m(S,null)},p:function(T,[K]){if(K&2&&r!==(r=T[1].season+"")&&ve(t,r),A===(A=y(T))&&k?k.p(T,K):(k.d(1),k=A(T),k&&(k.c(),k.m(f,h))),C===(C=P(T))&&M?M.p(T,K):(M.d(1),M=C(T),M&&(M.c(),M.m(f,null))),K&11){W=Y[T[0]]["s"+T[1].season],je(W);let B;for(B=0;B<W.length;B+=1){const F=at(T,W,B);L[B]?L[B].p(F,K):(L[B]=Xe(F),L[B].c(),L[B].m(S,null))}for(;B<L.length;B+=1)L[B].d(1);L.length=W.length}},i:H,o:H,d:function(T){T&&v(e),k.d(),M.d(),T&&v(m),T&&v(S),dt(L,T)}};return U("SvelteRegisterBlock",{block:te,id:Ke.name,type:"component",source:"",ctx:n}),te}function It(n,e,s){let{$$slots:a={},$$scope:r}=e;Te("TV_Panel",a,[]);let{title:t,media:o}=e,i=o.season,c=o.episode,l=Y[o.title].sTotal;function _(y){b.set(`${t} progress`,"0"),b.set(`${t} season`,o.season),b.set(`${t} episode`,y),b.confirm(`${o.title} progress`,"0",()=>{window.location.reload()})}function f(){b.set(`${t} progress`,"0"),b.set(`${t} season`,Number(o.season)-1),b.set(`${t} episode`,"1"),b.confirm(`${o.title} progress`,"0",()=>{window.location.reload()})}function h(){b.set(`${t} progress`,"0"),b.set(`${t} season`,Number(o.season)+1),b.set(`${t} episode`,"1"),b.confirm(`${o.title} progress`,"0",()=>{window.location.reload()})}n.$$.on_mount.push(function(){t===void 0&&!("title"in e||n.$$.bound[n.$$.props.title])&&console.warn("<TV_Panel> was created without expected prop 'title'"),o===void 0&&!("media"in e||n.$$.bound[n.$$.props.media])&&console.warn("<TV_Panel> was created without expected prop 'media'")});const m=["title","media"];Object.keys(e).forEach(y=>{!~m.indexOf(y)&&y.slice(0,2)!=="$$"&&y!=="slot"&&console.warn(`<TV_Panel> was created with unknown prop '${y}'`)});const S=y=>_(y+1);return n.$$set=y=>{"title"in y&&s(0,t=y.title),"media"in y&&s(1,o=y.media)},n.$capture_state=()=>({title:t,media:o,mediaDB:Y,media_controls:mt,serverTypeConversion:we,storage:b,season:i,episode:c,maxSeason:l,openEpisode:_,previousSeason:f,nextSeason:h}),n.$inject_state=y=>{"title"in y&&s(0,t=y.title),"media"in y&&s(1,o=y.media),"season"in y&&(i=y.season),"episode"in y&&s(6,c=y.episode),"maxSeason"in y&&s(2,l=y.maxSeason)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[t,o,l,_,f,h,c,S]}class wt extends be{constructor(e){super(e),ye(this,e,It,Ke,ke,{title:0,media:1}),U("SvelteRegisterComponent",{component:this,tagName:"TV_Panel",options:e,id:Ke.name})}get title(){throw new Error("<TV_Panel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<TV_Panel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get media(){throw new Error("<TV_Panel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set media(e){throw new Error("<TV_Panel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{Object:Vt}=ht,me="src/lib/modules/More-to-Watch.svelte";function rt(n,e,s){const a=n.slice();return a[0]=e[s],a}function Ae(n){let e,s,a,r,t,o,i=n[0]+"",c,l,_,f=n[2](n[0])+"",h,m,S,y;function A(){return n[3](n[0])}const k={c:function(){e=p("button"),s=p("img"),r=j(),t=p("div"),o=p("div"),c=R(i),l=j(),_=p("div"),h=R(f),m=j(),this.h()},l:function(C){e=g(C,"BUTTON",{class:!0});var M=E(e);s=g(M,"IMG",{src:!0,alt:!0,class:!0}),r=N(M),t=g(M,"DIV",{class:!0});var W=E(t);o=g(W,"DIV",{class:!0});var L=E(o);c=X(L,i),L.forEach(v),l=N(W),_=g(W,"DIV",{class:!0});var te=E(_);h=X(te,f),te.forEach(v),W.forEach(v),m=N(M),M.forEach(v),this.h()},h:function(){J(s.src,a="thumbnails/"+n[0]+".png")||u(s,"src",a),u(s,"alt","Media Thumbnail"),u(s,"class","s-m2LZ31Nv1YxL"),w(s,me,53,12,1430),u(o,"class","title s-m2LZ31Nv1YxL"),w(o,me,55,16,1534),u(_,"class","caption s-m2LZ31Nv1YxL"),w(_,me,56,16,1583),u(t,"class","info"),w(t,me,54,12,1499),u(e,"class","media-item s-m2LZ31Nv1YxL"),w(e,me,52,8,1345)},m:function(C,M){z(C,e,M),d(e,s),d(e,r),d(e,t),d(t,o),d(o,c),d(t,l),d(t,_),d(_,h),d(e,m),S||(y=oe(e,"click",A,!1,!1,!1,!1),S=!0)},p:function(C,M){n=C,M&2&&!J(s.src,a="thumbnails/"+n[0]+".png")&&u(s,"src",a),M&2&&i!==(i=n[0]+"")&&ve(c,i),M&2&&f!==(f=n[2](n[0])+"")&&ve(h,f)},d:function(C){C&&v(e),S=!1,y()}};return U("SvelteRegisterBlock",{block:k,id:Ae.name,type:"each",source:"(52:4) {#each concentratePool as title}",ctx:n}),k}function We(n){let e,s,a,r,t=n[1];je(t);let o=[];for(let c=0;c<t.length;c+=1)o[c]=Ae(rt(n,t,c));const i={c:function(){e=p("div"),s=R("Similar Media"),a=j(),r=p("div");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l:function(l){e=g(l,"DIV",{class:!0});var _=E(e);s=X(_,"Similar Media"),_.forEach(v),a=N(l),r=g(l,"DIV",{class:!0});var f=E(r);for(let h=0;h<o.length;h+=1)o[h].l(f);f.forEach(v),this.h()},h:function(){u(e,"class","module-title s-m2LZ31Nv1YxL"),w(e,me,49,0,1235),u(r,"class","list s-m2LZ31Nv1YxL"),w(r,me,50,0,1281)},m:function(l,_){z(l,e,_),d(e,s),z(l,a,_),z(l,r,_);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(r,null)},p:function(l,[_]){if(_&6){t=l[1],je(t);let f;for(f=0;f<t.length;f+=1){const h=rt(l,t,f);o[f]?o[f].p(h,_):(o[f]=Ae(h),o[f].c(),o[f].m(r,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=t.length}},i:H,o:H,d:function(l){l&&v(e),l&&v(a),l&&v(r),dt(o,l)}};return U("SvelteRegisterBlock",{block:i,id:We.name,type:"component",source:"",ctx:n}),i}function Ct(n,e,s){let{$$slots:a={},$$scope:r}=e;Te("More_to_Watch",a,[]);let{title:t}=e,o=Y[t].cat,i=[],c=[];for(let h=0;h<Object.keys(Y).length;h++)Y[Object.keys(Y)[h]].cat.includes(o)&&i.push(Object.keys(Y)[h]);if(i.length<3)c=i;else for(let h=0;h<i.length-1;h++){let m=i[Math.floor(Math.random()*i.length)];if(c.includes(m)){h--;continue}else if(m==t){h--;continue}c.push(m)}function l(h){if(Y[h].type=="TV Show"){let m=Y[h].sTotal;return`TV Show - ${m} Season${m>1?"s":""}`}else return"Movie"}n.$$.on_mount.push(function(){t===void 0&&!("title"in e||n.$$.bound[n.$$.props.title])&&console.warn("<More_to_Watch> was created without expected prop 'title'")});const _=["title"];Vt.keys(e).forEach(h=>{!~_.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<More_to_Watch> was created with unknown prop '${h}'`)});const f=h=>lt(h);return n.$$set=h=>{"title"in h&&s(0,t=h.title)},n.$capture_state=()=>({title:t,mediaDB:Y,storage:b,handleMediaItemClick:lt,category:o,pool:i,concentratePool:c,generateCaption:l}),n.$inject_state=h=>{"title"in h&&s(0,t=h.title),"category"in h&&(o=h.category),"pool"in h&&(i=h.pool),"concentratePool"in h&&s(1,c=h.concentratePool)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[t,c,l,f]}class bt extends be{constructor(e){super(e),ye(this,e,Ct,We,ke,{title:0}),U("SvelteRegisterComponent",{component:this,tagName:"More_to_Watch",options:e,id:We.name})}get title(){throw new Error("<More_to_Watch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<More_to_Watch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const ut="src/lib/trinkets/Bold-Button.svelte";function qe(n){let e,s,a,r,t;const o={c:function(){e=p("div"),s=p("img"),r=j(),t=R(n[0]),this.h()},l:function(c){e=g(c,"DIV",{class:!0});var l=E(e);s=g(l,"IMG",{src:!0,alt:!0,class:!0}),r=N(l),t=X(l,n[0]),l.forEach(v),this.h()},h:function(){J(s.src,a=n[1])||u(s,"src",a),u(s,"alt","Icon"),u(s,"class","s--0ftkdqvvL-x"),w(s,ut,9,4,120),u(e,"class","button s--0ftkdqvvL-x"),w(e,ut,8,0,95)},m:function(c,l){z(c,e,l),d(e,s),d(e,r),d(e,t)},p:function(c,[l]){l&1&&ve(t,c[0])},i:H,o:H,d:function(c){c&&v(e)}};return U("SvelteRegisterBlock",{block:o,id:qe.name,type:"component",source:"",ctx:n}),o}function Pt(n,e,s){let{$$slots:a={},$$scope:r}=e;Te("Bold_Button",a,[]);let{icon:t,text:o}=e,i=`icons/${t}.svg`;n.$$.on_mount.push(function(){t===void 0&&!("icon"in e||n.$$.bound[n.$$.props.icon])&&console.warn("<Bold_Button> was created without expected prop 'icon'"),o===void 0&&!("text"in e||n.$$.bound[n.$$.props.text])&&console.warn("<Bold_Button> was created without expected prop 'text'")});const c=["icon","text"];return Object.keys(e).forEach(l=>{!~c.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<Bold_Button> was created with unknown prop '${l}'`)}),n.$$set=l=>{"icon"in l&&s(2,t=l.icon),"text"in l&&s(0,o=l.text)},n.$capture_state=()=>({icon:t,text:o,source:i}),n.$inject_state=l=>{"icon"in l&&s(2,t=l.icon),"text"in l&&s(0,o=l.text),"source"in l&&s(1,i=l.source)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[o,i,t]}class Lt extends be{constructor(e){super(e),ye(this,e,Pt,qe,ke,{icon:2,text:0}),U("SvelteRegisterComponent",{component:this,tagName:"Bold_Button",options:e,id:qe.name})}get icon(){throw new Error("<Bold_Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set icon(e){throw new Error("<Bold_Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get text(){throw new Error("<Bold_Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set text(e){throw new Error("<Bold_Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const ft="src/lib/trinkets/Toggle.svelte";function Ge(n){let e,s,a;const r={c:function(){e=p("div"),s=p("div"),this.h()},l:function(o){e=g(o,"DIV",{class:!0});var i=E(e);s=g(i,"DIV",{class:!0}),E(s).forEach(v),i.forEach(v),this.h()},h:function(){u(s,"class","coin s-j4FkAAEM7yLu"),w(s,ft,7,4,113),u(e,"class",a="toggle "+(n[0]=="true"?"active":"")+" s-j4FkAAEM7yLu"),w(e,ft,6,0,53)},m:function(o,i){z(o,e,i),d(e,s)},p:function(o,[i]){i&1&&a!==(a="toggle "+(o[0]=="true"?"active":"")+" s-j4FkAAEM7yLu")&&u(e,"class",a)},i:H,o:H,d:function(o){o&&v(e)}};return U("SvelteRegisterBlock",{block:r,id:Ge.name,type:"component",source:"",ctx:n}),r}function Dt(n,e,s){let{$$slots:a={},$$scope:r}=e;Te("Toggle",a,[]);let{active:t}=e;n.$$.on_mount.push(function(){t===void 0&&!("active"in e||n.$$.bound[n.$$.props.active])&&console.warn("<Toggle> was created without expected prop 'active'")});const o=["active"];return Object.keys(e).forEach(i=>{!~o.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Toggle> was created with unknown prop '${i}'`)}),n.$$set=i=>{"active"in i&&s(0,t=i.active)},n.$capture_state=()=>({active:t}),n.$inject_state=i=>{"active"in i&&s(0,t=i.active)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[t]}class Ze extends be{constructor(e){super(e),ye(this,e,Dt,Ge,ke,{active:0}),U("SvelteRegisterComponent",{component:this,tagName:"Toggle",options:e,id:Ge.name})}get active(){throw new Error("<Toggle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set active(e){throw new Error("<Toggle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:jt,document:ge}=ht,D="src/routes/watch/+page.svelte";function yt(n){ge.title=n[0].title;const e={c:H,l:H,m:H,d:H};return U("SvelteRegisterBlock",{block:e,id:yt.name,type:"else",source:"(190:1) {:else}",ctx:n}),e}function kt(n){ge.title=n[0].episodeDisplayTitle;const e={c:H,l:H,m:H,d:H};return U("SvelteRegisterBlock",{block:e,id:kt.name,type:"if",source:"(188:1) {#if media.type == 'TV Show'}",ctx:n}),e}function Tt(n){let e,s,a,r,t,o,i,c,l,_=n[0].title+"",f,h,m,S=n[0].description+"",y,A,k,P,C,M,W,L,te,I,T,K,B,F,ie,Q,$,$e,Ne,le,He,se,ce,xe,Ue,Oe,x,Ee,ue,ae,fe,Ye,et,q=n[0].type=="TV Show"&&Fe(n);F=new Ze({props:{active:n[1].shuffle},$$inline:!0}),le=new Ze({props:{active:n[1].autoplay},$$inline:!0});let O=n[0].type=="TV Show"&&Je(n);ae=new bt({props:{title:n[0].title},$$inline:!0});const tt={c:function(){e=p("div"),s=p("div"),a=p("div"),r=p("video"),o=j(),i=p("div"),c=p("div"),l=p("div"),f=R(_),h=j(),m=p("div"),y=R(S),A=j(),k=p("div"),q&&q.c(),P=j(),C=p("button"),M=p("img"),L=R(`
				Download`),te=j(),I=p("button"),T=p("img"),B=R(`
				Shuffle
				`),Ce(F.$$.fragment),ie=j(),Q=p("button"),$=p("img"),Ne=R(`
				Autoplay
				`),Ce(le.$$.fragment),He=j(),se=p("button"),ce=p("img"),Ue=R(`
				Mark as Complete`),Oe=j(),x=p("div"),O&&O.c(),Ee=j(),ue=p("div"),Ce(ae.$$.fragment),this.h()},l:function(V){e=g(V,"DIV",{class:!0});var G=E(e);s=g(G,"DIV",{class:!0});var ne=E(s);a=g(ne,"DIV",{class:!0});var _e=E(a);r=g(_e,"VIDEO",{src:!0,class:!0}),E(r).forEach(v),_e.forEach(v),o=N(ne),i=g(ne,"DIV",{class:!0});var pe=E(i);c=g(pe,"DIV",{class:!0});var Se=E(c);l=g(Se,"DIV",{class:!0});var st=E(l);f=X(st,_),st.forEach(v),h=N(Se),m=g(Se,"DIV",{class:!0});var nt=E(m);y=X(nt,S),nt.forEach(v),Se.forEach(v),pe.forEach(v),A=N(ne),k=g(ne,"DIV",{class:!0});var ee=E(k);q&&q.l(ee),P=N(ee),C=g(ee,"BUTTON",{class:!0});var ze=E(C);M=g(ze,"IMG",{src:!0,alt:!0,class:!0}),L=X(ze,`
				Download`),ze.forEach(v),te=N(ee),I=g(ee,"BUTTON",{class:!0});var Me=E(I);T=g(Me,"IMG",{src:!0,alt:!0,class:!0}),B=X(Me,`
				Shuffle
				`),Pe(F.$$.fragment,Me),Me.forEach(v),ie=N(ee),Q=g(ee,"BUTTON",{class:!0});var Be=E(Q);$=g(Be,"IMG",{src:!0,alt:!0,class:!0}),Ne=X(Be,`
				Autoplay
				`),Pe(le.$$.fragment,Be),Be.forEach(v),He=N(ee),se=g(ee,"BUTTON",{class:!0});var Re=E(se);ce=g(Re,"IMG",{src:!0,alt:!0,class:!0}),Ue=X(Re,`
				Mark as Complete`),Re.forEach(v),ee.forEach(v),ne.forEach(v),Oe=N(G),x=g(G,"DIV",{class:!0});var Ie=E(x);O&&O.l(Ie),Ee=N(Ie),ue=g(Ie,"DIV",{class:!0});var ot=E(ue);Pe(ae.$$.fragment,ot),ot.forEach(v),Ie.forEach(v),G.forEach(v),this.h()},h:function(){J(r.src,t="https://209.163.185.11/videos/"+n[0].path)||u(r,"src",t),r.controls=!0,r.autoplay=!0,u(r,"class","s-4Xht8e93UYcz"),w(r,D,203,4,5531),u(a,"class","video-wrapper s-4Xht8e93UYcz"),w(a,D,200,2,5390),u(l,"class","title s-4Xht8e93UYcz"),w(l,D,213,4,5855),u(m,"class","description s-4Xht8e93UYcz"),w(m,D,214,4,5898),u(c,"class","info"),w(c,D,212,3,5832),u(i,"class","more-menu"),w(i,D,210,2,5772),J(M.src,W="icons/download.svg")||u(M,"src",W),u(M,"alt","Icon"),u(M,"class","s-4Xht8e93UYcz"),w(M,D,228,4,6254),u(C,"class","s-4Xht8e93UYcz"),w(C,D,227,3,6213),J(T.src,K="icons/shuffle.svg")||u(T,"src",K),u(T,"alt","Icon"),u(T,"class","s-4Xht8e93UYcz"),w(T,D,233,4,6383),u(I,"class","s-4Xht8e93UYcz"),w(I,D,232,3,6326),J($.src,$e="icons/infinity.svg")||u($,"src",$e),u($,"alt","Icon"),u($,"class","s-4Xht8e93UYcz"),w($,D,239,4,6555),u(Q,"class","s-4Xht8e93UYcz"),w(Q,D,238,3,6497),J(ce.src,xe="icons/complete.svg")||u(ce,"src",xe),u(ce,"alt","Icon"),u(ce,"class","s-4Xht8e93UYcz"),w(ce,D,245,4,6718),u(se,"class","s-4Xht8e93UYcz"),w(se,D,244,3,6672),u(k,"class","action-buttons horizontal-scroll s-4Xht8e93UYcz"),w(k,D,219,2,6001),u(s,"class","side content s-4Xht8e93UYcz"),w(s,D,199,1,5361),u(ue,"class","module s-4Xht8e93UYcz"),w(ue,D,260,2,6987),u(x,"class","side modules s-4Xht8e93UYcz"),w(x,D,253,1,6815),u(e,"class","app s-4Xht8e93UYcz"),w(e,D,197,0,5341)},m:function(V,G){z(V,e,G),d(e,s),d(s,a),d(a,r),d(s,o),d(s,i),d(i,c),d(c,l),d(l,f),d(c,h),d(c,m),d(m,y),d(s,A),d(s,k),q&&q.m(k,null),d(k,P),d(k,C),d(C,M),d(C,L),d(k,te),d(k,I),d(I,T),d(I,B),Le(F,I,null),d(k,ie),d(k,Q),d(Q,$),d(Q,Ne),Le(le,Q,null),d(k,He),d(k,se),d(se,ce),d(se,Ue),d(e,Oe),d(e,x),O&&O.m(x,null),d(x,Ee),d(x,ue),Le(ae,ue,null),fe=!0,Ye||(et=[oe(C,"click",n[3].download,!1,!1,!1,!1),oe(I,"click",n[4],!1,!1,!1,!1),oe(Q,"click",n[5],!1,!1,!1,!1),oe(se,"click",n[3].markAsWatched,!1,!1,!1,!1)],Ye=!0)},p:function(V,G){(!fe||G&1&&!J(r.src,t="https://209.163.185.11/videos/"+V[0].path))&&u(r,"src",t),(!fe||G&1)&&_!==(_=V[0].title+"")&&ve(f,_),(!fe||G&1)&&S!==(S=V[0].description+"")&&ve(y,S),V[0].type=="TV Show"?q?q.p(V,G):(q=Fe(V),q.c(),q.m(k,P)):q&&(q.d(1),q=null);const ne={};G&2&&(ne.active=V[1].shuffle),F.$set(ne);const _e={};G&2&&(_e.active=V[1].autoplay),le.$set(_e),V[0].type=="TV Show"?O?(O.p(V,G),G&1&&re(O,1)):(O=Je(V),O.c(),re(O,1),O.m(x,Ee)):O&&(St(),he(O,1,1,()=>{O=null}),Mt());const pe={};G&1&&(pe.title=V[0].title),ae.$set(pe)},i:function(V){fe||(re(F.$$.fragment,V),re(le.$$.fragment,V),re(O),re(ae.$$.fragment,V),fe=!0)},o:function(V){he(F.$$.fragment,V),he(le.$$.fragment,V),he(O),he(ae.$$.fragment,V),fe=!1},d:function(V){V&&v(e),q&&q.d(),De(F),De(le),O&&O.d(),De(ae),Ye=!1,Bt(et)}};return U("SvelteRegisterBlock",{block:tt,id:Tt.name,type:"if",source:"(197:0) {#if typeof window !== 'undefined'}",ctx:n}),tt}function Fe(n){let e,s,a,r,t,o;const i={c:function(){e=p("button"),s=p("img"),r=R(`
					Next Episode`),this.h()},l:function(l){e=g(l,"BUTTON",{class:!0});var _=E(e);s=g(_,"IMG",{src:!0,alt:!0,class:!0}),r=X(_,`
					Next Episode`),_.forEach(v),this.h()},h:function(){J(s.src,a="icons/next.svg")||u(s,"src",a),u(s,"alt","Icon"),u(s,"class","s-4Xht8e93UYcz"),w(s,D,222,5,6130),u(e,"class","s-4Xht8e93UYcz"),w(e,D,221,4,6085)},m:function(l,_){z(l,e,_),d(e,s),d(e,r),t||(o=oe(e,"click",n[3].nextEpisode,!1,!1,!1,!1),t=!0)},p:H,d:function(l){l&&v(e),t=!1,o()}};return U("SvelteRegisterBlock",{block:i,id:Fe.name,type:"if",source:"(221:3) {#if media.type == 'TV Show'}",ctx:n}),i}function Je(n){let e,s,a;s=new wt({props:{title:n[0].title,media:n[0]},$$inline:!0});const r={c:function(){e=p("div"),Ce(s.$$.fragment),this.h()},l:function(o){e=g(o,"DIV",{class:!0});var i=E(e);Pe(s.$$.fragment,i),i.forEach(v),this.h()},h:function(){u(e,"class","module tv-episode-module s-4Xht8e93UYcz"),w(e,D,255,3,6877)},m:function(o,i){z(o,e,i),Le(s,e,null),a=!0},p:function(o,i){const c={};i&1&&(c.title=o[0].title),i&1&&(c.media=o[0]),s.$set(c)},i:function(o){a||(re(s.$$.fragment,o),a=!0)},o:function(o){he(s.$$.fragment,o),a=!1},d:function(o){o&&v(e),De(s)}};return U("SvelteRegisterBlock",{block:r,id:Je.name,type:"if",source:"(255:2) {#if media.type == 'TV Show'}",ctx:n}),r}function Qe(n){let e,s,a,r;function t(_,f){return _[0].type=="TV Show"?kt:yt}let o=t(n),i=o(n),c=typeof window<"u"&&Tt(n);const l={c:function(){i.c(),e=Ve(),s=j(),c&&c.c(),a=Ve()},l:function(f){const h=Et("svelte-9f9ela",ge.head);i.l(h),e=Ve(),h.forEach(v),s=N(f),c&&c.l(f),a=Ve()},m:function(f,h){i.m(ge.head,null),d(ge.head,e),z(f,s,h),c&&c.m(f,h),z(f,a,h),r=!0},p:function(f,[h]){o!==(o=t(f))&&(i.d(1),i=o(f),i&&(i.c(),i.m(e.parentNode,e))),typeof window<"u"&&c.p(f,h)},i:function(f){r||(re(c),r=!0)},o:function(f){he(c),r=!1},d:function(f){i.d(f),v(e),f&&v(s),c&&c.d(f),f&&v(a)}};return U("SvelteRegisterBlock",{block:l,id:Qe.name,type:"component",source:"",ctx:n}),l}function Nt(n,e,s){let{$$slots:a={},$$scope:r}=e;Te("Page",a,[]);let t={};if(ct.user.read(m=>{console.log("read")}),typeof window<"u"&&window.addEventListener("keydown",m=>{const S=document.querySelector("video");m.code=="ArrowLeft"&&(S.currentTime=S.currentTime-10),m.code=="ArrowRight"&&(S.currentTime=S.currentTime+10)}),typeof window<"u"){t.title=b.get("watching title"),t.type=Y[t.title].type,b.exists(`${t.title} progress`)?(t.progress=Number(b.get(`${t.title} progress`)),t.type=="TV Show"&&(t.season=Number(b.get(`${t.title} season`)),t.episode=Number(b.get(`${t.title} episode`)))):(t.progress=0,b.set(`${t.title} progress`,0),t.type=="TV Show"&&(t.season=1,b.set(`${t.title} season`,1),t.episode=1,b.set(`${t.title} episode`,1)));let m=setInterval(()=>{document.querySelector("video").readyState==4&&(document.querySelector("video").currentTime=t.progress*document.querySelector("video").duration,clearInterval(m))},250);t.type=="TV Show"?(t.episodeTitle=Y[t.title]["s"+t.season][t.episode-1],t.episodeDisplayTitle=we(Y[t.title]["s"+t.season][t.episode-1]),t.path=`${t.title}/Season ${t.season}/${t.episodeTitle}.mp4`,t.description=`S${t.season}, E${t.episode} - ${t.episodeDisplayTitle}`):(t.path=`${t.title}.mp4`,t.description="Movie"),setInterval(()=>{if(document.querySelector("video").readyState==4){let S=document.querySelector("video").currentTime,y=document.querySelector("video").duration;b.set(`${t.title} progress`,S/y),S>y-b.get("autoplay buffer")&&b.get("autoplay")=="true"&&continueWatching()}},750)}let o={};function i(m){s(1,o[m]=b.get(m),o)}i("shuffle"),i("autoplay"),i("autoplay buffer");function c(m){b.get(m)=="false"?(b.set(m,"true"),s(1,o[m]="true",o)):(b.set(m,"false"),s(1,o[m]="false",o))}const l={continueWatching(){t.type=="TV Show"?o.shuffle=="true"?l.nextShuffleEpisode():l.nextEpisode():window.open("/","_self")},nextEpisode(){let m=Y[t.title]["s"+t.season].length,S=Y[t.title].sTotal;b.set(`${t.title} progress`,"0"),t.episode==m?t.season==S?l.markAsWatched():(b.set(`${t.title} season`,Number(t.season)+1),b.set(`${t.title} episode`,"1"),b.confirm(`${t.title} progress`,"0",()=>{window.location.reload()}),window.location.reload()):(b.set(`${t.title} episode`,Number(t.episode)+1),b.confirm(`${t.title} progress`,"0",()=>{window.location.reload()}))},nextShuffleEpisode(){let m=Math.floor(Math.random()*Y[t.title].sTotal)+1,S=Math.floor(Math.random()*Y[t.title]["s"+m].length)+1;b.set(`${t.title} season`,m),b.set(`${t.title} episode`,S),b.set(`${t.title} progress`,"0"),b.confirm(`${t.title} progress`,"0",()=>{window.location.reload()})},download(){var m=document.createElement("a");m.download=t.description,m.href=`https://209.163.185.11/videos/${t.path}`,m.click()},markAsWatched(){b.delete(t.title+" progress"),b.delete(t.title+" season"),b.delete(t.title+" episode"),window.open("/","_self")}},_=[];Object.keys(e).forEach(m=>{!~_.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&jt.warn(`<Page> was created with unknown prop '${m}'`)});const f=()=>c("shuffle"),h=()=>c("autoplay");return n.$capture_state=()=>({db:ct,mediaDB:Y,media_controls:mt,serverTypeConversion:we,storage:b,TvModule:wt,MoreToWatchModule:bt,BoldButton:Lt,Toggle:Ze,media:t,statePref:o,createStatePref:i,toggleStatePref:c,actions:l}),n.$inject_state=m=>{"media"in m&&s(0,t=m.media),"statePref"in m&&s(1,o=m.statePref)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[t,o,c,l,f,h]}class Ot extends be{constructor(e){super(e),ye(this,e,Nt,Qe,ke,{}),U("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Qe.name})}}export{Ot as component};

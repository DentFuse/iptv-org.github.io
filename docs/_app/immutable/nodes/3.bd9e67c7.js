import{S as G,i as K,s as Q,a as x,k as b,y as B,D as U,h as u,c as V,l as w,m as $,z as N,n as E,b as S,A,E as p,g as k,d as D,f as M,B as C,J as L,o as W,q,r as z,u as X,v as P,a4 as Y}from"../chunks/index.33dbc0d8.js";import{N as Z,i as ee,E as te,H as ae,a as re,l as se}from"../chunks/EditButton.80944880.js";import{p as le}from"../chunks/stores.ac853a9e.js";function T(d,a,n){const r=d.slice();return r[6]=a[n],r}function J(d){let a,n;return{c(){a=b("div"),n=q("loading..."),this.h()},l(r){a=w(r,"DIV",{class:!0});var i=$(a);n=z(i,"loading..."),i.forEach(u),this.h()},h(){E(a,"class","flex items-center justify-center w-full pt-1 pb-6 tracking-tight text-sm text-gray-500 dark:text-gray-400 font-mono")},m(r,i){S(r,a,i),p(a,n)},d(r){r&&u(a)}}}function O(d){let a,n,r,i,h=d[0].name+"",v,f,c,m,_,s,o,t;return m=new te({props:{channel:d[0]}}),o=new ae({props:{data:d[0]}}),{c(){a=b("div"),n=b("div"),r=b("div"),i=b("h1"),v=q(h),f=x(),c=b("div"),B(m.$$.fragment),_=x(),s=b("div"),B(o.$$.fragment),this.h()},l(e){a=w(e,"DIV",{class:!0});var l=$(a);n=w(l,"DIV",{class:!0});var g=$(n);r=w(g,"DIV",{class:!0});var I=$(r);i=w(I,"H1",{class:!0});var y=$(i);v=z(y,h),y.forEach(u),I.forEach(u),f=V(g),c=w(g,"DIV",{class:!0});var j=$(c);N(m.$$.fragment,j),j.forEach(u),g.forEach(u),_=V(l),s=w(l,"DIV",{class:!0});var H=$(s);N(o.$$.fragment,H),H.forEach(u),l.forEach(u),this.h()},h(){E(i,"class","text-l font-medium text-gray-900 dark:text-white"),E(r,"class","w-1/3 overflow-hidden"),E(c,"class","inline-flex w-1/3 justify-end space-x-3"),E(n,"class","flex justify-between items-center py-3 pl-5 pr-4 rounded-t border-b dark:border-gray-700"),E(s,"class","overflow-y-auto overflow-x-hidden w-full p-10"),E(a,"class","border rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 bg-white")},m(e,l){S(e,a,l),p(a,n),p(n,r),p(r,i),p(i,v),p(n,f),p(n,c),A(m,c,null),p(a,_),p(a,s),A(o,s,null),t=!0},p(e,l){(!t||l&1)&&h!==(h=e[0].name+"")&&X(v,h);const g={};l&1&&(g.channel=e[0]),m.$set(g);const I={};l&1&&(I.data=e[0]),o.$set(I)},i(e){t||(k(m.$$.fragment,e),k(o.$$.fragment,e),t=!0)},o(e){D(m.$$.fragment,e),D(o.$$.fragment,e),t=!1},d(e){e&&u(a),C(m),C(o)}}}function R(d){let a,n,r,i,h,v,f,c,m,_=d[2],s=[];for(let t=0;t<_.length;t+=1)s[t]=F(T(d,_,t));const o=t=>D(s[t],1,1,()=>{s[t]=null});return{c(){a=b("div"),n=b("div"),r=b("div"),i=b("h3"),h=q("Streams"),v=x(),f=b("div"),c=b("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){a=w(t,"DIV",{class:!0});var e=$(a);n=w(e,"DIV",{class:!0});var l=$(n);r=w(l,"DIV",{class:!0});var g=$(r);i=w(g,"H3",{class:!0});var I=$(i);h=z(I,"Streams"),I.forEach(u),g.forEach(u),l.forEach(u),v=V(e),f=w(e,"DIV",{class:!0});var y=$(f);c=w(y,"DIV",{class:!0});var j=$(c);for(let H=0;H<s.length;H+=1)s[H].l(j);j.forEach(u),y.forEach(u),e.forEach(u),this.h()},h(){E(i,"class","text-l font-medium text-gray-900 dark:text-white"),E(r,"class","w-1/3 overflow-hidden"),E(n,"class","flex justify-between items-center py-3 pl-5 pr-4 rounded-t border-b dark:border-gray-700"),E(c,"class","space-y-2"),E(f,"class","overflow-y-auto overflow-x-hidden w-full p-6"),E(a,"class","border rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 bg-white")},m(t,e){S(t,a,e),p(a,n),p(n,r),p(r,i),p(i,h),p(a,v),p(a,f),p(f,c);for(let l=0;l<s.length;l+=1)s[l].m(c,null);m=!0},p(t,e){if(e&4){_=t[2];let l;for(l=0;l<_.length;l+=1){const g=T(t,_,l);s[l]?(s[l].p(g,e),k(s[l],1)):(s[l]=F(g),s[l].c(),k(s[l],1),s[l].m(c,null))}for(P(),l=_.length;l<s.length;l+=1)o(l);M()}},i(t){if(!m){for(let e=0;e<_.length;e+=1)k(s[e]);m=!0}},o(t){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)D(s[e]);m=!1},d(t){t&&u(a),Y(s,t)}}}function F(d){let a,n;return a=new re({props:{stream:d[6]}}),{c(){B(a.$$.fragment)},l(r){N(a.$$.fragment,r)},m(r,i){A(a,r,i),n=!0},p(r,i){const h={};i&4&&(h.stream=r[6]),a.$set(h)},i(r){n||(k(a.$$.fragment,r),n=!0)},o(r){D(a.$$.fragment,r),n=!1},d(r){C(a,r)}}}function ne(d){let a,n,r,i,h,v,f,c,m,_;document.title=a=d[0]&&d[0].name?`${d[0].name} • iptv-org`:"iptv-org",i=new Z({props:{withSearch:!0}});let s=d[1]&&J(),o=d[0]&&O(d),t=d[2].length&&R(d);return{c(){n=x(),r=b("header"),B(i.$$.fragment),h=x(),v=b("main"),f=b("section"),s&&s.c(),c=x(),o&&o.c(),m=x(),t&&t.c(),this.h()},l(e){U("svelte-1u3dx9r",document.head).forEach(u),n=V(e),r=w(e,"HEADER",{class:!0});var g=$(r);N(i.$$.fragment,g),g.forEach(u),h=V(e),v=w(e,"MAIN",{class:!0});var I=$(v);f=w(I,"SECTION",{class:!0});var y=$(f);s&&s.l(y),c=V(y),o&&o.l(y),m=V(y),t&&t.l(y),y.forEach(u),I.forEach(u),this.h()},h(){E(r,"class","fixed z-40 w-full min-w-[360px] top-0"),E(f,"class","container max-w-[820px] mx-auto px-2 pt-6 pb-20 flex-col space-y-4"),E(v,"class","bg-slate-50 dark:bg-[#1d232e] min-h-screen min-w-[360px] pt-16")},m(e,l){S(e,n,l),S(e,r,l),A(i,r,null),S(e,h,l),S(e,v,l),p(v,f),s&&s.m(f,null),p(f,c),o&&o.m(f,null),p(f,m),t&&t.m(f,null),_=!0},p(e,[l]){(!_||l&1)&&a!==(a=e[0]&&e[0].name?`${e[0].name} • iptv-org`:"iptv-org")&&(document.title=a),e[1]?s||(s=J(),s.c(),s.m(f,c)):s&&(s.d(1),s=null),e[0]?o?(o.p(e,l),l&1&&k(o,1)):(o=O(e),o.c(),k(o,1),o.m(f,m)):o&&(P(),D(o,1,1,()=>{o=null}),M()),e[2].length?t?(t.p(e,l),l&4&&k(t,1)):(t=R(e),t.c(),k(t,1),t.m(f,null)):t&&(P(),D(t,1,1,()=>{t=null}),M())},i(e){_||(k(i.$$.fragment,e),k(o),k(t),_=!0)},o(e){D(i.$$.fragment,e),D(o),D(t),_=!1},d(e){e&&u(n),e&&u(r),C(i),e&&u(h),e&&u(v),s&&s.d(),o&&o.d(),t&&t.d()}}}function ie(d,a,n){let r,i;L(d,se,c=>n(4,r=c)),L(d,le,c=>n(5,i=c));let h,v=!0,f=[];return W(async()=>{const c=i.url.searchParams.get("id");c&&!r.length&&await ee(),n(0,h=r.find(m=>m.id===c)),h&&(n(2,f=h._streams),h._guides),n(1,v=!1)}),[h,v,f]}class de extends G{constructor(a){super(),K(this,a,ie,ne,Q,{})}}export{de as component};
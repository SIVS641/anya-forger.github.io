if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>n(e,r),c={module:{uri:r},exports:l,require:o};s[r]=Promise.all(i.map((e=>c[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-b22defcb"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"69f53513cf87fa8b76ec7c50ea9d5987"},{url:"assets/About.f2ceabec.js",revision:null},{url:"assets/Home.55400038.js",revision:null},{url:"assets/index.69dbf515.css",revision:null},{url:"assets/index.dbc920f3.js",revision:null},{url:"assets/Projects.6df3d2de.js",revision:null},{url:"assets/Typing.ce6a3ec9.js",revision:null},{url:"index.html",revision:"9cd236af8bd5054ac3afad2f8fa4c01e"},{url:"manifest.webmanifest",revision:"953fb841999e663d7da33133e64d4ed9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>["https://spy-family.net","https://cdn.jsdelivr.net"].includes(e.origin)),new e.StaleWhileRevalidate({cacheName:"external-sources",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET")}));

import{M as K,j as r,i as I,u as W,P as X,a as D,b as Z,L as q,m as N}from"./proxy.DtvIb68r.js";import{r as s}from"./index.CzjdDlXV.js";function z(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function F(...e){return t=>{let n=!1;const i=e.map(l=>{const o=z(l,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let l=0;l<i.length;l++){const o=i[l];typeof o=="function"?o():z(e[l],null)}}}}function G(...e){return s.useCallback(F(...e),e)}class J extends s.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,l=I(i)&&i.offsetWidth||0,o=I(i)&&i.offsetHeight||0,a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft,a.right=l-a.width-a.left,a.bottom=o-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Q({children:e,isPresent:t,anchorX:n,anchorY:i,root:l,pop:o}){const a=s.useId(),h=s.useRef(null),c=s.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=s.useContext(K),d=e.props?.ref??e?.ref,j=G(h,d);return s.useInsertionEffect(()=>{const{width:f,height:x,top:b,left:g,right:y,bottom:k}=c.current;if(t||o===!1||!h.current||!f||!x)return;const R=n==="left"?`left: ${g}`:`right: ${y}`,$=i==="bottom"?`bottom: ${k}`:`top: ${b}`;h.current.dataset.motionPopId=a;const m=document.createElement("style");p&&(m.nonce=p);const C=l??document.head;return C.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${x}px !important;
            ${R}px !important;
            ${$}px !important;
          }
        `),()=>{C.contains(m)&&C.removeChild(m)}},[t]),r.jsx(J,{isPresent:t,childRef:h,sizeRef:c,pop:o,children:o===!1?e:s.cloneElement(e,{ref:j})})}const ee=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:l,presenceAffectsLayout:o,mode:a,anchorX:h,anchorY:c,root:p})=>{const d=W(te),j=s.useId();let f=!0,x=s.useMemo(()=>(f=!1,{id:j,initial:t,isPresent:n,custom:l,onExitComplete:b=>{d.set(b,!0);for(const g of d.values())if(!g)return;i&&i()},register:b=>(d.set(b,!1),()=>d.delete(b))}),[n,d,i]);return o&&f&&(x={...x}),s.useMemo(()=>{d.forEach((b,g)=>d.set(g,!1))},[n]),s.useEffect(()=>{!n&&!d.size&&i&&i()},[n]),e=r.jsx(Q,{pop:a==="popLayout",isPresent:n,anchorX:h,anchorY:c,root:p,children:e}),r.jsx(X.Provider,{value:x,children:e})};function te(){return new Map}const E=e=>e.key||"";function A(e){const t=[];return s.Children.forEach(e,n=>{s.isValidElement(n)&&t.push(n)}),t}const _=({children:e,custom:t,initial:n=!0,onExitComplete:i,presenceAffectsLayout:l=!0,mode:o="sync",propagate:a=!1,anchorX:h="left",anchorY:c="top",root:p})=>{const[d,j]=D(a),f=s.useMemo(()=>A(e),[e]),x=a&&!d?[]:f.map(E),b=s.useRef(!0),g=s.useRef(f),y=W(()=>new Map),k=s.useRef(new Set),[R,$]=s.useState(f),[m,C]=s.useState(f);Z(()=>{b.current=!1,g.current=f;for(let w=0;w<m.length;w++){const u=E(m[w]);x.includes(u)?(y.delete(u),k.current.delete(u)):y.get(u)!==!0&&y.set(u,!1)}},[m,x.length,x.join("-")]);const L=[];if(f!==R){let w=[...f];for(let u=0;u<m.length;u++){const v=m[u],M=E(v);x.includes(M)||(w.splice(u,0,v),L.push(v))}return o==="wait"&&L.length&&(w=L),C(A(w)),$(f),null}const{forceRender:B}=s.useContext(q);return r.jsx(r.Fragment,{children:m.map(w=>{const u=E(w),v=a&&!d?!1:f===m||x.includes(u),M=()=>{if(k.current.has(u))return;if(k.current.add(u),y.has(u))y.set(u,!0);else return;let S=!0;y.forEach(U=>{U||(S=!1)}),S&&(B?.(),C(g.current),a&&j?.(),i&&i())};return r.jsx(ee,{isPresent:v,initial:!b.current||n?void 0:!1,custom:t,presenceAffectsLayout:l,mode:o,root:p,onExitComplete:v?void 0:M,anchorX:h,anchorY:c,children:w},u)})})};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(...e)=>e.filter((t,n,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=e=>{const t=re(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:l="",children:o,iconNode:a,...h},c)=>s.createElement("svg",{ref:c,...ie,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:Y("lucide",l),...!o&&!se(h)&&{"aria-hidden":"true"},...h},[...a.map(([p,d])=>s.createElement(p,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(e,t)=>{const n=s.forwardRef(({className:i,...l},o)=>s.createElement(oe,{ref:o,iconNode:t,className:Y(`lucide-${ne(O(e))}`,`lucide-${e}`,i),...l}));return n.displayName=O(e),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],le=P("code-xml",ae);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],de=P("menu",ce);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],he=P("x",ue);function T({currentLang:e}){const t=n=>{document.cookie="lang-redirected=1; path=/; max-age=31536000; SameSite=Lax",n==="es"?window.location.href="/":window.location.href=`/${n}/`};return r.jsxs("div",{className:"flex items-center h-[40px] gap-1 bg-white/10 rounded-full p-1 border border-white/10 backdrop-blur-md",children:[r.jsx("button",{onClick:()=>t("es"),"aria-label":"Español",className:`px-3 py-1.5 rounded-full h-full text-xs font-bold uppercase tracking-wider transition-all ${e==="es"?"bg-primary/50 text-white":"text-slate-400 hover:text-white hover:bg-white/10"}`,children:"ES"}),r.jsx("button",{onClick:()=>t("en"),"aria-label":"English",className:`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${e==="en"?"bg-primary/50 text-white":"text-slate-400 hover:text-white hover:bg-white/10"}`,children:"EN"})]})}const pe={hidden:{opacity:0,y:-12,scaleY:.95},visible:{opacity:1,y:0,scaleY:1},exit:{opacity:0,y:-12,scaleY:.95}},H={hidden:{opacity:0,x:-10},visible:e=>({opacity:1,x:0,transition:{delay:e*.04+.06}}),exit:{opacity:0,x:-10}},V={initial:{rotate:-90,scale:.5,opacity:0},animate:{rotate:0,scale:1,opacity:1},exit:{rotate:90,scale:.5,opacity:0}};function xe({nav:e,lang:t}){const[n,i]=s.useState(!1),[l,o]=s.useState(!1),a=[{key:"work",label:e.work},{key:"about",label:e.about},{key:"experience",label:e.experience}];s.useEffect(()=>{const c=()=>i(window.scrollY>50);return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const h=c=>{const p=document.getElementById(c);p&&p.scrollIntoView({behavior:"smooth"}),o(!1)};return r.jsxs("header",{className:`fixed top-0 w-full z-50 transition-all duration-500 ${n?"py-4":"bg-transparent py-8"}`,children:[r.jsxs("div",{className:"max-w-[1280px] mx-auto px-6 flex items-center justify-between",children:[r.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`flex items-center gap-3 group cursor-pointer px-2 pr-4 py-2 ${n?"bg-white/5 rounded-full border border-white/5 backdrop-blur-md":"bg-transparent border border-transparent"}`,"aria-label":"Scroll to top",children:[r.jsx("div",{className:"size-10 rounded-full flex items-center justify-center shadow-lg transition-shadow group-hover:shadow-primary/40 bg-gradient-to-br from-primary to-purple-600",children:r.jsx(le,{className:"text-white size-6"})}),r.jsx("span",{className:"text-white text-xl font-bold tracking-tight",children:"Ricardo Parra"})]}),r.jsx("nav",{className:"hidden md:flex items-center gap-1 bg-white/8 rounded-full p-1 border border-white/5 backdrop-blur-md",children:a.map(({key:c,label:p})=>r.jsx("button",{onClick:()=>h(c),className:"px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all",children:p},c))}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("button",{onClick:()=>h("contact"),className:"hidden md:flex h-10 px-6 items-center justify-center rounded-full text-white text-sm font-semibold transition-all border border-white/10 backdrop-blur-sm bg-white/8 hover:bg-primary/50 hover:border-primary/50 hover:border-primary",children:e.cta}),r.jsx("div",{className:"hidden md:block",children:r.jsx(T,{currentLang:t})}),r.jsx("button",{className:"md:hidden relative size-10 flex items-center justify-center text-slate-300 hover:text-white transition-colors bg-white/5 rounded-full border border-white/10 backdrop-blur-md overflow-hidden",onClick:()=>o(c=>!c),"aria-label":"Toggle menu","aria-expanded":l,children:r.jsx(_,{mode:"popLayout",initial:!1,children:l?r.jsx(N.span,{variants:V,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.2,ease:"easeInOut"},style:{display:"inline-flex"},children:r.jsx(he,{className:"size-6"})},"close"):r.jsx(N.span,{variants:V,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.2,ease:"easeInOut"},style:{display:"inline-flex"},children:r.jsx(de,{className:"size-6"})},"open")})})]})]}),r.jsx(_,{children:l&&r.jsxs(N.div,{variants:pe,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.3,ease:"easeInOut"},style:{transformOrigin:"top center"},className:"md:hidden bg-white/5 border border-white/10 backdrop-blur-md mt-2 px-6 py-4 flex flex-col gap-2 mx-6 rounded-xl",children:[a.map(({key:c,label:p},d)=>r.jsx(N.button,{custom:d,variants:H,initial:"hidden",animate:"visible",exit:"exit",onClick:()=>h(c),className:"text-left px-4 py-3 text-white hover:bg-white/20 rounded-xl transition-colors text-sm font-medium",children:p},c)),r.jsx(N.div,{custom:a.length,variants:H,initial:"hidden",animate:"visible",exit:"exit",className:"pt-2 border-t border-white/5 mt-2 w-fit",children:r.jsx(T,{currentLang:t})})]},"mobile-menu")})]})}export{xe as default};

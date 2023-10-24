import{r as k,R as X,p as $,b as s,j as u,B as _,s as x,a2 as qe,a3 as Ue,a4 as ge,a5 as He,d as S,c as P,a6 as Ge,O as E,a7 as Ke,a8 as we,a9 as ne,T as xe,N as Ve,F as G,aa as Ye,ab as Ze,ac as Q,P as Xe,ad as Ce,ae as re,af as oe,ag as Qe,ah as Je,u as se,ai as et,aj as Oe,ak as tt,g as Pe,C as ke,S as ae,al as nt,am as rt,an as ot,ao as st,ap as it}from"./index-dc41687a.js";import{C as J,B as ce}from"./BaseModal-c1bb4525.js";import{F as at,p as ct,A as lt,I as ut}from"./Fab-7c57a8c5.js";import{R as dt,T as ht}from"./TextFitler-8793a8ed.js";import{f as ft}from"./index-84fa0cb3.js";import{R as pt}from"./rotate-cw-a27a1776.js";import{S as vt}from"./Select-ea632431.js";import"./debounce-c1ba2006.js";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function mt(e,t){if(e==null)return{};var n=yt(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yt(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var ie=k.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=e.size,i=o===void 0?24:o,a=mt(e,["color","size"]);return X.createElement("svg",ee({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),X.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))});ie.propTypes={color:$.string,size:$.oneOfType([$.string,$.number])};ie.displayName="Zap";const A=ie,_t="_FlexCenter_1380a_1",bt={FlexCenter:_t};function gt({children:e}){return s("div",{className:bt.FlexCenter,children:e})}const{useRef:le,useEffect:wt}=x;function xt({onClickPrimaryButton:e,onClickSecondaryButton:t}){const n=le(null),r=le(null);return wt(()=>{n.current.focus()},[]),u("div",{onKeyDown:i=>{i.keyCode===39?r.current.focus():i.keyCode===37&&n.current.focus()},children:[s("h2",{children:"Close Connections?"}),s("p",{children:"Click 'Yes' to close those connections that are still using the old selected proxy in this group"}),s("div",{style:{height:30}}),u(gt,{children:[s(_,{onClick:e,ref:n,children:"Yes"}),s("div",{style:{width:20}}),s(_,{onClick:t,ref:r,children:"No"})]})]})}const Ct="_header_19ilz_1",Ot="_arrow_19ilz_9",Pt="_isOpen_19ilz_14",kt="_btn_19ilz_21",Et="_qty_19ilz_26",ue={header:Ct,arrow:Ot,isOpen:Pt,btn:kt,qty:Et};function Ee({name:e,type:t,toggle:n,qty:r}){const o=k.useCallback(i=>{i.preventDefault(),(i.key==="Enter"||i.key===" ")&&n()},[n]);return u("div",{className:ue.header,onClick:n,style:{cursor:"pointer"},tabIndex:0,onKeyDown:o,role:"button",children:[s("div",{children:s(qe,{name:e,type:t})}),typeof r=="number"?s("span",{className:ue.qty,children:r}):null]})}const{useMemo:Tt}=x;function St(e,t){return e.filter(n=>{const r=t[n];return r===void 0?!0:r.number!==0})}const F=(e,t)=>{if(e&&typeof e.number=="number"&&e.number>0)return e.number;const n=t&&t.type;return n&&He.indexOf(n)>-1?-1:999999},Rt={Natural:e=>e,LatencyAsc:(e,t,n)=>e.sort((r,o)=>{const i=F(t[r],n&&n[r]),a=F(t[o],n&&n[o]);return i-a}),LatencyDesc:(e,t,n)=>e.sort((r,o)=>{const i=F(t[r],n&&n[r]);return F(t[o],n&&n[o])-i}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,n)=>t>n?-1:t<n?1:0)};function At(e,t){const n=t.toLowerCase().split(" ").map(r=>r.trim()).filter(r=>!!r);return n.length===0?e:e.filter(r=>{let o=0;for(;o<n.length;o++){const i=n[o];if(r.toLowerCase().indexOf(i)>-1)return!0}return!1})}function Lt(e,t,n,r,o,i){let a=[...e];return n&&(a=St(e,t)),typeof r=="string"&&r!==""&&(a=At(a,r)),Rt[o](a,t,i)}function Te(e,t,n,r,o){const[i]=Ue(ge);return Tt(()=>Lt(e,t,n,i,r,o),[e,t,n,i,r,o])}const Mt="_header_1qjca_1",Nt="_group_1qjca_5",Dt="_zapWrapper_1qjca_12",zt="_arrow_1qjca_20",Bt="_isOpen_1qjca_25",b={header:Mt,group:Nt,zapWrapper:Dt,arrow:zt,isOpen:Bt},Se={Right:39,Left:37,Enter:13,Space:32},$t="_proxy_xgbmr_4",Ft="_now_xgbmr_25",jt="_error_xgbmr_29",It="_selectable_xgbmr_32",Wt="_proxyType_xgbmr_40",qt="_udpType_xgbmr_50",Ut="_tfoType_xgbmr_61",Ht="_row_xgbmr_65",Gt="_proxyName_xgbmr_73",Kt="_proxySmall_xgbmr_84",y={proxy:$t,now:Ft,error:jt,selectable:It,proxyType:Wt,udpType:qt,tfoType:Ut,row:Ht,proxyName:Gt,proxySmall:Kt},Vt="_proxyLatency_1h5y2_4",Yt={proxyLatency:Vt};function Zt({number:e,color:t}){return s("span",{className:Yt.proxyLatency,style:{color:t},children:u("span",{children:[e," ms"]})})}const{useMemo:W}=x,R={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function Re({number:e}={},t){const n={good:t?800:200,normal:t?1500:500};return e===0?R.na:e<n.good?R.good:e<n.normal?R.normal:typeof e=="number"?R.bad:R.na}function Xt(e,t){return Re(e,t)}function Qt({now:e,name:t,proxy:n,latency:r,httpsLatencyTest:o,isSelectable:i,onClick:a}){var p;const c=(p=n.history[n.history.length-1])==null?void 0:p.delay,l=(r==null?void 0:r.number)??c,v=W(()=>Xt({number:l},o),[l]),d=W(()=>{let f=t;return r&&typeof r.number=="number"&&(f+=" "+r.number+" ms"),f},[t,r]),h=k.useCallback(()=>{i&&a&&a(t)},[t,a,i]),m=k.useCallback(f=>{f.keyCode===Se.Enter&&h()},[h]);return s("div",{title:d,className:P(y.proxySmall,{[y.selectable]:i}),style:{background:v,scale:e?"1.2":"1"},onClick:h,onKeyDown:m,role:i?"menuitem":"",children:e&&s("div",{className:y.now})})}function Jt(e){return e==="Shadowsocks"?"SS":e}const en=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function tn({children:e,label:t,"aria-label":n}){const[r,o]=Ge();return u(E,{children:[k.cloneElement(e,r),s(Ke,{...o,label:t,"aria-label":n,position:en})]})}function nn({now:e,name:t,proxy:n,latency:r,httpsLatencyTest:o,isSelectable:i,onClick:a}){var C;const c=(C=n.history[n.history.length-1])==null?void 0:C.delay,l=(r==null?void 0:r.number)??c,v=W(()=>Re({number:l},o),[l]),d=k.useCallback(()=>{i&&a&&a(t)},[t,a,i]);function h(g,O){return g?O?"XUDP":"UDP":""}function m(g){return g?s("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2962",width:"10",height:"10",children:s("path",{d:"M648.093513 719.209284l-1.492609-40.940127 31.046263-26.739021c202.73892-174.805813 284.022131-385.860697 255.70521-561.306199-176.938111-28.786027-389.698834 51.857494-563.907604 254.511123l-26.31256 30.619803-40.38573-0.938211c-60.557271-1.407317-111.903014 12.79379-162.822297 47.0385l189.561318 127.084977-37.95491 68.489421c-9.126237 16.461343-0.554398 53.307457 29.084549 82.818465 29.5963 29.511008 67.380626 38.381369 83.287571 29.852176l68.318836-36.760822 127.639376 191.267156c36.163779-52.11337 50.450177-103.629696 48.189941-165.039887zM994.336107 16.105249l10.490908 2.686696 2.64405 10.405615c47.46496 178.089552-1.023503 451.492838-274.170913 686.898568 4.051367 111.263324-35.396151 200.222809-127.255561 291.741051l-15.779008 15.693715-145.934494-218.731157c-51.217805 27.59194-128.790816 10.405616-183.93205-44.522388-55.226525-55.013296-72.41285-132.287785-43.498885-184.529093L0.002773 430.325513l15.736362-15.65107c89.300652-88.959484 178.64395-128.108481 289.011709-125.549722C539.730114 15.806727 815.56422-31.061189 994.336107 16.105249zM214.93844 805.098259c28.572797 28.572797 22.346486 79.49208-12.537914 114.376479C156.428175 965.489735 34.034254 986.002445 34.034254 986.002445s25.331704-127.084978 66.612998-168.323627c34.8844-34.8844 85.633099-41.281295 114.291188-12.580559zM661.01524 298.549479a63.968948 63.968948 0 1 0 0 127.937897 63.968948 63.968948 0 0 0 0-127.937897z","p-id":"2963"})}):""}const p=k.useCallback(g=>{g.keyCode===Se.Enter&&d()},[d]),f=W(()=>P(y.proxy,{[y.now]:e,[y.error]:r&&r.error,[y.selectable]:i}),[i,e,r]);return u("div",{tabIndex:0,className:f,onClick:d,onKeyDown:p,role:i?"menuitem":"",children:[u("div",{className:P(y.proxyName,y.row),children:[s(tn,{label:t,"aria-label":`proxy name: ${t}`,children:s("span",{children:t})}),s("span",{className:y.proxyType,style:{paddingLeft:4,opacity:.6,color:"#51A8DD"},children:h(n.udp,n.xudp)})]}),u("div",{className:y.row,children:[u("div",{className:y.row,children:[s("span",{className:y.proxyType,style:{paddingRight:4,opacity:.6,color:"#F596AA"},children:Jt(n.type)}),m(n.tfo)]}),l?s(Zt,{number:l,color:v}):null]})]})}const Ae=(e,{name:t})=>{const n=we(e),r=ne(e),o=xe(e);return{proxy:n[t]||{name:t,history:[]},latency:r[t],httpsLatencyTest:o.startsWith("https://")}},rn=S(Ae)(nn),on=S(Ae)(Qt),sn="_list_4awfc_4",an="_detail_4awfc_10",cn="_summary_4awfc_19",q={list:sn,detail:an,summary:cn};function Le({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){const o=e;return s("div",{className:P(q.list,q.detail),children:o.map(i=>s(rn,{onClick:r,isSelectable:n,name:i,now:i===t},i))})}function Me({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){return s("div",{className:P(q.list,q.summary),children:e.map(o=>s(on,{onClick:r,isSelectable:n,name:o,now:o===t},o))})}const{createElement:ln,useCallback:Y,useMemo:un,useState:de,useEffect:dn}=x;function he(){return s("div",{className:b.zapWrapper,children:s(A,{size:16})})}function hn({name:e,all:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,proxies:i,type:a,now:c,isOpen:l,latencyTestUrl:v,apiConfig:d,dispatch:h}){const m=Te(t,n,r,o,i),{data:p}=Ve(["/version",d],()=>Xe("/version",d)),f=un(()=>["Selector",p.meta&&"Fallback",p.meta&&"URLTest"].includes(a),[a,p.meta]),{app:{updateCollapsibleIsOpen:C},proxies:{requestDelayForProxies:g}}=G(),O=Y(()=>{C("proxyGroup",e,!l)},[l,C,e]),V=Y(B=>{f&&h(Ye(d,e,B))},[d,h,e,f]),[L,M]=de(!1),N=Y(async()=>{M(!0);try{p.meta===!0?(await Ze(d,e,v),await h(Q(d))):(await g(d,m),await h(Q(d)))}catch{}M(!1)},[m,d,h,e,p.meta]),[D,w]=de(window.innerWidth),z=()=>{w(window.innerWidth)};return dn(()=>(window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)),[]),u("div",{className:b.group,children:[u("div",{style:{display:"flex",alignItems:"center",justifyContent:D>768?"start":"space-between"},children:[s(Ee,{name:e,type:a,toggle:O,qty:m.length}),s("div",{style:{display:"flex"},children:D>768?u(E,{children:[s(_,{kind:"minimal",onClick:O,className:b.btn,title:"Toggle collapsible section",children:s("span",{className:P(b.arrow,{[b.isOpen]:l}),children:s(J,{size:20})})}),s(_,{title:"Test latency",kind:"minimal",onClick:N,isLoading:L,children:s(he,{})})]}):u(E,{children:[s(_,{title:"Test latency",kind:"minimal",onClick:N,isLoading:L,children:s(he,{})}),s(_,{kind:"minimal",onClick:O,className:b.btn,title:"Toggle collapsible section",children:s("span",{className:P(b.arrow,{[b.isOpen]:l}),children:s(J,{size:20})})})]})})]}),ln(l?Le:Me,{all:m,now:c,isSelectable:f,itemOnTapCallback:V})]})}const fn=S((e,{name:t,delay:n})=>{const r=we(e),o=Ce(e),i=re(e),a=oe(e),c=xe(e),l=r[t],{all:v,type:d,now:h}=l;return{all:v,delay:n,hideUnavailableProxies:a,proxySortBy:i,proxies:r,type:d,now:h,isOpen:o[`proxyGroup:${t}`],latencyTestUrl:c}})(hn),{useCallback:Ne,useState:pn}=x;function vn({dispatch:e,apiConfig:t,name:n}){return Ne(()=>e(Qe(t,n)),[t,e,n])}function mn({dispatch:e,apiConfig:t,names:n}){const[r,o]=pn(!1);return[Ne(async()=>{if(!r){o(!0);try{await e(Je(t,n))}catch{}o(!1)}},[t,e,n,r]),r]}const{useState:yn,useCallback:_n}=x;function bn({isLoading:e}){return e?s(ut,{children:s(A,{width:16,height:16})}):s(A,{width:16,height:16})}function gn({dispatch:e,apiConfig:t}){const[n,r]=yn(!1);return[_n(()=>{n||(r(!0),e(et(t)).then(()=>r(!1),()=>r(!1)))},[t,e,n]),n]}function wn({dispatch:e,apiConfig:t,proxyProviders:n}){const{t:r}=se(),[o,i]=gn({dispatch:e,apiConfig:t}),[a,c]=mn({apiConfig:t,dispatch:e,names:n.map(l=>l.name)});return s(at,{icon:s(bn,{isLoading:i}),onClick:o,text:r("Test Latency"),style:ct,children:n.length>0?s(lt,{text:r("update_all_proxy_provider"),onClick:a,children:s(dt,{isRotating:c})}):null})}var De=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(o,i){return o[0]===n?(r=i,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];n.call(r,a[1],a[0])}},t}()}(),te=typeof window<"u"&&typeof document<"u"&&window.document===document,U=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),xn=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(U):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Cn=2;function On(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&c()}function a(){xn(i)}function c(){var l=Date.now();if(n){if(l-o<Cn)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=l}return c}var Pn=20,kn=["top","right","bottom","left","width","height","size","weight"],En=typeof MutationObserver<"u",Tn=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=On(this.refresh.bind(this),Pn)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!te||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),En?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!te||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=kn.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ze=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},T=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||U},Be=K(0,0,0,0);function H(e){return parseFloat(e)||0}function fe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+H(i)},0)}function Sn(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var i=o[r],a=e["padding-"+i];n[i]=H(a)}return n}function Rn(e){var t=e.getBBox();return K(0,0,t.width,t.height)}function An(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Be;var r=T(e).getComputedStyle(e),o=Sn(r),i=o.left+o.right,a=o.top+o.bottom,c=H(r.width),l=H(r.height);if(r.boxSizing==="border-box"&&(Math.round(c+i)!==t&&(c-=fe(r,"left","right")+i),Math.round(l+a)!==n&&(l-=fe(r,"top","bottom")+a)),!Mn(e)){var v=Math.round(c+i)-t,d=Math.round(l+a)-n;Math.abs(v)!==1&&(c-=v),Math.abs(d)!==1&&(l-=d)}return K(o.left,o.top,c,l)}var Ln=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof T(e).SVGGraphicsElement}:function(e){return e instanceof T(e).SVGElement&&typeof e.getBBox=="function"}}();function Mn(e){return e===T(e).document.documentElement}function Nn(e){return te?Ln(e)?Rn(e):An(e):Be}function Dn(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return ze(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}function K(e,t,n,r){return{x:e,y:t,width:n,height:r}}var zn=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=K(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Nn(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Bn=function(){function e(t,n){var r=Dn(n);ze(this,{target:t,contentRect:r})}return e}(),$n=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new De,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof T(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new zn(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof T(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Bn(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),$e=typeof WeakMap<"u"?new WeakMap:new De,Fe=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Tn.getInstance(),r=new $n(t,n,this);$e.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Fe.prototype[e]=function(){var t;return(t=$e.get(this))[e].apply(t,arguments)}});var Fn=function(){return typeof U.ResizeObserver<"u"?U.ResizeObserver:Fe}();const{memo:jn,useState:In,useRef:je,useEffect:Ie}=X;function Wn(e){const t=je();return Ie(()=>void(t.current=e),[e]),t.current}function qn(){const e=je(),[t,n]=In({height:0});return Ie(()=>{const r=new Fn(([o])=>n(o.contentRect));return e.current&&r.observe(e.current),()=>r.disconnect()},[]),[e,t]}const Un={initialOpen:{height:"auto",transition:{duration:0}},open:e=>({height:e,opacity:1,visibility:"visible",transition:{duration:.3}}),closed:{height:0,opacity:0,visibility:"hidden",overflowY:"hidden",transition:{duration:.3}}},Hn={open:{},closed:{}},pe=jn(({children:e,isOpen:t})=>{const r=Oe.read().motion,o=Wn(t),[i,{height:a}]=qn();return s("div",{children:s(r.div,{animate:t&&o===t?"initialOpen":t?"open":"closed",custom:a,variants:Un,children:s(r.div,{variants:Hn,ref:i,children:e})})})}),Gn="_updatedAt_1d817_4",Kn="_body_1d817_12",Vn="_actionFooter_1d817_25",Yn="_refresh_1d817_35",I={updatedAt:Gn,body:Kn,actionFooter:Vn,refresh:Yn},{useState:Zn,useCallback:ve}=x;function Xn({name:e,proxies:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,vehicleType:i,updatedAt:a,subscriptionInfo:c,isOpen:l,dispatch:v,apiConfig:d}){const h=Te(t,n,r,o),[m,p]=Zn(!1),f=vn({dispatch:v,apiConfig:d,name:e}),C=ve(async()=>{p(!0),await v(tt(d,e)),p(!1)},[d,v,e,p]),{app:{updateCollapsibleIsOpen:g}}=G(),O=ve(()=>{g("proxyProvider",e,!l)},[l,g,e]),V=ft(new Date(a),new Date),L=c?me(c.Total):0,M=c?me(c.Download+c.Upload):0,N=c?((c.Download+c.Upload)/c.Total*100).toFixed(2):0,D=()=>{if(c.Expire===0)return"Null";const w=new Date(c.Expire*1e3),z=w.getFullYear()+"-",B=(w.getMonth()+1<10?"0"+(w.getMonth()+1):w.getMonth()+1)+"-",We=(w.getDate()<10?"0"+w.getDate():w.getDate())+" ";return z+B+We};return u("div",{className:I.body,children:[u("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},children:[s(Ee,{name:e,toggle:O,type:i,isOpen:l,qty:h.length}),u("div",{style:{display:"flex"},children:[s(_,{kind:"minimal",onClick:O,className:b.btn,title:"Toggle collapsible section",children:s("span",{className:P(b.arrow,{[b.isOpen]:l}),children:s(J,{size:20})})}),s(_,{kind:"minimal",start:s(ye,{}),onClick:f}),s(_,{kind:"minimal",start:s(A,{size:16}),onClick:C,isLoading:m})]})]}),u("div",{className:I.updatedAt,children:[c&&u("small",{children:[M," / ",L," ( ",N,"% )    Expire: ",D()," "]}),s("br",{}),u("small",{children:["Updated ",V," ago"]})]}),u(pe,{isOpen:l,children:[s(Le,{all:h}),u("div",{className:I.actionFooter,children:[s(_,{text:"Update",start:s(ye,{}),onClick:f}),s(_,{text:"Health Check",start:s(A,{size:16}),onClick:C,isLoading:m})]})]}),s(pe,{isOpen:!l,children:s(Me,{all:h})})]})}const Qn={rest:{scale:1},pressed:{scale:.95}},Jn={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function me(e,t=2){if(!+e)return"0 Bytes";const n=1024,r=t<0?0:t,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/Math.pow(n,i)).toFixed(r))} ${o[i]}`}function ye(){const t=Oe.read().motion;return s(t.div,{className:I.refresh,variants:Qn,initial:"rest",whileHover:"hover",whileTap:"pressed",children:s(t.div,{className:"flexCenter",variants:Jn,children:s(pt,{size:16})})})}const er=(e,{proxies:t,name:n})=>{const r=oe(e),o=ne(e),i=Ce(e),a=Pe(e),c=re(e);return{apiConfig:a,proxies:t,delay:o,hideUnavailableProxies:r,proxySortBy:c,isOpen:i[`proxyProvider:${n}`]}},tr=S(er)(Xn);function nr({items:e}){return e.length===0?null:u(E,{children:[s(ke,{title:"Proxy Provider"}),s("div",{children:e.map(t=>s(tr,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt,subscriptionInfo:t.subscriptionInfo},t.name))})]})}const rr="_labeledInput_cmki0_1",Z={labeledInput:rr},or=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:_e}=x;function sr({appConfig:e}){const{app:{updateAppConfig:t}}=G(),n=_e(i=>{t("proxySortBy",i.target.value)},[t]),r=_e(i=>{t("hideUnavailableProxies",i)},[t]),{t:o}=se();return u(E,{children:[u("div",{className:Z.labeledInput,children:[s("span",{children:o("sort_in_grp")}),s("div",{children:s(vt,{options:or.map(i=>[i[0],o(i[1])]),selected:e.proxySortBy,onChange:n})})]}),s("hr",{}),u("div",{className:Z.labeledInput,children:[s("span",{children:o("hide_unavail_proxies")}),s("div",{children:s(ae,{name:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:r})})]}),u("div",{className:Z.labeledInput,children:[s("span",{children:o("auto_close_conns")}),s("div",{children:s(ae,{name:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:i=>t("autoCloseOldConns",i)})})]})]})}const ir=e=>{const t=re(e),n=oe(e),r=nt(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:n,autoCloseOldConns:r}}},ar=S(ir)(sr);function cr({color:e="currentColor",size:t=24}){return u("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M2 6h9M18.5 6H22"}),s("circle",{cx:"16",cy:"6",r:"2"}),s("path",{d:"M22 18h-9M6 18H2"}),s("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const lr="_topBar_15n7g_4",ur="_topBarRight_15n7g_16",dr="_textFilterContainer_15n7g_25",hr="_group_15n7g_32",j={topBar:lr,topBarRight:ur,textFilterContainer:dr,group:hr},{useState:fr,useEffect:pr,useCallback:be,useRef:vr}=x;function mr({dispatch:e,groupNames:t,delay:n,proxyProviders:r,apiConfig:o,showModalClosePrevConns:i}){const a=vr({}),c=be(()=>{a.current.startAt=Date.now(),e(Q(o)).then(()=>{a.current.completeAt=Date.now()})},[o,e]);pr(()=>{c();const f=()=>{a.current.startAt&&Date.now()-a.current.startAt>3e4&&c()};return window.addEventListener("focus",f,!1),()=>window.removeEventListener("focus",f,!1)},[c]);const[l,v]=fr(!1),d=be(()=>{v(!1)},[]),{proxies:{closeModalClosePrevConns:h,closePrevConnsAndTheModal:m}}=G(),{t:p}=se();return u(E,{children:[s(ce,{isOpen:l,onRequestClose:d,children:s(ar,{})}),u("div",{className:j.topBar,children:[s(ke,{title:p("Proxies")}),u("div",{className:j.topBarRight,children:[s("div",{className:j.textFilterContainer,children:s(ht,{textAtom:ge,placeholder:p("Search")})}),s(rt,{label:p("settings"),children:s(_,{kind:"minimal",onClick:()=>v(!0),children:s(cr,{size:16})})})]})]}),s("div",{children:t.map(f=>s("div",{className:j.group,children:s(fn,{name:f,delay:n,apiConfig:o,dispatch:e})},f))}),s(nr,{items:r}),s("div",{style:{height:60}}),s(wn,{dispatch:e,apiConfig:o,proxyProviders:r}),s(ce,{isOpen:i,onRequestClose:h,children:s(xt,{onClickPrimaryButton:()=>m(o),onClickSecondaryButton:h})})]})}const yr=e=>({apiConfig:Pe(e),groupNames:ot(e),proxyProviders:st(e),delay:ne(e),showModalClosePrevConns:it(e)}),kr=S(yr)(mr);export{kr as default};

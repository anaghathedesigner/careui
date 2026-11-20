import{i as e,l as t,r as n}from"./dist-DtVyZPdI.js";import{t as r}from"./react-dom-B6HHu0c4.js";import{t as i}from"./createLucideIcon-Cs4mMgfM.js";import{t as a}from"./search-Dl4KIBBW.js";import{t as o}from"./user-KlrTp-XM.js";import{t as s}from"./x-CgxuUKeI.js";import{t as c}from"./button-DTwq4-az.js";import{t as l}from"./scroll-area-BJdbm6T5.js";import{At as u,Bt as d,Cn as f,Dr as p,Dt as m,En as h,Er as g,Ft as _,Ht as v,It as y,Lt as b,Mr as x,Nn as ee,Nt as S,On as C,Ot as w,Pt as T,Rn as E,Rr as D,Rt as O,Sa as k,Sr as te,Tn as A,Tr as j,Ui as ne,Ut as M,Vt as N,Xi as re,Yi as ie,_r as P,bn as F,br as ae,bt as I,da as oe,di as L,dr as R,fi as se,fr as z,gr as B,jt as V,kt as ce,li as le,mr as H,n as ue,na as de,qi as fe,r as pe,s as me,ui as he,vn as U,vr as W,wn as ge,wr as _e,xr as ve,ya as ye,yn as be,zt as G}from"./index-Ck2hFZuL.js";var xe=i(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),Se=i(`grip-vertical`,[[`circle`,{cx:`9`,cy:`12`,r:`1`,key:`1vctgf`}],[`circle`,{cx:`9`,cy:`5`,r:`1`,key:`hp0tcf`}],[`circle`,{cx:`9`,cy:`19`,r:`1`,key:`fkjjf6`}],[`circle`,{cx:`15`,cy:`12`,r:`1`,key:`1tmaij`}],[`circle`,{cx:`15`,cy:`5`,r:`1`,key:`19l28e`}],[`circle`,{cx:`15`,cy:`19`,r:`1`,key:`f4zoj3`}]]),Ce=i(`heart-pulse`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}],[`path`,{d:`M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27`,key:`auskq0`}]]),we=i(`user-plus`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}],[`line`,{x1:`19`,x2:`19`,y1:`8`,y2:`14`,key:`1bvyxn`}],[`line`,{x1:`22`,x2:`16`,y1:`11`,y2:`11`,key:`1shjgl`}]]),Te=t(r()),K=t(e());function Ee(){var e=[...arguments];return(0,K.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var De=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Oe(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function ke(e){return`nodeType`in e}function q(e){return e?Oe(e)?e:ke(e)?e.ownerDocument?.defaultView??window:window:window}function Ae(e){let{Document:t}=q(e);return e instanceof t}function je(e){return!Oe(e)&&e instanceof q(e).HTMLElement}function Me(e){return e instanceof q(e).SVGElement}function Ne(e){return e?Oe(e)?e.document:ke(e)?Ae(e)?e:je(e)||Me(e)?e.ownerDocument:document:document:document}var Pe=De?K.useLayoutEffect:K.useEffect;function Fe(e){let t=(0,K.useRef)(e);return Pe(()=>{t.current=e}),(0,K.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function Ie(){let e=(0,K.useRef)(null);return[(0,K.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,K.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function Le(e,t){t===void 0&&(t=[e]);let n=(0,K.useRef)(e);return Pe(()=>{n.current!==e&&(n.current=e)},t),n}function Re(e,t){let n=(0,K.useRef)();return(0,K.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function ze(e){let t=Fe(e),n=(0,K.useRef)(null);return[n,(0,K.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function Be(e){let t=(0,K.useRef)();return(0,K.useEffect)(()=>{t.current=e},[e]),t.current}var Ve={};function He(e,t){return(0,K.useMemo)(()=>{if(t)return t;let n=Ve[e]==null?0:Ve[e]+1;return Ve[e]=n,e+`-`+n},[e,t])}function Ue(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var We=Ue(1),Ge=Ue(-1);function Ke(e){return`clientX`in e&&`clientY`in e}function qe(e){if(!e)return!1;let{KeyboardEvent:t}=q(e.target);return t&&e instanceof t}function Je(e){if(!e)return!1;let{TouchEvent:t}=q(e.target);return t&&e instanceof t}function Ye(e){if(Je(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Ke(e)?{x:e.clientX,y:e.clientY}:null}var Xe=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[Xe.Translate.toString(e),Xe.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),Ze=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function Qe(e){return e.matches(Ze)?e:e.querySelector(Ze)}var $e={display:`none`};function et(e){let{id:t,value:n}=e;return K.createElement(`div`,{id:t,style:$e},n)}function tt(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return K.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function nt(){let[e,t]=(0,K.useState)(``);return{announce:(0,K.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var rt=(0,K.createContext)(null);function it(e){let t=(0,K.useContext)(rt);(0,K.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function at(){let[e]=(0,K.useState)(()=>new Set),t=(0,K.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,K.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var ot={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},st={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function ct(e){let{announcements:t=st,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=ot}=e,{announce:a,announcement:o}=nt(),s=He(`DndLiveRegion`),[c,l]=(0,K.useState)(!1);if((0,K.useEffect)(()=>{l(!0)},[]),it((0,K.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=K.createElement(K.Fragment,null,K.createElement(et,{id:r,value:i.draggable}),K.createElement(tt,{id:s,announcement:o}));return n?(0,Te.createPortal)(u,n):u}var J;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(J||={});function lt(){}function ut(e,t){return(0,K.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function dt(){var e=[...arguments];return(0,K.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var Y=Object.freeze({x:0,y:0});function ft(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function pt(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function mt(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function ht(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function gt(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var _t=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=gt(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=ft(gt(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(pt)};function vt(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var yt=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=vt(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(mt)};function bt(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function xt(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Y}function St(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var Ct=St(1);function wt(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Tt(e,t,n){let r=wt(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var Et={ignoreTransform:!1};function Dt(e,t){t===void 0&&(t=Et);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=q(e).getComputedStyle(e);t&&(n=Tt(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function Ot(e){return Dt(e,{ignoreTransform:!0})}function kt(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function At(e,t){return t===void 0&&(t=q(e).getComputedStyle(e)),t.position===`fixed`}function jt(e,t){t===void 0&&(t=q(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`&&n.test(r)})}function Mt(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(Ae(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!je(i)||Me(i)||n.includes(i))return n;let a=q(e).getComputedStyle(i);return i!==e&&jt(i,a)&&n.push(i),At(i,a)?n:r(i.parentNode)}return e?r(e):n}function Nt(e){let[t]=Mt(e,1);return t??null}function Pt(e){return!De||!e?null:Oe(e)?e:ke(e)?Ae(e)||e===Ne(e).scrollingElement?window:je(e)?e:null:null}function Ft(e){return Oe(e)?e.scrollX:e.scrollLeft}function It(e){return Oe(e)?e.scrollY:e.scrollTop}function Lt(e){return{x:Ft(e),y:It(e)}}var X;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(X||={});function Rt(e){return!De||!e?!1:e===document.scrollingElement}function zt(e){let t={x:0,y:0},n=Rt(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var Bt={x:.2,y:.2};function Vt(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=Bt);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=zt(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=X.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=X.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=X.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=X.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function Ht(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Ut(e){return e.reduce((e,t)=>We(e,Lt(t)),Y)}function Wt(e){return e.reduce((e,t)=>e+Ft(t),0)}function Gt(e){return e.reduce((e,t)=>e+It(t),0)}function Kt(e,t){if(t===void 0&&(t=Dt),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Nt(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var qt=[[`x`,[`left`,`right`],Wt],[`y`,[`top`,`bottom`],Gt]],Jt=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=Mt(t),r=Ut(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of qt)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Yt=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function Xt(e){let{EventTarget:t}=q(e);return e instanceof t?e:Ne(e)}function Zt(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t&&r>t.y}var Qt;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(Qt||={});function $t(e){e.preventDefault()}function en(e){e.stopPropagation()}var Z;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(Z||={});var tn={start:[Z.Space,Z.Enter],cancel:[Z.Esc],end:[Z.Space,Z.Enter,Z.Tab]},nn=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Z.Right:return{...n,x:n.x+25};case Z.Left:return{...n,x:n.x-25};case Z.Down:return{...n,y:n.y+25};case Z.Up:return{...n,y:n.y-25}}},rn=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new Yt(Ne(t)),this.windowListeners=new Yt(q(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Qt.Resize,this.handleCancel),this.windowListeners.add(Qt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Qt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&Kt(n),t(Y)}handleKeyDown(e){if(qe(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=tn,coordinateGetter:a=nn,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:Y;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=Ge(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=zt(n),p=Ht(n),m={x:Math.min(i===Z.Right?p.right-p.width/2:p.right,Math.max(i===Z.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===Z.Down?p.bottom-p.height/2:p.bottom,Math.max(i===Z.Down?p.top:p.top+p.height/2,u.y))},h=i===Z.Right&&!s||i===Z.Left&&!c,g=i===Z.Down&&!l||i===Z.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===Z.Right&&e<=d.x||i===Z.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}r.x=a?n.scrollLeft-e:i===Z.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===Z.Down&&e<=d.y||i===Z.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}r.y=a?n.scrollTop-e:i===Z.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,We(Ge(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};rn.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=tn,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function an(e){return!!(e&&`distance`in e)}function on(e){return!!(e&&`delay`in e)}var sn=class{constructor(e,t,n){n===void 0&&(n=Xt(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=Ne(i),this.documentListeners=new Yt(this.document),this.listeners=new Yt(n),this.windowListeners=new Yt(q(i)),this.initialCoordinates=Ye(r)??Y,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Qt.Resize,this.handleCancel),this.windowListeners.add(Qt.DragStart,$t),this.windowListeners.add(Qt.VisibilityChange,this.handleCancel),this.windowListeners.add(Qt.ContextMenu,$t),this.documentListeners.add(Qt.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(on(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(an(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Qt.Click,en,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Qt.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=Ye(e)??Y,s=Ge(n,o);if(!t&&a){if(an(a)){if(a.tolerance!=null&&Zt(s,a.tolerance))return this.handleCancel();if(Zt(s,a.distance))return this.handleStart()}if(on(a)&&Zt(s,a.tolerance))return this.handleCancel();this.handlePending(a,s)}else e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===Z.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},cn={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},ln=class extends sn{constructor(e){let{event:t}=e,n=Ne(t.target);super(e,cn,n)}};ln.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var un={move:{name:`mousemove`},end:{name:`mouseup`}},dn;(function(e){e[e.RightClick=2]=`RightClick`})(dn||={});var fn=class extends sn{constructor(e){super(e,un,Ne(e.event.target))}};fn.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==dn.RightClick&&(r?.({event:n}),!0)}}];var pn={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},mn=class extends sn{constructor(e){super(e,pn)}static setup(){return window.addEventListener(pn.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(pn.move.name,e)};function e(){}}};mn.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var hn;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(hn||={});var gn;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(gn||={});function _n(e){let{acceleration:t,activator:n=hn.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=gn.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=yn({delta:d,disabled:!a}),[m,h]=Ie(),g=(0,K.useRef)({x:0,y:0}),_=(0,K.useRef)({x:0,y:0}),v=(0,K.useMemo)(()=>{switch(n){case hn.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case hn.DraggableRect:return i}},[n,i,c]),y=(0,K.useRef)(null),b=(0,K.useCallback)(()=>{let e=y.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),x=(0,K.useMemo)(()=>s===gn.TreeOrder?[...l].reverse():l,[s,l]);(0,K.useEffect)(()=>{if(!a||!l.length||!v)h();else{for(let e of x){if(r?.(e)===!1)continue;let n=l.indexOf(e),i=u[n];if(!i)continue;let{direction:a,speed:s}=Vt(e,i,v,t,f);for(let e of[`x`,`y`])p[e][a[e]]||(s[e]=0,a[e]=0);if(s.x>0||s.y>0){h(),y.current=e,m(b,o),g.current=s,_.current=a;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()}},[t,b,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,x,u,JSON.stringify(f)])}var vn={x:{[X.Backward]:!1,[X.Forward]:!1},y:{[X.Backward]:!1,[X.Forward]:!1}};function yn(e){let{delta:t,disabled:n}=e,r=Be(t);return Re(e=>{if(n||!r||!e)return vn;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[X.Backward]:e.x[X.Backward]||i.x===-1,[X.Forward]:e.x[X.Forward]||i.x===1},y:{[X.Backward]:e.y[X.Backward]||i.y===-1,[X.Forward]:e.y[X.Forward]||i.y===1}}},[n,t,r])}function bn(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return Re(e=>t==null?null:r??e??null,[r,t])}function xn(e,t){return(0,K.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Sn;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Sn||={});var Cn;(function(e){e.Optimized=`optimized`})(Cn||={});var wn=new Map;function Tn(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,K.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,K.useRef)(e),d=g(),f=Le(d),p=(0,K.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,K.useRef)(null),h=Re(t=>{if(d&&!n)return wn;if(!t||t===wn||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new Jt(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,K.useEffect)(()=>{u.current=e},[e]),(0,K.useEffect)(()=>{d||p()},[n,d]),(0,K.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,K.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Sn.Always:return!1;case Sn.BeforeDragging:return n;default:return!n}}}function En(e,t){return Re(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function Dn(e,t){return En(e,t)}function On(e){let{callback:t,disabled:n}=e,r=Fe(t),i=(0,K.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,K.useEffect)(()=>()=>i?.disconnect(),[i]),i}function kn(e){let{callback:t,disabled:n}=e,r=Fe(t),i=(0,K.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,K.useEffect)(()=>()=>i?.disconnect(),[i]),i}function An(e){return new Jt(Dt(e),e)}function jn(e,t,n){t===void 0&&(t=An);let[r,i]=(0,K.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=On({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=kn({callback:a});return Pe(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Mn(e){return xt(e,En(e))}var Nn=[];function Pn(e){let t=(0,K.useRef)(e),n=Re(n=>e?n&&n!==Nn&&e&&t.current&&e.parentNode===t.current.parentNode?n:Mt(e):Nn,[e]);return(0,K.useEffect)(()=>{t.current=e},[e]),n}function Fn(e){let[t,n]=(0,K.useState)(null),r=(0,K.useRef)(e),i=(0,K.useCallback)(e=>{let t=Pt(e.target);t&&n(e=>e?(e.set(t,Lt(t)),new Map(e)):null)},[]);return(0,K.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=Pt(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,Lt(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{Pt(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,K.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>We(e,t),Y):Ut(e):Y,[e,t])}function In(e,t){t===void 0&&(t=[]);let n=(0,K.useRef)(null);return(0,K.useEffect)(()=>{n.current=null},t),(0,K.useEffect)(()=>{let t=e!==Y;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?Ge(e,n.current):Y}function Ln(e){(0,K.useEffect)(()=>{if(!De)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function Rn(e,t){return(0,K.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function zn(e){return(0,K.useMemo)(()=>e?kt(e):null,[e])}var Bn=[];function Vn(e,t){t===void 0&&(t=Dt);let[n]=e,r=zn(n?q(n):null),[i,a]=(0,K.useState)(Bn);function o(){a(()=>e.length?e.map(e=>Rt(e)?r:new Jt(t(e),e)):Bn)}let s=kn({callback:o});return Pe(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function Hn(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return je(t)?t:e}function Un(e){let{measure:t}=e,[n,r]=(0,K.useState)(null),i=kn({callback:(0,K.useCallback)(e=>{for(let{target:n}of e)if(je(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=ze((0,K.useCallback)(e=>{let n=Hn(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,K.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var Wn=[{sensor:ln,options:{}},{sensor:rn,options:{}}],Gn={current:{}},Kn={draggable:{measure:Ot},droppable:{measure:Ot,strategy:Sn.WhileDragging,frequency:Cn.Optimized},dragOverlay:{measure:Dt}},qn=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},Jn={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new qn,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:lt},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Kn,measureDroppableContainers:lt,windowRect:null,measuringScheduled:!1},Yn={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:lt,draggableNodes:new Map,over:null,measureDroppableContainers:lt},Xn=(0,K.createContext)(Yn),Zn=(0,K.createContext)(Jn);function Qn(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new qn}}}function $n(e,t){switch(t.type){case J.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case J.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case J.DragEnd:case J.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case J.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new qn(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case J.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new qn(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case J.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new qn(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function er(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,K.useContext)(Xn),a=Be(r),o=Be(n?.id);return(0,K.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!qe(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=Qe(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function tr(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function nr(e){return(0,K.useMemo)(()=>({draggable:{...Kn.draggable,...e?.draggable},droppable:{...Kn.droppable,...e?.droppable},dragOverlay:{...Kn.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function rr(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,K.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;Pe(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=xt(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Nt(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var ir=(0,K.createContext)({...Y,scaleX:1,scaleY:1}),ar;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(ar||={});var or=(0,K.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=Wn,collisionDetection:o=yt,measuring:s,modifiers:c,...l}=e,[u,d]=(0,K.useReducer)($n,void 0,Qn),[f,p]=at(),[m,h]=(0,K.useState)(ar.Uninitialized),g=m===ar.Initialized,{draggable:{active:_,nodes:v,translate:y},droppable:{containers:b}}=u,x=_==null?null:v.get(_),ee=(0,K.useRef)({initial:null,translated:null}),S=(0,K.useMemo)(()=>_==null?null:{id:_,data:x?.data??Gn,rect:ee},[_,x]),C=(0,K.useRef)(null),[w,T]=(0,K.useState)(null),[E,D]=(0,K.useState)(null),O=Le(l,Object.values(l)),k=He(`DndDescribedBy`,t),te=(0,K.useMemo)(()=>b.getEnabled(),[b]),A=nr(s),{droppableRects:j,measureDroppableContainers:ne,measuringScheduled:M}=Tn(te,{dragging:g,dependencies:[y.x,y.y],config:A.droppable}),N=bn(v,_),re=(0,K.useMemo)(()=>E?Ye(E):null,[E]),ie=Ce(),P=Dn(N,A.draggable.measure);rr({activeNode:_==null?null:v.get(_),config:ie.layoutShiftCompensation,initialRect:P,measure:A.draggable.measure});let F=jn(N,A.draggable.measure,P),ae=jn(N?N.parentElement:null),I=(0,K.useRef)({activatorEvent:null,active:null,activeNode:N,collisionRect:null,collisions:null,droppableRects:j,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:b,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),oe=b.getNodeFor(I.current.over?.id),L=Un({measure:A.dragOverlay.measure}),R=L.nodeRef.current??N,se=g?L.rect??F:null,z=!!(L.nodeRef.current&&L.rect),B=Mn(z?null:F),V=zn(R?q(R):null),ce=Pn(g?oe??N:null),le=Vn(ce),H=tr(c,{transform:{x:y.x-B.x,y:y.y-B.y,scaleX:1,scaleY:1},activatorEvent:E,active:S,activeNodeRect:F,containerNodeRect:ae,draggingNodeRect:se,over:I.current.over,overlayNodeRect:L.rect,scrollableAncestors:ce,scrollableAncestorRects:le,windowRect:V}),ue=re?We(re,y):null,de=Fn(ce),fe=In(de),pe=In(de,[F]),me=We(H,fe),he=se?Ct(se,H):null,U=S&&he?o({active:S,collisionRect:he,droppableRects:j,droppableContainers:te,pointerCoordinates:ue}):null,W=ht(U,`id`),[ge,_e]=(0,K.useState)(null),ve=bt(z?H:We(H,pe),ge?.rect??null,F),ye=(0,K.useRef)(null),be=(0,K.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(C.current==null)return;let i=v.get(C.current);if(!i)return;let a=e.nativeEvent,o=new n({active:C.current,activeNode:i,event:a,options:r,context:I,onAbort(e){if(!v.get(e))return;let{onDragAbort:t}=O.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!v.get(e))return;let{onDragPending:i}=O.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=C.current;if(t==null)return;let n=v.get(t);if(!n)return;let{onDragStart:r}=O.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:ee}};(0,Te.unstable_batchedUpdates)(()=>{r?.(i),h(ar.Initializing),d({type:J.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),T(ye.current),D(a)})},onMove(e){d({type:J.DragMove,coordinates:e})},onEnd:s(J.DragEnd),onCancel:s(J.DragCancel)});ye.current=o;function s(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=I.current,o=null;if(t&&i){let{cancelDrop:s}=O.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===J.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=J.DragCancel)}C.current=null,(0,Te.unstable_batchedUpdates)(()=>{d({type:e}),h(ar.Uninitialized),_e(null),T(null),D(null),ye.current=null;let t=e===J.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=O.current[t];e?.(o),f({type:t,event:o})}})}}},[v]),G=xn(a,(0,K.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=v.get(r);if(C.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},C.current=r,be(n,t))},[v,be]));Ln(a),Pe(()=>{F&&m===ar.Initializing&&h(ar.Initialized)},[F,m]),(0,K.useEffect)(()=>{let{onDragMove:e}=O.current,{active:t,activatorEvent:n,collisions:r,over:i}=I.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:me.x,y:me.y},over:i};(0,Te.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[me.x,me.y]),(0,K.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=I.current;if(!e||C.current==null||!t||!i)return;let{onDragOver:a}=O.current,o=r.get(W),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,Te.unstable_batchedUpdates)(()=>{_e(s),a?.(c),f({type:`onDragOver`,event:c})})},[W]),Pe(()=>{I.current={activatorEvent:E,active:S,activeNode:N,collisionRect:he,collisions:U,droppableRects:j,draggableNodes:v,draggingNode:R,draggingNodeRect:se,droppableContainers:b,over:ge,scrollableAncestors:ce,scrollAdjustedTranslate:me},ee.current={initial:se,translated:he}},[S,N,U,he,v,R,se,j,b,ge,ce,me]),_n({...ie,delta:y,draggingRect:he,pointerCoordinates:ue,scrollableAncestors:ce,scrollableAncestorRects:le});let xe=(0,K.useMemo)(()=>({active:S,activeNode:N,activeNodeRect:F,activatorEvent:E,collisions:U,containerNodeRect:ae,dragOverlay:L,draggableNodes:v,droppableContainers:b,droppableRects:j,over:ge,measureDroppableContainers:ne,scrollableAncestors:ce,scrollableAncestorRects:le,measuringConfiguration:A,measuringScheduled:M,windowRect:V}),[S,N,F,E,U,ae,L,v,b,j,ge,ne,ce,le,A,M,V]),Se=(0,K.useMemo)(()=>({activatorEvent:E,activators:G,active:S,activeNodeRect:F,ariaDescribedById:{draggable:k},dispatch:d,draggableNodes:v,over:ge,measureDroppableContainers:ne}),[E,G,S,F,d,k,v,ge,ne]);return K.createElement(rt.Provider,{value:p},K.createElement(Xn.Provider,{value:Se},K.createElement(Zn.Provider,{value:xe},K.createElement(ir.Provider,{value:ve},i)),K.createElement(er,{disabled:n?.restoreFocus===!1})),K.createElement(ct,{...n,hiddenTextDescribedById:k}));function Ce(){let e=w?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),sr=(0,K.createContext)(null),cr=`button`,lr=`Draggable`;function ur(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=He(lr),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,K.useContext)(Xn),{role:p=cr,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,K.useContext)(g?ir:sr),[v,y]=ze(),[b,x]=ze(),ee=Rn(o,t),S=Le(n);return Pe(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:b,data:S}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,K.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===cr?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:ee,node:v,over:f,setNodeRef:y,setActivatorNodeRef:x,transform:_}}function dr(){return(0,K.useContext)(Zn)}var fr=`Droppable`,pr={timeout:25};function mr(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=He(fr),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,K.useContext)(Xn),u=(0,K.useRef)({disabled:n}),d=(0,K.useRef)(!1),f=(0,K.useRef)(null),p=(0,K.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...pr,...i},_=Le(h??r),v=kn({callback:(0,K.useCallback)(()=>{d.current?(p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)):d.current=!0},[g]),disabled:m||!o}),[y,b]=ze((0,K.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),x=Le(t);return(0,K.useEffect)(()=>{v&&y.current&&(v.disconnect(),d.current=!1,v.observe(y.current))},[y,v]),(0,K.useEffect)(()=>(s({type:J.RegisterDroppable,element:{id:r,key:a,disabled:n,node:y,rect:f,data:x}}),()=>s({type:J.UnregisterDroppable,key:a,id:r})),[r]),(0,K.useEffect)(()=>{n!==u.current.disabled&&(s({type:J.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:y,over:c,setNodeRef:b}}function hr(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function gr(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function _r(e){return e!==null&&e>=0}function vr(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function yr(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var br={scaleX:1,scaleY:1},xr=e=>{let{rects:t,activeNodeRect:n,activeIndex:r,overIndex:i,index:a}=e,o=t[r]??n;if(!o)return null;let s=Sr(t,a,r);if(a===r){let e=t[i];return e?{x:r<i?e.left+e.width-(o.left+o.width):e.left-o.left,y:0,...br}:null}return a>r&&a<=i?{x:-o.width-s,y:0,...br}:a<r&&a>=i?{x:o.width+s,y:0,...br}:{x:0,y:0,...br}};function Sr(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return!r||!i&&!a?0:n<t?i?r.left-(i.left+i.width):a.left-(r.left+r.width):a?a.left-(r.left+r.width):r.left-(i.left+i.width)}var Cr=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=hr(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},wr=`Sortable`,Tr=K.createContext({activeIndex:-1,containerId:wr,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Cr,disabled:{draggable:!1,droppable:!1}});function Er(e){let{children:t,id:n,items:r,strategy:i=Cr,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=dr(),d=He(wr,n),f=s.rect!==null,p=(0,K.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,K.useRef)(p),v=!vr(p,_.current),y=g!==-1&&h===-1||v,b=yr(a);Pe(()=>{v&&m&&u(p)},[v,p,m,u]),(0,K.useEffect)(()=>{_.current=p},[p]);let x=(0,K.useMemo)(()=>({activeIndex:h,containerId:d,disabled:b,disableTransforms:y,items:p,overIndex:g,useDragOverlay:f,sortedRects:gr(p,c),strategy:i}),[h,d,b.draggable,b.droppable,y,p,g,c,f,i]);return K.createElement(Tr.Provider,{value:x},t)}var Dr=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return hr(n,r,i).indexOf(t)},Or=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},kr={duration:200,easing:`ease`},Ar=`transform`,jr=Xe.Transition.toString({property:Ar,duration:0,easing:`linear`}),Mr={roleDescription:`sortable`};function Nr(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,K.useState)(null),s=(0,K.useRef)(n);return Pe(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=Dt(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,K.useEffect)(()=>{a&&o(null)},[a]),a}function Pr(e){let{animateLayoutChanges:t=Or,attributes:n,disabled:r,data:i,getNewIndex:a=Dr,id:o,strategy:s,resizeObserverConfig:c,transition:l=kr}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,K.useContext)(Tr),y=Fr(r,p),b=u.indexOf(o),x=(0,K.useMemo)(()=>({sortable:{containerId:d,index:b,items:u},...i}),[d,i,b,u]),ee=(0,K.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:S,node:C,isOver:w,setNodeRef:T}=mr({id:o,data:x,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:ee,...c}}),{active:E,activatorEvent:D,activeNodeRect:O,attributes:k,setNodeRef:te,listeners:A,isDragging:j,over:ne,setActivatorNodeRef:M,transform:N}=ur({id:o,data:x,attributes:{...Mr,...n},disabled:y.draggable}),re=Ee(T,te),ie=!!E,P=ie&&!m&&_r(f)&&_r(g),F=!_&&j,ae=P?(F&&P?N:null)??(s??v)({rects:h,activeNodeRect:O,activeIndex:f,overIndex:g,index:b}):null,I=_r(f)&&_r(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):b,oe=E?.id,L=(0,K.useRef)({activeId:oe,items:u,newIndex:I,containerId:d}),R=u!==L.current.items,se=t({active:E,containerId:d,isDragging:j,isSorting:ie,id:o,index:b,items:u,newIndex:L.current.newIndex,previousItems:L.current.items,previousContainerId:L.current.containerId,transition:l,wasDragging:L.current.activeId!=null}),z=Nr({disabled:!se,index:b,node:C,rect:S});return(0,K.useEffect)(()=>{ie&&L.current.newIndex!==I&&(L.current.newIndex=I),d!==L.current.containerId&&(L.current.containerId=d),u!==L.current.items&&(L.current.items=u)},[ie,I,d,u]),(0,K.useEffect)(()=>{if(oe===L.current.activeId)return;if(oe!=null&&L.current.activeId==null){L.current.activeId=oe;return}let e=setTimeout(()=>{L.current.activeId=oe},50);return()=>clearTimeout(e)},[oe]),{active:E,activeIndex:f,attributes:k,data:x,rect:S,index:b,newIndex:I,items:u,isOver:w,isSorting:ie,isDragging:j,listeners:A,node:C,overIndex:g,over:ne,setNodeRef:re,setActivatorNodeRef:M,setDroppableNodeRef:T,setDraggableNodeRef:te,transform:z??ae,transition:B()};function B(){if(z||R&&L.current.newIndex===b)return jr;if(!(F&&!qe(D)||!l)&&(ie||se))return Xe.Transition.toString({...l,property:Ar})}}function Fr(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}Z.Down,Z.Right,Z.Up,Z.Left;var Q=n(),$=[{id:`OHC-0041`,name:`Ravi Kumar`,age:45,gender:`M`,ward:`General`,bed:`G-12`,diagnosis:`Hypertension`,status:`stable`},{id:`OHC-0042`,name:`Priya Sharma`,age:32,gender:`F`,ward:`Maternity`,bed:`M-03`,diagnosis:`Post-op recovery`,status:`admitted`},{id:`OHC-0043`,name:`Arjun Mehta`,age:67,gender:`M`,ward:`ICU`,bed:`I-01`,diagnosis:`Cardiac arrest`,status:`critical`},{id:`OHC-0044`,name:`Sunita Rao`,age:28,gender:`F`,ward:`Surgical`,bed:`S-07`,diagnosis:`Appendicitis`,status:`admitted`},{id:`OHC-0045`,name:`Mohammed Ali`,age:55,gender:`M`,ward:`General`,bed:`G-05`,diagnosis:`Diabetes mellitus`,status:`stable`},{id:`OHC-0046`,name:`Lakshmi Nair`,age:73,gender:`F`,ward:`Geriatric`,bed:`GR-02`,diagnosis:`COPD`,status:`stable`},{id:`OHC-0047`,name:`Vivek Patel`,age:41,gender:`M`,ward:`Surgical`,bed:`S-11`,diagnosis:`Cholecystectomy`,status:`admitted`},{id:`OHC-0048`,name:`Ananya Singh`,age:19,gender:`F`,ward:`General`,bed:`G-18`,diagnosis:`Typhoid fever`,status:`admitted`},{id:`OHC-0049`,name:`Deepak Verma`,age:60,gender:`M`,ward:`ICU`,bed:`I-03`,diagnosis:`Stroke`,status:`critical`},{id:`OHC-0050`,name:`Meera Krishnan`,age:36,gender:`F`,ward:`Maternity`,bed:`M-07`,diagnosis:`Normal delivery`,status:`discharged`},{id:`OHC-0051`,name:`Rajesh Nambiar`,age:50,gender:`M`,ward:`Orthopedic`,bed:`O-04`,diagnosis:`Hip replacement`,status:`admitted`},{id:`OHC-0052`,name:`Fatima Begum`,age:48,gender:`F`,ward:`General`,bed:`G-22`,diagnosis:`Urinary tract infection`,status:`stable`}],Ir={stable:`success`,admitted:`info`,critical:`destructive`,discharged:`neutral`},Lr=[{id:`ML-01`,patientId:`OHC-0043`,patientName:`Arjun Mehta`,medication:`Aspirin 75mg`,dose:`1 tab`,route:`Oral`,scheduledAt:`06:00 AM`,status:`given`},{id:`ML-02`,patientId:`OHC-0041`,patientName:`Ravi Kumar`,medication:`Amlodipine 5mg`,dose:`1 tab`,route:`Oral`,scheduledAt:`08:00 AM`,status:`given`},{id:`ML-03`,patientId:`OHC-0049`,patientName:`Deepak Verma`,medication:`Heparin 5000 IU`,dose:`5000 IU`,route:`IV`,scheduledAt:`08:00 AM`,status:`given`},{id:`ML-04`,patientId:`OHC-0044`,patientName:`Sunita Rao`,medication:`Metronidazole 500mg`,dose:`500 mg`,route:`IV`,scheduledAt:`10:00 AM`,status:`pending`},{id:`ML-05`,patientId:`OHC-0045`,patientName:`Mohammed Ali`,medication:`Metformin 500mg`,dose:`1 tab`,route:`Oral`,scheduledAt:`02:00 PM`,status:`pending`},{id:`ML-06`,patientId:`OHC-0048`,patientName:`Ananya Singh`,medication:`Azithromycin 500mg`,dose:`1 cap`,route:`Oral`,scheduledAt:`08:00 AM`,status:`missed`},{id:`ML-07`,patientId:`OHC-0046`,patientName:`Lakshmi Nair`,medication:`Salbutamol 2.5mg`,dose:`2.5 mg`,route:`Inhaled`,scheduledAt:`12:00 PM`,status:`pending`},{id:`ML-08`,patientId:`OHC-0043`,patientName:`Arjun Mehta`,medication:`Atorvastatin 40mg`,dose:`1 tab`,route:`Oral`,scheduledAt:`10:00 PM`,status:`pending`},{id:`ML-09`,patientId:`OHC-0051`,patientName:`Rajesh Nambiar`,medication:`Tramadol 50mg`,dose:`50 mg`,route:`IM`,scheduledAt:`06:00 PM`,status:`given`},{id:`ML-10`,patientId:`OHC-0052`,patientName:`Fatima Begum`,medication:`Ciprofloxacin 500mg`,dose:`1 tab`,route:`Oral`,scheduledAt:`08:00 AM`,status:`given`}],Rr={given:`success`,pending:`warning`,missed:`destructive`},zr=[{id:`INV-2026-0041`,patientName:`Ravi Kumar`,patientId:`OHC-0041`,date:`10 Apr 2026`,category:`Consultation`,amount:500,status:`paid`},{id:`INV-2026-0042`,patientName:`Priya Sharma`,patientId:`OHC-0042`,date:`12 Apr 2026`,category:`Maternity`,amount:18500,status:`pending`},{id:`INV-2026-0043`,patientName:`Arjun Mehta`,patientId:`OHC-0043`,date:`13 Apr 2026`,category:`ICU`,amount:24e3,status:`pending`},{id:`INV-2026-0044`,patientName:`Sunita Rao`,patientId:`OHC-0044`,date:`14 Apr 2026`,category:`Surgery`,amount:32e3,status:`pending`},{id:`INV-2026-0045`,patientName:`Mohammed Ali`,patientId:`OHC-0045`,date:`09 Apr 2026`,category:`Consultation`,amount:750,status:`paid`},{id:`INV-2026-0046`,patientName:`Lakshmi Nair`,patientId:`OHC-0046`,date:`08 Apr 2026`,category:`Pharmacy`,amount:2340,status:`overdue`},{id:`INV-2026-0047`,patientName:`Vivek Patel`,patientId:`OHC-0047`,date:`14 Apr 2026`,category:`Surgery`,amount:28e3,status:`pending`},{id:`INV-2026-0048`,patientName:`Ananya Singh`,patientId:`OHC-0048`,date:`11 Apr 2026`,category:`Laboratory`,amount:1200,status:`paid`},{id:`INV-2026-0049`,patientName:`Deepak Verma`,patientId:`OHC-0049`,date:`13 Apr 2026`,category:`ICU`,amount:18e3,status:`pending`},{id:`INV-2026-0050`,patientName:`Meera Krishnan`,patientId:`OHC-0050`,date:`10 Apr 2026`,category:`Maternity`,amount:14500,status:`paid`}],Br={paid:`success`,pending:`warning`,overdue:`destructive`},Vr=[{id:`STAFF-001`,name:`Dr. Kiran Reddy`,email:`kiran.reddy@ohc.in`,department:`Cardiology`,designation:`Senior Consultant`,joined:`Jan 2018`,experience:12,status:`active`},{id:`STAFF-002`,name:`Dr. Anita Menon`,email:`anita.menon@ohc.in`,department:`Pediatrics`,designation:`Consultant`,joined:`Mar 2020`,experience:8,status:`active`},{id:`STAFF-003`,name:`Dr. Suresh Pillai`,email:`suresh.pillai@ohc.in`,department:`Surgery`,designation:`Head of Department`,joined:`Jun 2015`,experience:15,status:`active`},{id:`STAFF-004`,name:`Nurse Rekha Thomas`,email:`rekha.thomas@ohc.in`,department:`ICU`,designation:`Senior Nurse`,joined:`Sep 2019`,experience:6,status:`inactive`},{id:`STAFF-005`,name:`Dr. Imran Sheikh`,email:`imran.sheikh@ohc.in`,department:`Orthopedics`,designation:`Consultant`,joined:`Nov 2017`,experience:10,status:`active`},{id:`STAFF-006`,name:`Nurse Preethi Sajan`,email:`preethi.sajan@ohc.in`,department:`General Medicine`,designation:`Staff Nurse`,joined:`Feb 2022`,experience:3,status:`active`},{id:`STAFF-007`,name:`Dr. Kavitha Nair`,email:`kavitha.nair@ohc.in`,department:`Neurology`,designation:`Senior Consultant`,joined:`Aug 2016`,experience:14,status:`active`},{id:`STAFF-008`,name:`Dr. Rajiv Kapoor`,email:`rajiv.kapoor@ohc.in`,department:`Radiology`,designation:`Consultant`,joined:`Dec 2021`,experience:5,status:`inactive`},{id:`STAFF-009`,name:`Nurse Sumathi Krishnan`,email:`sumathi.k@ohc.in`,department:`Maternity`,designation:`Senior Nurse`,joined:`Apr 2018`,experience:9,status:`active`},{id:`STAFF-010`,name:`Dr. Farhan Hossain`,email:`farhan.hossain@ohc.in`,department:`Oncology`,designation:`Consultant`,joined:`Jul 2020`,experience:7,status:`active`},{id:`STAFF-011`,name:`Dr. Pooja Iyer`,email:`pooja.iyer@ohc.in`,department:`Dermatology`,designation:`Consultant`,joined:`May 2023`,experience:4,status:`active`},{id:`STAFF-012`,name:`Nurse Arun Mathew`,email:`arun.mathew@ohc.in`,department:`Emergency`,designation:`Charge Nurse`,joined:`Oct 2019`,experience:6,status:`inactive`}],Hr=e=>e.split(` `).slice(0,2).map(e=>e[0]).join(``).toUpperCase(),Ur=e=>new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,maximumFractionDigits:0}).format(e),Wr=(e,t)=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{shape:`rounded`},K.createElement(F,{color:`primary`},Hr(e))),K.createElement(`div`,{className:`flex flex-col`},K.createElement(`span`,{className:`font-medium`},e),K.createElement(`span`,{className:`text-muted-foreground text-xs`},t))),Gr=[{id:`patient`,accessorKey:`patientName`,header:`Patient`,cell:({row:e})=>Wr(e.original.patientName,e.original.patientId)},{id:`medication`,accessorKey:`medication`,header:`Medication`,cell:({row:e})=>K.createElement(`div`,{className:`flex flex-col`},K.createElement(`span`,{className:`font-medium text-sm`},e.original.medication),K.createElement(`span`,{className:`text-muted-foreground text-xs`},`${e.original.dose} · ${e.original.route}`))},{accessorKey:`scheduledAt`,header:`Scheduled`,cell:({row:e})=>K.createElement(`span`,{className:`font-medium tabular-nums text-sm`},e.getValue(`scheduledAt`))},{accessorKey:`status`,header:`Status`,cell:({row:e})=>K.createElement(p,{variant:Rr[e.getValue(`status`)]},e.getValue(`status`))}],Kr=[{accessorKey:`id`,header:({column:e})=>K.createElement(w,{column:e,title:`Invoice #`}),cell:({row:e})=>K.createElement(`span`,{className:`font-mono text-sm font-medium`},e.getValue(`id`))},{id:`patient`,accessorKey:`patientName`,header:`Patient`,cell:({row:e})=>Wr(e.original.patientName,e.original.patientId)},{accessorKey:`date`,header:({column:e})=>K.createElement(w,{column:e,title:`Date`})},{accessorKey:`category`,header:`Category`,cell:({row:e})=>K.createElement(p,{variant:`neutral`},e.getValue(`category`))},{accessorKey:`amount`,header:({column:e})=>K.createElement(w,{column:e,title:`Amount`}),meta:{className:`text-right`},cell:({row:e})=>K.createElement(`div`,{className:`font-medium tabular-nums`},Ur(e.getValue(`amount`)))},{accessorKey:`status`,header:`Status`,cell:({row:e})=>K.createElement(p,{variant:Br[e.getValue(`status`)]},e.getValue(`status`))},{id:`actions`,enableHiding:!1,meta:{className:`w-0`},cell:({row:e})=>K.createElement(ce,{},K.createElement(C,{onClick:()=>navigator.clipboard.writeText(e.original.id)},`Copy invoice ID`),K.createElement(ee,{}),K.createElement(C,{},`View invoice`),K.createElement(C,{},`Download PDF`),K.createElement(ee,{}),K.createElement(C,{},`Mark as paid`),K.createElement(C,{className:`text-destructive`},`Void invoice`))}],qr=(e,t)=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{shape:`circle`},K.createElement(F,{color:`primary`},Hr(e))),K.createElement(`div`,{className:`flex flex-col`},K.createElement(`span`,{className:`font-medium`},e),K.createElement(`span`,{className:`text-muted-foreground text-xs`},t))),Jr=[{id:`staff`,accessorKey:`name`,enableSorting:!0,header:({column:e})=>K.createElement(w,{column:e,title:`Staff`}),cell:({row:e})=>qr(e.original.name,e.original.email)},{accessorKey:`department`,enableSorting:!0,header:({column:e})=>K.createElement(w,{column:e,title:`Department`})},{accessorKey:`designation`,enableSorting:!0,header:({column:e})=>K.createElement(w,{column:e,title:`Designation`})},{accessorKey:`experience`,enableSorting:!0,header:({column:e})=>K.createElement(w,{column:e,title:`Experience`}),cell:({row:e})=>K.createElement(`span`,{className:`tabular-nums`},`${e.getValue(`experience`)} yrs`)},{accessorKey:`status`,header:`Status`,cell:({row:e})=>K.createElement(p,{variant:e.getValue(`status`)===`active`?`success`:`neutral`},e.getValue(`status`))}],Yr=[{id:`1`,name:`Dr. Anika Sharma`,availability:`online`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`anika.sharma@ohc.in`,location:`India`,joined:`Mar, 2021`},{id:`2`,name:`Dr. Sarah Mitchell`,availability:`away`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,flag:`gb`,email:`sarah.mitchell@ohc.in`,location:`United Kingdom`,joined:`Jul, 2020`},{id:`3`,name:`Dr. David Okafor`,availability:`busy`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,flag:`ng`,email:`david.okafor@ohc.in`,location:`Nigeria`,joined:`Mar, 2019`},{id:`4`,name:`Nurse Elena Fischer`,availability:`offline`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,flag:`de`,email:`elena.fischer@ohc.in`,location:`Germany`,joined:`Jan, 2022`},{id:`5`,name:`Dr. Hiroshi Tanaka`,availability:`online`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,flag:`jp`,email:`hiroshi.tanaka@ohc.in`,location:`Japan`,joined:`May, 2023`},{id:`6`,name:`Dr. Ravi Menon`,availability:`away`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`ravi.menon@ohc.in`,location:`India`,joined:`Nov, 2018`},{id:`7`,name:`Dr. Carlos Rivera`,availability:`busy`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,flag:`es`,email:`carlos.rivera@ohc.in`,location:`Spain`,joined:`Jun, 2021`},{id:`8`,name:`Nurse Mei Lin Wong`,availability:`offline`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,flag:`sg`,email:`mei.wong@ohc.in`,location:`Singapore`,joined:`Oct, 2020`},{id:`9`,name:`Dr. Siddharth Patel`,availability:`online`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`siddharth.patel@ohc.in`,location:`India`,joined:`Sep, 2019`},{id:`10`,name:`Dr. Amara Diallo`,availability:`away`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,flag:`sn`,email:`amara.diallo@ohc.in`,location:`Senegal`,joined:`Feb, 2023`},{id:`11`,name:`Dr. Priya Krishnan`,availability:`busy`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`priya.krishnan@ohc.in`,location:`India`,joined:`Dec, 2022`},{id:`12`,name:`Nurse Rekha Thomas`,availability:`offline`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`rekha.thomas@ohc.in`,location:`India`,joined:`Mar, 2020`}],Xr={online:`bg-green-500`,away:`bg-yellow-500`,busy:`bg-orange-500`,offline:`bg-gray-400`},Zr=[{id:`select`,header:({table:e})=>K.createElement(b,{checked:e.getIsAllPageRowsSelected(),indeterminate:!e.getIsAllPageRowsSelected()&&e.getIsSomePageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":`Select all`}),cell:({row:e})=>K.createElement(b,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`}),enableSorting:!1,enableHiding:!1,size:20},{accessorKey:`name`,id:`name`,header:`Name`,size:200,enableSorting:!0,enableHiding:!1,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,e.original.name.split(` `).map(e=>e[0]).join(``)),K.createElement(be,{className:`size-1.5! p-0 `+(Xr[e.original.availability]||Xr.offline)})),K.createElement(`div`,{className:`space-y-px`},K.createElement(`div`,{className:`text-foreground font-medium`},e.original.name),K.createElement(`div`,{className:`text-muted-foreground`},e.original.email)))},{accessorKey:`location`,header:`Location`,size:180,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`img`,{src:`https://flagcdn.com/`+e.original.flag.toLowerCase()+`.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),K.createElement(`div`,{className:`text-foreground font-medium`},e.original.location))},{accessorKey:`joined`,header:`Joined`,size:120,cell:({row:e})=>K.createElement(`span`,{className:`font-medium`},e.original.joined)}],Qr=()=>K.createElement(m,{columns:Zr,data:Yr,filterColumn:`name`,filterPlaceholder:`Search practitioners...`}),$r=()=>K.createElement(m,{columns:Gr,data:Lr,filterColumn:`patientName`,filterPlaceholder:`Search by patient...`}),ei=()=>K.createElement(m,{columns:Kr,data:zr,filterColumn:`patientName`,filterPlaceholder:`Search by patient...`}),ti=()=>K.createElement(m,{columns:Jr,data:Vr,filterColumn:`name`,filterPlaceholder:`Search staff...`}),ni=()=>K.createElement(m,{columns:Jr,data:Vr,filterColumn:`name`,filterPlaceholder:`Search staff...`,movableColumns:!0}),ri=[{id:`1`,name:`Dr. Kiran Reddy`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,email:`kiran.reddy@ohc.in`,company:`Cardiology`,role:`Senior Consultant`,location:`Hyderabad`,status:`active`},{id:`2`,name:`Dr. Anita Menon`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,email:`anita.menon@ohc.in`,company:`Pediatrics`,role:`Consultant`,location:`Kochi`,status:`inactive`},{id:`3`,name:`Dr. Suresh Pillai`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,email:`suresh.pillai@ohc.in`,company:`General Surgery`,role:`Head of Department`,location:`Trivandrum`,status:`active`},{id:`4`,name:`Nurse Rekha Thomas`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,email:`rekha.thomas@ohc.in`,company:`ICU`,role:`Senior Nurse`,location:`Bangalore`,status:`inactive`},{id:`5`,name:`Dr. Imran Sheikh`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,email:`imran.sheikh@ohc.in`,company:`Orthopedics`,role:`Consultant`,location:`Mumbai`,status:`inactive`},{id:`6`,name:`Dr. Kavitha Nair`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,email:`kavitha.nair@ohc.in`,company:`Neurology`,role:`Senior Consultant`,location:`Chennai`,status:`active`},{id:`7`,name:`Dr. Rajiv Kapoor`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,email:`rajiv.kapoor@ohc.in`,company:`Radiology`,role:`Consultant`,location:`Delhi`,status:`inactive`},{id:`8`,name:`Nurse Sumathi K.`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,email:`sumathi.k@ohc.in`,company:`Maternity`,role:`Senior Nurse`,location:`Coimbatore`,status:`inactive`},{id:`9`,name:`Dr. Farhan Hossain`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,email:`farhan.hossain@ohc.in`,company:`Oncology`,role:`Consultant`,location:`Kolkata`,status:`inactive`},{id:`10`,name:`Dr. Pooja Iyer`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,email:`pooja.iyer@ohc.in`,company:`Dermatology`,role:`Consultant`,location:`Pune`,status:`inactive`},{id:`11`,name:`Nurse Arun Mathew`,avatar:`https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=96&h=96&dpr=2&q=80`,email:`arun.mathew@ohc.in`,company:`Emergency`,role:`Charge Nurse`,location:`Mangalore`,status:`active`}];function ii({header:e,transform:t,isDragging:n,noTransition:r,onRef:i}){let{attributes:a,listeners:o,setNodeRef:s}=Pr({id:e.id});return(0,Q.jsx)(B,{ref:e=>{s(e),i(e)},colSpan:e.colSpan,style:{opacity:n?.4:1,transform:t===0?void 0:`translateX(${t}px)`,position:t!==0||n?`relative`:void 0,zIndex:n?10:void 0,transition:n||r?`none`:`transform 100ms ease`},children:(0,Q.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,Q.jsx)(`button`,{...a,...o,className:`text-muted-foreground/50 hover:text-muted-foreground cursor-grab touch-none active:cursor-grabbing`,"aria-label":`Drag to reorder column`,children:(0,Q.jsx)(Se,{className:`size-3.5`})}),e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())]})})}var ai=[{id:`name`,accessorKey:`name`,header:`Name`,cell:({row:e})=>(0,Q.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,Q.jsxs)(U,{shape:`circle`,children:[(0,Q.jsx)(f,{src:e.original.avatar,alt:e.original.name}),(0,Q.jsx)(F,{children:Hr(e.original.name)})]}),(0,Q.jsx)(`span`,{className:`text-sm font-medium`,children:e.original.name})]})},{id:`email`,accessorKey:`email`,header:`Email`,cell:({row:e})=>(0,Q.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:e.original.email})},{id:`company`,accessorKey:`company`,header:`Department`,cell:({row:e})=>(0,Q.jsx)(`span`,{className:`text-sm font-medium`,children:e.original.company})},{id:`role`,accessorKey:`role`,header:`Designation`,cell:({row:e})=>(0,Q.jsx)(`span`,{className:`text-sm`,children:e.original.role})},{id:`status`,accessorKey:`status`,header:`Status`,cell:({row:e})=>e.original.status===`active`?K.createElement(p,{variant:`success`},`Approved`):K.createElement(p,{variant:`warning`},`Pending`)}];function oi(){let[e,t]=K.useState(ai.map(e=>e.id)),[n,r]=K.useState(null),[i,a]=K.useState(null),[o,s]=K.useState(0),[c,l]=K.useState(!1),u=K.useRef({}),f=K.useMemo(()=>{if(!n||!i)return{};let t=e.indexOf(n),r=e.indexOf(i);if(t===r)return{};let a=u.current[n]?.offsetWidth??0,o={};for(let i of e){if(i===n)continue;let s=e.indexOf(i);t<r&&s>t&&s<=r?o[i]=-a:t>r&&s<t&&s>=r&&(o[i]=a)}return o},[n,i,e]),p=dt(ut(ln),ut(rn)),m=e=>{let{active:n,over:i}=e;l(!0),n&&i&&n.id!==i.id&&t(e=>hr(e,e.indexOf(n.id),e.indexOf(i.id))),r(null),a(null),s(0),requestAnimationFrame(()=>l(!1))},h=G({data:ri,columns:ai,state:{columnOrder:e},onColumnOrderChange:t,getCoreRowModel:d()});return(0,Q.jsx)(or,{sensors:p,collisionDetection:_t,onDragStart:({active:e})=>{r(e.id),a(e.id),s(0)},onDragMove:({delta:e})=>s(e.x),onDragOver:({over:e})=>a(e?.id??null),onDragEnd:m,onDragCancel:()=>{l(!0),r(null),a(null),s(0),requestAnimationFrame(()=>l(!1))},children:(0,Q.jsx)(`div`,{className:`overflow-hidden rounded-md border [&_td:not(:last-child)]:border-r [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3 [&_th:not(:last-child)]:border-r`,children:(0,Q.jsxs)(R,{children:[(0,Q.jsx)(P,{children:h.getHeaderGroups().map(t=>(0,Q.jsx)(W,{children:(0,Q.jsx)(Er,{items:e,strategy:xr,children:t.headers.map(e=>(0,Q.jsx)(ii,{header:e,transform:n===e.id?o:f[e.id]??0,isDragging:n===e.id,noTransition:c,onRef:t=>{u.current[e.id]=t}},e.id))})},t.id))}),(0,Q.jsx)(z,{children:h.getRowModel().rows.map(e=>(0,Q.jsx)(W,{children:e.getVisibleCells().map(e=>{let t=n===e.column.id,r=t?o:f[e.column.id]??0;return(0,Q.jsx)(H,{style:r!==0||t?{transform:`translateX(${r}px)`,position:`relative`,zIndex:t?10:void 0,opacity:t?.6:1,transition:t||c?`none`:`transform 100ms ease`}:void 0,children:O(e.column.columnDef.cell,e.getContext())},e.id)})},e.id))})]})})})}var si=[{id:`name`,accessorKey:`name`,header:`Staff`,size:280,cell:({row:e})=>(0,Q.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,Q.jsxs)(U,{shape:`circle`,children:[(0,Q.jsx)(f,{src:e.original.avatar,alt:e.original.name}),(0,Q.jsx)(F,{children:Hr(e.original.name)})]}),(0,Q.jsxs)(`div`,{className:`flex flex-col`,children:[(0,Q.jsx)(`span`,{className:`text-sm font-medium`,children:e.original.name}),(0,Q.jsx)(`span`,{className:`text-muted-foreground text-xs`,children:e.original.email})]})]})},{id:`company`,accessorKey:`company`,header:`Company`,size:160,cell:({row:e})=>(0,Q.jsx)(`span`,{className:`text-sm font-medium`,children:e.original.company})},{id:`role`,accessorKey:`role`,header:`Occupation`,size:160,cell:({row:e})=>(0,Q.jsx)(`span`,{className:`text-sm`,children:e.original.role})},{id:`status`,accessorKey:`status`,header:`Status`,size:120,enableResizing:!1,cell:({row:e})=>e.original.status===`active`?(0,Q.jsx)(p,{variant:`success`,children:`Approved`}):(0,Q.jsx)(p,{variant:`warning`,children:`Pending`})}];function ci(){let e=G({data:ri,columns:si,columnResizeMode:`onChange`,getCoreRowModel:d()});return(0,Q.jsx)(`div`,{className:`overflow-hidden overflow-x-auto rounded-md border [&_td:not(:last-child)]:border-r [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3 [&_th:not(:last-child)]:border-r`,children:(0,Q.jsxs)(R,{style:{width:e.getTotalSize()},children:[(0,Q.jsx)(P,{children:e.getHeaderGroups().map(e=>(0,Q.jsx)(W,{children:e.headers.map(e=>(0,Q.jsxs)(B,{style:{width:e.getSize()},className:`relative overflow-hidden`,children:[e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext()),e.column.getCanResize()&&(0,Q.jsx)(`div`,{onMouseDown:e.getResizeHandler(),onTouchStart:e.getResizeHandler(),className:`absolute top-0 right-0 h-full w-1 cursor-col-resize touch-none transition-colors select-none ${e.column.getIsResizing()?`bg-primary`:`hover:bg-border bg-transparent`}`})]},e.id))},e.id))}),(0,Q.jsx)(z,{children:e.getRowModel().rows.map(e=>(0,Q.jsx)(W,{children:e.getVisibleCells().map(e=>(0,Q.jsx)(H,{style:{width:e.column.getSize()},children:O(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})})}var li=[{id:`1`,name:`Dr. Kiran Reddy`,availability:`online`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`kiran.reddy@ohc.in`,company:`Cardiology`,role:`Senior Consultant`,joined:`Jan, 2018`,location:`India`},{id:`2`,name:`Dr. Anita Menon`,availability:`away`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,status:`inactive`,flag:`in`,email:`anita.menon@ohc.in`,company:`Pediatrics`,role:`Consultant`,joined:`Mar, 2020`,location:`India`},{id:`3`,name:`Dr. Suresh Pillai`,availability:`busy`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`suresh.pillai@ohc.in`,company:`General Surgery`,role:`Head of Department`,joined:`Jun, 2015`,location:`India`},{id:`4`,name:`Nurse Rekha Thomas`,availability:`offline`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,status:`inactive`,flag:`in`,email:`rekha.thomas@ohc.in`,company:`ICU`,role:`Senior Nurse`,joined:`Sep, 2019`,location:`India`},{id:`5`,name:`Dr. Imran Sheikh`,availability:`online`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`imran.sheikh@ohc.in`,company:`Orthopedics`,role:`Consultant`,joined:`Nov, 2017`,location:`India`},{id:`6`,name:`Dr. Kavitha Nair`,availability:`away`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`kavitha.nair@ohc.in`,company:`Neurology`,role:`Senior Consultant`,joined:`Aug, 2016`,location:`India`},{id:`7`,name:`Dr. Rajiv Kapoor`,availability:`busy`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,status:`inactive`,flag:`in`,email:`rajiv.kapoor@ohc.in`,company:`Radiology`,role:`Consultant`,joined:`Dec, 2021`,location:`India`},{id:`8`,name:`Nurse Sumathi K.`,availability:`offline`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`sumathi.k@ohc.in`,company:`Maternity`,role:`Senior Nurse`,joined:`Apr, 2018`,location:`India`},{id:`9`,name:`Dr. Farhan Hossain`,availability:`online`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,status:`inactive`,flag:`in`,email:`farhan.hossain@ohc.in`,company:`Oncology`,role:`Consultant`,joined:`Jul, 2020`,location:`India`},{id:`10`,name:`Dr. Pooja Iyer`,availability:`away`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,status:`inactive`,flag:`in`,email:`pooja.iyer@ohc.in`,company:`Dermatology`,role:`Consultant`,joined:`May, 2023`,location:`India`},{id:`11`,name:`Nurse Arun Mathew`,availability:`busy`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`arun.mathew@ohc.in`,company:`Emergency`,role:`Charge Nurse`,joined:`Oct, 2019`,location:`India`},{id:`12`,name:`Dr. Preethi Sajan`,availability:`offline`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`preethi.sajan@ohc.in`,company:`General Medicine`,role:`Staff Physician`,joined:`Feb, 2022`,location:`India`}],ui=[{id:`name`,accessorKey:`name`,size:220,enableSorting:!0,enableHiding:!1,header:({column:e})=>(0,Q.jsx)(w,{column:e,title:`Name`}),cell:({row:e})=>(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsxs)(U,{className:`size-6`,shape:`circle`,children:[(0,Q.jsx)(f,{src:e.original.avatar,alt:e.original.name}),(0,Q.jsx)(F,{children:Hr(e.original.name)})]}),(0,Q.jsx)(`span`,{className:`text-foreground font-medium whitespace-nowrap`,children:e.original.name})]})},{id:`email`,accessorKey:`email`,size:220,enableSorting:!0,header:({column:e})=>(0,Q.jsx)(w,{column:e,title:`Email`}),cell:({row:e})=>(0,Q.jsx)(`span`,{className:`text-muted-foreground text-sm whitespace-nowrap`,children:e.original.email})},{id:`location`,accessorKey:`location`,size:180,enableSorting:!0,header:({column:e})=>(0,Q.jsx)(w,{column:e,title:`Location`}),cell:({row:e})=>(0,Q.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,Q.jsx)(`img`,{src:`https://flagcdn.com/${e.original.flag.toLowerCase()}.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),(0,Q.jsx)(`span`,{className:`text-foreground font-medium whitespace-nowrap`,children:e.original.location})]})},{id:`company`,accessorKey:`company`,size:160,enableSorting:!0,header:({column:e})=>(0,Q.jsx)(w,{column:e,title:`Department`}),cell:({row:e})=>(0,Q.jsx)(`span`,{className:`text-sm font-medium whitespace-nowrap`,children:e.original.company})},{id:`role`,accessorKey:`role`,size:180,enableSorting:!0,header:({column:e})=>(0,Q.jsx)(w,{column:e,title:`Designation`}),cell:({row:e})=>(0,Q.jsx)(`span`,{className:`text-sm whitespace-nowrap`,children:e.original.role})},{id:`joined`,accessorKey:`joined`,size:120,enableSorting:!0,header:({column:e})=>(0,Q.jsx)(w,{column:e,title:`Joined`}),cell:({row:e})=>(0,Q.jsx)(`span`,{className:`text-sm font-medium whitespace-nowrap`,children:e.original.joined})},{id:`status`,accessorKey:`status`,size:140,enableSorting:!1,header:({column:e})=>(0,Q.jsx)(w,{column:e,title:`Status`}),cell:({row:e})=>e.original.status===`active`?(0,Q.jsx)(p,{variant:`success`,children:`Approved`}):(0,Q.jsx)(p,{variant:`warning`,children:`Pending`})}],di=()=>K.createElement(m,{columns:ui,data:li,filterColumn:`name`,filterPlaceholder:`Search practitioners...`,pinnable:!0,initialPinning:{left:[`name`]}}),fi=[{id:`patient`,accessorKey:`name`,header:({column:e})=>K.createElement(w,{column:e,title:`Name`}),cell:({row:e})=>Wr(e.original.name,e.original.id)},{accessorKey:`ward`,header:`Ward`,cell:({row:e})=>K.createElement(`div`,{className:`flex flex-col`},K.createElement(`span`,{className:`font-medium text-sm`},e.original.ward),K.createElement(`span`,{className:`text-muted-foreground text-xs`},e.original.bed))},{accessorKey:`diagnosis`,header:`Diagnosis`},{accessorKey:`salary`,header:`Salary`,meta:{className:`text-right`},cell:({row:e})=>K.createElement(`span`,{className:`font-semibold tabular-nums`},Ur(zr.find(t=>t.patientId===e.original.id)?.amount??0))}],pi=()=>K.createElement(m,{columns:fi,data:$,filterColumn:`name`,filterPlaceholder:`Search patients...`,cellBorder:!0}),mi=[{id:`patient`,accessorKey:`name`,header:`Name`,cell:({row:e})=>Wr(e.original.name,e.original.id)},{accessorKey:`ward`,header:`Ward`,cell:({row:e})=>K.createElement(`div`,{className:`flex flex-col`},K.createElement(`span`,{className:`font-medium text-sm`},e.original.ward),K.createElement(`span`,{className:`text-muted-foreground text-xs`},e.original.bed))},{accessorKey:`diagnosis`,header:`Diagnosis`},{accessorKey:`age`,header:`Age`,cell:({row:e})=>K.createElement(`span`,{className:`tabular-nums text-sm`},`${e.original.age}y ${e.original.gender}`)},{accessorKey:`status`,header:`Status`,cell:({row:e})=>K.createElement(p,{variant:Ir[e.getValue(`status`)]},e.getValue(`status`))}],hi=()=>K.createElement(m,{columns:mi,data:$,filterColumn:`name`,filterPlaceholder:`Search patients...`,dense:!0}),gi=[{id:`1`,name:`Dr. Anika Sharma`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`anika.sharma@ohc.in`,location:`India`,joined:`Mar, 2021`},{id:`2`,name:`Dr. Sarah Mitchell`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,flag:`gb`,email:`sarah.mitchell@ohc.in`,location:`United Kingdom`,joined:`Jul, 2020`},{id:`3`,name:`Dr. David Okafor`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,flag:`ng`,email:`david.okafor@ohc.in`,location:`Nigeria`,joined:`Mar, 2019`},{id:`4`,name:`Nurse Elena Fischer`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,flag:`de`,email:`elena.fischer@ohc.in`,location:`Germany`,joined:`Jan, 2022`},{id:`5`,name:`Dr. Hiroshi Tanaka`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,flag:`jp`,email:`hiroshi.tanaka@ohc.in`,location:`Japan`,joined:`May, 2023`},{id:`6`,name:`Dr. Ravi Menon`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`ravi.menon@ohc.in`,location:`India`,joined:`Nov, 2018`},{id:`7`,name:`Dr. Carlos Rivera`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,flag:`es`,email:`carlos.rivera@ohc.in`,location:`Spain`,joined:`Jun, 2021`},{id:`8`,name:`Nurse Mei Lin Wong`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,flag:`sg`,email:`mei.wong@ohc.in`,location:`Singapore`,joined:`Oct, 2020`},{id:`9`,name:`Dr. Siddharth Patel`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`siddharth.patel@ohc.in`,location:`India`,joined:`Sep, 2019`},{id:`10`,name:`Dr. Amara Diallo`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,flag:`sn`,email:`amara.diallo@ohc.in`,location:`Senegal`,joined:`Feb, 2023`},{id:`11`,name:`Dr. Priya Krishnan`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`priya.krishnan@ohc.in`,location:`India`,joined:`Dec, 2022`},{id:`12`,name:`Nurse Rekha Thomas`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`rekha.thomas@ohc.in`,location:`India`,joined:`Mar, 2020`}],_i=[{accessorKey:`name`,header:`Name`,size:225,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-2`},K.createElement(U,{className:`size-6`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,e.original.name.split(` `).map(e=>e[0]).join(``))),K.createElement(`a`,{href:`#`,className:`text-foreground hover:text-primary font-medium whitespace-nowrap`},e.original.name))},{accessorKey:`email`,header:`Email`,size:200,cell:({row:e})=>K.createElement(`a`,{href:`mailto:`+e.original.email,className:`hover:text-primary hover:underline whitespace-nowrap`},e.original.email)},{accessorKey:`location`,header:`Location`,size:175,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`img`,{src:`https://flagcdn.com/`+e.original.flag.toLowerCase()+`.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),K.createElement(`span`,{className:`text-foreground font-medium whitespace-nowrap`},e.original.location))},{accessorKey:`joined`,header:`Joined`,size:120,cell:({row:e})=>K.createElement(`span`,{className:`font-medium whitespace-nowrap`},e.original.joined)}];function vi(){let[e,t]=K.useState({pageIndex:0,pageSize:5}),[n,r]=K.useState([{id:`name`,desc:!0}]),i=G({columns:_i,data:gi,state:{pagination:e,sorting:n},columnResizeMode:`onChange`,onPaginationChange:t,onSortingChange:r,getCoreRowModel:d(),getFilteredRowModel:N(),getPaginationRowModel:v(),getSortedRowModel:M()}),a=i.getFilteredRowModel().rows.length,o=a===0?0:e.pageIndex*e.pageSize+1,s=Math.min((e.pageIndex+1)*e.pageSize,a);return K.createElement(`div`,{className:`w-full space-y-2.5`},K.createElement(`div`,{className:`w-fit overflow-x-auto rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(R,{className:`w-auto`},K.createElement(P,null,i.getHeaderGroups().map(e=>K.createElement(W,{key:e.id},e.headers.map(e=>K.createElement(B,{key:e.id,style:{width:e.getSize()}},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,i.getRowModel().rows.map(e=>K.createElement(W,{key:e.id},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id,style:{width:e.column.getSize()}},O(e.column.columnDef.cell,e.getContext())))))))),K.createElement(`div`,{className:`flex items-center justify-between`},K.createElement(`p`,{className:`text-sm text-muted-foreground`},`${o} - ${s} of ${a}`),K.createElement(u,{className:`w-auto mx-0`},K.createElement(V,null,K.createElement(S,null,K.createElement(y,{onClick:e=>{e.preventDefault(),i.previousPage()},"aria-disabled":!i.getCanPreviousPage(),className:i.getCanPreviousPage()?void 0:`pointer-events-none opacity-50`})),Array.from({length:i.getPageCount()},(e,t)=>K.createElement(S,{key:t},K.createElement(T,{isActive:t===i.getState().pagination.pageIndex,onClick:e=>{e.preventDefault(),i.setPageIndex(t)}},t+1))),K.createElement(S,null,K.createElement(_,{onClick:e=>{e.preventDefault(),i.nextPage()},"aria-disabled":!i.getCanNextPage(),className:i.getCanNextPage()?void 0:`pointer-events-none opacity-50`}))))))}function yi(){let[e,t]=K.useState({pageIndex:0,pageSize:5}),[n,r]=K.useState([{id:`name`,desc:!0}]),[i,a]=K.useState({}),o=G({columns:[{id:`select`,header:({table:e})=>K.createElement(b,{checked:e.getIsAllPageRowsSelected(),indeterminate:!e.getIsAllPageRowsSelected()&&e.getIsSomePageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":`Select all`}),cell:({row:e})=>K.createElement(b,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`}),enableSorting:!1,size:20},{accessorKey:`name`,id:`name`,header:`Name`,size:200,enableSorting:!0,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,e.original.name.split(` `).map(e=>e[0]).join(``)),K.createElement(be,{className:`size-1.5! p-0 `+(Xr[e.original.availability]||Xr.offline)})),K.createElement(`div`,{className:`space-y-px`},K.createElement(`div`,{className:`text-foreground font-medium`},e.original.name),K.createElement(`div`,{className:`text-muted-foreground`},e.original.email)))},{accessorKey:`location`,header:`Location`,size:180,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`img`,{src:`https://flagcdn.com/`+e.original.flag.toLowerCase()+`.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),K.createElement(`div`,{className:`text-foreground font-medium`},e.original.location))},{accessorKey:`joined`,header:`Joined`,size:120,cell:({row:e})=>K.createElement(`span`,{className:`font-medium`},e.original.joined)}],data:Yr,getRowId:e=>e.id,state:{pagination:e,sorting:n,rowSelection:i},enableRowSelection:!0,onRowSelectionChange:a,onPaginationChange:t,onSortingChange:r,getCoreRowModel:d(),getFilteredRowModel:N(),getPaginationRowModel:v(),getSortedRowModel:M()}),s=o.getFilteredRowModel().rows.length,c=s===0?0:e.pageIndex*e.pageSize+1,l=Math.min((e.pageIndex+1)*e.pageSize,s);return K.createElement(`div`,{className:`w-full space-y-2.5`},K.createElement(`div`,{className:`overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(R,null,K.createElement(P,null,o.getHeaderGroups().map(e=>K.createElement(W,{key:e.id},e.headers.map(e=>K.createElement(B,{key:e.id,style:{width:e.getSize()}},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,o.getRowModel().rows.map(e=>K.createElement(W,{key:e.id,"data-state":e.getIsSelected()?`selected`:void 0},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id,style:{width:e.column.getSize()}},O(e.column.columnDef.cell,e.getContext())))))))),K.createElement(`div`,{className:`flex items-center justify-between`},K.createElement(`p`,{className:`text-sm text-muted-foreground`},`${c} - ${l} of ${s}`),K.createElement(u,{className:`w-auto mx-0`},K.createElement(V,null,K.createElement(S,null,K.createElement(y,{onClick:e=>{e.preventDefault(),o.previousPage()},"aria-disabled":!o.getCanPreviousPage(),className:o.getCanPreviousPage()?void 0:`pointer-events-none opacity-50`})),Array.from({length:o.getPageCount()},(e,t)=>K.createElement(S,{key:t},K.createElement(T,{isActive:t===o.getState().pagination.pageIndex,onClick:e=>{e.preventDefault(),o.setPageIndex(t)}},t+1))),K.createElement(S,null,K.createElement(_,{onClick:e=>{e.preventDefault(),o.nextPage()},"aria-disabled":!o.getCanNextPage(),className:o.getCanNextPage()?void 0:`pointer-events-none opacity-50`}))))))}var bi=[{...$[0],notes:`BP well-controlled on current regime. Review amlodipine dose at next visit. Low-sodium diet advised.`},{...$[1],notes:`Post-caesarean recovery progressing normally. Wound site clean. Mobilising with support. Breastfeeding established.`},{...$[2],notes:`Cardiac monitoring in progress. Troponin trending down. Echocardiogram scheduled for tomorrow. Family counselled.`},{...$[3],notes:`Post-appendicectomy Day 2. Bowel sounds present. IV antibiotics continuing. Drain output minimal.`},{...$[4],notes:`HbA1c 8.4% on admission. Metformin dose adjusted. Dietician referral placed. Foot exam normal.`},{...$[5],notes:`COPD exacerbation responding to nebulisation. Sputum sent for culture. SpO₂ stable at 94% on 2L O₂.`},{...$[6],notes:`Laparoscopic cholecystectomy completed without complications. Tolerating clear fluids. Discharge planned for Day 3.`},{...$[7],notes:`Typhoid confirmed on Widal test. Ceftriaxone IV initiated. Fever settling. Oral intake improving gradually.`},{...$[8],notes:`Large ischaemic stroke confirmed on MRI. Thrombolysis given within window. Physio and SALT assessment ongoing.`},{...$[9],notes:`Normal vaginal delivery at 39 weeks. Mother and baby well. Discharged on day 2 post-partum.`},{...$[10],notes:`Total hip replacement Day 3. Physio commenced. DVT prophylaxis in place. Wound dry and intact.`},{...$[11],notes:`UTI responding to oral ciprofloxacin. Urine culture sensitivity confirmed. Symptoms improving.`}],xi=[{id:`expand`,enableHiding:!1,meta:{className:`w-0`},header:()=>null,cell:({row:e})=>K.createElement(c,{variant:`ghost`,size:`icon`,className:`size-7 text-muted-foreground`,onClick:e.getToggleExpandedHandler(),"aria-label":e.getIsExpanded()?`Collapse row`:`Expand row`},e.getIsExpanded()?K.createElement(ye,{className:`size-4`}):K.createElement(k,{className:`size-4`}))},{id:`patient`,accessorKey:`name`,header:`Patient`,cell:({row:e})=>Wr(e.original.name,e.original.id)},{id:`location`,header:`Ward / Bed`,cell:({row:e})=>K.createElement(`div`,{className:`flex flex-col`},K.createElement(`span`,{className:`font-medium text-sm`},e.original.ward),K.createElement(`span`,{className:`text-muted-foreground text-xs`},e.original.bed))},{accessorKey:`diagnosis`,header:`Diagnosis`},{accessorKey:`status`,header:`Status`,cell:({row:e})=>K.createElement(p,{variant:Ir[e.getValue(`status`)]},e.getValue(`status`))}],Si=e=>K.createElement(`div`,{className:`flex items-start gap-2 border-t bg-muted/30 px-4 py-3`},K.createElement(`span`,{className:`mt-0.5 shrink-0 text-xs font-medium text-muted-foreground uppercase tracking-wide`},`Clinical Notes:`),K.createElement(`p`,{className:`text-sm text-foreground`},e.original.notes)),Ci=()=>K.createElement(m,{columns:xi,data:bi,filterColumn:`name`,filterPlaceholder:`Search patients...`,renderExpandedRow:Si}),wi={normal:`success`,abnormal:`warning`,critical:`destructive`},Ti=[{id:`ENC-001`,patientId:`OHC-0041`,patientName:`Ravi Kumar`,ward:`General`,diagnosis:`Hypertension`,admittedOn:`10 Apr 2026`,encounterStatus:`stable`,investigations:[{id:`E1-I1`,test:`Complete Blood Count`,category:`Haematology`,result:`Normal`,referenceRange:`Varies`,status:`normal`},{id:`E1-I2`,test:`Serum Creatinine`,category:`Biochemistry`,result:`98 µmol/L`,referenceRange:`62–115 µmol/L`,status:`normal`},{id:`E1-I3`,test:`Fasting Blood Glucose`,category:`Biochemistry`,result:`6.2 mmol/L`,referenceRange:`3.9–6.1 mmol/L`,status:`abnormal`}]},{id:`ENC-002`,patientId:`OHC-0043`,patientName:`Arjun Mehta`,ward:`ICU`,diagnosis:`Cardiac arrest`,admittedOn:`13 Apr 2026`,encounterStatus:`critical`,investigations:[{id:`E2-I1`,test:`Troponin I`,category:`Biochemistry`,result:`4.8 µg/L`,referenceRange:`< 0.04 µg/L`,status:`critical`},{id:`E2-I2`,test:`ECG`,category:`Imaging`,result:`ST elevation V1–V4`,referenceRange:`Normal sinus rhythm`,status:`critical`},{id:`E2-I3`,test:`CK-MB`,category:`Biochemistry`,result:`62 U/L`,referenceRange:`< 25 U/L`,status:`critical`},{id:`E2-I4`,test:`INR`,category:`Haematology`,result:`1.1`,referenceRange:`0.8–1.2`,status:`normal`},{id:`E2-I5`,test:`Echocardiogram`,category:`Imaging`,result:`EF 35%`,referenceRange:`EF ≥ 55%`,status:`abnormal`}]},{id:`ENC-003`,patientId:`OHC-0044`,patientName:`Sunita Rao`,ward:`Surgical`,diagnosis:`Appendicitis`,admittedOn:`14 Apr 2026`,encounterStatus:`admitted`,investigations:[{id:`E3-I1`,test:`WBC Count`,category:`Haematology`,result:`14.2 × 10⁹/L`,referenceRange:`4–11 × 10⁹/L`,status:`abnormal`},{id:`E3-I2`,test:`C-Reactive Protein`,category:`Biochemistry`,result:`88 mg/L`,referenceRange:`< 10 mg/L`,status:`critical`},{id:`E3-I3`,test:`Ultrasound Abdomen`,category:`Imaging`,result:`Appendix 9mm`,referenceRange:`< 6 mm`,status:`abnormal`},{id:`E3-I4`,test:`Urine Culture`,category:`Microbiology`,result:`No growth`,referenceRange:`No growth`,status:`normal`}]},{id:`ENC-004`,patientId:`OHC-0045`,patientName:`Mohammed Ali`,ward:`General`,diagnosis:`Diabetes mellitus`,admittedOn:`09 Apr 2026`,encounterStatus:`stable`,investigations:[{id:`E4-I1`,test:`HbA1c`,category:`Biochemistry`,result:`8.4%`,referenceRange:`< 6.5%`,status:`abnormal`},{id:`E4-I2`,test:`Fasting Blood Glucose`,category:`Biochemistry`,result:`9.8 mmol/L`,referenceRange:`3.9–6.1 mmol/L`,status:`critical`},{id:`E4-I3`,test:`Urine Microalbumin`,category:`Biochemistry`,result:`28 mg/L`,referenceRange:`< 20 mg/L`,status:`abnormal`}]},{id:`ENC-005`,patientId:`OHC-0049`,patientName:`Deepak Verma`,ward:`ICU`,diagnosis:`Stroke`,admittedOn:`13 Apr 2026`,encounterStatus:`critical`,investigations:[{id:`E5-I1`,test:`CT Brain (plain)`,category:`Imaging`,result:`Ischaemic L MCA`,referenceRange:`Normal`,status:`critical`},{id:`E5-I2`,test:`INR`,category:`Haematology`,result:`1.0`,referenceRange:`0.8–1.2`,status:`normal`},{id:`E5-I3`,test:`Serum Glucose`,category:`Biochemistry`,result:`7.2 mmol/L`,referenceRange:`3.9–7.8 mmol/L`,status:`normal`},{id:`E5-I4`,test:`Blood Culture`,category:`Microbiology`,result:`No growth`,referenceRange:`No growth`,status:`normal`}]},{id:`ENC-006`,patientId:`OHC-0051`,patientName:`Rajesh Nambiar`,ward:`Orthopedic`,diagnosis:`Hip replacement`,admittedOn:`14 Apr 2026`,encounterStatus:`admitted`,investigations:[{id:`E6-I1`,test:`X-Ray Hip (AP)`,category:`Imaging`,result:`Prosthesis in situ`,referenceRange:`Post-op normal`,status:`normal`},{id:`E6-I2`,test:`Haemoglobin`,category:`Haematology`,result:`10.2 g/dL`,referenceRange:`13–17 g/dL`,status:`abnormal`},{id:`E6-I3`,test:`D-Dimer`,category:`Haematology`,result:`0.6 mg/L FEU`,referenceRange:`< 0.5 mg/L FEU`,status:`abnormal`}]}],Ei=[{accessorKey:`test`,header:`Test`,cell:({row:e})=>K.createElement(`span`,{className:`font-medium text-sm`},e.getValue(`test`))},{accessorKey:`category`,header:`Category`,cell:({row:e})=>K.createElement(p,{variant:`neutral`},e.getValue(`category`))},{accessorKey:`result`,header:`Result`,cell:({row:e})=>K.createElement(`span`,{className:`tabular-nums text-sm font-medium`},e.getValue(`result`))},{accessorKey:`referenceRange`,header:`Reference Range`,cell:({row:e})=>K.createElement(`span`,{className:`text-muted-foreground text-sm`},e.getValue(`referenceRange`))},{accessorKey:`status`,header:`Status`,cell:({row:e})=>K.createElement(p,{variant:wi[e.getValue(`status`)]},e.getValue(`status`))}],Di=({investigations:e})=>K.createElement(m,{columns:Ei,data:e,hideToolbar:!0}),Oi=[{id:`expand`,enableHiding:!1,meta:{className:`w-0`},header:()=>null,cell:({row:e})=>K.createElement(c,{variant:`ghost`,size:`icon`,className:`size-7 text-muted-foreground`,onClick:e.getToggleExpandedHandler(),"aria-label":e.getIsExpanded()?`Collapse`:`Expand`},e.getIsExpanded()?K.createElement(ye,{className:`size-4`}):K.createElement(k,{className:`size-4`}))},{id:`patient`,accessorKey:`patientName`,header:`Patient`,cell:({row:e})=>Wr(e.original.patientName,e.original.patientId)},{accessorKey:`ward`,header:`Ward`},{accessorKey:`diagnosis`,header:`Diagnosis`},{accessorKey:`admittedOn`,header:`Admitted`,cell:({row:e})=>K.createElement(`span`,{className:`tabular-nums text-sm`},e.getValue(`admittedOn`))},{id:`investigations`,header:`Tests`,cell:({row:e})=>K.createElement(p,{variant:`neutral`},`${e.original.investigations.length} tests`)},{accessorKey:`encounterStatus`,header:`Status`,cell:({row:e})=>K.createElement(p,{variant:Ir[e.getValue(`encounterStatus`)]},e.getValue(`encounterStatus`))}],ki=e=>K.createElement(`div`,{className:`border-t bg-muted/20 px-4 py-4`},K.createElement(`p`,{className:`mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground`},`Investigations — ${e.original.patientName}`),K.createElement(Di,{investigations:e.original.investigations})),Ai=()=>K.createElement(m,{columns:Oi,data:Ti,filterColumn:`patientName`,filterPlaceholder:`Search patients...`,renderExpandedRow:ki}),ji=[{id:`patient`,accessorKey:`patientName`,header:`Patient`,footer:()=>K.createElement(`span`,{className:`font-semibold`},`Total`),cell:({row:e})=>Wr(e.original.patientName,e.original.patientId)},{accessorKey:`date`,header:`Date`,footer:()=>null},{accessorKey:`category`,header:`Category`,footer:()=>null,cell:({row:e})=>K.createElement(p,{variant:`neutral`},e.getValue(`category`))},{accessorKey:`amount`,header:({column:e})=>K.createElement(w,{column:e,title:`Amount`}),footer:({table:e})=>{let t=e.getFilteredRowModel().rows.reduce((e,t)=>e+t.getValue(`amount`),0);return K.createElement(`span`,{className:`font-semibold tabular-nums`},Ur(t))},meta:{className:`text-right`},cell:({row:e})=>K.createElement(`div`,{className:`font-medium tabular-nums`},Ur(e.getValue(`amount`)))},{accessorKey:`status`,header:`Status`,footer:()=>null,cell:({row:e})=>K.createElement(p,{variant:Br[e.getValue(`status`)]},e.getValue(`status`))}],Mi=()=>K.createElement(m,{columns:ji,data:zr,filterColumn:`patientName`,filterPlaceholder:`Search by patient...`}),Ni=[{id:`patient`,accessorKey:`name`,header:({column:e})=>K.createElement(w,{column:e,title:`Patient`,icon:K.createElement(o)}),cell:({row:e})=>Wr(e.original.name,e.original.id)},{accessorKey:`ward`,header:({column:e})=>K.createElement(w,{column:e,title:`Ward / Bed`,icon:K.createElement(de)}),cell:({row:e})=>K.createElement(`div`,{className:`flex flex-col`},K.createElement(`span`,{className:`font-medium text-sm`},e.original.ward),K.createElement(`span`,{className:`text-muted-foreground text-xs`},e.original.bed))},{accessorKey:`diagnosis`,header:({column:e})=>K.createElement(w,{column:e,title:`Diagnosis`,icon:K.createElement(ne)})},{accessorKey:`status`,header:({column:e})=>K.createElement(w,{column:e,title:`Status`,icon:K.createElement(Ce)}),cell:({row:e})=>K.createElement(p,{variant:Ir[e.getValue(`status`)]},e.getValue(`status`))}],Pi=()=>K.createElement(m,{columns:Ni,data:$,filterColumn:`name`,filterPlaceholder:`Search patients...`}),Fi=[{id:`pin`,enableHiding:!1,meta:{className:`w-0`},header:()=>null,cell:({row:e})=>{let t=e.getIsPinned()===`top`;return K.createElement(c,{variant:`ghost`,size:`icon`,className:`size-7 ${t?`text-primary`:`text-muted-foreground`}`,onClick:()=>e.pin(!t&&`top`),"aria-label":t?`Unpin row`:`Pin row to top`},t?K.createElement(re,{className:`size-4`}):K.createElement(ie,{className:`size-4`}))}},{id:`patient`,accessorKey:`name`,header:`Patient`,cell:({row:e})=>Wr(e.original.name,e.original.id)},{accessorKey:`ward`,header:`Ward`},{accessorKey:`diagnosis`,header:`Diagnosis`},{accessorKey:`status`,header:`Status`,cell:({row:e})=>K.createElement(p,{variant:Ir[e.getValue(`status`)]},e.getValue(`status`))}];function Ii(){let[e,t]=K.useState({top:[],bottom:[]}),[n,r]=K.useState(``),i=G({data:$,columns:Fi,state:{rowPinning:e,globalFilter:n},onRowPinningChange:t,onGlobalFilterChange:r,enableRowPinning:!0,keepPinnedRows:!0,getCoreRowModel:d(),getFilteredRowModel:N(),getSortedRowModel:M()}),a=i.getTopRows(),o=i.getCenterRows();return K.createElement(`div`,{className:`w-full space-y-0`},K.createElement(`div`,{className:`flex items-center gap-2 py-4`},K.createElement(`input`,{placeholder:`Search patients...`,value:n,onChange:e=>r(e.target.value),className:`max-w-sm h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`})),K.createElement(`div`,{className:`overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(R,null,K.createElement(P,null,i.getHeaderGroups().map(e=>K.createElement(W,{key:e.id},e.headers.map(e=>K.createElement(B,{key:e.id,className:e.column.columnDef.meta?.className},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,a.length>0&&a.map(e=>K.createElement(W,{key:e.id,className:`bg-primary/5 font-medium sticky top-0 z-10`},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id,className:e.column.columnDef.meta?.className},O(e.column.columnDef.cell,e.getContext()))))),o.length>0?o.map(e=>K.createElement(W,{key:e.id},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id,className:e.column.columnDef.meta?.className},O(e.column.columnDef.cell,e.getContext()))))):K.createElement(W,null,K.createElement(H,{colSpan:Fi.length,className:`h-24 text-center`},`No results.`))))))}var Li=[{id:`1`,name:`Dr. Anika Sharma`,availability:`online`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`anika.sharma@ohc.in`,location:`India`},{id:`2`,name:`Dr. Sarah Mitchell`,availability:`away`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,status:`inactive`,flag:`gb`,email:`sarah.mitchell@ohc.in`,location:`United Kingdom`},{id:`3`,name:`Dr. David Okafor`,availability:`busy`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`ng`,email:`david.okafor@ohc.in`,location:`Nigeria`},{id:`4`,name:`Nurse Elena Fischer`,availability:`offline`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,status:`inactive`,flag:`de`,email:`elena.fischer@ohc.in`,location:`Germany`},{id:`5`,name:`Dr. Hiroshi Tanaka`,availability:`online`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`jp`,email:`hiroshi.tanaka@ohc.in`,location:`Japan`},{id:`6`,name:`Dr. Ravi Menon`,availability:`away`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`ravi.menon@ohc.in`,location:`India`},{id:`7`,name:`Dr. Carlos Rivera`,availability:`busy`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,status:`inactive`,flag:`es`,email:`carlos.rivera@ohc.in`,location:`Spain`},{id:`8`,name:`Nurse Mei Lin Wong`,availability:`offline`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`sg`,email:`mei.wong@ohc.in`,location:`Singapore`},{id:`9`,name:`Dr. Siddharth Patel`,availability:`online`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`siddharth.patel@ohc.in`,location:`India`},{id:`10`,name:`Dr. Amara Diallo`,availability:`away`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,status:`inactive`,flag:`sn`,email:`amara.diallo@ohc.in`,location:`Senegal`},{id:`11`,name:`Dr. Priya Krishnan`,availability:`busy`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`priya.krishnan@ohc.in`,location:`India`},{id:`12`,name:`Nurse Rekha Thomas`,availability:`offline`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,status:`active`,flag:`in`,email:`rekha.thomas@ohc.in`,location:`India`}],Ri={online:`bg-green-500`,away:`bg-yellow-500`,busy:`bg-orange-500`,offline:`bg-gray-400`},zi=[{accessorKey:`name`,header:`Name`,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,e.original.name.split(` `).map(e=>e[0]).join(``)),K.createElement(be,{className:`size-1.5! p-0 ${Ri[e.original.availability]||`bg-gray-400`}`})),K.createElement(`div`,{className:`space-y-px`},K.createElement(`div`,{className:`text-foreground font-medium`},e.original.name),K.createElement(`div`,{className:`text-muted-foreground text-xs`},e.original.email))),size:225},{accessorKey:`location`,header:`Location`,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`img`,{src:`https://flagcdn.com/`+e.original.flag.toLowerCase()+`.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),K.createElement(`span`,{className:`text-foreground font-medium`},e.original.location)),size:160},{accessorKey:`status`,header:`Status`,cell:({row:e})=>e.original.status===`active`?K.createElement(p,{variant:`success`},`Active`):K.createElement(p,{variant:`warning`},`Pending`),size:100}];function Bi(){let[e,t]=K.useState({pageIndex:0,pageSize:5}),[n,r]=K.useState([{id:`name`,desc:!0}]),i=G({columns:zi,data:Li,state:{pagination:e,sorting:n},onPaginationChange:t,onSortingChange:r,getCoreRowModel:d(),getFilteredRowModel:N(),getPaginationRowModel:v(),getSortedRowModel:M()}),a=i.getFilteredRowModel().rows.length,o=a===0?0:e.pageIndex*e.pageSize+1,s=Math.min((e.pageIndex+1)*e.pageSize,a);return K.createElement(`div`,{className:`w-full space-y-2.5`},K.createElement(`div`,{className:`overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(R,null,K.createElement(P,null,i.getHeaderGroups().map(e=>K.createElement(W,{key:e.id,className:`border-none hover:bg-transparent`},e.headers.map(e=>K.createElement(B,{key:e.id},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,i.getRowModel().rows.map(e=>K.createElement(W,{key:e.id,className:`border-none`},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id},O(e.column.columnDef.cell,e.getContext())))))))),K.createElement(`div`,{className:`flex items-center justify-between`},K.createElement(`p`,{className:`text-sm text-muted-foreground`},`${o} - ${s} of ${a}`),K.createElement(u,{className:`w-auto mx-0`},K.createElement(V,null,K.createElement(S,null,K.createElement(y,{onClick:e=>{e.preventDefault(),i.previousPage()},"aria-disabled":!i.getCanPreviousPage(),className:i.getCanPreviousPage()?void 0:`pointer-events-none opacity-50`})),Array.from({length:i.getPageCount()},(e,t)=>K.createElement(S,{key:t},K.createElement(T,{isActive:t===i.getState().pagination.pageIndex,onClick:e=>{e.preventDefault(),i.setPageIndex(t)}},t+1))),K.createElement(S,null,K.createElement(_,{onClick:e=>{e.preventDefault(),i.nextPage()},"aria-disabled":!i.getCanNextPage(),className:i.getCanNextPage()?void 0:`pointer-events-none opacity-50`}))))))}var Vi=[{id:`1`,name:`Dr. Anika Sharma`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`anika.sharma@ohc.in`,location:`India`,balance:5143.03},{id:`2`,name:`Dr. Sarah Mitchell`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,flag:`gb`,email:`sarah.mitchell@ohc.in`,location:`United Kingdom`,balance:4321.87},{id:`3`,name:`Dr. David Okafor`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,flag:`ng`,email:`david.okafor@ohc.in`,location:`Nigeria`,balance:7654.98},{id:`4`,name:`Nurse Elena Fischer`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,flag:`de`,email:`elena.fischer@ohc.in`,location:`Germany`,balance:3456.45},{id:`5`,name:`Dr. Hiroshi Tanaka`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,flag:`jp`,email:`hiroshi.tanaka@ohc.in`,location:`Japan`,balance:9876.54},{id:`6`,name:`Dr. Ravi Menon`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`ravi.menon@ohc.in`,location:`India`,balance:6214.22},{id:`7`,name:`Dr. Carlos Rivera`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,flag:`es`,email:`carlos.rivera@ohc.in`,location:`Spain`,balance:5321.77},{id:`8`,name:`Nurse Mei Lin Wong`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,flag:`sg`,email:`mei.wong@ohc.in`,location:`Singapore`,balance:8452.39},{id:`9`,name:`Dr. Siddharth Patel`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`siddharth.patel@ohc.in`,location:`India`,balance:7345.1},{id:`10`,name:`Dr. Amara Diallo`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,flag:`sn`,email:`amara.diallo@ohc.in`,location:`Senegal`,balance:5214.88},{id:`11`,name:`Dr. Priya Krishnan`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`priya.krishnan@ohc.in`,location:`India`,balance:9421.5},{id:`12`,name:`Nurse Rekha Thomas`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,flag:`in`,email:`rekha.thomas@ohc.in`,location:`India`,balance:4521.67}],Hi=[{accessorKey:`name`,header:`Name`,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-2`},K.createElement(U,{className:`size-6`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,e.original.name.split(` `).map(e=>e[0]).join(``))),K.createElement(`span`,{className:`text-foreground font-medium`},e.original.name)),size:175},{accessorKey:`email`,header:`Email`,cell:({row:e})=>K.createElement(`a`,{href:`mailto:`+e.original.email,className:`hover:text-primary hover:underline`},e.original.email),size:180},{accessorKey:`location`,header:`Location`,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`img`,{src:`https://flagcdn.com/`+e.original.flag.toLowerCase()+`.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),K.createElement(`span`,{className:`text-foreground font-medium`},e.original.location)),size:170},{accessorKey:`balance`,header:()=>K.createElement(`div`,{className:`text-right`},`Balance ($)`),cell:({row:e})=>K.createElement(`span`,{className:`font-semibold`},`$`+e.original.balance.toFixed(2)),meta:{className:`text-right`},size:120}];function Ui(){let[e,t]=K.useState({pageIndex:0,pageSize:5}),[n,r]=K.useState([{id:`name`,desc:!0}]),i=G({columns:Hi,data:Vi,state:{pagination:e,sorting:n},onPaginationChange:t,onSortingChange:r,getCoreRowModel:d(),getFilteredRowModel:N(),getPaginationRowModel:v(),getSortedRowModel:M()}),a=i.getFilteredRowModel().rows.length,o=a===0?0:e.pageIndex*e.pageSize+1,s=Math.min((e.pageIndex+1)*e.pageSize,a);return K.createElement(`div`,{className:`w-full space-y-2.5`},K.createElement(`div`,{className:`overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(R,null,K.createElement(P,null,i.getHeaderGroups().map(e=>K.createElement(W,{key:e.id},e.headers.map(e=>K.createElement(B,{key:e.id,className:e.column.columnDef.meta?.className},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,i.getRowModel().rows.map(e=>K.createElement(W,{key:e.id,className:`even:bg-muted/50`},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id,className:e.column.columnDef.meta?.className},O(e.column.columnDef.cell,e.getContext())))))))),K.createElement(`div`,{className:`flex items-center justify-between`},K.createElement(`p`,{className:`text-sm text-muted-foreground`},`${o} - ${s} of ${a}`),K.createElement(u,{className:`w-auto mx-0`},K.createElement(V,null,K.createElement(S,null,K.createElement(y,{onClick:e=>{e.preventDefault(),i.previousPage()},"aria-disabled":!i.getCanPreviousPage(),className:i.getCanPreviousPage()?void 0:`pointer-events-none opacity-50`})),Array.from({length:i.getPageCount()},(e,t)=>K.createElement(S,{key:t},K.createElement(T,{isActive:t===i.getState().pagination.pageIndex,onClick:e=>{e.preventDefault(),i.setPageIndex(t)}},t+1))),K.createElement(S,null,K.createElement(_,{onClick:e=>{e.preventDefault(),i.nextPage()},"aria-disabled":!i.getCanNextPage(),className:i.getCanNextPage()?void 0:`pointer-events-none opacity-50`}))))))}var Wi=[{id:`patient`,accessorKey:`name`,enableSorting:!0,header:({column:e})=>K.createElement(w,{column:e,title:`Patient`}),cell:({row:e})=>Wr(e.original.name,e.original.id)},{id:`location`,header:`Ward / Bed`,cell:({row:e})=>K.createElement(`div`,{className:`flex flex-col`},K.createElement(`span`,{className:`font-medium text-sm`},e.original.ward),K.createElement(`span`,{className:`text-muted-foreground text-xs`},e.original.bed))},{accessorKey:`diagnosis`,header:`Diagnosis`},{accessorKey:`status`,header:`Status`,cell:({row:e})=>K.createElement(p,{variant:Ir[e.getValue(`status`)]},e.getValue(`status`))}];function Gi(){let[e,t]=K.useState([]),n=G({data:$,columns:Wi,state:{sorting:e},onSortingChange:t,getCoreRowModel:d(),getSortedRowModel:M()});return K.createElement(l,{className:`h-80 overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(`table`,{className:`w-full caption-bottom text-sm`},K.createElement(P,{className:`sticky top-0 z-10 bg-soft-background shadow-[0_0.5px_0_0_var(--border)]`},n.getHeaderGroups().map(e=>K.createElement(W,{key:e.id,className:`border-b-0`},e.headers.map(e=>K.createElement(B,{key:e.id},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,n.getRowModel().rows.map(e=>K.createElement(W,{key:e.id},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id},O(e.column.columnDef.cell,e.getContext()))))))))}var Ki=[{accessorKey:`name`,id:`name`,header:({column:e})=>K.createElement(w,{column:e,title:`Practitioner`}),size:480,enableSorting:!0,enableHiding:!1,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,e.original.name.split(` `).map(e=>e[0]).join(``))),K.createElement(`div`,{className:`space-y-px`},K.createElement(`div`,{className:`text-foreground font-medium`},e.original.name),K.createElement(`div`,{className:`text-muted-foreground`},e.original.email)))},{accessorKey:`location`,id:`location`,header:({column:e})=>K.createElement(w,{column:e,title:`Location`}),size:360,enableSorting:!0,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`img`,{src:`https://flagcdn.com/`+e.original.flag.toLowerCase()+`.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),K.createElement(`div`,{className:`text-foreground font-medium`},e.original.location))},{accessorKey:`joined`,id:`joined`,header:({column:e})=>K.createElement(w,{column:e,title:`Joined`}),size:200,enableSorting:!0,cell:({row:e})=>K.createElement(`span`,{className:`font-medium`},e.original.joined)}];function qi(){let[e,t]=K.useState({pageIndex:0,pageSize:5}),[n,r]=K.useState([{id:`name`,desc:!0}]),i=G({columns:Ki,data:Yr,state:{pagination:e,sorting:n},onPaginationChange:t,onSortingChange:r,getCoreRowModel:d(),getFilteredRowModel:N(),getPaginationRowModel:v(),getSortedRowModel:M()}),a=i.getFilteredRowModel().rows.length,o=a===0?0:e.pageIndex*e.pageSize+1,s=Math.min((e.pageIndex+1)*e.pageSize,a);return K.createElement(ae,{className:`w-full gap-3 py-3.5`},K.createElement(j,{className:`flex items-center justify-between px-3.5`},K.createElement(g,null,`Users`),K.createElement(ve,null,K.createElement(c,{size:`sm`},K.createElement(we,{"aria-hidden":!0}),`Add User`))),K.createElement(`div`,{className:`overflow-hidden w-full border-y [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(R,null,K.createElement(P,null,i.getHeaderGroups().map(e=>K.createElement(W,{key:e.id},e.headers.map(e=>K.createElement(B,{key:e.id,style:{width:e.getSize()}},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,i.getRowModel().rows.map(e=>K.createElement(W,{key:e.id},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id,style:{width:e.column.getSize()}},O(e.column.columnDef.cell,e.getContext())))))))),K.createElement(_e,{className:`border-none bg-transparent! px-3.5 py-0`},K.createElement(`div`,{className:`flex w-full items-center justify-between`},K.createElement(`p`,{className:`text-sm text-muted-foreground`},`${o} - ${s} of ${a}`),K.createElement(u,{className:`w-auto mx-0`},K.createElement(V,null,K.createElement(S,null,K.createElement(y,{onClick:e=>{e.preventDefault(),i.previousPage()},"aria-disabled":!i.getCanPreviousPage(),className:i.getCanPreviousPage()?void 0:`pointer-events-none opacity-50`})),Array.from({length:i.getPageCount()},(e,t)=>K.createElement(S,{key:t},K.createElement(T,{isActive:t===i.getState().pagination.pageIndex,onClick:e=>{e.preventDefault(),i.setPageIndex(t)}},t+1))),K.createElement(S,null,K.createElement(_,{onClick:e=>{e.preventDefault(),i.nextPage()},"aria-disabled":!i.getCanNextPage(),className:i.getCanNextPage()?void 0:`pointer-events-none opacity-50`})))))))}var Ji=[{accessorKey:`name`,id:`name`,header:({column:e})=>K.createElement(w,{column:e,title:`Practitioner`}),size:200,enableSorting:!0,enableHiding:!1,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,e.original.name.split(` `).map(e=>e[0]).join(``))),K.createElement(`div`,{className:`space-y-px`},K.createElement(`div`,{className:`text-foreground font-medium`},e.original.name),K.createElement(`div`,{className:`text-muted-foreground`},e.original.email)))},{accessorKey:`location`,id:`location`,header:({column:e})=>K.createElement(w,{column:e,title:`Location`}),size:160,enableSorting:!0,enableHiding:!0,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`img`,{src:`https://flagcdn.com/`+e.original.flag.toLowerCase()+`.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),K.createElement(`div`,{className:`text-foreground font-medium`},e.original.location))},{accessorKey:`joined`,id:`joined`,header:({column:e})=>K.createElement(w,{column:e,title:`Joined`}),size:120,enableSorting:!0,enableHiding:!0,cell:({row:e})=>K.createElement(`span`,{className:`font-medium`},e.original.joined)},{accessorKey:`availability`,id:`status`,header:`Status`,size:100,enableSorting:!0,enableHiding:!0,cell:({row:e})=>{let t=e.original.availability;return t===`online`||t===`away`?K.createElement(p,{variant:`success`},`Approved`):K.createElement(p,{variant:`warning`},`Pending`)}}];function Yi(){let[e,t]=K.useState({pageIndex:0,pageSize:5}),[n,r]=K.useState([{id:`name`,desc:!0}]),[i,a]=K.useState({}),o=G({columns:Ji,data:Yr,getRowId:e=>e.id,state:{pagination:e,sorting:n,columnVisibility:i},onColumnVisibilityChange:a,onPaginationChange:t,onSortingChange:r,getCoreRowModel:d(),getFilteredRowModel:N(),getPaginationRowModel:v(),getSortedRowModel:M()}),s=o.getFilteredRowModel().rows.length,l=s===0?0:e.pageIndex*e.pageSize+1,f=Math.min((e.pageIndex+1)*e.pageSize,s);return K.createElement(ae,{className:`w-full gap-3 py-3.5`},K.createElement(j,{className:`flex items-center justify-between px-3.5`},K.createElement(g,null,`Users`),K.createElement(ve,null,K.createElement(ge,{modal:!1},K.createElement(E,{asChild:!0},K.createElement(c,{variant:`outline`,size:`sm`,className:`shadow-sm`},K.createElement(fe,{"aria-hidden":!0}),`Columns`)),K.createElement(h,{align:`end`},o.getAllColumns().filter(e=>e.getCanHide()).map(e=>K.createElement(A,{key:e.id,className:`capitalize`,checked:e.getIsVisible(),onCheckedChange:t=>e.toggleVisibility(!!t)},e.id)))))),K.createElement(`div`,{className:`overflow-hidden w-full border-y [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(R,null,K.createElement(P,null,o.getHeaderGroups().map(e=>K.createElement(W,{key:e.id},e.headers.map(e=>K.createElement(B,{key:e.id,style:{width:e.getSize()}},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,o.getRowModel().rows.map(e=>K.createElement(W,{key:e.id},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id,style:{width:e.column.getSize()}},O(e.column.columnDef.cell,e.getContext())))))))),K.createElement(_e,{className:`border-none bg-transparent! px-3.5 py-0`},K.createElement(`div`,{className:`flex w-full items-center justify-between`},K.createElement(`p`,{className:`text-sm text-muted-foreground`},`${l} - ${f} of ${s}`),K.createElement(u,{className:`w-auto mx-0`},K.createElement(V,null,K.createElement(S,null,K.createElement(y,{onClick:e=>{e.preventDefault(),o.previousPage()},"aria-disabled":!o.getCanPreviousPage(),className:o.getCanPreviousPage()?void 0:`pointer-events-none opacity-50`})),Array.from({length:o.getPageCount()},(e,t)=>K.createElement(S,{key:t},K.createElement(T,{isActive:t===o.getState().pagination.pageIndex,onClick:e=>{e.preventDefault(),o.setPageIndex(t)}},t+1))),K.createElement(S,null,K.createElement(_,{onClick:e=>{e.preventDefault(),o.nextPage()},"aria-disabled":!o.getCanNextPage(),className:o.getCanNextPage()?void 0:`pointer-events-none opacity-50`})))))))}var Xi=[{accessorKey:`name`,id:`name`,header:({column:e})=>K.createElement(w,{column:e,title:`Practitioner`}),size:200,enableSorting:!0,enableHiding:!1,cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,e.original.name.split(` `).map(e=>e[0]).join(``))),K.createElement(`div`,{className:`space-y-px`},K.createElement(`div`,{className:`text-foreground font-medium`},e.original.name),K.createElement(`div`,{className:`text-muted-foreground`},e.original.email))),meta:{skeleton:K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(D,{className:`size-8 rounded-full`}),K.createElement(`div`,{className:`space-y-1.5`},K.createElement(D,{className:`h-4 w-24`}),K.createElement(D,{className:`h-3.5 w-16`})))}},{accessorKey:`email`,id:`email`,header:({column:e})=>K.createElement(w,{column:e,title:`Email`}),size:150,enableSorting:!0,cell:({row:e})=>K.createElement(`span`,{className:`text-muted-foreground`},e.original.email),meta:{skeleton:K.createElement(D,{className:`h-4 w-28`})}},{accessorKey:`availability`,id:`status`,header:`Status`,size:100,enableSorting:!0,cell:({row:e})=>{let t=e.original.availability;return t===`online`||t===`away`?K.createElement(p,{variant:`success`},`Approved`):K.createElement(p,{variant:`warning`},`Pending`)},meta:{skeleton:K.createElement(D,{className:`h-5 w-16 rounded-full`})}}];function Zi(){let[e,t]=K.useState(!0),[n,r]=K.useState({pageIndex:0,pageSize:5}),[i,a]=K.useState([{id:`name`,desc:!0}]),o=G({columns:Xi,data:Yr,getRowId:e=>e.id,state:{pagination:n,sorting:i},onPaginationChange:r,onSortingChange:a,getCoreRowModel:d(),getFilteredRowModel:N(),getPaginationRowModel:v(),getSortedRowModel:M()}),s=o.getFilteredRowModel().rows.length,l=s===0?0:n.pageIndex*n.pageSize+1,f=Math.min((n.pageIndex+1)*n.pageSize,s),p=Array.from({length:n.pageSize});return K.createElement(ae,{className:`w-full gap-3 py-3.5`},K.createElement(j,{className:`flex items-center justify-between px-3.5`},K.createElement(g,null,`Employees`),K.createElement(ve,null,K.createElement(c,{variant:`outline`,size:`sm`,onClick:()=>t(e=>!e)},e?`Disable Loading`:`Enable Loading`))),K.createElement(`div`,{className:`overflow-hidden w-full border-y [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(R,null,K.createElement(P,null,o.getHeaderGroups().map(e=>K.createElement(W,{key:e.id},e.headers.map(e=>K.createElement(B,{key:e.id,style:{width:e.getSize()}},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,e?p.map((e,t)=>K.createElement(W,{key:`skeleton-${t}`},o.getAllLeafColumns().map(e=>K.createElement(H,{key:e.id,style:{width:e.getSize()}},e.columnDef.meta?.skeleton??K.createElement(D,{className:`h-4 w-full`}))))):o.getRowModel().rows.map(e=>K.createElement(W,{key:e.id},e.getVisibleCells().map(e=>K.createElement(H,{key:e.id,style:{width:e.column.getSize()}},O(e.column.columnDef.cell,e.getContext())))))))),K.createElement(_e,{className:`border-none bg-transparent! px-3.5 py-0`},K.createElement(`div`,{className:`flex w-full items-center justify-between`},e?K.createElement(`div`,{className:`flex w-full items-center justify-between`},K.createElement(D,{className:`h-4 w-32`}),K.createElement(`div`,{className:`flex gap-1`},K.createElement(D,{className:`size-8 rounded-md`}),K.createElement(D,{className:`size-8 rounded-md`}),K.createElement(D,{className:`size-8 rounded-md`}),K.createElement(D,{className:`size-8 rounded-md`}))):K.createElement(K.Fragment,null,K.createElement(`p`,{className:`text-sm text-muted-foreground`},`${l} - ${f} of ${s}`),K.createElement(u,{className:`w-auto mx-0`},K.createElement(V,null,K.createElement(S,null,K.createElement(y,{onClick:e=>{e.preventDefault(),o.previousPage()},"aria-disabled":!o.getCanPreviousPage(),className:o.getCanPreviousPage()?void 0:`pointer-events-none opacity-50`})),Array.from({length:o.getPageCount()},(e,t)=>K.createElement(S,{key:t},K.createElement(T,{isActive:t===o.getState().pagination.pageIndex,onClick:e=>{e.preventDefault(),o.setPageIndex(t)}},t+1))),K.createElement(S,null,K.createElement(_,{onClick:e=>{e.preventDefault(),o.nextPage()},"aria-disabled":!o.getCanNextPage(),className:o.getCanNextPage()?void 0:`pointer-events-none opacity-50`}))))))))}var Qi=[{id:`1`,name:`Dr. Kiran Reddy`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,status:`Active`,flag:`in`,email:`kiran.reddy@ohc.in`,role:`Senior Consultant`,joined:`Jan, 2018`,location:`India`},{id:`2`,name:`Dr. Anita Menon`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,status:`Inactive`,flag:`in`,email:`anita.menon@ohc.in`,role:`Consultant`,joined:`Mar, 2020`,location:`India`},{id:`3`,name:`Dr. Suresh Pillai`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,status:`Blocked`,flag:`in`,email:`suresh.pillai@ohc.in`,role:`Head of Department`,joined:`Jun, 2015`,location:`India`},{id:`4`,name:`Nurse Rekha Thomas`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,status:`Inactive`,flag:`in`,email:`rekha.thomas@ohc.in`,role:`Senior Nurse`,joined:`Sep, 2019`,location:`India`},{id:`5`,name:`Dr. Imran Sheikh`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,status:`Active`,flag:`in`,email:`imran.sheikh@ohc.in`,role:`Consultant`,joined:`Nov, 2017`,location:`India`},{id:`6`,name:`Dr. Kavitha Nair`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,status:`Pending`,flag:`in`,email:`kavitha.nair@ohc.in`,role:`Senior Consultant`,joined:`Aug, 2016`,location:`India`},{id:`7`,name:`Dr. Rajiv Kapoor`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,status:`Inactive`,flag:`in`,email:`rajiv.kapoor@ohc.in`,role:`Consultant`,joined:`Dec, 2021`,location:`India`},{id:`8`,name:`Nurse Sumathi K.`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,status:`Blocked`,flag:`in`,email:`sumathi.k@ohc.in`,role:`Senior Nurse`,joined:`Apr, 2018`,location:`India`},{id:`9`,name:`Dr. Farhan Hossain`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,status:`Pending`,flag:`in`,email:`farhan.hossain@ohc.in`,role:`Consultant`,joined:`Jul, 2020`,location:`India`},{id:`10`,name:`Dr. Pooja Iyer`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,status:`Inactive`,flag:`in`,email:`pooja.iyer@ohc.in`,role:`Consultant`,joined:`May, 2023`,location:`India`},{id:`11`,name:`Nurse Arun Mathew`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,status:`Blocked`,flag:`in`,email:`arun.mathew@ohc.in`,role:`Charge Nurse`,joined:`Oct, 2019`,location:`India`},{id:`12`,name:`Dr. Preethi Sajan`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,status:`Active`,flag:`in`,email:`preethi.sajan@ohc.in`,role:`Staff Physician`,joined:`Feb, 2022`,location:`India`}];function $i({row:e}){return K.createElement(ge,{modal:!1},K.createElement(`div`,null,K.createElement(c,{className:`size-7 shadow-sm`,size:`icon`,variant:`ghost`,asChild:!0},K.createElement(E,null,K.createElement(oe)))),K.createElement(h,{side:`bottom`,align:`start`},K.createElement(C,{onClick:()=>{}},`Edit`),K.createElement(C,{onClick:()=>{navigator.clipboard.writeText(e.original.id),x.success(`Practitioner ID copied`,{description:e.original.id})}},`Copy ID`),K.createElement(ee),K.createElement(C,{variant:`destructive`,onClick:()=>{}},`Delete`)))}function ea(){let[e,t]=K.useState({pageIndex:0,pageSize:5}),[n,r]=K.useState([{id:`name`,desc:!0}]),[i,o]=K.useState({}),[m,h]=K.useState(``),[g,x]=K.useState([]),ee=K.useMemo(()=>Qi.filter(e=>{let t=!g.length||g.includes(e.status),n=m.toLowerCase(),r=!m||Object.values(e).join(` `).toLowerCase().includes(n);return t&&r}),[m,g]),C=K.useMemo(()=>Qi.reduce((e,t)=>(e[t.status]=(e[t.status]||0)+1,e),{}),[]),E=(e,t)=>{x(n=>e?[...n,t]:n.filter(e=>e!==t))},D=K.useMemo(()=>[{accessorKey:`id`,id:`id`,header:({table:e})=>K.createElement(b,{checked:e.getIsAllPageRowsSelected(),indeterminate:!e.getIsAllPageRowsSelected()&&e.getIsSomePageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":`Select all`}),cell:({row:e})=>K.createElement(b,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`}),enableSorting:!1,size:35},{accessorKey:`name`,id:`name`,header:({column:e})=>K.createElement(w,{column:e,title:`Practitioner`}),cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,e.original.name.split(` `).map(e=>e[0]).join(``))),K.createElement(`div`,{className:`space-y-px`},K.createElement(`div`,{className:`text-foreground font-medium`},e.original.name),K.createElement(`div`,{className:`text-muted-foreground`},e.original.email))),size:200,enableSorting:!0},{accessorKey:`location`,id:`location`,header:({column:e})=>K.createElement(w,{column:e,title:`Location`}),cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`img`,{src:`https://flagcdn.com/${e.original.flag.toLowerCase()}.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),K.createElement(`div`,{className:`text-foreground font-medium`},e.original.location)),size:150,enableSorting:!0},{accessorKey:`role`,id:`role`,header:({column:e})=>K.createElement(w,{column:e,title:`Designation`}),cell:({row:e})=>K.createElement(`div`,{className:`text-foreground font-medium`},e.original.role),size:150,enableSorting:!0},{accessorKey:`joined`,id:`joined`,header:({column:e})=>K.createElement(w,{column:e,title:`Joined`}),cell:({row:e})=>K.createElement(`div`,{className:`text-foreground font-medium`},e.original.joined),size:150,enableSorting:!0},{accessorKey:`status`,id:`status`,header:({column:e})=>K.createElement(w,{column:e,title:`Status`}),cell:({row:e})=>{let t=e.original.status;return t===`Active`?K.createElement(p,{variant:`success`},`Approved`):t===`Blocked`?K.createElement(p,{variant:`destructive`},`Blocked`):t===`Inactive`?K.createElement(p,{variant:`info`},`Inactive`):K.createElement(p,{variant:`warning`},`Pending`)},size:100,enableSorting:!0},{id:`actions`,header:``,cell:({row:e})=>K.createElement($i,{row:e}),size:60,enableSorting:!1}],[]),k=G({columns:D,data:ee,getRowId:e=>e.id,state:{pagination:e,sorting:n,rowSelection:i},onPaginationChange:t,onSortingChange:r,onRowSelectionChange:o,getCoreRowModel:d(),getFilteredRowModel:N(),getPaginationRowModel:v(),getSortedRowModel:M()}),A=k.getFilteredRowModel().rows.length,ne=A===0?0:e.pageIndex*e.pageSize+1,re=Math.min((e.pageIndex+1)*e.pageSize,A);return K.createElement(ae,{className:`w-full gap-3 py-0`},K.createElement(j,{className:`flex items-center justify-between px-3 pt-3`},K.createElement(`div`,{className:`flex items-center gap-2.5`},K.createElement(le,{className:`w-48`},K.createElement(he,{align:`inline-start`},K.createElement(a)),K.createElement(se,{placeholder:`Search...`,value:m,onChange:e=>h(e.target.value)}),m.length>0&&K.createElement(he,{align:`inline-end`},K.createElement(L,{"aria-label":`Clear`,size:`icon-xs`,onClick:()=>h(``)},K.createElement(s)))),K.createElement(ue,null,K.createElement(me,{asChild:!0},K.createElement(c,{variant:`outline`},K.createElement(xe),`Status`,g.length>0&&K.createElement(p,{size:`sm`,variant:`info`},g.length))),K.createElement(pe,{className:`w-40`,align:`start`},K.createElement(`div`,{className:`space-y-3`},K.createElement(`div`,{className:`text-muted-foreground text-xs font-medium`},`Filters`),K.createElement(`div`,{className:`space-y-3`},...Object.keys(C).map(e=>K.createElement(`div`,{key:e,className:`flex items-center gap-2.5`},K.createElement(b,{id:`crud-${e}`,checked:g.includes(e),onCheckedChange:t=>E(t===!0,e)}),K.createElement(I,{htmlFor:`crud-${e}`,className:`flex grow items-center justify-between gap-1.5 font-normal`},e,K.createElement(`span`,{className:`text-muted-foreground`},C[e]))))))))),K.createElement(ve,null,K.createElement(c,null,K.createElement(we),`Add new`))),K.createElement(te,{className:`overflow-hidden border-y px-0 [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3`},K.createElement(l,null,K.createElement(R,null,K.createElement(P,null,...k.getHeaderGroups().map(e=>K.createElement(W,{key:e.id},...e.headers.map(e=>K.createElement(B,{key:e.id,style:{width:e.getSize()}},e.isPlaceholder?null:O(e.column.columnDef.header,e.getContext())))))),K.createElement(z,null,...k.getRowModel().rows.map(e=>K.createElement(W,Object.assign({key:e.id},e.getIsSelected()?{"data-state":`selected`}:{}),...e.getVisibleCells().map(e=>K.createElement(H,{key:e.id,style:{width:e.column.getSize()}},O(e.column.columnDef.cell,e.getContext()))))))))),K.createElement(_e,{className:`border-none bg-transparent! px-3.5 py-2`},K.createElement(`div`,{className:`flex w-full items-center justify-between`},K.createElement(`p`,{className:`text-sm text-muted-foreground`},`${ne} - ${re} of ${A}`),K.createElement(u,{className:`w-auto mx-0`},K.createElement(V,null,K.createElement(S,null,K.createElement(y,{onClick:e=>{e.preventDefault(),k.previousPage()},"aria-disabled":!k.getCanPreviousPage(),className:k.getCanPreviousPage()?void 0:`pointer-events-none opacity-50`})),...Array.from({length:k.getPageCount()},(e,t)=>K.createElement(S,{key:t},K.createElement(T,{isActive:t===k.getState().pagination.pageIndex,onClick:e=>{e.preventDefault(),k.setPageIndex(t)}},t+1))),K.createElement(S,null,K.createElement(_,{onClick:e=>{e.preventDefault(),k.nextPage()},"aria-disabled":!k.getCanNextPage(),className:k.getCanNextPage()?void 0:`pointer-events-none opacity-50`})))))))}var ta=[{id:`1`,name:`Dr. Kiran Reddy`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,role:`Senior Consultant`,status:`Active`,balance:5143.03},{id:`2`,name:`Dr. Anita Menon`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,role:`Consultant`,status:`Inactive`,balance:4321.87},{id:`3`,name:`Dr. Suresh Pillai`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,role:`Head of Department`,status:`Blocked`,balance:7654.98},{id:`4`,name:`Nurse Rekha Thomas`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,role:`Senior Nurse`,status:`Inactive`,balance:3456.45},{id:`5`,name:`Dr. Imran Sheikh`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,role:`Consultant`,status:`Active`,balance:9876.54},{id:`6`,name:`Dr. Kavitha Nair`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,role:`Senior Consultant`,status:`Pending`,balance:6214.22},{id:`7`,name:`Dr. Rajiv Kapoor`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,role:`Consultant`,status:`Inactive`,balance:5321.77},{id:`8`,name:`Nurse Sumathi K.`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,role:`Senior Nurse`,status:`Blocked`,balance:8452.39},{id:`9`,name:`Dr. Farhan Hossain`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,role:`Consultant`,status:`Pending`,balance:7345.1},{id:`10`,name:`Dr. Pooja Iyer`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,role:`Consultant`,status:`Inactive`,balance:5214.88}],na={Active:`success`,Blocked:`destructive`,Inactive:`info`,Pending:`warning`},ra=e=>`$`+e.toLocaleString(`en-US`,{minimumFractionDigits:2}),ia=[{id:`select`,header:({table:e})=>K.createElement(b,{checked:e.getIsAllPageRowsSelected(),indeterminate:!e.getIsAllPageRowsSelected()&&e.getIsSomePageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":`Select all`}),cell:({row:e})=>K.createElement(b,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`}),footer:()=>null,enableSorting:!1,enableHiding:!1,size:35},{id:`name`,accessorKey:`name`,header:({column:e})=>K.createElement(w,{column:e,title:`Practitioner`}),footer:()=>K.createElement(`span`,{className:`text-muted-foreground text-xs`},`Total balance`),cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,Hr(e.original.name))),K.createElement(`span`,{className:`text-foreground font-medium`},e.original.name)),size:200,enableSorting:!0},{id:`role`,accessorKey:`role`,header:({column:e})=>K.createElement(w,{column:e,title:`Designation`}),footer:()=>null,cell:({row:e})=>K.createElement(`span`,{className:`text-foreground font-medium`},e.original.role),size:150,enableSorting:!0},{id:`status`,accessorKey:`status`,header:({column:e})=>K.createElement(w,{column:e,title:`Status`}),footer:()=>null,cell:({row:e})=>K.createElement(p,{variant:na[e.original.status]},e.original.status),size:110,enableSorting:!0},{id:`balance`,accessorKey:`balance`,header:({column:e})=>K.createElement(w,{column:e,title:`Balance`}),footer:({table:e})=>{let t=e.getFilteredRowModel().rows.reduce((e,t)=>e+t.getValue(`balance`),0);return K.createElement(`span`,{className:`font-bold tabular-nums`},ra(t))},cell:({row:e})=>K.createElement(`span`,{className:`text-foreground font-medium tabular-nums`},ra(e.original.balance)),size:130,enableSorting:!0},{id:`actions`,enableHiding:!1,meta:{className:`w-0`},footer:()=>null,cell:({row:e})=>K.createElement(ce,{},K.createElement(C,{onClick:()=>navigator.clipboard.writeText(e.original.id)},`Copy ID`),K.createElement(ee,{}),K.createElement(C,{},`Edit`),K.createElement(C,{className:`text-destructive`},`Delete`))}],aa=()=>K.createElement(m,{columns:ia,data:ta,filterColumn:`name`,filterPlaceholder:`Search practitioners...`}),oa=[{id:`1`,name:`Dr. Kiran Reddy`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,location:`India`,flag:`in`,status:`Active`,balance:5143.03},{id:`2`,name:`Dr. Anita Menon`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,location:`India`,flag:`in`,status:`Inactive`,balance:4321.87},{id:`3`,name:`Dr. Suresh Pillai`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,location:`India`,flag:`in`,status:`Blocked`,balance:7654.98},{id:`4`,name:`Nurse Rekha Thomas`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,location:`India`,flag:`in`,status:`Inactive`,balance:3456.45},{id:`5`,name:`Dr. Imran Sheikh`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,location:`United Kingdom`,flag:`gb`,status:`Active`,balance:9876.54},{id:`6`,name:`Dr. Kavitha Nair`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,location:`Singapore`,flag:`sg`,status:`Pending`,balance:6214.22},{id:`7`,name:`Dr. Rajiv Kapoor`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,location:`Canada`,flag:`ca`,status:`Inactive`,balance:5321.77},{id:`8`,name:`Nurse Sumathi K.`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,location:`India`,flag:`in`,status:`Blocked`,balance:8452.39},{id:`9`,name:`Dr. Farhan Hossain`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,location:`India`,flag:`in`,status:`Pending`,balance:7345.1},{id:`10`,name:`Dr. Pooja Iyer`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,location:`India`,flag:`in`,status:`Inactive`,balance:5214.88}],sa={Active:`success`,Blocked:`destructive`,Inactive:`info`,Pending:`warning`},ca=e=>`$`+e.toLocaleString(`en-US`,{minimumFractionDigits:2}),la=[{id:`name`,accessorKey:`name`,header:({column:e})=>K.createElement(w,{column:e,title:`Practitioner`}),footer:({table:e})=>{let t=e.getFilteredRowModel().rows.length;return K.createElement(`div`,{className:`flex flex-col gap-0.5`},K.createElement(`span`,{className:`text-muted-foreground text-xs`},`Practitioners`),K.createElement(`span`,{className:`font-medium tabular-nums`},String(t)))},cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,Hr(e.original.name))),K.createElement(`span`,{className:`text-foreground font-medium`},e.original.name)),size:150,enableSorting:!0},{id:`location`,accessorKey:`location`,header:({column:e})=>K.createElement(w,{column:e,title:`Location`}),footer:({table:e})=>{let t=e.getFilteredRowModel().rows.filter(e=>e.getValue(`status`)===`Active`).length;return K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`span`,{className:`text-muted-foreground text-xs`},`Active`),K.createElement(p,{variant:`success`},String(t)))},cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-1.5`},K.createElement(`img`,{src:`https://flagcdn.com/`+e.original.flag.toLowerCase()+`.svg`,alt:e.original.flag,className:`size-4 rounded-full object-cover`}),K.createElement(`span`,{className:`text-foreground font-medium`},e.original.location)),size:150,enableSorting:!0},{id:`status`,accessorKey:`status`,header:({column:e})=>K.createElement(w,{column:e,title:`Status`}),footer:({table:e})=>{let t=e.getFilteredRowModel().rows,n=t.length?t.reduce((e,t)=>e+t.getValue(`balance`),0)/t.length:0;return K.createElement(`div`,{className:`flex flex-col gap-0.5`},K.createElement(`span`,{className:`text-muted-foreground text-xs`},`Avg balance`),K.createElement(`span`,{className:`font-medium tabular-nums`},ca(n)))},cell:({row:e})=>K.createElement(p,{variant:sa[e.original.status]},e.original.status),size:110,enableSorting:!0},{id:`balance`,accessorKey:`balance`,header:({column:e})=>K.createElement(w,{column:e,title:`Balance`}),footer:({table:e})=>{let t=e.getFilteredRowModel().rows.map(e=>e.getValue(`balance`)),n=t.length?Math.min(...t):0,r=t.length?Math.max(...t):0;return K.createElement(`div`,{className:`flex flex-col gap-0.5`},K.createElement(`span`,{className:`text-muted-foreground text-xs`},`Min / Max`),K.createElement(`span`,{className:`font-medium tabular-nums`},ca(n)+` – `+ca(r)))},cell:({row:e})=>K.createElement(`span`,{className:`text-foreground font-medium tabular-nums`},ca(e.original.balance)),size:130,enableSorting:!0}],ua=()=>K.createElement(m,{columns:la,data:oa,filterColumn:`name`,filterPlaceholder:`Search practitioners...`}),da=[{id:`1`,name:`Dr. Kiran Reddy`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80`,status:`Active`,balance:5143.03,transactions:48},{id:`2`,name:`Dr. Anita Menon`,avatar:`https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80`,status:`Inactive`,balance:4321.87,transactions:31},{id:`3`,name:`Dr. Suresh Pillai`,avatar:`https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80`,status:`Blocked`,balance:7654.98,transactions:67},{id:`4`,name:`Nurse Rekha Thomas`,avatar:`https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80`,status:`Inactive`,balance:3456.45,transactions:22},{id:`5`,name:`Dr. Imran Sheikh`,avatar:`https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80`,status:`Active`,balance:9876.54,transactions:93},{id:`6`,name:`Dr. Kavitha Nair`,avatar:`https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80`,status:`Pending`,balance:6214.22,transactions:55},{id:`7`,name:`Dr. Rajiv Kapoor`,avatar:`https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80`,status:`Inactive`,balance:5321.77,transactions:40},{id:`8`,name:`Nurse Sumathi K.`,avatar:`https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80`,status:`Blocked`,balance:8452.39,transactions:74},{id:`9`,name:`Dr. Farhan Hossain`,avatar:`https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80`,status:`Pending`,balance:7345.1,transactions:61},{id:`10`,name:`Dr. Pooja Iyer`,avatar:`https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80`,status:`Inactive`,balance:5214.88,transactions:37}],fa={Active:`success`,Blocked:`destructive`,Inactive:`info`,Pending:`warning`},pa=e=>`$`+e.toLocaleString(`en-US`,{minimumFractionDigits:2}),ma=[{id:`name`,accessorKey:`name`,header:({column:e})=>K.createElement(w,{column:e,title:`Practitioner`}),footer:({table:e})=>{let t=e.getFilteredRowModel().rows.length;return K.createElement(`div`,{className:`flex flex-col gap-0.5`},K.createElement(`span`,{className:`text-muted-foreground text-xs`},`Summary`),K.createElement(`span`,{className:`text-foreground font-medium`},`Across all practitioners`),K.createElement(`span`,{className:`text-muted-foreground text-xs tabular-nums`},t+` practitioners`))},cell:({row:e})=>K.createElement(`div`,{className:`flex items-center gap-3`},K.createElement(U,{className:`size-8`},K.createElement(f,{src:e.original.avatar,alt:e.original.name}),K.createElement(F,null,Hr(e.original.name))),K.createElement(`span`,{className:`text-foreground font-medium`},e.original.name)),size:200,enableSorting:!0},{id:`status`,accessorKey:`status`,header:({column:e})=>K.createElement(w,{column:e,title:`Status`}),footer:()=>null,cell:({row:e})=>K.createElement(p,{variant:fa[e.original.status]},e.original.status),size:110,enableSorting:!0},{id:`balance`,accessorKey:`balance`,header:({column:e})=>K.createElement(w,{column:e,title:`Balance`}),footer:({table:e})=>{let t=e.getFilteredRowModel().rows.map(e=>e.getValue(`balance`)),n=t.length?t.reduce((e,t)=>e+t,0)/t.length:0,r=t.length?Math.min(...t):0,i=t.length?Math.max(...t):0;return K.createElement(`div`,{className:`flex flex-col gap-0.5`},K.createElement(`span`,{className:`text-muted-foreground text-xs`},`Avg`),K.createElement(`span`,{className:`tabular-nums`},pa(n)),K.createElement(`span`,{className:`text-muted-foreground text-xs tabular-nums`},pa(r)+` – `+pa(i)))},cell:({row:e})=>K.createElement(`span`,{className:`text-foreground font-medium tabular-nums`},pa(e.original.balance)),size:130,enableSorting:!0},{id:`transactions`,accessorKey:`transactions`,header:({column:e})=>K.createElement(w,{column:e,title:`Encounters`}),footer:({table:e})=>{let t=e.getFilteredRowModel().rows.map(e=>e.getValue(`transactions`)),n=t.length?Math.round(t.reduce((e,t)=>e+t,0)/t.length):0,r=t.length?Math.min(...t):0,i=t.length?Math.max(...t):0;return K.createElement(`div`,{className:`flex flex-col gap-0.5`},K.createElement(`span`,{className:`text-muted-foreground text-xs`},`Avg`),K.createElement(`span`,{className:`tabular-nums`},String(n)),K.createElement(`span`,{className:`text-muted-foreground text-xs tabular-nums`},r+` – `+i))},cell:({row:e})=>K.createElement(`span`,{className:`text-foreground font-medium tabular-nums`},String(e.original.transactions)),size:120,enableSorting:!0}],ha={id:`data-table`,name:`Data Table`,description:`Powerful table and datagrids built using TanStack Table. Supports sorting, filtering, pagination, column visibility, and row selection.`,installation:{cli:`npx shadcn@latest add table`,manual:`Install @tanstack/react-table, add the Table component, then copy the DataTable component into your project.`},usage:`import { DataTable } from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

type Patient = {
  id: string
  name: string
  age: number
  ward: string
  diagnosis: string
  status: "admitted" | "critical" | "stable" | "discharged"
}

const columns: ColumnDef<Patient>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "ward", header: "Ward" },
  { accessorKey: "diagnosis", header: "Diagnosis" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={statusVariantMap[row.getValue("status")]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

export function PatientListPage() {
  return <DataTable columns={columns} data={patients} filterColumn="name" />
}`,preview:{code:`"use client"

import * as React from "react"
import { type ColumnDef } from "@tanstack/react-table"

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "@/components/ui/data-table"

type Member = {
  id: string
  name: string
  availability: "online" | "away" | "busy" | "offline"
  avatar: string
  flag: string
  email: string
  location: string
  joined: string
}

const availabilityColor = {
  online: "bg-green-500",
  away: "bg-yellow-500",
  busy: "bg-orange-500",
  offline: "bg-gray-400",
} as const

const columns: ColumnDef<Member>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={
          !table.getIsAllPageRowsSelected() &&
          table.getIsSomePageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 20,
  },
  {
    accessorKey: "name",
    id: "name",
    header: "Name",
    size: 200,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarImage src={row.original.avatar} alt={row.original.name} />
          <AvatarFallback>
            {row.original.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
          <AvatarBadge
            className={\`size-1.5! p-0 \${availabilityColor[row.original.availability]}\`}
          />
        </Avatar>
        <div className="space-y-px">
          <div className="text-foreground font-medium">{row.original.name}</div>
          <div className="text-muted-foreground">{row.original.email}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
    size: 180,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <img
          src={\`https://flagcdn.com/\${row.original.flag.toLowerCase()}.svg\`}
          alt={row.original.flag}
          className="size-4 rounded-full object-cover"
        />
        <div className="text-foreground font-medium">{row.original.location}</div>
      </div>
    ),
  },
  {
    accessorKey: "joined",
    header: "Joined",
    size: 120,
    cell: ({ row }) => (
      <span className="font-medium">{row.original.joined}</span>
    ),
  },
]

export function MemberListDemo() {
  return (
    <DataTable
      columns={columns}
      data={members}
      filterColumn="name"
      filterPlaceholder="Search practitioners..."
    />
  )
}`,component:K.createElement(Qr)},examples:[{name:`Medication Administration`,description:`Medication Administration Record (MAR) showing scheduled drugs, dose, route, and administration status for inpatients.`,code:`"use client"

import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/ui/data-table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type ColumnDef } from "@tanstack/react-table"

type MedLog = {
  id: string
  patientId: string
  patientName: string
  medication: string
  dose: string
  route: string
  scheduledAt: string
  status: "given" | "pending" | "missed"
}

const statusVariant = {
  given:   "success",
  pending: "warning",
  missed:  "destructive",
} as const

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const columns: ColumnDef<MedLog>[] = [
  {
    id: "patient",
    accessorKey: "patientName",
    header: "Patient",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.patientName)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.patientName}</span>
          <span className="text-muted-foreground text-xs">{row.original.patientId}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "medication",
    header: "Medication",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm">{row.original.medication}</span>
        <span className="text-muted-foreground text-xs">
          {row.original.dose} · {row.original.route}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "scheduledAt",
    header: "Scheduled",
    cell: ({ row }) => (
      <span className="font-medium tabular-nums text-sm">{row.getValue("scheduledAt")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.getValue("status") as MedLog["status"]]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

export function MedicationAdministrationTable() {
  return (
    <DataTable
      columns={columns}
      data={medLogs}
      filterColumn="patientName"
      filterPlaceholder="Search by patient..."
    />
  )
}`,preview:K.createElement($r)},{name:`Invoices`,description:`Billing and invoice management with sortable amounts, category badges, payment status, and row-level actions.`,code:`"use client"

import { Badge } from "@/components/ui/badge"
import {
  DataTable,
  DataTableColumnHeader,
  DataTableRowActions,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/data-table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type ColumnDef } from "@tanstack/react-table"

type Invoice = {
  id: string
  patientName: string
  patientId: string
  date: string
  category: string
  amount: number
  status: "paid" | "pending" | "overdue"
}

const statusVariant = {
  paid:    "success",
  pending: "warning",
  overdue: "destructive",
} as const

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const formatINR = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Invoice #" />,
    cell: ({ row }) => (
      <span className="font-mono text-sm font-medium">{row.getValue("id")}</span>
    ),
  },
  {
    id: "patient",
    accessorKey: "patientName",
    header: "Patient",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.patientName)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.patientName}</span>
          <span className="text-muted-foreground text-xs">{row.original.patientId}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <Badge variant="neutral">{row.getValue("category")}</Badge>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    meta: { className: "text-right" },
    cell: ({ row }) => (
      <div className="font-medium tabular-nums">{formatINR(row.getValue("amount"))}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.getValue("status") as Invoice["status"]]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    meta: { className: "w-0" },
    cell: ({ row }) => (
      <DataTableRowActions>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(row.original.id)}
        >
          Copy invoice ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View invoice</DropdownMenuItem>
        <DropdownMenuItem>Download PDF</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Mark as paid</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">Void invoice</DropdownMenuItem>
      </DataTableRowActions>
    ),
  },
]

export function InvoiceTable() {
  return (
    <DataTable
      columns={columns}
      data={invoices}
      filterColumn="patientName"
      filterPlaceholder="Search by patient..."
    />
  )
}`,preview:K.createElement(ei)},{name:`Sortable Columns`,description:`Staff directory with sortable name, department, designation, and experience columns. Click any column header to toggle ascending / descending order.`,code:`"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

type StaffMember = {
  id: string
  name: string
  email: string
  department: string
  designation: string
  joined: string
  experience: number
  status: "active" | "inactive"
}

const staffMembers: StaffMember[] = [
  { id: "STAFF-001", name: "Dr. Kiran Reddy",       email: "kiran.reddy@ohc.in",    department: "Cardiology",       designation: "Senior Consultant",  joined: "Jan 2018", experience: 12, status: "active"   },
  { id: "STAFF-002", name: "Dr. Anita Menon",        email: "anita.menon@ohc.in",    department: "Pediatrics",       designation: "Consultant",          joined: "Mar 2020", experience:  8, status: "active"   },
  { id: "STAFF-003", name: "Dr. Suresh Pillai",      email: "suresh.pillai@ohc.in",  department: "Surgery",          designation: "Head of Department",  joined: "Jun 2015", experience: 15, status: "active"   },
  { id: "STAFF-004", name: "Nurse Rekha Thomas",     email: "rekha.thomas@ohc.in",   department: "ICU",              designation: "Senior Nurse",        joined: "Sep 2019", experience:  6, status: "inactive" },
  { id: "STAFF-005", name: "Dr. Imran Sheikh",       email: "imran.sheikh@ohc.in",   department: "Orthopedics",      designation: "Consultant",          joined: "Nov 2017", experience: 10, status: "active"   },
  { id: "STAFF-006", name: "Nurse Preethi Sajan",    email: "preethi.sajan@ohc.in",  department: "General Medicine", designation: "Staff Nurse",         joined: "Feb 2022", experience:  3, status: "active"   },
  { id: "STAFF-007", name: "Dr. Kavitha Nair",       email: "kavitha.nair@ohc.in",   department: "Neurology",        designation: "Senior Consultant",  joined: "Aug 2016", experience: 14, status: "active"   },
  { id: "STAFF-008", name: "Dr. Rajiv Kapoor",       email: "rajiv.kapoor@ohc.in",   department: "Radiology",        designation: "Consultant",          joined: "Dec 2021", experience:  5, status: "inactive" },
  { id: "STAFF-009", name: "Nurse Sumathi Krishnan", email: "sumathi.k@ohc.in",      department: "Maternity",        designation: "Senior Nurse",        joined: "Apr 2018", experience:  9, status: "active"   },
  { id: "STAFF-010", name: "Dr. Farhan Hossain",     email: "farhan.hossain@ohc.in", department: "Oncology",         designation: "Consultant",          joined: "Jul 2020", experience:  7, status: "active"   },
  { id: "STAFF-011", name: "Dr. Pooja Iyer",         email: "pooja.iyer@ohc.in",     department: "Dermatology",      designation: "Consultant",          joined: "May 2023", experience:  4, status: "active"   },
  { id: "STAFF-012", name: "Nurse Arun Mathew",      email: "arun.mathew@ohc.in",    department: "Emergency",        designation: "Charge Nurse",        joined: "Oct 2019", experience:  6, status: "inactive" },
]

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const columns: ColumnDef<StaffMember>[] = [
  {
    id: "staff",
    accessorKey: "name",
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Staff" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="circle">
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-muted-foreground text-xs">{row.original.email}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "department",
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
  },
  {
    accessorKey: "designation",
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Designation" />,
  },
  {
    accessorKey: "experience",
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Experience" />,
    cell: ({ row }) => (
      <span className="tabular-nums">{row.getValue("experience")} yrs</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.getValue("status") === "active" ? "success" : "neutral"}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

export function SortableStaffTable() {
  return (
    <DataTable
      columns={columns}
      data={staffMembers}
      filterColumn="name"
      filterPlaceholder="Search staff..."
    />
  )
}`,preview:K.createElement(ti)},{name:`Movable Columns`,description:"Click any column header to open a dropdown with sort options (Asc / Desc) and column reordering actions (Move to Left, Move to Right). Powered by TanStack Table's `columnOrder` state — no extra dependencies required.",code:`"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

type StaffMember = {
  id: string
  name: string
  email: string
  department: string
  designation: string
  joined: string
  experience: number
  status: "active" | "inactive"
}

const staffMembers: StaffMember[] = [
  { id: "STAFF-001", name: "Dr. Kiran Reddy",       email: "kiran.reddy@ohc.in",    department: "Cardiology",       designation: "Senior Consultant", joined: "Jan 2018", experience: 12, status: "active"   },
  { id: "STAFF-002", name: "Dr. Anita Menon",        email: "anita.menon@ohc.in",    department: "Pediatrics",       designation: "Consultant",         joined: "Mar 2020", experience:  8, status: "active"   },
  { id: "STAFF-003", name: "Dr. Suresh Pillai",      email: "suresh.pillai@ohc.in",  department: "Surgery",          designation: "Head of Department", joined: "Jun 2015", experience: 15, status: "active"   },
  { id: "STAFF-004", name: "Nurse Rekha Thomas",     email: "rekha.thomas@ohc.in",   department: "ICU",              designation: "Senior Nurse",       joined: "Sep 2019", experience:  6, status: "inactive" },
  { id: "STAFF-005", name: "Dr. Imran Sheikh",       email: "imran.sheikh@ohc.in",   department: "Orthopedics",      designation: "Consultant",         joined: "Nov 2017", experience: 10, status: "active"   },
  { id: "STAFF-006", name: "Nurse Preethi Sajan",    email: "preethi.sajan@ohc.in",  department: "General Medicine", designation: "Staff Nurse",        joined: "Feb 2022", experience:  3, status: "active"   },
  { id: "STAFF-007", name: "Dr. Kavitha Nair",       email: "kavitha.nair@ohc.in",   department: "Neurology",        designation: "Senior Consultant", joined: "Aug 2016", experience: 14, status: "active"   },
  { id: "STAFF-008", name: "Dr. Rajiv Kapoor",       email: "rajiv.kapoor@ohc.in",   department: "Radiology",        designation: "Consultant",         joined: "Dec 2021", experience:  5, status: "inactive" },
  { id: "STAFF-009", name: "Nurse Sumathi Krishnan", email: "sumathi.k@ohc.in",      department: "Maternity",        designation: "Senior Nurse",       joined: "Apr 2018", experience:  9, status: "active"   },
  { id: "STAFF-010", name: "Dr. Farhan Hossain",     email: "farhan.hossain@ohc.in", department: "Oncology",         designation: "Consultant",         joined: "Jul 2020", experience:  7, status: "active"   },
  { id: "STAFF-011", name: "Dr. Pooja Iyer",         email: "pooja.iyer@ohc.in",     department: "Dermatology",      designation: "Consultant",         joined: "May 2023", experience:  4, status: "active"   },
  { id: "STAFF-012", name: "Nurse Arun Mathew",      email: "arun.mathew@ohc.in",    department: "Emergency",        designation: "Charge Nurse",       joined: "Oct 2019", experience:  6, status: "inactive" },
]

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const columns: ColumnDef<StaffMember>[] = [
  {
    id: "staff",
    accessorKey: "name",
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Staff" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="circle">
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-muted-foreground text-xs">{row.original.email}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "department",
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
  },
  {
    accessorKey: "designation",
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Designation" />,
  },
  {
    accessorKey: "experience",
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Experience" />,
    cell: ({ row }) => (
      <span className="tabular-nums">{row.getValue("experience")} yrs</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.getValue("status") === "active" ? "success" : "neutral"}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

export function MovableStaffTable() {
  return (
    <DataTable
      columns={columns}
      data={staffMembers}
      filterColumn="name"
      filterPlaceholder="Search staff..."
      movableColumns
    />
  )
}`,preview:K.createElement(ni)},{name:`Draggable Columns`,description:`Drag column headers to reorder them using @dnd-kit. Each header shows a grip handle that users can grab to move columns left or right.`,code:`"use client"

import React, { useMemo, useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable"
import {
  type ColumnDef,
  type Header,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { GripVertical } from "lucide-react"

type Member = {
  id: string
  name: string
  avatar: string
  email: string
  company: string
  role: string
  status: "active" | "inactive"
}

const members: Member[] = [
  { id: "1",  name: "Dr. Anika Sharma",     avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", email: "anika.sharma@ohc.in",     company: "Cardiology",       role: "Senior Consultant",    status: "active"   },
  { id: "2",  name: "Dr. Sarah Mitchell",   avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", email: "sarah.mitchell@ohc.in",   company: "Pediatrics",       role: "Consultant",           status: "inactive" },
  { id: "3",  name: "Dr. David Okafor",     avatar: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80", email: "david.okafor@ohc.in",     company: "General Surgery",  role: "Head of Department",   status: "active"   },
  { id: "4",  name: "Nurse Elena Fischer",  avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80", email: "elena.fischer@ohc.in",    company: "ICU",              role: "Senior Nurse",         status: "inactive" },
  { id: "5",  name: "Dr. Hiroshi Tanaka",   avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80", email: "hiroshi.tanaka@ohc.in",   company: "Orthopedics",      role: "Consultant",           status: "inactive" },
  { id: "6",  name: "Dr. Ravi Menon",       avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80", email: "ravi.menon@ohc.in",       company: "Neurology",        role: "Senior Consultant",    status: "active"   },
  { id: "7",  name: "Dr. Carlos Rivera",    avatar: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80", email: "carlos.rivera@ohc.in",    company: "Radiology",        role: "Consultant",           status: "inactive" },
  { id: "8",  name: "Nurse Mei Lin Wong",   avatar: "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80", email: "mei.wong@ohc.in",         company: "Maternity",        role: "Senior Nurse",         status: "inactive" },
  { id: "9",  name: "Dr. Siddharth Patel",  avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80", email: "siddharth.patel@ohc.in",  company: "Oncology",         role: "Consultant",           status: "inactive" },
  { id: "10", name: "Dr. Amara Diallo",     avatar: "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80", email: "amara.diallo@ohc.in",     company: "Dermatology",      role: "Consultant",           status: "inactive" },
  { id: "11", name: "Nurse Arun Mathew",    avatar: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=96&h=96&dpr=2&q=80", email: "arun.mathew@ohc.in",      company: "General Medicine", role: "Staff Physician",      status: "active"   },
]

const columns: ColumnDef<Member>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="circle">
          <AvatarImage src={row.original.avatar} alt={row.original.name} />
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <span className="font-medium text-sm">{row.original.name}</span>
      </div>
    ),
  },
  { id: "email",   accessorKey: "email",   header: "Email",        cell: ({ row }) => <span className="text-muted-foreground text-sm">{row.original.email}</span> },
  { id: "company", accessorKey: "company", header: "Department",   cell: ({ row }) => <span className="font-medium text-sm">{row.original.company}</span> },
  { id: "role",    accessorKey: "role",    header: "Designation",  cell: ({ row }) => <span className="text-sm">{row.original.role}</span> },
  {
    id: "status",
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) =>
      row.original.status === "active"
        ? <Badge variant="success">Active</Badge>
        : <Badge variant="warning">On Leave</Badge>,
  },
]

function SortableColumnHeader({
  header,
  transform,
  isDragging,
  noTransition,
  onRef,
}: {
  header: Header<Member, unknown>
  transform: number
  isDragging: boolean
  noTransition: boolean
  onRef: (el: HTMLElement | null) => void
}) {
  const { attributes, listeners, setNodeRef } = useSortable({ id: header.id })
  return (
    <TableHead
      ref={(el) => { setNodeRef(el); onRef(el) }}
      colSpan={header.colSpan}
      style={{
        opacity: isDragging ? 0.4 : 1,
        transform: transform !== 0 ? \`translateX(\${transform}px)\` : undefined,
        position: transform !== 0 || isDragging ? "relative" : undefined,
        zIndex: isDragging ? 10 : undefined,
        transition: (isDragging || noTransition) ? "none" : "transform 100ms ease",
      }}
    >
      <div className="flex items-center gap-1">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab touch-none text-muted-foreground/50 hover:text-muted-foreground active:cursor-grabbing"
          aria-label="Drag to reorder column"
        >
          <GripVertical className="size-3.5" />
        </button>
        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
      </div>
    </TableHead>
  )
}

export function DraggableColumnsTable() {
  const [columnOrder, setColumnOrder] = useState<string[]>(
    columns.map((c) => c.id as string)
  )
  const [activeId, setActiveId] = useState<string | null>(null)
  const [overId, setOverId] = useState<string | null>(null)
  const [activeDelta, setActiveDelta] = useState(0)
  const [noTransition, setNoTransition] = useState(false)
  const headerRefs = useRef<Record<string, HTMLElement | null>>({})

  const displacements = useMemo<Record<string, number>>(() => {
    if (!activeId || !overId) return {}
    const activeIdx = columnOrder.indexOf(activeId)
    const overIdx = columnOrder.indexOf(overId)
    if (activeIdx === overIdx) return {}
    const activeWidth = headerRefs.current[activeId]?.offsetWidth ?? 0
    const result: Record<string, number> = {}
    for (const id of columnOrder) {
      if (id === activeId) continue
      const idx = columnOrder.indexOf(id)
      if (activeIdx < overIdx && idx > activeIdx && idx <= overIdx)
        result[id] = -activeWidth
      else if (activeIdx > overIdx && idx < activeIdx && idx >= overIdx)
        result[id] = activeWidth
    }
    return result
  }, [activeId, overId, columnOrder])

  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor))

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setNoTransition(true)
    if (active && over && active.id !== over.id) {
      setColumnOrder((order) => {
        const oldIdx = order.indexOf(active.id as string)
        const newIdx = order.indexOf(over.id as string)
        return arrayMove(order, oldIdx, newIdx)
      })
    }
    setActiveId(null)
    setOverId(null)
    setActiveDelta(0)
    requestAnimationFrame(() => setNoTransition(false))
  }

  const table = useReactTable({
    data: members,
    columns,
    state: { columnOrder },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => { setActiveId(active.id as string); setOverId(active.id as string); setActiveDelta(0) }}
      onDragMove={({ delta }) => setActiveDelta(delta.x)}
      onDragOver={({ over }) => setOverId(over?.id as string ?? null)}
      onDragEnd={handleDragEnd}
      onDragCancel={() => { setNoTransition(true); setActiveId(null); setOverId(null); setActiveDelta(0); requestAnimationFrame(() => setNoTransition(false)) }}
    >
      <div className="overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3 [&_td:not(:last-child)]:border-r [&_th:not(:last-child)]:border-r">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                  {headerGroup.headers.map((header) => (
                    <SortableColumnHeader
                      key={header.id}
                      header={header}
                      transform={activeId === header.id ? activeDelta : (displacements[header.id] ?? 0)}
                      isDragging={activeId === header.id}
                      noTransition={noTransition}
                      onRef={(el) => { headerRefs.current[header.id] = el }}
                    />
                  ))}
                </SortableContext>
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const dragging = activeId === cell.column.id
                  const tx = dragging ? activeDelta : (displacements[cell.column.id] ?? 0)
                  return (
                    <TableCell
                      key={cell.id}
                      style={tx !== 0 || dragging ? {
                        transform: \`translateX(\${tx}px)\`,
                        position: "relative",
                        zIndex: dragging ? 10 : undefined,
                        opacity: dragging ? 0.6 : 1,
                        transition: (dragging || noTransition) ? "none" : "transform 100ms ease",
                      } : undefined}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DndContext>
  )
}`,preview:K.createElement(oi)},{name:`Resizable Columns`,description:'Drag the edge of any column header to resize it. Set `enableResizing: false` on a column to lock its width. Uses TanStack Table\'s built-in `columnResizeMode: "onChange"` — no extra dependencies required.',code:`"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

type Member = {
  id: string
  name: string
  avatar: string
  email: string
  company: string
  role: string
  status: "active" | "inactive"
}

const members: Member[] = [
  { id: "1",  name: "Dr. Anika Sharma",     avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", email: "anika.sharma@ohc.in",     company: "Cardiology",       role: "Senior Consultant",    status: "active"   },
  { id: "2",  name: "Dr. Sarah Mitchell",   avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", email: "sarah.mitchell@ohc.in",   company: "Pediatrics",       role: "Consultant",           status: "inactive" },
  { id: "3",  name: "Dr. David Okafor",     avatar: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80", email: "david.okafor@ohc.in",     company: "General Surgery",  role: "Head of Department",   status: "active"   },
  { id: "4",  name: "Nurse Elena Fischer",  avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80", email: "elena.fischer@ohc.in",    company: "ICU",              role: "Senior Nurse",         status: "inactive" },
  { id: "5",  name: "Dr. Hiroshi Tanaka",   avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80", email: "hiroshi.tanaka@ohc.in",   company: "Orthopedics",      role: "Consultant",           status: "inactive" },
  { id: "6",  name: "Dr. Ravi Menon",       avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80", email: "ravi.menon@ohc.in",       company: "Neurology",        role: "Senior Consultant",    status: "active"   },
  { id: "7",  name: "Dr. Carlos Rivera",    avatar: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80", email: "carlos.rivera@ohc.in",    company: "Radiology",        role: "Consultant",           status: "inactive" },
  { id: "8",  name: "Nurse Mei Lin Wong",   avatar: "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80", email: "mei.wong@ohc.in",         company: "Maternity",        role: "Senior Nurse",         status: "inactive" },
  { id: "9",  name: "Dr. Siddharth Patel",  avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80", email: "siddharth.patel@ohc.in",  company: "Oncology",         role: "Consultant",           status: "inactive" },
  { id: "10", name: "Dr. Amara Diallo",     avatar: "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80", email: "amara.diallo@ohc.in",     company: "Dermatology",      role: "Consultant",           status: "inactive" },
  { id: "11", name: "Nurse Arun Mathew",    avatar: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=96&h=96&dpr=2&q=80", email: "arun.mathew@ohc.in",      company: "General Medicine", role: "Staff Physician",      status: "active"   },
]

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const columns: ColumnDef<Member>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Staff",
    size: 280,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="circle">
          <AvatarImage src={row.original.avatar} alt={row.original.name} />
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-sm">{row.original.name}</span>
          <span className="text-muted-foreground text-xs">{row.original.email}</span>
        </div>
      </div>
    ),
  },
  {
    id: "company",
    accessorKey: "company",
    header: "Department",
    size: 160,
    cell: ({ row }) => <span className="font-medium text-sm">{row.original.company}</span>,
  },
  {
    id: "role",
    accessorKey: "role",
    header: "Designation",
    size: 160,
    cell: ({ row }) => <span className="text-sm">{row.original.role}</span>,
  },
  {
    id: "status",
    accessorKey: "status",
    header: "Status",
    size: 120,
    enableResizing: false,
    cell: ({ row }) =>
      row.original.status === "active"
        ? <Badge variant="success">Active</Badge>
        : <Badge variant="warning">On Leave</Badge>,
  },
]

export function ResizableColumnsTable() {
  const table = useReactTable({
    data: members,
    columns,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-x-auto overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3 [&_td:not(:last-child)]:border-r [&_th:not(:last-child)]:border-r">
      <Table style={{ width: table.getTotalSize() }}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  style={{ width: header.getSize() }}
                  className="relative overflow-hidden"
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={\`absolute top-0 right-0 h-full w-1 cursor-col-resize touch-none select-none transition-colors \${
                        header.column.getIsResizing() ? "bg-primary" : "bg-transparent hover:bg-border"
                      }\`}
                    />
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,preview:K.createElement(ci)},{name:`Pinnable Columns`,description:`Click the pin icon in any column header to stick it to the left edge while the rest of the table scrolls. Click the filled pin to unpin. The Name column is pinned by default. Columns are sortable and the table is paginated.`,code:`"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

type Member = {
  id: string
  name: string
  availability: "online" | "away" | "busy" | "offline"
  avatar: string
  status: "active" | "inactive"
  flag: string
  email: string
  company: string
  role: string
  joined: string
  location: string
}

const members: Member[] = [
  { id: "1",  name: "Dr. Anika Sharma",      availability: "online",  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", status: "active",   flag: "in", email: "anika.sharma@ohc.in",      company: "Cardiology",       role: "Senior Consultant",     joined: "Jan, 2024", location: "India"          },
  { id: "2",  name: "Dr. Sarah Mitchell",    availability: "away",    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", status: "inactive", flag: "gb", email: "sarah.mitchell@ohc.in",    company: "Pediatrics",       role: "Consultant",            joined: "Mar, 2023", location: "United Kingdom" },
  { id: "3",  name: "Dr. David Okafor",      availability: "busy",    avatar: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80", status: "active",   flag: "ng", email: "david.okafor@ohc.in",      company: "General Surgery",  role: "Head of Department",    joined: "Jun, 2022", location: "Nigeria"        },
  { id: "4",  name: "Nurse Elena Fischer",   availability: "offline", avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80", status: "inactive", flag: "de", email: "elena.fischer@ohc.in",     company: "ICU",              role: "Senior Nurse",          joined: "Sep, 2024", location: "Germany"        },
  { id: "5",  name: "Dr. Hiroshi Tanaka",    availability: "online",  avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80", status: "active",   flag: "jp", email: "hiroshi.tanaka@ohc.in",    company: "Orthopedics",      role: "Consultant",            joined: "Nov, 2023", location: "Japan"          },
  { id: "6",  name: "Dr. Ravi Menon",        availability: "away",    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80", status: "active",   flag: "in", email: "ravi.menon@ohc.in",        company: "Neurology",        role: "Senior Consultant",     joined: "Feb, 2022", location: "India"          },
  { id: "7",  name: "Dr. Carlos Rivera",     availability: "busy",    avatar: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80", status: "inactive", flag: "es", email: "carlos.rivera@ohc.in",     company: "Radiology",        role: "Consultant",            joined: "Aug, 2024", location: "Spain"          },
  { id: "8",  name: "Nurse Mei Lin Wong",    availability: "offline", avatar: "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80", status: "active",   flag: "sg", email: "mei.wong@ohc.in",          company: "Maternity",        role: "Senior Nurse",          joined: "Dec, 2023", location: "Singapore"      },
  { id: "9",  name: "Dr. Siddharth Patel",   availability: "online",  avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80", status: "inactive", flag: "in", email: "siddharth.patel@ohc.in",   company: "Oncology",         role: "Consultant",            joined: "Apr, 2022", location: "India"          },
  { id: "10", name: "Dr. Amara Diallo",      availability: "away",    avatar: "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80", status: "inactive", flag: "sn", email: "amara.diallo@ohc.in",      company: "Dermatology",      role: "Consultant",            joined: "Jul, 2024", location: "Senegal"        },
  { id: "11", name: "Dr. Priya Krishnan",    availability: "busy",    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", status: "active",   flag: "in", email: "priya.krishnan@ohc.in",    company: "General Medicine", role: "Staff Physician",       joined: "May, 2023", location: "India"          },
  { id: "12", name: "Nurse Rekha Thomas",    availability: "offline", avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", status: "active",   flag: "in", email: "rekha.thomas@ohc.in",      company: "Emergency",        role: "Charge Nurse",          joined: "Oct, 2024", location: "India"          },
]

const columns: ColumnDef<Member>[] = [
  {
    id: "name",
    accessorKey: "name",
    size: 220,
    enableSorting: true,
    enableHiding: false,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="size-6" shape="circle">
          <AvatarImage src={row.original.avatar} alt={row.original.name} />
          <AvatarFallback>
            {row.original.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <span className="text-foreground font-medium whitespace-nowrap">{row.original.name}</span>
      </div>
    ),
  },
  {
    id: "email",
    accessorKey: "email",
    size: 220,
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => (
      <span className="text-muted-foreground text-sm whitespace-nowrap">{row.original.email}</span>
    ),
  },
  {
    id: "location",
    accessorKey: "location",
    size: 180,
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Location" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <img
          src={\`https://flagcdn.com/\${row.original.flag.toLowerCase()}.svg\`}
          alt={row.original.flag}
          className="size-4 rounded-full object-cover"
        />
        <span className="text-foreground font-medium whitespace-nowrap">{row.original.location}</span>
      </div>
    ),
  },
  {
    id: "company",
    accessorKey: "company",
    size: 160,
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Department" />,
    cell: ({ row }) => (
      <span className="font-medium text-sm whitespace-nowrap">{row.original.company}</span>
    ),
  },
  {
    id: "role",
    accessorKey: "role",
    size: 180,
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Designation" />,
    cell: ({ row }) => (
      <span className="text-sm whitespace-nowrap">{row.original.role}</span>
    ),
  },
  {
    id: "joined",
    accessorKey: "joined",
    size: 120,
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Joined" />,
    cell: ({ row }) => (
      <span className="font-medium text-sm whitespace-nowrap">{row.original.joined}</span>
    ),
  },
  {
    id: "status",
    accessorKey: "status",
    size: 140,
    enableSorting: false,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) =>
      row.original.status === "active"
        ? <Badge variant="success">Active</Badge>
        : <Badge variant="warning">On Leave</Badge>,
  },
]

export function PinnableColumnsTable() {
  return (
    <DataTable
      columns={columns}
      data={members}
      filterColumn="name"
      filterPlaceholder="Search practitioners..."
      pinnable
      initialPinning={{ left: ["name"] }}
    />
  )
}`,preview:K.createElement(di)},{name:`Cell Border`,description:`Adds vertical borders between columns for a spreadsheet-like grid feel — useful for dense financial or clinical data tables.`,code:`"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const patientStatusVariant = {
  stable:     "success",
  admitted:   "info",
  critical:   "destructive",
  discharged: "neutral",
} as const

const columns: ColumnDef<Patient>[] = [
  {
    id: "patient",
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-muted-foreground text-xs">{row.original.id}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "ward",
    header: "Ward",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm">{row.original.ward}</span>
        <span className="text-muted-foreground text-xs">{row.original.bed}</span>
      </div>
    ),
  },
  {
    accessorKey: "diagnosis",
    header: "Diagnosis",
  },
  {
    accessorKey: "amount",
    header: "Invoice",
    meta: { className: "text-right" },
    cell: ({ row }) => (
      <span className="font-semibold tabular-nums">
        {formatINR(row.original.amount)}
      </span>
    ),
  },
]

export function CellBorderTable() {
  return (
    <DataTable
      columns={columns}
      data={patients}
      filterColumn="name"
      filterPlaceholder="Search patients..."
      cellBorder
    />
  )
}`,preview:K.createElement(pi)},{name:`Dense Table`,description:`Compact row padding for high-density clinical views like vitals logs, lab results, or medication schedules where many rows need to be visible at once.`,code:`"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const patientStatusVariant = {
  stable:     "success",
  admitted:   "info",
  critical:   "destructive",
  discharged: "neutral",
} as const

const columns: ColumnDef<Patient>[] = [
  {
    id: "patient",
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-muted-foreground text-xs">{row.original.id}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "ward",
    header: "Ward",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm">{row.original.ward}</span>
        <span className="text-muted-foreground text-xs">{row.original.bed}</span>
      </div>
    ),
  },
  { accessorKey: "diagnosis", header: "Diagnosis" },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ row }) => (
      <span className="tabular-nums text-sm">
        {row.original.age}y {row.original.gender}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={patientStatusVariant[row.getValue("status") as Patient["status"]]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

export function DensePatientTable() {
  return (
    <DataTable
      columns={columns}
      data={patients}
      filterColumn="name"
      filterPlaceholder="Search patients..."
      dense
    />
  )
}`,preview:K.createElement(hi)},{name:`Auto Width`,description:"Table columns size to their content instead of stretching to fill the container. Uses `w-auto` on the Table, avatar + name link, email, location with flag, and joined date columns with CareUI Pagination.",code:`"use client"

import { useState, useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  type ColumnDef,
  type PaginationState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

interface IData {
  id: string
  name: string
  avatar: string
  flag: string
  email: string
  location: string
  joined: string
}

const data: IData[] = [
  { id: "1", name: "Dr. Anika Sharma", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", flag: "in", email: "anika.sharma@ohc.in", location: "India", joined: "Jan, 2026" },
  { id: "2", name: "Dr. Sarah Mitchell", avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", flag: "gb", email: "sarah.mitchell@ohc.in", location: "United Kingdom", joined: "Jul, 2025" },
  { id: "3", name: "Dr. David Okafor", avatar: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80", flag: "ng", email: "david.okafor@ohc.in", location: "Nigeria", joined: "Mar, 2019" },
  { id: "4", name: "Nurse Elena Fischer", avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80", flag: "de", email: "elena.fischer@ohc.in", location: "Germany", joined: "Jan, 2024" },
  { id: "5", name: "Dr. Hiroshi Tanaka", avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80", flag: "jp", email: "hiroshi.tanaka@ohc.in", location: "Japan", joined: "May, 2023" },
  { id: "6", name: "Dr. Ravi Menon", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80", flag: "in", email: "ravi.menon@ohc.in", location: "India", joined: "Nov, 2018" },
  { id: "7", name: "Dr. Carlos Rivera", avatar: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80", flag: "es", email: "carlos.rivera@ohc.in", location: "Spain", joined: "Jun, 2021" },
  { id: "8", name: "Nurse Mei Lin Wong", avatar: "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80", flag: "sg", email: "mei.wong@ohc.in", location: "Singapore", joined: "Oct, 2020" },
  { id: "9", name: "Dr. Siddharth Patel", avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80", flag: "in", email: "siddharth.patel@ohc.in", location: "India", joined: "Sep, 2019" },
  { id: "10", name: "Dr. Amara Diallo", avatar: "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80", flag: "sn", email: "amara.diallo@ohc.in", location: "Senegal", joined: "Feb, 2023" },
  { id: "11", name: "Dr. Priya Krishnan", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", flag: "in", email: "priya.krishnan@ohc.in", location: "India", joined: "Dec, 2022" },
  { id: "12", name: "Nurse Rekha Thomas", avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", flag: "in", email: "rekha.thomas@ohc.in", location: "India", joined: "Mar, 2020" },
]

export function AutoWidthDemo() {
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 5 })
  const [sorting, setSorting] = useState<SortingState>([{ id: "name", desc: true }])

  const columns = useMemo<ColumnDef<IData>[]>(() => [
    {
      accessorKey: "name",
      header: "Name",
      size: 225,
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarImage src={row.original.avatar} alt={row.original.name} />
            <AvatarFallback>{row.original.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <a href="#" className="text-foreground hover:text-primary font-medium whitespace-nowrap">
            {row.original.name}
          </a>
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      size: 200,
      cell: ({ row }) => (
        <a href={"mailto:" + row.original.email} className="hover:text-primary hover:underline whitespace-nowrap">
          {row.original.email}
        </a>
      ),
    },
    {
      accessorKey: "location",
      header: "Location",
      size: 175,
      cell: ({ row }) => (
        <div className="flex items-center gap-1.5">
          <img
            src={"https://flagcdn.com/" + row.original.flag.toLowerCase() + ".svg"}
            alt={row.original.flag}
            className="size-4 rounded-full object-cover"
          />
          <span className="text-foreground font-medium whitespace-nowrap">{row.original.location}</span>
        </div>
      ),
    },
    {
      accessorKey: "joined",
      header: "Joined",
      size: 120,
      cell: ({ row }) => <span className="font-medium whitespace-nowrap">{row.original.joined}</span>,
    },
  ], [])

  const table = useReactTable({
    columns,
    data,
    state: { pagination, sorting },
    columnResizeMode: "onChange",
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const total = table.getFilteredRowModel().rows.length
  const start = total === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1
  const end = Math.min((pagination.pageIndex + 1) * pagination.pageSize, total)

  return (
    <div className="w-full space-y-2.5">
      <div className="w-fit overflow-x-auto rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
        <Table className="w-auto">
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id} style={{ width: h.getSize() }}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{start} - {end} of {total}</p>
        <Pagination className="w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={(e) => { e.preventDefault(); table.previousPage(); }}
                aria-disabled={!table.getCanPreviousPage()}
                className={!table.getCanPreviousPage() ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={i === table.getState().pagination.pageIndex}
                  onClick={(e) => { e.preventDefault(); table.setPageIndex(i); }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={(e) => { e.preventDefault(); table.nextPage(); }}
                aria-disabled={!table.getCanNextPage()}
                className={!table.getCanNextPage() ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}`,preview:K.createElement(vi)},{name:`Expandable Rows`,description:`Rows expand inline to reveal additional detail — clinical notes, medications, or test results — without navigating away. Add a toggle column with row.getToggleExpandedHandler() and pass renderExpandedRow to DataTable.`,code:`"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { type ColumnDef, type Row } from "@tanstack/react-table"
import { ChevronDown, ChevronUp } from "lucide-react"

type Patient = {
  id: string
  name: string
  age: number
  gender: "M" | "F"
  ward: string
  bed: string
  diagnosis: string
  status: "admitted" | "critical" | "stable" | "discharged"
  notes: string
}

const patientStatusVariant = {
  stable:     "success",
  admitted:   "info",
  critical:   "destructive",
  discharged: "neutral",
} as const

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const columns: ColumnDef<Patient>[] = [
  {
    id: "expand",
    enableHiding: false,
    meta: { className: "w-0" },
    header: () => null,
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="icon"
        className="size-7 text-muted-foreground"
        onClick={row.getToggleExpandedHandler()}
        aria-label={row.getIsExpanded() ? "Collapse row" : "Expand row"}
      >
        {row.getIsExpanded()
          ? <ChevronUp className="size-4" />
          : <ChevronDown className="size-4" />}
      </Button>
    ),
  },
  {
    id: "patient",
    accessorKey: "name",
    header: "Patient",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-muted-foreground text-xs">{row.original.id}</span>
        </div>
      </div>
    ),
  },
  {
    id: "location",
    header: "Ward / Bed",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm">{row.original.ward}</span>
        <span className="text-muted-foreground text-xs">{row.original.bed}</span>
      </div>
    ),
  },
  { accessorKey: "diagnosis", header: "Diagnosis" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={patientStatusVariant[row.getValue("status") as Patient["status"]]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

function renderExpandedRow(row: Row<Patient>) {
  return (
    <div className="flex items-start gap-2 border-t bg-muted/30 px-4 py-3">
      <span className="mt-0.5 shrink-0 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Clinical Notes:
      </span>
      <p className="text-sm text-foreground">{row.original.notes}</p>
    </div>
  )
}

export function ExpandablePatientTable() {
  return (
    <DataTable
      columns={columns}
      data={patients}
      filterColumn="name"
      filterPlaceholder="Search patients..."
      renderExpandedRow={renderExpandedRow}
    />
  )
}`,preview:K.createElement(Ci)},{name:`Sub Data Grid`,description:`Expandable rows that reveal a fully functional nested DataTable — useful for master/detail views like patient encounters with lab investigations, orders with line items, or wards with bed assignments.`,code:`"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { type ColumnDef, type Row } from "@tanstack/react-table"
import { ChevronDown, ChevronUp } from "lucide-react"

type Investigation = {
  id: string
  test: string
  category: string
  result: string
  referenceRange: string
  status: "normal" | "abnormal" | "critical"
}

type PatientEncounter = {
  id: string
  patientId: string
  patientName: string
  ward: string
  diagnosis: string
  admittedOn: string
  encounterStatus: "admitted" | "critical" | "stable" | "discharged"
  investigations: Investigation[]
}

const investigationStatusVariant = {
  normal:   "success",
  abnormal: "warning",
  critical: "destructive",
} as const

const encounterStatusVariant = {
  stable:     "success",
  admitted:   "info",
  critical:   "destructive",
  discharged: "neutral",
} as const

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const investigationColumns: ColumnDef<Investigation>[] = [
  {
    accessorKey: "test",
    header: "Test",
    cell: ({ row }) => <span className="font-medium text-sm">{row.getValue("test")}</span>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <Badge variant="neutral">{row.getValue("category")}</Badge>,
  },
  {
    accessorKey: "result",
    header: "Result",
    cell: ({ row }) => <span className="tabular-nums text-sm font-medium">{row.getValue("result")}</span>,
  },
  {
    accessorKey: "referenceRange",
    header: "Reference Range",
    cell: ({ row }) => <span className="text-muted-foreground text-sm">{row.getValue("referenceRange")}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={investigationStatusVariant[row.getValue("status") as Investigation["status"]]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

function InvestigationSubTable({ investigations }: { investigations: Investigation[] }) {
  return (
    <DataTable
      columns={investigationColumns}
      data={investigations}
      hideToolbar
    />
  )
}

const encounterColumns: ColumnDef<PatientEncounter>[] = [
  {
    id: "expand",
    enableHiding: false,
    meta: { className: "w-0" },
    header: () => null,
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="icon"
        className="size-7 text-muted-foreground"
        onClick={row.getToggleExpandedHandler()}
        aria-label={row.getIsExpanded() ? "Collapse" : "Expand"}
      >
        {row.getIsExpanded()
          ? <ChevronUp className="size-4" />
          : <ChevronDown className="size-4" />}
      </Button>
    ),
  },
  {
    id: "patient",
    accessorKey: "patientName",
    header: "Patient",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.patientName)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.patientName}</span>
          <span className="text-muted-foreground text-xs">{row.original.patientId}</span>
        </div>
      </div>
    ),
  },
  { accessorKey: "ward", header: "Ward" },
  { accessorKey: "diagnosis", header: "Diagnosis" },
  {
    accessorKey: "admittedOn",
    header: "Admitted",
    cell: ({ row }) => <span className="tabular-nums text-sm">{row.getValue("admittedOn")}</span>,
  },
  {
    id: "investigations",
    header: "Tests",
    cell: ({ row }) => (
      <Badge variant="neutral">{row.original.investigations.length} tests</Badge>
    ),
  },
  {
    accessorKey: "encounterStatus",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={encounterStatusVariant[row.getValue("encounterStatus") as PatientEncounter["encounterStatus"]]}>
        {row.getValue("encounterStatus")}
      </Badge>
    ),
  },
]

function renderInvestigationSubTable(row: Row<PatientEncounter>) {
  return (
    <div className="border-t bg-muted/20 px-4 py-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Investigations — {row.original.patientName}
      </p>
      <InvestigationSubTable investigations={row.original.investigations} />
    </div>
  )
}

export function PatientEncounterTable() {
  return (
    <DataTable
      columns={encounterColumns}
      data={patientEncounters}
      filterColumn="patientName"
      filterPlaceholder="Search patients..."
      renderExpandedRow={renderInvestigationSubTable}
    />
  )
}`,preview:K.createElement(Ai)},{name:`Footer Rows`,description:`Add summary or total rows to the bottom of the table using TanStack Table footer definitions. The footer re-computes automatically when filters change.`,code:`"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

type Invoice = {
  id: string
  patientName: string
  patientId: string
  date: string
  category: string
  amount: number
  status: "paid" | "pending" | "overdue"
}

const statusVariant = {
  paid:    "success",
  pending: "warning",
  overdue: "destructive",
} as const

const formatINR = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const columns: ColumnDef<Invoice>[] = [
  {
    id: "patient",
    accessorKey: "patientName",
    header: "Patient",
    footer: () => <span className="font-semibold">Total</span>,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.patientName)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.patientName}</span>
          <span className="text-muted-foreground text-xs">{row.original.patientId}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    footer: () => null,
  },
  {
    accessorKey: "category",
    header: "Category",
    footer: () => null,
    cell: ({ row }) => <Badge variant="neutral">{row.getValue("category")}</Badge>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    footer: ({ table }) => {
      const total = table
        .getFilteredRowModel()
        .rows.reduce((sum, row) => sum + (row.getValue("amount") as number), 0)
      return <span className="font-semibold tabular-nums">{formatINR(total)}</span>
    },
    meta: { className: "text-right" },
    cell: ({ row }) => (
      <div className="font-medium tabular-nums">{formatINR(row.getValue("amount"))}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    footer: () => null,
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.getValue("status") as Invoice["status"]]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

export function InvoiceTableWithFooter() {
  return (
    <DataTable
      columns={columns}
      data={invoices}
      filterColumn="patientName"
      filterPlaceholder="Search by patient..."
    />
  )
}`,preview:K.createElement(Mi)},{name:`Column Icons`,description:`Add a leading icon to column headers by passing an icon node to DataTableColumnHeader — useful for visually distinguishing clinical data fields at a glance.`,code:`"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DataTable, DataTableColumnHeader } from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"
import { HeartPulse, MapPin, Stethoscope, User } from "lucide-react"

const patientStatusVariant = {
  stable:     "success",
  admitted:   "info",
  critical:   "destructive",
  discharged: "neutral",
} as const

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const columns: ColumnDef<Patient>[] = [
  {
    id: "patient",
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Patient" icon={<User />} />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-muted-foreground text-xs">{row.original.id}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "ward",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ward / Bed" icon={<MapPin />} />
    ),
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm">{row.original.ward}</span>
        <span className="text-muted-foreground text-xs">{row.original.bed}</span>
      </div>
    ),
  },
  {
    accessorKey: "diagnosis",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Diagnosis" icon={<Stethoscope />} />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" icon={<HeartPulse />} />
    ),
    cell: ({ row }) => (
      <Badge variant={patientStatusVariant[row.getValue("status") as Patient["status"]]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

export function ColumnIconPatientTable() {
  return (
    <DataTable
      columns={columns}
      data={patients}
      filterColumn="name"
      filterPlaceholder="Search patients..."
    />
  )
}`,preview:K.createElement(Pi)},{name:`Row Pinning`,description:`Pin important rows to the top of the table so they stay visible while scrolling through the rest of the data. Click the pin icon on any row to toggle it. Uses TanStack Table's built-in row pinning with keepPinnedRows.`,code:`"use client"

import React, { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  type ColumnDef,
  type RowPinningState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Pin, PinOff } from "lucide-react"

type Patient = {
  id: string
  name: string
  ward: string
  diagnosis: string
  status: "admitted" | "critical" | "stable" | "discharged"
}

const patientStatusVariant = {
  stable:     "success",
  admitted:   "info",
  critical:   "destructive",
  discharged: "neutral",
} as const

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const columns: ColumnDef<Patient>[] = [
  {
    id: "pin",
    enableHiding: false,
    meta: { className: "w-0" },
    header: () => null,
    cell: ({ row }) => {
      const isPinned = row.getIsPinned() === "top"
      return (
        <Button
          variant="ghost"
          size="icon"
          className={\`size-7 \${isPinned ? "text-primary" : "text-muted-foreground"}\`}
          onClick={() => row.pin(isPinned ? false : "top")}
          aria-label={isPinned ? "Unpin row" : "Pin row to top"}
        >
          {isPinned ? <PinOff className="size-4" /> : <Pin className="size-4" />}
        </Button>
      )
    },
  },
  {
    id: "patient",
    accessorKey: "name",
    header: "Patient",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-muted-foreground text-xs">{row.original.id}</span>
        </div>
      </div>
    ),
  },
  { accessorKey: "ward", header: "Ward" },
  { accessorKey: "diagnosis", header: "Diagnosis" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={patientStatusVariant[row.getValue("status") as Patient["status"]]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

export function RowPinningTable() {
  const [rowPinning, setRowPinning] = useState<RowPinningState>({ top: [], bottom: [] })
  const [globalFilter, setGlobalFilter] = useState("")

  const table = useReactTable({
    data: patients,
    columns,
    state: { rowPinning, globalFilter },
    onRowPinningChange: setRowPinning,
    onGlobalFilterChange: setGlobalFilter,
    enableRowPinning: true,
    keepPinnedRows: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const pinnedRows = table.getTopRows()
  const unpinnedRows = table.getCenterRows()

  return (
    <div className="w-full space-y-0">
      <div className="flex items-center gap-2 py-4">
        <input
          placeholder="Search patients..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>
      <div className="overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
                  <TableHead key={header.id} className={header.column.columnDef.meta?.className}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {pinnedRows.length > 0 && pinnedRows.map((row) => (
              <TableRow key={row.id} className="bg-primary/5 font-medium sticky top-0 z-10">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className={cell.column.columnDef.meta?.className}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {unpinnedRows.length > 0 ? (
              unpinnedRows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className={cell.column.columnDef.meta?.className}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}`,preview:K.createElement(Ii)},{name:`Sticky Header`,description:"Place a raw `<table>` directly inside a single `overflow-auto` container — this div is both the scroll ancestor and the visual border. `sticky top-0` on `TableHeader` works because there is no intermediate `overflow` element between it and the scrolling container. Control the visible height by adding a `max-h-*` class to the container from wherever it is consumed.",code:`"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DataTableColumnHeader } from "@/components/ui/data-table"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table"

type Patient = {
  id: string
  name: string
  ward: string
  bed: string
  diagnosis: string
  status: "admitted" | "critical" | "stable" | "discharged"
}

const patientStatusVariant = {
  stable:     "success",
  admitted:   "info",
  critical:   "destructive",
  discharged: "neutral",
} as const

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()

const columns: ColumnDef<Patient>[] = [
  {
    id: "patient",
    accessorKey: "name",
    enableSorting: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Patient" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar shape="rounded">
          <AvatarFallback>{getInitials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-muted-foreground text-xs">{row.original.id}</span>
        </div>
      </div>
    ),
  },
  {
    id: "location",
    header: "Ward / Bed",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm">{row.original.ward}</span>
        <span className="text-muted-foreground text-xs">{row.original.bed}</span>
      </div>
    ),
  },
  { accessorKey: "diagnosis", header: "Diagnosis" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={patientStatusVariant[row.getValue("status") as Patient["status"]]}>
        {row.getValue("status")}
      </Badge>
    ),
  },
]

export function StickyHeaderTable() {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: patients,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <ScrollArea className="h-80 overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
      <table className="w-full caption-bottom text-sm">
        <TableHeader className="sticky top-0 z-10 bg-background shadow-[0_1px_0_0_var(--border)]">
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id} className="border-b-0">
              {hg.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </table>
    </ScrollArea>
  )
}`,preview:K.createElement(Gi)},{name:`Light Table`,description:`A minimal, borderless-row table with avatar + status badges, rounded hover rows, and CareUI Pagination. The entire table sits inside a bordered container for a clean card look.`,code:`"use client"

import { useState, useMemo } from "react"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  type ColumnDef,
  type PaginationState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { cn } from "@/lib/utils"

interface IData {
  id: string
  name: string
  availability: "online" | "away" | "busy" | "offline"
  avatar: string
  status: "active" | "inactive"
  flag: string
  email: string
  location: string
}

const data: IData[] = [
  { id: "1", name: "Dr. Anika Sharma", availability: "online", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", status: "active", flag: "in", email: "anika.sharma@ohc.in", location: "India" },
  { id: "2", name: "Dr. Sarah Mitchell", availability: "away", avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", status: "inactive", flag: "gb", email: "sarah.mitchell@ohc.in", location: "United Kingdom" },
  { id: "3", name: "Dr. David Okafor", availability: "busy", avatar: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80", status: "active", flag: "ng", email: "david.okafor@ohc.in", location: "Nigeria" },
  { id: "4", name: "Nurse Elena Fischer", availability: "offline", avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80", status: "inactive", flag: "de", email: "elena.fischer@ohc.in", location: "Germany" },
  { id: "5", name: "Dr. Hiroshi Tanaka", availability: "online", avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80", status: "active", flag: "jp", email: "hiroshi.tanaka@ohc.in", location: "Japan" },
  { id: "6", name: "Dr. Ravi Menon", availability: "away", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80", status: "active", flag: "in", email: "ravi.menon@ohc.in", location: "India" },
  { id: "7", name: "Dr. Carlos Rivera", availability: "busy", avatar: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80", status: "inactive", flag: "es", email: "carlos.rivera@ohc.in", location: "Spain" },
  { id: "8", name: "Nurse Mei Lin Wong", availability: "offline", avatar: "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80", status: "active", flag: "sg", email: "mei.wong@ohc.in", location: "Singapore" },
  { id: "9", name: "Dr. Siddharth Patel", availability: "online", avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80", status: "active", flag: "in", email: "siddharth.patel@ohc.in", location: "India" },
  { id: "10", name: "Dr. Amara Diallo", availability: "away", avatar: "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80", status: "inactive", flag: "sn", email: "amara.diallo@ohc.in", location: "Senegal" },
  { id: "11", name: "Dr. Priya Krishnan", availability: "busy", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", status: "active", flag: "in", email: "priya.krishnan@ohc.in", location: "India" },
  { id: "12", name: "Nurse Rekha Thomas", availability: "offline", avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", status: "active", flag: "in", email: "rekha.thomas@ohc.in", location: "India" },
]

const statusColors = { online: "bg-green-500", away: "bg-yellow-500", busy: "bg-orange-500", offline: "bg-gray-400" }

export function LightTableDemo() {
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 5 })
  const [sorting, setSorting] = useState<SortingState>([{ id: "name", desc: true }])

  const columns = useMemo<ColumnDef<IData>[]>(() => [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarImage src={row.original.avatar} alt={row.original.name} />
            <AvatarFallback>{row.original.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
            <AvatarBadge className={cn("size-1.5! p-0", statusColors[row.original.availability])} />
          </Avatar>
          <div className="space-y-px">
            <div className="text-foreground font-medium">{row.original.name}</div>
            <div className="text-muted-foreground text-xs">{row.original.email}</div>
          </div>
        </div>
      ),
      size: 225,
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => (
        <div className="flex items-center gap-1.5">
          <img src={"https://flagcdn.com/" + row.original.flag.toLowerCase() + ".svg"} alt={row.original.flag} className="size-4 rounded-full object-cover" />
          <span className="text-foreground font-medium">{row.original.location}</span>
        </div>
      ),
      size: 160,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) =>
        row.original.status === "active"
          ? <Badge variant="success">Active</Badge>
          : <Badge variant="warning">On Leave</Badge>,
      size: 100,
    },
  ], [])

  const table = useReactTable({
    columns,
    data,
    state: { pagination, sorting },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const total = table.getFilteredRowModel().rows.length
  const start = total === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1
  const end = Math.min((pagination.pageIndex + 1) * pagination.pageSize, total)

  return (
    <div className="w-full space-y-2.5">
      <div className="overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id} className="border-none hover:bg-transparent">
                {hg.headers.map((h) => (
                  <TableHead key={h.id}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="border-none">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{start} - {end} of {total}</p>
        <Pagination className="w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={(e) => { e.preventDefault(); table.previousPage(); }}
                aria-disabled={!table.getCanPreviousPage()}
                className={!table.getCanPreviousPage() ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={i === table.getState().pagination.pageIndex}
                  onClick={(e) => { e.preventDefault(); table.setPageIndex(i); }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={(e) => { e.preventDefault(); table.nextPage(); }}
                aria-disabled={!table.getCanNextPage()}
                className={!table.getCanNextPage() ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}`,preview:K.createElement(Bi)},{name:`Striped Table`,description:"Alternating row backgrounds (`even:bg-muted/50`) for easier scanning of dense data. Includes avatar, email link, country flag, and right-aligned balance column with CareUI Pagination.",code:`"use client"

import { useState, useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  type ColumnDef,
  type PaginationState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

interface IData {
  id: string
  name: string
  avatar: string
  flag: string
  email: string
  location: string
  balance: number
}

const data: IData[] = [
  { id: "1", name: "Dr. Anika Sharma", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", flag: "in", email: "anika.sharma@ohc.in", location: "India", balance: 5143.03 },
  { id: "2", name: "Dr. Sarah Mitchell", avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", flag: "gb", email: "sarah.mitchell@ohc.in", location: "United Kingdom", balance: 4321.87 },
  { id: "3", name: "Dr. David Okafor", avatar: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80", flag: "ng", email: "david.okafor@ohc.in", location: "Nigeria", balance: 7654.98 },
  { id: "4", name: "Nurse Elena Fischer", avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80", flag: "de", email: "elena.fischer@ohc.in", location: "Germany", balance: 3456.45 },
  { id: "5", name: "Dr. Hiroshi Tanaka", avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80", flag: "jp", email: "hiroshi.tanaka@ohc.in", location: "Japan", balance: 9876.54 },
  { id: "6", name: "Dr. Ravi Menon", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80", flag: "in", email: "ravi.menon@ohc.in", location: "India", balance: 6214.22 },
  { id: "7", name: "Dr. Carlos Rivera", avatar: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80", flag: "es", email: "carlos.rivera@ohc.in", location: "Spain", balance: 5321.77 },
  { id: "8", name: "Nurse Mei Lin Wong", avatar: "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80", flag: "sg", email: "mei.wong@ohc.in", location: "Singapore", balance: 8452.39 },
  { id: "9", name: "Dr. Siddharth Patel", avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80", flag: "in", email: "siddharth.patel@ohc.in", location: "India", balance: 7345.10 },
  { id: "10", name: "Dr. Amara Diallo", avatar: "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80", flag: "sn", email: "amara.diallo@ohc.in", location: "Senegal", balance: 5214.88 },
  { id: "11", name: "Dr. Priya Krishnan", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", flag: "in", email: "priya.krishnan@ohc.in", location: "India", balance: 9421.50 },
  { id: "12", name: "Nurse Rekha Thomas", avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", flag: "in", email: "rekha.thomas@ohc.in", location: "India", balance: 4521.67 },
]

export function StripedTableDemo() {
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 5 })
  const [sorting, setSorting] = useState<SortingState>([{ id: "name", desc: true }])

  const columns = useMemo<ColumnDef<IData>[]>(() => [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarImage src={row.original.avatar} alt={row.original.name} />
            <AvatarFallback>{row.original.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <span className="text-foreground font-medium">{row.original.name}</span>
        </div>
      ),
      size: 175,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <a href={"mailto:" + row.original.email} className="hover:text-primary hover:underline">
          {row.original.email}
        </a>
      ),
      size: 180,
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => (
        <div className="flex items-center gap-1.5">
          <img
            src={"https://flagcdn.com/" + row.original.flag.toLowerCase() + ".svg"}
            alt={row.original.flag}
            className="size-4 rounded-full object-cover"
          />
          <span className="text-foreground font-medium">{row.original.location}</span>
        </div>
      ),
      size: 170,
    },
    {
      accessorKey: "balance",
      header: () => <div className="text-right">Balance ($)</div>,
      cell: ({ row }) => (
        <span className="font-semibold">{"$"}{(row.original.balance).toFixed(2)}</span>
      ),
      size: 120,
      meta: { className: "text-right" },
    },
  ], [])

  const table = useReactTable({
    columns,
    data,
    state: { pagination, sorting },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const total = table.getFilteredRowModel().rows.length
  const start = total === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1
  const end = Math.min((pagination.pageIndex + 1) * pagination.pageSize, total)

  return (
    <div className="w-full space-y-2.5">
      <div className="overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="even:bg-muted/50">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{start} - {end} of {total}</p>
        <Pagination className="w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={(e) => { e.preventDefault(); table.previousPage(); }}
                aria-disabled={!table.getCanPreviousPage()}
                className={!table.getCanPreviousPage() ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={i === table.getState().pagination.pageIndex}
                  onClick={(e) => { e.preventDefault(); table.setPageIndex(i); }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={(e) => { e.preventDefault(); table.nextPage(); }}
                aria-disabled={!table.getCanNextPage()}
                className={!table.getCanNextPage() ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}`,preview:K.createElement(Ui)},{name:`Row Selection`,description:`Enable row selection with checkboxes using TanStack Table's built-in selection API. Each row tracks its selected state via rowSelection, with a header checkbox for select-all and per-row checkboxes.`,code:`"use client"

import { useEffect, useMemo, useState } from "react"
import {
  type ColumnDef,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface IData {
  id: string
  name: string
  availability: "online" | "away" | "busy" | "offline"
  avatar: string
  flag: string
  email: string
  location: string
  joined: string
}

const availabilityColor: Record<string, string> = {
  online: "bg-green-500",
  away: "bg-yellow-500",
  busy: "bg-orange-500",
  offline: "bg-gray-400",
}

export function RowSelectionDemo() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: true },
  ])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={
              !table.getIsAllPageRowsSelected() &&
              table.getIsSomePageRowsSelected()
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        size: 20,
      },
      {
        accessorKey: "name",
        id: "name",
        header: "Name",
        size: 200,
        enableSorting: true,
        cell: ({ row }) => {
          const availability = row.original.availability

          return (
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarImage src={row.original.avatar} alt={row.original.name} />
                <AvatarFallback>
                  {row.original.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
                <AvatarBadge
                  className={\`size-1.5! p-0 \${availabilityColor[availability] || availabilityColor.offline}\`}
                />
              </Avatar>
              <div className="space-y-px">
                <div className="text-foreground font-medium">{row.original.name}</div>
                <div className="text-muted-foreground">{row.original.email}</div>
              </div>
            </div>
          )
        },
      },
      {
        accessorKey: "location",
        header: "Location",
        size: 180,
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5">
            <img
              src={\`https://flagcdn.com/\${row.original.flag.toLowerCase()}.svg\`}
              alt={row.original.flag}
              className="size-4 rounded-full object-cover"
            />
            <div className="text-foreground font-medium">{row.original.location}</div>
          </div>
        ),
      },
      {
        accessorKey: "joined",
        header: "Joined",
        size: 120,
        cell: (info) => <span className="font-medium">{info.getValue() as string}</span>,
      },
    ],
    []
  )

  const table = useReactTable({
    columns,
    data: demoData,
    getRowId: (row: IData) => row.id,
    state: { pagination, sorting, rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const total = table.getFilteredRowModel().rows.length
  const start = total === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1
  const end = Math.min((pagination.pageIndex + 1) * pagination.pageSize, total)

  return (
    <div className="w-full space-y-2.5">
      <div className="overflow-hidden rounded-md border [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id} style={{ width: h.getSize() }}>
                    {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() ? "selected" : undefined}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{start} - {end} of {total}</p>
        <Pagination className="w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={(e) => { e.preventDefault(); table.previousPage() }}
                aria-disabled={!table.getCanPreviousPage()}
                className={!table.getCanPreviousPage() ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={i === table.getState().pagination.pageIndex}
                  onClick={(e) => { e.preventDefault(); table.setPageIndex(i) }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={(e) => { e.preventDefault(); table.nextPage() }}
                aria-disabled={!table.getCanNextPage()}
                className={!table.getCanNextPage() ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}`,preview:K.createElement(yi)},{name:`Card Container`,description:`Wrap a data table inside a Card component with a header, action button, and footer pagination for a self-contained panel layout.`,code:`"use client"

import { useMemo, useState } from "react"
import {
  type ColumnDef,
  type PaginationState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTableColumnHeader } from "@/components/ui/data-table"
import { UserPlus } from "lucide-react"

interface IData {
  id: string
  name: string
  avatar: string
  flag: string
  email: string
  location: string
  joined: string
}

export function CardContainerDemo() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: true },
  ])

  const columns = useMemo<ColumnDef<IData>[]>(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Practitioner" />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarImage src={row.original.avatar} alt={row.original.name} />
              <AvatarFallback>
                {row.original.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-px">
              <div className="text-foreground font-medium">{row.original.name}</div>
              <div className="text-muted-foreground">{row.original.email}</div>
            </div>
          </div>
        ),
        size: 480,
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: "location",
        id: "location",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Location" />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5">
            <img
              src={\`https://flagcdn.com/\${row.original.flag.toLowerCase()}.svg\`}
              alt={row.original.flag}
              className="size-4 rounded-full object-cover"
            />
            <div className="text-foreground font-medium">{row.original.location}</div>
          </div>
        ),
        size: 360,
        enableSorting: true,
      },
      {
        accessorKey: "joined",
        id: "joined",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Joined" />
        ),
        cell: ({ row }) => (
          <span className="font-medium">{row.original.joined}</span>
        ),
        size: 200,
        enableSorting: true,
      },
    ],
    []
  )

  const table = useReactTable({
    columns,
    data: demoData,
    state: { pagination, sorting },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const total = table.getFilteredRowModel().rows.length
  const start = total === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1
  const end = Math.min((pagination.pageIndex + 1) * pagination.pageSize, total)

  return (
    <Card className="w-full gap-3 py-3.5">
      <CardHeader className="flex items-center justify-between px-3.5">
        <CardTitle>Users</CardTitle>
        <CardAction>
          <Button size="sm">
            <UserPlus aria-hidden="true" />
            Add User
          </Button>
        </CardAction>
      </CardHeader>
      <div className="overflow-hidden w-full border-y [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id} style={{ width: h.getSize() }}>
                    {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <CardFooter className="border-none bg-transparent! px-3.5 py-0">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm text-muted-foreground">{start} - {end} of {total}</p>
          <Pagination className="w-auto mx-0">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={(e) => { e.preventDefault(); table.previousPage() }}
                  aria-disabled={!table.getCanPreviousPage()}
                  className={!table.getCanPreviousPage() ? "pointer-events-none opacity-50" : undefined}
                />
              </PaginationItem>
              {Array.from({ length: table.getPageCount() }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={i === table.getState().pagination.pageIndex}
                    onClick={(e) => { e.preventDefault(); table.setPageIndex(i) }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={(e) => { e.preventDefault(); table.nextPage() }}
                  aria-disabled={!table.getCanNextPage()}
                  className={!table.getCanNextPage() ? "pointer-events-none opacity-50" : undefined}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardFooter>
    </Card>
  )
}`,preview:K.createElement(qi)},{name:`Column Visibility`,description:`Toggle column visibility from a dropdown in the card header. The User column is always visible (enableHiding: false). Click the Columns button to show or hide Location, Joined, and Status columns.`,code:`"use client"

import { useState, useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTableColumnHeader } from "@/components/ui/data-table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  type ColumnDef,
  type PaginationState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Settings2 } from "lucide-react"

interface Member {
  id: string
  name: string
  avatar: string
  flag: string
  email: string
  location: string
  joined: string
  status: "active" | "inactive"
}

const members: Member[] = [
  { id: "1",  name: "Dr. Anika Sharma",      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", flag: "in", email: "anika.sharma@ohc.in",     location: "India",          joined: "Apr, 2021", status: "active"   },
  { id: "2",  name: "Dr. Sarah Mitchell",    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", flag: "gb", email: "sarah.mitchell@ohc.in",   location: "United Kingdom", joined: "Jul, 2020", status: "inactive" },
  { id: "3",  name: "Dr. David Okafor",      avatar: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80", flag: "ng", email: "david.okafor@ohc.in",     location: "Nigeria",        joined: "Mar, 2019", status: "active"   },
  { id: "4",  name: "Nurse Elena Fischer",   avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80", flag: "de", email: "elena.fischer@ohc.in",    location: "Germany",        joined: "Jan, 2022", status: "inactive" },
  { id: "5",  name: "Dr. Hiroshi Tanaka",    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80", flag: "jp", email: "hiroshi.tanaka@ohc.in",   location: "Japan",          joined: "May, 2023", status: "active"   },
  { id: "6",  name: "Dr. Ravi Menon",        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80", flag: "in", email: "ravi.menon@ohc.in",       location: "India",          joined: "Nov, 2018", status: "active"   },
  { id: "7",  name: "Dr. Carlos Rivera",     avatar: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80", flag: "es", email: "carlos.rivera@ohc.in",    location: "Spain",          joined: "Jun, 2021", status: "inactive" },
  { id: "8",  name: "Nurse Mei Lin Wong",    avatar: "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80", flag: "sg", email: "mei.wong@ohc.in",         location: "Singapore",      joined: "Oct, 2020", status: "active"   },
  { id: "9",  name: "Dr. Siddharth Patel",   avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80", flag: "in", email: "siddharth.patel@ohc.in",  location: "India",          joined: "Sep, 2019", status: "active"   },
  { id: "10", name: "Dr. Amara Diallo",      avatar: "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80", flag: "sn", email: "amara.diallo@ohc.in",     location: "Senegal",        joined: "Feb, 2023", status: "inactive" },
  { id: "11", name: "Dr. Priya Krishnan",    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", flag: "in", email: "priya.krishnan@ohc.in",   location: "India",          joined: "Dec, 2022", status: "active"   },
  { id: "12", name: "Nurse Rekha Thomas",    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", flag: "in", email: "rekha.thomas@ohc.in",     location: "India",          joined: "Mar, 2020", status: "active"   },
]

export function ColumnVisibilityTable() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: true },
  ])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  const columns = useMemo<ColumnDef<Member>[]>(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Practitioner" />
        ),
        size: 200,
        enableSorting: true,
        enableHiding: false,
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarImage src={row.original.avatar} alt={row.original.name} />
              <AvatarFallback>
                {row.original.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-px">
              <div className="text-foreground font-medium">{row.original.name}</div>
              <div className="text-muted-foreground">{row.original.email}</div>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "location",
        id: "location",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Location" />
        ),
        size: 160,
        enableSorting: true,
        enableHiding: true,
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5">
            <img
              src={\`https://flagcdn.com/\${row.original.flag.toLowerCase()}.svg\`}
              alt={row.original.flag}
              className="size-4 rounded-full object-cover"
            />
            <div className="text-foreground font-medium">{row.original.location}</div>
          </div>
        ),
      },
      {
        accessorKey: "joined",
        id: "joined",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Joined" />
        ),
        size: 120,
        enableSorting: true,
        enableHiding: true,
        cell: ({ row }) => (
          <span className="font-medium">{row.original.joined}</span>
        ),
      },
      {
        accessorKey: "status",
        id: "status",
        header: "Status",
        size: 100,
        enableSorting: true,
        enableHiding: true,
        cell: ({ row }) =>
          row.original.status === "active"
            ? <Badge variant="success">Active</Badge>
            : <Badge variant="warning">On Leave</Badge>,
      },
    ],
    []
  )

  const table = useReactTable({
    columns,
    data: members,
    getRowId: (row) => row.id,
    state: { pagination, sorting, columnVisibility },
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const total = table.getFilteredRowModel().rows.length
  const start = total === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1
  const end = Math.min((pagination.pageIndex + 1) * pagination.pageSize, total)

  return (
    <Card className="w-full gap-3 py-3.5">
      <CardHeader className="flex items-center justify-between px-3.5">
        <CardTitle>Users</CardTitle>
        <CardAction>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="shadow-sm">
                <Settings2 aria-hidden />
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <div className="overflow-hidden w-full border-y [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id} style={{ width: h.getSize() }}>
                    {h.isPlaceholder
                      ? null
                      : flexRender(h.column.columnDef.header, h.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <CardFooter className="border-none bg-transparent! px-3.5 py-0">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {\`\${start} - \${end} of \${total}\`}
          </p>
          <Pagination className="w-auto mx-0">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={(e) => { e.preventDefault(); table.previousPage() }}
                  aria-disabled={!table.getCanPreviousPage()}
                  className={
                    !table.getCanPreviousPage()
                      ? "pointer-events-none opacity-50"
                      : undefined
                  }
                />
              </PaginationItem>
              {Array.from({ length: table.getPageCount() }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={i === table.getState().pagination.pageIndex}
                    onClick={(e) => { e.preventDefault(); table.setPageIndex(i) }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={(e) => { e.preventDefault(); table.nextPage() }}
                  aria-disabled={!table.getCanNextPage()}
                  className={
                    !table.getCanNextPage()
                      ? "pointer-events-none opacity-50"
                      : undefined
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardFooter>
    </Card>
  )
}`,preview:K.createElement(Yi)},{name:`Loading Skeleton`,description:`Shows animated skeleton placeholders while data is loading. Each column defines its own skeleton shape via column meta. Click the toggle button to switch between loading and loaded states.`,code:`"use client"

import { useState, useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTableColumnHeader } from "@/components/ui/data-table"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  type ColumnDef,
  type PaginationState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

interface Member {
  id: string
  name: string
  avatar: string
  email: string
  status: "active" | "inactive"
}

const members: Member[] = [
  { id: "1",  name: "Dr. Anika Sharma",      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", email: "anika.sharma@ohc.in",     status: "active"   },
  { id: "2",  name: "Dr. Sarah Mitchell",    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", email: "sarah.mitchell@ohc.in",   status: "inactive" },
  { id: "3",  name: "Dr. David Okafor",      avatar: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80", email: "david.okafor@ohc.in",     status: "active"   },
  { id: "4",  name: "Nurse Elena Fischer",   avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80", email: "elena.fischer@ohc.in",    status: "inactive" },
  { id: "5",  name: "Dr. Hiroshi Tanaka",    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80", email: "hiroshi.tanaka@ohc.in",   status: "active"   },
  { id: "6",  name: "Dr. Ravi Menon",        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80", email: "ravi.menon@ohc.in",       status: "active"   },
  { id: "7",  name: "Dr. Carlos Rivera",     avatar: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80", email: "carlos.rivera@ohc.in",    status: "inactive" },
  { id: "8",  name: "Nurse Mei Lin Wong",    avatar: "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80", email: "mei.wong@ohc.in",         status: "active"   },
  { id: "9",  name: "Dr. Siddharth Patel",   avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80", email: "siddharth.patel@ohc.in",  status: "active"   },
  { id: "10", name: "Dr. Amara Diallo",      avatar: "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80", email: "amara.diallo@ohc.in",     status: "inactive" },
  { id: "11", name: "Dr. Priya Krishnan",    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", email: "priya.krishnan@ohc.in",   status: "active"   },
  { id: "12", name: "Nurse Rekha Thomas",    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", email: "rekha.thomas@ohc.in",     status: "active"   },
]

export function LoadingSkeletonTable() {
  const [isLoading, setIsLoading] = useState(true)
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: true },
  ])

  const columns = useMemo<ColumnDef<Member>[]>(
    () => [
      {
        accessorKey: "name",
        id: "name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Practitioner" />
        ),
        size: 200,
        enableSorting: true,
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarImage src={row.original.avatar} alt={row.original.name} />
              <AvatarFallback>
                {row.original.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-px">
              <div className="text-foreground font-medium">{row.original.name}</div>
              <div className="text-muted-foreground">{row.original.email}</div>
            </div>
          </div>
        ),
        meta: {
          skeleton: (
            <div className="flex items-center gap-3">
              <Skeleton className="size-8 rounded-full" />
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3.5 w-16" />
              </div>
            </div>
          ),
        },
      },
      {
        accessorKey: "email",
        id: "email",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Email" />
        ),
        size: 150,
        enableSorting: true,
        cell: ({ row }) => (
          <span className="text-muted-foreground">{row.original.email}</span>
        ),
        meta: {
          skeleton: <Skeleton className="h-4 w-28" />,
        },
      },
      {
        accessorKey: "status",
        id: "status",
        header: "Status",
        size: 100,
        cell: ({ row }) =>
          row.original.status === "active"
            ? <Badge variant="success">Active</Badge>
            : <Badge variant="warning">On Leave</Badge>,
        meta: {
          skeleton: <Skeleton className="h-5 w-16 rounded-full" />,
        },
      },
    ],
    []
  )

  const table = useReactTable({
    columns,
    data: members,
    getRowId: (row) => row.id,
    state: { pagination, sorting },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const total = table.getFilteredRowModel().rows.length
  const start = total === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1
  const end = Math.min((pagination.pageIndex + 1) * pagination.pageSize, total)
  const skeletonRows = Array.from({ length: pagination.pageSize })

  return (
    <Card className="w-full gap-3 py-3.5">
      <CardHeader className="flex items-center justify-between px-3.5">
        <CardTitle>Practitioners</CardTitle>
        <CardAction>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLoading((p) => !p)}
          >
            {isLoading ? "Disable Loading" : "Enable Loading"}
          </Button>
        </CardAction>
      </CardHeader>
      <div className="overflow-hidden w-full border-y [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id} style={{ width: h.getSize() }}>
                    {h.isPlaceholder
                      ? null
                      : flexRender(h.column.columnDef.header, h.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading
              ? skeletonRows.map((_, i) => (
                  <TableRow key={\`skeleton-\${i}\`}>
                    {table.getAllLeafColumns().map((col) => (
                      <TableCell key={col.id} style={{ width: col.getSize() }}>
                        {(col.columnDef.meta as any)?.skeleton ?? (
                          <Skeleton className="h-4 w-full" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        style={{ width: cell.column.getSize() }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
      <CardFooter className="border-none bg-transparent! px-3.5 py-0">
        <div className="flex w-full items-center justify-between">
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-32" />
              <div className="flex gap-1">
                <Skeleton className="size-8 rounded-md" />
                <Skeleton className="size-8 rounded-md" />
                <Skeleton className="size-8 rounded-md" />
                <Skeleton className="size-8 rounded-md" />
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-muted-foreground">
                {\`\${start} - \${end} of \${total}\`}
              </p>
              <Pagination className="w-auto mx-0">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={(e) => {
                        e.preventDefault()
                        table.previousPage()
                      }}
                      aria-disabled={!table.getCanPreviousPage()}
                      className={
                        !table.getCanPreviousPage()
                          ? "pointer-events-none opacity-50"
                          : undefined
                      }
                    />
                  </PaginationItem>
                  {Array.from({ length: table.getPageCount() }, (_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        isActive={
                          i === table.getState().pagination.pageIndex
                        }
                        onClick={(e) => {
                          e.preventDefault()
                          table.setPageIndex(i)
                        }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={(e) => {
                        e.preventDefault()
                        table.nextPage()
                      }}
                      aria-disabled={!table.getCanNextPage()}
                      className={
                        !table.getCanNextPage()
                          ? "pointer-events-none opacity-50"
                          : undefined
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}`,preview:K.createElement(Zi)},{name:`CRUD Table`,description:`Full-featured CRUD table with search, status filter popover, row selection, sortable columns, row actions dropdown (edit, copy ID, delete), and pagination. Demonstrates a real-world data management pattern.`,code:`"use client"

import { useMemo, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/ui/data-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  type ColumnDef,
  type PaginationState,
  type Row,
  type RowSelectionState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Filter,
  MoreHorizontal,
  Search,
  UserPlus,
  X,
} from "lucide-react"
import { toast } from "sonner"

interface Member {
  id: string
  name: string
  avatar: string
  status: "Active" | "Inactive" | "Pending" | "Blocked"
  flag: string
  email: string
  role: string
  joined: string
  location: string
}

const data: Member[] = [
  { id: "1",  name: "Dr. Anika Sharma",      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", status: "Active",   flag: "in", email: "anika.sharma@ohc.in",     role: "Senior Consultant",     joined: "Jan, 2024", location: "India" },
  { id: "2",  name: "Dr. Sarah Mitchell",    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", status: "Inactive", flag: "gb", email: "sarah.mitchell@ohc.in",   role: "Consultant",            joined: "Mar, 2023", location: "United Kingdom" },
  { id: "3",  name: "Dr. David Okafor",      avatar: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80", status: "Blocked",  flag: "ng", email: "david.okafor@ohc.in",     role: "Head of Department",    joined: "Jun, 2022", location: "Nigeria" },
  { id: "4",  name: "Nurse Elena Fischer",   avatar: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80", status: "Inactive", flag: "de", email: "elena.fischer@ohc.in",    role: "Senior Nurse",          joined: "Sep, 2024", location: "Germany" },
  { id: "5",  name: "Dr. Hiroshi Tanaka",    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80", status: "Active",   flag: "jp", email: "hiroshi.tanaka@ohc.in",   role: "Consultant",            joined: "Nov, 2023", location: "Japan" },
  { id: "6",  name: "Dr. Ravi Menon",        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80", status: "Pending",  flag: "in", email: "ravi.menon@ohc.in",       role: "Senior Consultant",     joined: "Feb, 2022", location: "India" },
  { id: "7",  name: "Dr. Carlos Rivera",     avatar: "https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80", status: "Inactive", flag: "es", email: "carlos.rivera@ohc.in",    role: "Consultant",            joined: "Aug, 2024", location: "Spain" },
  { id: "8",  name: "Nurse Mei Lin Wong",    avatar: "https://images.unsplash.com/photo-1620075225255-8c2051b6c015?w=96&h=96&dpr=2&q=80", status: "Blocked",  flag: "sg", email: "mei.wong@ohc.in",         role: "Senior Nurse",          joined: "Dec, 2023", location: "Singapore" },
  { id: "9",  name: "Dr. Siddharth Patel",   avatar: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80", status: "Pending",  flag: "in", email: "siddharth.patel@ohc.in",  role: "Consultant",            joined: "Apr, 2022", location: "India" },
  { id: "10", name: "Dr. Amara Diallo",      avatar: "https://images.unsplash.com/photo-1542595913-85d69b0edbaf?w=96&h=96&dpr=2&q=80", status: "Inactive", flag: "sn", email: "amara.diallo@ohc.in",     role: "Consultant",            joined: "Jul, 2024", location: "Senegal" },
  { id: "11", name: "Dr. Priya Krishnan",    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80", status: "Blocked",  flag: "in", email: "priya.krishnan@ohc.in",   role: "Staff Physician",       joined: "May, 2023", location: "India" },
  { id: "12", name: "Nurse Rekha Thomas",    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80", status: "Active",   flag: "in", email: "rekha.thomas@ohc.in",     role: "Charge Nurse",          joined: "Oct, 2024", location: "India" },
]

function ActionsCell({ row }: { row: Row<Member> }) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="size-7 shadow-sm" size="icon" variant="ghost">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start">
        <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(row.original.id)
            toast.success("Practitioner ID copied", {
              description: row.original.id,
            })
          }}
        >
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => {}}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function CrudTable() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: true },
  ])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesStatus =
        !selectedStatuses.length || selectedStatuses.includes(item.status)
      const searchLower = searchQuery.toLowerCase()
      const matchesSearch =
        !searchQuery ||
        Object.values(item).join(" ").toLowerCase().includes(searchLower)
      return matchesStatus && matchesSearch
    })
  }, [searchQuery, selectedStatuses])

  const statusCounts = useMemo(() => {
    return data.reduce(
      (acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
  }, [])

  const handleStatusChange = (checked: boolean, value: string) => {
    setSelectedStatuses((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    )
  }

  const columns = useMemo<ColumnDef<Member>[]>(
    () => [
      {
        accessorKey: "id",
        id: "id",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={
              !table.getIsAllPageRowsSelected() &&
              table.getIsSomePageRowsSelected()
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        size: 35,
      },
      {
        accessorKey: "name",
        id: "name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Practitioner" />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarImage
                src={row.original.avatar}
                alt={row.original.name}
              />
              <AvatarFallback>
                {row.original.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-px">
              <div className="text-foreground font-medium">
                {row.original.name}
              </div>
              <div className="text-muted-foreground">
                {row.original.email}
              </div>
            </div>
          </div>
        ),
        size: 200,
        enableSorting: true,
      },
      {
        accessorKey: "location",
        id: "location",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Location" />
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5">
            <img
              src={\`https://flagcdn.com/\${row.original.flag.toLowerCase()}.svg\`}
              alt={row.original.flag}
              className="size-4 rounded-full object-cover"
            />
            <div className="text-foreground font-medium">
              {row.original.location}
            </div>
          </div>
        ),
        size: 150,
        enableSorting: true,
      },
      {
        accessorKey: "role",
        id: "role",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Designation" />
        ),
        cell: ({ row }) => (
          <div className="text-foreground font-medium">
            {row.original.role}
          </div>
        ),
        size: 150,
        enableSorting: true,
      },
      {
        accessorKey: "joined",
        id: "joined",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Joined" />
        ),
        cell: ({ row }) => (
          <div className="text-foreground font-medium">
            {row.original.joined}
          </div>
        ),
        size: 150,
        enableSorting: true,
      },
      {
        accessorKey: "status",
        id: "status",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
          const status = row.original.status
          if (status === "Active")
            return <Badge variant="success">Active</Badge>
          if (status === "Blocked")
            return <Badge variant="destructive">Blocked</Badge>
          if (status === "Inactive")
            return <Badge variant="info">Inactive</Badge>
          return <Badge variant="warning">On Leave</Badge>
        },
        size: 100,
        enableSorting: true,
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => <ActionsCell row={row} />,
        size: 60,
        enableSorting: false,
      },
    ],
    []
  )

  const table = useReactTable({
    columns,
    data: filteredData,
    getRowId: (row) => row.id,
    state: { pagination, sorting, rowSelection },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const total = table.getFilteredRowModel().rows.length
  const start = total === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1
  const end = Math.min(
    (pagination.pageIndex + 1) * pagination.pageSize,
    total
  )

  return (
    <Card className="w-full gap-3 py-0">
      <CardHeader className="flex items-center justify-between px-3.5 py-2">
        <div className="flex items-center gap-2.5">
          <InputGroup className="w-48">
            <InputGroupAddon align="inline-start">
              <Search />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.length > 0 && (
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  aria-label="Clear"
                  size="icon-xs"
                  onClick={() => setSearchQuery("")}
                >
                  <X />
                </InputGroupButton>
              </InputGroupAddon>
            )}
          </InputGroup>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Filter />
                Status
                {selectedStatuses.length > 0 && (
                  <Badge size="sm" variant="info">
                    {selectedStatuses.length}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40" align="start">
              <div className="space-y-3">
                <div className="text-muted-foreground text-xs font-medium">
                  Filters
                </div>
                <div className="space-y-3">
                  {Object.keys(statusCounts).map((status) => (
                    <div
                      key={status}
                      className="flex items-center gap-2.5"
                    >
                      <Checkbox
                        id={status}
                        checked={selectedStatuses.includes(status)}
                        onCheckedChange={(checked) =>
                          handleStatusChange(checked === true, status)
                        }
                      />
                      <Label
                        htmlFor={status}
                        className="flex grow items-center justify-between gap-1.5 font-normal"
                      >
                        {status}
                        <span className="text-muted-foreground">
                          {statusCounts[status]}
                        </span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <CardAction>
          <Button>
            <UserPlus />
            Add new
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="overflow-hidden border-y px-0 [&_th:first-child:not(:has([data-slot=checkbox])):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-1 [&_th:not(:first-child):is(:has([data-slot=button]),:has([data-slot=dropdown-menu-trigger]))_:is([data-slot=button],[data-slot=dropdown-menu-trigger])]:-ms-3">
        <ScrollArea orientation="horizontal">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((hg) => (
                <TableRow key={hg.id}>
                  {hg.headers.map((h) => (
                    <TableHead key={h.id} style={{ width: h.getSize() }}>
                      {h.isPlaceholder
                        ? null
                        : flexRender(
                            h.column.columnDef.header,
                            h.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{ width: cell.column.getSize() }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-none bg-transparent! px-3.5 py-2">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {\`\${start} - \${end} of \${total}\`}
          </p>
          <Pagination className="w-auto mx-0">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={(e) => {
                    e.preventDefault()
                    table.previousPage()
                  }}
                  aria-disabled={!table.getCanPreviousPage()}
                  className={
                    !table.getCanPreviousPage()
                      ? "pointer-events-none opacity-50"
                      : undefined
                  }
                />
              </PaginationItem>
              {Array.from({ length: table.getPageCount() }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={
                      i === table.getState().pagination.pageIndex
                    }
                    onClick={(e) => {
                      e.preventDefault()
                      table.setPageIndex(i)
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={(e) => {
                    e.preventDefault()
                    table.nextPage()
                  }}
                  aria-disabled={!table.getCanNextPage()}
                  className={
                    !table.getCanNextPage()
                      ? "pointer-events-none opacity-50"
                      : undefined
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardFooter>
    </Card>
  )
}`,preview:K.createElement(ea)},{name:`Footer Totals`,description:`Employee balance table with row selection, sortable columns, row actions, and a footer row that auto-computes the total of the balance column across filtered rows.`,code:`"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DataTable,
  DataTableColumnHeader,
  DataTableRowActions,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

interface Employee {
  id: string
  name: string
  avatar: string
  role: string
  status: "Active" | "Inactive" | "Pending" | "Blocked"
  balance: number
}

const employees: Employee[] = [
  { id: "1",  name: "Dr. Anika Sharma",     avatar: "…", role: "Senior Consultant",   status: "Active",   balance: 5143.03 },
  { id: "2",  name: "Dr. Sarah Mitchell",   avatar: "…", role: "Consultant",          status: "Inactive", balance: 4321.87 },
  { id: "3",  name: "Dr. David Okafor",     avatar: "…", role: "Head of Department",  status: "Blocked",  balance: 7654.98 },
  { id: "4",  name: "Nurse Elena Fischer",  avatar: "…", role: "Senior Nurse",        status: "Inactive", balance: 3456.45 },
  { id: "5",  name: "Dr. Hiroshi Tanaka",   avatar: "…", role: "Consultant",          status: "Active",   balance: 9876.54 },
  // ...
]

const statusVariant = {
  Active:   "success",
  Blocked:  "destructive",
  Inactive: "info",
  Pending:  "warning",
} as const

const formatUSD = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2 })

const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={!table.getIsAllPageRowsSelected() && table.getIsSomePageRowsSelected()}
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(v) => row.toggleSelected(!!v)}
        aria-label="Select row"
      />
    ),
    footer: () => null,
    enableSorting: false,
    enableHiding: false,
    size: 35,
  },
  {
    id: "name",
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Practitioner" />,
    footer: () => <span className="text-muted-foreground text-xs">Total balance</span>,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarImage src={row.original.avatar} alt={row.original.name} />
          <AvatarFallback>{row.original.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
        </Avatar>
        <span className="text-foreground font-medium">{row.original.name}</span>
      </div>
    ),
    size: 200,
    enableSorting: true,
  },
  {
    id: "role",
    accessorKey: "role",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Designation" />,
    footer: () => null,
    cell: ({ row }) => <span className="text-foreground font-medium">{row.original.role}</span>,
    size: 150,
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    footer: () => null,
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>{row.original.status}</Badge>
    ),
    size: 110,
  },
  {
    id: "balance",
    accessorKey: "balance",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Balance" />,
    footer: ({ table }) => {
      const total = table.getFilteredRowModel().rows.reduce(
        (sum, row) => sum + (row.getValue("balance") as number), 0
      )
      return <span className="font-bold tabular-nums">{formatUSD(total)}</span>
    },
    cell: ({ row }) => (
      <span className="text-foreground font-medium tabular-nums">
        {formatUSD(row.original.balance)}
      </span>
    ),
    size: 130,
  },
  {
    id: "actions",
    enableHiding: false,
    footer: () => null,
    cell: ({ row }) => (
      <DataTableRowActions>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.id)}>
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
      </DataTableRowActions>
    ),
  },
]

export function EmployeeBalancesTable() {
  return (
    <DataTable
      columns={columns}
      data={employees}
      filterColumn="name"
      filterPlaceholder="Search practitioners..."
    />
  )
}`,preview:K.createElement(aa)},{name:`Footer Summary`,description:`Team summary table with a footer row that displays aggregate statistics across filtered rows: member count, active count, average balance, and min/max balance range — all recomputed live as filters change.`,code:`"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DataTable,
  DataTableColumnHeader,
} from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

interface Member {
  id: string
  name: string
  avatar: string
  location: string
  flag: string
  status: "Active" | "Inactive" | "Pending" | "Blocked"
  balance: number
}

const members: Member[] = [
  { id: "1",  name: "Dr. Anika Sharma",     avatar: "…", location: "India",          flag: "in", status: "Active",   balance: 5143.03 },
  { id: "2",  name: "Dr. Sarah Mitchell",   avatar: "…", location: "United Kingdom", flag: "gb", status: "Inactive", balance: 4321.87 },
  { id: "3",  name: "Dr. David Okafor",     avatar: "…", location: "Nigeria",        flag: "ng", status: "Blocked",  balance: 7654.98 },
  // ...
]

const statusVariant = {
  Active: "success", Blocked: "destructive", Inactive: "info", Pending: "warning",
} as const

const fmt = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2 })

const columns: ColumnDef<Member>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Practitioner" />,
    footer: ({ table }) => {
      const count = table.getFilteredRowModel().rows.length
      return (
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground text-xs">Practitioners</span>
          <span className="font-medium tabular-nums">{count}</span>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarImage src={row.original.avatar} alt={row.original.name} />
          <AvatarFallback>
            {row.original.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <span className="text-foreground font-medium">{row.original.name}</span>
      </div>
    ),
    size: 150,
    enableSorting: true,
  },
  {
    id: "location",
    accessorKey: "location",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Location" />,
    footer: ({ table }) => {
      const activeCount = table.getFilteredRowModel().rows
        .filter((r) => r.getValue("status") === "Active").length
      return (
        <div className="flex items-center gap-1.5">
          <span className="text-muted-foreground text-xs">Active</span>
          <Badge variant="success">{activeCount}</Badge>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <img
          src={\`https://flagcdn.com/\${row.original.flag}.svg\`}
          alt={row.original.flag}
          className="size-4 rounded-full object-cover"
        />
        <span className="text-foreground font-medium">{row.original.location}</span>
      </div>
    ),
    size: 150,
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    footer: ({ table }) => {
      const rows = table.getFilteredRowModel().rows
      const avg = rows.length
        ? rows.reduce((sum, r) => sum + (r.getValue("balance") as number), 0) / rows.length
        : 0
      return (
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground text-xs">Avg balance</span>
          <span className="font-medium tabular-nums">{fmt(avg)}</span>
        </div>
      )
    },
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>
        {row.original.status}
      </Badge>
    ),
    size: 110,
  },
  {
    id: "balance",
    accessorKey: "balance",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Balance" />,
    footer: ({ table }) => {
      const balances = table.getFilteredRowModel().rows.map(
        (r) => r.getValue("balance") as number
      )
      const min = balances.length ? Math.min(...balances) : 0
      const max = balances.length ? Math.max(...balances) : 0
      return (
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground text-xs">Min / Max</span>
          <span className="font-medium tabular-nums">
            {fmt(min)} – {fmt(max)}
          </span>
        </div>
      )
    },
    cell: ({ row }) => (
      <span className="text-foreground font-medium tabular-nums">
        {fmt(row.original.balance)}
      </span>
    ),
    size: 130,
  },
]

export function TeamSummaryTable() {
  return (
    <DataTable
      columns={columns}
      data={members}
      filterColumn="name"
      filterPlaceholder="Search practitioners..."
    />
  )
}`,preview:K.createElement(ua)},{name:`Footer Aggregates`,description:`Column aggregate footer showing avg, min, and max for numeric columns (balance & transactions). All stats recompute live as filters change.`,code:`"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DataTable,
  DataTableColumnHeader,
} from "@/components/ui/data-table"
import { type ColumnDef } from "@tanstack/react-table"

interface Member {
  id: string
  name: string
  avatar: string
  status: "Active" | "Inactive" | "Pending" | "Blocked"
  balance: number
  transactions: number
}

const members: Member[] = [
  { id: "1",  name: "Dr. Anika Sharma",     avatar: "…", status: "Active",   balance: 5143.03, transactions: 48 },
  { id: "2",  name: "Dr. Sarah Mitchell",   avatar: "…", status: "Inactive", balance: 4321.87, transactions: 31 },
  { id: "3",  name: "Dr. David Okafor",     avatar: "…", status: "Blocked",  balance: 7654.98, transactions: 67 },
  // ...
]

const statusVariant = {
  Active: "success", Blocked: "destructive", Inactive: "info", Pending: "warning",
} as const

const fmt = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2 })

const columns: ColumnDef<Member>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Practitioner" />,
    footer: ({ table }) => {
      const count = table.getFilteredRowModel().rows.length
      return (
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground text-xs">Summary</span>
          <span className="text-foreground font-medium">Across all practitioners</span>
          <span className="text-muted-foreground text-xs tabular-nums">{count} practitioners</span>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarImage src={row.original.avatar} alt={row.original.name} />
          <AvatarFallback>
            {row.original.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <span className="text-foreground font-medium">{row.original.name}</span>
      </div>
    ),
    size: 200,
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    footer: () => null,
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>{row.original.status}</Badge>
    ),
    size: 110,
  },
  {
    id: "balance",
    accessorKey: "balance",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Balance" />,
    footer: ({ table }) => {
      const balances = table.getFilteredRowModel().rows.map(
        (r) => r.getValue("balance") as number
      )
      const avg = balances.length ? balances.reduce((a, b) => a + b, 0) / balances.length : 0
      const min = balances.length ? Math.min(...balances) : 0
      const max = balances.length ? Math.max(...balances) : 0
      return (
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground text-xs">Avg</span>
          <span className="tabular-nums">{fmt(avg)}</span>
          <span className="text-muted-foreground text-xs tabular-nums">
            {fmt(min)} – {fmt(max)}
          </span>
        </div>
      )
    },
    cell: ({ row }) => (
      <span className="text-foreground font-medium tabular-nums">
        {fmt(row.original.balance)}
      </span>
    ),
    size: 130,
  },
  {
    id: "transactions",
    accessorKey: "transactions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Encounters" />
    ),
    footer: ({ table }) => {
      const txns = table.getFilteredRowModel().rows.map(
        (r) => r.getValue("transactions") as number
      )
      const avg = txns.length ? Math.round(txns.reduce((a, b) => a + b, 0) / txns.length) : 0
      const min = txns.length ? Math.min(...txns) : 0
      const max = txns.length ? Math.max(...txns) : 0
      return (
        <div className="flex flex-col gap-0.5">
          <span className="text-muted-foreground text-xs">Avg</span>
          <span className="tabular-nums">{avg}</span>
          <span className="text-muted-foreground text-xs tabular-nums">
            {min} – {max}
          </span>
        </div>
      )
    },
    cell: ({ row }) => (
      <span className="text-foreground font-medium tabular-nums">
        {row.original.transactions}
      </span>
    ),
    size: 120,
  },
]

export function AggregateTable() {
  return (
    <DataTable
      columns={columns}
      data={members}
      filterColumn="name"
      filterPlaceholder="Search practitioners..."
    />
  )
}`,preview:K.createElement(()=>K.createElement(m,{columns:ma,data:da,filterColumn:`name`,filterPlaceholder:`Search practitioners...`}))}],props:[{name:`columns`,type:`ColumnDef<TData, TValue>[]`,description:`TanStack column definitions for the table.`},{name:`data`,type:`TData[]`,description:`The data array to display in the table.`},{name:`filterColumn`,type:`string`,description:`Key of the column to filter on. Defaults to the first filterable column.`},{name:`filterPlaceholder`,type:`string`,description:`Placeholder text for the filter input.`,default:`"Filter..."`},{name:`cellBorder`,type:`boolean`,description:`Adds vertical borders between columns for a spreadsheet-like grid appearance.`,default:`false`},{name:`dense`,type:`boolean`,description:`Reduces cell padding for a compact, high-density table layout.`,default:`false`},{name:`autoWidth`,type:`boolean`,description:`Lets columns size to their content instead of stretching to fill the container width.`,default:`false`},{name:`renderExpandedRow`,type:`(row: Row<TData>) => React.ReactNode`,description:'Renders expanded content below a row when it is toggled open. Pair with a column that calls row.getToggleExpandedHandler(). Each row and its expanded content render in their own <tbody> (with data-state="selected" when selected) so they can be styled as a group. Set `meta.spanExpandedRow` on a column to extend its cell down beside the expanded content.'},{name:`defaultExpanded`,type:`ExpandedState`,description:"Initial expanded state. Pass `true` to render every row expanded, e.g. for always-visible note rows.",default:`{}`},{name:`hideToolbar`,type:`boolean`,description:`Hides the filter input and column visibility toolbar. Useful for nested sub-tables inside expanded rows.`,default:`false`},{name:`movableColumns`,type:`boolean`,description:"Enables column reordering via a header dropdown menu. Each `DataTableColumnHeader` exposes Asc / Desc sort options and Move to Left / Move to Right actions.",default:`false`},{name:`className`,type:`string`,description:`Additional CSS classes for the wrapper.`}]};export{ha as dataTableDoc};
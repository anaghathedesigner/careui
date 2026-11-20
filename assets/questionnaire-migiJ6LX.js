import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";import{t as i}from"./check-CfIGZGct.js";import{n as a,t as o}from"./button-DTwq4-az.js";import{Ai as s,Cr as c,Er as l,Fi as u,Mi as d,Oi as f,Pi as p,Sr as m,Tr as h,br as g,ji as _,ki as v,wr as y}from"./index-Ck2hFZuL.js";var b=t(e(),1);function x({defaultTagName:e,props:t,render:n,state:r={},stateAttributesMapping:i}){let a=S(C(r,i),t);if(!n)return b.createElement(e,a);if(typeof n==`function`)return n(a,r);if(!b.isValidElement(n))return null;let o=n.props,s={...S(a,o),ref:E(a.ref,o.ref)};return b.cloneElement(n,s)}function S(...e){let t={};for(let n of e){if(!n)continue;let e=n;for(let n of Object.keys(e)){let r=e[n];if(r===void 0)continue;let i=t[n];t[n]=n===`className`?[i,r].filter(Boolean).join(` `):n===`style`?{...i,...r}:n===`ref`?E(i,r):T(n)&&typeof i==`function`&&typeof r==`function`?w(r,i):r}}return t}function C(e,t){let n={};for(let r of Object.keys(e)){let i=e[r],a=t?.[r]?.(i);if(a){Object.assign(n,a);continue}if(r===`slot`){n[`data-slot`]=i;continue}let o=`data-${String(r).replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`;typeof i==`boolean`?n[o]=i?``:void 0:i!=null&&(n[o]=String(i))}return n}function w(e,t){return function(n){e(n),n.defaultPrevented||t(n)}}function T(e){return/^on[A-Z]/.test(e)}function E(...e){let t=e.filter(Boolean);if(t.length!==0)return e=>{for(let n of t)typeof n==`function`?n(e):n&&(n.current=e)}}var D=n(),O=b.createContext(null),k=b.createContext(null),A=b.createContext(null);function j(e){let t=b.useContext(k);if(!t)throw Error(`${e} must be used within a Questionnaire.Root component.`);return t}function M(e){let t=b.useContext(O);if(!t)throw Error(`${e} must be used within a Questionnaire.Choice component.`);return t}function N(e){let t=b.useContext(A);if(!t)throw Error(`${e} must be used within a Questionnaire.Item component.`);return t}function P(e){return Array.isArray(e)?e.some(e=>String(e).trim().length>0):e!=null&&String(e).trim().length>0}function F(e){return e===`letters`?Array.from({length:26},(e,t)=>String.fromCharCode(65+t)):e===`numbers`?Array.from({length:9},(e,t)=>String(t+1)):[]}function ee(e,t){let n=t===`letters`?e.toUpperCase():e;return F(t).includes(n)?n:null}function I(e,t){return[e,t?`Enter`:null].filter(Boolean).join(` `)||void 0}function te(e){return e.type===`choice`?e.element.checked:e.element.hasAttribute(`name`)&&P(e.element.value)}function ne(e){return e?.type===`input`&&[`email`,`password`,`search`,`tel`,`text`,`url`].includes(e.element.type)&&!P(e.element.value)}function re(e){return e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?!0:e instanceof HTMLInputElement?![`button`,`checkbox`,`radio`,`reset`,`submit`].includes(e.type):e instanceof HTMLElement&&e.isContentEditable}function ie(e){return e instanceof HTMLInputElement&&e.type===`radio`}function ae(e,t){if(e.element===t.element)return 0;let n=e.element.compareDocumentPosition(t.element);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}function oe(e,t){if(e.element===t.element)return 0;let n=e.element.compareDocumentPosition(t.element);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}function L({checked:e,defaultChecked:t=!1,disabled:n=!1,onChange:r,value:i}){let{disabled:a,hasInputAnswer:o,invalid:s,multiple:c,name:l,registerAnswerControl:u,registerAnswerSelection:d,required:f,resetVersion:p,selectedAnswerIds:m,setAnswerDefault:h,setAnswerSelectionFromInteraction:g,shortcutByAnswerId:_,shortcutByChoiceValue:v,status:y,syncControlledAnswerSelection:x}=N(`Questionnaire.Choice`),S=b.useId(),[C,w]=b.useState(null),T=b.useRef(t),E=e!==void 0,D=a||n,O=m.includes(S),k=E?y!==`skipped`&&e:O,A=c?`checkbox`:`radio`,j=v?.get(i)??_.get(S)??null;b.useLayoutEffect(()=>d(S,T.current),[S,d]),b.useLayoutEffect(()=>h(S,t),[S,t,h]),b.useLayoutEffect(()=>{if(C)return u({disabled:D,element:C,id:S,ownDisabled:n,type:`choice`,value:i})},[S,n,D,C,u,i]),b.useLayoutEffect(()=>{E&&x(S,e)},[S,E,e,p,x]),b.useLayoutEffect(()=>{C&&(C.defaultChecked=E?e:t,p>0&&(C.checked=k))},[k,E,e,t,C,p]);function M(t){if(r?.(t),!t.defaultPrevented){if(!E){g(S,t.target.checked);return}y===`skipped`&&e===t.target.checked&&g(S,e)}}let P={checked:k,disabled:D,invalid:s,shortcut:j,type:A};return{inputProps:{ref:w,"aria-invalid":s||void 0,"aria-keyshortcuts":I(j,!D&&k),checked:k,disabled:D,id:S,name:y===`skipped`?void 0:l,onChange:M,required:f&&!c&&!o,type:A,value:i},state:P}}function R({defaultValue:e,disabled:t=!1,onChange:n,ref:r,type:i=`text`,value:a}){let{disabled:o,invalid:s,name:c,registerAnswerControl:l,registerAnswerSelection:u,resetVersion:d,selectedAnswerIds:f,setAnswerDefault:p,setAnswerSelectionFromInteraction:m,syncControlledAnswerSelection:h}=N(`Questionnaire.Input`),g=b.useId(),_=b.useRef(null),v=b.useRef(P(e)),y=a!==void 0,x=P(e),S=P(a),[C,w]=b.useState(x),T=o||t,D=y?S:C,O=f.includes(g);b.useLayoutEffect(()=>u(g,v.current),[g,u]),b.useLayoutEffect(()=>p(g,x),[x,g,p]),b.useLayoutEffect(()=>{let e=_.current;if(e)return l({disabled:T,element:e,id:g,type:`input`})},[T,g,l]),b.useLayoutEffect(()=>{y?h(g,S):d>0&&w(x)},[y,S,a,x,g,d,h]),b.useLayoutEffect(()=>{let e=_.current;!e||!y||(e.defaultValue=String(a))},[y,a]);function k(e){if(n?.(e),e.defaultPrevented)return;let t=e.target.value.trim().length>0;y||(w(t),m(g,t))}let A={disabled:T,filled:D,invalid:s},j=b.useCallback(e=>{_.current=e,E(r)?.(e)},[r]);return{inputProps:{"aria-invalid":s||void 0,"aria-keyshortcuts":I(null,!T&&D&&O),defaultValue:y?void 0:e,disabled:T,form:O?void 0:``,id:g,name:O?c:void 0,onChange:k,ref:j,type:i,value:y?a:void 0},state:A}}function se(e){return e===void 0?null:{enabledItems:e.filter(e=>!e.disabled),itemByName:new Map(e.map(e=>[e.name,e])),items:e}}function z(e,t){if(!e)return t??null;let n=t?e.itemByName.get(t):void 0;return n&&!n.disabled?n.name:e.enabledItems[0]?.name??null}function ce(e,t){let n=new Map;if(!e||!t)return n;let r=F(t),i=0;for(let t of e.choices??[]){if(t.disabled)continue;let e=r[i];if(!e)break;n.set(t.value,e),i+=1}return n}function le({"aria-describedby":e,"aria-keyshortcuts":t,disabled:n=!1,invalid:r=!1,multiple:i=!1,name:a,onStatusChange:o,ref:s,required:c=!1}){let{activeItemName:l,domVersion:u,first:d,itemDefinitionByName:f,last:p,nativeValidation:m,registerItem:h,shortcuts:g}=j(`Questionnaire.Item`),[_,v]=b.useState(null),[y,x]=b.useState([]),[S,C]=b.useState(!1),[w,T]=b.useState([]),[D,O]=b.useState(!1),[k,A]=b.useState(0),[M,N]=b.useState([]),[P,ee]=b.useState([]),I=b.useRef([]),ae=b.useRef(i),L=b.useRef(i);ae.current=i;let R=!n&&l===a,se=b.useMemo(()=>[...y].sort(oe),[y,u]),z=b.useMemo(()=>se.filter(e=>!e.disabled),[se]),le=z.some(e=>w.includes(e.id)),B=D?`skipped`:le?`answered`:`unanswered`,ue=B===`skipped`&&!c,de=n||ue||!r&&B===`answered`,fe=!n&&!ue&&(r||S&&!de),pe=z.some(e=>e.type===`input`),me=b.useRef(B),he=f?.get(a),V=b.useMemo(()=>f?ce(he,g):null,[he,f,g]),ge=b.useMemo(()=>{if(V)return new Map;let e=F(g),t=z.filter(e=>e.type===`choice`);return new Map(t.slice(0,e.length).map((t,n)=>[t.id,e[n]]))},[z,V,g]),_e=b.useCallback(e=>(x(t=>[...t.filter(t=>t.element!==e.element&&t.id!==e.id),e]),()=>{x(t=>t.filter(t=>t!==e))}),[]);b.useLayoutEffect(()=>{me.current!==B&&(me.current=B,o?.(B))},[o,B]);let ve=b.useCallback((e,t)=>{T(n=>t?i?n.includes(e)?n:[...n,e]:[e]:n.filter(t=>t!==e))},[i]),ye=b.useCallback((e,t)=>{O(!1),ve(e,t)},[ve]),be=b.useCallback((e,t)=>{t&&O(!1),ve(e,t)},[ve]),xe=b.useCallback((e,t)=>(t&&(I.current=[...I.current.filter(t=>t!==e),e],T(t=>ae.current?t.includes(e)?t:[...t,e]:t.length?t:[e])),()=>{I.current=I.current.filter(t=>t!==e),T(t=>t.filter(t=>t!==e))}),[]),Se=b.useCallback((e,t)=>{t?I.current=I.current.includes(e)?I.current:[...I.current,e]:I.current=I.current.filter(t=>t!==e)},[]),Ce=b.useCallback(e=>(N(t=>t.includes(e)?t:[...t,e]),()=>{N(t=>t.filter(t=>t!==e))}),[]),we=b.useCallback(e=>(ee(t=>t.includes(e)?t:[...t,e]),()=>{ee(t=>t.filter(t=>t!==e))}),[]),Te=b.useCallback(()=>{if(C(!0),!de)return!1;if(!m)return!0;let e=z.find(e=>te(e)&&e.element.willValidate&&!e.element.validity.valid);return!e||(e.element.focus(),e.element.reportValidity(),!1)},[z,m,de]),H=b.useCallback(()=>{_?.focus()},[_]),U=b.useCallback(()=>{let e=_?.querySelector(`input[data-filled][name]:not(:disabled)`),t=_?.querySelector(`input:not([type=hidden]):not(:disabled), textarea:not(:disabled)`);(e??t??_)?.focus()},[_]),W=b.useCallback(()=>{C(!1),O(!1),T(i?[...I.current]:I.current.slice(0,1)),A(e=>e+1)},[i]),G=b.useCallback(()=>{c||(T([]),O(!0))},[c]);b.useLayoutEffect(()=>{let e=L.current;L.current=i,e&&!i&&T(e=>{let t=z.find(t=>e.includes(t.id));return t?[t.id]:[]})},[z,i]);let K=b.useCallback(e=>z.find(t=>t.element===e)??null,[z]),Ee=b.useCallback(e=>{if(V){let t=Array.from(V.entries()).find(([,t])=>t===e)?.[0];return z.find(e=>e.type===`choice`&&e.value===t)??null}let t=Array.from(ge.entries()).find(([,t])=>t===e)?.[0];return z.find(e=>e.id===t)??null},[z,ge,V]),q=b.useCallback((e,t)=>{let n=z.findIndex(t=>t.element===e),r=n<0?null:z[n]??null;if(!z.length||re(e)&&!ne(r)||n<0&&e!==_)return!1;let i=n<0?z.find(te)??(t===`next`?z[0]:z[z.length-1]):z[(n+(t===`next`?1:-1)+z.length)%z.length];return!i||i.element===e||n>=0&&ie(e)&&ie(i.element)?!1:(i.element.focus(),i.type===`choice`&&ie(i.element)&&i.element.click(),!0)},[z,_]);b.useLayoutEffect(()=>{if(_)return h({choices:se.flatMap(e=>e.type===`choice`?[{disabled:e.ownDisabled,value:e.value}]:[]),disabled:n,element:_,focus:H,focusInvalid:U,getAnswerByElement:K,getAnswerByShortcut:Ee,moveAnswerFocus:q,name:a,required:c,reset:W,skip:G,status:B,validate:Te})},[se,n,_,H,U,K,Ee,q,a,h,c,W,G,B,Te]);let J=b.useMemo(()=>({active:R,disabled:n,hasInputAnswer:pe,invalid:fe,multiple:i,name:a,registerAnswerControl:_e,registerAnswerSelection:xe,registerDescription:Ce,registerError:we,required:c,resetVersion:k,selectedAnswerIds:w,setAnswerDefault:Se,setAnswerSelectionFromInteraction:ye,shortcutByAnswerId:ge,shortcutByChoiceValue:V,shortcuts:g,status:B,syncControlledAnswerSelection:be}),[R,n,pe,fe,i,a,_e,xe,Ce,we,c,k,w,Se,ye,ge,V,g,B,be]),De=b.useCallback(e=>{v(e),E(s)?.(e)},[s]),Y=[...M,...fe?P:[],e].filter(Boolean).join(` `)||void 0,X=[t,R?`Meta+Enter Control+Enter`:void 0,R&&z.length?`ArrowUp ArrowDown`:void 0,R&&!d?`ArrowLeft`:void 0,R&&!p&&B!==`unanswered`?`ArrowRight`:void 0].filter(Boolean).join(` `)||void 0;return{context:J,itemProps:{"aria-describedby":Y,"aria-invalid":fe||void 0,"aria-keyshortcuts":X,disabled:n,hidden:!R,inert:!R,ref:De,tabIndex:-1},state:{active:R,disabled:n,invalid:fe,multiple:i,required:c,status:B}}}function B({defaultItem:e,item:t,items:n,noValidate:r,onItemChange:i,onReset:a,onSubmit:o,ref:s,shortcuts:c}){let l=b.useMemo(()=>se(n),[n]),[u,d]=b.useState([]),[f,p]=b.useState(()=>z(l,e)),[m,h]=b.useState(null),[g,_]=b.useState(0),v=b.useRef(null),y=t!==void 0,x=y?t:f,S=b.useRef(x),C=r===!1,w=c??null;b.useRef(new Set),b.useLayoutEffect(()=>{},[l,e,u,m,w]),b.useLayoutEffect(()=>{if(!m||typeof MutationObserver>`u`)return;let e=new MutationObserver(()=>{_(e=>e+1)});return e.observe(m,{childList:!0,subtree:!0}),()=>e.disconnect()},[m]);let T=b.useMemo(()=>u.filter(e=>!e.disabled).sort(ae),[g,u]),D=b.useMemo(()=>new Map(T.map(e=>[e.name,e])),[T]),O=l?.enabledItems??T,k=O.findIndex(e=>e.name===x),A=k<0||!x?null:D.get(x)??null,j=x?l?.itemByName.get(x):void 0,M=k<0?null:j?!!j.required:A?.required??!1,N=k<0?null:A?.status??(x?`unanswered`:null),P=b.useMemo(()=>l?l.enabledItems.flatMap(e=>{let t=D.get(e.name);return t?[t]:[]}):T,[l,D,T]),F=O.length,I=k<0?0:k+1,ne=F>0&&k===0,oe=F>0&&k===F-1,L=b.useCallback((e,t=`item`)=>{e!==x&&(v.current={name:e,target:t},y||p(e),i?.(e))},[x,y,i]);b.useLayoutEffect(()=>{if(F===0)return;if(k<0){if(!y&&x===null){p(O[0].name);return}L(O[0].name);return}let e=v.current,t=S.current!==x;S.current=x,!e||e.name!==x?y&&t&&(v.current=null,A?.focus()):(e.target===`invalid`?A?.focusInvalid():A?.focus(),v.current=null)},[A,x,y,k,O,L,F]);let R=b.useCallback(e=>(d(t=>[...t.filter(t=>t.element!==e.element&&t.name!==e.name),e]),()=>{d(t=>t.filter(t=>t!==e))}),[]),ce=b.useCallback(()=>{k<=0||L(O[k-1].name)},[k,O,L]),le=b.useCallback(()=>{if(!(!A||k>=F-1)){if(!A.validate()){A.focusInvalid();return}L(O[k+1].name)}},[A,k,O,L,F]),B=b.useCallback(()=>{if(A){if(!A.validate()){A.focusInvalid();return}if(oe){m?.requestSubmit();return}L(O[k+1].name)}},[A,k,oe,O,m,L]),ue=b.useCallback(()=>{if(A&&!A.required){if(A.skip(),!oe){L(O[k+1].name);return}queueMicrotask(()=>{m?.requestSubmit()})}},[A,k,oe,O,m,L]);function de(t){if(a?.(t),t.defaultPrevented)return;for(let e of u)e.reset();let n=l?z(l,e):T.find(t=>t.name===e)?.name??T[0]?.name;n&&L(n)}function fe(e){let t=P.find(e=>!e.validate());t?(e.preventDefault(),L(t.name,`invalid`),t.name===x&&(t.focusInvalid(),v.current=null)):o?.(e)}function pe(e){if(e.defaultPrevented||e.nativeEvent.isComposing||e.keyCode===229||!A||!(e.target instanceof Element))return;if(e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&!e.altKey&&!e.shiftKey){e.preventDefault(),e.repeat||B();return}if(e.metaKey||e.ctrlKey||e.altKey)return;if((e.key===`ArrowUp`||e.key===`ArrowDown`)&&A.moveAnswerFocus(e.target,e.key===`ArrowDown`?`next`:`previous`)){e.preventDefault();return}if((e.key===`ArrowLeft`||e.key===`ArrowRight`)&&!re(e.target)&&!ie(e.target)){if(e.preventDefault(),e.repeat)return;e.key===`ArrowLeft`?ce():A.status!==`unanswered`&&le();return}if(e.key===`Enter`){let t=A.getAnswerByElement(e.target);if(!t)return;e.preventDefault(),!e.repeat&&te(t)&&B();return}if(!w||re(e.target))return;let t=ee(e.key,w),n=t?A.getAnswerByShortcut(t):null;n&&(e.preventDefault(),!e.repeat&&(n.element.focus(),n.type===`choice`&&n.element.click()))}let me={current:I,first:ne,last:oe,total:F},he=b.useMemo(()=>({...me,activeItem:A,activeItemName:x,activeItemRequired:M,activeItemStatus:N,domVersion:g,goNext:le,goPrevious:ce,itemDefinitionByName:l?.itemByName??null,nativeValidation:C,registerItem:R,shortcuts:w,skipCurrent:ue}),[A,x,M,N,l,I,g,ne,le,ce,oe,C,R,w,ue,F]),V=b.useCallback(e=>{h(e),E(s)?.(e)},[s]);return{context:he,rootProps:{"data-shortcuts":w??void 0,onKeyDown:pe,onReset:de,onSubmit:fe,ref:V},state:me}}function ue({defaultItem:e,item:t,items:n,noValidate:r=!0,onItemChange:i,onReset:a,onSubmit:o,ref:s,shortcuts:c,...l}){let{context:u,rootProps:d,state:f}=B({defaultItem:e,item:t,items:n,noValidate:r,onItemChange:i,onReset:a,onSubmit:o,ref:s,shortcuts:c}),p=x({defaultTagName:`form`,props:S({...d,noValidate:r},l),state:f});return(0,D.jsx)(k.Provider,{value:u,children:p})}function de({children:e,render:t,...n}){let{current:r,first:i,last:a,total:o}=j(`Questionnaire.Progress`),s=o?`Question ${r} of ${o}`:void 0;return x({defaultTagName:`div`,props:S({"aria-label":`Questionnaire progress`,"aria-live":`polite`,"aria-valuemax":o||void 0,"aria-valuemin":o?1:void 0,"aria-valuenow":o?r:void 0,"aria-valuetext":s,children:e??s,role:`progressbar`},n),render:t,state:{current:r,first:i,last:a,total:o}})}function fe({"aria-describedby":e,"aria-keyshortcuts":t,children:n,disabled:r=!1,invalid:i=!1,multiple:a=!1,name:o,onStatusChange:s,ref:c,required:l=!1,...u}){let{context:d,itemProps:f,state:p}=le({"aria-describedby":e,"aria-keyshortcuts":t,disabled:r,invalid:i,multiple:a,name:o,onStatusChange:s,ref:c,required:l}),m=x({defaultTagName:`fieldset`,props:S({...f,children:n},u),state:p,stateAttributesMapping:{active:e=>({"data-active":e?``:void 0})}});return(0,D.jsx)(A.Provider,{value:d,children:m})}function pe({render:e,...t}){return N(`Questionnaire.Title`),x({defaultTagName:`legend`,props:t,render:e})}function me({id:e,render:t,...n}){let{registerDescription:r}=N(`Questionnaire.Description`),i=b.useId(),a=e??i;return b.useLayoutEffect(()=>r(a),[a,r]),x({defaultTagName:`p`,props:S({id:a},n),render:t})}function he({render:e,...t}){let{shortcuts:n}=N(`Questionnaire.Choices`);return x({defaultTagName:`div`,props:t,render:e,state:{shortcuts:n}})}function V({checked:e,children:t,defaultChecked:n=!1,disabled:r=!1,onChange:i,render:a,value:o,...s}){let{inputProps:c,state:l}=L({checked:e,defaultChecked:n,disabled:r,onChange:i,value:o}),u=x({defaultTagName:`label`,props:S({children:t},s),render:a,state:l,stateAttributesMapping:{checked:e=>({"data-checked":e?``:void 0,"data-unchecked":e?void 0:``})}});return(0,D.jsx)(O.Provider,{value:{inputProps:c,state:l},children:u})}function ge({render:e,...t}){let{inputProps:n,state:r}=M(`Questionnaire.ChoiceInput`);return x({defaultTagName:`input`,props:S(n,t),render:e,state:r,stateAttributesMapping:{checked:e=>({"data-checked":e?``:void 0,"data-unchecked":e?void 0:``})}})}function _e({render:e,...t}){return M(`Questionnaire.ChoiceLabel`),x({defaultTagName:`span`,props:t,render:e})}function ve({children:e,render:t,...n}){let{state:r}=M(`Questionnaire.ChoiceShortcut`),i={shortcut:r.shortcut};return x({defaultTagName:`span`,props:S({"aria-hidden":!0,children:e??r.shortcut,hidden:r.shortcut===null},n),render:t,state:i})}function ye({defaultValue:e,disabled:t=!1,onChange:n,ref:r,render:i,type:a=`text`,value:o,...s}){let{inputProps:c,state:l}=R({defaultValue:e,disabled:t,onChange:n,ref:r,type:a,value:o});return x({defaultTagName:`input`,props:S(c,s),render:i,state:l,stateAttributesMapping:{filled:e=>({"data-empty":e?void 0:``,"data-filled":e?``:void 0})}})}function be({children:e,id:t,render:n,...r}){let{invalid:i,registerError:a,required:o}=N(`Questionnaire.Error`),s=b.useId(),c=t??s;return b.useLayoutEffect(()=>a(c),[c,a]),x({defaultTagName:`p`,props:S({children:e??(o?`Choose an answer to continue.`:`Choose an answer or skip this question.`),hidden:!i,id:c,role:i?`alert`:void 0},r),render:n,state:{invalid:i}})}function xe({children:e,disabled:t=!1,onClick:n,render:r,tabIndex:i,type:a=`button`,...o}){let s=j(`Questionnaire.Previous`),c=s.total>1&&!s.first;function l(e){n?.(e),e.defaultPrevented||s.goPrevious()}return Te({children:e??`Previous`,disabled:t,onClick:l,props:o,render:r,status:s.activeItemStatus,tabIndex:i,type:a,visible:c})}function Se({children:e,disabled:t=!1,onClick:n,render:r,tabIndex:i,type:a=`button`,...o}){let s=j(`Questionnaire.Skip`),c=s.activeItemRequired===!1;function l(e){n?.(e),e.defaultPrevented||s.skipCurrent()}return Te({children:e??`Skip`,disabled:t,onClick:l,props:o,render:r,status:s.activeItemStatus,tabIndex:i,type:a,visible:c})}function Ce({children:e,disabled:t=!1,onClick:n,render:r,tabIndex:i,type:a=`button`,...o}){let s=j(`Questionnaire.Next`),c=s.total>1&&!s.last;function l(e){n?.(e),e.defaultPrevented||s.goNext()}return Te({children:e??`Next`,disabled:t,onClick:l,props:o,render:r,shortcut:`Enter`,status:s.activeItemStatus,tabIndex:i,type:a,visible:c})}function we({children:e,disabled:t=!1,render:n,tabIndex:r,type:i=`submit`,...a}){let o=j(`Questionnaire.Submit`),s=o.total>0&&o.last;return Te({children:e??`Submit`,disabled:t,props:a,render:n,shortcut:`Enter`,status:o.activeItemStatus,tabIndex:r,type:i,visible:s})}function Te({children:e,disabled:t,onClick:n,props:r,render:i,shortcut:a,status:o,tabIndex:s,type:c,visible:l}){let u=l&&!t?a??null:null,d={disabled:t,shortcut:u,status:o,visible:l};return x({defaultTagName:`button`,props:S({"aria-hidden":!l||void 0,"aria-keyshortcuts":u??void 0,children:e,disabled:t,hidden:!l,inert:!l,onClick:n,tabIndex:l?s:-1,type:c},r),render:i,state:d,stateAttributesMapping:{visible:e=>({"data-hidden":e?void 0:``,"data-visible":e?``:void 0})}})}var H={Root:ue,Progress:de,Item:fe,Title:pe,Description:me,Choices:he,Choice:V,ChoiceInput:ge,ChoiceLabel:_e,ChoiceShortcut:ve,Input:ye,Error:be,Previous:xe,Skip:Se,Next:Ce,Submit:we};function U({className:e,...t}){return(0,D.jsx)(H.Root,{"data-slot":`questionnaire`,className:r(`flex w-full min-w-0 flex-col gap-6`,e),...t})}function W({className:e,...t}){return(0,D.jsx)(H.Progress,{"data-slot":`questionnaire-progress`,className:r(`text-muted-foreground min-h-lh w-fit min-w-[14ch] text-xs font-medium tabular-nums`,e),...t})}function G({className:e,...t}){return(0,D.jsx)(H.Item,{"data-slot":`questionnaire-item`,className:r(`flex min-w-0 flex-col gap-5 border-0 p-0 outline-none`,e),...t})}function K({className:e,...t}){return(0,D.jsx)(H.Title,{"data-slot":`questionnaire-title`,className:r(`text-base font-semibold text-pretty [&:not(:has(~[data-slot=questionnaire-description]))]:mb-5`,e),...t})}function Ee({className:e,...t}){return(0,D.jsx)(H.Description,{"data-slot":`questionnaire-description`,className:r(`text-muted-foreground text-sm text-pretty`,e),...t})}function q({className:e,...t}){return(0,D.jsx)(H.Choices,{"data-slot":`questionnaire-choices`,className:r(`group/questionnaire-choices grid min-w-0 gap-3`,e),...t})}function J({children:e,className:t,...n}){return(0,D.jsxs)(H.Choice,{"data-slot":`questionnaire-choice`,className:r(`group/questionnaire-choice border-input hover:bg-muted/50 has-[>input:focus-visible]:border-ring has-[>input:focus-visible]:ring-ring/50 data-invalid:border-destructive dark:bg-input/20 data-checked:border-primary/40 data-checked:bg-muted dark:data-checked:bg-muted relative flex min-h-11 cursor-pointer items-start gap-3.5 rounded-md border bg-transparent px-4 py-3.5 text-start text-sm shadow-xs transition-colors outline-none select-none has-[>input:focus-visible]:ring-3`,`data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50`,t),...n,children:[(0,D.jsx)(H.ChoiceInput,{"data-slot":`questionnaire-choice-input`,className:`absolute inset-0 z-10 size-full cursor-pointer opacity-0`}),(0,D.jsxs)(`span`,{"aria-hidden":`true`,"data-slot":`questionnaire-choice-indicator`,className:`border-input group-data-checked/questionnaire-choice:border-primary group-data-checked/questionnaire-choice:bg-primary group-data-checked/questionnaire-choice:text-primary-foreground dark:bg-input/30 dark:group-data-checked/questionnaire-choice:bg-primary pointer-events-none relative flex size-4 shrink-0 items-center justify-center rounded-lg border group-data-[type=radio]/questionnaire-choice:rounded-full`,children:[(0,D.jsx)(`span`,{"data-slot":`questionnaire-choice-indicator-dot`,className:`bg-primary-foreground hidden size-2 rounded-full group-data-checked/questionnaire-choice:block group-data-[type=checkbox]/questionnaire-choice:hidden`}),(0,D.jsx)(i,{"data-slot":`questionnaire-choice-indicator-check`,className:`hidden size-3.5 group-data-checked/questionnaire-choice:block group-data-[type=radio]/questionnaire-choice:hidden`})]}),(0,D.jsx)(H.ChoiceLabel,{"data-slot":`questionnaire-choice-label`,className:`flex min-w-0 flex-1 flex-col gap-1 leading-snug`,children:e}),(0,D.jsx)(H.ChoiceShortcut,{"data-slot":`questionnaire-choice-shortcut`,className:`border-input bg-background text-muted-foreground pointer-events-none ms-auto mt-0.5 hidden size-5 shrink-0 items-center justify-center rounded-md border font-mono text-[0.625rem] leading-none font-medium shadow-xs group-data-shortcut/questionnaire-choice:inline-flex`})]})}function De({className:e,...t}){return(0,D.jsx)(`div`,{"data-slot":`questionnaire-input-wrapper`,className:`group/questionnaire-input relative w-full min-w-0`,children:(0,D.jsx)(H.Input,{"data-slot":`questionnaire-input`,className:r(`border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-9 min-h-11 w-full min-w-0 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow,background-color] outline-none focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 sm:min-h-0 md:text-sm`,`selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground`,e),...t})})}function Y({className:e,...t}){return(0,D.jsx)(H.Error,{"data-slot":`questionnaire-error`,className:r(`text-destructive text-sm`,e),...t})}function X({className:e,...t}){return(0,D.jsx)(`div`,{"data-slot":`questionnaire-actions`,className:r(`grid min-h-11 w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 sm:min-h-9`,e),...t})}function Z({children:e,className:t,size:n=`default`,variant:i=`outline`,...o}){return(0,D.jsx)(H.Previous,{"data-slot":`questionnaire-previous`,"data-size":n,"data-variant":i,className:r(a({size:n,variant:i}),`col-start-1 row-start-1 min-h-11 justify-self-start sm:min-h-0`,t),...o,children:e??`Previous`})}function Oe({children:e,className:t,size:n=`default`,variant:i=`outline`,...o}){return(0,D.jsx)(H.Skip,{"data-slot":`questionnaire-skip`,"data-size":n,"data-variant":i,className:r(a({size:n,variant:i}),`col-start-2 row-start-1 min-h-11 justify-self-end sm:min-h-0`,t),...o,children:e??`Skip`})}function Q({children:e,className:t,size:n=`default`,variant:i=`default`,...o}){return(0,D.jsx)(H.Next,{"data-slot":`questionnaire-next`,"data-size":n,"data-variant":i,className:r(a({size:n,variant:i}),`col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0`,t),...o,children:e??`Next`})}function $({children:e,className:t,size:n=`default`,variant:i=`default`,...o}){return(0,D.jsx)(H.Submit,{"data-slot":`questionnaire-submit`,"data-size":n,"data-variant":i,className:r(a({size:n,variant:i}),`col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0`,t),...o,children:e??`Submit`})}var ke=[{choices:[{description:`Show what the agent ran and what came back.`,label:`Tool call timeline`,value:`tool-calls`},{description:`Ask before sensitive or destructive actions.`,label:`Approval checkpoints`,value:`approvals`},{description:`Make delegated work and results easier to follow.`,label:`Sub-agent handoffs`,value:`handoffs`}],description:`Choose a direction or describe another task.`,input:{label:`Another agent feature`,placeholder:`Describe another feature...`},name:`direction`,required:!0,title:`What should the agent build next?`},{choices:[{label:`Progress`,value:`progress`},{label:`Decisions`,value:`decisions`},{label:`Risks`,value:`risks`},{label:`Next step`,value:`next-step`}],description:`Select all that apply, or skip this question.`,multiple:!0,name:`signals`,required:!1,title:`What should every progress update include?`},{choices:[{label:`Start now`,value:`now`},{label:`Next development cycle`,value:`next-cycle`},{label:`Add it to the backlog`,value:`backlog`}],description:`Choose when the agent should begin the work.`,name:`timing`,required:!0,title:`When should work begin?`}],Ae={id:`questionnaire`,name:`Questionnaire`,description:`A multi-step questionnaire with single-choice, multiple-choice, freeform, and skippable questions.`,installation:{cli:`npx shadcn@latest add questionnaire`,manual:`Install @shadcn/react and copy the questionnaire component source code into your project.`},usage:`import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const items = [
  {
    name: "direction",
    required: true,
    prompt: "What should we prototype next?",
    description: "Choose a direction or write your own.",
    choices: [
      { value: "delegation", label: "Delegation" },
      { value: "questions", label: "Question prompts" },
      { value: "both", label: "Both together" },
    ],
    input: { label: "Another answer", placeholder: "Type another answer..." },
  },
] as const

<Questionnaire items={items} onSubmit={handleSubmit}>
  <QuestionnaireProgress />
  {items.map((question) => (
    <QuestionnaireItem
      key={question.name}
      name={question.name}
      required={question.required}
    >
      <QuestionnaireTitle>{question.prompt}</QuestionnaireTitle>
      <QuestionnaireDescription>{question.description}</QuestionnaireDescription>
      <QuestionnaireChoices>
        {question.choices.map((choice) => (
          <QuestionnaireChoice key={choice.value} value={choice.value}>
            <span className="font-medium">{choice.label}</span>
          </QuestionnaireChoice>
        ))}
        {"input" in question ? (
          <QuestionnaireInput
            aria-label={question.input.label}
            placeholder={question.input.placeholder}
          />
        ) : null}
      </QuestionnaireChoices>
      <QuestionnaireError />
    </QuestionnaireItem>
  ))}
  <QuestionnaireActions>
    <QuestionnairePrevious />
    <QuestionnaireSkip />
    <QuestionnaireNext />
    <QuestionnaireSubmit />
  </QuestionnaireActions>
</Questionnaire>`,preview:{code:`"use client"

import * as React from "react"

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const questionnaireItems = [
  {
    choices: [
      { label: "Tool call timeline", value: "tool-calls" },
      { label: "Approval checkpoints", value: "approvals" },
      { label: "Sub-agent handoffs", value: "handoffs" },
    ],
    description: "Choose a direction or describe another task.",
    input: {
      label: "Another agent feature",
      placeholder: "Describe another feature...",
    },
    name: "direction",
    required: true,
    title: "What should the agent build next?",
  },
  {
    choices: [
      { label: "Progress", value: "progress" },
      { label: "Decisions", value: "decisions" },
      { label: "Risks", value: "risks" },
      { label: "Next step", value: "next-step" },
    ],
    description: "Select all that apply, or skip this question.",
    multiple: true,
    name: "signals",
    required: false,
    title: "What should every progress update include?",
  },
  {
    choices: [
      { label: "Start now", value: "now" },
      { label: "Next development cycle", value: "next-cycle" },
      { label: "Add it to the backlog", value: "backlog" },
    ],
    description: "Choose when the agent should begin the work.",
    name: "timing",
    required: true,
    title: "When should work begin?",
  },
] as const

export function QuestionnaireDemo() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="direction"
      items={questionnaireItems}
      shortcuts="letters"
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />
      {questionnaireItems.map((question) => (
        <QuestionnaireItem
          key={question.name}
          multiple={"multiple" in question && question.multiple}
          name={question.name}
          required={question.required}
        >
          <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
          <QuestionnaireDescription>
            {question.description}
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            {question.choices.map((choice) => (
              <QuestionnaireChoice key={choice.value} value={choice.value}>
                <span className="font-medium">{choice.label}</span>
                {"description" in choice ? (
                  <span className="text-muted-foreground">
                    {choice.description}
                  </span>
                ) : null}
              </QuestionnaireChoice>
            ))}
            {"input" in question ? (
              <QuestionnaireInput
                aria-label={question.input.label}
                placeholder={question.input.placeholder}
              />
            ) : null}
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
      ))}
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Save plan</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}`,component:b.createElement(()=>{function e(e){e.preventDefault()}return b.createElement(U,{className:`mx-auto max-w-md`,defaultItem:`direction`,items:ke,shortcuts:`letters`,onSubmit:e},b.createElement(W),ke.map(e=>b.createElement(G,{key:e.name,multiple:`multiple`in e&&!!e.multiple,name:e.name,required:e.required},b.createElement(K,{},e.title),b.createElement(Ee,{},e.description),b.createElement(q,{},e.choices.map(e=>b.createElement(J,{key:e.value,value:e.value},b.createElement(`span`,{className:`font-medium`},e.label),`description`in e?b.createElement(`span`,{className:`text-muted-foreground`},e.description):null)),`input`in e?b.createElement(De,{"aria-label":e.input.label,placeholder:e.input.placeholder}):null),b.createElement(Y))),b.createElement(X,{},b.createElement(Z),b.createElement(Oe),b.createElement(Q,{},`Next`),b.createElement($,{},`Save plan`)))})},examples:[{name:`Multiple Selection`,description:`Use the multiple prop for items that accept more than one fixed answer.`,code:`const items = [
  {
    name: "context",
    required: true,
    multiple: true,
    choices: [
      { value: "source", label: "Relevant source files" },
      { value: "tests", label: "Existing tests" },
      { value: "docs", label: "Architecture docs" },
    ],
  },
] as const

<Questionnaire items={items} onSubmit={handleSubmit}>
  <QuestionnaireItem name="context" multiple required>
    <QuestionnaireTitle>What context should the agent inspect?</QuestionnaireTitle>
    <QuestionnaireChoices>
      <QuestionnaireChoice value="source">Relevant source files</QuestionnaireChoice>
      <QuestionnaireChoice value="tests">Existing tests</QuestionnaireChoice>
      <QuestionnaireChoice value="docs">Architecture docs</QuestionnaireChoice>
    </QuestionnaireChoices>
    <QuestionnaireError />
  </QuestionnaireItem>
  <QuestionnaireActions>
    <QuestionnaireSubmit>Share context</QuestionnaireSubmit>
  </QuestionnaireActions>
</Questionnaire>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,items:[{name:`context`,required:!0,choices:[{value:`source`},{value:`tests`},{value:`docs`}]}],onSubmit:e=>e.preventDefault(),children:[(0,D.jsxs)(G,{name:`context`,multiple:!0,required:!0,children:[(0,D.jsx)(K,{children:`What context should the agent inspect?`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`source`,children:`Relevant source files`}),(0,D.jsx)(J,{value:`tests`,children:`Existing tests`}),(0,D.jsx)(J,{value:`docs`,children:`Architecture docs`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsx)(X,{children:(0,D.jsx)($,{children:`Share context`})})]})},{name:`Freeform Answer`,description:`Compose QuestionnaireInput with fixed choices when users can provide another answer.`,code:`<QuestionnaireItem name="approach" required>
  <QuestionnaireTitle>
    How should the agent approach this refactor?
  </QuestionnaireTitle>
  <QuestionnaireChoices>
    <QuestionnaireChoice value="incremental">
      Make the smallest safe change
    </QuestionnaireChoice>
    <QuestionnaireChoice value="module">
      Refactor one module at a time
    </QuestionnaireChoice>
    <QuestionnaireInput
      aria-label="Another refactoring approach"
      placeholder="Describe another approach..."
    />
  </QuestionnaireChoices>
  <QuestionnaireError />
</QuestionnaireItem>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,items:[{name:`approach`,required:!0,choices:[{value:`incremental`},{value:`module`},{value:`rewrite`}]}],onSubmit:e=>e.preventDefault(),children:[(0,D.jsxs)(G,{name:`approach`,required:!0,children:[(0,D.jsx)(K,{children:`How should the agent approach this refactor?`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`incremental`,children:`Make the smallest safe change`}),(0,D.jsx)(J,{value:`module`,children:`Refactor one module at a time`}),(0,D.jsx)(J,{value:`rewrite`,children:`Replace implementation`}),(0,D.jsx)(De,{"aria-label":`Another approach`,placeholder:`Describe another approach...`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsx)(X,{children:(0,D.jsx)($,{children:`Use approach`})})]})},{name:`Explicit Skip`,description:`Add QuestionnaireSkip when an optional item may be intentionally left unanswered.`,code:`<QuestionnaireActions>
  <QuestionnairePrevious />
  <QuestionnaireSkip />
  <QuestionnaireNext>Next</QuestionnaireNext>
  <QuestionnaireSubmit>Submit brief</QuestionnaireSubmit>
</QuestionnaireActions>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,defaultItem:`task`,items:[{name:`task`,required:!0},{name:`constraints`}],onSubmit:e=>e.preventDefault(),children:[(0,D.jsx)(W,{}),(0,D.jsxs)(G,{name:`task`,required:!0,children:[(0,D.jsx)(K,{children:`What kind of change is this?`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`feature`,children:`Feature`}),(0,D.jsx)(J,{value:`fix`,children:`Bug fix`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(G,{name:`constraints`,children:[(0,D.jsx)(K,{children:`Any constraints?`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`preserve-api`,children:`Preserve API`}),(0,D.jsx)(De,{"aria-label":`Other constraint`,placeholder:`Describe another constraint...`})]})]}),(0,D.jsxs)(X,{children:[(0,D.jsx)(Z,{}),(0,D.jsx)(Oe,{}),(0,D.jsx)(Q,{children:`Next`}),(0,D.jsx)($,{children:`Submit brief`})]})]})},{name:`Shortcuts`,description:`Assign a letter or number key to each answer with shortcuts.`,code:`<Questionnaire
  items={items}
  shortcuts="letters"
  onSubmit={handleSubmit}
>
  <QuestionnaireItem name="action" required>
    <QuestionnaireTitle>What should the agent do next?</QuestionnaireTitle>
    <QuestionnaireChoices>
      <QuestionnaireChoice value="inspect">Inspect implementation</QuestionnaireChoice>
      <QuestionnaireChoice value="tests">Run tests</QuestionnaireChoice>
      <QuestionnaireChoice value="patch">Prepare patch</QuestionnaireChoice>
    </QuestionnaireChoices>
    <QuestionnaireError />
  </QuestionnaireItem>
</Questionnaire>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,items:[{name:`action`,required:!0,choices:[{value:`inspect`},{value:`tests`},{value:`patch`}]}],shortcuts:`letters`,onSubmit:e=>e.preventDefault(),children:[(0,D.jsxs)(G,{name:`action`,required:!0,children:[(0,D.jsx)(K,{children:`What should the agent do next?`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`inspect`,children:`Inspect implementation`}),(0,D.jsx)(J,{value:`tests`,children:`Run tests`}),(0,D.jsx)(J,{value:`patch`,children:`Prepare patch`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsx)(X,{children:(0,D.jsx)($,{children:`Confirm action`})})]})},{name:`Custom Validation`,description:`Combine controlled navigation with an external schema like Zod to return to invalid items and show errors.`,code:`const questionnaireSchema = z.object({
  detail: z.enum(["summary", "complete"]),
  audience: z.enum(["team", "public"]),
})

<Questionnaire item={item} items={items} onItemChange={setItem} onSubmit={handleSubmit}>
  <QuestionnaireItem invalid={Boolean(errors.detail)} name="detail" required>
    <QuestionnaireTitle>How much detail should the answer include?</QuestionnaireTitle>
    <QuestionnaireChoices>
      <QuestionnaireChoice value="summary">Concise summary</QuestionnaireChoice>
      <QuestionnaireChoice value="complete">Complete answer</QuestionnaireChoice>
    </QuestionnaireChoices>
    <QuestionnaireError>{errors.detail}</QuestionnaireError>
  </QuestionnaireItem>
</Questionnaire>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,item:`detail`,items:[{name:`detail`,required:!0},{name:`audience`,required:!0}],onItemChange:()=>void 0,onSubmit:e=>e.preventDefault(),children:[(0,D.jsxs)(G,{invalid:!0,name:`detail`,required:!0,children:[(0,D.jsx)(K,{children:`How much detail should the answer include?`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`summary`,children:`Concise summary`}),(0,D.jsx)(J,{value:`complete`,children:`Complete answer`})]}),(0,D.jsx)(Y,{children:`Public answers need enough context. Choose a complete answer.`})]}),(0,D.jsxs)(G,{name:`audience`,required:!0,children:[(0,D.jsx)(K,{children:`Who will read the answer?`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`team`,children:`My team`}),(0,D.jsx)(J,{value:`public`,children:`Public audience`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(X,{children:[(0,D.jsx)(Z,{}),(0,D.jsx)(Q,{children:`Next`}),(0,D.jsx)($,{children:`Validate`})]})]})},{name:`Controlled`,description:`Control the active item from host state, such as returning to an invalid step.`,code:`<Questionnaire
  item={item}
  items={items}
  onItemChange={setItem}
  onSubmit={handleSubmit}
>
  <QuestionnaireProgress />
  <QuestionnaireItem name="scope" required>{/* ... */}</QuestionnaireItem>
  <QuestionnaireItem name="checks" required>{/* ... */}</QuestionnaireItem>
  <QuestionnaireItem name="output" required>{/* ... */}</QuestionnaireItem>
</Questionnaire>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,item:`scope`,items:[{name:`scope`,required:!0},{name:`checks`,required:!0},{name:`output`,required:!0}],onItemChange:()=>void 0,onSubmit:e=>e.preventDefault(),children:[(0,D.jsx)(W,{}),(0,D.jsxs)(G,{name:`scope`,required:!0,children:[(0,D.jsx)(K,{children:`What may the agent change?`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`component`,children:`Target component`}),(0,D.jsx)(J,{value:`feature`,children:`Feature area`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(G,{name:`checks`,required:!0,children:[(0,D.jsx)(K,{children:`Verification depth`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`targeted`,children:`Targeted tests`}),(0,D.jsx)(J,{value:`full`,children:`Full checks`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(G,{name:`output`,required:!0,children:[(0,D.jsx)(K,{children:`Final output`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`summary`,children:`Summary`}),(0,D.jsx)(J,{value:`handoff`,children:`Detailed handoff`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(X,{children:[(0,D.jsx)(Z,{}),(0,D.jsx)(Q,{children:`Next`}),(0,D.jsx)($,{children:`Save workflow`})]})]})},{name:`Resume`,description:`Restore a saved active item and default answers, then reset changes back to that saved state.`,code:`<Questionnaire
  defaultItem="verification"
  items={items}
  onReset={() => toast("Saved answers restored")}
  onSubmit={handleSubmit}
>
  <QuestionnaireProgress />
  <QuestionnaireItem name="change" required>{/* ... */}</QuestionnaireItem>
  <QuestionnaireItem name="verification" multiple required>{/* ... */}</QuestionnaireItem>
  <QuestionnaireItem name="notes">{/* ... */}</QuestionnaireItem>
</Questionnaire>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,defaultItem:`verification`,items:[{name:`change`,required:!0},{name:`verification`,required:!0},{name:`notes`}],onSubmit:e=>e.preventDefault(),children:[(0,D.jsx)(W,{}),(0,D.jsxs)(G,{name:`change`,required:!0,children:[(0,D.jsx)(K,{children:`Migration type`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`incremental`,defaultChecked:!0,children:`Incremental migration`}),(0,D.jsx)(J,{value:`cutover`,children:`Single cutover`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(G,{name:`verification`,multiple:!0,required:!0,children:[(0,D.jsx)(K,{children:`Verification`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`tests`,defaultChecked:!0,children:`Run tests`}),(0,D.jsx)(J,{value:`typecheck`,defaultChecked:!0,children:`Typecheck`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(G,{name:`notes`,children:[(0,D.jsx)(K,{children:`Notes`}),(0,D.jsx)(De,{"aria-label":`Saved note`,defaultValue:`Keep public API stable.`})]}),(0,D.jsxs)(X,{children:[(0,D.jsx)(o,{type:`reset`,variant:`outline`,children:`Reset`}),(0,D.jsx)(Z,{}),(0,D.jsx)(Q,{children:`Next`}),(0,D.jsx)($,{children:`Update draft`})]})]})},{name:`Conditional Items`,description:`Disable items that do not apply to earlier answers.`,code:`const items = [
  { name: "runtime", required: true },
  { name: "environment", required: true, disabled: runtime !== "cloud" },
  { name: "approval", required: true },
]

<Questionnaire items={items} onSubmit={handleSubmit}>
  <QuestionnaireItem name="runtime" required>{/* ... */}</QuestionnaireItem>
  <QuestionnaireItem name="environment" disabled={runtime !== "cloud"} required>
    {/* ... */}
  </QuestionnaireItem>
  <QuestionnaireItem name="approval" required>{/* ... */}</QuestionnaireItem>
</Questionnaire>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,defaultItem:`runtime`,items:[{name:`runtime`,required:!0},{name:`environment`,required:!0,disabled:!0},{name:`approval`,required:!0}],onSubmit:e=>e.preventDefault(),children:[(0,D.jsx)(W,{}),(0,D.jsxs)(G,{name:`runtime`,required:!0,children:[(0,D.jsx)(K,{children:`Runtime`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`local`,children:`Local workspace`}),(0,D.jsx)(J,{value:`cloud`,children:`Cloud workspace`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(G,{disabled:!0,name:`environment`,required:!0,children:[(0,D.jsx)(K,{children:`Cloud environment`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`preview`,children:`Preview`}),(0,D.jsx)(J,{value:`staging`,children:`Staging`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(G,{name:`approval`,required:!0,children:[(0,D.jsx)(K,{children:`Approval timing`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`writes`,children:`Before writes`}),(0,D.jsx)(J,{value:`sensitive`,children:`Sensitive only`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(X,{children:[(0,D.jsx)(Z,{}),(0,D.jsx)(Q,{children:`Next`}),(0,D.jsx)($,{children:`Save plan`})]})]})},{name:`Navigation State`,description:`Read item status to opt into disabled navigation and custom action styling.`,code:`<QuestionnaireNext
  className="data-[status=unanswered]:opacity-50"
  disabled={unanswered}
  variant="secondary"
>
  Next
</QuestionnaireNext>
<QuestionnaireSubmit disabled={unanswered}>
  Save permissions
</QuestionnaireSubmit>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,defaultItem:`permission`,items:[{name:`permission`,required:!0},{name:`verification`,required:!0}],onSubmit:e=>e.preventDefault(),children:[(0,D.jsx)(W,{}),(0,D.jsxs)(G,{name:`permission`,required:!0,children:[(0,D.jsx)(K,{children:`Permission scope`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`files`,children:`Files`}),(0,D.jsx)(J,{value:`config`,children:`Files and config`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(G,{name:`verification`,required:!0,children:[(0,D.jsx)(K,{children:`Verification`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`tests`,children:`Tests`}),(0,D.jsx)(J,{value:`all`,children:`All checks`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(X,{children:[(0,D.jsx)(Z,{}),(0,D.jsx)(Q,{variant:`secondary`,children:`Next`}),(0,D.jsx)($,{children:`Save permissions`})]})]})},{name:`Custom Progress`,description:`Use Progress render state to build a custom progress indicator.`,code:`<QuestionnaireProgress
  className="w-full"
  render={(props, state) => (
    <div {...props}>
      <div className="mb-2 flex gap-1.5" aria-hidden="true">
        {Array.from({ length: state.total }, (_, index) => (
          <span
            key={index}
            className={
              index < state.current
                ? "h-1.5 flex-1 rounded-full bg-primary"
                : "h-1.5 flex-1 rounded-full bg-muted"
            }
          />
        ))}
      </div>
      <span>Checkpoint {state.current} of {state.total}</span>
    </div>
  )}
/>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,defaultItem:`scope`,items:[{name:`scope`,required:!0},{name:`strategy`,required:!0},{name:`tests`,required:!0}],onSubmit:e=>e.preventDefault(),children:[(0,D.jsx)(W,{className:`w-full`,render:(e,t)=>(0,D.jsxs)(`div`,{...e,children:[(0,D.jsx)(`div`,{className:`mb-2 flex gap-1.5`,"aria-hidden":`true`,children:Array.from({length:t.total},(e,n)=>(0,D.jsx)(`span`,{className:n<t.current?`bg-primary h-1.5 flex-1 rounded-full`:`bg-muted h-1.5 flex-1 rounded-full`},n))}),(0,D.jsxs)(`span`,{children:[`Checkpoint `,t.current,` of `,t.total]})]})}),(0,D.jsxs)(G,{name:`scope`,required:!0,children:[(0,D.jsx)(K,{children:`Change scope`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`small`,children:`Small patch`}),(0,D.jsx)(J,{value:`large`,children:`Large refactor`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(X,{children:[(0,D.jsx)(Z,{}),(0,D.jsx)(Q,{children:`Next`}),(0,D.jsx)($,{children:`Finish plan`})]})]})},{name:`Animated Items`,description:`Animate the active item while keeping progress and navigation stationary.`,code:`const itemClassName =
  "data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-2 data-active:duration-300 motion-reduce:animate-none"

<QuestionnaireItem className={itemClassName} name="task" required>
  {/* ... */}
</QuestionnaireItem>`,preview:(0,D.jsxs)(U,{className:`mx-auto max-w-md`,defaultItem:`task`,items:[{name:`task`,required:!0},{name:`review`,required:!0}],onSubmit:e=>e.preventDefault(),children:[(0,D.jsx)(W,{}),(0,D.jsxs)(G,{className:`data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-2 data-active:duration-300`,name:`task`,required:!0,children:[(0,D.jsx)(K,{children:`Task`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`implement`,children:`Implement`}),(0,D.jsx)(J,{value:`debug`,children:`Debug`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(X,{children:[(0,D.jsx)(Z,{}),(0,D.jsx)(Q,{children:`Next`}),(0,D.jsx)($,{children:`Save workflow`})]})]})},{name:`Card`,description:`Compose Questionnaire with Card slots while keeping title and description semantic.`,code:`<Questionnaire defaultItem="task" items={items} shortcuts="numbers" onSubmit={handleSubmit}>
  <Card>
    <QuestionnaireItem aria-labelledby={taskTitleId} name="task" required>
      <CardHeader>
        <QuestionnaireTitle id={taskTitleId} render={<CardTitle />}>
          What should the agent work on?
        </QuestionnaireTitle>
      </CardHeader>
    </QuestionnaireItem>
  </Card>
</Questionnaire>`,preview:(0,D.jsx)(U,{className:`mx-auto max-w-md`,defaultItem:`task`,items:[{name:`task`,required:!0},{name:`output`,required:!0}],shortcuts:`numbers`,onSubmit:e=>e.preventDefault(),children:(0,D.jsxs)(g,{className:`w-full`,children:[(0,D.jsxs)(G,{name:`task`,required:!0,children:[(0,D.jsxs)(h,{children:[(0,D.jsx)(K,{render:(0,D.jsx)(l,{}),children:`What should the agent work on?`}),(0,D.jsx)(Ee,{render:(0,D.jsx)(c,{}),children:`Choose the next task.`})]}),(0,D.jsx)(m,{children:(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`fix`,children:`Fix tests`}),(0,D.jsx)(J,{value:`docs`,children:`Update docs`})]})})]}),(0,D.jsx)(y,{children:(0,D.jsxs)(X,{className:`w-full`,children:[(0,D.jsx)(Z,{}),(0,D.jsx)(Q,{children:`Next`}),(0,D.jsx)($,{children:`Create task`})]})})]})})},{name:`Dialog`,description:`Compose Questionnaire inside a Dialog while keeping cancellation and dismissal host-owned.`,code:`<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger render={<Button variant="outline" />}>Open clarification</DialogTrigger>
  <DialogContent>
    <Questionnaire defaultItem="scope" items={items} onSubmit={handleSubmit}>
      <QuestionnaireItem name="scope" required>{/* ... */}</QuestionnaireItem>
      <QuestionnaireItem name="tests" required>{/* ... */}</QuestionnaireItem>
      <DialogFooter>
        <DialogClose render={<Button type="button" variant="outline" />}>Cancel</DialogClose>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext>Next</QuestionnaireNext>
          <QuestionnaireSubmit>Send answer</QuestionnaireSubmit>
        </QuestionnaireActions>
      </DialogFooter>
    </Questionnaire>
  </DialogContent>
</Dialog>`,preview:(0,D.jsxs)(f,{children:[(0,D.jsx)(u,{render:(0,D.jsx)(o,{variant:`outline`}),children:`Open clarification`}),(0,D.jsx)(s,{children:(0,D.jsxs)(U,{defaultItem:`scope`,items:[{name:`scope`,required:!0},{name:`tests`,required:!0}],onSubmit:e=>e.preventDefault(),children:[(0,D.jsxs)(G,{name:`scope`,required:!0,children:[(0,D.jsx)(W,{}),(0,D.jsx)(K,{render:(0,D.jsx)(p,{}),children:`Which files are in scope?`}),(0,D.jsx)(Ee,{render:(0,D.jsx)(_,{}),children:`Choose change scope.`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`component`,children:`Component only`}),(0,D.jsx)(J,{value:`feature`,children:`Feature directory`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(G,{name:`tests`,required:!0,children:[(0,D.jsx)(W,{}),(0,D.jsx)(K,{render:(0,D.jsx)(p,{}),children:`Verification depth?`}),(0,D.jsxs)(q,{children:[(0,D.jsx)(J,{value:`targeted`,children:`Targeted tests`}),(0,D.jsx)(J,{value:`full`,children:`Full workspace checks`})]}),(0,D.jsx)(Y,{})]}),(0,D.jsxs)(d,{children:[(0,D.jsx)(v,{render:(0,D.jsx)(o,{type:`button`,variant:`outline`}),children:`Cancel`}),(0,D.jsxs)(X,{children:[(0,D.jsx)(Z,{}),(0,D.jsx)(Q,{children:`Next`}),(0,D.jsx)($,{children:`Send answer`})]})]})]})})]})},{name:`Accessibility`,description:`QuestionnaireItem renders a fieldset and QuestionnaireTitle renders its legend. Active descriptions and errors are linked, invalid items set aria-invalid, and navigation uses native buttons.`,items:[{title:`Labeling`,description:`Always provide QuestionnaireInput an accessible name via visible label, aria-label, or aria-labelledby.`},{title:`Navigation`,description:`Successful navigation focuses the newly active item; failed validation focuses an available answer control.`}]},{name:`Composition`,description:`Questionnaire owns item order, active item, answer state, validation, progress, and navigation.`,code:`Questionnaire
├── QuestionnaireProgress
├── QuestionnaireItem
│   ├── QuestionnaireTitle
│   ├── QuestionnaireDescription
│   ├── QuestionnaireChoices
│   │   ├── QuestionnaireChoice
│   │   └── QuestionnaireInput
│   └── QuestionnaireError
└── QuestionnaireActions
    ├── QuestionnairePrevious
    ├── QuestionnaireSkip
    ├── QuestionnaireNext
    └── QuestionnaireSubmit`,preview:(0,D.jsx)(`pre`,{className:`bg-muted/30 w-full overflow-x-auto rounded-md border p-4 text-sm leading-relaxed`,children:`Questionnaire
├── QuestionnaireProgress
├── QuestionnaireItem
│   ├── QuestionnaireTitle
│   ├── QuestionnaireDescription
│   ├── QuestionnaireChoices
│   │   ├── QuestionnaireChoice
│   │   └── QuestionnaireInput
│   └── QuestionnaireError
└── QuestionnaireActions
    ├── QuestionnairePrevious
    ├── QuestionnaireSkip
    ├── QuestionnaireNext
    └── QuestionnaireSubmit`})},{name:`Server Rendering`,description:`Pass items to server-render active item, progress, actions, and answer shortcuts. See /docs/react/questionnaire for complete behavior.`},{name:`Unstyled`,description:`The behavior comes from @shadcn/react. Use it directly when you need custom markup and styling.`},{name:`API Reference`,description:`Styled parts inherit unstyled props. Navigation parts also accept Button size and variant props; QuestionnaireActions is a styled-only layout helper.`}]};export{Ae as questionnaireDoc};
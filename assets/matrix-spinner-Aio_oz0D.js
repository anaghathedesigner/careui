import{i as e,l as t,r as n,t as r}from"./dist-DtVyZPdI.js";var i=t(e(),1),a=n(),o=4,s=9.66,c=s/2,l=37,u=38,d=25,f=1,p=.55,m=.18,h=.06;function g(e){return Array(d).fill(e)}function _(e,t,n){let r=[...e];for(let e of t)r[e]=n;return r}function v(e,...t){let n=[...e];for(let[e,r]of t)n=_(n,e,r);return n}var y=[0,3,12,15],ee=[16,18,22,24],b=[...y,...ee],te=[1,2,4,8,7,11,13,14],ne=[17,19,21,23],x=[...te,...ne],re=[5,6,9,10],ie=[20],S=[...re,...ie],C=[[0,4,8,12],[16,19,22],[1,5,9,13],[17,20,23],[2,6,10,14],[18,21,24],[3,7,11,15]],w=[[0,1,2,3],[16,17,18],[4,5,6,7],[19,20,21],[8,9,10,11],[22,23,24],[12,13,14,15]];function ae(){let e=Array.from({length:13},()=>[]);for(let t=0;t<4;t++)for(let n=0;n<4;n++)e[n*2+t*2].push(t*4+n);for(let t=0;t<3;t++)for(let n=0;n<3;n++)e[n*2+1+(t*2+1)].push(16+t*3+n);return e}var T=ae();function oe(){let e=Array.from({length:13},()=>[]);for(let t=0;t<4;t++)for(let n=0;n<4;n++)e[(3-n)*2+t*2].push(t*4+n);for(let t=0;t<3;t++)for(let n=0;n<3;n++)e[(2-n)*2+1+(t*2+1)].push(16+t*3+n);return e}var E=oe(),D=[];for(let e=0;e<4;e++)for(let t=0;t<4;t++)D.push(Math.abs(t*2-3)+Math.abs(e*2-3));for(let e=0;e<3;e++)for(let t=0;t<3;t++)D.push(Math.abs(t*2+1-3)+Math.abs(e*2+1-3));var O=Array.from({length:7},()=>[]);for(let e=0;e<d;e++)O[D[e]].push(e);function k(){let e=g(m);return[v(e,[O[0],f]),v(e,[O[0],p],[O[1],f]),v(e,[O[0],m],[O[1],p],[O[2],f]),v(e,[O[1],m],[O[2],p],[O[3],f]),v(e,[O[2],m],[O[3],p],[O[4],f]),v(e,[O[3],m],[O[4],p],[O[5],f]),v(e,[O[4],m],[O[5],p],[O[6],f]),v(e,[O[5],m],[O[6],p]),e]}function se(){return[...k()].reverse()}function ce(){let e=g(m);return Array.from({length:12},(e,t)=>{let n=g(m);for(let e=0;e<7;e++){let r=t-e*1.2,i=r<0?m:r<1?m+.8200000000000001*r:r<2?p:m;for(let t of C[e])n[t]=Math.min(f,Math.max(h,i))}return n}).concat([e])}function le(){return Array.from({length:12},(e,t)=>{let n=g(m);for(let e=0;e<7;e++){let r=6-e,i=t-e*1.2,a=i<0?m:i<1?m+.8200000000000001*i:i<2?p:m;for(let e of C[r])n[e]=Math.min(f,Math.max(h,a))}return n})}function A(){let e=[];for(let t=0;t<=6;t++){let n=g(h);for(let e=0;e<=t;e++)for(let r of O[e])n[r]=e===t?f:p;e.push(n)}return e}function j(){return A().reverse()}function M(){let e=T.length;return Array.from({length:8},(t,n)=>{let r=g(m),i=Math.floor(n/8*e),a=(i-1+e)%e;for(let e of T[i])r[e]=f;for(let e of T[a])r[e]<p&&(r[e]=p);return r})}function N(){return[g(f),g(p),g(m),g(p)]}function P(){let e=g(m);return[v(e,[O[0],f]),v(e,[O[0],f],[O[1],p]),v(e,[O[0],p],[O[1],p*.7]),v(e,[O[0],p*.7]),v(e,[O[0],p*.4]),e]}function F(){let e=[];for(let t=0;t<10;t++){let n=Array.from({length:d},(e,n)=>{let r=t/9;return(n<16?(Math.floor(n/4)+n%4)%2:(Math.floor((n-16)/3)+(n-16)%3+1)%2)==0?m+.8200000000000001*(1-r):m+.8200000000000001*r});e.push(n)}return e}function I(){let e=[];for(let t=0;t<7;t++){let n=[...w[t]];t%2==1&&n.reverse(),e.push(...n)}return e.slice(0,14).map((t,n)=>{let r=g(m);for(let t=0;t<4;t++){let i=e[(n-t+e.length)%e.length];r[i]=t===0?f:t===1?p:t===2?p*.5:m}return r})}function L(){return Array.from({length:12},(e,t)=>g(m+.8200000000000001*(Math.sin(t/12*Math.PI*2)*.5+.5)))}function R(){let e=g(m);return[v(e,[S,p]),v(e,[S,f],[x,p]),v(g(p),[S,f]),v(e,[S,p],[x,m]),e]}function z(){let e=g(m);return[v(e,[S,m*.5]),v(e,[S,h],[x,m*.7]),v(g(m*.7),[S,h]),v(e,[S,m*.5]),e]}function B(){return Array.from({length:11},(e,t)=>{let n=g(m),r=t-1;if(r>=0&&r<T.length)for(let e of T[r])n[e]=f;let i=r-1;if(i>=0&&i<T.length)for(let e of T[i])n[e]=p;return n})}function V(){let e=g(m),t=Math.floor(T.length/2),n=Math.floor(E.length/2);return[v(e,[T[t],f]),v(e,[T[t],p],[E[n],p]),v(e,[E[n],f]),v(e,[E[n],p],[T[t],p]),v(e,[T[t],p]),e]}function H(){let e=T.length;return Array.from({length:13},(t,n)=>{let r=g(m);for(let t=0;t<e;t++){let i=Math.abs(t-n%e),a=i===0?f:i===1?p:i===2?.22999999999999998:m;for(let e of T[t])r[e]=a}return r})}function U(){return Array.from({length:10},(e,t)=>Array.from({length:d},(e,n)=>{let r=(D[n]*1.5+n*7%3)%10,i=Math.abs((t-r+10)%10-5)/5;return m+.8200000000000001*(1-i)*(1-i)}))}function W(){return[g(f),g(f*.8),g(m),g(m)]}function ue(){let e=A().slice(0,4),t=j().slice(0,4);return[...e,...t]}function de(){return Array.from({length:14},(e,t)=>{let n=g(m);for(let e=0;e<7;e++){let r=Math.abs(e-t%7),i=r===0?f:r===1?p:m;for(let t of C[e])n[t]=i}return n})}function G(){return Array.from({length:10},(e,t)=>g(h+t/9*.12))}function fe(){return G().reverse()}function pe(){let e=v(g(m),[S,f],[x,h],[b,h]),t=v(g(m),[S,p],[x,p],[b,m]),n=g(m);return[e,t,n,v(g(m),[S,h],[x,p],[b,f]),t,n]}function me(){let e=g(m),t=[0,3,15,12];return Array.from({length:8},(n,r)=>{let i=[...e];return i[t[r%4]]=f,i[t[(r-1+4)%4]]=p,i})}function he(){let e=Array.from({length:6},(e,t)=>{let n=g(m);if(T[t*2])for(let e of T[t*2])n[e]=f;if(T[t*2-2])for(let e of T[t*2-2])n[e]=p;return n});return[...e,...e.slice().reverse()]}function ge(){let e=O[1]??[],t=e.length,n=g(m);return Array.from({length:6},(r,i)=>{let a=[...n];return a[e[i%t]]=f,a[e[(i+Math.floor(t/2))%t]]=f,a[e[(i-1+t)%t]]=p,a[e[(i+Math.floor(t/2)-1+t)%t]]=p,a})}function _e(){return Array.from({length:15},(e,t)=>Array.from({length:d},(e,n)=>{let r=Math.round(D[n]/6*10);return t<r?h:t===r?f:t===r+1?p:t===r+2?p*.6:m}))}function K(){let e=g(m);return[v(e,[O[0],f]),v(e,[O[0],f],[O[1],p]),v(e,[O[0],p],[O[1],f],[O[2],p]),v(e,[O[1],p],[O[2],f],[O[3],p]),v(e,[O[2],p],[O[3],p]),v(e,[O[3],m*1.5]),e]}function ve(){return Array.from({length:9},(e,t)=>{let n=t/8;return Array.from({length:d},(e,t)=>t<16?m+.8200000000000001*(1-n):m+.8200000000000001*n)})}function ye(){return Array.from({length:10},(e,t)=>{let n=g(m),r=t%7;for(let e of w[r])n[e]=f;let i=(r-1+7)%7;for(let e of w[i])n[e]=p;return n})}function be(){return[v(g(m),[O[0],f]),v(g(m),[O[1],f],[O[0],p]),v(g(m),[O[2],f],[O[1],p]),v(g(m),[O[3],f],[O[2],p]),v(g(m),[O[4],f],[O[3],p]),g(m)]}function xe(){let e=g(m);return[e,v(e,[b,h],[S,p]),v(e,[b,h],[x,m*.7],[S,f]),v(e,[b,h],[x,m*.5],[S,f]),v(e,[b,m*.7],[S,p]),v(e,[b,m],[S,m]),v(e,[S,p]),e]}function Se(){return[g(f),v(g(p),[S,f]),v(g(m*1.3),[S,p]),v(g(m*1.1),[S,p*.8]),v(g(m),[S,m*1.3]),v(g(m),[S,m*1.1]),v(g(m),[S,m*1.05]),g(m)]}function Ce(){let e=O[1]??[],t=O[2]??[],n=g(m);return[n,v(n,[e,p*.5]),v(n,[e,p]),v(n,[e,f]),v(n,[e,f],[t,p*.5]),v(n,[e,p],[t,p]),v(n,[e,m*1.3],[t,m*1.1]),v(n,[e,m*1.1]),n]}function we(){let e=[C[0],C[1],C[2]].flat(),t=[C[4],C[5],C[6]].flat(),n=C[3];return Array.from({length:10},(r,i)=>{let a=Math.sin(i/10*Math.PI*2),o=m+.8200000000000001*Math.max(0,a),s=m+.8200000000000001*Math.max(0,-a);return Array.from({length:d},(r,i)=>e.includes(i)?o:t.includes(i)?s:(n.includes(i),m))})}function Te(){let e=g(m);return[v(e,[O[0],f]),v(e,[O[0],p*.8]),v(e,[O[0],f]),v(e,[O[0],p*.5]),e]}function Ee(){let e=[w[0],w[1]].flat(),t=[w[5],w[6]].flat(),n=[w[2],w[3],w[4]].flat(),r=g(m);return[r,v(r,[e,p],[t,p]),v(r,[e,f],[t,f],[n,m*.7]),v(r,[e,f],[t,f],[n,h]),v(r,[e,p],[t,p]),v(r,[e,m],[t,m]),v(r,[n,p]),r]}function De(){let e=[...w[2],...w[3].slice().reverse(),...w[4]];return Array.from({length:14},(t,n)=>{let r=g(m);for(let t=0;t<3;t++){let i=e[(n-t+e.length)%e.length];r[i]=t===0?f:t===1?p:m*1.3}return r})}function Oe(){return Array.from({length:11},(e,t)=>Array.from({length:d},(e,n)=>{let r=D[n];return t>r+2?m:t>r+1?p*.5:t>r?p:t===r?f:h}))}function ke(){return Array.from({length:12},(e,t)=>Array.from({length:d},(e,n)=>{let r=n<16?Math.floor(n/4)*2:Math.floor((n-16)/3)*2+1;return r<=6.5/11*t?m:r<=6.5/11*t+1?f:h}))}function Ae(){return K()}function je(){return Array.from({length:15},(e,t)=>{let n=g(m);for(let e=0;e<7;e++){let r=(t+e*2)%7,i=r===0?f:r===1?p:r===6?p*.6:m;for(let t of C[e])n[t]=i}return n})}function Me(){let e=g(m);return[e,v(e,[b,h],[S,p]),v(g(h),[S,f]),v(g(h),[S,f],[O[1],p*.4]),v(g(m*.5),[S,p]),e]}function q(){return[g(h),g(h*2),v(g(m*.5),[S,p]),v(g(m),[S,f]),v(g(m*1.1),[S,f],[x,p]),v(g(m),[S,p]),g(m*1.05),g(m)]}function Ne(){return q().reverse()}function Pe(){return[g(f),v(g(m),[O[0],f],[O[1],p]),v(g(m),[O[0],p],[O[1],m*1.3]),v(g(m),[O[0],m*1.2]),g(m)]}function Fe(){return Array.from({length:13},(e,t)=>{let n=g(m),r=t%7;for(let e of w[r])n[e]=f;if(t>=1)for(let e of w[(r-1+7)%7])n[e]=p;return n})}function Ie(){return Array.from({length:10},(e,t)=>Array.from({length:d},(e,n)=>{let r=n<16?n%4*2:(n-16)%3*2+1;return m+.37000000000000005*(Math.sin((t+r)/10*Math.PI*2)*.5+.5)}))}function Le(){let e=g(m);return[e,v(e,[O[0],p*.7]),v(e,[O[0],p],[O[1],p*.5]),v(e,[O[1],p*.7],[O[2],p*.4]),v(e,[O[2],p*.5]),e]}function Re(){let e=[1,2,17,4,5,6,7,19,20,21,8,9,10,11,23,13,14],t=[16,18,4,5,6,7,19,20,21,9,10,23],n=e.filter(e=>!t.includes(e)),r=t.filter(t=>!e.includes(t)),i=e.filter(e=>t.includes(e)),a=g(m);return[v(a,[e,f]),v(a,[e,p]),v(a,[e,f]),v(a,[i,f],[n,p],[r,p]),v(a,[i,f],[n,h],[r,f]),v(a,[t,p]),v(a,[t,f]),v(a,[t,p]),v(a,[t,f]),v(a,[i,f],[r,p],[n,p]),v(a,[i,f],[r,h],[n,f])]}function ze(){let e=[16,18,4,5,6,7,19,20,21,9,10,23],t=g(m);return[t,v(t,[e,p]),v(t,[e,f]),v(t,[e,p]),v(t,[e,f]),v(t,[e,m*1.4]),t]}function Be(){let e=[17,6,21,10,23,9,19,5],t=e.length;return Array.from({length:t},(n,r)=>{let i=g(m);return i[e[r]]=f,i[e[(r-1+t)%t]]=p,i[e[(r-2+t)%t]]=p*.45,i})}function Ve(){let e=[17,6,21,10,23,9,19,5],t=[8,22,13,23,10,21,7],n=e.length,r=g(m),i=[];for(let t=0;t<12;t++){let r=g(m);r[e[t%n]]=f,r[e[(t-1+n)%n]]=p,r[e[(t-2+n)%n]]=p*.45,i.push(r)}return i.push(v(r,[t,p*.5])),i.push(v(r,[t,p])),i.push(v(r,[t,p*1.4])),i.push(v(r,[t,f])),{frames:i,intervals:[...Array(12).fill(11),70,70,70,90]}}function He(){let e=[17,6,21,10,23,9,19,5],t=[0,16,5,20,10,24,15],n=[3,18,6,20,9,22,12],r=Array.from(new Set([...t,...n])),i=e.length,a=g(m),o=[];for(let t=0;t<12;t++){let n=g(m);n[e[t%i]]=f,n[e[(t-1+i)%i]]=p,n[e[(t-2+i)%i]]=p*.45,o.push(n)}return o.push(v(a,[r,p*.5])),o.push(v(a,[r,p])),o.push(v(a,[r,p*1.4])),o.push(v(a,[r,f])),{frames:o,intervals:[...Array(12).fill(11),70,70,70,90]}}function Ue(){let e=[17,6,21,10,23,9,19,5],t=e.length,n=[];for(let r=0;r<12;r++){let i=g(m);i[e[r%t]]=f,i[e[(r-1+t)%t]]=p,i[e[(r-2+t)%t]]=p*.45,n.push(i)}let r=[3,0,5,2,6,1,4];for(let e=0;e<7;e++){let t=g(h);for(let n=0;n<7;n++){let i=r[n],a=C[n],o=a[a.length-1],s=a[a.length-2],c=a[a.length-3]??-1;e>i?t[o]=f:e===i?(t[o]=f,t[s]=p*.4):e===i-1?(t[s]=f,c>=0&&(t[c]=p*.5)):e===i-2&&c>=0&&(t[c]=p*.7)}n.push(t)}let i=C.map(e=>e[e.length-1]),a=g(h);for(let e of i)a[e]=f;for(let e=0;e<10;e++)n.push([...a]);return n}var We={"center-expand":{frames:k(),interval:120},"center-collapse":{frames:se(),interval:120},"edge-in":{frames:ce(),interval:80},"edge-out":{frames:le(),interval:80},"diamond-grow":{frames:A(),interval:140},"diamond-shrink":{frames:j(),interval:140},"soft-rotate":{frames:M(),interval:160},"micro-pulse":{frames:N(),interval:220},"focus-dot":{frames:P(),interval:150},"crossfade-grid":{frames:F(),interval:100},"dot-shift":{frames:I(),interval:70},"grid-breathe":{frames:L(),interval:140},"center-glow":{frames:R(),interval:200},"center-dim":{frames:z(),interval:200},"slide-diamond":{frames:B(),interval:90},"grid-tilt":{frames:V(),interval:180},"soft-wave-diag":{frames:H(),interval:80},"density-shift":{frames:U(),interval:120},"grid-blink-soft":{frames:W(),interval:260},"dot-expand-contract":{frames:ue(),interval:150},"soft-shimmer":{frames:de(),interval:70},"grid-fade-in":{frames:G(),interval:100},"grid-fade-out":{frames:fe(),interval:100},"center-weight":{frames:pe(),interval:160},"corner-pulse":{frames:me(),interval:120},"diamond-sweep":{frames:he(),interval:80},"soft-orbit-mini":{frames:ge(),interval:160},"grid-stagger-soft":{frames:_e(),interval:60},"center-ring":{frames:K(),interval:140},"dot-morph-soft":{frames:ve(),interval:130},"diamond-shift":{frames:ye(),interval:100},"soft-zoom-grid":{frames:be(),interval:180},"grid-lift":{frames:xe(),interval:120},"grid-settle":{frames:Se(),interval:120},"dot-focus-ring":{frames:Ce(),interval:110},"grid-balance":{frames:we(),interval:140},"center-bounce-soft":{frames:Te(),interval:200},"diamond-stretch":{frames:Ee(),interval:140},"dot-glide":{frames:De(),interval:70},"grid-reveal":{frames:Oe(),interval:90},"grid-mask-reveal":{frames:ke(),interval:80},"dot-echo":{frames:Ae(),interval:160},"grid-soft-shift":{frames:je(),interval:60},"diamond-focus":{frames:Me(),interval:150},"grid-expand-soft":{frames:q(),interval:140},"grid-contract-soft":{frames:Ne(),interval:140},"center-ping":{frames:Pe(),interval:220},"dot-highlight-pass":{frames:Fe(),interval:80},"grid-float-soft":{frames:Ie(),interval:150},"diamond-pulse-soft":{frames:Le(),interval:180},"spin-cw":{frames:Be(),interval:11},"spin-check":(()=>{let{frames:e,intervals:t}=Ve();return{frames:e,interval:30,loop:!1,intervals:t}})(),"spin-cross":(()=>{let{frames:e,intervals:t}=He();return{frames:e,interval:30,loop:!1,intervals:t}})(),"spin-fall":{frames:Ue(),interval:30,loop:!1},"heart-pulse":{frames:ze(),interval:150},"heart-plus":{frames:Re(),interval:140}},J=new Set,Y=null;function X(e){for(let t of J)t(e);Y=J.size>0?requestAnimationFrame(X):null}function Ge(e){return J.add(e),Y===null&&(Y=requestAnimationFrame(X)),()=>{J.delete(e)}}var Z=!1;if(typeof window<`u`&&typeof window.matchMedia==`function`){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);Z=e.matches,e.addEventListener(`change`,e=>{Z=e.matches})}var Q={12:12,16:16,20:20,24:24,32:32,48:48};function Ke({name:e=`center-expand`,size:t=`24`,className:n,style:d,...f}){let p=We[e],m=i.useRef([]),h=p.intervals?Math.min(...p.intervals):p.interval,g=Math.round(h*.8);i.useEffect(()=>{if(Z)return;let e=m.current,t=0,n=null,r=Ge(i=>{if(n??=i,i<n)return;let a=p.intervals?.[t]??p.interval;if(n+=a,n<i&&(n=i+a),t=p.loop===!1?t+1:(t+1)%p.frames.length,p.loop===!1&&t>=p.frames.length){r();return}let o=p.frames[t];for(let t=0;t<e.length;t++){let n=e[t];n&&(n.style.opacity=String(o[t]))}});return r},[e,p]);let _=p.frames[0],v=Q[t],y=Math.round(u/l*v);return(0,a.jsxs)(`span`,{"data-slot":`matrix-spinner`,role:`status`,"aria-label":`Loading`,className:r(`inline-block select-none`,n),style:{width:v,height:y,...d},...f,children:[(0,a.jsxs)(`svg`,{width:l,height:u,viewBox:`0 0 ${l} ${u}`,style:{width:`100%`,height:`100%`},"aria-hidden":`true`,children:[Array.from({length:4},(e,t)=>Array.from({length:4},(e,n)=>{let r=t*4+n,i=n*s+2,c=t*s+2;return(0,a.jsx)(`rect`,{ref:e=>{m.current[r]=e},"data-dot":!0,x:i,y:c,width:o,height:o,transform:`rotate(-45 ${i+o/2} ${c+o/2})`,fill:`currentColor`,style:{opacity:_[r],willChange:`opacity`,transition:`opacity ${g}ms cubic-bezier(0.23, 1, 0.32, 1)`}},`b-${r}`)})),Array.from({length:3},(e,t)=>Array.from({length:3},(e,n)=>{let r=16+t*3+n,i=n*s+c+2,l=t*s+c+2;return(0,a.jsx)(`rect`,{ref:e=>{m.current[r]=e},"data-dot":!0,x:i,y:l,width:o,height:o,transform:`rotate(-45 ${i+o/2} ${l+o/2})`,fill:`currentColor`,style:{opacity:_[r],willChange:`opacity`,transition:`opacity ${g}ms cubic-bezier(0.23, 1, 0.32, 1)`}},`o-${r}`)}))]}),(0,a.jsx)(`span`,{className:`sr-only`,children:`Loading…`})]})}var $=i.memo(Ke);$.displayName=`MatrixSpinner`;var qe=`center-expand.center-collapse.edge-in.edge-out.diamond-grow.diamond-shrink.soft-rotate.micro-pulse.focus-dot.crossfade-grid.dot-shift.grid-breathe.center-glow.center-dim.slide-diamond.grid-tilt.soft-wave-diag.density-shift.grid-blink-soft.dot-expand-contract.soft-shimmer.grid-fade-in.grid-fade-out.center-weight.corner-pulse.diamond-sweep.soft-orbit-mini.grid-stagger-soft.center-ring.dot-morph-soft.diamond-shift.soft-zoom-grid.grid-lift.grid-settle.dot-focus-ring.grid-balance.center-bounce-soft.diamond-stretch.dot-glide.grid-reveal.grid-mask-reveal.dot-echo.grid-soft-shift.diamond-focus.grid-expand-soft.grid-contract-soft.center-ping.dot-highlight-pass.grid-float-soft.diamond-pulse-soft.spin-cw.spin-check.spin-cross.spin-fall.heart-pulse.heart-plus`.split(`.`);function Je(){let[e,t]=i.useState(0);return i.createElement(`div`,{className:`flex flex-col items-center gap-4`},i.createElement($,{key:e,name:`spin-check`,size:`16`}),i.createElement(`button`,{className:`text-xs text-muted-foreground underline underline-offset-2 cursor-pointer`,onClick:()=>t(e=>e+1)},`Replay`))}function Ye(){let[e,t]=i.useState(0);return i.createElement(`div`,{className:`flex flex-col items-center gap-4`},i.createElement($,{key:e,name:`spin-cross`,size:`16`}),i.createElement(`button`,{className:`text-xs text-muted-foreground underline underline-offset-2 cursor-pointer`,onClick:()=>t(e=>e+1)},`Replay`))}function Xe(){let[e,t]=i.useState(0);return i.createElement(`div`,{className:`flex flex-col items-center gap-4`},i.createElement($,{key:e,name:`spin-fall`,size:`16`}),i.createElement(`button`,{className:`text-xs text-muted-foreground underline underline-offset-2 cursor-pointer`,onClick:()=>t(e=>e+1)},`Replay`))}function Ze(){let[e,t]=i.useState(`spin-cw`),[n,r]=i.useState(0),a=i.useRef(void 0),o=e=>{clearTimeout(a.current),r(e=>e+1),t(`spin-cw`),a.current=setTimeout(()=>t(e),1200)};return i.useEffect(()=>()=>clearTimeout(a.current),[]),i.createElement(`div`,{className:`flex flex-col items-center gap-4`},i.createElement($,{key:n,name:e,size:`32`}),i.createElement(`div`,{className:`flex gap-2`},i.createElement(`button`,{className:`text-xs rounded-md border px-2 py-1 cursor-pointer`,onClick:()=>o(`spin-check`)},`Simulate success`),i.createElement(`button`,{className:`text-xs rounded-md border px-2 py-1 cursor-pointer`,onClick:()=>o(`spin-cross`)},`Simulate error`)))}var Qe={id:`matrix-spinner`,name:`Matrix Spinner`,description:`SVG diamond-lattice matrix spinner: 25 diamonds arranged as a 4×4 base grid interleaved with a 3×3 offset grid. 50 named animation presets driven by JS frame arrays — no CSS keyframes required.`,installation:{cli:`npx shadcn@latest add matrix-spinner`,manual:`Copy and paste the matrix-spinner component source code into your project.`},usage:`import { MatrixSpinner } from "@/components/ui/matrix-spinner"

<MatrixSpinner />
<MatrixSpinner name="soft-rotate" size="32" />
<MatrixSpinner name="diamond-sweep" size="48" />`,preview:{code:`import { MatrixSpinner } from "@/components/ui/matrix-spinner"

export function MatrixSpinnerDemo() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {([
        "center-expand", "center-collapse", "edge-in", "edge-out",
        "diamond-grow", "diamond-shrink", "soft-rotate", "micro-pulse",
        "focus-dot", "crossfade-grid", "dot-shift", "grid-breathe",
        "center-glow", "center-dim", "slide-diamond", "grid-tilt",
        "soft-wave-diag", "density-shift", "grid-blink-soft", "dot-expand-contract",
        "soft-shimmer", "grid-fade-in", "grid-fade-out", "center-weight",
        "corner-pulse", "diamond-sweep", "soft-orbit-mini", "grid-stagger-soft",
        "center-ring", "dot-morph-soft", "diamond-shift", "soft-zoom-grid",
        "grid-lift", "grid-settle", "dot-focus-ring", "grid-balance",
        "center-bounce-soft", "diamond-stretch", "dot-glide", "grid-reveal",
        "grid-mask-reveal", "dot-echo", "grid-soft-shift", "diamond-focus",
        "grid-expand-soft", "grid-contract-soft", "center-ping",
        "dot-highlight-pass", "grid-float-soft", "diamond-pulse-soft",
      ] as const).map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <MatrixSpinner name={name} size="24" />
          <span className="text-xs text-muted-foreground font-mono">{name}</span>
        </div>
      ))}
    </div>
  )
}`,component:i.createElement(`div`,{className:`flex flex-wrap gap-8 justify-center`},...qe.map(e=>i.createElement(`div`,{key:e,className:`flex flex-col items-center gap-2`},i.createElement($,{name:e,size:`24`}),i.createElement(`span`,{className:`text-xs text-muted-foreground font-mono`},e))))},examples:[{name:`Sizes`,description:`Six size variants: 12, 16, 20, 24, 32, 48. All scale the SVG proportionally.`,code:`import { MatrixSpinner } from "@/components/ui/matrix-spinner"

export function MatrixSpinnerSizes() {
  return (
    <div className="flex items-end gap-6">
      {(["12", "16", "20", "24", "32", "48"] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <MatrixSpinner size={s} />
          <span className="text-xs text-muted-foreground">{s}</span>
        </div>
      ))}
    </div>
  )
}`,preview:i.createElement(`div`,{className:`flex items-end gap-6`},...[`12`,`16`,`20`,`24`,`32`,`48`].map(e=>i.createElement(`div`,{key:e,className:`flex flex-col items-center gap-2`},i.createElement($,{size:e}),i.createElement(`span`,{className:`text-xs text-muted-foreground`},e))))},{name:`Colors`,description:`Inherits currentColor — wrap in any text-color utility to tint the entire grid.`,code:`import { MatrixSpinner } from "@/components/ui/matrix-spinner"

export function MatrixSpinnerColors() {
  return (
    <div className="flex items-center gap-8">
      <MatrixSpinner className="text-foreground" />
      <MatrixSpinner className="text-primary" />
      <MatrixSpinner className="text-emerald-500" />
      <MatrixSpinner className="text-rose-500" />
      <MatrixSpinner className="text-amber-400" />
    </div>
  )
}`,preview:i.createElement(`div`,{className:`flex items-center gap-8`},i.createElement($,{className:`text-foreground`}),i.createElement($,{className:`text-primary`}),i.createElement($,{className:`text-emerald-500`}),i.createElement($,{className:`text-rose-500`}),i.createElement($,{className:`text-amber-400`}))},{name:`Spin Check`,description:`spin-check plays exactly once — two clockwise rotations dissolve into a held checkmark. The animation stops on the final frame without looping. Click Replay to restart.`,code:`import { MatrixSpinner } from "@/components/ui/matrix-spinner"
import { useState } from "react"

export function SpinCheckDemo() {
  const [key, setKey] = useState(0)
  return (
    <div className="flex flex-col items-center gap-4">
      <MatrixSpinner key={key} name="spin-check" size="32" />
      <button
        className="text-xs text-muted-foreground underline underline-offset-2"
        onClick={() => setKey(k => k + 1)}
      >
        Replay
      </button>
    </div>
  )
}`,preview:i.createElement(Je,{})},{name:`Spin Fall`,description:`spin-fall plays exactly once — two clockwise rotations dissolve directly into a staggered pixel rain. Each column falls at a different time and settles at the bottom. Click Replay to restart.`,code:`import { MatrixSpinner } from "@/components/ui/matrix-spinner"
import { useState } from "react"

export function SpinFallDemo() {
  const [key, setKey] = useState(0)
  return (
    <div className="flex flex-col items-center gap-4">
      <MatrixSpinner key={key} name="spin-fall" size="12" />
      <button
        className="text-xs text-muted-foreground underline underline-offset-2"
        onClick={() => setKey(k => k + 1)}
      >
        Replay
      </button>
    </div>
  )
}`,preview:i.createElement(Xe,{})},{name:`Spin Cross`,description:`spin-cross plays exactly once — two clockwise rotations dissolve into a held error cross (X). The animation stops on the final frame without looping. Click Replay to restart.`,code:`import { MatrixSpinner } from "@/components/ui/matrix-spinner"
import { useState } from "react"

export function SpinCrossDemo() {
  const [key, setKey] = useState(0)
  return (
    <div className="flex flex-col items-center gap-4">
      <MatrixSpinner key={key} name="spin-cross" size="32" />
      <button
        className="text-xs text-muted-foreground underline underline-offset-2"
        onClick={() => setKey(k => k + 1)}
      >
        Replay
      </button>
    </div>
  )
}`,preview:i.createElement(Ye,{})},{name:`Async State`,description:'The real-world pattern: keep `name="spin-cw"` (loops) while a request is pending, then swap to `spin-check` or `spin-cross` once it settles — both play once and hold on the final frame, so no extra state machine is needed. Bump `key` only when you want to replay the same terminal state from a fresh request.',code:`import { MatrixSpinner, type MatrixSpinnerName } from "@/components/ui/matrix-spinner"
import { useRef, useState, useEffect } from "react"

export function AsyncStateDemo() {
  const [name, setName] = useState<MatrixSpinnerName>("spin-cw")
  const [key, setKey] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const run = (outcome: "spin-check" | "spin-cross") => {
    clearTimeout(timeoutRef.current)
    setKey((k) => k + 1)
    setName("spin-cw") // back to the looping "loading" state
    timeoutRef.current = setTimeout(() => setName(outcome), 1200)
  }

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  return (
    <div className="flex flex-col items-center gap-4">
      <MatrixSpinner key={key} name={name} size="32" />
      <div className="flex gap-2">
        <button onClick={() => run("spin-check")}>Simulate success</button>
        <button onClick={() => run("spin-cross")}>Simulate error</button>
      </div>
    </div>
  )
}`,preview:i.createElement(Ze,{})}]};export{Qe as matrixSpinnerDoc};
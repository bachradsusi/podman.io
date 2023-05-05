"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),i=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=i(e.components);return o.createElement(d.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=i(t),u=a,k=s["".concat(d,".").concat(u)]||s[u]||c[u]||p;return t?o.createElement(k,r(r({ref:n},m),{},{components:t})):o.createElement(k,r({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,r=new Array(p);r[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[s]="string"==typeof e?e:a,r[1]=l;for(var i=2;i<p;i++)r[i]=t[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var o=t(7462),a=(t(7294),t(3905));const p={},r=void 0,l={unversionedId:"commands/podman-pod/podman-pod-kill",id:"commands/podman-pod/podman-pod-kill",title:"podman-pod-kill",description:"% podman-pod-kill 1",source:"@site/docs/commands/podman-pod/podman-pod-kill.md",sourceDirName:"commands/podman-pod",slug:"/commands/podman-pod/podman-pod-kill",permalink:"/docs/commands/podman-pod/podman-pod-kill",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-pod/podman-pod-kill.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pod-inspect",permalink:"/docs/commands/podman-pod/podman-pod-inspect"},next:{title:"podman-pod-logs",permalink:"/docs/commands/podman-pod/podman-pod-logs"}},d={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:i},s="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-pod-kill 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","pod","-","kill - Kill the main process of each container in one or more pods"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman pod kill")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"," ",(0,a.kt)("em",{parentName:"p"},"pod")," ..."),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"The main process of each container inside the pods specified will be sent SIGKILL, or any signal specified with option --signal."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("h4",{id:"--all--a"},(0,a.kt)("strong",{parentName:"h4"},"--all"),", ",(0,a.kt)("strong",{parentName:"h4"},"-a")),(0,a.kt)("p",null,"Sends signal to all containers associated with a pod."),(0,a.kt)("p",null,"@@option latest"),(0,a.kt)("p",null,"@@option signal"),(0,a.kt)("h2",{id:"example"},"EXAMPLE"),(0,a.kt)("p",null,"Kill pod with a given name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod kill mywebserver\n")),(0,a.kt)("p",null,"Kill pod with a given ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod kill 860a4b23\n")),(0,a.kt)("p",null,"Terminate pod by sending ",(0,a.kt)("inlineCode",{parentName:"p"},"TERM")," signal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod kill --signal TERM 860a4b23\n")),(0,a.kt)("p",null,"Kill the latest pod created by Podman"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod kill --latest\n")),(0,a.kt)("p",null,"Terminate all pods by sending ",(0,a.kt)("inlineCode",{parentName:"p"},"KILL")," signal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman pod kill --all\n")),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/commands/podman-pod/"},"podman-pod(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/commands/podman-pod/podman-pod-stop"},"podman-pod-stop(1)"))),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"July 2018, Originally compiled by Peter Hunt ",(0,a.kt)("a",{parentName:"p",href:"mailto:pehunt@redhat.com"},"pehunt@redhat.com")))}c.isMDXComponent=!0}}]);
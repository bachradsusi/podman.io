"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7364],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),d=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(t),k=r,u=s["".concat(p,".").concat(k)]||s[k]||l[k]||a;return t?o.createElement(u,c(c({ref:n},m),{},{components:t})):o.createElement(u,c({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const a={},c=void 0,i={unversionedId:"commands/podman-network/podman-network-disconnect",id:"commands/podman-network/podman-network-disconnect",title:"podman-network-disconnect",description:"% podman-network-disconnect 1",source:"@site/docs/commands/podman-network/podman-network-disconnect.md",sourceDirName:"commands/podman-network",slug:"/commands/podman-network/podman-network-disconnect",permalink:"/docs/commands/podman-network/podman-network-disconnect",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-network/podman-network-disconnect.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-network-create",permalink:"/docs/commands/podman-network/podman-network-create"},next:{title:"podman-network-exists",permalink:"/docs/commands/podman-network/podman-network-exists"}},p={},d=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--force</strong>, <strong>-f</strong>",id:"--force--f",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:d},s="wrapper";function l(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-network-disconnect 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","network","-","disconnect - Disconnect a container from a network"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman network disconnect")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," network container"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Disconnects a container from a network. A container can be disconnected from a network by name or by ID.\nIf all networks are disconnected from the container, it will behave like a container created with ",(0,r.kt)("inlineCode",{parentName:"p"},"--network=none"),"\nand it will longer have network connectivity until a network is connected again."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--force--f"},(0,r.kt)("strong",{parentName:"h4"},"--force"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f")),(0,r.kt)("p",null,"Force the container to disconnect from a network"),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("p",null,"Disconnect a container named ",(0,r.kt)("em",{parentName:"p"},"web")," from a network called ",(0,r.kt)("em",{parentName:"p"},"test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman network disconnect test web\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/commands/podman-network/"},"podman-network(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/commands/podman-network/podman-network-connect"},"podman-network-connect(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"November 2020, Originally compiled by Brent Baude ",(0,r.kt)("a",{parentName:"p",href:"mailto:bbaude@redhat.com"},"bbaude@redhat.com")))}l.isMDXComponent=!0}}]);
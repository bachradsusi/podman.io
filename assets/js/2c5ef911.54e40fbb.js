"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),s=i(n),c=a,v=s["".concat(p,".").concat(c)]||s[c]||d[c]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[s]="string"==typeof e?e:a,l[1]=m;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,m={unversionedId:"commands/podman-volume/podman-volume-prune",id:"commands/podman-volume/podman-volume-prune",title:"podman-volume-prune",description:"% podman-volume-prune 1",source:"@site/docs/commands/podman-volume/podman-volume-prune.md",sourceDirName:"commands/podman-volume",slug:"/commands/podman-volume/podman-volume-prune",permalink:"/docs/commands/podman-volume/podman-volume-prune",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-volume/podman-volume-prune.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-volume-mount",permalink:"/docs/commands/podman-volume/podman-volume-mount"},next:{title:"podman-volume-reload",permalink:"/docs/commands/podman-volume/podman-volume-reload"}},p={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--filter</strong>",id:"--filter",level:4},{value:"<strong>--force</strong>, <strong>-f</strong>",id:"--force--f",level:4},{value:"<strong>--help</strong>",id:"--help",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],u={toc:i},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-volume-prune 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","volume","-","prune - Remove all unused volumes"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman volume prune")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Removes unused volumes. By default all unused volumes will be removed, the ",(0,a.kt)("strong",{parentName:"p"},"--filter")," flag can\nbe used to filter specific volumes. You will be prompted to confirm the removal of all the\nunused volumes. To bypass the confirmation, use the ",(0,a.kt)("strong",{parentName:"p"},"--force")," flag."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("h4",{id:"--filter"},(0,a.kt)("strong",{parentName:"h4"},"--filter")),(0,a.kt)("p",null,"Provide filter values."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"filters")," argument format is of ",(0,a.kt)("inlineCode",{parentName:"p"},"key=value"),". If there is more than one ",(0,a.kt)("em",{parentName:"p"},"filter"),", then pass multiple OPTIONS: ",(0,a.kt)("strong",{parentName:"p"},"--filter")," ",(0,a.kt)("em",{parentName:"p"},"foo=bar")," ",(0,a.kt)("strong",{parentName:"p"},"--filter")," ",(0,a.kt)("em",{parentName:"p"},"bif=baz"),"."),(0,a.kt)("p",null,"Supported filters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Filter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"label")),(0,a.kt)("td",{parentName:"tr",align:null},"Only remove volumes, with (or without, in the case of label!=","[...]"," is used) the specified labels.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"until")),(0,a.kt)("td",{parentName:"tr",align:null},"Only remove volumes created before given timestamp.")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," ",(0,a.kt)("em",{parentName:"p"},"filter")," accepts two formats. One is the ",(0,a.kt)("inlineCode",{parentName:"p"},"label"),"=",(0,a.kt)("em",{parentName:"p"},"key")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"label"),"=",(0,a.kt)("em",{parentName:"p"},"key"),"=",(0,a.kt)("em",{parentName:"p"},"value"),", which removes volumes with the specified labels. The other format is the ",(0,a.kt)("inlineCode",{parentName:"p"},"label!"),"=",(0,a.kt)("em",{parentName:"p"},"key")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"label!"),"=",(0,a.kt)("em",{parentName:"p"},"key"),"=",(0,a.kt)("em",{parentName:"p"},"value"),", which removes volumes without the specified labels."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"until")," ",(0,a.kt)("em",{parentName:"p"},"filter")," can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. 10m, 1h30m) computed relative to the machine\u2019s time."),(0,a.kt)("h4",{id:"--force--f"},(0,a.kt)("strong",{parentName:"h4"},"--force"),", ",(0,a.kt)("strong",{parentName:"h4"},"-f")),(0,a.kt)("p",null,"Do not prompt for confirmation."),(0,a.kt)("h4",{id:"--help"},(0,a.kt)("strong",{parentName:"h4"},"--help")),(0,a.kt)("p",null,"Print usage statement"),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ podman volume prune\n\n$ podman volume prune --force\n\n$ podman volume prune --filter label=mylabel=mylabelvalue\n")),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/commands/podman-volume/"},"podman-volume(1)"))),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"November 2018, Originally compiled by Urvashi Mohnani ",(0,a.kt)("a",{parentName:"p",href:"mailto:umohnani@redhat.com"},"umohnani@redhat.com")))}d.isMDXComponent=!0}}]);
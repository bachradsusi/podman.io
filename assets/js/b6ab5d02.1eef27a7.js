"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[9901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(m,".").concat(u)]||d[u]||s[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"commands/podman-machine/podman-machine-inspect",id:"commands/podman-machine/podman-machine-inspect",title:"podman-machine-inspect",description:"% podman-machine-inspect 1",source:"@site/docs/commands/podman-machine/podman-machine-inspect.md",sourceDirName:"commands/podman-machine",slug:"/commands/podman-machine/podman-machine-inspect",permalink:"/docs/commands/podman-machine/podman-machine-inspect",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-machine/podman-machine-inspect.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-machine-init",permalink:"/docs/commands/podman-machine/podman-machine-init"},next:{title:"podman-machine-list",permalink:"/docs/commands/podman-machine/podman-machine-list"}},m={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--format</strong>",id:"--format",level:4},{value:"<strong>--help</strong>",id:"--help",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],c={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-machine-inspect 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","machine","-","inspect - Inspect one or more virtual machines"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman machine inspect")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"name")," ..."),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Inspect one or more virtual machines"),(0,r.kt)("p",null,"Obtain greater detail about Podman virtual machines. More than one virtual machine can be\ninspected at once."),(0,r.kt)("p",null,"Rootless only."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--format"},(0,r.kt)("strong",{parentName:"h4"},"--format")),(0,r.kt)("p",null,"Print results with a Go template."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ConfigPath ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Machine configuration file location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ConnectionInfo ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Machine connection information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Machine creation time (string, ISO3601)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Image ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Machine image config")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".LastUp"),(0,r.kt)("td",{parentName:"tr",align:null},"Time when machine was last booted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Resources ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Resources used by the machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SSHConfig ..."),(0,r.kt)("td",{parentName:"tr",align:null},"SSH configuration info for communitating with machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".State ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Machine state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".UserModeNetworking"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this machine uses user-mode networking")))),(0,r.kt)("h4",{id:"--help"},(0,r.kt)("strong",{parentName:"h4"},"--help")),(0,r.kt)("p",null,"Print usage statement."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman machine inspect podman-machine-default\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/commands/podman-machine/"},"podman-machine(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"April 2022, Originally compiled by Brent Baude ",(0,r.kt)("a",{parentName:"p",href:"mailto:bbaude@redhat.com"},"bbaude@redhat.com")))}s.isMDXComponent=!0}}]);
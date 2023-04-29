"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[9512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(g,p(p({ref:t},s),{},{components:n})):a.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<o;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={},p=void 0,i={unversionedId:"podman-tag",id:"podman-tag",title:"podman-tag",description:"% podman-tag 1",source:"@site/docs/podman-tag.md",sourceDirName:".",slug:"/podman-tag",permalink:"/website-new/docs/podman-tag",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-tag.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-systemd.unit",permalink:"/website-new/docs/podman-systemd.unit"},next:{title:"podman-top",permalink:"/website-new/docs/podman-top"}},l={},m=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],s={toc:m},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-tag 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","tag - Add an additional name to a local image"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman tag")," ",(0,r.kt)("em",{parentName:"p"},"image"),"[:",(0,r.kt)("em",{parentName:"p"},"tag"),"]",(0,r.kt)("em",{parentName:"p"},"target-name"),"[:",(0,r.kt)("em",{parentName:"p"},"tag"),"]","...] ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman image tag")," ",(0,r.kt)("em",{parentName:"p"},"image"),"[:",(0,r.kt)("em",{parentName:"p"},"tag"),"]",(0,r.kt)("em",{parentName:"p"},"target-name"),"[:",(0,r.kt)("em",{parentName:"p"},"tag"),"]","...] ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Assigns a new image name to an existing image. A full name refers to the entire\nimage name, including the optional ",(0,r.kt)("em",{parentName:"p"},"tag")," after the ",(0,r.kt)("inlineCode",{parentName:"p"},":"),". If there is no ",(0,r.kt)("em",{parentName:"p"},"tag"),"\nprovided, then podman will default to ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," for both the ",(0,r.kt)("em",{parentName:"p"},"image")," and the\n",(0,r.kt)("em",{parentName:"p"},"target-name"),"."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--help--h"},(0,r.kt)("strong",{parentName:"h4"},"--help"),", ",(0,r.kt)("strong",{parentName:"h4"},"-h")),(0,r.kt)("p",null,"Print usage statement"),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman tag 0e3bbc2 fedora:latest\n\n$ podman tag httpd myregistryhost:5000/fedora/httpd:v2\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"December 2019, Update description to refer to 'name' instead of 'alias' by Sascha Grunert ",(0,r.kt)("a",{parentName:"p",href:"mailto:sgrunert@suse.com"},"sgrunert@suse.com"),"\nJuly 2017, Originally compiled by Ryan Cole ",(0,r.kt)("a",{parentName:"p",href:"mailto:rycole@redhat.com"},"rycole@redhat.com")))}c.isMDXComponent=!0}}]);
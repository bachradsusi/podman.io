"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[1174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,u=d["".concat(l,".").concat(f)]||d[f]||c[f]||r;return n?a.createElement(u,s(s({ref:t},m),{},{components:n})):a.createElement(u,s({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},s=void 0,o={unversionedId:"podman-manifest/podman-manifest-exists",id:"podman-manifest/podman-manifest-exists",title:"podman-manifest-exists",description:"% podman-manifest-exists 1",source:"@site/docs/podman-manifest/podman-manifest-exists.md",sourceDirName:"podman-manifest",slug:"/podman-manifest/podman-manifest-exists",permalink:"/websites-new/docs/podman-manifest/podman-manifest-exists",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-manifest/podman-manifest-exists.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-manifest-create",permalink:"/websites-new/docs/podman-manifest/podman-manifest-create"},next:{title:"podman-manifest-inspect",permalink:"/websites-new/docs/podman-manifest/podman-manifest-inspect"}},l={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"% podman-manifest-exists 1"),(0,i.kt)("h2",{id:"name"},"NAME"),(0,i.kt)("p",null,"podman","-","manifest","-","exists - Check if the given manifest list exists in local storage"),(0,i.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"podman manifest exists")," ",(0,i.kt)("em",{parentName:"p"},"manifest")),(0,i.kt)("h2",{id:"description"},"DESCRIPTION"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"podman manifest exists")," checks if a manifest list exists on local storage. Podman will\nreturn an exit code of ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," when the manifest is found. A ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," will be returned otherwise.\nAn exit code of ",(0,i.kt)("inlineCode",{parentName:"p"},"125")," indicates there was another issue."),(0,i.kt)("h2",{id:"options"},"OPTIONS"),(0,i.kt)("h4",{id:"--help--h"},(0,i.kt)("strong",{parentName:"h4"},"--help"),", ",(0,i.kt)("strong",{parentName:"h4"},"-h")),(0,i.kt)("p",null,"Print usage statement."),(0,i.kt)("h2",{id:"example"},"EXAMPLE"),(0,i.kt)("p",null,"Check if a manifest list called ",(0,i.kt)("inlineCode",{parentName:"p"},"list1")," exists (the manifest list does actually exist)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ podman manifest exists list1\n$ echo $?\n0\n$\n")),(0,i.kt)("p",null,"Check if an manifest called ",(0,i.kt)("inlineCode",{parentName:"p"},"mylist")," exists (the manifest list does not actually exist)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ podman manifest exists mylist\n$ echo $?\n1\n$\n")),(0,i.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-manifest/"},"podman-manifest(1)"))),(0,i.kt)("h2",{id:"history"},"HISTORY"),(0,i.kt)("p",null,"January 2021, Originally compiled by Paul Holzinger ",(0,i.kt)("inlineCode",{parentName:"p"},"<paul.holzinger@web.de>")))}c.isMDXComponent=!0}}]);
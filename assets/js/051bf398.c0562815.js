"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[1026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,u=p["".concat(m,".").concat(f)]||p[f]||c[f]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"podman-manifest/podman-manifest-create",id:"podman-manifest/podman-manifest-create",title:"podman-manifest-create",description:"% podman-manifest-create 1",source:"@site/docs/podman-manifest/podman-manifest-create.md",sourceDirName:"podman-manifest",slug:"/podman-manifest/podman-manifest-create",permalink:"/websites-new/docs/podman-manifest/podman-manifest-create",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-manifest/podman-manifest-create.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-manifest-annotate",permalink:"/websites-new/docs/podman-manifest/podman-manifest-annotate"},next:{title:"podman-manifest-exists",permalink:"/websites-new/docs/podman-manifest/podman-manifest-exists"}},m={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>",id:"--all",level:4},{value:"<strong>--amend</strong>, <strong>-a</strong>",id:"--amend--a",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2}],d={toc:l},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-manifest-create 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","manifest","-","create - Create a manifest list or image index"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman manifest create")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"listnameorindexname")," ","[",(0,r.kt)("em",{parentName:"p"},"imagename")," ...]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Creates a new manifest list and stores it as an image in local storage using\nthe specified name."),(0,r.kt)("p",null,"If additional images are specified, they are added to the newly-created list or\nindex."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--all"},(0,r.kt)("strong",{parentName:"h4"},"--all")),(0,r.kt)("p",null,"If any of the images which should be added to the new list or index are\nthemselves lists or indexes, add all of their contents. By default, only one\nimage from such a list will be added to the newly-created list or index."),(0,r.kt)("h4",{id:"--amend--a"},(0,r.kt)("strong",{parentName:"h4"},"--amend"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a")),(0,r.kt)("p",null,"If a manifest list named ",(0,r.kt)("em",{parentName:"p"},"listnameorindexname")," already exists, modify the\npreexisting list instead of exiting with an error. The contents of\n",(0,r.kt)("em",{parentName:"p"},"listnameorindexname")," are not modified if no ",(0,r.kt)("em",{parentName:"p"},"imagename"),"s are given."),(0,r.kt)("p",null,"@@option tls-verify"),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman manifest create mylist:v11\n9cfd24048d5fc80903f088f1531a21bff01172abe66effa8941a4c2308dc745f\npodman manifest create --amend mylist:v11\n9cfd24048d5fc80903f088f1531a21bff01172abe66effa8941a4c2308dc745f\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman manifest create mylist:v11 docker://fedora\n5c2bc76bfb4ba6665a7973f7e1c05ee0536b4580637f27adc9fa5a4b2bc03cf1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman manifest create --all mylist:v11 docker://fedora\n30330571e79c65288a4fca421d9aed29b0210d57294d9c2056743fdcf6e3967b\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman-manifest/"},"podman-manifest(1)"))))}c.isMDXComponent=!0}}]);
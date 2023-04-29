"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[1497],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>u});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(a),f=r,u=s["".concat(l,".").concat(f)]||s[f]||c[f]||i;return a?t.createElement(u,o(o({ref:n},m),{},{components:a})):t.createElement(u,o({ref:n},m))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3896:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const i={},o=void 0,p={unversionedId:"podman-image/podman-image-tree",id:"podman-image/podman-image-tree",title:"podman-image-tree",description:"% podman-image-tree 1",source:"@site/docs/podman-image/podman-image-tree.md",sourceDirName:"podman-image",slug:"/podman-image/podman-image-tree",permalink:"/websites-new/docs/podman-image/podman-image-tree",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-image/podman-image-tree.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-image-sign",permalink:"/websites-new/docs/podman-image/podman-image-sign"},next:{title:"podman-image-trust",permalink:"/websites-new/docs/podman-image/podman-image-trust"}},l={},d=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"<strong>--whatrequires</strong>",id:"--whatrequires",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:d},s="wrapper";function c(e){let{components:n,...a}=e;return(0,r.kt)(s,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-image-tree 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","image","-","tree - Prints layer hierarchy of an image in a tree format"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman image tree")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"image:tag"),"|",(0,r.kt)("em",{parentName:"p"},"image-id")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Prints layer hierarchy of an image in a tree format.\nIf no ",(0,r.kt)("em",{parentName:"p"},"tag")," is provided, Podman defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," for the ",(0,r.kt)("em",{parentName:"p"},"image"),".\nLayers are indicated with image tags as ",(0,r.kt)("inlineCode",{parentName:"p"},"Top Layer of"),", when the tag is known locally."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--help--h"},(0,r.kt)("strong",{parentName:"h4"},"--help"),", ",(0,r.kt)("strong",{parentName:"h4"},"-h")),(0,r.kt)("p",null,"Print usage statement"),(0,r.kt)("h4",{id:"--whatrequires"},(0,r.kt)("strong",{parentName:"h4"},"--whatrequires")),(0,r.kt)("p",null,"Show all child images and layers of the specified image"),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman pull docker.io/library/wordpress\n$ podman pull docker.io/library/php:7.2-apache\n\n$ podman image tree docker.io/library/wordpress\nImage ID: 6e880d17852f\nTags:    [docker.io/library/wordpress:latest]\nSize:    429.9MB\nImage Layers\n\u251c\u2500\u2500  ID: 3c816b4ead84 Size: 58.47MB\n\u251c\u2500\u2500  ID: e39dad2af72e Size: 3.584kB\n\u251c\u2500\u2500  ID: b2d6a702383c Size: 213.6MB\n\u251c\u2500\u2500  ID: 94609408badd Size: 3.584kB\n\u251c\u2500\u2500  ID: f4dddbf86725 Size: 43.04MB\n\u251c\u2500\u2500  ID: 8f695df43a4c Size: 11.78kB\n\u251c\u2500\u2500  ID: c29d67bf8461 Size: 9.728kB\n\u251c\u2500\u2500  ID: 23f4315918f8 Size:  7.68kB\n\u251c\u2500\u2500  ID: d082f93a18b3 Size: 13.51MB\n\u251c\u2500\u2500  ID: 7ea8bedcac69 Size: 4.096kB\n\u251c\u2500\u2500  ID: dc3bbf7b3dc0 Size: 57.53MB\n\u251c\u2500\u2500  ID: fdbbc6404531 Size: 11.78kB\n\u251c\u2500\u2500  ID: 8d24785437c6 Size: 4.608kB\n\u251c\u2500\u2500  ID: 80715f9e8880 Size: 4.608kB Top Layer of: [docker.io/library/php:7.2-apache]\n\u251c\u2500\u2500  ID: c93cbcd6437e Size: 3.573MB\n\u251c\u2500\u2500  ID: dece674f3cd1 Size: 4.608kB\n\u251c\u2500\u2500  ID: 834f4497afda Size: 768kB\n\u251c\u2500\u2500  ID: bfe2ce1263f8 Size: 40.06MB\n\u2514\u2500\u2500  ID: 748e99b214cf Size: 11.78kB Top Layer of: [docker.io/library/wordpress:latest]\n\n$ podman pull docker.io/circleci/ruby:latest\n$ podman pull docker.io/library/ruby:latest\n\n$ podman image tree ae96a4ad4f3f --whatrequires\nImage ID: ae96a4ad4f3f\nTags:    [docker.io/library/ruby:latest]\nSize:    894.2MB\nImage Layers\n\u2514\u2500\u2500  ID: 9c92106221c7 Size:  2.56kB Top Layer of: [docker.io/library/ruby:latest]\n \u251c\u2500\u2500  ID: 1b90f2b80ba0 Size: 3.584kB\n \u2502   \u251c\u2500\u2500  ID: 42b7d43ae61c Size: 169.5MB\n \u2502   \u251c\u2500\u2500  ID: 26dc8ba99ec3 Size: 2.048kB\n \u2502   \u251c\u2500\u2500  ID: b4f822db8d95 Size: 3.957MB\n \u2502   \u251c\u2500\u2500  ID: 044e9616ef8a Size: 164.7MB\n \u2502   \u251c\u2500\u2500  ID: bf94b940200d Size: 11.75MB\n \u2502   \u251c\u2500\u2500  ID: 4938e71bfb3b Size: 8.532MB\n \u2502   \u2514\u2500\u2500  ID: f513034bf553 Size: 141MB\n \u251c\u2500\u2500  ID: 1e55901c3ea9 Size: 3.584kB\n \u251c\u2500\u2500  ID: b62835a63f51 Size: 169.5MB\n \u251c\u2500\u2500  ID: 9f4e8857f3fd Size: 2.048kB\n \u251c\u2500\u2500  ID: c3b392020e8f Size: 3.957MB\n \u251c\u2500\u2500  ID: 880163026a0a Size: 164.8MB\n \u251c\u2500\u2500  ID: 8c78b2b14643 Size: 11.75MB\n \u251c\u2500\u2500  ID: 830370cfa182 Size: 8.532MB\n \u2514\u2500\u2500  ID: 567fd7b7bd38 Size: 141MB Top Layer of: [docker.io/circleci/ruby:latest]\n\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/websites-new/docs/podman"},"podman(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"Feb 2019, Originally compiled by Kunal Kushwaha ",(0,r.kt)("inlineCode",{parentName:"p"},"<kushwaha_kunal_v7@lab.ntt.co.jp>")))}c.isMDXComponent=!0}}]);
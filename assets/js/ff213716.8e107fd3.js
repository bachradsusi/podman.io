"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={},s=void 0,i={unversionedId:"commands/podman-system/podman-system-reset",id:"commands/podman-system/podman-system-reset",title:"podman-system-reset",description:"% podman-system-reset 1",source:"@site/docs/commands/podman-system/podman-system-reset.md",sourceDirName:"commands/podman-system",slug:"/commands/podman-system/podman-system-reset",permalink:"/docs/commands/podman-system/podman-system-reset",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-system/podman-system-reset.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-system-renumber",permalink:"/docs/commands/podman-system/podman-system-renumber"},next:{title:"podman-system-service",permalink:"/docs/commands/podman-system/podman-system-service"}},l={},m=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--force</strong>, <strong>-f</strong>",id:"--force--f",level:4},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"Switching rootless user from VFS driver to overlay with fuse-overlayfs",id:"switching-rootless-user-from-vfs-driver-to-overlay-with-fuse-overlayfs",level:3},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],p={toc:m},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"% podman-system-reset 1"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman","-","system","-","reset - Reset storage back to initial state"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman system reset")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"]"),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman system reset")," removes all pods, containers, images, networks and volumes, and machines."),(0,o.kt)("p",null,"This command must be run ",(0,o.kt)("strong",{parentName:"p"},"before")," changing any of the following fields in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"containers.conf")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"storage.conf")," files: ",(0,o.kt)("inlineCode",{parentName:"p"},"driver"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"static_dir"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tmp_dir"),"\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"volume_path"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"podman system reset")," reads the current configuration and attempts to remove all\nof the relevant configurations. If the administrator modified the configuration files first,\n",(0,o.kt)("inlineCode",{parentName:"p"},"podman system reset")," might not be able to clean up the previous storage."),(0,o.kt)("h2",{id:"options"},"OPTIONS"),(0,o.kt)("h4",{id:"--force--f"},(0,o.kt)("strong",{parentName:"h4"},"--force"),", ",(0,o.kt)("strong",{parentName:"h4"},"-f")),(0,o.kt)("p",null,"Do not prompt for confirmation"),(0,o.kt)("h4",{id:"--help--h"},(0,o.kt)("strong",{parentName:"h4"},"--help"),", ",(0,o.kt)("strong",{parentName:"h4"},"-h")),(0,o.kt)("p",null,"Print usage statement"),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman system reset\nWARNING! This will remove:\n        - all containers\n        - all pods\n        - all images\n        - all networks\n        - all build cache\n        - all machines\n        - all volumes\nAre you sure you want to continue? [y/N] y\n")),(0,o.kt)("h3",{id:"switching-rootless-user-from-vfs-driver-to-overlay-with-fuse-overlayfs"},"Switching rootless user from VFS driver to overlay with fuse-overlayfs"),(0,o.kt)("p",null,"If the user ran rootless containers without having the ",(0,o.kt)("inlineCode",{parentName:"p"},"fuse-overlayfs")," program\ninstalled, podman defaults to the ",(0,o.kt)("inlineCode",{parentName:"p"},"vfs")," storage in their home directory. If they\nwant to switch to use fuse-overlay, they must install the fuse-overlayfs\npackage. The user needs to reset the storage to use overlayfs by default.\nExecute ",(0,o.kt)("inlineCode",{parentName:"p"},"podman system reset")," as the user first to remove the VFS storage. Now\nthe user can edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/containers/storage.conf")," to make any changes if\nnecessary. If the system's default was already ",(0,o.kt)("inlineCode",{parentName:"p"},"overlay"),", then no changes are\nnecessary to switch to fuse-overlayfs. Podman looks for the existence of\nfuse-overlayfs to use it when set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"overlay")," driver, only falling back to vfs\nif the program does not exist. Users can run ",(0,o.kt)("inlineCode",{parentName:"p"},"podman info")," to ensure Podman is\nusing fuse-overlayfs and the overlay driver."),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/commands/podman-system/"},"podman-system(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/containers/fuse-overlayfs/blob/main/fuse-overlayfs.md"},"fuse-overlayfs(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/containers/storage/blob/main/docs/containers-storage.conf.5.md"},"containers-storage.conf(5)"))),(0,o.kt)("h2",{id:"history"},"HISTORY"),(0,o.kt)("p",null,"November 2019, Originally compiled by Dan Walsh (dwalsh at redhat dot com)"))}c.isMDXComponent=!0}}]);
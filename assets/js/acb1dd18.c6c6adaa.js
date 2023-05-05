"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},p=Object.keys(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),i=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=i(n),u=a,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||p;return n?o.createElement(f,r(r({ref:t},s),{},{components:n})):o.createElement(f,r({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,r=new Array(p);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var i=2;i<p;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var o=n(7462),a=(n(7294),n(3905));const p={},r=void 0,l={unversionedId:"commands/podman-pod/podman-pod-clone",id:"commands/podman-pod/podman-pod-clone",title:"podman-pod-clone",description:"% podman-pod-clone 1",source:"@site/docs/commands/podman-pod/podman-pod-clone.md",sourceDirName:"commands/podman-pod",slug:"/commands/podman-pod/podman-pod-clone",permalink:"/docs/commands/podman-pod/podman-pod-clone",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-pod/podman-pod-clone.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pod",permalink:"/docs/commands/podman-pod/"},next:{title:"podman-pod-create",permalink:"/docs/commands/podman-pod/podman-pod-create"}},d={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--cpus</strong>",id:"--cpus",level:4},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"<strong>--name</strong>, <strong>-n</strong>",id:"--name--n",level:4},{value:"<strong>--start</strong>",id:"--start",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2},{value:"FOOTNOTES",id:"footnotes",level:2}],s={toc:i},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-pod-clone 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","pod","-","clone - Creates a copy of an existing pod"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman pod clone")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"," ",(0,a.kt)("em",{parentName:"p"},"pod")," ",(0,a.kt)("em",{parentName:"p"},"name")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman pod clone")," creates a copy of a pod, recreating the identical config for the pod and for all of its containers. Users can modify the pods new name and select pod details within the infra container"),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("p",null,"@@option blkio-weight"),(0,a.kt)("p",null,"@@option blkio-weight-device"),(0,a.kt)("p",null,"@@option cgroup-parent"),(0,a.kt)("p",null,"@@option cpu-shares"),(0,a.kt)("h4",{id:"--cpus"},(0,a.kt)("strong",{parentName:"h4"},"--cpus")),(0,a.kt)("p",null,"Set a number of CPUs for the pod that overrides the original pods CPU limits. If none are specified, the original pod's Nano CPUs are used."),(0,a.kt)("p",null,"@@option cpuset-cpus"),(0,a.kt)("p",null,"If none are specified, the original pod's CPUset is used."),(0,a.kt)("p",null,"@@option cpuset-mems"),(0,a.kt)("p",null,"@@option destroy"),(0,a.kt)("p",null,"@@option device"),(0,a.kt)("p",null,"Note: the pod implements devices by storing the initial configuration passed by the user and recreating the device on each container added to the pod."),(0,a.kt)("p",null,"@@option device-read-bps"),(0,a.kt)("p",null,"@@option device-write-bps"),(0,a.kt)("p",null,"@@option gidmap.pod"),(0,a.kt)("h4",{id:"--help--h"},(0,a.kt)("strong",{parentName:"h4"},"--help"),", ",(0,a.kt)("strong",{parentName:"h4"},"-h")),(0,a.kt)("p",null,"Print usage statement."),(0,a.kt)("p",null,"@@option hostname.pod"),(0,a.kt)("p",null,"@@option infra-command"),(0,a.kt)("p",null,"@@option infra-conmon-pidfile"),(0,a.kt)("p",null,"@@option infra-name"),(0,a.kt)("p",null,"@@option label"),(0,a.kt)("p",null,"@@option label-file"),(0,a.kt)("p",null,"@@option memory"),(0,a.kt)("p",null,"@@option memory-swap"),(0,a.kt)("h4",{id:"--name--n"},(0,a.kt)("strong",{parentName:"h4"},"--name"),", ",(0,a.kt)("strong",{parentName:"h4"},"-n")),(0,a.kt)("p",null,"Set a custom name for the cloned pod. The default if not specified is of the syntax: ",(0,a.kt)("strong",{parentName:"p"},"<ORIGINAL_NAME>-clone")),(0,a.kt)("p",null,"@@option pid.pod"),(0,a.kt)("p",null,"@@option security-opt"),(0,a.kt)("p",null,"@@option shm-size"),(0,a.kt)("p",null,"@@option shm-size-systemd"),(0,a.kt)("h4",{id:"--start"},(0,a.kt)("strong",{parentName:"h4"},"--start")),(0,a.kt)("p",null,"When set to true, this flag starts the newly created pod after the\nclone process has completed. All containers within the pod are started."),(0,a.kt)("p",null,"@@option subgidname"),(0,a.kt)("p",null,"@@option subuidname"),(0,a.kt)("p",null,"@@option sysctl"),(0,a.kt)("p",null,"@@option uidmap.pod"),(0,a.kt)("p",null,"@@option userns.pod"),(0,a.kt)("p",null,"@@option uts.pod"),(0,a.kt)("p",null,"@@option volume"),(0,a.kt)("p",null,"@@option volumes-from"),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman pod clone pod-name\n6b2c73ff8a1982828c9ae2092954bcd59836a131960f7e05221af9df5939c584\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman pod clone --name=cloned-pod\nd0cf1f782e2ed67e8c0050ff92df865a039186237a4df24d7acba5b1fa8cc6e7\n6b2c73ff8a1982828c9ae2092954bcd59836a131960f7e05221af9df5939c584\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman pod clone --destroy --cpus=5 d0cf1f782e2ed67e8c0050ff92df865a039186237a4df24d7acba5b1fa8cc6e7\n6b2c73ff8a1982828c9ae2092954bcd59836a131960f7e05221af9df5939c584\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman pod clone 2d4d4fca7219b4437e0d74fcdc272c4f031426a6eacd207372691207079551de new_name\n5a9b7851013d326aa4ac4565726765901b3ecc01fcbc0f237bc7fd95588a24f9\n")),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/commands/podman-pod/podman-pod-create"},"podman-pod-create(1)"))),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"May 2022, Originally written by Charlie Doern ",(0,a.kt)("a",{parentName:"p",href:"mailto:cdoern@redhat.com"},"cdoern@redhat.com")),(0,a.kt)("h2",{id:"footnotes"},"FOOTNOTES"),(0,a.kt)("a",{name:"Footnote1"},"1"),": The Podman project is committed to inclusivity, a core value of open source. The `master` and `slave` mount propagation terminology used here is problematic and divisive, and should be changed. However, these terms are currently used within the Linux kernel and must be used as-is at this time. When the kernel maintainers rectify this usage, Podman will follow suit immediately.")}m.isMDXComponent=!0}}]);
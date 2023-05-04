"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="First Steps",s={unversionedId:"first-steps",id:"first-steps",title:"First Steps",description:"Here are a number of useful tutorials to get you up and running with Podman. If you are familiar with the Docker Container Engine the command in Podman should be quite familiar. If you are brand new to containers, take a look at our Introduction.",source:"@site/docs/first-steps.md",sourceDirName:".",slug:"/first-steps",permalink:"/website-new/docs/first-steps",draft:!1,editUrl:"https://github.com/containers/website-new/docs/first-steps.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Podman",permalink:"/website-new/docs/podman"},next:{title:"Basic Networking",permalink:"/website-new/docs/tutorials/basic_networking"}},l={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"first-steps"},"First Steps"),(0,o.kt)("p",null,"Here are a number of useful tutorials to get you up and running with Podman. If you are familiar with the Docker ",(0,o.kt)("inlineCode",{parentName:"p"},"Container Engine"),(0,o.kt)("em",{parentName:"p"}," the command in Podman")," should be quite familiar. If you are brand new to containers, take a look at our ",(0,o.kt)("inlineCode",{parentName:"p"},"Introduction"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/podman_tutorial"},"Basic Setup and Use of Podman"),": Learn how to set up Podman and perform some basic commands with the utility."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/rootless_tutorial"},"Basic Setup and Use of Podman in a Rootless environment"),": The steps required to set up rootless Podman are enumerated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/podman-for-windows"},"Podman for Windows")," : A guide to installing and using Podman on Windows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/mac_win_client"},"Podman Remote Clients on Mac/Windows"),": Advanced setup for connecting to a remote Linux system using the Podman remote client on Mac and Windows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/image_signing"},"How to sign and distribute container images using Podman"),": Learn how to set up and use image signing with Podman."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/remote_client"},"Podman remote-client tutorial"),": A brief how-to on using the Podman remote-client."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/podman-derivative-api"},"How to use libpod for custom/derivative projects"),": How the libpod API can be used within your own project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman/tree/main/pkg/bindings"},"How to use Podman's Go RESTful bindings"),": An introduction to using our RESTful Golang bindings in an external application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/basic_networking"},"Common network setups"),": A basic guide to common network setups for Podman."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/socket_activation"},"Socket activation"),": Learn how to run containers that support socket activation.")))}m.isMDXComponent=!0}}]);
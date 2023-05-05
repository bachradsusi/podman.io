"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[5107],{3905:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},i=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,m=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,u=s["".concat(m,".").concat(c)]||s[c]||k[c]||o;return n?a.createElement(u,l(l({ref:e},i),{},{components:n})):a.createElement(u,l({ref:e},i))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[s]="string"==typeof t?t:r,l[1]=p;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9933:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},l=void 0,p={unversionedId:"commands/podman-network/podman-network-inspect",id:"commands/podman-network/podman-network-inspect",title:"podman-network-inspect",description:"% podman-network-inspect 1",source:"@site/docs/commands/podman-network/podman-network-inspect.md",sourceDirName:"commands/podman-network",slug:"/commands/podman-network/podman-network-inspect",permalink:"/docs/commands/podman-network/podman-network-inspect",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-network/podman-network-inspect.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-network-exists",permalink:"/docs/commands/podman-network/podman-network-exists"},next:{title:"podman-network-ls",permalink:"/docs/commands/podman-network/podman-network-ls"}},m={},d=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--format</strong>, <strong>-f</strong>=<em>format</em>",id:"--format--fformat",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],i={toc:d},s="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-network-inspect 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","network","-","inspect - Displays the network configuration for one or more networks"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman network inspect")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"network")," ","[",(0,r.kt)("em",{parentName:"p"},"network")," ...]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Display the (JSON format) network configuration."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--format--fformat"},(0,r.kt)("strong",{parentName:"h4"},"--format"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f"),"=",(0,r.kt)("em",{parentName:"h4"},"format")),(0,r.kt)("p",null,"Pretty-print networks to JSON or using a Go template."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp when the network was created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".DNSEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Network has dns enabled (boolean)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Driver"),(0,r.kt)("td",{parentName:"tr",align:null},"Network driver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Network ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Internal"),(0,r.kt)("td",{parentName:"tr",align:null},"Network is internal (boolean)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".IPAMOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"Network ipam options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".IPv6Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Network has ipv6 subnet (boolean)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Labels"),(0,r.kt)("td",{parentName:"tr",align:null},"Network labels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Network name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NetworkDNSServers"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of DNS servers used in this network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NetworkInterface"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the network interface on the host")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Network options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Subnets"),(0,r.kt)("td",{parentName:"tr",align:null},"List of subnets on this network")))),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("p",null,"Inspect the default podman network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman network inspect podman\n[\n    {\n        "name": "podman",\n        "id": "2f259bab93aaaaa2542ba43ef33eb990d0999ee1b9924b557b7be53c0b7a1bb9",\n        "driver": "bridge",\n        "network_interface": "podman0",\n        "created": "2021-06-03T12:04:33.088567413+02:00",\n        "subnets": [\n            {\n                "subnet": "10.88.0.0/16",\n                "gateway": "10.88.0"\n            }\n        ],\n        "ipv6_enabled": false,\n        "internal": false,\n        "dns_enabled": false,\n        "ipam_options": {\n            "driver": "host-local"\n        }\n    }\n]\n')),(0,r.kt)("p",null,"Show the subnet and gateway for a network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman network inspect podman --format "{{range .Subnets}}Subnet: {{.Subnet}} Gateway: {{.Gateway}}{{end}}"\nSubnet: 10.88.0.0/16 Gateway: 10.88.0\n')),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/commands/podman-network/"},"podman-network(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/commands/podman-network/podman-network-ls"},"podman-network-ls(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/commands/podman-network/podman-network-create"},"podman-network-create(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"August 2021, Updated with the new network format by Paul Holzinger ",(0,r.kt)("a",{parentName:"p",href:"mailto:pholzing@redhat.com"},"pholzing@redhat.com")),(0,r.kt)("p",null,"August 2019, Originally compiled by Brent Baude ",(0,r.kt)("a",{parentName:"p",href:"mailto:bbaude@redhat.com"},"bbaude@redhat.com")))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[873],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),i=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=i(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=i(n),k=r,c=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(c,o(o({ref:e},m),{},{components:n})):a.createElement(c,o({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[d]="string"==typeof t?t:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2862:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,p={unversionedId:"podman-stats",id:"podman-stats",title:"podman-stats",description:"% podman-stats 1",source:"@site/docs/podman-stats.md",sourceDirName:".",slug:"/podman-stats",permalink:"/website-new/docs/podman-stats",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-stats.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-start",permalink:"/website-new/docs/podman-start"},next:{title:"podman-stop",permalink:"/website-new/docs/podman-stop"}},s={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"<strong>--format</strong>=<em>template</em>",id:"--formattemplate",level:4},{value:"<strong>--interval</strong>, <strong>-i</strong>=<em>seconds</em>",id:"--interval--iseconds",level:4},{value:"<strong>--no-trunc</strong>",id:"--no-trunc",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:i},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-stats 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","stats - Display a live stream of one or more container's resource usage statistics"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman stats")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"][*container*]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container stats")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"][*container*]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Display a live stream of one or more containers' resource usage statistics"),(0,r.kt)("p",null,"Note: Podman stats will not work in rootless environments that use CGroups V1.\nPodman stats relies on CGroup information for statistics, and CGroup v1 is not\nsupported for rootless use cases."),(0,r.kt)("p",null,"Note: Rootless environments that use CGroups V2 are not able to report statistics\nabout their networking usage."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--all--a"},(0,r.kt)("strong",{parentName:"h4"},"--all"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a")),(0,r.kt)("p",null,"Show all containers. Only running containers are shown by default"),(0,r.kt)("h4",{id:"--formattemplate"},(0,r.kt)("strong",{parentName:"h4"},"--format"),"=",(0,r.kt)("em",{parentName:"h4"},"template")),(0,r.kt)("p",null,"Pretty-print container statistics to JSON or using a Go template"),(0,r.kt)("p",null,"Valid placeholders for the Go template are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".AvgCPU"),(0,r.kt)("td",{parentName:"tr",align:null},"Average CPU, full precision float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".AVGCPU"),(0,r.kt)("td",{parentName:"tr",align:null},"Average CPU, formatted as a percent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".BlockInput"),(0,r.kt)("td",{parentName:"tr",align:null},"Block Input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".BlockIO"),(0,r.kt)("td",{parentName:"tr",align:null},"Block IO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".BlockOutput"),(0,r.kt)("td",{parentName:"tr",align:null},"Block Output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ContainerID"),(0,r.kt)("td",{parentName:"tr",align:null},"Container ID, full (untruncated) hash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ContainerStats ..."),(0,r.kt)("td",{parentName:"tr",align:null},"Nested structure, for experts only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"Percent CPU, full precision float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPUNano"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU Usage, total, in nanoseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPUPerc"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU percentage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPUSystemNano"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU Usage, kernel, in nanoseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as CPUNano")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Container ID, truncated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MemLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory limit, in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MemPerc"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory percentage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MemUsage"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory usage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MemUsageBytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory usage (IEC)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Container Name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NetInput"),(0,r.kt)("td",{parentName:"tr",align:null},"Network Input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NetIO"),(0,r.kt)("td",{parentName:"tr",align:null},"Network IO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NetOutput"),(0,r.kt)("td",{parentName:"tr",align:null},"Network Output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".PerCPU"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU time consumed by all tasks ","[1]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".PIDs"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of PIDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".PIDS"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of PIDs (yes, we know it's a dup)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SystemNano"),(0,r.kt)("td",{parentName:"tr",align:null},"Current system datetime, nanoseconds since epoch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Up"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration (CPUNano), in human-readable form")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".UpTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as UpTime")))),(0,r.kt)("p",null,"[1]"," Cgroups V1 only"),(0,r.kt)("p",null,"When using a Go template, precede the format with ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," to print headers."),(0,r.kt)("h4",{id:"--interval--iseconds"},(0,r.kt)("strong",{parentName:"h4"},"--interval"),", ",(0,r.kt)("strong",{parentName:"h4"},"-i"),"=",(0,r.kt)("em",{parentName:"h4"},"seconds")),(0,r.kt)("p",null,"Time in seconds between stats reports, defaults to 5 seconds."),(0,r.kt)("p",null,"@@option latest"),(0,r.kt)("p",null,"@@option no-reset"),(0,r.kt)("p",null,"@@option no-stream"),(0,r.kt)("h4",{id:"--no-trunc"},(0,r.kt)("strong",{parentName:"h4"},"--no-trunc")),(0,r.kt)("p",null,"Do not truncate output"),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman stats -a --no-stream\nID             NAME              CPU %   MEM USAGE / LIMIT   MEM %   NET IO    BLOCK IO   PIDS\na9f807ffaacd   frosty_hodgkin    --      3.092MB / 16.7GB    0.02%   -- / --   -- / --    2\n3b33001239ee   sleepy_stallman   --      -- / --             --      -- / --   -- / --    --\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman stats --no-stream a9f80\nID             NAME             CPU %   MEM USAGE / LIMIT   MEM %   NET IO    BLOCK IO   PIDS\na9f807ffaacd   frosty_hodgkin   --      3.092MB / 16.7GB    0.02%   -- / --   -- / --    2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman stats --no-trunc 3667 --format 'table {{ .ID }} {{ .MemUsage }}'\nID                                                                MEM USAGE / LIMIT\n3667c6aacb06aac2eaffce914c01736420023d56ef9b0f4cfe58b6d6a78b7503  495kB / 677GB\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# podman stats --no-stream --format=json a9f80\n[\n    {\n    "id": "a9f807ffaacd",\n    "name": "frosty_hodgkin",\n    "cpu_percent": "--",\n    "mem_usage": "3.092MB / 16.7GB",\n    "mem_percent": "0.02%",\n    "netio": "-- / --",\n    "blocki": "-- / --",\n    "pids": "2"\n    }\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# podman stats --no-stream --format "table {{.ID}} {{.Name}} {{.MemUsage}}" 6eae\nID             NAME           MEM USAGE / LIMIT\n6eae9e25a564   clever_bassi   3.031MB / 16.7GB\n')),(0,r.kt)("p",null,"Note: When using a slirp4netns network with the rootlesskit port\nhandler, the traffic send via the port forwarding will be accounted to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"lo")," device. Traffic accounted to ",(0,r.kt)("inlineCode",{parentName:"p"},"lo")," is not accounted in the\nstats output."),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"July 2017, Originally compiled by Ryan Cole ",(0,r.kt)("a",{parentName:"p",href:"mailto:rycole@redhat.com"},"rycole@redhat.com")))}u.isMDXComponent=!0}}]);
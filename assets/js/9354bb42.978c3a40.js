"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[9197],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(i,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[m]="string"==typeof t?t:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1427:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},l=void 0,s={unversionedId:"commands/podman-ps",id:"commands/podman-ps",title:"podman-ps",description:"% podman-ps 1",source:"@site/docs/commands/podman-ps.md",sourceDirName:"commands",slug:"/commands/podman-ps",permalink:"/docs/commands/podman-ps",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-ps.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-port",permalink:"/docs/commands/podman-port"},next:{title:"podman-pull",permalink:"/docs/commands/podman-pull"}},i={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"<strong>--external</strong>",id:"--external",level:4},{value:"<strong>--filter</strong>, <strong>-f</strong>",id:"--filter--f",level:4},{value:"<strong>--format</strong>=<em>format</em>",id:"--formatformat",level:4},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"<strong>--last</strong>, <strong>-n</strong>",id:"--last--n",level:4},{value:"<strong>--latest</strong>, <strong>-l</strong>",id:"--latest--l",level:4},{value:"<strong>--namespace</strong>, <strong>--ns</strong>",id:"--namespace---ns",level:4},{value:"<strong>--no-trunc</strong>",id:"--no-trunc",level:4},{value:"<strong>--noheading</strong>",id:"--noheading",level:4},{value:"<strong>--pod</strong>, <strong>-p</strong>",id:"--pod--p",level:4},{value:"<strong>--quiet</strong>, <strong>-q</strong>",id:"--quiet--q",level:4},{value:"<strong>--size</strong>, <strong>-s</strong>",id:"--size--s",level:4},{value:"<strong>--sort</strong>=<em>created</em>",id:"--sortcreated",level:4},{value:"<strong>--sync</strong>",id:"--sync",level:4},{value:"<strong>--watch</strong>, <strong>-w</strong>",id:"--watch--w",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"ps",id:"ps",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],d={toc:p},m="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-ps 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","ps - Prints out information about containers"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman ps")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container ps")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container list")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container ls")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman ps")," lists the running containers on the system. Use the ",(0,r.kt)("strong",{parentName:"p"},"--all")," flag to view\nall the containers information. By default it lists:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"container id"),(0,r.kt)("li",{parentName:"ul"},"the name of the image the container is using"),(0,r.kt)("li",{parentName:"ul"},"the COMMAND the container is executing"),(0,r.kt)("li",{parentName:"ul"},"the time the container was created"),(0,r.kt)("li",{parentName:"ul"},"the status of the container"),(0,r.kt)("li",{parentName:"ul"},"port mappings the container is using"),(0,r.kt)("li",{parentName:"ul"},"alternative names for the container")),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--all--a"},(0,r.kt)("strong",{parentName:"h4"},"--all"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a")),(0,r.kt)("p",null,"Show all the containers created by Podman, default is only running containers."),(0,r.kt)("p",null,"Note: Podman shares containers storage with other tools such as Buildah and CRI-O. In some cases these ",(0,r.kt)("inlineCode",{parentName:"p"},"external")," containers might also exist in the same storage. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--external")," option to see these external containers. External containers show the 'storage' status."),(0,r.kt)("h4",{id:"--external"},(0,r.kt)("strong",{parentName:"h4"},"--external")),(0,r.kt)("p",null,"Display external containers that are not controlled by Podman but are stored in containers storage. These external containers are generally created via other container technology such as Buildah or CRI-O and may depend on the same container images that Podman is also using. External containers are denoted with either a 'buildah' or 'storage' in the COMMAND and STATUS column of the ps output."),(0,r.kt)("h4",{id:"--filter--f"},(0,r.kt)("strong",{parentName:"h4"},"--filter"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f")),(0,r.kt)("p",null,"Filter what containers are shown in the output.\nMultiple filters can be given with multiple uses of the --filter flag.\nFilters with the same key work inclusive with the only exception being\n",(0,r.kt)("inlineCode",{parentName:"p"},"label")," which is exclusive. Filters with different keys always work exclusive."),(0,r.kt)("p",null,"Valid filters are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Filter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"[ID]"," Container's ID (accepts regex)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"[Name]"," Container's name (accepts regex)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"[Key]"," or ","[Key=Value]"," Label assigned to a container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exited"),(0,r.kt)("td",{parentName:"tr",align:null},"[Int]"," Container's exit code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"[Status]"," Container's status: 'created', 'exited', 'paused', 'running', 'unknown'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ancestor"),(0,r.kt)("td",{parentName:"tr",align:null},"[ImageName]"," Image or descendant used to create container (accepts regex)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"before"),(0,r.kt)("td",{parentName:"tr",align:null},"[ID]"," or ","[Name]"," Containers created before this container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"since"),(0,r.kt)("td",{parentName:"tr",align:null},"[ID]"," or ","[Name]"," Containers created since this container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volume"),(0,r.kt)("td",{parentName:"tr",align:null},"[VolumeName]"," or ","[MountpointDestination]"," Volume mounted in container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"health"),(0,r.kt)("td",{parentName:"tr",align:null},"[Status]"," healthy or unhealthy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pod"),(0,r.kt)("td",{parentName:"tr",align:null},"[Pod]"," name or full or partial ID of pod")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"network"),(0,r.kt)("td",{parentName:"tr",align:null},"[Network]"," name or full ID of network")))),(0,r.kt)("h4",{id:"--formatformat"},(0,r.kt)("strong",{parentName:"h4"},"--format"),"=",(0,r.kt)("em",{parentName:"h4"},"format")),(0,r.kt)("p",null,"Pretty-print containers to JSON or using a Go template"),(0,r.kt)("p",null,"Valid placeholders for the Go template are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".AutoRemove"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, container will be removed on exit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Command"),(0,r.kt)("td",{parentName:"tr",align:null},"Quoted command used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Creation time for container, Y-M-D H:M:S")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CreatedAt"),(0,r.kt)("td",{parentName:"tr",align:null},"Creation time for container (same as above)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CreatedHuman"),(0,r.kt)("td",{parentName:"tr",align:null},"Creation time, relative")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ExitCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Container exit code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Exited"),(0,r.kt)("td",{parentName:"tr",align:null},'"true" if container has exited')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ExitedAt"),(0,r.kt)("td",{parentName:"tr",align:null},"Time (epoch seconds) that container exited")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Container ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Image"),(0,r.kt)("td",{parentName:"tr",align:null},"Image Name/ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ImageID"),(0,r.kt)("td",{parentName:"tr",align:null},"Image ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".IsInfra"),(0,r.kt)("td",{parentName:"tr",align:null},'"true" if infra container')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Labels"),(0,r.kt)("td",{parentName:"tr",align:null},"All the labels assigned to the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Mounts"),(0,r.kt)("td",{parentName:"tr",align:null},"Volumes mounted in the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Names"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Networks"),(0,r.kt)("td",{parentName:"tr",align:null},"Show all networks connected to the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Pid"),(0,r.kt)("td",{parentName:"tr",align:null},"Process ID on host system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Pod"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod the container is associated with (SHA)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".PodName"),(0,r.kt)("td",{parentName:"tr",align:null},"Seems to be empty no matter what")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Ports"),(0,r.kt)("td",{parentName:"tr",align:null},"Exposed ports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".RunningFor"),(0,r.kt)("td",{parentName:"tr",align:null},"Time elapsed since container was started")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".StartedAt"),(0,r.kt)("td",{parentName:"tr",align:null},"Time (epoch seconds) the container started")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".State"),(0,r.kt)("td",{parentName:"tr",align:null},"Human-friendly description of ctr state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of container")))),(0,r.kt)("h4",{id:"--help--h"},(0,r.kt)("strong",{parentName:"h4"},"--help"),", ",(0,r.kt)("strong",{parentName:"h4"},"-h")),(0,r.kt)("p",null,"Print usage statement"),(0,r.kt)("h4",{id:"--last--n"},(0,r.kt)("strong",{parentName:"h4"},"--last"),", ",(0,r.kt)("strong",{parentName:"h4"},"-n")),(0,r.kt)("p",null,"Print the n last created containers (all states)"),(0,r.kt)("h4",{id:"--latest--l"},(0,r.kt)("strong",{parentName:"h4"},"--latest"),", ",(0,r.kt)("strong",{parentName:"h4"},"-l")),(0,r.kt)("p",null,"Show the latest container created (all states) (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)"),(0,r.kt)("h4",{id:"--namespace---ns"},(0,r.kt)("strong",{parentName:"h4"},"--namespace"),", ",(0,r.kt)("strong",{parentName:"h4"},"--ns")),(0,r.kt)("p",null,"Display namespace information"),(0,r.kt)("h4",{id:"--no-trunc"},(0,r.kt)("strong",{parentName:"h4"},"--no-trunc")),(0,r.kt)("p",null,"Do not truncate the output (default ",(0,r.kt)("em",{parentName:"p"},"false"),")."),(0,r.kt)("h4",{id:"--noheading"},(0,r.kt)("strong",{parentName:"h4"},"--noheading")),(0,r.kt)("p",null,"Omit the table headings from the listing of containers."),(0,r.kt)("h4",{id:"--pod--p"},(0,r.kt)("strong",{parentName:"h4"},"--pod"),", ",(0,r.kt)("strong",{parentName:"h4"},"-p")),(0,r.kt)("p",null,"Display the pods the containers are associated with"),(0,r.kt)("h4",{id:"--quiet--q"},(0,r.kt)("strong",{parentName:"h4"},"--quiet"),", ",(0,r.kt)("strong",{parentName:"h4"},"-q")),(0,r.kt)("p",null,"Print the numeric IDs of the containers only"),(0,r.kt)("h4",{id:"--size--s"},(0,r.kt)("strong",{parentName:"h4"},"--size"),", ",(0,r.kt)("strong",{parentName:"h4"},"-s")),(0,r.kt)("p",null,"Display the total file size"),(0,r.kt)("h4",{id:"--sortcreated"},(0,r.kt)("strong",{parentName:"h4"},"--sort"),"=",(0,r.kt)("em",{parentName:"h4"},"created")),(0,r.kt)("p",null,'Sort by command, created, id, image, names, runningfor, size, or status",\nNote: Choosing size will sort by size of rootFs, not alphabetically like the rest of the options'),(0,r.kt)("h4",{id:"--sync"},(0,r.kt)("strong",{parentName:"h4"},"--sync")),(0,r.kt)("p",null,"Force a sync of container state with the OCI runtime.\nIn some cases, a container's state in the runtime can become out of sync with Podman's state.\nThis will update Podman's state based on what the OCI runtime reports.\nForcibly syncing is much slower, but can resolve inconsistent state issues."),(0,r.kt)("h4",{id:"--watch--w"},(0,r.kt)("strong",{parentName:"h4"},"--watch"),", ",(0,r.kt)("strong",{parentName:"h4"},"-w")),(0,r.kt)("p",null,"Refresh the output with current containers on an interval in seconds."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman ps -a\nCONTAINER ID   IMAGE         COMMAND         CREATED       STATUS                    PORTS     NAMES\n02f65160e14ca  redis:alpine  "redis-server"  19 hours ago  Exited (-1) 19 hours ago  6379/tcp  k8s_podsandbox1-redis_podsandbox1_redhat.test.crio_redhat-test-crio_0\n69ed779d8ef9f  redis:alpine  "redis-server"  25 hours ago  Created                   6379/tcp  k8s_container1_podsandbox1_redhat.test.crio_redhat-test-crio_1\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman ps -a -s\nCONTAINER ID   IMAGE         COMMAND         CREATED       STATUS                    PORTS     NAMES                                                                  SIZE\n02f65160e14ca  redis:alpine  "redis-server"  20 hours ago  Exited (-1) 20 hours ago  6379/tcp  k8s_podsandbox1-redis_podsandbox1_redhat.test.crio_redhat-test-crio_0  27.49 MB\n69ed779d8ef9f  redis:alpine  "redis-server"  25 hours ago  Created                   6379/tcp  k8s_container1_podsandbox1_redhat.test.crio_redhat-test-crio_1         27.49 MB\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman ps -a --format "{{.ID}}  {{.Image}}  {{.Labels}}  {{.Mounts}}"\n02f65160e14ca  redis:alpine  tier=backend  proc,tmpfs,devpts,shm,mqueue,sysfs,cgroup,/var/run/,/var/run/\n69ed779d8ef9f  redis:alpine  batch=no,type=small  proc,tmpfs,devpts,shm,mqueue,sysfs,cgroup,/var/run/,/var/run/\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman ps --ns -a\nCONTAINER ID    NAMES                                                                   PID     CGROUP       IPC          MNT          NET          PIDNS        USER         UTS\n3557d882a82e3   k8s_container2_podsandbox1_redhat.test.crio_redhat-test-crio_1          29910   4026531835   4026532585   4026532593   4026532508   4026532595   4026531837   4026532594\n09564cdae0bec   k8s_container1_podsandbox1_redhat.test.crio_redhat-test-crio_1          29851   4026531835   4026532585   4026532590   4026532508   4026532592   4026531837   4026532591\na31ebbee9cee7   k8s_podsandbox1-redis_podsandbox1_redhat.test.crio_redhat-test-crio_0   29717   4026531835   4026532585   4026532587   4026532508   4026532589   4026531837   4026532588\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman ps -a --size --sort names\nCONTAINER ID   IMAGE         COMMAND         CREATED       STATUS                    PORTS     NAMES\n69ed779d8ef9f  redis:alpine  "redis-server"  25 hours ago  Created                   6379/tcp  k8s_container1_podsandbox1_redhat.test.crio_redhat-test-crio_1\n02f65160e14ca  redis:alpine  "redis-server"  19 hours ago  Exited (-1) 19 hours ago  6379/tcp  k8s_podsandbox1-redis_podsandbox1_redhat.test.crio_redhat-test-crio_0\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman ps\nCONTAINER ID  IMAGE                            COMMAND    CREATED        STATUS        PORTS                                                   NAMES\n4089df24d4f3  docker.io/library/centos:latest  /bin/bash  2 minutes ago  Up 2 minutes  0.0.0.0:80->8080/tcp, 0.0.0.0:2000-2006->2000-2006/tcp  manyports\n92f58933c28c  docker.io/library/centos:latest  /bin/bash  3 minutes ago  Up 3 minutes  19268.9900:1000-1006->1000-1006/tcp                 zen_sanderson\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman ps --external -a\nCONTAINER ID  IMAGE                             COMMAND  CREATED      STATUS  PORTS  NAMES\n69ed779d8ef9f  redis:alpine  "redis-server"  25 hours ago  Created                   6379/tcp  k8s_container1_podsandbox1_redhat.test.crio_redhat-test-crio_1\n38a8a78596f9  docker.io/library/busybox:latest  buildah  2 hours ago  storage        busybox-working-container\nfd7b786b5c32  docker.io/library/alpine:latest   buildah  2 hours ago  storage        alpine-working-container\nf78620804e00  scratch                           buildah  2 hours ago  storage        working-container\n')),(0,r.kt)("h2",{id:"ps"},"ps"),(0,r.kt)("p",null,"Print a list of containers"),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/containers/buildah/blob/main/docs/buildah.md"},"buildah(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/cri-o/cri-o/blob/main/docs/crio.8.md"},"crio(8)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"August 2017, Originally compiled by Urvashi Mohnani ",(0,r.kt)("a",{parentName:"p",href:"mailto:umohnani@redhat.com"},"umohnani@redhat.com")))}u.isMDXComponent=!0}}]);
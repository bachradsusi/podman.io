"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[1068],{3905:(t,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>k});var e=a(7294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function o(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function m(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function l(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},o=Object.keys(t);for(e=0;e<o.length;e++)a=o[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)a=o[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=e.createContext({}),p=function(t){var n=e.useContext(d),a=n;return t&&(a="function"==typeof t?t(n):m(m({},n),t)),a},i=function(t){var n=p(t.components);return e.createElement(d.Provider,{value:n},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},u=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(d,".").concat(u)]||c[u]||s[u]||o;return a?e.createElement(k,m(m({ref:n},i),{},{components:a})):e.createElement(k,m({ref:n},i))}));function k(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=a.length,m=new Array(o);m[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=t,l[c]="string"==typeof t?t:r,m[1]=l;for(var p=2;p<o;p++)m[p]=a[p];return e.createElement.apply(null,m)}return e.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4840:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var e=a(7462),r=(a(7294),a(3905));const o={},m=void 0,l={unversionedId:"commands/podman-container/podman-container",id:"commands/podman-container/podman-container",title:"podman-container",description:"% podman-container 1",source:"@site/docs/commands/podman-container/podman-container.md",sourceDirName:"commands/podman-container",slug:"/commands/podman-container/",permalink:"/docs/commands/podman-container/",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-container/podman-container.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-completion",permalink:"/docs/commands/podman-completion"},next:{title:"podman-container-checkpoint",permalink:"/docs/commands/podman-container/podman-container-checkpoint"}},d={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"COMMANDS",id:"commands",level:2},{value:"SEE ALSO",id:"see-also",level:2}],i={toc:p},c="wrapper";function s(t){let{components:n,...a}=t;return(0,r.kt)(c,(0,e.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-container 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","container - Manage containers"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container")," ",(0,r.kt)("em",{parentName:"p"},"subcommand")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"The container command allows management of containers"),(0,r.kt)("h2",{id:"commands"},"COMMANDS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Man Page"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attach"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-attach"},"podman-attach(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Attach to a running container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-container/podman-container-checkpoint"},"podman-container-checkpoint(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Checkpoints one or more running containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cleanup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-container/podman-container-cleanup"},"podman-container-cleanup(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Clean up the container's network and mountpoints.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clone"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-container/podman-container-clone"},"podman-container-clone(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a copy of an existing container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-commit"},"podman-commit(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Create new image based on the changed container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-cp"},"podman-cp(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Copy files/folders between a container and the local filesystem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-create"},"podman-create(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diff"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-container/podman-container-diff"},"podman-container-diff(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Inspect changes on a container's filesystem")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exec"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-exec"},"podman-exec(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Execute a command in a running container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exists"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-container/podman-container-exists"},"podman-container-exists(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Check if a container exists in local storage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-export"},"podman-export(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Export a container's filesystem contents as a tar archive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-init"},"podman-init(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Initialize a container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inspect"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-container/podman-container-inspect"},"podman-container-inspect(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Display a container's configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kill"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-kill"},"podman-kill(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Kill the main process in one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-ps"},"podman-ps(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"List the containers on the system.(alias ls)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-logs"},"podman-logs(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Display the logs of a container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mount"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-mount"},"podman-mount(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Mount a working container's root filesystem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pause"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-pause"},"podman-pause(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pause one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-port"},"podman-port(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"List port mappings for the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prune"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-container/podman-container-prune"},"podman-container-prune(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove all stopped containers from local storage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-ps"},"podman-ps(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Prints out information about containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rename"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-rename"},"podman-rename(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Rename an existing container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restart"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-restart"},"podman-restart(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Restart one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-container/podman-container-restore"},"podman-container-restore(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Restores one or more containers from a checkpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-rm"},"podman-rm(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-run"},"podman-run(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Run a command in a container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runlabel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-container/podman-container-runlabel"},"podman-container-runlabel(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Executes a command as described by a container-image label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-start"},"podman-start(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Starts one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stats"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-stats"},"podman-stats(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Display a live stream of one or more container's resource usage statistics.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stop"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-stop"},"podman-stop(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Stop one or more running containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"top"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-top"},"podman-top(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Display the running processes of a container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unmount"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-unmount"},"podman-unmount(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Unmount a working container's root filesystem.(Alias unmount)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unpause"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-unpause"},"podman-unpause(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Unpause one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-update"},"podman-update(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Updates the cgroup configuration of a given container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wait"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/commands/podman-wait"},"podman-wait(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Wait on one or more containers to stop and print their exit codes.")))),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/commands/podman-exec"},"podman-exec(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/commands/podman-run"},"podman-run(1)"))))}s.isMDXComponent=!0}}]);
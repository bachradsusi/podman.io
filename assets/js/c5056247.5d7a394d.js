"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7100],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const i={},r=void 0,s={unversionedId:"tutorials/podman_tutorial",id:"tutorials/podman_tutorial",title:"podman_tutorial",description:"--",source:"@site/docs/tutorials/podman_tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/podman_tutorial",permalink:"/docs/tutorials/podman_tutorial",draft:!1,editUrl:"https://github.com/containers/website-new/docs/tutorials/podman_tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-install-certificate-authority",permalink:"/docs/tutorials/podman-install-certificate-authority"},next:{title:"podman_tutorial_cn",permalink:"/docs/tutorials/podman_tutorial_cn"}},l={},c=[{value:"Installing Podman",id:"installing-podman",level:2},{value:"Familiarizing yourself with Podman",id:"familiarizing-yourself-with-podman",level:2},{value:"Running a sample container",id:"running-a-sample-container",level:3},{value:"Listing running containers",id:"listing-running-containers",level:3},{value:"Inspecting a running container",id:"inspecting-a-running-container",level:3},{value:"Testing the httpd server",id:"testing-the-httpd-server",level:3},{value:"Viewing the container&#39;s logs",id:"viewing-the-containers-logs",level:3},{value:"Viewing the container&#39;s pids",id:"viewing-the-containers-pids",level:3},{value:"Checkpointing the container",id:"checkpointing-the-container",level:3},{value:"Restoring the container",id:"restoring-the-container",level:3},{value:"Migrate the container",id:"migrate-the-container",level:3},{value:"Stopping the container",id:"stopping-the-container",level:3},{value:"Removing the container",id:"removing-the-container",level:3},{value:"Integration Tests",id:"integration-tests",level:2},{value:"More information",id:"more-information",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"--\ntitle: Podman Tutorial"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/containers/common/main/logos/podman-logo-full-vert.png",alt:"PODMAN logo"})),(0,o.kt)("h1",{id:"basic-setup-and-use-of-podman"},"Basic Setup and Use of Podman"),(0,o.kt)("p",null,"Podman is a utility provided as part of the libpod library. It can be used to create and maintain\ncontainers. The following tutorial will teach you how to set up Podman and perform some basic\ncommands with Podman."),(0,o.kt)("p",null,"If you are running on a Mac or Windows PC, you should instead follow the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/docs/tutorials/mac_win_client.md"},"Mac and Windows tutorial"),"\nto set up the remote Podman client."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": the code samples are intended to be run as a non-root user, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," where\nroot escalation is required."),(0,o.kt)("h2",{id:"installing-podman"},"Installing Podman"),(0,o.kt)("p",null,"For installing or building Podman, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://podman.io/getting-started/installation"},"installation instructions"),"."),(0,o.kt)("h2",{id:"familiarizing-yourself-with-podman"},"Familiarizing yourself with Podman"),(0,o.kt)("h3",{id:"running-a-sample-container"},"Running a sample container"),(0,o.kt)("p",null,"This sample container will run a very basic httpd server that serves only its index\npage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"podman run -dt -p 8080:8080/tcp -e HTTPD_VAR_RUN=/run/httpd -e HTTPD_MAIN_CONF_D_PATH=/etc/httpd/conf.d \\\n                  -e HTTPD_MAIN_CONF_PATH=/etc/httpd/conf \\\n                  -e HTTPD_CONTAINER_SCRIPTS_PATH=/usr/share/container-scripts/httpd/ \\\n                  registry.fedoraproject.org/f29/httpd /usr/bin/run-httpd\n")),(0,o.kt)("p",null,"Because the container is being run in detached mode, represented by the ",(0,o.kt)("em",{parentName:"p"},"-d")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"podman run")," command, Podman\nwill print the container ID after it has run. Note that we use port forwarding to be able to\naccess the HTTP server. For successful running at least slirp4netns v0.3.0 is needed."),(0,o.kt)("h3",{id:"listing-running-containers"},"Listing running containers"),(0,o.kt)("p",null,"The Podman ",(0,o.kt)("em",{parentName:"p"},"ps")," command is used to list creating and running containers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"podman ps\n")),(0,o.kt)("p",null,"Note: If you add ",(0,o.kt)("em",{parentName:"p"},"-a")," to the ",(0,o.kt)("em",{parentName:"p"},"ps")," command, Podman will show all containers."),(0,o.kt)("h3",{id:"inspecting-a-running-container"},"Inspecting a running container"),(0,o.kt)("p",null,'You can "inspect" a running container for metadata and details about itself. We can even use\nthe inspect subcommand to see what IP address was assigned to the container. As the container is running in rootless mode, an IP address is not assigned and the value will be listed as "none" in the output from inspect.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'podman inspect -l | grep IPAddress\\":\n            "SecondaryIPAddresses": null,\n            "IPAddress": "",\n')),(0,o.kt)("p",null,"Note: The -l or --latest option is a convenience argument for ",(0,o.kt)("strong",{parentName:"p"},"latest container"),". This option is not available with the remote Podman client; use the container name or ID instead."),(0,o.kt)("h3",{id:"testing-the-httpd-server"},"Testing the httpd server"),(0,o.kt)("p",null,"As we do not have the IP address of the container, we can test the network communication between the host\noperating system and the container using curl. The following command should display the index page of our\ncontainerized httpd server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"curl http://localhost:8080\n")),(0,o.kt)("h3",{id:"viewing-the-containers-logs"},"Viewing the container's logs"),(0,o.kt)("p",null,"You can view the container's logs with Podman as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'podman logs <container_id>\n10.88.0.1 - - [07/Feb/2018:15:22:11 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.55.1" "-"\n10.88.0.1 - - [07/Feb/2018:15:22:30 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.55.1" "-"\n10.88.0.1 - - [07/Feb/2018:15:22:30 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.55.1" "-"\n10.88.0.1 - - [07/Feb/2018:15:22:31 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.55.1" "-"\n10.88.0.1 - - [07/Feb/2018:15:22:31 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.55.1" "-"\n')),(0,o.kt)("h3",{id:"viewing-the-containers-pids"},"Viewing the container's pids"),(0,o.kt)("p",null,"And you can observe the httpd pid in the container with ",(0,o.kt)("em",{parentName:"p"},"top"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"podman top <container_id>\n  UID   PID  PPID  C STIME TTY          TIME CMD\n    0 31873 31863  0 09:21 ?        00:00:00 nginx: master process nginx -g daemon off;\n  101 31889 31873  0 09:21 ?        00:00:00 nginx: worker process\n")),(0,o.kt)("h3",{id:"checkpointing-the-container"},"Checkpointing the container"),(0,o.kt)("p",null,"Checkpointing a container stops the container while writing the state of all processes in the container to disk.\nWith this a container can later be restored and continue running at exactly the same point in time as the\ncheckpoint. This capability requires CRIU 3.11 or later installed on the system.\nThis feature is not supported as rootless; as such, if you wish to try it, you'll need to re-create your container as root, using the same command but with sudo."),(0,o.kt)("p",null,"To checkpoint the container use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo podman container checkpoint <container_id>\n")),(0,o.kt)("h3",{id:"restoring-the-container"},"Restoring the container"),(0,o.kt)("p",null,"Restoring a container is only possible for a previously checkpointed container. The restored container will\ncontinue to run at exactly the same point in time it was checkpointed.\nTo restore the container use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo podman container restore <container_id>\n")),(0,o.kt)("p",null,"After being restored, the container will answer requests again as it did before checkpointing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"curl http://<IP_address>:8080\n")),(0,o.kt)("h3",{id:"migrate-the-container"},"Migrate the container"),(0,o.kt)("p",null,"To live migrate a container from one host to another the container is checkpointed on the source\nsystem of the migration, transferred to the destination system and then restored on the destination\nsystem. When transferring the checkpoint, it is possible to specify an output-file."),(0,o.kt)("p",null,"On the source system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo podman container checkpoint <container_id> -e /tmp/checkpoint.tar.gz\nscp /tmp/checkpoint.tar.gz <destination_system>:/tmp\n")),(0,o.kt)("p",null,"On the destination system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo podman container restore -i /tmp/checkpoint.tar.gz\n")),(0,o.kt)("p",null,"After being restored, the container will answer requests again as it did before checkpointing. This\ntime the container will continue to run on the destination system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"curl http://<IP_address>:8080\n")),(0,o.kt)("h3",{id:"stopping-the-container"},"Stopping the container"),(0,o.kt)("p",null,"To stop the httpd container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"podman stop <container_id>\n")),(0,o.kt)("p",null,"You can also check the status of one or more containers using the ",(0,o.kt)("em",{parentName:"p"},"ps")," subcommand. In this case, we should\nuse the ",(0,o.kt)("em",{parentName:"p"},"-a")," argument to list all containers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"podman ps -a\n")),(0,o.kt)("h3",{id:"removing-the-container"},"Removing the container"),(0,o.kt)("p",null,"To remove the httpd container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"podman rm <container_id>\n")),(0,o.kt)("p",null,"You can verify the deletion of the container by running ",(0,o.kt)("em",{parentName:"p"},"podman ps -a"),"."),(0,o.kt)("h2",{id:"integration-tests"},"Integration Tests"),(0,o.kt)("p",null,"For more information on how to set up and run the integration tests in your environment, checkout the Integration Tests ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/test/README.md"},"README.md")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("p",null,"For more information on Podman and its subcommands, checkout the asciiart demos on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/README.md"},"README.md"),"\npage."))}u.isMDXComponent=!0}}]);
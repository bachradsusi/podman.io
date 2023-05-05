"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[5109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="How to sign and distribute container images using Podman",s={unversionedId:"tutorials/image_signing",id:"tutorials/image_signing",title:"How to sign and distribute container images using Podman",description:"Signing container images originates from the motivation of trusting only",source:"@site/docs/tutorials/image_signing.md",sourceDirName:"tutorials",slug:"/tutorials/image_signing",permalink:"/docs/tutorials/image_signing",draft:!1,editUrl:"https://github.com/containers/website-new/docs/tutorials/image_signing.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Basic Networking",permalink:"/docs/tutorials/basic_networking"},next:{title:"Podman Mac Client Tutorial",permalink:"/docs/tutorials/mac_client"}},l={},p=[],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-sign-and-distribute-container-images-using-podman"},"How to sign and distribute container images using Podman"),(0,r.kt)("p",null,"Signing container images originates from the motivation of trusting only\ndedicated image providers to mitigate man-in-the-middle (MITM) attacks or\nattacks on container registries. One way to sign images is to utilize a GNU\nPrivacy Guard (",(0,r.kt)("a",{parentName:"p",href:"https://gnupg.org"},"GPG"),") key. This technique is generally compatible with any\nOCI compliant container registry like ",(0,r.kt)("a",{parentName:"p",href:"https://quay.io"},"Quay.io"),". It is worth mentioning that\nthe OpenShift integrated container registry supports this signing mechanism out\nof the box, which makes separate signature storage unnecessary."),(0,r.kt)("p",null,"From a technical perspective, we can utilize Podman to sign the image before\npushing it into a remote registry. After that, all systems running Podman have\nto be configured to retrieve the signatures from a remote server, which can\nbe any simple web server. This means that every unsigned image will be rejected\nduring an image pull operation. But how does this work?"),(0,r.kt)("p",null,"First of all, we have to create a GPG key pair or select an already locally\navailable one. To generate a new GPG key, just run ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg --full-gen-key")," and\nfollow the interactive dialog. Now we should be able to verify that the key\nexists locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> gpg --list-keys sgrunert@suse.com\npub   rsa2048 2018-11-26 [SC] [expires: 2020-11-25]\n      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nuid           [ultimate] Sascha Grunert <sgrunert@suse.com>\nsub   rsa2048 2018-11-26 [E] [expires: 2020-11-25]\n")),(0,r.kt)("p",null,"Now let\u2019s assume that we run a container registry. For example we could simply\nstart one on our local machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo podman run -d -p 5000:5000 docker.io/registry\n")),(0,r.kt)("p",null,"The registry does not know anything about image signing, it just provides the remote\nstorage for the container images. This means if we want to sign an image, we\nhave to take care of how to distribute the signatures."),(0,r.kt)("p",null,"Let\u2019s choose a standard ",(0,r.kt)("inlineCode",{parentName:"p"},"alpine")," image for our signing experiment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo podman pull docker://docker.io/alpine:latest\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo podman images alpine\nREPOSITORY                 TAG      IMAGE ID       CREATED       SIZE\ndocker.io/library/alpine   latest   e7d92cdc71fe   6 weeks ago   5.86 MB\n")),(0,r.kt)("p",null,"Now we can re-tag the image to point it to our local registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo podman tag alpine localhost:5000/alpine\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo podman images alpine\nREPOSITORY                 TAG      IMAGE ID       CREATED       SIZE\nlocalhost:5000/alpine      latest   e7d92cdc71fe   6 weeks ago   5.86 MB\ndocker.io/library/alpine   latest   e7d92cdc71fe   6 weeks ago   5.86 MB\n")),(0,r.kt)("p",null,"Podman would now be able to push the image and sign it in one command. But to\nlet this work, we have to modify our system-wide registries configuration at\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containers/registries.d/default.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"default-docker:\n  sigstore: http://localhost:8000 # Added by us\n  sigstore-staging: file:///var/lib/containers/sigstore\n")),(0,r.kt)("p",null,"We can see that we have two signature stores configured:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sigstore"),": referencing a web server for signature reading"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sigstore-staging"),": referencing a file path for signature writing")),(0,r.kt)("p",null,"Now, let\u2019s push and sign the image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -E GNUPGHOME=$HOME/.gnupg \\\n    podman push \\\n    --tls-verify=false \\\n    --sign-by sgrunert@suse.com \\\n    localhost:5000/alpine\n\u2026\nStoring signatures\n")),(0,r.kt)("p",null,"If we now take a look at the systems signature storage, then we see that there\nis a new signature available, which was caused by the image push:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ls /var/lib/containers/sigstore\n'alpine@sha256=e9b65ef660a3ff91d28cc50eba84f21798a6c5c39b4dd165047db49e84ae1fb9'\n")),(0,r.kt)("p",null,"The default signature store in our edited version of\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containers/registries.d/default.yaml")," references a web server listening at\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),". For our experiment, we simply start a new server inside\nthe local staging signature store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo bash -c 'cd /var/lib/containers/sigstore && python3 -m http.server'\nServing HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...\n")),(0,r.kt)("p",null,"Let\u2019s remove the local images for our verification test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo podman rmi docker.io/alpine localhost:5000/alpine\n")),(0,r.kt)("p",null,"We have to write a policy to enforce that the signature has to be valid. This\ncan be done by adding a new rule in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containers/policy.json"),". From the\nbelow example, copy the ",(0,r.kt)("inlineCode",{parentName:"p"},'"docker"')," entry into the ",(0,r.kt)("inlineCode",{parentName:"p"},'"transports"')," section of your\n",(0,r.kt)("inlineCode",{parentName:"p"},"policy.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "default": [{ "type": "insecureAcceptAnything" }],\n  "transports": {\n    "docker": {\n      "localhost:5000": [\n        {\n          "type": "signedBy",\n          "keyType": "GPGKeys",\n          "keyPath": "/tmp/key.gpg"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keyPath")," does not exist yet, so we have to put the GPG key there:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --output /tmp/key.gpg --armor --export sgrunert@suse.com\n")),(0,r.kt)("p",null,"If we now pull the image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo podman pull --tls-verify=false localhost:5000/alpine\n\u2026\nStoring signatures\ne7d92cdc71feacf90708cb59182d0df1b911f8ae022d29e8e95d75ca6a99776a\n")),(0,r.kt)("p",null,"Then we can see in the logs of the web server that the signature has been\naccessed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'127.0.0.1 - - [04/Mar/2020 11:18:21] "GET /alpine@sha256=e9b65ef660a3ff91d28cc50eba84f21798a6c5c39b4dd165047db49e84ae1fb9/signature-1 HTTP/1.1" 200 -\n')),(0,r.kt)("p",null,"As an counterpart example, if we specify the wrong key at ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/key.gpg"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --output /tmp/key.gpg --armor --export mail@saschagrunert.de\nFile '/tmp/key.gpg' exists. Overwrite? (y/N) y\n")),(0,r.kt)("p",null,"Then a pull is not possible any more:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo podman pull --tls-verify=false localhost:5000/alpine\nTrying to pull localhost:5000/alpine...\nError: pulling image "localhost:5000/alpine": unable to pull localhost:5000/alpine: unable to pull image: Source image rejected: Invalid GPG signature: \u2026\n')),(0,r.kt)("p",null,"So in general there are four main things to be taken into consideration when\nsigning container images with Podman and GPG:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We need a valid private GPG key on the signing machine and corresponding\npublic keys on every system which would pull the image"),(0,r.kt)("li",{parentName:"ol"},"A web server has to run somewhere which has access to the signature storage"),(0,r.kt)("li",{parentName:"ol"},"The web server has to be configured in any\n",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/containers/registries.d/*.yaml")," file"),(0,r.kt)("li",{parentName:"ol"},"Every image pulling system has to be configured to contain the enforcing\npolicy configuration via ",(0,r.kt)("inlineCode",{parentName:"li"},"policy.conf"))),(0,r.kt)("p",null,"That\u2019s it for image signing and GPG. The cool thing is that this setup works out\nof the box with ",(0,r.kt)("a",{parentName:"p",href:"https://cri-o.io"},"CRI-O")," as well and can be used to sign container images in\nKubernetes environments."))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},a="Project and Environment",l={unversionedId:"how-to/project-and-environment",id:"how-to/project-and-environment",title:"Project and Environment",description:"Project Management",source:"@site/docs/how-to/project-and-environment.md",sourceDirName:"how-to",slug:"/how-to/project-and-environment",permalink:"/feature-probe-docs/how-to/project-and-environment",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/docs/how-to/project-and-environment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"How-to guides",permalink:"/feature-probe-docs/category/how-to-guides"},next:{title:"how-to-create-toggle",permalink:"/feature-probe-docs/how-to/how-to-create-toggle"}},c={},p=[{value:"Project Management",id:"project-management",level:2},{value:"Add project",id:"add-project",level:3},{value:"Edit project",id:"edit-project",level:3},{value:"Adding an environment",id:"adding-an-environment",level:3},{value:"Edit environment",id:"edit-environment",level:3}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"project-and-environment"},"Project and Environment"),(0,r.kt)("h2",{id:"project-management"},"Project Management"),(0,r.kt)("p",null,'Projects allow one FeatureProbe account to manage multiple different business goals. Generally a project corresponds to a system platform. For example, you can create a project called "Mobile Application" and another project called "Server Application". Each project has its own unique environment and corresponding functional toggles. You can create multiple environments in each project, all projects must have at least one environment\nThe system will have an initial project (My First Project) with 2 environments (test, online) each with its own SDK key to connect the FeatureProbe SDK to the specific environment.'),(0,r.kt)("h3",{id:"add-project"},"Add project"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create project screenshot",src:n(2751).Z,width:"1882",height:"636"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Click "Projects" in the top menu to enter the project list page'),(0,r.kt)("li",{parentName:"ol"},"Click the Add Project button"),(0,r.kt)("li",{parentName:"ol"},"fill in the project name"),(0,r.kt)("li",{parentName:"ol"},"fill in the key (the project's unique identifier, once created, cannot be edited)"),(0,r.kt)("li",{parentName:"ol"},"Fill in the description"),(0,r.kt)("li",{parentName:"ol"},"Click the Create button to complete the creation of the project (once the project is created, it cannot be deleted. The newly created project will come with an online environment)"),(0,r.kt)("li",{parentName:"ol"},"Click the environment card under the project to go directly to the list of toggles for that environment under the project")),(0,r.kt)("h3",{id:"edit-project"},"Edit project"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create environment screenshot",src:n(1695).Z,width:"2220",height:"1110"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click Edit Project Icon"),(0,r.kt)("li",{parentName:"ol"},"Edit the project information"),(0,r.kt)("li",{parentName:"ol"},"Click the Save button to finish editing the project")),(0,r.kt)("h3",{id:"adding-an-environment"},"Adding an environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click Add Environment"),(0,r.kt)("li",{parentName:"ol"},"Fill in the environment name"),(0,r.kt)("li",{parentName:"ol"},"fill in the key (the unique identifier of the environment, unique under the same project, once created, cannot be edited)"),(0,r.kt)("li",{parentName:"ol"},"click the Create button to complete the creation of the environment (once the environment is created, it cannot be deleted)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note: After the new environment is created, it will share the list of toggles under the project (the template information of the toggles), and the configuration information of the toggles will need to be configured independently by entering the environment.")),(0,r.kt)("h3",{id:"edit-environment"},"Edit environment"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"edit environment screenshot",src:n(6272).Z,width:"1144",height:"1096"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click Edit Environment"),(0,r.kt)("li",{parentName:"ol"},"Edit the environment information"),(0,r.kt)("li",{parentName:"ol"},"Click the Save button to finish editing the environment")))}m.isMDXComponent=!0},1695:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/en-create_environment-e520b7f762edafe97d6162069c1c47ac.png"},2751:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/en-create_project-74ed246fd3c1b7923393a99e7f009de8.png"},6272:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/en-edit_environment-c74beaf0a86a0e9c73baa4a5946fde6d.png"}}]);
"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o=void 0,l={unversionedId:"how-to/how-to-create-toggle",id:"how-to/how-to-create-toggle",title:"how-to-create-toggle",description:"Using Feature toggles",source:"@site/docs/how-to/how-to-create-toggle.md",sourceDirName:"how-to",slug:"/how-to/how-to-create-toggle",permalink:"/feature-probe-docs/how-to/how-to-create-toggle",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/docs/how-to/how-to-create-toggle.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Project and Environment",permalink:"/feature-probe-docs/how-to/project-and-environment"},next:{title:"toggle-detail",permalink:"/feature-probe-docs/how-to/toggle-detail"}},c={},s=[{value:"Using Feature toggles",id:"using-feature-toggles",level:2},{value:"Switch Dashboard",id:"switch-dashboard",level:3},{value:"Adding switch templates",id:"adding-switch-templates",level:3},{value:"Edit the switch template",id:"edit-the-switch-template",level:3}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-feature-toggles"},"Using Feature toggles"),(0,a.kt)("p",null,"The FeatureProbe platform provides a powerful feature switch management module. Feature switches are used for feature placement by selecting target traffic and gradually releasing data through continuous observation until full volume is deployed."),(0,a.kt)("h3",{id:"switch-dashboard"},"Switch Dashboard"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"toggles screenshot",src:n(1333).Z,width:"2870",height:"1412"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"default display of My First Project's online environment switch list information"),(0,a.kt)("li",{parentName:"ol"},"the left navigation bar provides a quick entry to switch environments (click the drop-down icon to the right of the environment)"),(0,a.kt)("li",{parentName:"ol"},'filter conditions allow us to quickly filter the switches by "evaluated", "enabled/disabled", "tags", "name/key/description"')),(0,a.kt)("h3",{id:"adding-switch-templates"},"Adding switch templates"),(0,a.kt)("p",null,'Switch "template information" (when the switch is created successfully, it will be synchronized with the initialization information of the existing environment)'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create toggle screenshot",src:n(4585).Z,width:"1622",height:"1630"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"fill in the switch name")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"fill in the key of the switch (a unique identifier for the switch, unique under the same project, not editable once created)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"fill in the description information")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"select the label (no initial value, you can create it yourself)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"select the sdk type")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"select the return type of the switch (4 types: Boolean, String, Number, JSON), which cannot be edited once created")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the Variations"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default two variations, value is empty (at least 2, can be increased or decreased) ","[value can be changed, name can be changed, description can be changed]","."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"fill in the disabled return value (the return value when the switch is disabled), the default synchronization variation1 data, can be changed")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the Create button to complete the creation of the switch"))),(0,a.kt)("h3",{id:"edit-the-switch-template"},"Edit the switch template"),(0,a.kt)("p",null,'The "template information" of the switch (after successful editing, it will not affect the switch configuration information in the existing environment, but only synchronize the initialization information to the new environment in the future)'),(0,a.kt)("p",null,"Translated with ",(0,a.kt)("a",{parentName:"p",href:"http://www.DeepL.com/Translator"},"www.DeepL.com/Translator")," (free version)"))}u.isMDXComponent=!0},4585:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/en-create_toggle-f2218d6b5c645c69cc153d1cf254d5e3.png"},1333:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/en-toggles-1f2519c996f1934d659226a4bf222827.png"}}]);
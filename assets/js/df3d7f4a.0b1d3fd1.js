"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[21],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(c,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},a=void 0,l={unversionedId:"how-to/toggle-detail",id:"how-to/toggle-detail",title:"toggle-detail",description:"Toggle targeting",source:"@site/docs/how-to/toggle-detail.md",sourceDirName:"how-to",slug:"/how-to/toggle-detail",permalink:"/feature-probe-docs/how-to/toggle-detail",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/docs/how-to/toggle-detail.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"how-to-create-toggle",permalink:"/feature-probe-docs/how-to/how-to-create-toggle"},next:{title:"metrics",permalink:"/feature-probe-docs/how-to/metrics"}},c={},s=[{value:"Toggle targeting",id:"toggle-targeting",level:2},{value:"Toggle targeting",id:"toggle-targeting-1",level:3},{value:"Connect to SDK",id:"connect-to-sdk",level:3},{value:"View history version",id:"view-history-version",level:3}],u={toc:s};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"toggle-targeting"},"Toggle targeting"),(0,i.kt)("h3",{id:"toggle-targeting-1"},"Toggle targeting"),(0,i.kt)("p",null,'The "configuration information" of the switch (not shared between each environment, independently owned, modification of the configuration information will not be synchronized to the "template information" of the switch), please switch to the target environment, and then configure (the initial information of the configuration information will be automatically synchronized to the "template information" of the switch) ")'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"toggle targeting screenshot",src:n(4198).Z,width:"2840",height:"1628"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Status: the status of the switch (Disabled return value when disabled, Rules and Default Rule in the switch configuration when enabled)"),(0,i.kt)("li",{parentName:"ol"},"Variations: template information of the default synchronization switch (can be changed)"),(0,i.kt)("li",{parentName:"ol"},'Rules: "or" relationship between multiple Rules (the order of rules is very important, a user comes in and is screened from top to bottom, the first Rule hit will not match the following Rule, and the one not hit will continue to be screened down)')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Add Rule: set "return value" for "specified group"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fill in the rule name"),(0,i.kt)("li",{parentName:"ul"},'filter "specified people" by "conditions", with and relationship between conditions (at least one condition)',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add conditions: select user attributes (custom add, enter to take effect), select the relationship, fill in the specific value (custom add, enter to take effect)"),(0,i.kt)("li",{parentName:"ul"},"Delete condition: click the delete icon on the right side of the condition line to delete the condition"))),(0,i.kt)("li",{parentName:"ul"},"Specify the return value: select among the variations ","[you can select a certain variation (100% of this item), or specify the percentage of each variation (the sum of all the variations must be 100%)]","."),(0,i.kt)("li",{parentName:"ul"},"Click on the Rule card area and drag it to sort the rules freely"),(0,i.kt)("li",{parentName:"ul"},"Delete Rule card: click the delete icon in the upper right corner of the card to delete the whole Rule")))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'Set Default Rule: set the default return value for "unspecified population": choose from variations ',"[you can choose a certain variation (100% of this item), or specify a percentage for each variation (the sum of all the variations (the sum of all the variations must be 100%)]"," 5."),(0,i.kt)("li",{parentName:"ol"},"Disabled return value: the template information of the default synchronization switch (can be changed)"),(0,i.kt)("li",{parentName:"ol"},"Click Publish to display the diff information before and after the change, and support filling in the ","[change description]"," (back in the history of the version)"),(0,i.kt)("li",{parentName:"ol"},"Click confirm to finish publishing")),(0,i.kt)("h3",{id:"connect-to-sdk"},"Connect to SDK"),(0,i.kt)("p",null,"Facilitate users to access our SDK easily and efficiently, and clearly know the access status"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sdk screenshot",src:n(436).Z,width:"2330",height:"1498"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Step 1: Select the SDK for the target language, click ","[Save and Continue]","."),(0,i.kt)("li",{parentName:"ol"},"Step 2: Generate lines of code according to the SDK, you can quickly copy them to the code, click ","[Continue]","."),(0,i.kt)("li",{parentName:"ol"},"Step 3: Test the application access and return the access result.")),(0,i.kt)("h3",{id:"view-history-version"},"View history version"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"history screenshot",src:n(4869).Z,width:"510",height:"764"})),(0,i.kt)("p",null,"Support for viewing the complete history of feature configuration changes"))}h.isMDXComponent=!0},4869:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/en-history-7a00c589379b0b4bd224fd090bda7cb0.png"},436:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/en-sdk-a0175ddc68b4e2c628561525810a6520.png"},4198:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/en-toggle_targeting-d4c38738c9b446f8dcd79f841afa432c.png"}}]);
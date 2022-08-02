"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},l="\u5f00\u5173\u914d\u7f6e",i={unversionedId:"how-to/toggle-detail",id:"how-to/toggle-detail",title:"\u5f00\u5173\u914d\u7f6e",description:"\u5f00\u5173\u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/toggle-detail.md",sourceDirName:"how-to",slug:"/how-to/toggle-detail",permalink:"/feature-probe-docs/zh-CN/how-to/toggle-detail",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/how-to/toggle-detail.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"\u4f7f\u7528\u529f\u80fd\u5f00\u5173",permalink:"/feature-probe-docs/zh-CN/how-to/how-to-create-toggle"},next:{title:"\u6570\u636e\u76d1\u63a7",permalink:"/feature-probe-docs/zh-CN/how-to/metrics"}},u={},s=[{value:"\u5f00\u5173\u914d\u7f6e",id:"\u5f00\u5173\u914d\u7f6e-1",level:3},{value:"\u8fde\u63a5SDK",id:"\u8fde\u63a5sdk",level:3},{value:"\u67e5\u770b\u5386\u53f2\u7248\u672c",id:"\u67e5\u770b\u5386\u53f2\u7248\u672c",level:3}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f00\u5173\u914d\u7f6e"},"\u5f00\u5173\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u5f00\u5173\u914d\u7f6e-1"},"\u5f00\u5173\u914d\u7f6e"),(0,a.kt)("p",null,'\u5f00\u5173\u7684\u201c\u914d\u7f6e\u4fe1\u606f\u201d\uff08\u5404\u73af\u5883\u95f4\u4e0d\u5171\u4eab\uff0c\u72ec\u7acb\u62e5\u6709,\u4fee\u6539\u914d\u7f6e\u4fe1\u606f\uff0c\u4e0d\u4f1a\u540c\u6b65\u5230\u5f00\u5173\u7684"\u6a21\u677f\u4fe1\u606f"\uff09\uff0c\u8bf7\u5207\u6362\u5230\u76ee\u6807\u73af\u5883\u540e\uff0c\u518d\u8fdb\u884c\u914d\u7f6e\uff08\u914d\u7f6e\u4fe1\u606f\u7684\u521d\u59cb\u4fe1\u606f\uff0c\u4f1a\u81ea\u52a8\u540c\u6b65\u5f00\u5173\u7684\u201c\u6a21\u677f\u4fe1\u606f\u201d\uff09'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"toggle targeting screenshot",src:r(8361).Z,width:"2858",height:"1408"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Status\uff1a\u5f00\u5173\u7684\u72b6\u6001\uff08\u7981\u7528\u540e\u751f\u6548Disabled return value\uff0c\u542f\u7528\u540e\u5f00\u5173\u914d\u7f6e\u4e2d\u7684Rules\u53caDefault Rule\u751f\u6548\uff09"),(0,a.kt)("li",{parentName:"ol"},"Variations\uff1a\u9ed8\u8ba4\u540c\u6b65\u5f00\u5173\u7684\u6a21\u677f\u4fe1\u606f\uff08\u53ef\u66f4\u6539\uff09"),(0,a.kt)("li",{parentName:"ol"},"Rules\uff1a\u591a\u4e2aRule\u4e4b\u95f4\u4e3a\u201c\u6216\u201d\u5173\u7cfb\uff08rule\u7684\u987a\u5e8f\u5f88\u91cd\u8981\uff0c\u4e00\u4e2a\u7528\u6237\u8fdb\u6765\uff0c\u662f\u4ece\u4e0a\u5f80\u4e0b\u4f9d\u6b21\u7b5b\u9009\u7684\uff0c\u547d\u4e2d\u4e86\u7b2c\u4e00\u4e2aRule\u5c31\u4e0d\u4f1a\u518d\u5339\u914d\u4e0b\u9762\u7684Rule\uff0c\u6ca1\u547d\u4e2d\u7684\u624d\u4f1a\u7ee7\u7eed\u5f80\u4e0b\u7b5b\uff09")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6dfb\u52a0Rule\uff1a\u4e3a\u201c\u6307\u5b9a\u4eba\u7fa4\u201d\u8bbe\u7f6e\u201c\u8fd4\u56de\u503c\u201d"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u586b\u5199rule\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u201c\u6761\u4ef6\u201d\u7b5b\u9009\u201c\u6307\u5b9a\u4eba\u7fa4\u201d\uff0c\u6761\u4ef6\u4e4b\u95f4\u4e3a\u4e14\u7684\u5173\u7cfb\uff08\u81f3\u5c11\u6709\u4e00\u4e2a\u6761\u4ef6\uff09",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6761\u4ef6\uff1a\u9009\u62e9\u7528\u6237\u5c5e\u6027\uff08\u81ea\u5b9a\u4e49\u6dfb\u52a0\uff0c\u56de\u8f66\u751f\u6548\uff09\u3001\u9009\u62e9\u5173\u7cfb\u7b26\u3001\u586b\u5199\u5177\u4f53\u7684\u503c\uff08\u81ea\u5b9a\u4e49\u6dfb\u52a0\uff0c\u56de\u8f66\u751f\u6548\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u6761\u4ef6\uff1a\u70b9\u51fb\u6761\u4ef6\u884c\u53f3\u4fa7\u7684\u5220\u9664icon\uff0c\u5373\u53ef\u5220\u9664\u8be5\u6761\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u8fd4\u56de\u503c\uff1a\u5728variations\u4e2d\u9009\u62e9\u3010\u53ef\u4ee5\u9009\u62e9\u67d0\u4e00\u4e2avariation\uff08\u8be5\u9879\u5360\u6bd4100%\uff09\uff0c\u4e5f\u53ef\u4ee5\u6bcf\u4e2avariation\u6307\u5b9a\u767e\u5206\u6bd4\uff08\u6240\u6709\u7684variation\u5360\u6bd4\u4e4b\u548c\u5fc5\u987b\u4e3a100%\uff09\u3011"),(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fbRule\u5361\u7247\u533a\u57df\u5e76\u62d6\u52a8\uff0c\u53ef\u4ee5\u5bf9rule\u8fdb\u884c\u81ea\u7531\u6392\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664Rule\u5361\u7247\uff1a\u70b9\u51fb\u5361\u7247\u53f3\u4e0a\u89d2\u5220\u9664icon\u5373\u53ef\u5220\u9664\u6574\u6761Rule")))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6eDefault Rule\uff1a\u4e3a\u201c\u672a\u6307\u5b9a\u4eba\u7fa4\u201d\u8bbe\u7f6e\u9ed8\u8ba4\u8fd4\u56de\u503c\uff1a\u5728variations\u4e2d\u9009\u62e9\u3010\u53ef\u4ee5\u9009\u62e9\u67d0\u4e00\u4e2avariation\uff08\u8be5\u9879\u5360\u6bd4100%\uff09\uff0c\u4e5f\u53ef\u4ee5\u6bcf\u4e2avariation\u6307\u5b9a\u767e\u5206\u6bd4\uff08\u6240\u6709\u7684variation\u5360\u6bd4\u4e4b\u548c\u5fc5\u987b\u4e3a100%\uff09\u3011"),(0,a.kt)("li",{parentName:"ol"},"Disabled return value\uff1a\u9ed8\u8ba4\u540c\u6b65\u5f00\u5173\u7684\u6a21\u677f\u4fe1\u606f\uff08\u53ef\u66f4\u6539\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fbPublish\uff0c\u5c55\u793a\u66f4\u6539\u524d\u540e\u7684diff\u4fe1\u606f\uff0c\u4e14\u652f\u6301\u586b\u5199\u3010\u53d8\u66f4\u8bf4\u660e\u3011\uff08\u56de\u663e\u5728\u5386\u53f2\u7248\u672c\u4e2d\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fbconfirm\uff0c\u5b8c\u6210\u53d1\u5e03")),(0,a.kt)("h3",{id:"\u8fde\u63a5sdk"},"\u8fde\u63a5SDK"),(0,a.kt)("p",null,"\u4fbf\u4e8e\u7528\u6237\u7b80\u5355\u3001\u9ad8\u6548\u7684\u63a5\u5165\u6211\u4eec\u7684SDK\u3001\u660e\u786e\u77e5\u6089\u63a5\u5165\u72b6\u6001",(0,a.kt)("img",{alt:"sdk screenshot",src:r(3062).Z,width:"2328",height:"1482"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6b65\u9aa41\uff1a\u9009\u62e9\u76ee\u6807\u8bed\u8a00\u7684SDK\uff0c\u70b9\u51fb\u3010\u4fdd\u5b58\u5e76\u7ee7\u7eed\u3011"),(0,a.kt)("li",{parentName:"ol"},"\u6b65\u9aa42\uff1a\u6839\u636eSDK\u751f\u6210\u4ee3\u7801\u884c\uff0c\u53ef\u4ee5\u5feb\u901f\u590d\u5236\u5230\u4ee3\u7801\u4e2d\uff0c\u70b9\u51fb\u3010\u7ee7\u7eed\u3011"),(0,a.kt)("li",{parentName:"ol"},"\u6b65\u9aa43\uff1a\u6d4b\u8bd5\u5e94\u7528\u63a5\u5165\u60c5\u51b5\uff0c\u8fd4\u56de\u63a5\u5165\u7ed3\u679c\u3002")),(0,a.kt)("h3",{id:"\u67e5\u770b\u5386\u53f2\u7248\u672c"},"\u67e5\u770b\u5386\u53f2\u7248\u672c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"history screenshot",src:r(4472).Z,width:"508",height:"770"})),(0,a.kt)("p",null,"\u652f\u6301\u67e5\u770b\u529f\u80fd\u914d\u7f6e\u53d8\u66f4\u7684\u5b8c\u6574\u5386\u7a0b"))}c.isMDXComponent=!0},4472:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/history-72f753848d98faf597407aa0ef73f6e2.png"},3062:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sdk-4c287fbf732095a153ed9ee6b9fc1d1a.png"},8361:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/toggle_targeting-002c74e5edd2022e20629de866f22373.png"}}]);
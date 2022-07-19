"use strict";(self.webpackChunkant_me_doc=self.webpackChunkant_me_doc||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=h(n),g=a,f=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var h=2;h<r;h++)i[h]=n[h];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var o=n(7462),a=(n(7294),n(3905));const r={title:"Fight",sidebar_position:4},i="Fighting Bugs",s={unversionedId:"tutorials/fight",id:"tutorials/fight",title:"Fight",description:"This lesson discusses what happens when the ants confront their mortal enemies, bugs. A bug in AntMe! is much stronger than any single",source:"@site/docs/tutorials/fight.mdx",sourceDirName:"tutorials",slug:"/tutorials/fight",permalink:"/docs/tutorials/fight",draft:!1,editUrl:"https://github.com/AntMeNet/WikiPages/edit/main/docs/tutorials/fight.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Wendel",lastUpdatedAt:1658186549,formattedLastUpdatedAt:"Jul 18, 2022",sidebarPosition:4,frontMatter:{title:"Fight",sidebar_position:4},sidebar:"tutorials",previous:{title:"Collect food",permalink:"/docs/tutorials/collectfood"}},l={},h=[],u={toc:h};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fighting-bugs"},"Fighting Bugs"),(0,a.kt)("p",null,"This lesson discusses what happens when the ants confront their mortal enemies, bugs. A bug in AntMe! is much stronger than any single\nant. Worse, their hit points regenerate over time. So you need to be careful when fighting them. You can't afford to let too many of\nyour ants die, but you also need to ensure that they manage to defeat the bug."),(0,a.kt)("p",null,'Find the "SeeEnemy (bug)" method under "Combat". '),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3).Z,width:"896",height:"689"})),(0,a.kt)("p",null,"Add the following lines of code to the method: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public override void SiehtFeind(Wanze wanze)\n{\n    LasseNahrungFallen();\n    if(AnzahlAmeisenInSichtweite >= 2)\n    {\n        GreifeAn(wanze);\n    }\n    else\n    {\n        GeheWegVon(wanze);\n    }\n}\n")),(0,a.kt)("p",null,"Now find the \u201cUnderAttack (bug)\u201d method. Add the following lines of code to it: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public override void WirdAngegriffen(Wanze wanze)\n{\n    if(AktuelleEnergie < MaximaleEnergie / 2)\n    {\n        GeheZuBau();\n    }\n}\n")),(0,a.kt)("p",null,"What do these lines of code do? If an ant sees a bug, first it checks if at least two of its friends are nearby so that all three can attack\nthe bug together. If the ant determines that there are enough friends in the area, then it attacks the bug and hopes that the other ants will\ndo the same. If it doesn't have enough friends in the area, then the ant runs away. In both cases it drops any food that it's carrying so\nthat it can move more quickly."),(0,a.kt)("p",null,"During battle the ant constantly checks its energy value, which works like hit points in a game. If it only has a little bit of energy left,\nit will run back to the anthill to recover."),(0,a.kt)("p",null,"You earn 100 points for every bug you kill."),(0,a.kt)("p",null,"There's something else we can do to improve the behavior of our ants. Try to imagine what happens when an ant finds itself between a mound\nof sugar and a bug and both are in sight. The ant might decide to go towards the sugar one moment and then towards the bug the next, and so\non. Since the ant doesn't know which option it should prefer, we want to specify that it should go fight the bug."),(0,a.kt)("p",null,"Find the two \u201cSee\u201d methods for sugar and fruit that you modified earlier. Add the following condition to the existing source code\n(it is important that this condition encloses the already existing source code with { } brackets): "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"if(!(Ziel is Wanze))\n{\n...\n}\n")),(0,a.kt)("p",null,"This code commands your ants to only react to food in their vicinity if they aren't already running towards a bug or fighting one."),(0,a.kt)("p",null,"It should look like this in the editor after you've added the condition: "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3757).Z,width:"921",height:"715"})),(0,a.kt)("p",null,"If you start the game now by clicking the green play button, you'll notice that the ants rarely win a fight with a bug. Basically,\nthey only win if, by chance, there are already a lot of ants near the bug. Usually they just run away. Why is this? The instructions\nin the source code dealing with combat (drop food, attack together) sound so sensible! The reason is that the probability that enough\nants will find themselves near each other when a bug is in visual range is currently very low. In the next lesson (lesson six) we'll\ndiscuss a way to summon more ants together. Lesson seven will teach you how to make your ants stronger so that they can defeat bugs faster."))}c.isMDXComponent=!0},3:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Lektion5_1-503bd5a0fcdcdd6e1aedba410467dc11.png"},3757:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Lektion5_5-362b7ad1510b073468807aebad5f0edd.png"}}]);
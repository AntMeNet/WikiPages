"use strict";(self.webpackChunkant_me_doc=self.webpackChunkant_me_doc||[]).push([[715],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5451:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={title:"Game start",sidebar_position:2},s="Creating an Ant Colony",c={unversionedId:"tutorials/gamestart",id:"tutorials/gamestart",title:"Game start",description:"In this lesson we'll discuss how to get started with the game itself by creating an ant colony and placing them in their",source:"@site/docs/tutorials/gamestart.mdx",sourceDirName:"tutorials",slug:"/tutorials/gamestart",permalink:"/docs/tutorials/gamestart",draft:!1,editUrl:"https://github.com/AntMeNet/WikiPages/edit/main/docs/tutorials/gamestart.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Wendel",lastUpdatedAt:1658186447,formattedLastUpdatedAt:"7/18/2022",sidebarPosition:2,frontMatter:{title:"Game start",sidebar_position:2},sidebar:"tutorials",previous:{title:"Visual Studio",permalink:"/docs/tutorials/installation/visualstudio"},next:{title:"Collect food",permalink:"/docs/tutorials/collectfood"}},u={},h=[],d={toc:h};function p(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-an-ant-colony"},"Creating an Ant Colony"),(0,i.kt)("p",null,"In this lesson we'll discuss how to get started with the game itself by creating an ant colony and placing them in their\nvirtual world."),(0,i.kt)("p",null,"The following instructions and screenshots are all based on the Visual Studio 2013 development environment as well as the\n.NET Framework 4 and .XNA frameworks. If you're using a different development environment, things may look a bit different."),(0,i.kt)("p",null,"Quick reminder: .NET Framework 4 makes it possible to write and run programs that have been developed with the C# or VB.NET\nprogramming languages. The .XNA framework is what makes the game's 3D view possible."),(0,i.kt)("p",null,"Our goal here is to get you into the game as quickly and easily as possible. For that reason we're not going to provide a\nfull explanation of all the tabs and menus on the start screen (don't worry, though, we'll cover them in depth later).\nYou don't need all that info to start playing the game. You can come back to the lessons later if you want to read up on\nthe advanced features."),(0,i.kt)("p",null,"OK, so what happens now? "),(0,i.kt)("p",null,"In the following steps we're going to create our first ant colony together. The new ant colony with its tiny citizens is\nyour very own programming project. The behavior of the ant colony depends on the commands you give it by writing and editing\nthe program."),(0,i.kt)("p",null,'On the start screen you\'ll find three tabs above the greeting: "Welcome", "Statistics" and "3D View". Above the tabs you\'ll\nfind the menu bar with the "Mode" and "Speed" menus. You\'ll also see the "Play", "Stop" and "Pause" symbols up there on the\nleft. They\'ll all be gray because you can\'t click them yet. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7915).Z,width:"933",height:"724"})),(0,i.kt)("p",null,'Click the "Mode" button and select "Free Game" by right-clicking. A new tab labeled "Free Game" will appear in the tab bar. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8271).Z,width:"933",height:"724"})),(0,i.kt)("p",null,'Click the new "Free Game" tab and then click one of the empty slots in the menu that appears. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6).Z,width:"933",height:"724"})),(0,i.kt)("p",null,"The \"Select Player\" window will appear. You'll see icons for various templates for different kinds of ant behavior. They'll\nbe important later, but for now we just want to create our own ant colony."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9925).Z,width:"501",height:"401"})),(0,i.kt)("p",null,"To do that, click on the \u201c+\u201d symbol in the menu bar and the \u201cCreate Ant Colony\u201d window will open. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4601).Z,width:"499",height:"402"})),(0,i.kt)("p",null,"Give your new colony project a name. Note: the name can only contain letters and numbers, it can't begin with a number, it\nhas to be at least two characters long and it can't be more than twenty characters long. We named our colony \u201cAlpha\u201d. When\nyou're done, click \u201cOK\u201d and the \u201cEdit Ant\u201d window will open."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6020).Z,width:"467",height:"190"})),(0,i.kt)("p",null,"This window is confirmation that you've created a new ant template. Click \u201cYes\u201d to open your development environment (in this\ncase, Microsoft Visual Studio). You'll need it to be able to configure and control your colony by writing and editing source\ncode for the program that \u201cruns\u201d the colony."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3737).Z,width:"1279",height:"991"})),(0,i.kt)("p",null,"Wow, that's a lot of windows and menus and buttons! That's because Microsoft Visual Studio is a highly developed tool for\nprofessional programmers. With the help of development environments like this one, programmers have made every kind of software\nyou can imagine, including the Windows operating system that you're using right now. But don't panic! We only need to work\nwith a couple of these elements: the big window in the middle (the Code Editor) and the little window on the right (the\nSolution Explorer)."),(0,i.kt)("p",null,"Now we're ready. Click the start button (it's the green triangle) to load your newly created colony. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5570).Z,width:"1279",height:"991"})),(0,i.kt)("p",null,"The AntMe! start screen that you know and love will appear again. You'll notice that the \u201cPlay\u201d and \u201cPause\u201d symbols above the\ngreeting are now clickable. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8236).Z,width:"933",height:"724"})),(0,i.kt)("p",null,"Click \u201cPlay\u201d to start the simulation and bring your ants to life in the 3D view."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5053).Z,width:"817",height:"519"})),(0,i.kt)("p",null,"Now two AntMe! windows are open: the 3D window and the start screen. Check out the \u201c3D View\u201d tab on the start screen to see how\nyou can control the 3D view and move the camera around the sandbox."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(248).Z,width:"933",height:"724"})),(0,i.kt)("p",null,"Move the camera with the mouse in order to explore the inner life of the sandbox. Take your time and have a look around in order\nto get a feel for the game world and its inhabitants."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6523).Z,width:"817",height:"519"})),(0,i.kt)("p",null,"If you move the camera close to the anthill, you'll be able to see your ants' feelers poking out of the anthill."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9456).Z,width:"817",height:"519"})),(0,i.kt)("p",null,"Why aren't the ants moving? Well, we created the Alpha colony and the anthill has been populated with ants. But we still haven't\ntold the ants what they should do or how they should behave. We'll cover that in the next lesson. You'll find out how you can get\nyour ants to move around and how to get them to gather food."))}p.isMDXComponent=!0},7915:function(e,t,n){t.Z=n.p+"assets/images/lektion3_1-0f8ce6fd5094f321124abf96ecaad987.png"},5053:function(e,t,n){t.Z=n.p+"assets/images/lektion3_10-7d87457bbcd751814ff49b78c8be2544.png"},248:function(e,t,n){t.Z=n.p+"assets/images/lektion3_11-bbffd763123991e9e9b1423a07d1c204.png"},6523:function(e,t,n){t.Z=n.p+"assets/images/lektion3_12-f60fc69cf2deb769c67ea7adfe5bd18a.png"},9456:function(e,t,n){t.Z=n.p+"assets/images/lektion3_13-f48ec99eaf792a08555aa5885e18c65a.png"},8271:function(e,t,n){t.Z=n.p+"assets/images/lektion3_2-770f2081688326a9bf03993e28b6e1a8.png"},6:function(e,t,n){t.Z=n.p+"assets/images/lektion3_3-4e97d75d0d2b62b8dedf4e9e2955136b.png"},9925:function(e,t,n){t.Z=n.p+"assets/images/lektion3_4-b78e2e605dab5f6cee80775a49e7c09d.png"},4601:function(e,t,n){t.Z=n.p+"assets/images/lektion3_5-17a3064ea534b4b376f26b63f6e92692.png"},6020:function(e,t,n){t.Z=n.p+"assets/images/lektion3_6-a13b5de00773fdd7241ae608147eee7a.png"},3737:function(e,t,n){t.Z=n.p+"assets/images/lektion3_7-31c065834a9a3aeced36957beee3763b.png"},5570:function(e,t,n){t.Z=n.p+"assets/images/lektion3_8-29809162ac2f9c92efa96b2eaf9a2e6d.png"},8236:function(e,t,n){t.Z=n.p+"assets/images/lektion3_9-72e6c8123cbedc18e135dc781e76fd33.png"}}]);
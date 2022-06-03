"use strict";(self.webpackChunkant_me_doc=self.webpackChunkant_me_doc||[]).push([[478],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),h=r,f=m["".concat(o,".").concat(h)]||m[h]||c[h]||s;return t?i.createElement(f,a(a({ref:n},d),{},{components:t})):i.createElement(f,a({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<s;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5392:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=t(7462),r=t(3366),s=(t(7294),t(3905)),a=["components"],l={title:"Game start",sidebar_position:2},o=void 0,u={unversionedId:"tutorials/gamestart",id:"tutorials/gamestart",title:"Game start",description:"Hier erf\xe4hrst du, wie du mit dem eigentlichen Spiel beginnst, indem du deine Ameise erschaffst und sie in ihrer Welt platzierst.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorials/gamestart.mdx",sourceDirName:"tutorials",slug:"/tutorials/gamestart",permalink:"/en/docs/tutorials/gamestart",draft:!1,editUrl:"https://github.com/AntMeNet/WikiPages/edit/main/docs/tutorials/gamestart.mdx",tags:[],version:"current",lastUpdatedBy:"Yannick Schrade",lastUpdatedAt:1649087584,formattedLastUpdatedAt:"4/4/2022",sidebarPosition:2,frontMatter:{title:"Game start",sidebar_position:2},sidebar:"tutorials",previous:{title:"Visual Studio",permalink:"/en/docs/tutorials/installation/visualstudio"},next:{title:"Collect food",permalink:"/en/docs/tutorials/collectfood"}},d={},c=[],m={toc:c};function h(e){var n=e.components,l=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Hier erf\xe4hrst du, wie du mit dem eigentlichen Spiel beginnst, indem du deine Ameise erschaffst und sie in ihrer Welt platzierst. "),(0,s.kt)("p",null,"Die nachfolgenden Erkl\xe4rungen und Bilder beziehen sich auf das Visual Studio 2013 als Entwicklungsumgebung sowie die beiden Frameworks .NET Framework 4 und .XNA Framework. "),(0,s.kt)("p",null,"Zur Erinnerung: Das .NET Framework 4 dient dem Betrieb von Programmen, die mit den Programmiersprachen C# oder VB.NET entwickelt worden sind. Das .XNA-Framework erm\xf6glicht die 3D-Ansicht des Spiels."),(0,s.kt)("p",null,"Um so schnell wie m\xf6glich mit dem Spiel zu starten, haben wir die komplette Erkl\xe4rung aller Funktionen im Startbildschirm etwas weiter hinten angesetzt. Um das Spiel zu starten, brauchst du nicht alle Informationen. Deshalb kannst du sie an einer sp\xe4teren Stelle in dieser Lektion nachlesen. "),(0,s.kt)("p",null,"Was passiert jetzt? "),(0,s.kt)("p",null,"In den nachfolgenden Schritten erstellen wir gemeinsam deine erste Ameisenkolonie.\nDie junge Ameisenkolonie mit ihren kleinen Bewohnern steht f\xfcr dein eigenes, kleines Projekt in der Programmierung. Die Ameisenkolonie wird sich so verhalten, wie du es ihnen mit deinen Programmbefehlen vorgibst."),(0,s.kt)("p",null,"Auf dem Startbildschirm findest du \xfcber dem Begr\xfc\xdfungstext die drei Reiter \u201eWillkommen\u201c, \u201eStatistik\u201c und \u201e3D Ansicht\u201c. Dar\xfcber befindet sich die Men\xfcleiste mit den \u201eModus\u201c- und \u201eGeschwindigkeit\u201c- Buttons. Die drei grauen Symbole mit \u201ePlay\u201c, \u201eStop\u201c und \u201ePause\u201c kannst du erstmal noch nicht anklicken."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(7915).Z,width:"933",height:"724"})),(0,s.kt)("p",null,"Klicke den \u201eModus\u201c-Button und w\xe4hle per Rechtsklick \u201efreies Spiel\u201c aus. Sofort erscheint ein neuer Reiter, \u201eFreies Spiel\u201c, das du jetzt klicken kannst."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(8271).Z,width:"933",height:"724"})),(0,s.kt)("p",null,"Klicke im neuen Men\xfc \u201eFreies Spiel\u201c auf einen leeren Slot."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(6).Z,width:"933",height:"724"})),(0,s.kt)("p",null,"Es erscheint das Fenster \u201eSpieler ausw\xe4hlen\u201c. Du siehst darin verschiedene Vorlagen, die Verhaltensweisen von Ameisen vorgeben. Sie werden sp\xe4ter noch wichtig. Im Moment wollen wir jedoch unsere eigene Ameisenkolonie erstellen"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(9925).Z,width:"501",height:"401"})),(0,s.kt)("p",null,"Klicke dazu auf das \u201ePlus\u201c-Symbol in der Men\xfcleiste und es \xf6ffnet sich das Fenster \u201eAmeisenkolonie erstellen\u201c. "),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(4601).Z,width:"499",height:"402"})),(0,s.kt)("p",null,"Vergib deinem neuen, kleinen Kolonie-Projekt nun einen Namen. Beachte bitte: der Name der neuen Kolonie darf nur Buchstaben und Zahlen enthalten, nicht mit einer Zahl beginnen und muss zwischen 2 und 20 Zeichen lang sein.\nWir haben unsere Kolonie \u201eAlpha\u201c getauft. Wenn du fertig bist, klicke \u201eOK\u201c und das Fenster \u201eAmeise bearbeiten\u201c \xf6ffnet sich. "),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(6020).Z,width:"467",height:"190"})),(0,s.kt)("p",null,"Mit diesem Fenster erh\xe4ltst du die Best\xe4tigung, dass du eine neue Ameisenvorlage erfolgreich erstellt hast. Anschlie\xdfend klickst du \u201eYes\u201c, um deine Entwicklungsumgebung zu \xf6ffnen (hier Microsoft Visual Studio).\nDiese brauchst du, um deine kleine Kolonie als Projekt mit Hilfe von Programmierbefehlen bearbeiten zu k\xf6nnen."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(3737).Z,width:"1279",height:"991"})),(0,s.kt)("p",null,"Wow, das sind ganz sch\xf6n viele Schaltfl\xe4chen! Das r\xfchrt daher, dass das Microsoft Visual Studio eben schon ein richtig professionelles Werkzeug (=Tool) f\xfcr Programmierer ist.\nMit solchen Entwicklungsumgebungen hat man so ziemlich alles an Software erschaffen, was man sich vorstellen kann \u2013 zum Beispiel Microsoft Windows als Betriebssystem.\nAber keine Angst! F\xfcr uns wichtig sind jetzt nur einige dieser Schaltfl\xe4chen, n\xe4mlich das gro\xdfe Fenster in der Mitte (der Code Editor) sowie das kleine Fenster rechts (der Solution Explorer). "),(0,s.kt)("p",null,"Jetzt sind wir soweit. Klicke den gr\xfcnen Dreieckssymbol des Startbuttons, um deine frisch erschaffene Kolonie zu laden."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(5570).Z,width:"1279",height:"991"})),(0,s.kt)("p",null,"Es \xf6ffnet sich nun wieder das AntMe!-Startfenster, das du schon kennst. Du siehst nun, dass du die \u201ePlay\u201c und \u201ePause\u201c-Symbole \xfcber dem \u201eWillkommen\u201c-Reiter anklicken kannst."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(8236).Z,width:"933",height:"724"})),(0,s.kt)("p",null,"Mit \u201ePlay\u201c startest du nun das Geschehen in deiner Ameisenkolonie in der 3D-Ansicht."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(5053).Z,width:"817",height:"519"})),(0,s.kt)("p",null,"Jetzt sind zwei AntMe!-Fenster ge\xf6ffnet, die 3D-Ansicht und das Startfenster. Lies dir nun unter dem Reiter \u201e3D Ansicht\u201c durch, wie du die 3D Ansicht steuern kannst, um die Kamera im Sandkasten zu bewegen. "),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(248).Z,width:"933",height:"724"})),(0,s.kt)("p",null,"Bewege die Kamera mit der Maus, um das Innenleben des Sandkastens zu erkunden.\nSchaue dir alles in Ruhe an, um ein Gef\xfchl f\xfcr die von dir erschaffene Spielwelt und ihre Bewohner zu bekommen."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(6523).Z,width:"817",height:"519"})),(0,s.kt)("p",null,"Wenn du mit der Kamera ganz nah an den Ameisenbau f\xe4hrst, kannst du die kleinen F\xfchler deiner Ameisen erkennen."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(9456).Z,width:"817",height:"519"})),(0,s.kt)("p",null,"Warum sich die Ameisen nicht bewegen? Wir haben zun\xe4chst die Kolonie Alpha erschaffen, in der die Ameisen sich nun aufhalten.\nDamit haben wir aber den Ameisen noch nicht vorgegeben, wie sie sich verhalten sollen. Das kommt jetzt in dem n\xe4chsten Tutorial. Darin erf\xe4hrst du, wie du deine Ameisen in Bewegung setzt und wie sie Nahrung sammeln k\xf6nnen."))}h.isMDXComponent=!0},7915:function(e,n,t){n.Z=t.p+"assets/images/lektion3_1-0f8ce6fd5094f321124abf96ecaad987.png"},5053:function(e,n,t){n.Z=t.p+"assets/images/lektion3_10-7d87457bbcd751814ff49b78c8be2544.png"},248:function(e,n,t){n.Z=t.p+"assets/images/lektion3_11-bbffd763123991e9e9b1423a07d1c204.png"},6523:function(e,n,t){n.Z=t.p+"assets/images/lektion3_12-f60fc69cf2deb769c67ea7adfe5bd18a.png"},9456:function(e,n,t){n.Z=t.p+"assets/images/lektion3_13-f48ec99eaf792a08555aa5885e18c65a.png"},8271:function(e,n,t){n.Z=t.p+"assets/images/lektion3_2-770f2081688326a9bf03993e28b6e1a8.png"},6:function(e,n,t){n.Z=t.p+"assets/images/lektion3_3-4e97d75d0d2b62b8dedf4e9e2955136b.png"},9925:function(e,n,t){n.Z=t.p+"assets/images/lektion3_4-b78e2e605dab5f6cee80775a49e7c09d.png"},4601:function(e,n,t){n.Z=t.p+"assets/images/lektion3_5-17a3064ea534b4b376f26b63f6e92692.png"},6020:function(e,n,t){n.Z=t.p+"assets/images/lektion3_6-a13b5de00773fdd7241ae608147eee7a.png"},3737:function(e,n,t){n.Z=t.p+"assets/images/lektion3_7-31c065834a9a3aeced36957beee3763b.png"},5570:function(e,n,t){n.Z=t.p+"assets/images/lektion3_8-29809162ac2f9c92efa96b2eaf9a2e6d.png"},8236:function(e,n,t){n.Z=t.p+"assets/images/lektion3_9-72e6c8123cbedc18e135dc781e76fd33.png"}}]);
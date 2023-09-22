"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[258],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(b,i(i({ref:e},c),{},{components:n})):a.createElement(b,i({ref:e},c))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4639:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Display Objects",s={unversionedId:"guides/components/display-object",id:"guides/components/display-object",title:"Display Objects",description:"DisplayObject is the core class for anything that can be rendered by the engine.  It's the base class for sprites, text, complex graphics, containers, etc., and provides much of the common functionality for those objects.  As you're learning PixiJS, it's important to read through the documentation for this class to understand how to move, scale, rotate and compose the visual elements of your project.",source:"@site/docs/guides/components/display-object.md",sourceDirName:"guides/components",slug:"/guides/components/display-object",permalink:"/guides/components/display-object",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/display-object.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Containers",permalink:"/guides/components/containers"},next:{title:"Graphics",permalink:"/guides/components/graphics"}},l={},p=[{value:"Commonly Used Attributes",id:"commonly-used-attributes",level:2}],c={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"display-objects"},"Display Objects"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/PIXI.DisplayObject.html"},"DisplayObject")," is the core class for anything that can be rendered by the engine.  It's the base class for sprites, text, complex graphics, containers, etc., and provides much of the common functionality for those objects.  As you're learning PixiJS, it's important to ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/PIXI.DisplayObject.html"},"read through the documentation for this class")," to understand how to move, scale, rotate and compose the visual elements of your project."),(0,r.kt)("p",null,"Be aware that you won't use DisplayObject directly - you'll use its functions and attributes in derived classes."),(0,r.kt)("h2",{id:"commonly-used-attributes"},"Commonly Used Attributes"),(0,r.kt)("p",null,"The most common attributes you'll use when laying out and animating content in PixiJS are provided by the DisplayObject class:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"position")),(0,r.kt)("td",{parentName:"tr",align:null},"X- and Y-position are given in pixels and change the position of the object relative to its parent, also available directly as ",(0,r.kt)("inlineCode",{parentName:"td"},"object.x")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"object.y"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"rotation")),(0,r.kt)("td",{parentName:"tr",align:null},"Rotation is specified in radians, and turns an object clockwise (0.0 - 2 * Math.PI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"angle")),(0,r.kt)("td",{parentName:"tr",align:null},"Angle is an alias for rotation that is specified in degrees instead of radians (0.0 - 360.0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pivot")),(0,r.kt)("td",{parentName:"tr",align:null},"Point the object rotates around, in pixels - also sets origin for child objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"alpha")),(0,r.kt)("td",{parentName:"tr",align:null},"Opacity from 0.0 (fully transparent) to 1.0 (fully opaque), inherited by children")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"scale")),(0,r.kt)("td",{parentName:"tr",align:null},"Scale is specified as a percent with 1.0 being 100% or actual-size, and can be set independently for the x and y axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"skew")),(0,r.kt)("td",{parentName:"tr",align:null},"Skew transforms the object in x and y similar to the CSS skew() function, and is specified in radians")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"visible")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the object is visible or not, as a boolean value - prevents updating and rendering object and children")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"renderable")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the object should be rendered - when ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", object will still be updated, but won't be rendered, doesn't affect children")))))}d.isMDXComponent=!0}}]);
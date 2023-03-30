"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8770],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),o=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=o(r),m=a,c=d["".concat(p,".").concat(m)]||d[m]||k[m]||l;return r?n.createElement(c,i(i({ref:e},s),{},{components:r})):n.createElement(c,i({ref:e},s))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[d]="string"==typeof t?t:a,i[1]=u;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17782:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const l={id:"PIXI.RopeGeometry.pixi_mesh_extras",title:"Class: PIXI.RopeGeometry",sidebar_label:"PIXI.RopeGeometry",custom_edit_url:null},i=void 0,u={unversionedId:"api/classes/PIXI.RopeGeometry.pixi_mesh_extras",id:"api/classes/PIXI.RopeGeometry.pixi_mesh_extras",title:"Class: PIXI.RopeGeometry",description:"@pixi/mesh-extras.RopeGeometry",source:"@site/docs/api/classes/PIXI.RopeGeometry.pixi_mesh_extras.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.RopeGeometry.pixi_mesh_extras",permalink:"/api/classes/PIXI.RopeGeometry.pixi_mesh_extras",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.RopeGeometry.pixi_mesh_extras",title:"Class: PIXI.RopeGeometry",sidebar_label:"PIXI.RopeGeometry",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.Resource",permalink:"/api/classes/PIXI.Resource.pixi_core"},next:{title:"PIXI.RoundedRectangle",permalink:"/api/classes/PIXI.RoundedRectangle.pixi_math"}},p={},o=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"_width",id:"_width",level:3},{value:"glVertexArrayObjects",id:"glvertexarrayobjects",level:3},{value:"instanceCount",id:"instancecount",level:3},{value:"instanced",id:"instanced",level:3},{value:"points",id:"points",level:3},{value:"refCount",id:"refcount",level:3},{value:"textureScale",id:"texturescale",level:3},{value:"width",id:"width",level:3},{value:"Methods",id:"methods",level:2},{value:"addAttribute",id:"addattribute",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"addIndex",id:"addindex",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"clone",id:"clone",level:3},{value:"Returns:",id:"returns-2",level:4},{value:"destroy",id:"destroy",level:3},{value:"dispose",id:"dispose",level:3},{value:"getAttribute",id:"getattribute",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-3",level:4},{value:"getBuffer",id:"getbuffer",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"getIndex",id:"getindex",level:3},{value:"Returns:",id:"returns-5",level:4},{value:"getSize",id:"getsize",level:3},{value:"Returns:",id:"returns-6",level:4},{value:"interleave",id:"interleave",level:3},{value:"Returns:",id:"returns-7",level:4},{value:"updateVertices",id:"updatevertices",level:3}],s={toc:o};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"package-name"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_mesh_extras"},"@pixi/mesh-extras"),".RopeGeometry")),(0,a.kt)("p",null,"RopeGeometry allows you to draw a geometry across several points and then manipulate these points."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," import { Point, RopeGeometry } from 'pixi.js';\n\n for (let i = 0; i < 20; i++) {\n     points.push(new Point(i * 50, 0));\n };\n const rope = new RopeGeometry(100, points);\n")),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"constructor"},"Constructor:"),(0,a.kt)("h4",null,(0,a.kt)("code",null,"new PIXI.RopeGeometry(width: number, points: IPoint[], textureScale: number) ")),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"width"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"200")),(0,a.kt)("td",{parentName:"tr",align:null},"The width (i.e., thickness) of the rope.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"points"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"IPoint[]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:null},"An array of ",(0,a.kt)("a",{parentName:"td",href:"../classes/PIXI.Point.pixi_math"},"PIXI.Point")," objects to construct this rope.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"textureScale"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{parentName:"tr",align:null},"By default the rope texture will be stretched to match rope length. If textureScale is positive this value will be treated as a scaling factor and the texture will preserve its aspect ratio instead. To create a tiling rope set baseTexture.wrapMode to ",(0,a.kt)("a",{parentName:"td",href:"../enums/PIXI.WRAP_MODES.pixi_constants"},"PIXI.WRAP_MODES.REPEAT")," and use a power of two texture, then set textureScale=1 to keep the original texture pixel size. In order to reduce alpha channel artifacts provide a larger texture and downsample - i.e. set textureScale=0.5 to scale it down twice."))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"extends"},"Extends"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../classes/PIXI.MeshGeometry.pixi_mesh"},"PIXI.MeshGeometry"))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"_width"},"_width"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The width (i.e., thickness) of the rope.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"glvertexarrayobjects"},"glVertexArrayObjects"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"object")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," A map of renderer IDs to webgl VAOs")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"instancecount"},"instanceCount"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,a.kt)("code",null,"1")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Number of instances in this geometry, pass it to ",(0,a.kt)("inlineCode",{parentName:"p"},"GeometrySystem.draw()"),".")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"instanced"},"instanced"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Whether the geometry is instanced.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"points"},"points"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"IPoint[]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," An array of points that determine the rope.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"refcount"},"refCount"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Count of existing (not destroyed) meshes that reference this geometry.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"texturescale"},"textureScale"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Rope texture scale, if zero then the rope texture is stretched.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"width"},"width"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," The width (i.e., thickness) of the rope.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"addattribute"},"addAttribute"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(id",":"," string, buffer",":"," PIXI.Buffer ","|"," Array","<","number",">",", size",":"," number, normalized",":"," boolean, type",":"," TYPES, stride",":"," number, start",":"," number, instance",":"," boolean) -",">"," this")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Adds an attribute to the geometry Note",":"," ",(0,a.kt)("inlineCode",{parentName:"p"},"stride")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," should be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if you dont know them, not 0!"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the name of the attribute (matching up to a shader)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"buffer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"PIXI.Buffer ","|"," Array","<","number",">")),(0,a.kt)("td",{parentName:"tr",align:null},"the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"normalized"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"should the data be normalized.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"TYPES")),(0,a.kt)("td",{parentName:"tr",align:null},"what type of number is the attribute. Check ",(0,a.kt)("a",{parentName:"td",href:"../enums/PIXI.TYPES.pixi_constants"},"PIXI.TYPES")," to see the ones available")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stride"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"How far apart, in bytes, the start of each value is. (used for interleaving data)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"How far into the array to start reading values (used for interleaving data)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"instance"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Instancing flag")))),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"this")),(0,a.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"addindex"},"addIndex"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(buffer",":"," PIXI.Buffer ","|"," Array","<","number",">",") -",">"," Geometry")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Adds an index buffer to the geometry The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, \u2026). There is only ONE index buffer."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"buffer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"PIXI.Buffer ","|"," Array","<","number",">")),(0,a.kt)("td",{parentName:"tr",align:null},"The buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.")))),(0,a.kt)("h4",{id:"returns-1"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Geometry")),(0,a.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"clone"},"clone"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," Geometry")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Returns a clone of the geometry."),(0,a.kt)("h4",{id:"returns-2"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Geometry")),(0,a.kt)("td",{parentName:"tr",align:null},"* A new clone of this geometry."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"destroy"},"destroy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Destroys the geometry.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"dispose"},"dispose"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Disposes WebGL resources that are connected to this geometry.")),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"getattribute"},"getAttribute"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(id",":"," string) -",">"," Attribute")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Returns the requested attribute."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the attribute required")))),(0,a.kt)("h4",{id:"returns-3"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Attribute")),(0,a.kt)("td",{parentName:"tr",align:null},"* The attribute requested."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"getbuffer"},"getBuffer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"(id",":"," string) -",">"," Buffer")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Returns the requested buffer."),(0,a.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the buffer required.")))),(0,a.kt)("h4",{id:"returns-4"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Buffer")),(0,a.kt)("td",{parentName:"tr",align:null},"* The buffer requested."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"getindex"},"getIndex"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," Buffer")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Returns the index buffer"),(0,a.kt)("h4",{id:"returns-5"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Buffer")),(0,a.kt)("td",{parentName:"tr",align:null},"* The index buffer."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"getsize"},"getSize"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Get the size of the geometries, in vertices."),(0,a.kt)("h4",{id:"returns-6"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null}))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"interleave"},"interleave"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," Geometry")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," This function modifies the structure so that all current attributes become interleaved into a single buffer This can be useful if your model remains static as it offers a little performance boost"),(0,a.kt)("h4",{id:"returns-7"},"Returns:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Geometry")),(0,a.kt)("td",{parentName:"tr",align:null},"* Returns self, useful for chaining."))))),(0,a.kt)("hr",null),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"updatevertices"},"updateVertices"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"() -",">"," void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," refreshes vertices of Rope mesh")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);
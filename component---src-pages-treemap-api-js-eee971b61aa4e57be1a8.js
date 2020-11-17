(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"0q84":function(e,t,n){"use strict";var r=n("nLLr");t.a=Object(r.c)({label:function(e){return"node => `${node.id} (${node.formattedValue})`"===e?function(e){return e.id+" ("+e.formattedValue+")"}:e},parentLabel:function(e){return"node => node.pathComponents.join(' / ')"===e?function(e){return e.pathComponents.join(" / ")}:e},valueFormat:r.b})},"0wvI":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return d}));var r=n("6zZa"),o=n("q8Y+"),a=n.n(o),i=n("JCgZ"),l=n.n(i),c=function(){return{root:Object(r.f)()}},d=function(){return{root:{id:"root",children:a()(600).map((function(e){return{id:"node."+e,value:l()(10,1e5)}}))},nodeCount:600}}},DAMa:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("VlJN"),n("YjJN"),n("Eb4t"),n("Fdmb"),n("IYjZ"),n("yvkl"),n("abGl");var r=n("myAg"),o=n("RQLE");function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=r.e,l=[{key:"data",group:"Base",help:"The hierarchical data object.",type:"object",required:!0},{key:"identity",group:"Base",help:"The key or function to use to retrieve nodes identity.",type:"string | Function",required:!1,defaultValue:i.identity},{key:"value",group:"Base",help:"The key or function to use to retrieve nodes value.",type:"string | Function",required:!1,defaultValue:"value"},{key:"valueFormat",help:"\n            Value format supporting d3-format notation, this formatted value\n            will then be used for labels and tooltips.\n        ",type:"string | Function",required:!1,controlType:"valueFormat",group:"Base"},{key:"tile",group:"Base",help:"Strategy used to compute nodes.",description:"\n            Strategy used to compute nodes, see\n            [official d3 documentation](https://github.com/mbostock/d3/wiki/Treemap-Layout#mode).\n        ",type:"string",required:!1,defaultValue:"squarify",controlType:"choices",controlOptions:{choices:[{label:"binary",value:"binary"},{label:"squarify",value:"squarify"},{label:"slice",value:"slice"},{label:"dice",value:"dice"},{label:"sliceDice",value:"sliceDice"},{label:"resquarify",value:"resquarify"}]}},{key:"leavesOnly",help:"Only render leaf nodes (no parent).",type:"boolean",required:!1,defaultValue:i.leavesOnly,controlType:"switch",group:"Base"},{key:"innerPadding",help:"Padding between parent and child node.",type:"number",required:!1,defaultValue:i.innerPadding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:32}},{key:"outerPadding",help:"Padding between parent and child node.",type:"number",required:!1,defaultValue:i.outerPadding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:32}},{key:"width",group:"Base",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using responsive alternative\n            of the component `<Responsive*/>`.\n        ",type:"number",required:!0},{key:"height",group:"Base",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using responsive alternative\n            of the component `<Responsive*/>`.\n        ",type:"number",required:!0},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},{key:"colors",help:"Defines how to compute node color.",type:"string | Function | string[]",required:!1,defaultValue:i.colors,controlType:"ordinalColors",group:"Style"},{key:"nodeOpacity",help:"Node opacity (0~1).",required:!1,defaultValue:i.nodeOpacity,type:"number",controlType:"opacity",group:"Style"},{key:"borderWidth",help:"Control node border width.",type:"number",required:!1,defaultValue:i.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",type:"string | object | Function",required:!1,defaultValue:i.borderColor,controlType:"inheritedColor",group:"Style"}].concat(a(Object(o.b)("Style",["svg"])),[{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:i.enableLabel,controlType:"switch",group:"Labels"},{key:"label",help:"Label accessor.",description:"Defines how to get label text, can be a string (used to access current node property) or a function which will receive the actual node and must return the desired label.",type:"string | Function",required:!1,controlType:"choices",group:"Labels",controlOptions:{choices:["formattedValue","id","node => `${node.id} (${node.formattedValue})`"].map((function(e){return{label:e,value:e}}))}},{key:"labelSkipSize",help:"Skip label rendering if node minimal side length is lower than given value, 0 to disable.",type:"number",required:!1,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:100}},{key:"orientLabel",help:"Orient labels according to max node width/height.",type:"boolean",required:!1,defaultValue:i.orientLabel,controlType:"switch",group:"Labels"},{key:"labelTextColor",help:"Method to compute label text color.",type:"string | object | Function",required:!1,controlType:"inheritedColor",group:"Labels"},{key:"enableParentLabel",flavors:["svg","html","api"],help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:i.enableParentLabel,controlType:"switch",group:"Labels"},{key:"parentLabel",flavors:["svg","html","api"],help:"Parent label accessor.",description:"Defines how to get parent label text, can be a string (used to access current node property) or a function which will receive the actual node and must return the desired label.",type:"string | Function",required:!1,controlType:"choices",group:"Labels",controlOptions:{choices:["id","formattedValue","node => node.pathComponents.join(' / ')"].map((function(e){return{label:e,value:e}}))}},{key:"parentLabelSize",flavors:["svg","html","api"],help:"Parent label size.",required:!1,defaultValue:i.parentLabelSize,type:"number",controlType:"range",group:"Labels",controlOptions:{min:10,max:40}},{key:"parentLabelPosition",flavors:["svg","html","api"],help:"Parent label position.",type:"'top' | 'right' | 'bottom' | 'left'",required:!1,controlType:"choices",group:"Labels",defaultValue:i.parentLabelPosition,controlOptions:{choices:["top","right","bottom","left"].map((function(e){return{label:e,value:e}}))}},{key:"parentLabelPadding",flavors:["svg","html","api"],help:"Parent label padding.",required:!1,defaultValue:i.parentLabelPadding,type:"number",controlType:"range",group:"Labels",controlOptions:{min:0,max:20}},{key:"parentLabelTextColor",flavors:["svg","html","api"],help:"Method to compute parent label text color.",type:"string | object | Function",required:!1,controlType:"inheritedColor",group:"Labels"},{key:"isInteractive",flavors:["svg","html","canvas"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:i.isInteractive,controlType:"switch",group:"Interactivity"},{key:"onMouseEnter",flavors:["svg","html"],group:"Interactivity",type:"(node, event) => void",help:"onMouseEnter handler.",required:!1},{key:"onMouseMove",flavors:["svg","html","canvas"],group:"Interactivity",type:"(node, event) => void",help:"onMouseMove handler.",required:!1},{key:"onMouseLeave",flavors:["svg","html"],group:"Interactivity",type:"(node, event) => void",help:"onMouseLeave handler.",required:!1},{key:"onClick",flavors:["svg","html","canvas"],group:"Interactivity",type:"(node, event) => void",help:"onClick handler.",required:!1}],a(Object(o.e)(["svg","html","canvas"],i,"react-spring"))),c=Object(o.d)(l)},"N+Yx":function(e,t,n){"use strict";n.r(t);n("VlJN"),n("YjJN"),n("Eb4t"),n("Fdmb"),n("IYjZ"),n("yvkl"),n("abGl");var r=n("mXGw"),o=n.n(r),a=n("myAg"),i=n("vrFN"),l=n("vrO3"),c=n("DAMa"),d=n("0q84"),s=n("0wvI"),u=n("wZ6/"),p=n.n(u);function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=Object(s.b)();t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{title:"TreeMap HTTP API",keywords:[].concat(b(p.a.TreeMap.tags),["HTTP API"])}),o.a.createElement(l.a,{componentName:"TreeMap",chartClass:"treemap",apiPath:"/charts/treemap",flavors:p.a.flavors,controlGroups:c.a,propsMapper:d.a,defaultProps:{root:JSON.stringify(h.root,null,"  "),identity:"name",value:"loc",valueFormat:{format:".02s",enabled:!0},tile:a.e.tile,leavesOnly:a.e.leavesOnly,innerPadding:a.e.innerPadding,outerPadding:a.e.outerPadding,margin:{top:10,right:10,bottom:10,left:10},enableLabel:a.e.enableLabel,label:a.e.label,labelSkipSize:12,labelTextColor:{from:"color",modifiers:[["darker",1.2]]},orientLabel:a.e.orientLabel,enableParentLabel:a.e.enableParentLabel,parentLabel:a.e.parentLabel,parentLabelSize:a.e.parentLabelSize,parentLabelPosition:a.e.parentLabelPosition,parentLabelPadding:a.e.parentLabelPadding,parentLabelTextColor:{from:"color",modifiers:[["darker",2]]},colors:{scheme:"nivo"},colorBy:"path.1",nodeOpacity:.5,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]}}}))}},XgN0:function(e,t,n){var r=n("O76R"),o=n("KXzt"),a=r((function(e,t,n){return e+(n?" ":"")+o(t)}));e.exports=a},myAg:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return W})),n.d(t,"b",(function(){return D})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return j}));n("p0JG"),n("1c7q"),n("VlJN"),n("YjJN"),n("jr56"),n("Eb4t"),n("IYjZ"),n("Qvie"),n("xl0S"),n("wDqy"),n("yvkl"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3");var r=n("mXGw"),o=n.n(r),a=n("5QYd"),i=n("W0B4"),l=n.n(i),c=n("llhf"),d=n("fWs0"),s=n("edSL"),u=n.n(s),p=n("PWxN"),b=n.n(p),h=n("yEOx"),f=n.n(h),m=n("XgN0"),g=n.n(m),v=n("mrMI"),y=n("56Mt");function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=Object(r.memo)((function(e){var t=e.node,n=e.animatedProps,r=e.borderWidth,i=e.enableLabel,l=e.enableParentLabel,c=e.labelSkipSize,s=Object(a.pb)(),u=i&&t.isLeaf&&(0===c||Math.min(t.width,t.height)>c),p=l&&t.isParent;return o.a.createElement(d.a.g,{transform:n.transform},o.a.createElement(d.a.rect,{width:n.width.interpolate((function(e){return Math.max(e,0)})),height:n.height.interpolate((function(e){return Math.max(e,0)})),fill:t.fill?t.fill:n.color,strokeWidth:r,stroke:t.borderColor,fillOpacity:t.opacity,onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),u&&o.a.createElement(d.a.text,{textAnchor:"middle",dominantBaseline:"central",style:w(w({},s.labels.text),{},{fill:t.labelTextColor,pointerEvents:"none"}),fillOpacity:n.labelOpacity,transform:n.labelTransform},t.label),p&&o.a.createElement(d.a.text,{dominantBaseline:"central",style:w(w({},s.labels.text),{},{fill:t.parentLabelTextColor,pointerEvents:"none"}),fillOpacity:n.parentLabelOpacity,transform:n.parentLabelTransform},t.parentLabel))})),C=Object(r.memo)((function(e){var t=e.node,n=e.animatedProps,r=e.borderWidth,i=e.enableLabel,l=e.enableParentLabel,c=e.labelSkipSize,s=Object(a.pb)(),u=i&&t.isLeaf&&(0===c||Math.min(t.width,t.height)>c),p=l&&t.isParent;return o.a.createElement(d.a.div,{id:t.path.replace(/[^\w]/gi,"-"),style:{boxSizing:"border-box",position:"absolute",top:0,left:0,transform:n.htmlTransform,width:n.width,height:n.height,borderWidth:r,borderStyle:"solid",borderColor:t.borderColor,overflow:"hidden"}},o.a.createElement(d.a.div,{style:{boxSizing:"border-box",position:"absolute",top:0,left:0,opacity:t.opacity,width:n.width,height:n.height,background:n.color},onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),u&&o.a.createElement(d.a.span,{style:w(w({},s.labels.text),{},{position:"absolute",display:"flex",top:-5,left:-5,width:10,height:10,justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",color:t.labelTextColor,transformOrigin:"center center",transform:n.labelHtmlTransform,opacity:n.labelOpacity,pointerEvents:"none"})},t.label),p&&o.a.createElement(d.a.span,{style:w(w({},s.labels.text),{},{position:"absolute",display:"flex",justifyContent:"flex-start",alignItems:"center",whiteSpace:"nowrap",width:10,height:10,color:t.parentLabelTextColor,transformOrigin:"top left",transform:n.parentLabelHtmlTransform,opacity:n.parentLabelOpacity,pointerEvents:"none"})},t.parentLabel))})),P={identity:l.a.oneOfType([l.a.string,l.a.func]).isRequired,value:l.a.oneOfType([l.a.string,l.a.func]).isRequired,valueFormat:l.a.oneOfType([l.a.string,l.a.func]),colors:c.p.isRequired,colorBy:c.d.isRequired,nodeOpacity:l.a.number.isRequired,leavesOnly:l.a.bool.isRequired,tile:a.kb.isRequired,innerPadding:l.a.number.isRequired,outerPadding:l.a.number.isRequired,enableLabel:l.a.bool.isRequired,label:l.a.oneOfType([l.a.string,l.a.func]).isRequired,labelFormat:l.a.string,labelSkipSize:l.a.number.isRequired,labelTextColor:c.k.isRequired,orientLabel:l.a.bool.isRequired,enableParentLabel:l.a.bool.isRequired,parentLabel:l.a.oneOfType([l.a.string,l.a.func]).isRequired,parentLabelSize:l.a.number.isRequired,parentLabelPosition:l.a.oneOf(["top","right","bottom","left"]).isRequired,parentLabelPadding:l.a.number.isRequired,parentLabelTextColor:c.k.isRequired,borderWidth:l.a.number.isRequired,borderColor:c.k.isRequired,isInteractive:l.a.bool.isRequired,onMouseEnter:l.a.func,onMouseMove:l.a.func,onMouseLeave:l.a.func,onClick:l.a.func,tooltip:l.a.func},k=(w(w({},P),{},{nodeComponent:l.a.elementType.isRequired,role:l.a.string.isRequired},a.D),w(w({},P),{},{nodeComponent:l.a.elementType.isRequired}),w(w({},P),{},{pixelRatio:l.a.number.isRequired}),{identity:"id",value:"value",tile:"squarify",leavesOnly:!1,innerPadding:0,outerPadding:0,colors:{scheme:"nivo"},colorBy:"pathComponents.1",nodeOpacity:.33,enableLabel:!0,label:"formattedValue",labelSkipSize:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},orientLabel:!0,enableParentLabel:!0,parentLabel:"id",parentLabelSize:20,parentLabelPosition:"top",parentLabelPadding:6,parentLabelTextColor:{from:"color",modifiers:[["darker",1]]},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,animate:!0,motionConfig:"gentle"}),j=w(w({},k),{},{nodeComponent:O,role:"img",defs:[],fill:[]}),T=w(w({},k),{},{nodeComponent:C}),E=w(w({},k),{},{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1});function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var q=Object(r.memo)((function(e){var t=e.node,n=e.tooltip;return o.a.createElement(y.a,{id:t.id,value:t.formattedValue,enableChip:!0,color:t.color,renderContent:"function"==typeof n?n.bind(null,{node:t}):null})})),R=function(e){return Object(r.useMemo)((function(){return"function"==typeof e?e:function(t){return u()(t,e)}}),[e])},I=function(e){var t=e.data,n=e.identity,o=void 0===n?j.identity:n,i=e.value,l=void 0===i?j.value:i,d=e.valueFormat,s=e.leavesOnly,u=void 0===s?j.leavesOnly:s,p=e.width,h=e.height,m=e.tile,y=void 0===m?j.tile:m,L=e.innerPadding,x=void 0===L?j.innerPadding:L,w=e.outerPadding,O=void 0===w?j.outerPadding:w,C=e.label,P=void 0===C?j.label:C,k=e.orientLabel,T=void 0===k?j.orientLabel:k,E=e.enableParentLabel,S=void 0===E?j.enableParentLabel:E,q=e.parentLabel,I=void 0===q?j.parentLabel:q,A=e.parentLabelSize,_=void 0===A?j.parentLabelSize:A,z=e.parentLabelPosition,N=void 0===z?j.parentLabelPosition:z,W=e.parentLabelPadding,B=void 0===W?j.parentLabelPadding:W,F=e.colors,H=void 0===F?j.colors:F,V=e.colorBy,D=void 0===V?j.colorBy:V,Y=e.nodeOpacity,J=void 0===Y?j.nodeOpacity:Y,X=e.borderColor,G=void 0===X?j.borderColor:X,U=e.labelTextColor,Z=void 0===U?j.labelTextColor:U,$=e.parentLabelTextColor,K=void 0===$?j.parentLabelTextColor:$,Q=R(o),ee=R(l),te=Object(a.qb)(d),ne=R(P),re=R(I),oe=function(e){var t=e.width,n=e.height,o=e.tile,i=e.innerPadding,l=e.outerPadding,c=e.enableParentLabel,d=e.parentLabelSize,s=e.parentLabelPosition,u=e.leavesOnly;return Object(r.useMemo)((function(){var e=Object(v.d)().size([t,n]).tile(Object(a.jb)(o)).round(!0).paddingInner(i).paddingOuter(l);if(c&&!u){var r=d+2*l;e["padding".concat(g()(s))](r)}return e}),[t,n,o,i,l,c,d,s,u])}({width:p,height:h,tile:y,innerPadding:x,outerPadding:O,enableParentLabel:S,parentLabelSize:_,parentLabelPosition:N,leavesOnly:u}),ae=function(e){var t=e.root,n=e.getValue;return Object(r.useMemo)((function(){return Object(v.a)(t).sum(n)}),[t,n])}({root:t,getValue:ee}),ie=Object(r.useMemo)((function(){var e=f()(ae);return oe(e),u?e.leaves():e.descendants()}),[ae,oe,u]),le=Object(r.useMemo)((function(){return ie.map((function(e){var t=M(function(e,t){var n=e.ancestors().map((function(e){return t(e.data)})).reverse();return[n.join("."),n]}(e,Q),2),n=t[0],r=t[1],o={id:Q(e.data),path:n,pathComponents:r,data:b()(e.data,"children"),x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,value:e.value,formattedValue:te(e.value),treeDepth:e.depth,treeHeight:e.height,isParent:e.height>0,isLeaf:0===e.height};return o.label=ne(o),o.parentLabel=re(o),o.parentLabelRotation=0,"top"===N&&(o.parentLabelX=O+B,o.parentLabelY=O+_/2),"right"===N&&(o.parentLabelX=o.width-O-_/2,o.parentLabelY=o.height-O-B,o.parentLabelRotation=-90),"bottom"===N&&(o.parentLabelX=O+B,o.parentLabelY=o.height-O-_/2),"left"===N&&(o.parentLabelX=O+_/2,o.parentLabelY=o.height-O-B,o.parentLabelRotation=-90),o}))}),[ie,u,Q,te,ne,re,_,N,B,O]),ce=Object(a.pb)(),de=Object(c.s)(H,D),se=Object(c.r)(G,ce),ue=Object(c.r)(Z,ce),pe=Object(c.r)(K,ce),be=Object(r.useMemo)((function(){return le.map((function(e){return e.opacity=J,e.labelRotation=T&&e.height>e.width?-90:0,e.color=de(e),e.borderColor=se(e),e.labelTextColor=ue(e),e.parentLabelTextColor=pe(e),e}))}),[le,de,J,se,ue,pe,T]);return{hierarchy:ae,nodes:be,layout:oe}},A=function(e){return{transform:"translate(".concat(e.x,",").concat(e.y,")"),htmlTransform:"translate(".concat(e.x,"px,").concat(e.y,"px)"),labelOpacity:1,labelTransform:"translate(".concat(e.width/2,",").concat(e.height/2,") rotate(").concat(e.labelRotation,")"),labelHtmlTransform:"translate(".concat(e.width/2,"px,").concat(e.height/2,"px) rotate(").concat(e.labelRotation,"deg)"),parentLabelOpacity:1,parentLabelTransform:"translate(".concat(e.parentLabelX,",").concat(e.parentLabelY,") rotate(").concat(e.parentLabelRotation,")"),parentLabelHtmlTransform:"translate(".concat(e.parentLabelX-(0===e.parentLabelRotation?0:5),"px,").concat(e.parentLabelY-(0===e.parentLabelRotation?5:0),"px) rotate(").concat(e.parentLabelRotation,"deg)"),width:e.width,height:e.height,color:e.color}},_=function(e){var t=e.x+e.width/2,n=e.y+e.height/2;return{transform:"translate(".concat(t,",").concat(n,")"),transformPixels:"translate(".concat(t,"px,").concat(n,"px)"),labelOpacity:0,labelTransform:"translate(0,0) rotate(".concat(e.labelRotation,")"),parentLabelOpacity:0,parentLabelTransform:"translate(0,0) rotate(".concat(e.parentLabelRotation,")"),parentLabelHtmlTransform:"translate(0px,0px) rotate(".concat(e.parentLabelRotation,"deg)"),width:0,height:0,color:e.color}},z=Object(r.memo)((function(e){var t=e.nodes,n=e.nodeComponent,i=e.borderWidth,l=e.enableLabel,c=e.labelSkipSize,s=e.enableParentLabel,u=function(e,t){var n=t.isInteractive,a=t.onMouseEnter,i=t.onMouseMove,l=t.onMouseLeave,c=t.onClick,d=t.tooltip,s=Object(y.h)(),u=s.showTooltipFromEvent,p=s.hideTooltip,b=Object(r.useCallback)((function(e,t){u(o.a.createElement(q,{node:e,tooltip:d}),t,"left")}),[u,d]),h=Object(r.useCallback)((function(e,t){b(e,t),a&&a(e,t)}),[a,b]),f=Object(r.useCallback)((function(e,t){b(e,t),i&&i(e,t)}),[i,b]),m=Object(r.useCallback)((function(e,t){p(),l&&l(e,t)}),[l,p]),g=Object(r.useCallback)((function(e,t){c&&c(e,t)}),[c]);return Object(r.useMemo)((function(){return e.map((function(e){return n?w(w({},e),{},{onMouseEnter:function(t){return h(e,t)},onMouseMove:function(t){return f(e,t)},onMouseLeave:function(t){return m(e,t)},onClick:function(t){return g(e,t)}}):e}))}),[e,h,f,m,g])}(t,{isInteractive:e.isInteractive,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,tooltip:e.tooltip}),p=Object(a.ob)(),b=p.animate,h=p.config;return Object(d.e)(u,(function(e){return e.path}),{initial:function(e){return A(e)},from:function(e){return _(e)},enter:function(e){return A(e)},update:function(e){return A(e)},leave:function(e){return _(e)},config:h,immediate:!b}).map((function(e){var t=e.item,r=e.props,a=e.key;return o.a.createElement(n,{key:a,node:t,animatedProps:r,borderWidth:i,enableLabel:l,labelSkipSize:c,enableParentLabel:s})}))})),N=Object(a.rb)((function(e){var t=e.data,n=e.identity,r=e.value,i=e.tile,l=e.nodeComponent,c=e.valueFormat,d=e.innerPadding,s=e.outerPadding,u=e.leavesOnly,p=e.width,b=e.height,h=e.margin,f=e.colors,m=e.colorBy,g=e.nodeOpacity,v=e.borderWidth,y=e.borderColor,L=e.defs,x=e.fill,w=e.enableLabel,O=e.label,C=e.labelTextColor,P=e.orientLabel,k=e.labelSkipSize,j=e.enableParentLabel,T=e.parentLabel,E=e.parentLabelSize,S=e.parentLabelPosition,M=e.parentLabelPadding,q=e.parentLabelTextColor,R=e.isInteractive,A=e.onMouseEnter,_=e.onMouseMove,N=e.onMouseLeave,W=e.onClick,B=e.tooltip,F=e.role,H=Object(a.mb)(p,b,h),V=H.margin,D=H.innerWidth,Y=H.innerHeight,J=H.outerWidth,X=H.outerHeight,G=I({data:t,identity:n,value:r,valueFormat:c,leavesOnly:u,width:D,height:Y,tile:i,innerPadding:d,outerPadding:s,colors:f,colorBy:m,nodeOpacity:g,borderColor:y,label:O,labelTextColor:C,orientLabel:P,enableParentLabel:j,parentLabel:T,parentLabelSize:E,parentLabelPosition:S,parentLabelPadding:M,parentLabelTextColor:q}).nodes,U=Object(a.r)(L,G,x);return o.a.createElement(a.k,{width:J,height:X,margin:V,defs:U,role:F},o.a.createElement(z,{nodes:G,nodeComponent:l,borderWidth:v,enableLabel:w,labelSkipSize:k,enableParentLabel:j,isInteractive:R,onMouseEnter:A,onMouseMove:_,onMouseLeave:N,onClick:W,tooltip:B}))}));N.defaultProps=j;var W=function(e){return o.a.createElement(a.j,null,(function(t){var n=t.width,r=t.height;return o.a.createElement(N,Object.assign({width:n,height:r},e))}))},B=Object(a.rb)((function(e){var t=e.data,n=e.identity,r=e.value,i=e.tile,l=e.nodeComponent,c=e.valueFormat,d=e.innerPadding,s=e.outerPadding,u=e.leavesOnly,p=e.width,b=e.height,h=e.margin,f=e.colors,m=e.colorBy,g=e.nodeOpacity,v=e.borderWidth,y=e.borderColor,L=e.enableLabel,x=e.label,w=e.labelTextColor,O=e.orientLabel,C=e.labelSkipSize,P=e.enableParentLabel,k=e.parentLabel,j=e.parentLabelSize,T=e.parentLabelPosition,E=e.parentLabelPadding,S=e.parentLabelTextColor,M=e.isInteractive,q=e.onMouseEnter,R=e.onMouseMove,A=e.onMouseLeave,_=e.onClick,N=e.tooltip,W=Object(a.mb)(p,b,h),B=W.margin,F=W.innerWidth,H=W.innerHeight,V=W.outerWidth,D=W.outerHeight,Y=I({data:t,identity:n,value:r,valueFormat:c,leavesOnly:u,width:F,height:H,tile:i,innerPadding:d,outerPadding:s,colors:f,colorBy:m,nodeOpacity:g,borderColor:y,label:x,labelTextColor:w,orientLabel:O,enableParentLabel:P,parentLabel:k,parentLabelSize:j,parentLabelPosition:T,parentLabelPadding:E,parentLabelTextColor:S}).nodes;return o.a.createElement("div",{style:{position:"relative",width:V,height:D}},o.a.createElement("div",{style:{position:"absolute",top:B.top,left:B.left}},o.a.createElement(z,{nodes:Y,nodeComponent:l,borderWidth:v,enableLabel:L,labelSkipSize:C,enableParentLabel:P,isInteractive:M,onMouseEnter:q,onMouseMove:R,onMouseLeave:A,onClick:_,tooltip:N})))}));B.defaultProps=T;var F=function(e){return o.a.createElement(a.j,null,(function(t){var n=t.width,r=t.height;return o.a.createElement(B,Object.assign({width:n,height:r},e))}))},H=function(e,t,n,r){return e.find((function(e){return Object(a.M)(e.x+t.left,e.y+t.top,e.width,e.height,n,r)}))},V=Object(a.rb)((function(e){var t=e.data,n=e.identity,i=e.value,l=e.tile,c=e.valueFormat,d=e.innerPadding,s=e.outerPadding,u=e.leavesOnly,p=e.width,b=e.height,h=e.margin,f=e.colors,m=e.colorBy,g=e.nodeOpacity,v=e.borderWidth,L=e.borderColor,x=e.enableLabel,w=e.label,O=e.labelTextColor,C=e.orientLabel,P=e.labelSkipSize,k=e.isInteractive,j=e.onMouseMove,T=e.onClick,E=e.tooltip,S=e.pixelRatio,R=Object(r.useRef)(null),A=Object(a.mb)(p,b,h),_=A.margin,z=A.innerWidth,N=A.innerHeight,W=A.outerWidth,B=A.outerHeight,F=I({data:t,identity:n,value:i,valueFormat:c,leavesOnly:u,width:z,height:N,tile:l,innerPadding:d,outerPadding:s,colors:f,colorBy:m,nodeOpacity:g,borderColor:L,label:w,labelTextColor:O,orientLabel:C,enableParentLabel:!1}).nodes,V=Object(a.pb)();Object(r.useEffect)((function(){R.current.width=W*S,R.current.height=B*S;var e=R.current.getContext("2d");e.scale(S,S),e.fillStyle=V.background,e.fillRect(0,0,W,B),e.translate(_.left,_.top),F.forEach((function(t){e.fillStyle=t.color,e.fillRect(t.x,t.y,t.width,t.height),v>0&&(e.strokeStyle=t.borderColor,e.lineWidth=v,e.strokeRect(t.x,t.y,t.width,t.height))})),x&&(e.textAlign="center",e.textBaseline="middle",e.font="".concat(V.labels.text.fontSize,"px ").concat(V.labels.text.fontFamily),F.forEach((function(t){if(t.isLeaf&&(0===P||Math.min(t.width,t.height)>P)){var n=C&&t.height>t.width;e.save(),e.translate(t.x+t.width/2,t.y+t.height/2),e.rotate(Object(a.E)(n?-90:0)),e.fillStyle=t.labelTextColor,e.fillText(t.label,0,0),e.restore()}})))}),[R,F,W,B,z,N,_,v,x,C,P,V,S]);var D=Object(y.h)(),Y=D.showTooltipFromEvent,J=D.hideTooltip,X=Object(r.useCallback)((function(e){var t=M(Object(a.K)(R.current,e),2),n=t[0],r=t[1],i=H(F,_,n,r);void 0!==i?(Y(o.a.createElement(q,{node:i,tooltip:E}),e,"left"),j&&j(i,e)):J()}),[R,F,_,Y,J,E,j]),G=Object(r.useCallback)((function(){J()}),[J]),U=Object(r.useCallback)((function(e){var t=M(Object(a.K)(R.current,e),2),n=t[0],r=t[1],o=H(F,_,n,r);void 0!==o&&T&&T(o,e)}),[R,F,_,T]);return o.a.createElement("canvas",{ref:R,width:W*S,height:B*S,style:{width:W,height:B},onMouseEnter:k?X:void 0,onMouseMove:k?X:void 0,onMouseLeave:k?G:void 0,onClick:k?U:void 0})}));V.defaultProps=E;var D=function(e){return o.a.createElement(a.j,null,(function(t){var n=t.width,r=t.height;return o.a.createElement(V,Object.assign({width:n,height:r},e))}))}}).call(this,n("pCvA"))},vrO3:function(e,t,n){"use strict";n("1c7q");var r=n("mXGw"),o=n.n(r),a=n("UutA"),i=n("7oih"),l=n("UmRm"),c=n("QbkB"),d=n("1h20"),s=n("yHyT"),u=n("SBeK"),p=n("MF9i"),b=a.d.a.withConfig({displayName:"ApiPreview__Link",componentId:"sc-1tjndi9-0"})(["position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;"]),h=a.d.img.withConfig({displayName:"ApiPreview__Image",componentId:"sc-1tjndi9-1"})(["max-width:100%;max-height:100%;"]),f=a.d.div.withConfig({displayName:"ApiPreview__EmptyContainer",componentId:"sc-1tjndi9-2"})(["font-size:14px;line-height:1.6em;color:",";display:flex;align-items:center;justify-content:center;width:100%;height:100%;"],(function(e){return e.theme.colors.textLight})),m=function(e){var t=e.responseStatus,n=e.chartUrl;return 201===t&&n?o.a.createElement(b,{href:n,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(h,{src:n,alt:"api result"})):o.a.createElement(f,null,"Click the generate button in order to generate the chart.",o.a.createElement("br",null),"You can customize settings by using dedicated controls.")},g=n("TurY"),v=n("DA+T");function y(){var e=x(["\n        & {\n            position: relative;\n            top: auto;\n            right: auto;\n            width: auto;\n            height: 460px;\n            z-index: 0;\n            border-top: 1px solid ",";\n        }\n    "]);return y=function(){return e},e}function L(){var e=x(["\n        & {\n            top: ","px;\n            right: 0;\n            width: 60%;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.55);\n        }\n    "]);return L=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),e.raw=t,e}var w=["preview","body","data"],O=function(e){var t=e.chartClass,n=e.data,a=e.body,i=e.isLoading,l=e.responseStatus,c=e.chartUrl,d=Object(g.b)(),s=Object(r.useState)("preview"),u=s[0],p=s[1],b=Object(r.useState)(null),h=b[0],f=b[1];return o.a.createElement(C,{className:"chart-tabs--"+u},o.a.createElement(P,null,w.map((function(e){var n=e===u,r="preview"===e?t:"data",a=n||h===e?"colored":"neutral";return o.a.createElement(k,{key:e,className:"no-select",isCurrent:n,onClick:function(){return p(e)},onMouseEnter:function(){return f(e)},onMouseLeave:function(){return f(null)}},o.a.createElement(j,{className:"sprite-icons-"+r+"-"+d.id+"-"+a}),e)}))),o.a.createElement(T,null,"preview"===u&&o.a.createElement(m,{isLoading:i,responseStatus:l,chartUrl:c}),"body"===u&&o.a.createElement(v.a,null,JSON.stringify(a,null,"  ")),"data"===u&&o.a.createElement(v.a,null,n),o.a.createElement(q,{isLoading:i})))},C=a.d.div.withConfig({displayName:"ApiTabs__Wrapper",componentId:"wcngb8-0"})(["position:fixed;top:","px;right:0;width:60%;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.6);--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.55);z-index:10;overflow:hidden;background:",";border-bottom:1px solid ",";"," ",""],(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border}),l.a.tablet(L(),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.headerHeight})),l.a.mobile(y(),(function(e){return e.theme.colors.border}))),P=a.d.nav.withConfig({displayName:"ApiTabs__Nav",componentId:"wcngb8-1"})(["height:46px;background:",";display:flex;font-size:15px;color:#aaa;position:relative;"],(function(e){return e.theme.colors.background})),k=a.d.span.withConfig({displayName:"ApiTabs__NavItem",componentId:"wcngb8-2"})(["cursor:pointer;height:46px;display:block;position:relative;padding-left:46px;padding-right:14px;padding-top:11px;background:",";&:hover{color:",";}"],(function(e){var t=e.isCurrent,n=e.theme;return t?n.colors.cardBackground:"transparent"}),(function(e){return e.theme.colors.text})),j=a.d.span.withConfig({displayName:"ApiTabs__Icon",componentId:"wcngb8-3"})(["position:absolute;top:0;left:0;display:block;transform:scale(0.44);transform-origin:top left;margin:12px 0 0 12px;"]),T=a.d.div.withConfig({displayName:"ApiTabs__Content",componentId:"wcngb8-4"})(["position:absolute;top:46px;bottom:0;width:100%;overflow-x:hidden;overflow-y:auto;"]),E=a.d.div.withConfig({displayName:"ApiTabs__LoaderContainer",componentId:"wcngb8-5"})(["position:absolute;top:50%;left:50%;width:100px;height:80px;margin-top:-40px;margin-left:-50px;background:",";display:grid;grid-template-columns:10px 10px 10px 10px 10px;grid-column-gap:6px;padding:10px 13px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.15);pointer-events:none;opacity:",";transform:translate3d(0,",",0);transition:transform 200ms,opacity 200ms;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.isLoading?1:0}),(function(e){return e.isLoading?0:"20px"})),S=Object(a.e)(["0%,100%{transform:scale3d(1,0,1);}50%{transform:scale3d(1,1,1);}"]),M=a.d.span.withConfig({displayName:"ApiTabs__LoaderBar",componentId:"wcngb8-6"})(["display:block;background:",";width:100%;height:100%;transform:scale3d(1,0,1);transform-origin:100% 100%;animation-name:",";animation-duration:800ms;animation-iteration-count:infinite;animation-delay:","ms;"],(function(e){return e.theme.colors.accent}),S,(function(e){return 60*(e.index+1)})),q=function(e){var t=e.isLoading;return o.a.createElement(E,{isLoading:t},o.a.createElement("span",null,o.a.createElement(M,{index:0})),o.a.createElement("span",null,o.a.createElement(M,{index:1})),o.a.createElement("span",null,o.a.createElement(M,{index:2})),o.a.createElement("span",null,o.a.createElement(M,{index:3})),o.a.createElement("span",null,o.a.createElement(M,{index:4})))};var R=a.d.span.withConfig({displayName:"ApiSubmit__Button",componentId:"y9yvg5-0"})(["display:block;background-color:",";color:#fff;text-align:center;padding:12px 24px;border-radius:2px;cursor:pointer;text-decoration:none;"],(function(e){return e.theme.colors.accent})),I=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.loading,n=e.onClick;return o.a.createElement(R,{onClick:n},t?"sending":"generate")},r}(r.Component);I.defaultProps={};var A=I;var _=a.d.div.withConfig({displayName:"ApiResponse__Container",componentId:"usxrxs-0"})(["background:",";border-top:1px solid ",";overflow-x:hidden;overflow-y:auto;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border})),z=a.d.div.withConfig({displayName:"ApiResponse__Header",componentId:"usxrxs-1"})(["padding:12px 20px;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.borderLight})),N=a.d.pre.withConfig({displayName:"ApiResponse__ResponseJson",componentId:"usxrxs-2"})(["padding:12px 20px;font-size:13px;line-height:1.6em;overflow:hidden;width:100%;margin:0;"]),W=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.responseStatus,n=e.response,r="no response available";return n&&(r=JSON.stringify(n,null,"  ")),o.a.createElement(_,null,o.a.createElement(z,null,"Response ",t?o.a.createElement("strong",null,t):"n/a"),o.a.createElement(N,null,r))},r}(r.Component);W.defaultProps={};var B=W,F=n("S6qR");function H(){var e=D(["\n        & {\n            position: relative;\n            right: auto;\n            bottom: auto;\n            width: auto;\n            height: auto;\n            border-left-width: 0;\n            z-index: 0;\n        }\n    "]);return H=function(){return e},e}function V(){var e=D(["\n        & {\n            right: 0;\n            bottom: 0;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.45);\n            width: 60%;\n        }\n    "]);return V=function(){return e},e}function D(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,"a",(function(){return Y}));var Y=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleSettingsUpdate=function(e){n.setState({props:e})},n.handleDataUpdate=function(e){var t,r=n.props.dataProperty,o=n.state.props;n.setState({props:Object.assign({},o,(t={},t[r]=e.target.value,t))})},n.handleSubmit=function(){var e=n.props,t=e.apiPath,r=e.propsMapper,o=n.state.props;n.setState({loading:!0}),fetch(""+F.a.nivoApiUrl+t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r(o))}).then((function(e){return n.setState({loading:!1,responseStatus:e.status}),e.json()})).then((function(e){n.setState({response:e})})).catch((function(e){console.error(e)}))},n.state={props:t.defaultProps,loading:!1,responseStatus:null,response:null},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e,t=this.props,n=t.componentName,r=t.chartClass,a=t.apiPath,l=t.controlGroups,b=t.dataProperty,h=t.propsMapper,f=t.flavors,m=this.state,g=m.props,v=m.loading,y=m.responseStatus,L=m.response,x=f.map((function(e){return e.flavor}));return o.a.createElement(i.a,null,o.a.createElement(c.a,null,o.a.createElement(d.a,{chartClass:n+" HTTP API",tags:["POST "+a]}),f&&o.a.createElement(s.a,{flavors:f,current:"api"}),o.a.createElement(u.a,{description:(e=n,"\nThe `"+e+"`component is available in the nivo\nHTTP rendering API.\nThe API generates a SVG and return a path to this SVG\nwhich can then be easily embedded.\n\nThe api accepts almost the same properties as the regular component,\nin json, however it's not interactive and you cannot use code\nin properties (functions).\n\nPlease note that the demo API server is installed on heroku\nusing a free plan, so it might be unavailable from times to times.\n")}),o.a.createElement(O,{chartClass:r,data:g[b],body:h(g),isLoading:v,responseStatus:y,chartUrl:L?L.url:null}),o.a.createElement(J,null,o.a.createElement(X,null,o.a.createElement(A,{loading:v,onClick:this.handleSubmit})),o.a.createElement(B,{responseStatus:y,response:L})),o.a.createElement(p.a,{component:n,settings:g,flavors:x,currentFlavor:"api",groups:l,onChange:this.handleSettingsUpdate})))},r}(r.Component);Y.defaultProps={dataProperty:"data",propsMapper:function(e){return e}};var J=a.d.div.withConfig({displayName:"ApiClient__ControlPanel",componentId:"sc-50le0s-0"})(["position:fixed;right:0;bottom:0;--innerWidth:calc(100% - ","px);--partialWidth:calc(var(--innerWidth) * 0.6);width:var(--partialWidth);background:",";--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.45);z-index:10;overflow:hidden;display:grid;grid-template-rows:1fr 2fr;"," ",""],(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.colors.cardAltBackground}),(function(e){return e.theme.dimensions.headerHeight}),l.a.tablet(V(),(function(e){return e.theme.dimensions.headerHeight})),l.a.mobile(H())),X=a.d.div.withConfig({displayName:"ApiClient__SubmitWrapper",componentId:"sc-50le0s-1"})(["display:flex;align-items:center;justify-content:center;padding:12px 0;"])},yEOx:function(e,t,n){var r=n("0711"),o=1,a=4;e.exports=function(e){return r(e,o|a)}}}]);
//# sourceMappingURL=component---src-pages-treemap-api-js-eee971b61aa4e57be1a8.js.map
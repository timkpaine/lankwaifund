(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{67:function(e,t,i){e.exports=i(81)},72:function(e,t,i){},73:function(e,t,i){},81:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),a=i(9),o=i.n(a),s=(i(72),i(73),i(126)),l=i(63),u=i(123),c=i(23),h=i(29),p=i(19),d=i(17),m=i(24),f=i(25),w=i(26),b=i(4),y=i(122),g=i(115),v=i(82),x=i(37),A=i(83),E=i(3),k=i(36);k.MeshLine.prototype.setGeometry=function(e,t){if(this.widthCallback=t,this.positions=[],this.counters=[],e instanceof E.Geometry)for(var i=0;i<e.vertices.length;i++){var n=e.vertices[i];t=i/e.vertices.length;this.positions.push(n.x,n.y,n.z),this.positions.push(n.x,n.y,n.z),this.counters.push(t),this.counters.push(t)}if(E.BufferGeometry,e instanceof Float32Array||e instanceof Array)for(i=0;i<e.length;i+=3){t=i/e.length;this.positions.push(e[i],e[i+1],e[i+2]),this.positions.push(e[i],e[i+1],e[i+2]),this.counters.push(t),this.counters.push(t)}this.prepareGeometry()},k.MeshLine.prototype.updateGeometry=function(e,t){if(this.widthCallback=t,this.positions=[],this.counters=[],e instanceof E.Geometry)for(var i=0;i<e.vertices.length;i++){var n=e.vertices[i];t=i/e.vertices.length;this.positions.push(n.x,n.y,n.z),this.positions.push(n.x,n.y,n.z),this.counters.push(t),this.counters.push(t)}if(E.BufferGeometry,e instanceof Float32Array||e instanceof Array)for(i=0;i<e.length;i+=3){t=i/e.length;this.positions.push(e[i],e[i+1],e[i+2]),this.positions.push(e[i],e[i+1],e[i+2]),this.counters.push(t),this.counters.push(t)}this.process()},k.MeshLine.prototype.prepareGeometry=function(){var e,t,i=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];for(var n=0;n<i;n++)this.side.push(1),this.side.push(-1);for(n=0;n<i;n++)e=this.widthCallback?this.widthCallback(n/(i-1)):1,this.width.push(e),this.width.push(e);for(n=0;n<i;n++)this.uvs.push(n/(i-1),0),this.uvs.push(n/(i-1),1);t=this.compareV3(0,i-1)?this.copyV3(i-2):this.copyV3(0),this.previous.push(t[0],t[1],t[2]),this.previous.push(t[0],t[1],t[2]);for(n=0;n<i-1;n++)t=this.copyV3(n),this.previous.push(t[0],t[1],t[2]),this.previous.push(t[0],t[1],t[2]);for(n=1;n<i;n++)t=this.copyV3(n),this.next.push(t[0],t[1],t[2]),this.next.push(t[0],t[1],t[2]);t=this.compareV3(i-1,0)?this.copyV3(1):this.copyV3(i-1),this.next.push(t[0],t[1],t[2]),this.next.push(t[0],t[1],t[2]);for(n=0;n<i-1;n++){var r=2*n;this.indices_array.push(r,r+1,r+2),this.indices_array.push(r+2,r+1,r+3)}this.attributes,this.attributes={position:new E.BufferAttribute(new Float32Array(this.positions),3),previous:new E.BufferAttribute(new Float32Array(this.previous),3),next:new E.BufferAttribute(new Float32Array(this.next),3),side:new E.BufferAttribute(new Float32Array(this.side),1),width:new E.BufferAttribute(new Float32Array(this.width),1),uv:new E.BufferAttribute(new Float32Array(this.uvs),2),index:new E.BufferAttribute(new Uint16Array(this.indices_array),1),counters:new E.BufferAttribute(new Float32Array(this.counters),1)},this.geometry.addAttribute("position",this.attributes.position),this.geometry.addAttribute("previous",this.attributes.previous),this.geometry.addAttribute("next",this.attributes.next),this.geometry.addAttribute("side",this.attributes.side),this.geometry.addAttribute("width",this.attributes.width),this.geometry.addAttribute("uv",this.attributes.uv),this.geometry.addAttribute("counters",this.attributes.counters),this.geometry.setIndex(this.attributes.index)},k.MeshLine.prototype.process=function(){var e,t,i=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];for(var n=0;n<i;n++)this.side.push(1),this.side.push(-1);for(n=0;n<i;n++)e=this.widthCallback?this.widthCallback(n/(i-1)):1,this.width.push(e),this.width.push(e);for(n=0;n<i;n++)this.uvs.push(n/(i-1),0),this.uvs.push(n/(i-1),1);t=this.compareV3(0,i-1)?this.copyV3(i-2):this.copyV3(0),this.previous.push(t[0],t[1],t[2]),this.previous.push(t[0],t[1],t[2]);for(n=0;n<i-1;n++)t=this.copyV3(n),this.previous.push(t[0],t[1],t[2]),this.previous.push(t[0],t[1],t[2]);for(n=1;n<i;n++)t=this.copyV3(n),this.next.push(t[0],t[1],t[2]),this.next.push(t[0],t[1],t[2]);t=this.compareV3(i-1,0)?this.copyV3(1):this.copyV3(i-1),this.next.push(t[0],t[1],t[2]),this.next.push(t[0],t[1],t[2]);for(n=0;n<i-1;n++){var r=2*n;this.indices_array.push(r,r+1,r+2),this.indices_array.push(r+2,r+1,r+3)}this.attributes?(this.attributes.position.copyArray(new Float32Array(this.positions)),this.attributes.position.needsUpdate=!0,this.attributes.previous.copyArray(new Float32Array(this.previous)),this.attributes.previous.needsUpdate=!0,this.attributes.next.copyArray(new Float32Array(this.next)),this.attributes.next.needsUpdate=!0,this.attributes.side.copyArray(new Float32Array(this.side)),this.attributes.side.needsUpdate=!0,this.attributes.width.copyArray(new Float32Array(this.width)),this.attributes.width.needsUpdate=!0,this.attributes.uv.copyArray(new Float32Array(this.uvs)),this.attributes.uv.needsUpdate=!0,this.attributes.index.copyArray(new Uint16Array(this.indices_array)),this.attributes.index.needsUpdate=!0):this.attributes={position:new E.BufferAttribute(new Float32Array(this.positions),3),previous:new E.BufferAttribute(new Float32Array(this.previous),3),next:new E.BufferAttribute(new Float32Array(this.next),3),side:new E.BufferAttribute(new Float32Array(this.side),1),width:new E.BufferAttribute(new Float32Array(this.width),1),uv:new E.BufferAttribute(new Float32Array(this.uvs),2),index:new E.BufferAttribute(new Uint16Array(this.indices_array),1),counters:new E.BufferAttribute(new Float32Array(this.counters),1)},this.geometry.addAttribute("position",this.attributes.position),this.geometry.addAttribute("previous",this.attributes.previous),this.geometry.addAttribute("next",this.attributes.next),this.geometry.addAttribute("side",this.attributes.side),this.geometry.addAttribute("width",this.attributes.width),this.geometry.addAttribute("uv",this.attributes.uv),this.geometry.addAttribute("counters",this.attributes.counters),this.geometry.setIndex(this.attributes.index)};var B=i(114),C=i(111),F=i(125),V=i(121),j=i(61),O=i.n(j),W=i(116),L=i(118),M=i(127),S=i(120),I=i(124),D=i(119),N=[{label:"Home",pathname:"/"}],G=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).handleChange=function(t,i){e.setState({value:i})},e.mobileMenuOpen=function(){e.setState({menuDrawer:!0})},e.mobileMenuClose=function(){e.setState({menuDrawer:!1})},e.current=function(){e.props.currentPath;return 0},e.state={value:0,menuDrawer:!1},e}return Object(w.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props,t=e.classes,i=e.noTabs,n=e.location,a=this.state,o=a.menuDrawer,s=a.value;return r.a.createElement(C.a,{position:"absolute",color:"default",className:t.appBar},r.a.createElement(B.a,null,r.a.createElement(g.a,{container:!0,spacing:10,alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:12,className:t.flex},!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.productLogo},r.a.createElement(x.a,null,"LKF Capital")),r.a.createElement("div",{className:t.iconContainer},r.a.createElement(W.a,{onClick:this.mobileMenuOpen,className:t.iconButton,color:"inherit","aria-label":"Menu"},r.a.createElement(O.a,null))),r.a.createElement("div",{className:t.tabContainer},r.a.createElement(I.a,{anchor:"right",open:o,onClose:this.mobileMenuClose,onOpen:this.mobileMenuOpen},r.a.createElement("div",{className:t.drawerContents},r.a.createElement(C.a,{title:"Menu"}),r.a.createElement(L.a,null,N.map(function(e){return r.a.createElement(M.a,{component:e.external?D.a:c.b,href:e.external?e.pathname:null,to:e.external?null:{pathname:e.pathname,search:n.search},button:!0,key:e.label},r.a.createElement(S.a,{primary:e.label}))})))),r.a.createElement(F.a,{value:this.current()||s,classes:{indicator:t.indicator},textColor:"primary",onChange:this.handleChange},N.map(function(e,i){return r.a.createElement(V.a,{key:i,component:e.external?D.a:c.b,href:e.external?e.pathname:null,to:e.external?null:{pathname:e.pathname,search:n.search},classes:{root:t.tabItem},label:e.label})}))))))))}}]),t}(n.Component);G.defaultProps={currentPath:"/",noTabs:!1};var _=Object(h.g)(Object(A.a)(function(e){return{appBar:{position:"relative",boxShadow:"none",backgroundColor:e.palette.secondary.main,color:e.palette.primary.light,borderBottom:"1px solid rgba(200, 200, 200, 1)"},inline:{display:"inline"},flex:Object(b.a)({display:"flex"},e.breakpoints.down("sm"),{display:"flex",flexDirection:"row",alignItems:"center"}),link:Object(b.a)({textDecoration:"none",display:"flex",flexDirection:"row",alignItems:"center",color:"inherit",height:"100%"},e.breakpoints.up("md"),{paddingTop:"0.8em"}),productLogo:Object(b.a)({display:"inline-block",marginLeft:32,paddingLeft:24},e.breakpoints.up("md"),{paddingTop:"1.5em"}),tagline:{display:"inline-block",marginLeft:10},iconContainer:Object(b.a)({display:"none"},e.breakpoints.down("xs"),{display:"block",marginLeft:"auto"}),iconButton:{float:"right"},tabContainer:Object(b.a)({marginLeft:32},e.breakpoints.down("xs"),{display:"none"}),drawerContents:{backgroundColor:e.palette.secondary.main,color:e.palette.primary.light,height:"100%"},tabItem:{paddingTop:20,paddingBottom:20,minWidth:"auto",color:e.palette.primary.dark},indicator:{backgroundColor:"rgba(2, 204, 204, 1)"}}})(G)),T=Object(h.g)(Object(A.a)(function(e){return{footer:{position:"relative",bottom:0,width:"100%",boxShadow:"none",backgroundColor:e.palette.secondary.main,color:e.palette.primary.light},flex:{display:"flex",padding:5,margin:"auto",width:"95%",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},link:{textDecoration:"none",color:"inherit"},productLogo:Object(b.a)({display:"inline-block",borderLeft:"1px solid ".concat(e.palette.grey.A100),marginLeft:32,paddingLeft:24},e.breakpoints.up("md"),{paddingTop:"1.5em"})}})(function(e){var t=e.classes;return r.a.createElement("div",{position:"absolute",color:"default",className:t.footer},r.a.createElement(g.a,{item:!0,xs:12,className:t.flex},r.a.createElement(x.a,{variant:"body1",color:"inherit",noWrap:!0},r.a.createElement(c.b,{to:"/",className:t.link},r.a.createElement("span",null,"LKF Capital"))),r.a.createElement(x.a,{variant:"body1",color:"inherit",noWrap:!0},r.a.createElement("span",null,"\xa9 2020")),r.a.createElement(x.a,{variant:"body1",color:"inherit",noWrap:!0},r.a.createElement("a",{href:"https://lankwai.fund"},r.a.createElement("span",null,"lankwai.fund")))))})),U=window.crypto,P=function(){var e,t,i,n,r,a,o,s=0;return U&&"function"===typeof U.getRandomValues?(e=Math.pow(2,32)-1,t=new Uint32Array(1),i=function(){return U.getRandomValues(t),t[0]/e}):i=Math.random,function(){if(s)o=r*a;else{do{n=2*i()-1,r=2*i()-1,a=n*n+r*r}while(a>=1);a=Math.sqrt(-2*Math.log(a)/a),o=n*a}return s^=1,2*o}}(),z=function(e){function t(e){var i;return Object(p.a)(this,t),(i=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={},i}return Object(w.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){if(void 0===Object({NODE_ENV:"production",PUBLIC_URL:""}).JEST_WORKER_ID){var e=new E.WebGLRenderer({antialias:!0});e.setSize(window.innerWidth,window.innerHeight),e.setClearColor(1250067),this.mount.appendChild(e.domElement);window.addEventListener("resize",function(){e.setSize(window.innerWidth,window.innerHeight)});for(var t=[],i=[],n=[],r=[],a=[],o=[],s=0;s<window.innerWidth;s++)0===s?(t.push(new E.Vector3(-window.innerWidth/2,100,0)),i.push(new E.Vector3(-window.innerWidth/2,100,0)),n.push(new E.Vector3(-window.innerWidth/2,100,0)),r.push(new E.Vector3(-window.innerWidth/2,100,0)),a.push(new E.Vector3(-window.innerWidth/2,100,0)),o.push(new E.Vector3(-window.innerWidth/2,100,0))):(t.push(new E.Vector3(t.slice(-1)[0].x+1,t.slice(-1)[0].y+P(),0)),t.push(new E.Vector3(t.slice(-1)[0].x,t.slice(-1)[0].y,0)),i.push(new E.Vector3(i.slice(-1)[0].x+1,i.slice(-1)[0].y+P(),0)),i.push(new E.Vector3(i.slice(-1)[0].x,i.slice(-1)[0].y,0)),n.push(new E.Vector3(n.slice(-1)[0].x+1,n.slice(-1)[0].y+P(),0)),n.push(new E.Vector3(n.slice(-1)[0].x,n.slice(-1)[0].y,0)),r.push(new E.Vector3(r.slice(-1)[0].x+1,r.slice(-1)[0].y+P(),0)),r.push(new E.Vector3(r.slice(-1)[0].x,r.slice(-1)[0].y,0)),a.push(new E.Vector3(a.slice(-1)[0].x+1,a.slice(-1)[0].y+P(),0)),a.push(new E.Vector3(a.slice(-1)[0].x,a.slice(-1)[0].y,0)),o.push(new E.Vector3(o.slice(-1)[0].x+1,o.slice(-1)[0].y+P(),0)),o.push(new E.Vector3(o.slice(-1)[0].x,o.slice(-1)[0].y,0)));var l=new E.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,2e3);l.position.set(0,100,800),l.lookAt(0,0,0);var u=new E.Scene,c=new E.GridHelper(2e3,100);c.position.y=-100,c.position.z=-500,u.add(c),u.fog=new E.Fog(2566183,1,2e3);var h=-window.innerWidth/2,p=new E.ShaderMaterial({vertexShader:"\n      precision mediump float;\n      precision mediump int;\n     \n      attribute vec4 color;\n      uniform float index;\n\n      varying vec4 vColor;\n      varying float vXValue;\n      varying float vIndex;\n     \n      void main()    {\n        vColor = color;\n        vIndex = index;\n        vXValue = position.x;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n      }",fragmentShader:"\n      precision mediump float;\n      precision mediump int;\n     \n      varying vec4 vColor;\n      varying float vXValue;\n      varying float vIndex;\n     \n      void main()    {\n        vec4 color = vec4( vColor );\n        if(vXValue > vIndex){\n          gl_FragColor = vec4(255, 255, 255, 0);\n        } else {\n          gl_FragColor = color;\n        }\n      }\n      ",transparent:!0,uniforms:{index:{value:h}}}),d=new Float32Array(4*window.innerWidth*2).fill(255),m=new Float32Array(4*window.innerWidth*2).fill(255),f=new Float32Array(4*window.innerWidth*2).fill(255),w=new Float32Array(4*window.innerWidth*2).fill(255),b=new Float32Array(4*window.innerWidth*2).fill(255),y=new Float32Array(4*window.innerWidth*2).fill(255);for(s=0;s<d.length;s+=4)d[s+0]=0,m[s+0]=176/255,m[s+1]=172/255,m[s+2]=176/255,f[s+0]=226/255,f[s+1]=221/255,f[s+2]=223/255,w[s+0]=133/255,w[s+1]=235/255,w[s+2]=217/255,b[s+0]=61/255,b[s+1]=137/255,b[s+2]=141/255,y[s+0]=47/255,y[s+1]=64/255,y[s+2]=77/255;var g=(new E.BufferGeometry).setFromPoints(t);g.setAttribute("color",new E.BufferAttribute(d,4,!0));var v=(new E.BufferGeometry).setFromPoints(i);v.setAttribute("color",new E.BufferAttribute(m,4,!0));var x=(new E.BufferGeometry).setFromPoints(n);x.setAttribute("color",new E.BufferAttribute(f,4,!0));var A=(new E.BufferGeometry).setFromPoints(r);A.setAttribute("color",new E.BufferAttribute(w,4,!0));var k=(new E.BufferGeometry).setFromPoints(a);k.setAttribute("color",new E.BufferAttribute(b,4,!0));var B=(new E.BufferGeometry).setFromPoints(o);B.setAttribute("color",new E.BufferAttribute(y,4,!0));var C=new E.LineSegments(g,p),F=new E.LineSegments(v,p),V=new E.LineSegments(x,p),j=new E.LineSegments(A,p),O=new E.LineSegments(k,p),W=new E.LineSegments(B,p);u.add(C),u.add(F),u.add(V),u.add(j),u.add(O),u.add(W),e.render(u,l);!function t(){requestAnimationFrame(t),h>window.innerWidth/2||(C.material.uniforms.index.value=h,h+=32,e.render(u,l))}()}}},{key:"render",value:function(){var e=this,t=this.props.classes,i=this.state;i.productsDialog,i.contactDialog;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null),r.a.createElement(_,null),r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{container:!0,justify:"center"},r.a.createElement("div",{className:t.background,ref:function(t){return e.mount=t},style:{float:"left",position:"absolute"}}),r.a.createElement(g.a,{item:!0,xs:12,className:t.gridItem},r.a.createElement(v.a,{className:t.paperMain},r.a.createElement("div",{className:t.boxMain},r.a.createElement(x.a,{style:{fontWeight:"bold"},variant:"h1",gutterBottom:!0},"Lan Kwai Fund"),r.a.createElement(x.a,{className:t.mainSubtitle,variant:"h3",gutterBottom:!0},"Algorithmic Cryptocurrency Investments")))))),r.a.createElement(T,null))}}]),t}(n.Component),H=Object(h.g)(Object(A.a)(function(e){return{root:{flexGrow:1,overflow:"hidden"},grid:Object(b.a)({marginTop:10,padding:0},e.breakpoints.down("sm"),{width:"calc(100% - 20px)"}),gridItem:{zIndex:100},background:{backgroundColor:"rgba(19, 20, 19, 1)",backgroundSize:"cover",height:"100%",overflow:"hidden",minWidth:"100%"},paperMain:{minHeight:"60vh",width:"100%",textAlign:"left",color:e.palette.primary.light,display:"flex",background:"transparent"},paper:{minHeight:20,textAlign:"left",color:e.palette.primary.dark,backgroundColor:e.palette.secondary.main,padding:10,borderBottom:"1px solid rgba(2, 204, 204, 1)"},paperDark:{minHeight:20,textAlign:"left",color:e.palette.primary.dark,padding:10,backgroundColor:e.palette.secondary.main,borderBottom:"1px solid rgba(255, 82, 82, 1)"},title:{color:e.palette.primary.light},rangeLabel:{display:"flex",justifyContent:"space-between",paddingTop:e.spacing(2)},topBar:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:32},outlinedButtom:{textTransform:"uppercase",margin:e.spacing(1)},actionButtom:{textTransform:"uppercase",margin:e.spacing(1),width:152},blockCenter:{padding:e.spacing(2),textAlign:"center"},block:{padding:e.spacing(2)},box:{marginBottom:40,margin:"auto",maxWidth:1e3},boxFlex:{display:"flex",flexDirection:"row",margin:"auto",maxWidth:1e3},boxMain:{width:"100%",minHeight:300,margin:"auto",textAlign:"center",maxWidth:1e3},inlining:{display:"inline-block",marginRight:10},buttonBar:{display:"flex",justifyContent:"flex-end"},noBorder:{borderBottomStyle:"hidden"},loadingState:{opacity:.05},loadingMessage:{position:"absolute",top:"40%",left:"40%"}}})(z)),R=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),K=Object(h.g)(R),X=function(e){return r.a.createElement(c.a,null,r.a.createElement(K,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:H}),r.a.createElement(h.b,{component:function(){return r.a.createElement(h.a,{to:"/"})}}))))},J=Object(s.a)(Object(l.a)({palette:{secondary:{light:"rgba(50, 50, 50, 1)",main:"rgba(39, 40, 39, 1)",dark:"rgba(20, 20, 20, 1)"},primary:{light:"rgba(255, 255, 255, 1)",main:"rgba(220, 220, 220, 1)",dark:"rgba(150, 150, 150, 1)"}},typography:{fontFamily:['"Open Sans"',"sans-serif"].join(",")}})),q=function(){return r.a.createElement(u.a,{theme:J},r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[67,1,2]]]);
//# sourceMappingURL=main.3f096d70.chunk.js.map
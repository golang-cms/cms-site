(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{7264:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return t(7243)}])},7243:function(e,n,t){"use strict";t.r(n);var r=t(5666),o=t.n(r),a=t(5893),i=t(1120),c=t(1749),s=t(5834),l=t(2285),u=t(8463),m=t(9912),d=t(2318),p=t(9895),h=t(3950),f=t(7265),v=t(408),g=t(282),x=t(4612),j=t(3781),b=t(1210),y=t(3624),Z=t(5046),w=t(7294),k=t(2283),C=t(1761),N=t(5278);function O(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){P(e,n,t[n])}))}return e}function E(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _=(0,i.Z)((function(e){return{root:{height:"100%",minHeight:"120vh"},image:{backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},video:{objectFit:"cover",zIndex:-1},card:{position:"absolute",top:"12vh",color:"white",backgroundPosition:"center",background:"linear-gradient( to right, #f6e27a 0%, #f6f2c0 50%, #f6e27a 100%)",fontFamily:"mazzard",letterSpacing:"-1px",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",MozBackgroundClip:"text",MozTextFillColor:"transparent"},cardIcon:{color:"#f6e27a"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),T=function(){var e=_(),n=(0,w.useContext)(N.Z);return(0,a.jsxs)(c.Z,{container:!0,component:"main",className:e.root,children:[(0,a.jsx)(s.ZP,{}),(0,a.jsxs)(c.Z,{item:!0,xs:!1,sm:4,md:7,className:e.image,children:[(0,a.jsx)("video",{className:e.video,src:"/static/video/montreal.mp4",width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,children:"Your browser does not support the video tag."}),(0,a.jsx)(l.Z,{direction:"right",mountOnEnter:!0,unmountOnExit:!0,timeout:2e3,in:!0,children:(0,a.jsx)(u.Z,{className:e.card,children:(0,a.jsxs)(m.Z,{children:[(0,a.jsxs)(d.Z,{color:"inherit",variant:"h5",component:"h2",children:[(0,a.jsx)(b.Z,{className:e.cardIcon})," ",(0,a.jsx)("span",{children:n.phone})]}),(0,a.jsxs)(d.Z,{variant:"h5",component:"h2",children:[(0,a.jsx)(y.Z,{className:e.cardIcon})," ",(0,a.jsx)("span",{children:n.address})]}),(0,a.jsxs)(d.Z,{variant:"h5",component:"h2",children:[(0,a.jsx)(j.Z,{className:e.cardIcon})," ",(0,a.jsx)("span",{children:n.email})]})]})})})]}),(0,a.jsx)(W,{})]})},W=function(){var e,n=_(),t=E(w.useState(!1),2),r=t[0],i=t[1],s=(0,k.cI)(),l=s.register,u=s.handleSubmit,m=s.reset,j=(e=o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,fetch("".concat("https://cms-api-content-api-cms-zt1983811.cloud.okteto.net","/v1/emails"),{body:JSON.stringify({subject:"From Contact US",message:"from name: ".concat(n.name," \n \n                  from email: ").concat(n.email," \n\n                  from phone: ").concat(n.phone," \n\n                  Content: ").concat(n.content,"\n            "),fromEmail:n.email,toEmail:"support@smartcodee.com"}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,console.log(r),i(!0),m();case 10:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){O(a,r,o,i,c,"next",e)}function c(e){O(a,r,o,i,c,"throw",e)}i(void 0)}))});return(0,a.jsxs)(c.Z,{item:!0,xs:12,sm:8,md:5,component:p.Z,elevation:6,square:!0,children:[(0,a.jsx)(h.Z,{open:r,autoHideDuration:6e3,onClose:function(){i(!1)},children:(0,a.jsx)(Z.Z,{elevation:6,variant:"filled",severity:"success",children:"We have received your message, will contact you soon!"})}),(0,a.jsxs)("div",{className:n.paper,children:[(0,a.jsx)(f.Z,{className:n.avatar,children:(0,a.jsx)(x.Z,{})}),(0,a.jsx)(d.Z,{component:"h1",variant:"h5",children:"CONTACT US"}),(0,a.jsxs)("form",{className:n.form,onSubmit:u(j),children:[(0,a.jsx)(v.Z,S({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",autoComplete:"name",autoFocus:!0},l("name"))),(0,a.jsx)(v.Z,S({variant:"outlined",margin:"normal",required:!0,id:"email",label:"Email Address",type:"email",autoComplete:"email",fullWidth:!0},l("email"))),(0,a.jsx)(v.Z,S({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"phone",type:"phone",label:"Phone",autoComplete:"phone"},l("phone"))),(0,a.jsx)(v.Z,S({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"content",label:"What you want to ask",autoComplete:"content",multiline:!0,minRows:10},l("content"))),(0,a.jsx)(g.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,children:"Send"})]})]})]})};T.getLayout=function(e,n){return(0,a.jsxs)(C.Z,{props:n,children:[" ",e," "]})},n.default=T}},function(e){e.O(0,[774,702,765,761,888,179],(function(){return n=7264,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
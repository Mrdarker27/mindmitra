"use strict";(self.webpackChunkmindmitra=self.webpackChunkmindmitra||[]).push([[452],{8198:function(n,e,i){i(2791);e.Z=i.p+"static/media/logo.bebb1b2ac5d22f6eee17422db7ca640f.svg"},4422:function(n,e,i){var t,a,d,o,r,l=i(168),p=(i(2791),i(6444)),x=i(9788),s=i(184);e.Z=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(g,{children:(0,s.jsxs)(f,{children:[(0,s.jsx)("img",{src:i(5440),alt:"loginimage"}),(0,s.jsxs)(h,{children:[(0,s.jsx)(c,{children:"Welcome to MindMitra Expert"}),(0,s.jsx)(m,{children:"As an Expert in MindMitra, you have the power to make a difference in the lives of many."})]})]})})})};var h=p.ZP.div(t||(t=(0,l.Z)(["\n  background: ",";\n\n  -webkit-backdrop-filter: blur(28.5px);\n  backdrop-filter: blur(28.5px);\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 26px;\n  padding: 30px 20px;\n  border-radius: 15px;\n  width: 90%;\n  border: 2px solid ",";\n  @media all and (max-width: 1440px) {\n    width: 87%;\n    left: 48%;\n    padding: 24px 8px;\n    bottom: 17px;\n  }\n  @media all and (max-width: 1280px) {\n    bottom: 10px;\n  }\n"])),x.k.background_blur,x.k.background_blur),c=p.ZP.h1(a||(a=(0,l.Z)(["\n  color: ",';\n  font-family: "DM_sans_medium";\n  font-weight: 300;\n  margin-top: 10px;\n  text-align: left;\n  font-size: 27px;\n  padding-left: 15px;\n  margin-bottom: 13px;\n  font-size: 26px;\n\n  @media all and (max-width: 1180px) {\n    font-size: 25px;\n  }\n  @media all and (max-width: 1080px) {\n    font-size: 20px;\n  }\n'])),x.k.white),m=p.ZP.p(d||(d=(0,l.Z)(["\n  color: ",';\n  margin: 0 auto;\n  width: 100%;\n  padding-left: 15px;\n  opacity: 0.7;\n  font-size: 16px;\n  font-family: "DM_sans";\n  @media all and (max-width: 1080px) {\n    font-size: 14px;\n  }\n'])),x.k.white),g=p.ZP.div(o||(o=(0,l.Z)(["\n  width: 50%;\n\n  @media all and (max-width: 1920px) {\n    width: 47%;\n  }\n  @media all and (max-width: 1440px) {\n    width: 53%;\n  }\n  @media all and (max-width: 1280px) {\n    width: 45%;\n  }\n"]))),f=p.ZP.div(r||(r=(0,l.Z)(["\n  align-items: center;\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 24px;\n  position: relative;\n"])))},6452:function(n,e,i){i.r(e);var t,a,d,o,r,l,p,x,s,h,c,m,g,f,u,b=i(168),w=i(9439),Z=i(2791),k=i(6444),j=i(7689),v=i(1087),y=i(4422),P=i(3866),_=i(9788),z=i(184);e.default=function(){var n=(0,Z.useState)(""),e=(0,w.Z)(n,2),t=e[0],a=e[1],d=(0,Z.useState)(""),o=(0,w.Z)(d,2),r=o[0],l=o[1],p=(0,j.s0)(),x=(0,Z.useContext)(P._).dispatch,s=function(){""==t?l("phone number field is required"):t.length<10||t.length>10?l("Invalid phone number. Phone number must be at least 10 characters"):10===t.length&&(p("/auth/otp-page"),x({type:"UPDATE_USER_DATA",user_data:{about_info:{phone:t}}}))};return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(D,{children:(0,z.jsxs)(M,{children:[(0,z.jsx)(y.Z,{}),(0,z.jsx)(E,{children:(0,z.jsxs)(A,{children:[(0,z.jsx)(L,{children:(0,z.jsx)("img",{src:i(8198).Z,alt:"logo"})}),(0,z.jsxs)(S,{children:[(0,z.jsx)(U,{children:"Let\u2019s Get Started!"}),(0,z.jsx)(F,{children:"Join in assisting someone to reach a brighter future."})]}),(0,z.jsxs)(T,{children:[(0,z.jsx)(R,{children:"+91"}),(0,z.jsx)(C,{type:"tel",id:"Mobile",onKeyPress:function(n){var e=n.which||n.keyCode;(e<48||e>57)&&n.preventDefault(),13!==n.keyCode&&13!==n.which||s()},onChange:function(n){return a(n.target.value)},minLength:10,maxLength:10,className:"active",placeholder:"Enter  mobile number"})]}),(0,z.jsx)(I,{children:r}),(0,z.jsx)(W,{onClick:function(){s()},children:"Register"}),(0,z.jsxs)(G,{children:["Login as an"," ",(0,z.jsx)(q,{to:"/auth/login-page",children:"Expert!"})," "]})]})})]})})})};var M=k.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),C=k.ZP.input(a||(a=(0,b.Z)(["\n  border: none;\n  background-color: ",";\n  padding-left: 10px;\n  height: 40px;\n  font-size: 20px;\n  width: 100%;\n  cursor: pointer;\n\n  :focus {\n    outline: none;\n  }\n\n  ::placeholder {\n    font-size: 16px;\n    font-weight: 400;\n  }\n"])),_.k.light_200),D=k.ZP.div(d||(d=(0,b.Z)(["\n  max-height: calc(100vh - 60px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 200px;\n  @media all and (max-width: 1440px) {\n    padding: 150px;\n  }\n  @media all and (max-width: 1340px) {\n    padding: 200px 150px;\n  }\n  @media all and (max-width: 1280px) {\n    padding: 200px 100px;\n  }\n  @media all and (max-width: 980px) {\n    padding: 200px 70px;\n  }\n  @media all and (max-width: 800px) {\n    padding: 200px 40px;\n  }\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]))),E=k.ZP.div(o||(o=(0,b.Z)(["\n  width: 50%;\n  display: flex;\n  justify-content: flex-end;\n"]))),A=k.ZP.div(r||(r=(0,b.Z)(["\n  width: 450px;\n  @media all and (max-width: 1920px) {\n    margin-right: 225px;\n  }\n  @media all and (max-width: 1440px) {\n    margin-right: 0;\n  }\n"]))),L=k.ZP.div(l||(l=(0,b.Z)(["\n  width: 55px;\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),S=k.ZP.div(p||(p=(0,b.Z)([""]))),U=k.ZP.h2(x||(x=(0,b.Z)(["\n  font-size: 24px;\n  margin: 30px 0 7px 0;\n  color: ",";\n  @media all and (max-width: 980px) {\n    font-size: 22px;\n  }\n"])),_.k.text_title),F=k.ZP.p(s||(s=(0,b.Z)(["\n  color: ",';\n  font-size: 18px;\n  line-height: 20px;\n  font-family: "DM_sans";\n  font-weight: 400;\n  @media all and (max-width: 980px) {\n    font-size: 16px;\n  }\n'])),_.k.text_para),R=k.ZP.span(h||(h=(0,b.Z)(["\n  display: inline-block;\n  border-right: 1px solid ",";\n  padding-right: 10px;\n  margin-left: 5px;\n"])),_.k.Wireframe_300),T=k.ZP.div(c||(c=(0,b.Z)(["\n  background-color: ",";\n  display: flex;\n  border-radius: 8px;\n  font-size: 20px;\n  width: 100%;\n  font-weight: 300;\n  padding: 10px 18px;\n  align-items: center;\n  margin-top: 50px;\n  margin-bottom: 5px;\n"])),_.k.light_200),W=k.ZP.button(m||(m=(0,b.Z)(["\n  background-color: ",";\n  color: ",";\n  text-align: center;\n  padding: 14px 24px;\n  text-decoration: none;\n  text-align: center;\n  border-radius: 8px;\n  margin-top: 20px;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  width: 100%;\n"])),_.k.chips_blue_on_container_2,_.k.white),q=(0,k.ZP)(v.rU)(g||(g=(0,b.Z)(["\n  color: ",";\n  text-decoration: none;\n"])),_.k.secondary),G=k.ZP.h5(f||(f=(0,b.Z)(["\n  font-size: 18px;\n  font-weight: 300;\n  cursor: pointer;\n  text-align: center;\n  color: ",";\n  margin-top: 6%;\n"])),_.k.text_para),I=k.ZP.span(u||(u=(0,b.Z)(["\n  position: absolute;\n  font-size: 12px;\n  color: ",";\n"])),_.k.red_error)},5440:function(n,e,i){n.exports=i.p+"static/media/loginpageimage.217381ef2102cfa5ad2c.png"}}]);
//# sourceMappingURL=452.215bceb0.chunk.js.map
"use strict";(self.webpackChunkmindmitra=self.webpackChunkmindmitra||[]).push([[31],{8198:function(n,e,t){t(2791);e.Z=t.p+"static/media/logo.bebb1b2ac5d22f6eee17422db7ca640f.svg"},9031:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,o,i=t(168),a=t(8683),c=t(9439),l=t(2791),u=function(n){return"object"===typeof n&&null!==n},s=function(n){var e=n.value,t=void 0===e?"":e,r=n.numInputs,o=void 0===r?4:r,i=n.onChange,a=n.renderInput,c=n.shouldAutoFocus,s=void 0!==c&&c,d=n.inputType,p=void 0===d?"text":d,f=n.renderSeparator,h=n.placeholder,v=n.containerStyle,x=n.inputStyle,g=l.useState(0),m=g[0],b=g[1],y=l.useRef([]),Z=function(){return t?t.toString().split(""):[]},k="number"===p||"tel"===p;l.useEffect((function(){y.current=y.current.slice(0,o)}),[o]),l.useEffect((function(){var n;s&&(null===(n=y.current[0])||void 0===n||n.focus())}),[s]);var j=function(){if("string"===typeof h){if(h.length===o)return h;h.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},w=function(n){return(k?!isNaN(Number(n)):"string"===typeof n)&&1===n.trim().length},_=function(n){var e=n.target.value;w(e)&&(N(e),C(m+1))},P=function(n){var e=n.nativeEvent;w(n.target.value)||(null===e.data&&"deleteContentBackward"===e.inputType&&(n.preventDefault(),N(""),C(m-1)),n.target.value="")},D=function(){b(m-1)},S=function(n){var e=Z();[n.code,n.key].includes("Backspace")?(n.preventDefault(),N(""),C(m-1)):"Delete"===n.code?(n.preventDefault(),N("")):"ArrowLeft"===n.code?(n.preventDefault(),C(m-1)):"ArrowRight"===n.code||n.key===e[m]?(n.preventDefault(),C(m+1)):"Spacebar"!==n.code&&"Space"!==n.code&&"ArrowUp"!==n.code&&"ArrowDown"!==n.code||n.preventDefault()},C=function(n){var e,t,r=Math.max(Math.min(o-1,n),0);y.current[r]&&(null===(e=y.current[r])||void 0===e||e.focus(),null===(t=y.current[r])||void 0===t||t.select(),b(r))},N=function(n){var e=Z();e[m]=n[0],O(e)},O=function(n){var e=n.join("");i(e)},A=function(n){var e;n.preventDefault();var t=Z(),r=m,i=n.clipboardData.getData("text/plain").slice(0,o-m).split("");if(!k||!i.some((function(n){return isNaN(Number(n))}))){for(var a=0;a<o;++a)a>=m&&i.length>0&&(t[a]=null!==(e=i.shift())&&void 0!==e?e:"",r++);C(r),O(t)}};return l.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},u(v)&&v),className:"string"===typeof v?v:void 0},Array.from({length:o},(function(n,e){return e})).map((function(n){var e,t,r;return l.createElement(l.Fragment,{key:n},a({value:null!==(e=Z()[n])&&void 0!==e?e:"",placeholder:null!==(r=null===(t=j())||void 0===t?void 0:t[n])&&void 0!==r?r:void 0,ref:function(e){return y.current[n]=e},onChange:_,onFocus:function(e){return function(n){return function(e){b(e),n.target.select()}}(e)(n)},onBlur:D,onKeyDown:S,onPaste:A,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(n+1),style:Object.assign({width:"1em",textAlign:"center"},u(x)&&x),className:"string"===typeof x?x:void 0,type:p,inputMode:k?"numeric":"text",onInput:P},n),n<o-1&&("function"===typeof f?f(n):f))})))},d=t(7689),p=t(1087),f=t(6444),h=t(9788),v=t(184);var x,g,m,b,y,Z,k,j,w,_,P,D,S,C=function(n){var e=n.onClick;return(0,v.jsx)(N,{children:(0,v.jsx)(O,{onClick:e,children:"Verify"})})},N=f.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n  width: 100%;\n"]))),O=f.ZP.button(o||(o=(0,i.Z)(["\n  background-color: ",";\n  color: ",';\n  font-size: 14px;\n  display: block;\n  border-radius: 7px;\n  padding: 15px 37%;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  font-family: "DM_sans_bold";\n'])),h.k.chips_blue_on_container,h.k.white);var A=function(){var n=(0,d.s0)(),e=(0,l.useState)(""),r=(0,c.Z)(e,2),o=r[0],i=r[1],u=(0,l.useState)(""),p=(0,c.Z)(u,2),f=(p[0],p[1],(0,l.useState)(!1)),h=(0,c.Z)(f,2),x=h[0],g=h[1],m=(0,d.UO)().email,b=function(e){e.preventDefault(),function(){var n=!0;return o&&4===o.length?n=!0:(g(!0),n=!1),n}()&&(console.log("Submitted otp:","otp",o),n("/auth/set-new-password"))};return console.log(o),(0,v.jsx)(E,{children:(0,v.jsx)(I,{children:(0,v.jsx)(T,{children:(0,v.jsxs)(z,{children:[(0,v.jsx)(B,{children:(0,v.jsx)(F,{src:t(8198).Z,alt:"logo"})}),(0,v.jsxs)(M,{children:[(0,v.jsx)(L,{children:"Verify OTP"}),(0,v.jsxs)(R,{children:["Enter OTP that has sent to your Email ",(0,v.jsx)("br",{}),(0,v.jsx)("div",{children:m})]})]}),(0,v.jsx)(U,{children:(0,v.jsx)(s,{value:o,onChange:function(n){return i(n)},numInputs:4,placeholder:"",inputStyle:"OtpInput",renderInput:function(n){return(0,v.jsx)("input",(0,a.Z)({},n))},inputType:"tel"})}),x&&(o?(0,v.jsx)(V,{children:"enter a valid otp"}):(0,v.jsx)(V,{children:"enter your otp"})),(0,v.jsx)(C,{onClick:function(n){b(n)}}),(0,v.jsx)(q,{to:"/",children:(0,v.jsx)(K,{children:"Resend OTP"})})]})})})})},E=f.ZP.div(x||(x=(0,i.Z)(["\n  background: ",";\n  height: 100vh;\n  display: flex;\n  align-items: center;\n"])),h.k.light_200),I=f.ZP.div(g||(g=(0,i.Z)(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),T=f.ZP.div(m||(m=(0,i.Z)(["\n  background-color: ",";\n  display: inline-block;\n  margin: 0 auto;\n  border-radius: 15px;\n"])),h.k.white),z=f.ZP.div(b||(b=(0,i.Z)(["\n  padding: 30px 25px;\n  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.04);\n"]))),M=f.ZP.div(y||(y=(0,i.Z)([""]))),B=f.ZP.div(Z||(Z=(0,i.Z)(["\n  width: 15%;\n  margin-bottom: 30px;\n"]))),F=f.ZP.img(k||(k=(0,i.Z)([""]))),L=f.ZP.h3(j||(j=(0,i.Z)(["\n  font-size: 24px;\n  color: ",';\n  margin-bottom: 20px;\n  font-family: "DM_sans_bold";\n'])),h.k.text_title),R=f.ZP.p(w||(w=(0,i.Z)(["\n  font-size: 16px;\n  color: ",";\n  margin-bottom: 30px;\n  div {\n    color: ",";\n  }\n"])),h.k.text_para,h.k.chips_blue_on_container_2),U=f.ZP.div(_||(_=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  div {\n    justify-content: space-between;\n    /* width: 95%; */\n    gap: 10px;\n  }\n\n  input {\n    width: 5.5em !important;\n    height: 3.3em !important;\n    font-size: 16px;\n    border-radius: 8px;\n    border: none;\n    background-color: ",";\n    :focus {\n      border: 3px solid ",";\n      background-color: ",";\n    }\n  }\n"])),h.k.light_200,h.k.chips_blue_on_container_2,h.k.white),V=f.ZP.p(P||(P=(0,i.Z)(["\n  font-size: 14px;\n  color: "," !important;\n  margin-left: 10px;\n"])),h.k.red_error),q=(0,f.ZP)(p.rU)(D||(D=(0,i.Z)(["\n  display: flex;\n  text-decoration: none;\n  align-items: center;\n  width: fit-content;\n  margin: 0 auto;\n  justify-content: space-between;\n"]))),K=f.ZP.h6(S||(S=(0,i.Z)(["\n  text-decoration: none;\n  color: ",";\n  font-size: 14px;\n"])),h.k.chips_blue_on_container)}}]);
//# sourceMappingURL=31.c7039e8f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(74)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),c=n.n(i),l=n(26),o=n(13),u=n(38),s=n(22),p=n(23),d=Object(o.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIMPLE_ACTION":return{result:t.payload};case"SET_VALUE":return Object(p.a)({},e,Object(s.a)({},t.fieldId,t.value));default:return e}}}),f=(n(49),n(2)),h=n(3),b=(n(50),n(51),n(7)),v=n(8),g=n(11),x=n(9),m=n(10),y=n(39),j=n.n(y);function O(){var e=Object(f.a)(["\nbackground-image: linear-gradient(to right bottom, #31bcb8, #46ceb9, #63dfb6, #85f0b0, #aaffa9);\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\n"]);return O=function(){return e},e}var E=h.a.span(O()),w=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.typed=new j.a(this.el,{strings:['<a class="no-underline" href="https://github.com/AlphaDel" target="_blank">Design by Wuttinan</a>','<a class="no-underline" href="https://github.com/AlphaDel" target="_blank">@AlphaDel</a>'],typeSpeed:40,backSpeed:40,backDelay:15e3,smartBackspace:!0,showCursor:!1,loop:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement(E,{style:{textAlign:"right",fontSize:"12px"},ref:function(t){e.el=t}})}}]),t}(r.a.Component);function k(){var e=Object(f.a)(["\n  margin: 10px 0 10px 0;\n  min-width: 490px;\n  height: 530px;\n  resize: none;\n  font-size: 18px;\n"]);return k=function(){return e},e}var C=h.a.textarea(k()),S=function(e){return r.a.createElement(C,{readOnly:!0,value:e.app.result})},z=n(5);function A(){var e=Object(f.a)(["\n  flex-grow: 1;\n  width: 350px;\n  height: 25px;\n"]);return A=function(){return e},e}function D(){var e=Object(f.a)(["\n  padding-right: 10px;\n  font-size: 18px;\n  color: white;\n  text-align: left;\n  width: 150px;\n"]);return D=function(){return e},e}function T(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  // justify-content: flex-start;\n  margin: 10px 0 10px 0;\n"]);return T=function(){return e},e}var I=h.a.div(T()),V=h.a.label(D()),L=h.a.input(A()),_=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(x.a)(t).call(this,e))).state={value:""},n.handleChange=n.handleChange.bind(Object(z.a)(n)),n}return Object(m.a)(t,e),Object(v.a)(t,[{key:"handleChange",value:function(e){e.target.validity.valid&&(this.setState({value:e.target.value}),this.props.setValue(this.props.id,e.target.value))}},{key:"render",value:function(){var e=this.props,t=e.label,n=e.type;return r.a.createElement(I,null,r.a.createElement(V,null,t," : "),r.a.createElement(L,{type:n,value:this.state.value,onChange:this.handleChange}))}}]),t}(r.a.Component);function B(){var e=Object(f.a)(["\n  flex-grow: 1;\n  height: 250px;\n  resize: none;\n  font-size: 15px;\n"]);return B=function(){return e},e}function F(){var e=Object(f.a)(["\n  padding-right: 10px;\n  font-size: 18px;\n  color: white;\n  text-align: left;\n  width: 150px;\n"]);return F=function(){return e},e}function N(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  // justify-content: flex-start;\n  margin: 10px 0 10px 0;\n"]);return N=function(){return e},e}var P=h.a.div(N()),U=h.a.label(F()),W=h.a.textarea(B()),J=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(x.a)(t).call(this,e))).state={value:""},n.handleChange=n.handleChange.bind(Object(z.a)(n)),n}return Object(m.a)(t,e),Object(v.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value}),this.props.setValue(this.props.id,e.target.value)}},{key:"render",value:function(){var e=this.props.label;return r.a.createElement(P,null,r.a.createElement(U,null,e," : "),r.a.createElement(W,{value:this.state.value,onChange:this.handleChange}))}}]),t}(r.a.Component);function M(){var e=Object(f.a)([""]);return M=function(){return e},e}var K=h.a.div(M()),$=function(e){return r.a.createElement(K,null,r.a.createElement(_,Object.assign({id:"code",label:"Code",type:"text"},e)),r.a.createElement(_,Object.assign({id:"interationCount",label:"Interation Count",type:"number"},e)),r.a.createElement(_,Object.assign({id:"keySize",label:"Key Size",type:"number"},e)),r.a.createElement(_,Object.assign({id:"passphrase",label:"Passphrase",type:"text"},e)),r.a.createElement(_,Object.assign({id:"iv",label:"IV",type:"text"},e)),r.a.createElement(_,Object.assign({id:"salt",label:"SALT",type:"text"},e)),r.a.createElement(J,Object.assign({id:"data",label:"Plain Text / Encrypted Text",type:"text"},e)))};function q(){var e=Object(f.a)(["\n  font-size: 15px;\n"]);return q=function(){return e},e}function G(){var e=Object(f.a)(["\n  height: 50px;\n  width: 100%;\n"]);return G=function(){return e},e}function H(){var e=Object(f.a)(["\n  width: 100%;\n  margin: 10px 0 10px 0;\n"]);return H=function(){return e},e}var Q=h.a.div(H()),R=h.a.button(G()),X=h.a.span(q()),Y=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(x.a)(t).call(this,e))).state={value:""},n.handleChange=n.handleChange.bind(Object(z.a)(n)),n}return Object(m.a)(t,e),Object(v.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value}),this.props.setValue(this.props.id,e.target.value)}},{key:"render",value:function(){var e=this.props,t=e.styles,n=(e.method,e.handleClick);return r.a.createElement(Q,{style:t},r.a.createElement(R,{className:"boxy ".concat(this.props.borderColor),onClick:function(){return n()}},r.a.createElement(X,null,this.props.label)))}}]),t}(r.a.Component),Z=function(e,t){return{type:"SET_VALUE",fieldId:e,value:t}},ee=n(17),te=n.n(ee),ne=n(33),ae=n(27),re=n.n(ae),ie=n(25),ce=n.n(ie),le=n(6),oe=n.n(le),ue=n(18),se=n.n(ue),pe=n(24),de=n.n(pe),fe=n(77);function he(){var e=Object(f.a)(["\n  font-size: 18px;\n  color: white;\n"]);return he=function(){return e},e}function be(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;  \n"]);return be=function(){return e},e}function ve(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  flex: 1;\n  margin-left: 10px;\n  margin-right: 10px;\n"]);return ve=function(){return e},e}function ge(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n"]);return ge=function(){return e},e}function xe(){var e=Object(f.a)(["\n  border-radius: 10px;\n  padding: 10px;\n  background: linear-gradient(135deg, #313b53 0%,#213037 100%);\n  -webkit-box-shadow: 0px 0px 54px 16px rgba(0,0,0,0.75);\n  -moz-box-shadow: 0px 0px 54px 16px rgba(0,0,0,0.75);\n  box-shadow: 0px 0px 54px 16px rgba(0,0,0,0.75);\n"]);return xe=function(){return e},e}var me=h.a.div(xe()),ye=h.a.div(ge()),je=h.a.div(ve()),Oe=h.a.div(be()),Ee=h.a.p(he()),we=Object(l.b)(function(e){return Object(p.a)({},e)},function(e){return{setValue:function(t,n){return e(Z(t,n))},encryptFn:function(){e(Z("result","encrypting...")),setTimeout(function(){e(function(){var e=Object(ne.a)(te.a.mark(function e(t,n){var a,r,i,c,l,o,u,s,p,d,f,h,b,v,g,x,m,y,j;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=n(),r=a.app,i=r.data,c=void 0===i?"":i,l=r.code,o=void 0===l?"":l,u=r.interationCount,s=void 0===u?0:u,p=r.keySize,d=void 0===p?0:p,f=r.passphrase,h=void 0===f?"":f,b=r.iv,v=void 0===b?"":b,g=r.salt,x=void 0===g?"":g;try{m=se.a.parse(x),y=de()(fe.a(h,o),m,{keySize:d,iterations:s}),j=ce.a.encrypt(c,y,{iv:se.a.parse(v)}),t(Z("result",oe.a.stringify(j.ciphertext)))}catch(O){t(Z("result","Error encryption: ".concat(O)))}case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}())},1e3)},decryptFn:function(){e(Z("result","decrypting...")),setTimeout(function(){e(function(){var e=Object(ne.a)(te.a.mark(function e(t,n){var a,r,i,c,l,o,u,s,p,d,f,h,b,v,g,x,m,y,j,O;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=n(),r=a.app,i=r.data,c=void 0===i?"":i,l=r.code,o=void 0===l?"":l,u=r.interationCount,s=void 0===u?0:u,p=r.keySize,d=void 0===p?0:p,f=r.passphrase,h=void 0===f?"":f,b=r.iv,v=void 0===b?"":b,g=r.salt,x=void 0===g?"":g;try{m=se.a.parse(x),y=de()(fe.a(h,o),m,{keySize:d,iterations:s}),j=re.a.lib.CipherParams.create({ciphertext:re.a.enc.Base64.parse(c)}),O=ce.a.decrypt(j,y,{iv:se.a.parse(v)}),t(Z("result",re.a.enc.Utf8.stringify(O)))}catch(E){t(Z("result","Error decryption: ".concat(E)))}case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}())},1e3)}}})(function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-Detail"},r.a.createElement(me,null,r.a.createElement(ye,null,r.a.createElement(je,null,r.a.createElement(Ee,null,"Advanced Encryption Standard(AES)"))),r.a.createElement(ye,null,r.a.createElement(je,null,r.a.createElement($,Object.assign({style:{color:"red"}},e)),r.a.createElement(Oe,null,r.a.createElement(Y,Object.assign({label:"Encrypt",borderColor:"green",handleClick:function(){return e.encryptFn()},method:"encrypt"},e)),r.a.createElement(Y,Object.assign({label:"Decrypt",borderColor:"red",styles:{marginLeft:"10px"},handleClick:function(){return e.decryptFn()},method:"decrypt"},e)))),r.a.createElement(je,null,r.a.createElement(S,e),r.a.createElement(w,null))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.d)(d,e,Object(o.a)(u.a));return window.store=t,t}()},r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.c1bd0894.chunk.js.map
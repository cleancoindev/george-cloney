(this["webpackJsonptaquito-react"]=this["webpackJsonptaquito-react"]||[]).push([[0],{111:function(e,t){},169:function(e,t,a){e.exports=a(358)},174:function(e,t,a){},181:function(e,t){},183:function(e,t){},246:function(e,t){},248:function(e,t){},277:function(e,t){},278:function(e,t){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(174),a(6)),i=a.n(l),s=a(14),u=a(8),d=a(29),m=a(2),b=a(160),p=function(e){var t=e.code,a=e.storage,n=e.currentStep,c=t.length>0?"// Contract Code \n"+JSON.stringify(t,null,2):"// Contract Code",o=a?"// Initial Storage Code \n"+JSON.stringify(a,null,2):"// Initial Storage Code ";return 2!==n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"contract-code-editor"},r.a.createElement(b.split,{width:"700px",height:"300px",mode:"json",theme:"monokai",tabSize:2,splits:2,style:{borderRadius:"5px",margin:"0 auto"},orientation:"beside",value:[c,o],name:"contract-code-editor",editorProps:{$blockScrolling:!0}})))},g=a(68),h=a(69),f=(a(347),function(e){var t=e.handleNetworkChange,a=e.network,n=e.updateContractAddress,c=e.handleContractSubmit,o=e.loading,l=e.currentStep,i=e.contractAddress,s=e.validationError,u=Object(h.a)(),d=u.register,m=u.handleSubmit,b={value:a,label:a.charAt(0).toUpperCase()+a.slice(1)};return 1!==l?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Fetch Contract Code"),r.a.createElement("label",{id:"react-select-label"},"Choose Network"),r.a.createElement(g.a,{className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"sandbox",label:"Sandbox"}],value:b,onChange:function(e){t(e.value)}}),r.a.createElement("div",{id:"content"},r.a.createElement("label",{id:"react-select-lookup-label"},"Enter Contract Address"),r.a.createElement("div",{id:"contract-code-form"},r.a.createElement("form",{onSubmit:m(c)},r.a.createElement("input",{className:s&&"validation-error",onChange:n,placeholder:"Contract Address",id:"address-input",name:"address",ref:d}),""!==s&&r.a.createElement("span",{className:"address-validation"},"Invalid Contract Address"),r.a.createElement("br",null),r.a.createElement("input",{className:"fetch-contract-button",disabled:!(!o&&i),id:"".concat(o?"show-balance-button-hovered":"show-balance-button"),type:"submit",value:"Fetch"}))))))}),E=(a(348),function(e){var t=e.updateSigner,a=e.handleNetworkChange,c=e.network,o=e.handleLaunchSubmit,l=e.loading,i=e.currentStep,s=Object(h.a)(),d=s.register,m=s.handleSubmit,b=Object(n.useState)(""),p=Object(u.a)(b,2),f=p[0],E=p[1],v={value:c,label:c.charAt(0).toUpperCase()+c.slice(1)},k=function(e){E(e.currentTarget.value),t(e)};return 3!==i?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Originate Contract"),r.a.createElement("label",{id:"react-select-label"},"Choose Network"),r.a.createElement(g.a,{name:"address",ref:d,className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"sandbox",label:"Sandbox"}],value:v,onChange:function(e){a(e.value)}}),r.a.createElement("label",{id:"react-select-signer-label"},"Choose Signer"),r.a.createElement("label",{className:"signer-toolbar"},"mainnet"!==c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onClick:k,value:"ephemeral",id:"ephemeral",type:"radio"}),r.a.createElement("label",{className:"ephemeral"===f?"signer-button-selected":"signer-button",htmlFor:"ephemeral"},"Let Us Sign")),r.a.createElement("input",{onClick:k,value:"beacon",id:"beacon",type:"radio"}),r.a.createElement("label",{className:"beacon"===f?"signer-button-selected":"signer-button",htmlFor:"beacon"},"Beacon"),r.a.createElement("input",{onClick:k,value:"tezbridge",id:"tezbridge",type:"radio"}),r.a.createElement("label",{className:"tezbridge"===f?"signer-button-selected":"signer-button",htmlFor:"tezbridge"},"TezBridge")),r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"contract-launch-form"},r.a.createElement("form",{onSubmit:m(o)},r.a.createElement("input",{disabled:!(!l&&f),id:"show-balance-button",type:"submit"}))))))}),v=(a(349),function(e){var t=e.currentStep,a=e.txnAddress,n=e.launchNetwork;return 4!==t?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"New Originated Contract"),r.a.createElement("label",{id:"react-select-signer-label"},"Contract Address:"),r.a.createElement("h4",{className:"newly-originated-contract"},a),r.a.createElement("label",{id:"react-select-signer-label"},"View Contract Address:"),r.a.createElement("div",{className:"contract-result-explorers"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(n,".tzstats.com/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"TzStats")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://arronax.io/tezos/".concat(n,"/accounts/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"Arronax")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(n,".tzstats.com/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"Better Call Dev")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(n,".tzstats.com/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"TezBlock")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(n,".tzstats.com/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"Tezos.ID")))))}),k=a(383),S=a(382),C=function(e){var t=e.snackbar,a=e.closeSnackbar,n=e.type,c=e.children,o=e.duration;return r.a.createElement(k.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:"none"===o?null:5e3,onClose:function(e,t){"clickaway"!==t&&a()}},r.a.createElement(S.a,{elevation:6,variant:"filled",onClose:a,severity:n},c))},w=function(e){var t=e.snackbar,a=e.closeSnackbar,n=e.error,c=e.loading,o=e.loadingMessage;return r.a.createElement(r.a.Fragment,null,n&&!o&&r.a.createElement(C,{snackbar:t,closeSnackbar:a,type:"warning"},r.a.createElement(r.a.Fragment,null,n)),c&&r.a.createElement(C,{duration:"none",snackbar:t,closeSnackbar:a,type:"info"},r.a.createElement(r.a.Fragment,null,o)))},O=(a(352),function(e){var t=e.lastOriginatedContract,a=e.reset,n=e.currentStep,c=e.code,o=t.split(","),l=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"last-originated-contract-div"},t&&r.a.createElement("a",{href:"https://".concat(i,".tzstats.com/").concat(l)},r.a.createElement("button",null,"View Last Originated Contract")),n>1||c.length>0?r.a.createElement("button",{onClick:a,className:"reset-button"},"Reset George Cloney"):null))}),j=(a(353),function(e){var t=e.code,a=e.signer,n=e.currentStep,c=e.setCurrentStep,o=e.txnAddress,l=function(e){switch(e.target.innerText){case"1":return c(1);case"2":if(t.length>0)return c(2);break;case"3":if(t.length>0)return c(3);break;case"4":if(o)return c(4)}};return r.a.createElement("div",{className:"wizard-container"},r.a.createElement("div",{className:"wizard-steps"},r.a.createElement("div",{onClick:l},r.a.createElement("span",{className:"".concat(t.length>0?"step completed":"step"," ").concat(1===n?"active":"")},"1"),r.a.createElement("br",null),"Fetch Contract"),r.a.createElement("div",{onClick:l},r.a.createElement("span",{className:" ".concat(t.length>0?"step completed":"step"," ").concat(2===n?"active":"")},"2"),r.a.createElement("br",null),"Review Contract"),r.a.createElement("div",{onClick:l},r.a.createElement("span",{className:"".concat(a?"step completed":"step"," ").concat(3===n?"active":"")},"3"),r.a.createElement("br",null),"Deploy New Contract"),r.a.createElement("div",{onClick:l},r.a.createElement("span",{className:"".concat(o?"step completed":"step"," ").concat(4===n?"active":"")},"4"),r.a.createElement("br",null),"View New Contract")))}),N=(a(354),function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"left-container"},r.a.createElement("img",{height:"55",width:"60",alt:"George Cloney logo",src:"george-cloney.png"})),r.a.createElement("div",{className:"right-container"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ecadlabs/george-cloney"},r.a.createElement("img",{alt:"Github logo",height:"55",width:"100",src:"github.jpg"}))))}),x=a(17),y=a(163),z=a(164),A=function(){var e=Object(s.a)(i.a.mark((function e(t,a,n,r,c,o,l,s,u,m){var b,p,g,h,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="ephemeral"===e.t0?3:"tezbridge"===e.t0?19:"beacon"===e.t0?22:23;break;case 3:return e.prev=3,b=new x.a,e.next=7,b.createRequest({url:"https://api.tez.ie/keys/".concat(n||a,"/ephemeral"),method:"POST",headers:{Authorization:"Bearer taquito-example"}});case 7:return p=e.sent,g=p.id,h=p.pkh,f=new y.a(h,"https://api.tez.ie/keys/".concat(n||a,"/ephemeral/").concat(g,"/"),{headers:{Authorization:"Bearer taquito-example"}}),e.next=13,d.a.setSignerProvider(f);case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(3),m&&m(e.t1.message);case 18:return e.abrupt("break",24);case 19:return d.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(n||a),signer:new z.a}),d.a.contract.originate({code:r,init:c}).then((function(e){return e.contract()})).then((function(e){o&&o(!1),l&&l(!1),s&&s(""),u&&u(e.address),l&&l(!0)})).catch((function(e){throw e})),e.abrupt("break",24);case 22:case 23:return e.abrupt("break",24);case 24:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,a,n,r,c,o,l,i,s,u){return e.apply(this,arguments)}}(),F=(a(355),a(356),a(357),function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(u.a)(o,2),b=l[0],g=l[1],h=Object(n.useState)(""),k=Object(u.a)(h,2),S=k[0],C=k[1],x=Object(n.useState)(""),y=Object(u.a)(x,2),z=y[0],F=y[1],T=Object(n.useState)(""),q=Object(u.a)(T,2),L=q[0],B=q[1],I=Object(n.useState)(!1),P=Object(u.a)(I,2),_=P[0],G=P[1],D=Object(n.useState)(""),J=Object(u.a)(D,2),M=J[0],R=J[1],V=Object(n.useState)(""),U=Object(u.a)(V,2),H=U[0],$=U[1],K=Object(n.useState)([]),Q=Object(u.a)(K,2),W=Q[0],X=Q[1],Y=Object(n.useState)(),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(n.useState)("mainnet"),ne=Object(u.a)(ae,2),re=ne[0],ce=ne[1],oe=Object(n.useState)("mainnet"),le=Object(u.a)(oe,2),ie=le[0],se=le[1],ue=Object(n.useState)(""),de=Object(u.a)(ue,2),me=de[0],be=de[1],pe=Object(n.useState)(""),ge=Object(u.a)(pe,2),he=ge[0],fe=ge[1],Ee=Object(n.useState)(""),ve=Object(u.a)(Ee,2),ke=ve[0],Se=ve[1];Object(n.useEffect)((function(){if(he&&(localStorage.setItem("lastLaunchedContract","".concat(he,",").concat(re)),Se("".concat(he,",").concat(re))),!he){var e=localStorage.getItem("lastLaunchedContract");Se(e)}}),[re,he]);var Ce=function(e){var t;g(!1),G(!1),C(""),F(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:e),G(!0)},we=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("sandbox"===t){e.next=4;break}return e.next=3,d.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(t)});case 3:$("https://api.tez.ie/rpc/".concat(t));case 4:ce(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),C("Launching contract..."),G(!0),$("https://api.tez.ie/rpc/".concat(re)),e.next=6,d.a.setProvider({config:{confirmationPollingTimeoutSecond:60},rpc:"https://api.tez.ie/rpc/".concat(re)});case 6:return e.next=8,A(M,ie,re,W,ee,g,G,C,fe,Ce);case 8:"tezbridge"!==M&&d.a.contract.originate({code:W,init:ee}).then((function(e){return e.contract()})).then((function(e){g(!1),G(!1),C(""),fe(e.address),c(4)})).catch((function(e){var t;g(!1),G(!1),C(""),F(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:e),G(!0)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),C("Loading contract code..."),G(!0),e.next=5,d.a.setProvider({rpc:H});case 5:return e.next=7,d.a.contract.at(me);case 7:t=e.sent,X(t.script.code),te(t.script.storage),c(2),be(""),C(""),g(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(t.currentTarget.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{id:"wallet"},r.a.createElement("div",{className:"title-group"},r.a.createElement("img",{alt:"George Cloney signature in cursive",src:"george-cloney-title.png"}),r.a.createElement("h4",null,"George Cloney, being the gentleman he is, will take any Tezos Smart Contract and clone it for you. Great for testing and exploring.")),r.a.createElement(w,{snackbar:_,closeSnackbar:function(){G(!1)},error:z,loading:b,loadingMessage:S}),r.a.createElement(j,{txnAddress:he,setCurrentStep:c,currentStep:a,signer:M,code:W}),r.a.createElement("div",{id:"main-forms"},r.a.createElement(f,{validationError:L,contractAddress:me,currentStep:a,loading:b,handleContractSubmit:je,updateContractAddress:function(e){return Object(m.r)(e.target.value)===m.a.VALID||!1?(B(""),be(e.target.value.trim())):""===e.target.value?B(""):void B("Contract addresses need to be 36 characters")},handleNetworkChange:function(e){"sandbox"===e&&$(""),$("https://api.tez.ie/rpc/".concat(e)),se(e)},network:ie}),r.a.createElement(E,{currentStep:a,setCurrentStep:c,loading:b,signer:M,updateSigner:Ne,handleLaunchSubmit:Oe,handleNetworkChange:we,network:re}),r.a.createElement(v,{txnAddress:he,currentStep:a,launchNetwork:re})),r.a.createElement(p,{currentStep:a,code:W,storage:ee}),r.a.createElement(O,{code:W,currentStep:a,reset:function(){c(1),g(!1),C(""),F(""),G(!1),R(""),$(""),X([]),te(""),ce("mainnet"),se("mainnet"),be(""),fe(""),Se("")},lastOriginatedContract:ke})),r.a.createElement("div",{className:"built-with-taquito-logo"},r.a.createElement("a",{href:"https://github.com/ecadlabs/taquito",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{height:"56",width:"128",alt:"Built with Taquito logo",src:"built-with-taquito.png"}))))});o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.6728cbc6.chunk.js.map
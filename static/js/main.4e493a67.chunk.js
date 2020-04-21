(this["webpackJsonptaquito-react"]=this["webpackJsonptaquito-react"]||[]).push([[0],{111:function(e,t){},169:function(e,t,a){e.exports=a(358)},174:function(e,t,a){},181:function(e,t){},183:function(e,t){},246:function(e,t){},248:function(e,t){},277:function(e,t){},278:function(e,t){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(174),a(6)),i=a.n(o),s=a(14),u=a(8),d=a(29),m=a(160),b=function(e){var t=e.code,a=e.storage,n=e.currentStep,c=t.length>0?"// Contract Code \n"+JSON.stringify(t,null,2):"// Contract Code",l=a?"// Initial Storage Code \n"+JSON.stringify(a,null,2):"// Initial Storage Code ";return 2!==n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"contract-code-editor"},r.a.createElement(m.split,{width:"700px",height:"300px",mode:"json",theme:"monokai",tabSize:2,splits:2,style:{borderRadius:"5px",margin:"0 auto"},orientation:"beside",value:[c,l],name:"contract-code-editor",editorProps:{$blockScrolling:!0}})))},p=a(68),h=a(69),g=(a(347),function(e){var t=e.handleNetworkChange,a=e.network,n=e.updateContractAddress,c=e.handleContractSubmit,l=e.loading,o=e.currentStep,i=e.contractAddress,s=Object(h.a)(),u=s.register,d=s.handleSubmit,m={value:a,label:a.charAt(0).toUpperCase()+a.slice(1)};return 1!==o?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Fetch Contract Code"),r.a.createElement("label",{id:"react-select-label"},"Choose Network"),r.a.createElement(p.a,{className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"sandbox",label:"Sandbox"}],value:m,onChange:function(e){t(e.value)}}),r.a.createElement("div",{id:"content"},r.a.createElement("label",{id:"react-select-lookup-label"},"Enter Contract Address"),r.a.createElement("div",{id:"contract-code-form"},r.a.createElement("form",{onSubmit:d(c)},r.a.createElement("input",{onChange:n,placeholder:"Contract Address",id:"address-input",name:"address",ref:u}),r.a.createElement("br",null),r.a.createElement("input",{disabled:!(!l&&i),id:"".concat(l?"show-balance-button-hovered":"show-balance-button"),type:"submit",value:"Fetch"}))))))}),E=(a(348),function(e){var t=e.updateSigner,a=e.handleNetworkChange,c=e.network,l=e.handleLaunchSubmit,o=e.loading,i=e.currentStep,s=Object(h.a)(),d=s.register,m=s.handleSubmit,b=Object(n.useState)(""),g=Object(u.a)(b,2),E=g[0],f=g[1],v={value:c,label:c.charAt(0).toUpperCase()+c.slice(1)},k=function(e){f(e.currentTarget.value),t(e)};return 3!==i?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Originate Contract"),r.a.createElement("label",{id:"react-select-label"},"Choose Network"),r.a.createElement(p.a,{name:"address",ref:d,className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"sandbox",label:"Sandbox"}],value:v,onChange:function(e){a(e.value)}}),r.a.createElement("label",{id:"react-select-signer-label"},"Choose Signer"),r.a.createElement("label",{className:"signer-toolbar"},"mainnet"!==c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onClick:k,value:"ephemeral",id:"ephemeral",type:"radio"}),r.a.createElement("label",{className:"ephemeral"===E?"signer-button-selected":"signer-button",htmlFor:"ephemeral"},"Let Us Sign")),r.a.createElement("input",{onClick:k,value:"beacon",id:"beacon",type:"radio"}),r.a.createElement("label",{className:"beacon"===E?"signer-button-selected":"signer-button",htmlFor:"beacon"},"Beacon"),r.a.createElement("input",{onClick:k,value:"tezbridge",id:"tezbridge",type:"radio"}),r.a.createElement("label",{className:"tezbridge"===E?"signer-button-selected":"signer-button",htmlFor:"tezbridge"},"TezBridge")),r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"contract-launch-form"},r.a.createElement("form",{onSubmit:m(l)},r.a.createElement("input",{disabled:!(!o&&E),id:"show-balance-button",type:"submit"}))))))}),f=(a(349),function(e){var t=e.currentStep,a=e.txnAddress,n=e.launchNetwork;return 4!==t?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"New Originated Contract"),r.a.createElement("label",{id:"react-select-signer-label"},"Contract Address:"),r.a.createElement("h4",{className:"newly-originated-contract"},a),r.a.createElement("label",{id:"react-select-signer-label"},"View Contract Address:"),r.a.createElement("div",{className:"contract-result-explorers"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(n,".tzstats.com/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"TzStats")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://arronax.io/tezos/".concat(n,"/accounts/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"Arronax")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(n,".tzstats.com/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"TzKt")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(n,".tzstats.com/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"TezBlock")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(n,".tzstats.com/").concat(a)},r.a.createElement("button",{className:"contract-result-button"},"Tezos.ID")))))}),v=a(383),k=a(382),S=function(e){var t=e.snackbar,a=e.closeSnackbar,n=e.type,c=e.children,l=e.duration;return r.a.createElement(v.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:"none"===l?null:5e3,onClose:function(e,t){"clickaway"!==t&&a()}},r.a.createElement(k.a,{elevation:6,variant:"filled",onClose:a,severity:n},c))},C=function(e){var t=e.snackbar,a=e.closeSnackbar,n=e.error,c=e.loading,l=e.loadingMessage;return r.a.createElement(r.a.Fragment,null,n&&!l&&r.a.createElement(S,{snackbar:t,closeSnackbar:a,type:"warning"},r.a.createElement(r.a.Fragment,null,n)),c&&r.a.createElement(S,{duration:"none",snackbar:t,closeSnackbar:a,type:"info"},r.a.createElement(r.a.Fragment,null,l)))},w=(a(352),function(e){var t=e.lastLaunchedContract;return r.a.createElement("div",{className:"last-launched-contract-div"},r.a.createElement("h3",null,"Last Launched Contract:",r.a.createElement("div",{id:"last-launched-contract"},r.a.createElement("h5",null,t))))}),O=(a(353),function(e){var t=e.code,a=e.signer,n=e.currentStep,c=e.setCurrentStep,l=e.txnAddress,o=function(e){switch(e.target.innerText){case"1":return c(1);case"2":if(t.length>0)return c(2);break;case"3":if(t.length>0)return c(3);break;case"4":if(l)return c(4)}};return r.a.createElement("div",{className:"dots-container"},r.a.createElement("div",{className:"wizard-steps"},r.a.createElement("div",{onClick:o},r.a.createElement("span",{className:"".concat(t.length>0?"dot completed":"dot"," ").concat(1===n?"active":"")},"1"),r.a.createElement("br",null),"Fetch Contract"),r.a.createElement("div",{onClick:o},r.a.createElement("span",{className:" ".concat(t.length>0?"dot completed":"dot"," ").concat(2===n?"active":"")},"2"),r.a.createElement("br",null),"Review Contract"),r.a.createElement("div",{onClick:o},r.a.createElement("span",{className:"".concat(a?"dot completed":"dot"," ").concat(3===n?"active":"")},"3"),r.a.createElement("br",null),"Deploy New Contract"),r.a.createElement("div",{onClick:o},r.a.createElement("span",{className:"".concat(l?"dot completed":"dot"," ").concat(4===n?"active":"")},"4"),r.a.createElement("br",null),"View New Contract")))}),j=(a(354),function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"left-container"},r.a.createElement("img",{height:"55",width:"60",alt:"George Cloney logo",src:"george-cloney.png"})),r.a.createElement("div",{className:"right-container"},r.a.createElement("a",{href:"https://github.com/ecadlabs/george-cloney"},r.a.createElement("img",{alt:"Github logo",height:"55",width:"100",src:"github.jpg"}))))}),N=a(17),x=a(163),y=a(164),z=function(){var e=Object(s.a)(i.a.mark((function e(t,a,n,r,c,l,o,s,u,m){var b,p,h,g,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="ephemeral"===e.t0?3:"tezbridge"===e.t0?19:"beacon"===e.t0?22:23;break;case 3:return e.prev=3,b=new N.a,e.next=7,b.createRequest({url:"https://api.tez.ie/keys/".concat(n||a,"/ephemeral"),method:"POST",headers:{Authorization:"Bearer taquito-example"}});case 7:return p=e.sent,h=p.id,g=p.pkh,E=new x.a(g,"https://api.tez.ie/keys/".concat(n||a,"/ephemeral/").concat(h,"/"),{headers:{Authorization:"Bearer taquito-example"}}),e.next=13,d.a.setSignerProvider(E);case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(3),m&&m(e.t1.message);case 18:return e.abrupt("break",24);case 19:return d.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(n||a),signer:new y.a}),d.a.contract.originate({code:r,init:c}).then((function(e){return e.contract()})).then((function(e){l&&l(!1),o&&o(!1),s&&s(""),u&&u(e.address),o&&o(!0)})).catch((function(e){throw e})),e.abrupt("break",24);case 22:case 23:return e.abrupt("break",24);case 24:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,a,n,r,c,l,o,i,s,u){return e.apply(this,arguments)}}(),A=(a(355),a(356),a(357),function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),m=o[0],p=o[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),k=v[0],S=v[1],N=Object(n.useState)(""),x=Object(u.a)(N,2),y=x[0],A=x[1],F=Object(n.useState)(!1),T=Object(u.a)(F,2),L=T[0],q=T[1],P=Object(n.useState)(""),B=Object(u.a)(P,2),I=B[0],G=B[1],_=Object(n.useState)(""),J=Object(u.a)(_,2),M=J[0],D=J[1],R=Object(n.useState)([]),U=Object(u.a)(R,2),V=U[0],H=U[1],K=Object(n.useState)(),$=Object(u.a)(K,2),Q=$[0],W=$[1],X=Object(n.useState)("mainnet"),Y=Object(u.a)(X,2),Z=Y[0],ee=Y[1],te=Object(n.useState)("mainnet"),ae=Object(u.a)(te,2),ne=ae[0],re=ae[1],ce=Object(n.useState)(""),le=Object(u.a)(ce,2),oe=le[0],ie=le[1],se=Object(n.useState)(""),ue=Object(u.a)(se,2),de=ue[0],me=ue[1],be=Object(n.useState)(""),pe=Object(u.a)(be,2),he=pe[0],ge=pe[1];Object(n.useEffect)((function(){de&&localStorage.setItem("lastLaunchedContract",de);var e=localStorage.getItem("lastLaunchedContract");ge(e)}),[de]);var Ee=function(e){var t;p(!1),q(!1),S(""),A(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:e),q(!0)},fe=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("sandbox"===t){e.next=4;break}return e.next=3,d.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(t)});case 3:D("https://api.tez.ie/rpc/".concat(t));case 4:ee(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),S("Launching contract..."),q(!0),D("https://api.tez.ie/rpc/".concat(Z)),e.next=6,d.a.setProvider({config:{confirmationPollingTimeoutSecond:60},rpc:"https://api.tez.ie/rpc/".concat(Z)});case 6:return e.next=8,z(I,ne,Z,V,Q,p,q,S,me,Ee);case 8:"tezbridge"!==I&&d.a.contract.originate({code:V,init:Q}).then((function(e){return e.contract()})).then((function(e){p(!1),q(!1),S(""),me(e.address),c(4)})).catch((function(e){var t;p(!1),q(!1),S(""),A(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:e),q(!0)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),S("Loading contract code..."),q(!0),e.next=5,d.a.setProvider({rpc:M});case 5:return e.next=7,d.a.contract.at(oe);case 7:t=e.sent,H(t.script.code),W(t.script.storage),c(2),ie(""),S(""),p(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G(t.currentTarget.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"top-header"},he&&r.a.createElement(w,{lastLaunchedContract:he})),r.a.createElement("div",{id:"wallet"},r.a.createElement("div",{className:"title-group"},r.a.createElement("h1",null,"The George Cloney"),r.a.createElement("h4",null,"George Cloney, being the gentleman he is, will take any Tezos Smart Contract ",r.a.createElement("br",null)," and clone it for you. Great for testing and exploring.")),r.a.createElement(C,{snackbar:L,closeSnackbar:function(){q(!1)},error:y,loading:m,loadingMessage:k}),r.a.createElement(O,{txnAddress:de,setCurrentStep:c,currentStep:a,signer:I,code:V}),r.a.createElement("div",{id:"main-forms"},r.a.createElement(g,{contractAddress:oe,currentStep:a,loading:m,handleContractSubmit:ke,updateContractAddress:function(e){ie(e.target.value)},handleNetworkChange:function(e){"sandbox"===e&&D(""),D("https://api.tez.ie/rpc/".concat(e)),re(e)},network:ne}),r.a.createElement(E,{currentStep:a,setCurrentStep:c,loading:m,signer:I,updateSigner:Se,handleLaunchSubmit:ve,handleNetworkChange:fe,network:Z}),r.a.createElement(f,{txnAddress:de,currentStep:a,launchNetwork:Z})),r.a.createElement(b,{currentStep:a,code:V,storage:Q})),r.a.createElement("div",{className:"built-with-taquito-logo"},r.a.createElement("img",{height:"56",width:"128",alt:"Built with Taquito logo",src:"built-with-taquito.png"})))});l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.4e493a67.chunk.js.map
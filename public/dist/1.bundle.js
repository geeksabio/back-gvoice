(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{103:function(e,t,n){"use strict";var s=n(0);n(113);t.a=(({className:e="",children:t,isOpen:n,num:a,onClick:i,openable:l=!1,status:c,style:o})=>s.createElement("div",{className:["pill",n?"open":"",c,e].join(" "),onClick:l?e=>{"pending"!==c&&(e.stopPropagation(),n||i())}:null,style:o},s.createElement("div",{className:"contents"},t),s.createElement("div",{className:"num"},a)))},106:function(e,t,n){"use strict";var s=n(2),a=n(0),i=n(11),l=n(15),c=n(3),o=n(4),r=n(37),d=n(5),u=n(6),m=n(92),h=n(47),p=(n(110),e=>a.createElement(r.b,Object.assign({innerClassName:"share-modal"},e),a.createElement("div",{className:"image-container"},a.createElement("img",{className:"mars",src:"/img/mars.svg",alt:"Robot"})),a.createElement(s.Localized,{id:"share-title-new",bold:a.createElement("b",null)},a.createElement("h1",null)),a.createElement("div",{className:"share-buttons"},a.createElement(h.a,null)))),E=n(94),b=(n(111),function(e,t,n,s){return new(n||(n=Promise))(function(a,i){function l(e){try{o(s.next(e))}catch(e){i(e)}}function c(e){try{o(s.throw(e))}catch(e){i(e)}}function o(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(l,c)}o((s=s.apply(e,t||[])).next())})});const v=500,w=({current:e,final:t})=>a.createElement("span",{className:"goal-percentage"},a.createElement("span",{className:"final"},t,"%"),a.createElement("span",{className:"current"},e,"%"));var g=Object(i.b)(({api:e,user:t})=>({api:e,user:t}))(class extends a.Component{constructor(){super(...arguments),this.state={contributionCount:null,currentCount:null},this.killAnimation=!1,this.countUp=(e=>{if(this.killAnimation)return;this.startedAt||(this.startedAt=e);const{contributionCount:t}=this.state,n=Math.min(Math.ceil(t*(e-this.startedAt)/v),t);this.setState({currentCount:n}),n<t&&requestAnimationFrame(this.countUp)})}componentDidMount(){return b(this,void 0,void 0,function*(){const{api:e,type:t}=this.props;this.setState({contributionCount:(yield"speak"===t?e.fetchDailyClipsCount():e.fetchDailyVotesCount())+z},()=>this.countUp(performance.now()))})}componentWillUnmount(){this.killAnimation=!0}render(){const{onReset:e,type:t,user:n}=this.props,{contributionCount:i,currentCount:l}=this.state,r=Math.ceil(100*(i||0)/E.a[t]),m=n.account;return a.createElement("div",{className:"contribution-success"},a.createElement("div",{className:"counter done"},a.createElement(d.d,null),a.createElement(s.Localized,{id:"clips-with-count",bold:a.createElement("b",null),$count:z+"/"+z},a.createElement("span",{className:"text"}))),a.createElement(s.Localized,{id:"speak"===t?"goal-help-recording":"goal-help-validation",goalPercentage:a.createElement(w,{current:Math.ceil(100*(null===l?0:l)/E.a[t]),final:r}),$goalValue:E.a[t]},a.createElement("h1",null)),a.createElement("div",{className:"progress"},a.createElement("div",{className:"done",style:{width:Math.min(r,100)+"%"}})),!m&&a.createElement("div",{className:"profile-card"},a.createElement(s.Localized,{id:"profile-explanation"},a.createElement("p",null)),a.createElement(s.Localized,{id:"login-signup"},a.createElement(u.i,{rounded:!0,href:"/login"}))),a.createElement(t=>m?a.createElement(u.b,Object.assign({className:"contribute-more-button",rounded:!0,onClick:e},t)):a.createElement(u.k,Object.assign({className:"contribute-more-button secondary",onClick:e},t)),null,"speak"===t?a.createElement(d.u,null):a.createElement(d.x,null),a.createElement(s.Localized,{id:"contribute-more",$count:z},a.createElement("span",null))),m&&a.createElement(s.Localized,{id:"edit-profile"},a.createElement(o.b,{className:"secondary",to:c.a.PROFILE_INFO})))}});const f=window.devicePixelRatio,y=320*f,N=100*f,k=.1,S=.6,C=30,M=3;class O{constructor(e){Object.assign(this,e),this.tick=0,this.respawn()}respawn(){this.amplitude=.3+.7*Math.random(),this.seed=Math.random(),this.openClass=5+4*Math.random()|0}equation(e){const t=-1*Math.abs(Math.sin(this.tick))*this.baseAmplitude*this.amplitude*N/2*(1/Math.pow(1+this.openClass*Math.pow(e,2),2));return Math.abs(t)<.001&&this.respawn(),t}_draw(e){this.tick+=this.speed*(1-.5*Math.sin(this.seed*Math.PI));const t=this.ctx;t.beginPath();const n=y/2+(-y/4+this.seed*(y/2)),s=N/2;let a,i,l,c=-3;for(;c<=3;)a=n+c*y/4,i=s+e*this.equation(c),l=l||a,t.lineTo(a,i),c+=.01;const o=Math.abs(this.equation(0)),r=t.createRadialGradient(n,s,2*o,n,s,.3*o);r.addColorStop(0,`rgba(${this.color.join(",")},0.1)`),r.addColorStop(1,`rgba(${this.color.join(",")},0.05)`),t.fillStyle=r,t.lineTo(l,s),t.closePath(),t.fill()}draw(){this._draw(-1),this._draw(1)}}let x=0,L=0,j=[];class D{constructor(e){this.amplitude=k,this.colors=[[89,203,183],[177,181,229],[248,144,150]],this.shouldDraw=!1,this.speed=.1,e.width=y,e.height=N,e.style.width=`${y/f}px`,e.style.height=`${N/f}px`,this.ctx=e.getContext("2d"),this.curves=this.colors.reduce((e,t)=>[...e,t,t],[]).map(e=>new O({color:e,ctx:this.ctx,speed:this.speed,baseAmplitude:2*k})),this.draw()}clear(){this.ctx.globalCompositeOperation="destination-out",this.ctx.fillRect(0,0,y,N),this.ctx.globalCompositeOperation="lighter"}draw(){if(L>=M)return;this.clear();const e=.9*this.curves[0].baseAmplitude+.1*this.amplitude;for(const t of this.curves)t.baseAmplitude=e,t.draw();(this.shouldDraw||Math.abs(e-this.amplitude)>.01)&&requestAnimationFrame(this.draw.bind(this));const t=performance.now();if(j.push(t),t-x<1e3)return;x=t;const n=j.slice().reverse().findIndex(e=>t-e>1e3);-1!==n&&(j=j.slice(j.length-n-1)).length<C&&L++}play(){this.amplitude=S,this.shouldDraw=!0,this.draw()}idle(){this.shouldDraw=!1,this.amplitude=k,j=[]}}n(112);n.d(t,"a",function(){return z});const{Tooltip:P}=n(96),z=5;class R extends a.Component{constructor(){super(...arguments),this.state={selectedPill:null,showShareModal:!1,showShortcutsModal:!1},this.canvasRef=a.createRef(),this.startWaving=(()=>{const e=this.canvasRef.current;this.wave?e||(this.wave.idle(),this.wave=null):e&&(this.wave=new D(e))}),this.toggleShareModal=(()=>this.setState({showShareModal:!this.state.showShareModal})),this.toggleShortcutsModal=(()=>{const e=!this.state.showShortcutsModal;if(e){const{locale:e,type:t}=this.props;("listen"==t?l.d:l.f)("view-shortcuts",e)}return this.setState({showShortcutsModal:e})}),this.handleKeyDown=(e=>{const{getString:t,isSubmitted:n,locale:s,onReset:a,onSubmit:i,type:c}=this.props;if(e.ctrlKey||e.altKey||e.shiftKey)return;const o="Enter"===e.key;if(n&&o)return void a();if(this.isDone)return void(o&&i&&i());const r=this.shortcuts.find(({key:n})=>t(n)===e.key);r&&(r.action(),("listen"===c?l.d:l.f)("shortcut",s),e.preventDefault())}),this.handleSkip=(()=>{const{locale:e,onSkip:t,type:n}=this.props;("listen"===n?l.d:l.f)("skip",e),t()})}componentDidMount(){this.startWaving(),window.addEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){this.startWaving();const{isPlaying:e,isSubmitted:t,onReset:n,user:s}=this.props;this.wave&&(e?this.wave.play():this.wave.idle()),t&&s.account&&s.account.skip_submission_feedback&&n()}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyDown),this.wave&&this.wave.idle()}get isLoaded(){return this.props.sentences.length>0}get isDone(){return this.isLoaded&&-1===this.props.activeIndex}get shortcuts(){const{onSkip:e,shortcuts:t}=this.props;return t.concat({key:"shortcut-skip",label:"skip",action:e})}selectPill(e){this.setState({selectedPill:e})}render(){const{errorContent:e,getString:t,isSubmitted:n,type:i}=this.props,{showShareModal:l,showShortcutsModal:u}=this.state;return a.createElement("div",{className:"contribution-wrapper",onClick:()=>this.selectPill(null)},l&&a.createElement(p,{onRequestClose:this.toggleShareModal}),u&&a.createElement(r.b,{innerClassName:"shortcuts-modal",onRequestClose:this.toggleShortcutsModal},a.createElement(s.Localized,{id:"shortcuts"},a.createElement("h1",null)),a.createElement("div",{className:"shortcuts"},this.shortcuts.map(({key:e,label:n})=>a.createElement("div",{key:e,className:"shortcut"},a.createElement("kbd",null,t(e).toUpperCase()),a.createElement("div",{className:"label"},t(n)))))),a.createElement("div",{className:["contribution",i,this.isDone?"submittable":""].join(" ")},a.createElement("div",{className:"top"},a.createElement(o.b,{to:c.a.ROOT,className:"back"},a.createElement(d.a,null)),a.createElement("div",{className:"links"},a.createElement(s.Localized,{id:"speak"},a.createElement(o.c,{to:c.a.SPEAK})),a.createElement(s.Localized,{id:"listen"},a.createElement(o.c,{to:c.a.LISTEN}))),this.isLoaded&&!e?a.createElement("div",{className:"counter "+(n?"done":"")},n&&a.createElement(d.d,null),a.createElement(s.Localized,{id:"clips-with-count",bold:a.createElement("b",null),$count:this.renderClipCount()},a.createElement("span",{className:"text"}))):a.createElement("div",null),n&&a.createElement("button",{className:"open-share",onClick:this.toggleShareModal},a.createElement(d.B,null))),this.renderContent()))}renderClipCount(){const{activeIndex:e,isSubmitted:t}=this.props;return(t?z:e+1||z)+"/"+z}renderContent(){const{activeIndex:e,errorContent:t,extraButton:n,getString:i,instruction:l,isFirstSubmit:c,isSubmitted:o,onReset:r,onSkip:h,onSubmit:p,pills:E,primaryButtons:b,sentences:v,type:w}=this.props,{selectedPill:f}=this.state;return o?a.createElement(g,{onReset:r,type:w}):t||this.isLoaded&&a.createElement(a.Fragment,null,a.createElement("div",{className:"cards-and-pills"},a.createElement("div",null),a.createElement("div",{className:"cards-and-instruction"},l({$actionType:i("action-click"),children:a.createElement("div",{className:"instruction hidden-sm-down"})})||a.createElement("div",{className:"instruction hidden-sm-down"}),a.createElement("div",{className:"cards"},v.map((t,n)=>{const s=this.isDone?z-1:e,i=n===s;return a.createElement("div",{key:t,className:"card card-dimensions "+(i?"":"inactive"),style:{transform:[`scale(${i?1:.9})`,`translateX(${-130*(n-s)}%)`].join(" "),opacity:n<s?0:1}},a.createElement("div",{style:{margin:"auto",width:"100%"}},t))}))),a.createElement("div",{className:"pills"},a.createElement("div",{className:"inner"},!t&&a.createElement("div",{className:"counter"},a.createElement(s.Localized,{id:"clips-with-count",bold:a.createElement("b",null),$count:this.renderClipCount()},a.createElement("span",{className:"text"}))),this.isDone&&a.createElement("div",{className:"review-instructions"},a.createElement(s.Localized,{id:"review-instruction"},a.createElement("span",null))),E.map((e,t)=>e({isOpen:this.isDone||f===t,key:t,num:t+1,onClick:()=>this.selectPill(t),onShare:this.toggleShareModal,style:null!==f&&Math.abs(Math.min(Math.max(f,1),E.length-2)-t)>1?{display:"none"}:{}}))))),l({$actionType:i("action-tap"),children:a.createElement("div",{className:"instruction hidden-md-up"})})||a.createElement("div",{className:"instruction hidden-md-up"}),a.createElement("div",{className:"primary-buttons"},a.createElement("canvas",{ref:this.canvasRef}),b),a.createElement("div",{className:"buttons"},a.createElement("div",null,a.createElement(u.b,{rounded:!0,outline:!0,className:"hidden-sm-down",onClick:this.toggleShortcutsModal},a.createElement(d.q,null),a.createElement(s.Localized,{id:"shortcuts"},a.createElement("span",null))),a.createElement("div",{className:"extra-button"},n)),a.createElement("div",null,a.createElement(u.b,{rounded:!0,outline:!0,className:"skip",disabled:!this.isLoaded,onClick:h},a.createElement(s.Localized,{id:"skip"},a.createElement("span",null))," ",a.createElement(d.C,null)),p&&a.createElement(P,{arrow:!0,disabled:!this.isDone,open:c||void 0,title:i("record-submit-tooltip",{actionType:i("action-tap")})},a.createElement(s.Localized,{id:"submit-form-action"},a.createElement(m.c,{className:"submit",disabled:!this.isDone,onClick:p,type:"submit"}))))))}}R.defaultProps={isFirstSubmit:!1};t.b=Object(i.b)(({locale:e,user:t})=>({locale:e,user:t}))(Object(s.withLocalization)(R))},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},92:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return d}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return m});var s=n(0),a=n(3),i=n(4),l=n(5),c=(n(97),function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&(n[s[a]]=e[s[a]])}return n});const o=e=>{var{className:t,to:n}=e,a=c(e,["className","to"]);return s.createElement("div",{className:["primary-button",t,a.disabled?"disabled":""].join(" ")},n?s.createElement(i.b,Object.assign({to:n},a)):s.createElement("button",Object.assign({type:"button"},a)),s.createElement("div",{className:"background"}))},r=e=>{var{status:t}=e,n=c(e,["status"]);return s.createElement(o,Object.assign({className:null===t?"stop":"record"},n,{disabled:"waiting"===t}),null===t&&s.createElement(l.u,null),"recording"===t&&s.createElement(l.D,null))},d=e=>s.createElement(o,Object.assign({className:"stop",to:a.a.SPEAK},e),s.createElement(l.u,null)),u=e=>{var{isPlaying:t}=e,n=c(e,["isPlaying"]);return s.createElement(o,Object.assign({className:t?"stop":"play"},n),t?s.createElement(l.D,null):s.createElement(l.v,null))},m=e=>s.createElement(o,Object.assign({className:"play",to:a.a.LISTEN},e),s.createElement(l.v,null))},94:function(e,t,n){"use strict";n.d(t,"a",function(){return s});const s=Object.freeze({speak:1200,listen:2400})},97:function(e,t,n){}}]);
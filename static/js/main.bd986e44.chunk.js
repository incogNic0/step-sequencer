(this.webpackJsonpsequencer=this.webpackJsonpsequencer||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(12),r=n.n(c),i=(n(17),n(2)),o=n(3),u=n.n(o),l=n(4),p=n(5),m=n(8),j=n(7),d=n(10),A=n(9),f=(n(19),n(20),n(0)),h=Object(a.createContext)(),b=function(t){Object(d.a)(n,t);var e=Object(A.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).togglePlaying=function(){a.setState({isPlaying:!a.state.isPlaying})},a.updateCurrentStep=function(t){a.setState({currentStep:t})},a.state={isPlaying:!1,currentStep:0},a}return Object(m.a)(n,[{key:"render",value:function(){var t=Object(i.a)(Object(i.a)({},this.state),{},{togglePlaying:this.togglePlaying,updateCurrentStep:this.updateCurrentStep});return Object(f.jsx)(h.Provider,{value:t,children:this.props.children})}}]),n}(a.Component);n(22);var v=function(t){var e=t.onPlayPause,n=Object(a.useContext)(h).isPlaying,s=n?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAA0UlEQVR4nO3RgQmAQAwEwdf+e9YaAvouMlPAJbBrAQAAAAAA/Nux4cb18N7056/vj5xvjjMnSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgAAAAAAAAbHUDEFQCiJJ3gF0AAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACl0lEQVR4nO2aP2oVURyFPxREQbC01V5LBd2Augm3YGlraesW3EJqswGzgKS2FSyUFAqORXILB+ZlZt7v3nP/nA9O/5tzQpJv3gNjjDHGGGOMMcb0zXP1AeZ//gKfgYfqQ8wV03V+AR+AO9pzzDTLBfBGetHgzAdJOQEeC+8alqVBJuAS+Ajcl103IIcGSfkGvFUdOBprBkk5BZ5qzhyHLYNMwB/gE/BAcewIbB0k5TvwDrhd/uS+2TtIyhnwsvjVHXPsIBO2/VAiBkn5iW3/aCIHSbkAXpd8iJ7IMUiKbX8HOQeZsO1vJvcgKbb9lZQaJOUUeFLkyRql9CATtv2DKAZJSbZ/K/tTNoRykJQz4EXuB20F9Rgptv1r1EPMM7ztqwdYyrC2ry7+pgxn++rC12Qo21eXvSVD2L665D3p2vbV5e5Nt7avLvbYdGf76kKj0o3tq4uMTBe2ry4xR34A72nU9tXl5cw5Ddq+urQSacr21WWVSjO2ry6qdKq3fXVBqlRr++pilKnS9tWl1JDdtt/N6wGzjPqn07+yZqhLUeUL/qNeRfxvbyW55OrbLPdiasuHuqgSOQEeRRWWG3VZOeOXi5XEr98riT+gqij+CLeS+EsOleQ3FVp2BOpi96Ray45AXe6WVG/ZEahLXpNmLDsCddk3pSnLjkBd+FLOgVcZn7ta1MXP07RlR6AeIKULy45APcQEfKUTy45AOUR3lh2BYohuLTuC0mN0bdkRlBpiCMuOIPcQQ1l2BDnHGM6yI8gxxLCWHUHkEMNbdgQRQ9iyAzl2DFt2MHuHsGVnYusQtuzMbBnDll2ANUPYsgtyaIhk2Xdl1w3I0hi2bBG27MqwZVeGLbsynqkPMMYYY4wxxhhjjInhHwOCEx5HZzpNAAAAAElFTkSuQmCC",c=n?"playing":"paused";return Object(f.jsx)("div",{className:"play-pause-btn btn ".concat(c),children:Object(f.jsx)("img",{src:s,alt:"Play/Pause",onClick:e})})};n(23);var C=function(t){var e=t.onResetClick;return Object(f.jsx)("div",{className:"reset-btn btn",onClick:e,children:Object(f.jsx)("p",{children:"reset"})})},O=n(6);n(24);var S=function(t){var e,n=t.kits,a=t.kitData,s=t.onKitSelection,c=[],r=a.name,i=Object(O.a)(n);try{for(i.s();!(e=i.n()).done;){var o=e.value,u=Object(f.jsxs)("option",{value:o,children:[o," "]},o);c.push(u)}}catch(l){i.e(l)}finally{i.f()}return Object(f.jsx)("div",{className:"presets-menu btn",children:Object(f.jsx)("select",{value:r,onChange:s,id:"kits",className:"btn",children:c})})};n(25);var g=function(t){var e=t.currentTempo,n=t.onTempoChange;return Object(f.jsxs)("div",{className:"tempo",children:[Object(f.jsx)("button",{className:"tempo btn",onClick:function(){return n(e+1)},children:"+"}),Object(f.jsx)("p",{className:"current-tempo tempo",children:e}),Object(f.jsx)("button",{className:"tempo btn",onClick:function(){return n(e-1)},children:"-"})]})};var k=function(t){var e=t.kits,n=t.kitData,a=t.currentTempo,s=t.onPlayPause,c=t.onKitSelection,r={onPlayPause:s},o={onResetClick:t.onResetClick},u={kitData:n,kits:e,onKitSelection:c},l={currentTempo:a,onTempoChange:t.onTempoChange};return Object(f.jsxs)("div",{className:"control-panel",children:[Object(f.jsx)(v,Object(i.a)({},r)),Object(f.jsx)(C,Object(i.a)({},o)),Object(f.jsx)(S,Object(i.a)({},u)),Object(f.jsx)(g,Object(i.a)({},l))]})};n(26),n(27);var P=function(t){var e=t.isActive;return Object(f.jsx)("div",{className:"beat-indicator ".concat(e?"active":"")})};var x=function(){for(var t=Object(a.useContext)(h),e=[],n=0;n<16;n++)e.push(Object(f.jsx)(P,{isActive:t.isPlaying&&t.currentStep===n},n));return Object(f.jsxs)("div",{className:"indicator-panel",children:[Object(f.jsx)("div",{className:"buffer"}),Object(f.jsx)("div",{className:"indicators",children:e})]})};n(28),n(29),n(30);var y=function(t){var e=t.sample,n=t.onSamplePadClick;return Object(f.jsxs)("div",{className:"sample-pad btn",onClick:n,children:[Object(f.jsx)("audio",{src:e.url,id:e.name,crossOrigin:"anonymous"}),e.name]})};n(31);var w=function(t){var e=t.onStepPadClick,n=t.sampleName,s=t.stepNum,c=t.isActive,r=Object(a.useContext)(h),i=c?"active":"",o="";return r.isPlaying&&s===r.currentStep&&(o="playing"),Object(f.jsx)("div",{className:"beat-pad btn ".concat(i," ").concat(o),onClick:function(t){e(n,s)}})};var I=function(t){var e=t.sample,n=t.onSamplePadClick,a=t.onStepPadClick,s={sample:e,onSamplePadClick:n};return Object(f.jsxs)("div",{className:"sample-row",children:[Object(f.jsx)(y,Object(i.a)({},s)),e.pattern.map((function(t,n){var s={stepNum:n,onStepPadClick:a,isActive:t,sampleName:e.name,key:n};return Object(f.jsx)(w,Object(i.a)({},s))}))]})};var T,B,E,R=function(t){var e=t.kitData,n=t.onStepPadClick,a=t.onSamplePadClick;return e?Object(f.jsx)("div",{className:"samples-section",children:e.samples.map((function(t){var e={sample:t,onSamplePadClick:a,onStepPadClick:n,key:t.name};return Object(f.jsx)(I,Object(i.a)({},e))}))}):Object(f.jsx)("div",{children:"Loading..."})},K=[{name:"rock",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/rock/rock/",samples:["KICK-1","KICK-2","SNARE-1","HHAT-1","HHAT-2","TOM-1","TOM-2","RIDE","CRASH","TAMBORINE","SHAKER"],defaultTempo:100},{name:"hipHop",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/hip-hop/hip-hop/",samples:["KICK-1","KICK-2","SNARE-1","HHAT-1","HHAT-2","CLAP-1","PERC-1","PERC-2","PERC-3","CYMBAL-1","VOCAL-1"],defaultTempo:90},{name:"house",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/house/house/",samples:["KICK-1","SNARE-1","CLAP-1","CLAP-2","HHAT-1","HHAT-2","PERC-1","PERC-2","CYMBAL-1","STAB-1","TOM-1"],defaultTempo:125},{name:"techno",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/techno/techno/",samples:["KICK-1","KICK-2","SNARE-1","SNARE-2","HHAT-1","PERC-1","PERC-2","PERC-3","PERC-4","FX-1"],defaultTempo:130},{name:"dnb",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/dnb/dnb/",samples:["KICK-1","SNARE-1","SNARE-2","HHAT-1","HHAT-2","PERC-1","BASS-1","BASS-2","BASS-3","FX-1","FX-2"],defaultTempo:170}],L=0,N=[],M=new AudioContext||new window.webkitAudioContext;function H(t){E=this.state.kitData,"suspended"===M.state&&M.resume(),t.isPlaying?clearTimeout(B):(T=t.currentStep,L=M.currentTime,V.call(this))}function D(t){return Y.apply(this,arguments)}function Y(){return(Y=Object(l.a)(u.a.mark((function t(e){var n,a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.arrayBuffer();case 5:return a=t.sent,t.next=8,M.decodeAudioData(a);case 8:return s=t.sent,t.abrupt("return",s);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Q(t,e){var n=M.createBufferSource();n.buffer=t,n.connect(M.destination),n.start(e)}function q(t){var e=60/this.state.currentTempo/4;L+=e,16===++T&&(T=0)}function V(){var t=M.currentTime;if(L<t+.1&&(!function(t,e){N.push({step:t,startTime:e});var n,a=Object(O.a)(E.samples);try{for(a.s();!(n=a.n()).done;){var s=n.value;s.pattern[t]&&Q(s.audio,e)}}catch(c){a.e(c)}finally{a.f()}}(T,L),q.call(this)),N.length&&N[0].startTime<t){var e=N[0].step;N.shift(),this.updateCurrentStep(e)}B=setTimeout(V.bind(this),25)}var U=function(){var t=Object(l.a)(u.a.mark((function t(e){var n,a,s,c,r,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(i.a)({},e),a=[],s=Object(O.a)(n.samples),t.prev=3,s.s();case 5:if((c=s.n()).done){t.next=14;break}return r=c.value,o=Object(i.a)({},r),t.next=10,D(r.url);case 10:o.audio=t.sent,a.push(o);case 12:t.next=5;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),s.e(t.t0);case 19:return t.prev=19,s.f(),t.finish(19);case 22:return n.samples=a,t.abrupt("return",n);case 24:case"end":return t.stop()}}),t,null,[[3,16,19,22]])})));return function(e){return t.apply(this,arguments)}}();function G(t,e){var n=this,a=Object(i.a)({},this.state.kitData),s=a.samples.map((function(a){if(a.name===t&&(a.pattern[e]=!a.pattern[e],a.pattern[e]&&!n.context.isPlaying)){var s=document.querySelector("#".concat(t));s.currentTime=0,s.play()}return a}));return a.samples=s,a}var F=function t(e){var n=e.name,a=e.path,s=e.defaultTempo,c=e.samples;Object(p.a)(this,t),this.name=n,this.defaultTempo=s,this.samples=c.map((function(t){return{name:t,pattern:Array.from({length:16},(function(){return!1})),audio:null,url:a+t.toLowerCase()+".wav"}}))},z=function(t){Object(d.a)(n,t);var e=Object(A.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this)).getSelectedKit=function(t){return K.filter((function(e){return e.name===t}))[0]},a.setupKit=function(t){var e=new F(t);a.setState({kitData:e,currentTempo:e.defaultTempo}),a.loadKitAudio(e)},a.loadKitAudio=function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e);case 2:n=t.sent,a.setState({kitData:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.onPlayPause=function(){H.call(Object(j.a)(a),a.context),a.context.togglePlaying(),a.context.updateCurrentStep(0)},a.updateCurrentStep=function(t){a.context.updateCurrentStep(t)},a.onKitSelection=function(t){a.context.isPlaying&&a.onPlayPause();var e=t.target.value,n=a.getSelectedKit(e);a.setupKit(n)},a.onResetClick=function(){a.context.isPlaying&&a.onPlayPause();var t=function(t){var e=Object(i.a)({},t),n=t.samples.map((function(t){return t.pattern=Array.from({length:16},(function(){return!1})),t}));return e.samples=n,e}(a.state.kitData);a.setState({kitData:t})},a.onTempoChange=function(t){a.setState({currentTempo:t})},a.onStepPadClick=function(t,e){var n=G.call(Object(j.a)(a),t,e);a.setState({kitData:n})},a.onSamplePadClick=function(t){var e=t.target.children[0];e.currentTime=0,e.play()},a.state={kits:[],currentTempo:0,kitData:null},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.getSelectedKit(this.props.defaultKit),this.setState({kits:K.map((function(t){return t.name}))}),this.setupKit(e);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t={kits:this.state.kits,kitData:this.state.kitData||"",currentTempo:this.state.currentTempo,onPlayPause:this.onPlayPause,onTempoChange:this.onTempoChange,onResetClick:this.onResetClick,onKitSelection:this.onKitSelection},e={kitData:this.state.kitData,onSamplePadClick:this.onSamplePadClick,onStepPadClick:this.onStepPadClick};return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(k,Object(i.a)({},t)),Object(f.jsx)(x,{}),Object(f.jsx)(R,Object(i.a)({},e))]})}}]),n}(a.Component);z.defaultProps={defaultKit:"house"},z.contextType=h;var X=z;var J=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(b,{children:Object(f.jsx)(X,{})})})},Z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),c(t),r(t)}))};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root")),Z()}],[[32,1,2]]]);
//# sourceMappingURL=main.bd986e44.chunk.js.map
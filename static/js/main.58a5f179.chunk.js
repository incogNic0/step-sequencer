(this.webpackJsonpsequencer=this.webpackJsonpsequencer||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(15),i=n.n(c),r=(n(21),n(2)),u=n(3),o=n.n(u),l=n(4),p=n(5),m=n(9),j=n(7),d=n(12),h=n(11),b=(n(23),n(24),n(0)),A=Object(a.createContext)(),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).togglePlaying=function(){a.setState({isPlaying:!a.state.isPlaying})},a.updateCurrentStep=function(e){a.setState({currentStep:e})},a.state={isPlaying:!1,currentStep:0},a}return Object(m.a)(n,[{key:"render",value:function(){var e=Object(r.a)(Object(r.a)({},this.state),{},{togglePlaying:this.togglePlaying,updateCurrentStep:this.updateCurrentStep});return Object(b.jsx)(A.Provider,{value:e,children:this.props.children})}}]),n}(a.Component);n(26);var v=function(e){var t=e.onPlayPause,n=Object(a.useContext)(A).isPlaying,s=n?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAA0UlEQVR4nO3RgQmAQAwEwdf+e9YaAvouMlPAJbBrAQAAAAAA/Nux4cb18N7056/vj5xvjjMnSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgAAAAAAAAbHUDEFQCiJJ3gF0AAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACl0lEQVR4nO2aP2oVURyFPxREQbC01V5LBd2Augm3YGlraesW3EJqswGzgKS2FSyUFAqORXILB+ZlZt7v3nP/nA9O/5tzQpJv3gNjjDHGGGOMMcb0zXP1AeZ//gKfgYfqQ8wV03V+AR+AO9pzzDTLBfBGetHgzAdJOQEeC+8alqVBJuAS+Ajcl103IIcGSfkGvFUdOBprBkk5BZ5qzhyHLYNMwB/gE/BAcewIbB0k5TvwDrhd/uS+2TtIyhnwsvjVHXPsIBO2/VAiBkn5iW3/aCIHSbkAXpd8iJ7IMUiKbX8HOQeZsO1vJvcgKbb9lZQaJOUUeFLkyRql9CATtv2DKAZJSbZ/K/tTNoRykJQz4EXuB20F9Rgptv1r1EPMM7ztqwdYyrC2ry7+pgxn++rC12Qo21eXvSVD2L665D3p2vbV5e5Nt7avLvbYdGf76kKj0o3tq4uMTBe2ry4xR34A72nU9tXl5cw5Ddq+urQSacr21WWVSjO2ry6qdKq3fXVBqlRr++pilKnS9tWl1JDdtt/N6wGzjPqn07+yZqhLUeUL/qNeRfxvbyW55OrbLPdiasuHuqgSOQEeRRWWG3VZOeOXi5XEr98riT+gqij+CLeS+EsOleQ3FVp2BOpi96Ray45AXe6WVG/ZEahLXpNmLDsCddk3pSnLjkBd+FLOgVcZn7ta1MXP07RlR6AeIKULy45APcQEfKUTy45AOUR3lh2BYohuLTuC0mN0bdkRlBpiCMuOIPcQQ1l2BDnHGM6yI8gxxLCWHUHkEMNbdgQRQ9iyAzl2DFt2MHuHsGVnYusQtuzMbBnDll2ANUPYsgtyaIhk2Xdl1w3I0hi2bBG27MqwZVeGLbsynqkPMMYYY4wxxhhjjInhHwOCEx5HZzpNAAAAAElFTkSuQmCC",c=n?"playing":"paused";return Object(b.jsx)("div",{className:"play-pause-btn btn ".concat(c),children:Object(b.jsx)("img",{src:s,alt:"Play/Pause",onClick:t})})};n(27);var g=function(e){var t=e.onResetClick;return Object(b.jsx)("div",{className:"reset-btn btn",onClick:t,children:Object(b.jsx)("p",{children:"reset"})})},O=n(6);n(28);var C=function(e){var t,n=e.kits,a=e.kitData,s=e.onKitSelection,c=[],i=a.name,r=Object(O.a)(n);try{for(r.s();!(t=r.n()).done;){var u=t.value,o=Object(b.jsxs)("option",{value:u,children:[u," "]},u);c.push(o)}}catch(l){r.e(l)}finally{r.f()}return Object(b.jsx)("div",{className:"presets-menu btn",children:Object(b.jsx)("select",{value:i,onChange:s,id:"kits",className:"btn",children:c})})};n(29);var S=function(e){var t=e.currentTempo,n=e.onTempoChange;return Object(b.jsxs)("div",{className:"tempo",children:[Object(b.jsx)("button",{className:"tempo btn",onClick:function(){return n(t+1)},children:"+"}),Object(b.jsx)("p",{className:"current-tempo tempo",children:t}),Object(b.jsx)("button",{className:"tempo btn",onClick:function(){return n(t-1)},children:"-"})]})};n(30);var x=function(e){var t=e.isActive;return Object(b.jsx)("div",{className:"beat-indicator ".concat(t?"active":"")})};var k=function(){for(var e=Object(a.useContext)(A),t=[],n=0;n<16;n++)t.push(Object(b.jsx)(x,{isActive:e.isPlaying&&e.currentStep===n},n));return Object(b.jsxs)("div",{className:"indicator-panel",children:[Object(b.jsx)("div",{className:"buffer"}),Object(b.jsx)("div",{className:"indicators",children:t})]})};var P=function(e){var t=e.kits,n=e.kitData,a=e.currentTempo,s=e.onPlayPause,c=e.onKitSelection,i={onPlayPause:s},u={onResetClick:e.onResetClick},o={kitData:n,kits:t,onKitSelection:c},l={currentTempo:a,onTempoChange:e.onTempoChange};return Object(b.jsxs)("div",{className:"player-panel",children:[Object(b.jsxs)("div",{className:"player-controls",children:[Object(b.jsx)(v,Object(r.a)({},i)),Object(b.jsx)(g,Object(r.a)({},u)),Object(b.jsx)(C,Object(r.a)({},o)),Object(b.jsx)(S,Object(r.a)({},l))]}),Object(b.jsx)("div",{children:Object(b.jsx)(k,{})})]})};n(31),n(32),n(14),n(33);var I=function(e){var t=e.onStepPadClick,n=e.sampleName,s=e.stepNum,c=e.isActive,i=Object(a.useContext)(A);return Object(b.jsx)("div",{className:"beat-pad btn ".concat(c?"active"+(i.isPlaying&&s===i.currentStep?" playing":""):""),onClick:function(e){t(n,s)}})};var y=function(e){var t=e.sample,n=e.onSampleRangeInput,a=function(e){n(e,t.name)};return Object(b.jsxs)("div",{className:"sample-row-inputs",children:[Object(b.jsx)("h4",{children:t.name}),Object(b.jsxs)("div",{className:"sample-row-content",children:[Object(b.jsxs)("div",{className:"sample-input",children:[Object(b.jsxs)("label",{htmlFor:"gain-".concat(t.name),children:["Gain: ",t.gainValue]}),Object(b.jsx)("input",{id:"gain-".concat(t.name),type:"range",min:"0",max:"2",step:".01",value:t.gainValue,onInput:a,className:"gain-input rs-range"})]}),Object(b.jsxs)("div",{className:"sample-input",children:[Object(b.jsxs)("label",{htmlFor:"pan-".concat(t.name),children:["Pan: ",t.panValue]}),Object(b.jsx)("input",{id:"panner-".concat(t.name),type:"range",min:"-1",max:"1",step:".01",value:t.panValue,onInput:a,className:"pan-input rs-range"})]})]})]})};var w=function(e){var t=e.sample,n=e.onStepPadClick,a=e.onSampleRangeInput,s={sample:t,onSampleRangeInput:a};return Object(b.jsxs)("div",{className:"sample-row",children:[Object(b.jsx)(y,Object(r.a)({},s)),Object(b.jsx)("div",{className:"sample-row-pads",children:t.pattern.map((function(e,a){var s={stepNum:a,onStepPadClick:n,isActive:e,sampleName:t.name,key:a};return Object(b.jsx)(I,Object(r.a)({},s))}))})]})};var R,B,E=function(e){var t=e.kitData,n=e.onStepPadClick,a=e.onSampleRangeInput;return t?Object(b.jsx)("div",{className:"samples-section",children:t.samples.map((function(e){var t={sample:e,onStepPadClick:n,onSampleRangeInput:a,key:e.name};return Object(b.jsx)(w,Object(r.a)({},t))}))}):Object(b.jsx)("div",{children:"Loading..."})},T=[{name:"rock",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/rock/rock/",samples:["KICK-1","KICK-2","SNARE-1","HHAT-1","HHAT-2","TOM-1","TOM-2","RIDE","CRASH","TAMBORINE","SHAKER"],defaultTempo:100},{name:"hipHop",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/hip-hop/hip-hop/",samples:["KICK-1","KICK-2","SNARE-1","HHAT-1","HHAT-2","CLAP-1","PERC-1","PERC-2","PERC-3","CYMBAL-1","VOCAL-1"],defaultTempo:90},{name:"house",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/house/house/",samples:["KICK-1","SNARE-1","CLAP-1","CLAP-2","HHAT-1","HHAT-2","PERC-1","PERC-2","CYMBAL-1","STAB-1","TOM-1"],defaultTempo:125},{name:"techno",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/techno/techno/",samples:["KICK-1","KICK-2","SNARE-1","SNARE-2","HHAT-1","PERC-1","PERC-2","PERC-3","PERC-4","FX-1"],defaultTempo:130},{name:"dnb",path:"https://sequencer-test-samples.s3.us-east-2.amazonaws.com/originalKits/dnb/dnb/",samples:["KICK-1","SNARE-1","SNARE-2","HHAT-1","HHAT-2","PERC-1","BASS-1","BASS-2","BASS-3","FX-1","FX-2"],defaultTempo:170}],N=0,K=[],L=new AudioContext||new window.webkitAudioContext;function M(){"suspended"===L.state&&L.resume(),this.context.isPlaying?clearTimeout(B):(R=this.context.currentStep,N=L.currentTime,q.call(this))}function V(e){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(o.a.mark((function e(t){var n,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.arrayBuffer();case 5:return a=e.sent,e.next=8,L.decodeAudioData(a);case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){var n=L.createBufferSource(),a=L.createGain(),s=L.createStereoPanner();a.gain.value=e.gainValue,s.pan.value=e.panValue,n.buffer=e.audio,n.connect(a).connect(s).connect(L.destination),n.start(t)}function Y(){var e=60/this.state.currentTempo/4;N+=e,16===++R&&(R=0)}function Q(e,t){K.push({step:e,startTime:t});var n,a=Object(O.a)(this.state.kitData.samples);try{for(a.s();!(n=a.n()).done;){var s=n.value;s.pattern[e]&&H(s,t)}}catch(c){a.e(c)}finally{a.f()}}function q(){var e=L.currentTime;if(N<e+.1&&(Q.call(this,R,N),Y.call(this)),K.length&&K[0].startTime<e){var t=K[0].step;K.shift(),this.updateCurrentStep(t)}B=setTimeout(q.bind(this),25)}var U=n(16),G=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,s,c,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(r.a)({},t),a=[],s=Object(O.a)(n.samples),e.prev=3,s.s();case 5:if((c=s.n()).done){e.next=14;break}return i=c.value,u=Object(r.a)({},i),e.next=10,V(i.url);case 10:u.audio=e.sent,a.push(u);case 12:e.next=5;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),s.e(e.t0);case 19:return e.prev=19,s.f(),e.finish(19);case 22:return n.samples=a,e.abrupt("return",n);case 24:case"end":return e.stop()}}),e,null,[[3,16,19,22]])})));return function(t){return e.apply(this,arguments)}}();function F(e,t,n){var a=this,s=z(this.state.kitData);return s.samples.forEach((function(s){if(void 0===!s[t])throw ReferenceError('"'.concat(t,'" does not exist.'));if(s.name===e)if("pattern"===t){var c=n;s.pattern[c]=!s.pattern[c],s.pattern[c]&&!a.context.isPlaying&&H(s,0)}else s[t]=n})),s}function z(e){var t=Object(r.a)({},e),n=t.samples.map((function(e){var t=Object(r.a)({},e),n=Object(U.a)(e.pattern);return t.pattern=n,t}));return t.samples=n,t}var X=function e(t){var n=t.name,a=t.path,s=t.defaultTempo,c=t.samples;Object(p.a)(this,e),this.name=n,this.defaultTempo=s,this.samples=c.map((function(e){return{name:e,pattern:Array.from({length:16},(function(){return!1})),audio:null,gainValue:1,panValue:0,url:a+e.toLowerCase()+".wav"}}))},J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this)).getSelectedKit=function(e){return T.filter((function(t){return t.name===e}))[0]},a.setupKit=function(e){var t=new X(e);a.setState({kitData:t,currentTempo:t.defaultTempo}),a.loadKitAudio(t)},a.loadKitAudio=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:n=e.sent,a.setState({kitData:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onPlayPause=function(){M.call(Object(j.a)(a)),a.context.togglePlaying(),a.context.updateCurrentStep(0)},a.updateCurrentStep=function(e){a.context.updateCurrentStep(e)},a.onKitSelection=function(e){a.context.isPlaying&&a.onPlayPause();var t=e.target.value,n=a.getSelectedKit(t);a.setupKit(n)},a.onResetClick=function(){a.context.isPlaying&&a.onPlayPause();var e=function(e){var t=z(e);return t.samples.map((function(e){return e.pattern=Array.from({length:16},(function(){return!1})),e.gainValue=1,e.panValue=0,e})),t}(a.state.kitData);a.setState({kitData:e})},a.onTempoChange=function(e){a.setState({currentTempo:e})},a.onStepPadClick=function(e,t){var n=a.updateSample(e,"pattern",t);a.setState({kitData:n})},a.onSampleRangeInput=function(e,t){var n,s=e.target,c=s.value;s.classList.contains("gain-input")&&(n="gainValue"),s.classList.contains("pan-input")&&(n="panValue");var i=a.updateSample(t,n,c);a.setState({kitData:i})},a.state={kits:[],currentTempo:0,kitData:null},a.updateSample=F.bind(Object(j.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getSelectedKit(this.props.defaultKit),this.setState({kits:T.map((function(e){return e.name}))}),this.setupKit(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={kits:this.state.kits,kitData:this.state.kitData||"",currentTempo:this.state.currentTempo,onPlayPause:this.onPlayPause,onTempoChange:this.onTempoChange,onResetClick:this.onResetClick,onKitSelection:this.onKitSelection},t={kitData:this.state.kitData,onStepPadClick:this.onStepPadClick,onSampleRangeInput:this.onSampleRangeInput};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(P,Object(r.a)({},e)),Object(b.jsx)(E,Object(r.a)({},t))]})}}]),n}(a.Component);J.defaultProps={defaultKit:"house"},J.contextType=A;var Z=J,W=n.p+"static/media/brushed-aluminium.312149e7.jpg";var $=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("img",{src:W,className:"bg-image",alt:"brushed aluminium"}),Object(b.jsx)(f,{children:Object(b.jsx)(Z,{})})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("root")),_()}],[[34,1,2]]]);
//# sourceMappingURL=main.58a5f179.chunk.js.map
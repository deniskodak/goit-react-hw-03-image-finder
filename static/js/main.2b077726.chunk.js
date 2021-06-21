(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{78:function(n,e,t){"use strict";t.r(e);var a,o,r,i,c,s,l,p,g,d,b,u,h,x,m=t(0),f=t.n(m),j=t(11),v=t.n(j),O=t(10),y=t.n(O),w=t(16),k=t(12),S=t(6),I=t(7),C=t(9),M=t(8),z=t(27),L=t.n(z),D="https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=".concat("21310703-eb2542faa873a37e647429bbc"),F=function(){var n=Object(k.a)(y.a.mark((function n(e,t){var a,o;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="".concat(D,"&q=").concat(e,"&page=").concat(t),n.next=3,L.a.get(a);case 3:if(!((o=n.sent).status>206)){n.next=6;break}throw Error;case 6:return n.abrupt("return",o.data);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),E=t(2),B=t(3),U=B.b.header(a||(a=Object(E.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),Q=B.b.form(o||(o=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),N=B.b.button(r||(r=Object(E.a)(["\n    display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n}\n\n&:hover {\n  opacity: 1;\n}\n"]))),T=B.b.span(i||(i=Object(E.a)(["\n  &.label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n"]))),A=B.b.input(c||(c=Object(E.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),P=t(1),R=function(n){Object(C.a)(t,n);var e=Object(M.a)(t);function t(){var n;Object(S.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={value:""},n.handleChange=function(e){var t=e.target.value;n.setState({value:t})},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.value),n.setState({value:""})},n}return Object(I.a)(t,[{key:"render",value:function(){return Object(P.jsx)(U,{children:Object(P.jsxs)(Q,{onSubmit:this.onSubmit,children:[Object(P.jsx)(N,{type:"submit",children:Object(P.jsx)(T,{className:"label",children:"Search"})}),Object(P.jsx)(A,{type:"text",autoComplete:"off",autoFocus:!0,value:this.state.value,onChange:this.handleChange,placeholder:"Search images and photos"})]})})}}]),t}(m.Component),W=B.b.li(s||(s=Object(E.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),q=B.b.img(l||(l=Object(E.a)(["\n  display: block;\n  max-width: 100%;\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),H=function(n){var e=n.src,t=n.largeImg,a=n.getLargeImg;return Object(P.jsx)(W,{children:Object(P.jsx)(q,{src:e,alt:"","data-src":t,onClick:a})})},J=B.b.ul(p||(p=Object(E.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),_=function(n){var e=n.images,t=n.getLargeImg;return Object(P.jsx)(J,{children:e.map((function(n){var e=n.id,a=n.webformatURL,o=n.largeImageURL;return Object(P.jsx)(H,{src:a,largeImg:o,getLargeImg:t},e)}))})},G=B.b.button(g||(g=Object(E.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),K=function(n){var e=n.onIncrement;return Object(P.jsx)(G,{type:"button",onClick:e,children:"Load More"})},V=t(31),X=t.n(V),Y=B.b.div(d||(d=Object(E.a)(["\n  position: fixed;\n  top: 100%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),Z=function(){return Object(P.jsx)(Y,{children:Object(P.jsx)(X.a,{type:"Circles",color:"#00BFFF",height:50,width:50,secondaryColor:"#2484a4"})})},$=B.b.div(b||(b=Object(E.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),nn=B.b.div(u||(u=Object(E.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),en=document.querySelector("#modal-root"),tn=function(n){Object(C.a)(t,n);var e=Object(M.a)(t);function t(){var n;Object(S.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).closeModalByEsc=function(e){"Escape"===e.code&&n.props.onClose()},n.closeModalWindow=function(e){e.currentTarget===e.target&&n.props.onClose()},n}return Object(I.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalByEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalByEsc)}},{key:"render",value:function(){return Object(j.createPortal)(Object(P.jsx)($,{className:"Overlay",onClick:this.closeModalWindow,children:Object(P.jsx)(nn,{className:"Modal",children:Object(P.jsx)("img",{src:this.props.largeImg,alt:""})})}),en)}}]),t}(m.Component),an=Object(B.a)(h||(h=Object(E.a)(["\nhtml {\n  box-sizing: border-box;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\n  color: #212121;\n  background-color: #fff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n"]))),on=B.b.section(x||(x=Object(E.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),rn=function(n){Object(C.a)(t,n);var e=Object(M.a)(t);function t(){var n;Object(S.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={imagesData:[],loading:!1,error:null,searchQuery:"",page:1,isModal:!1,largeImg:""},n.getImages=Object(k.a)(y.a.mark((function e(){var t,a,o,r,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.searchQuery,o=t.page,n.setState({loading:!0}),e.prev=2,e.next=5,F(a,o);case 5:r=e.sent,i=r.hits,n.setState((function(n){var e=n.imagesData,t=n.page;return{imagesData:[].concat(Object(w.a)(e),Object(w.a)(i)),page:t+1}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n.setState({error:e.t0.message});case 13:return e.prev=13,n.setState({loading:!1}),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])}))),n.handleSubmit=function(e){n.setState({searchQuery:e,page:1,imagesData:[],error:null})},n.onClick=function(){n.getImages()},n.toSctroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},n.toggleModal=function(e){e?n.setState((function(n){return{isModal:!n.isModal}})):n.setState((function(n){return{isModal:!n.isModal,largeImg:""}}))},n.getLargeImage=function(e){n.setState({largeImg:e.target.dataset.src}),n.toggleModal("check")},n}return Object(I.a)(t,[{key:"componentDidUpdate",value:function(n,e){e.searchQuery!==this.state.searchQuery&&this.getImages(),e.imagesData.length>12&&!this.state.largeImg&&this.toSctroll()}},{key:"render",value:function(){var n=this.state,e=n.imagesData,t=n.loading,a=n.error,o=n.isModal,r=n.largeImg,i=e.length>0&&!t;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(an,{}),o&&Object(P.jsx)(tn,{onClose:this.toggleModal,largeImg:r}),Object(P.jsxs)(on,{children:[Object(P.jsx)(R,{onSubmit:this.handleSubmit}),a&&Object(P.jsx)("h2",{children:a}),Object(P.jsx)(_,{images:e,getLargeImg:this.getLargeImage}),t&&Object(P.jsx)(Z,{}),i&&Object(P.jsx)(K,{onIncrement:this.onClick})]})]})}}]),t}(m.Component),cn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(e){var t=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),o(n),r(n),i(n)}))};v.a.render(Object(P.jsx)(f.a.StrictMode,{children:Object(P.jsx)(rn,{})}),document.getElementById("root")),cn()}},[[78,1,2]]]);
//# sourceMappingURL=main.2b077726.chunk.js.map
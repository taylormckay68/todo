(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(t,n,e){t.exports=e(57)},33:function(t,n,e){},57:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(10),o=e.n(i),c=(e(33),e(22)),l=e(4),s=e(5),u=e(7),d=e(6),p=e(8),h=e(9),f=e.n(h),m=e(1),g=e(2);function b(){var t=Object(m.a)(["\n    height: 100vh;\n    width: 100vw;\n    background-color: black;\n    opacity: .2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    transform: ",";\n    transition: transform .3s ease-in-out;\n\n"]);return b=function(){return t},t}function x(){var t=Object(m.a)(["\n    min-height: 100vh;\n    background-color: lightgray;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return x=function(){return t},t}var k=g.a.div(x()),v=g.a.div(b(),function(t){return!t.taskModal&&"translateX(-125vw)"});function w(){var t=Object(m.a)(["\n    color: white;\n    margin: auto;\n    font-size: 35px;\n"]);return w=function(){return t},t}function y(){var t=Object(m.a)(["\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    border-radius: 25px;\n    border: 1px solid gray;\n    background-color: gray;\n    font-weight: bolder;\n    font-size: 18px;\n    color: white;\n    cursor: pointer;\n    &:focus {\n        outline: 0;\n    }\n"]);return y=function(){return t},t}function j(){var t=Object(m.a)(["\n    max-width: 800px;\n    width: calc(100vw - 48px);\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return j=function(){return t},t}function O(){var t=Object(m.a)(["\n    width: 100vw;\n    height: 100px;\n    background-color: black;\n    display: flex;\n    justify-content: center;\n"]);return O=function(){return t},t}var E=g.a.div(O()),N=g.a.div(j()),C=g.a.button(y()),M=g.a.h1(w()),A=function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(u.a)(this,Object(d.a)(n).call(this,t))).state={taskModal:!1},e}return Object(p.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(E,{className:"nav-wrapper"},r.a.createElement(N,{className:"nav-content-container"},r.a.createElement(M,{className:"nav-text"},"Workfront To-do List"),r.a.createElement(C,{className:"add-button",onClick:this.props.toggle},"Add")))}}]),n}(a.Component);function S(){var t=Object(m.a)(["\n\n"]);return S=function(){return t},t}function T(){var t=Object(m.a)(["\n    width: 75px;\n    padding-left: 5px;\n    margin-left: 10px;\n"]);return T=function(){return t},t}function D(){var t=Object(m.a)(["\n    border: 1px solid black;\n    height: ",";\n    width: ",";\n    resize: none;\n"]);return D=function(){return t},t}function z(){var t=Object(m.a)(["\n    height: ",";\n    width: ",";\n"]);return z=function(){return t},t}function U(){var t=Object(m.a)(["\n    font-size: 16px;\n"]);return U=function(){return t},t}function W(){var t=Object(m.a)(["\n    width: 100px;\n    height: 30px;\n    border-radius: 4px;\n    background-color: #039EFC;\n    &:disabled{\n        background-color: lightgray;\n    }\n"]);return W=function(){return t},t}function I(){var t=Object(m.a)(["\n\n"]);return I=function(){return t},t}function B(){var t=Object(m.a)(["\n\n"]);return B=function(){return t},t}function J(){var t=Object(m.a)(["\n\n"]);return J=function(){return t},t}function L(){var t=Object(m.a)(["\n    display: flex;\n    margin-bottom: 10px;\n"]);return L=function(){return t},t}function P(){var t=Object(m.a)(["\n    display: flex;\n    margin-bottom: 10px;\n"]);return P=function(){return t},t}function V(){var t=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n"]);return V=function(){return t},t}function X(){var t=Object(m.a)(["\n    height: 285px;\n    width: 90vw;\n    background-color: white;\n    border: 1px solid black;\n    position: fixed;\n    box-sizing: border-box;\n    transform: ",";\n    transition: transform .3s ease-in-out;\n    z-index: 2;\n    @media (min-width: 800px) {\n        width: 800px;\n    }\n"]);return X=function(){return t},t}var F=g.a.div(X(),function(t){return!t.taskModal&&"translateX(-125vw)"}),H=g.a.div(V()),$=g.a.div(P()),q=g.a.div(L()),G=g.a.div(J()),K=g.a.div(B()),Q=g.a.div(I()),R=g.a.button(W()),Y=g.a.p(U()),Z=(g.a.input(z(),function(t){return t.height?t.height:"initial"},function(t){return t.width?t.width:"initial"}),g.a.textarea(D(),function(t){return t.height?t.height:"initial"},function(t){return t.width?t.width:"initial"})),_=g.a.select(T()),tt=g.a.option(S()),nt=function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(u.a)(this,Object(d.a)(n).call(this,t))).state={taskCategories:["Work","Personal","Shopping"],priorities:["Low","Medium","High"]},e}return Object(p.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){var t=this,n=this.props,e=n.category,a=n.priority,i=(n.update,n.task);n.info;return r.a.createElement(F,{taskModal:this.props.taskModal,className:"modal"},r.a.createElement(H,{className:"modal-wrapper"},r.a.createElement($,{className:"category-wrapper"},r.a.createElement(Y,{className:"input-text"},"Category: "),r.a.createElement(_,{className:"select-wrapper",value:this.props.category,name:"category",onChange:function(n){return t.props.handleChange(n)}},r.a.createElement(tt,{defaultValue:"",disabled:!0,hidden:!0}),this.state.taskCategories.map(function(t,n){return r.a.createElement(tt,{key:n},t)}))),r.a.createElement(q,{className:"priority-wrapper"},r.a.createElement(Y,{className:"input-text"},"Priority: "),r.a.createElement(_,{className:"select-wrapper",value:this.props.priority,name:"priority",onChange:function(n){return t.props.handleChange(n)}},r.a.createElement(tt,{defaultValue:"",disabled:!0,hidden:!0}),this.state.priorities.map(function(t,n){return r.a.createElement(tt,{key:n},t)}))),r.a.createElement(G,{className:"description-wrapper"},r.a.createElement(Y,{className:"input-text"},"Task: "),r.a.createElement(Z,{className:"input-box",value:this.props.task,name:"task",width:"100%",height:"16px",onChange:function(n){return t.props.handleChange(n)}})),r.a.createElement(K,{className:"info-wrapper"},r.a.createElement(Y,{className:"input-text"},"Additional Info"),r.a.createElement(Z,{className:"text-box",value:this.props.info,name:"info",height:"100px",width:"100%",onChange:function(n){return t.props.handleChange(n)}})),r.a.createElement(Q,{className:"button-wrapper"},this.props.update?r.a.createElement(R,{className:"submit",disabled:!(e&&i&&a),onClick:this.props.handleUpdate},"Update Task"):r.a.createElement(R,{className:"update",disabled:!(e&&i&&a),onClick:this.props.handleSubmit},"Add Task"),this.props.update&&r.a.createElement(R,{onClick:this.props.handleDelete},"Delete"))))}}]),n}(a.Component);function et(){var t=Object(m.a)(["\n    /* width: calc((100% - 197px)/2); */\n    line-height: 35px;\n    margin-left: 10px;\n    display: none;\n    border-bottom: 1px solid;\n    @media (min-width: 450px) {\n        display: block;\n        width: calc(50% - 89px);\n    }\n"]);return et=function(){return t},t}function at(){var t=Object(m.a)(["\n    width: calc(100vw - 168px);\n    line-height: 35px;\n    margin-left: 10px;\n    border-bottom: 1px solid;\n    @media (min-width: 450px) {\n        width: calc(50% - 89px);\n    }\n"]);return at=function(){return t},t}function rt(){var t=Object(m.a)(["\n    margin-left: 76px;\n    width: 72px;\n    line-height: 35px;\n    border-bottom: 1px solid;\n"]);return rt=function(){return t},t}function it(){var t=Object(m.a)(["\n    height: 35px;\n    background-color: lightgray;\n    display: flex;\n"]);return it=function(){return t},t}function ot(){var t=Object(m.a)(["\n    display: flex;\n    margin-left: 10px;\n"]);return ot=function(){return t},t}function ct(){var t=Object(m.a)(["\n    line-height: 35px;\n    margin-left: 10px;\n    width: calc((100% - 106px)/2);\n    display: none;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    @media (min-width: 450px) {\n        display: block;\n        width: calc((100vw - 178px)/2);\n    }\n    @media (min-width: 800px) {\n        width: calc((800px - 178px)/2);\n    }\n"]);return ct=function(){return t},t}function lt(){var t=Object(m.a)(["\n    width: 72px;\n    line-height: 35px;\n    margin-left: 10px;\n"]);return lt=function(){return t},t}function st(){var t=Object(m.a)(["\n    line-height: 35px;\n    margin-left: 10px;\n    width: calc(100vw - 168px);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    @media (min-width: 450px) {\n        width: calc((100vw - 178px)/2);\n    }\n    @media (min-width: 800px) {\n        width: calc((800px - 178px)/2);\n    }\n"]);return st=function(){return t},t}function ut(){var t=Object(m.a)(["\n    width: 100%;\n    cursor: pointer;\n    display: flex;\n"]);return ut=function(){return t},t}function dt(){var t=Object(m.a)(["\n    box-sizing: border-box;\n    height: 35px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    /* padding: 0 10px; */\n"]);return dt=function(){return t},t}function pt(){var t=Object(m.a)(["\n    min-height: calc(100vh - 100px);\n    max-width: 800px;\n    width: 100%;\n    background: lightgray;\n"]);return pt=function(){return t},t}var ht=g.a.div(pt()),ft=g.a.div(dt()),mt=g.a.div(ut()),gt=g.a.p(st()),bt=g.a.p(lt()),xt=g.a.p(ct()),kt=g.a.label(ot()),vt=g.a.div(it()),wt=g.a.div(rt()),yt=g.a.div(at()),jt=g.a.div(et()),Ot=e(25),Et=e.n(Ot),Nt=function(t){function n(t){return Object(l.a)(this,n),Object(u.a)(this,Object(d.a)(n).call(this,t))}return Object(p.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(ht,{className:"task-list-wrapper"},r.a.createElement(vt,{className:"header-wrapper"},r.a.createElement(wt,{className:"category-header"},"Category"),r.a.createElement(yt,{className:"task-header"},"Task"),r.a.createElement(jt,{className:"info-header"},"Additional Info")),this.props.taskArr.map(function(n,e){return r.a.createElement(ft,{className:"task-wrapper",name:n.id},r.a.createElement(kt,{className:"task-label"},r.a.createElement(Et.a,{id:n.id,onChange:t.props.handleToggleCheck,checked:n.complete})),r.a.createElement(mt,{className:"task-info-wrapper",onClick:function(){return t.props.taskClick(n.id)}},r.a.createElement(bt,{className:"category-text"},n.category),r.a.createElement(gt,{className:"task-text"},n.task),r.a.createElement(xt,{className:"info-text"},n.info)))}))}}]),n}(a.Component),Ct=function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(u.a)(this,Object(d.a)(n).call(this,t))).toggleModal=function(){return e.setState({taskModal:!e.state.taskModal,category:"",priority:"",info:"",task:"",id:"",update:!1})},e.handleChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){var n=e.state,a=n.category,r=n.priority,i=n.info,o=n.task;n.taskArr;f.a.post("/addTask",{category:a,priority:r,info:i,task:o,complete:!1}).then(function(t){e.setState({taskArr:t.data,category:"",priority:"",info:"",task:""})}),e.toggleModal(),t.preventDefault()},e.handleToggleCheck=function(t,n,a){f.a.post("/toggleTask",{id:a,checked:t}).then(function(t){return e.setState({taskArr:t.data})})},e.handleUpdate=function(){var t=e.state,n=t.id,a=t.task,r=t.info,i=t.priority,o=t.category;f.a.post("/updateTask",{id:n,task:a,info:r,priority:i,category:o}).then(function(t){e.toggleModal(),e.setState({taskArr:t.data,category:"",priority:"",info:"",task:"",id:"",update:!1})})},e.handleDelete=function(){f.a.post("/deleteTask",{id:e.state.id}).then(function(t){e.toggleModal(),e.setState({taskArr:t.data,category:"",priority:"",info:"",task:"",id:"",update:!1})})},e.taskClick=function(t){var n=e.state.taskArr.filter(function(n){return n.id===t});e.setState({category:n[0].category,priority:n[0].priority,task:n[0].task,info:n[0].info,id:n[0].id,update:!0},e.toggleModal())},e.state={taskModal:!1,taskArr:[],category:"",priority:"",task:"",info:"",id:"",update:!1},e}return Object(p.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;f.a.get("/getDataArr").then(function(n){return t.setState({taskArr:n.data})})}},{key:"render",value:function(){return r.a.createElement(k,{className:"app-wrapper"},r.a.createElement(v,{className:"task-cover",onClick:this.toggleModal,taskModal:this.state.taskModal}),r.a.createElement(nt,Object.assign({className:"task-modal"},this.state,{toggle:this.toggleModal,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleUpdate:this.handleUpdate,handleDelete:this.handleDelete})),r.a.createElement(A,{className:"navbar",toggle:this.toggleModal}),r.a.createElement(Nt,{className:"task-list",taskArr:this.state.taskArr,taskClick:this.taskClick,handleToggleCheck:this.handleToggleCheck}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ct,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.0e80403d.chunk.js.map
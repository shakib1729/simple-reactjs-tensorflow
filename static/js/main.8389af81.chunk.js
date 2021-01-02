(this["webpackJsonpsimple-reactjs-tensorflowjs"]=this["webpackJsonpsimple-reactjs-tensorflowjs"]||[]).push([[0],{281:function(e,t,n){},282:function(e,t,n){},288:function(e,t){},289:function(e,t){},297:function(e,t){},300:function(e,t){},301:function(e,t){},302:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var c=n(40),a=n(100),i=n.n(a),s=n(233),r=n.n(s),l=(n(281),n.p,n(282),n(105)),o=n(18),d=n(59),u=n(6),j=n(234),b=n.n(j),m=n(138),p=(n(302),function(){var e=Object(a.useState)([{x:-1,y:-3},{x:0,y:-1},{x:1,y:1},{x:2,y:3},{x:3,y:5},{x:4,y:7}]),t=Object(u.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)({model:null,trained:!1,predictedValue:"Click on train!",valueToPredict:1}),r=Object(u.a)(s,2),j=r[0],p=r[1],x=function(e){var t=b()(n,Object(d.a)({},e.target.dataset.index,Object(d.a)({},e.target.name,{$set:parseInt(e.target.value)})));i(t)};return Object(c.jsxs)("div",{className:"tensorflow-example",children:[Object(c.jsxs)("div",{className:"train-controls",children:[Object(c.jsx)("h2",{className:"section",children:"Training data (x, y) pairs"}),Object(c.jsxs)("div",{className:"row labels",children:[Object(c.jsx)("div",{className:"field-label column",children:"X"}),Object(c.jsx)("div",{className:"field-label column",children:"Y"})]}),n.map((function(e,t){return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("input",{className:"field field-x column",value:e.x,name:"x","data-index":t,onChange:x,type:"number",pattern:"[0-9]*"}),Object(c.jsx)("input",{className:"field field-y column",value:e.y,name:"y","data-index":t,onChange:x,type:"number"})]},t)})),Object(c.jsx)("button",{className:"button-add-example button--green",onClick:function(){i([].concat(Object(o.a)(n),[{x:1,y:1}]))},children:"+"}),Object(c.jsx)("button",{className:"button-train button--green",onClick:function(){var e=[],t=[];n.forEach((function(n,c){e.push(n.x),t.push(n.y)}));var c=m.b();c.add(m.a.dense({units:1,inputShape:[1]})),c.compile({loss:"meanSquaredError",optimizer:"sgd"});var a=m.c(e,[e.length,1]),i=m.c(t,[t.length,1]);c.fit(a,i,{epochs:250}).then((function(){p(Object(l.a)(Object(l.a)({},j),{},{model:c,trained:!0,predictedValue:"Ready for making predictions"}))}))},children:"Train"})]}),Object(c.jsxs)("div",{className:"predict-controls",children:[Object(c.jsx)("h2",{className:"section",children:"Predicting"}),Object(c.jsx)("input",{className:"field element",value:j.valueToPredict,name:"valueToPredict",onChange:function(e){return p(Object(l.a)(Object(l.a)({},j),{},Object(d.a)({},e.target.name,[parseInt(e.target.value)])))},type:"number",placholder:"Enter an integer number"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"element",children:j.predictedValue}),Object(c.jsx)("button",{className:"element button--green",onClick:function(){var e=j.model.predict(m.c([j.valueToPredict],[1,1])).arraySync()[0][0];p(Object(l.a)(Object(l.a)({},j),{},{predictedValue:e}))},disabled:!j.trained,children:"Predict"})]})]})});var x=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,304)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}},[[303,1,2]]]);
//# sourceMappingURL=main.8389af81.chunk.js.map
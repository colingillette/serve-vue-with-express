(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e28e8ed"],{"0496":function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var n=i("7a23"),o={class:"submit-form"},c={key:0},u={class:"form-group"},l=Object(n["e"])("label",{for:"title"},"Title",-1),r={class:"form-group"},a=Object(n["e"])("label",{for:"description"},"Description",-1),s={key:1},d=Object(n["e"])("h4",null,"You submitted successfully!",-1);function b(t,e,i,b,p,f){return Object(n["q"])(),Object(n["d"])("div",o,[p.submitted?(Object(n["q"])(),Object(n["d"])("div",s,[d,Object(n["e"])("button",{class:"btn btn-success",onClick:e[3]||(e[3]=function(){return f.newTutorial&&f.newTutorial.apply(f,arguments)})},"Add")])):(Object(n["q"])(),Object(n["d"])("div",c,[Object(n["e"])("div",u,[l,Object(n["C"])(Object(n["e"])("input",{type:"text",class:"form-control",id:"title",required:"","onUpdate:modelValue":e[0]||(e[0]=function(t){return p.tutorial.title=t}),name:"title"},null,512),[[n["z"],p.tutorial.title]])]),Object(n["e"])("div",r,[a,Object(n["C"])(Object(n["e"])("input",{class:"form-control",id:"description",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return p.tutorial.description=t}),name:"description"},null,512),[[n["z"],p.tutorial.description]])]),Object(n["e"])("button",{onClick:e[2]||(e[2]=function(){return f.saveTutorial&&f.saveTutorial.apply(f,arguments)}),class:"btn btn-success"},"Submit")]))])}var p=i("f652"),f={name:"add-tutorial",data:function(){return{tutorial:{id:null,title:"",description:"",published:!1},submitted:!1}},methods:{saveTutorial:function(){var t=this,e={title:this.tutorial.title,description:this.tutorial.description};p["a"].create(e).then((function(e){t.tutorial.id=e.data.id,console.log(e.data),t.submitted=!0})).catch((function(t){console.log(t)}))},newTutorial:function(){this.submitted=!1,this.tutorial={}}}},m=(i("e514"),i("6b0d")),j=i.n(m);const O=j()(f,[["render",b]]);e["default"]=O},"3af0":function(t,e,i){},e514:function(t,e,i){"use strict";i("3af0")}}]);
//# sourceMappingURL=chunk-3e28e8ed.f739cbfd.js.map
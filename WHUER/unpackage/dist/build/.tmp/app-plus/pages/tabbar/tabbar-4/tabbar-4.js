(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-4/tabbar-4"],{"1d5a":function(t,e,a){"use strict";var s=a("cf51"),i=a.n(s);i.a},"515d":function(t,e,a){"use strict";a.r(e);var s=a("fc4f"),i=a("fe4e");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("1d5a");var c=a("2877"),o=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,null,null);o.options.__file="tabbar-4.vue",e["default"]=o.exports},bf18:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""}}},onLoad:function(){},methods:{close:function(t){this.imageList.splice(t,1)},chooseMsg:function(){var e=this;t.showActionSheet({itemList:this.msgContents,success:function(t){e.sendDate.content=e.msgContents[t.tapIndex]}})},chooseImg:function(){var e=this;t.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:8-this.imageList.length,success:function(t){e.imageList=e.imageList.concat(t.tempFilePaths)}})},chooseStar:function(t){this.sendDate.score=t},previewImage:function(){t.previewImage({urls:this.imageList})},send:function(){var e=this;console.log(JSON.stringify(this.sendDate));this.imageList.map(function(t,e){return{name:"image"+e,uri:t}});t.uploadFile({url:"https://api.thinker.ink/v1/uploadImage/",filePath:this.imageList[0],name:"image",success:function(a){console.log("成功信息"+JSON.stringify(a)),201===a.statusCode&&(t.showToast({title:"反馈成功!"}),e.imageList=[],e.sendDate={score:0,content:"",contact:""})},fail:function(e){t.showToast({title:"失败",icon:"none"}),console.log("失败信息"+JSON.stringify(e))}})}}};e.default=a}).call(this,a("649d")["default"])},cf51:function(t,e,a){},fb27:function(t,e,a){"use strict";a("e497");var s=n(a("b0ce")),i=n(a("515d"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},fc4f:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"page"},[a("view",{staticClass:"feedback-title"},[a("text",[t._v("问题和意见通知")]),a("text",{staticClass:"feedback-quick",attrs:{eventid:"8ff8db3c-0"},on:{tap:t.chooseMsg}},[t._v("快速键入")])]),a("view",{staticClass:"feedback-body"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sendDate.content,expression:"sendDate.content"}],staticClass:"feedback-textare",attrs:{placeholder:"请详细描述你的问题和意见...",eventid:"8ff8db3c-1"},domProps:{value:t.sendDate.content},on:{input:function(e){e.target.composing||(t.sendDate.content=e.target.value)}}})]),t._m(0),a("view",{staticClass:"feedback-body feedback-uploader"},[a("view",{staticClass:"uni-uploader"},[a("view",{staticClass:"uni-uploader-head"},[a("view",{staticClass:"uni-uploader-title"},[t._v("点击预览图片")]),a("view",{staticClass:"uni-uploader-info"},[t._v(t._s(t.imageList.length)+"/8")])]),a("view",{staticClass:"uni-uploader-body"},[a("view",{staticClass:"uni-uploader__files"},[t._l(t.imageList,function(e,s){return a("block",{key:s},[a("view",{staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[a("image",{staticClass:"uni-uploader__img",attrs:{src:e,eventid:"8ff8db3c-2-"+s},on:{tap:t.previewImage}}),a("view",{staticClass:"close-view",attrs:{eventid:"8ff8db3c-3-"+s},on:{click:function(e){t.close(s)}}},[t._v("x")])])])}),a("view",{directives:[{name:"show",rawName:"v-show",value:t.imageList.length<8,expression:"imageList.length < 8"}],staticClass:"uni-uploader__input-box"},[a("view",{staticClass:"uni-uploader__input",attrs:{eventid:"8ff8db3c-4"},on:{tap:t.chooseImg}})])],2)])])]),t._m(1),a("view",{staticClass:"feedback-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sendDate.contact,expression:"sendDate.contact"}],staticClass:"feedback-input",attrs:{placeholder:"(选填,方便我们联系你 )",eventid:"8ff8db3c-5"},domProps:{value:t.sendDate.contact},on:{input:function(e){e.target.composing||(t.sendDate.contact=e.target.value)}}})]),a("view",{staticClass:"feedback-title feedback-star-view"},[a("text",[t._v("应用评分")]),a("view",{staticClass:"feedback-star-view"},t._l(t.stars,function(e,s){return a("text",{key:s,staticClass:"feedback-star",class:s<t.sendDate.score?"active":"",attrs:{eventid:"8ff8db3c-6-"+s},on:{tap:function(a){t.chooseStar(e)}}})}))]),a("button",{staticClass:"feedback-submit",attrs:{type:"primary",eventid:"8ff8db3c-7"},on:{tap:t.send}},[t._v("提交")]),t._m(2)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"feedback-title"},[a("text",[t._v("图片(选填,提供问题截图,总大小10M以下)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"feedback-title"},[a("text",[t._v("QQ/邮箱")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"feedback-title"},[a("text",[t._v("用户反馈的结果可在app打包后于DCloud开发者中心查看")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},fe4e:function(t,e,a){"use strict";a.r(e);var s=a("bf18"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=i.a}},[["fb27","common/runtime","common/vendor"]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-publish-uni-feedback"],{"0db2":function(e,t,i){"use strict";i.r(t);var a=i("d023"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},"26c3":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[e._v("问题和意见")]),i("v-uni-text",{staticClass:"feedback-quick",on:{click:function(t){t=e.$handleEvent(t),e.chooseMsg(t)}}},[e._v("快速键入")])],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-textarea",{staticClass:"feedback-textare",attrs:{placeholder:"请详细描述你的问题和意见..."},model:{value:e.sendDate.content,callback:function(t){e.$set(e.sendDate,"content",t)},expression:"sendDate.content"}})],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[e._v("图片(选填,提供问题截图,总大小10M以下)")])],1),i("v-uni-view",{staticClass:"feedback-body feedback-uploader"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head"},[i("v-uni-view",{staticClass:"uni-uploader-title"},[e._v("点击预览图片")]),i("v-uni-view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/8")])],1),i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,function(t,a){return[i("v-uni-view",{key:a+"_0",staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:t},on:{click:function(t){t=e.$handleEvent(t),e.previewImage(t)}}}),i("v-uni-view",{staticClass:"close-view",on:{click:function(t){t=e.$handleEvent(t),e.close(a)}}},[e._v("x")])],1)]}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.imageList.length<8,expression:"imageList.length < 8"}],staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(t){t=e.$handleEvent(t),e.chooseImg(t)}}})],1)],2)],1)],1)],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[e._v("QQ/邮箱")])],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-input",{staticClass:"feedback-input",attrs:{placeholder:"(选填,方便我们联系你 )"},model:{value:e.sendDate.contact,callback:function(t){e.$set(e.sendDate,"contact",t)},expression:"sendDate.contact"}})],1),i("v-uni-view",{staticClass:"feedback-title feedback-star-view"},[i("v-uni-text",[e._v("应用评分")]),i("v-uni-view",{staticClass:"feedback-star-view"},e._l(e.stars,function(t,a){return i("v-uni-text",{key:a,staticClass:"feedback-star",class:a<e.sendDate.score?"active":"",on:{click:function(i){i=e.$handleEvent(i),e.chooseStar(t)}}})}))],1),i("v-uni-button",{staticClass:"feedback-submit",attrs:{type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.send(t)}}},[e._v("提交")]),i("v-uni-view",{staticClass:"feedback-title"})],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"98ed":function(e,t,i){"use strict";var a=i("d840"),n=i.n(a);n.a},a70a:function(e,t,i){"use strict";i.r(t);var a=i("26c3"),n=i("0db2");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("98ed");var s=i("2877"),d=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"0b9d9e68",null);d.options.__file="uni-feedback.vue",t["default"]=d.exports},bb72:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf) format("truetype")}uni-page-body[data-v-0b9d9e68]{background-color:#efeff4}uni-view[data-v-0b9d9e68]{font-size:%?28?%}.input-view[data-v-0b9d9e68]{font-size:%?28?%}.close-view[data-v-0b9d9e68]{text-align:center;line-height:14px;height:16px;width:16px;border-radius:50%;background:#ff5053;color:#fff;position:absolute;top:-6px;right:-4px;font-size:12px}.uni-uploader[data-v-0b9d9e68]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.uni-uploader-head[data-v-0b9d9e68]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.uni-uploader-info[data-v-0b9d9e68]{color:#b2b2b2}.uni-uploader-body[data-v-0b9d9e68]{margin-top:%?16?%}.uni-uploader__files[data-v-0b9d9e68]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.uni-uploader__file[data-v-0b9d9e68]{margin:%?10?%;width:%?210?%;height:%?210?%}.uni-uploader__img[data-v-0b9d9e68]{display:block;width:%?210?%;height:%?210?%}.uni-uploader__input-box[data-v-0b9d9e68]{position:relative;margin:%?10?%;width:%?208?%;height:%?208?%;border:%?2?% solid #d9d9d9}.uni-uploader__input-box[data-v-0b9d9e68]:after,.uni-uploader__input-box[data-v-0b9d9e68]:before{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.uni-uploader__input-box[data-v-0b9d9e68]:before{width:%?4?%;height:%?79?%}.uni-uploader__input-box[data-v-0b9d9e68]:after{width:%?79?%;height:%?4?%}.uni-uploader__input-box[data-v-0b9d9e68]:active{border-color:#999}.uni-uploader__input-box[data-v-0b9d9e68]:active:after,.uni-uploader__input-box[data-v-0b9d9e68]:active:before{background-color:#999}.uni-uploader__input[data-v-0b9d9e68]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}.feedback-title[data-v-0b9d9e68]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?%;color:#8f8f94;font-size:%?28?%}.feedback-star-view.feedback-title[data-v-0b9d9e68]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin:0}.feedback-quick[data-v-0b9d9e68]{position:relative;padding-right:%?40?%}.feedback-quick[data-v-0b9d9e68]:after{font-family:uniicons;font-size:%?40?%;content:"\\E581";position:absolute;right:0;top:50%;color:#bbb;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.feedback-body[data-v-0b9d9e68]{background:#fff}.feedback-textare[data-v-0b9d9e68]{height:%?200?%;font-size:%?34?%;line-height:%?50?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?% %?30?% 0}.feedback-input[data-v-0b9d9e68]{font-size:%?34?%;height:%?50?%;min-height:%?50?%;padding:%?15?% %?20?%;line-height:%?50?%}.feedback-uploader[data-v-0b9d9e68]{padding:%?22?% %?20?%}.feedback-star[data-v-0b9d9e68]{font-family:uniicons;font-size:%?40?%;margin-left:%?6?%}.feedback-star-view[data-v-0b9d9e68]{margin-left:%?20?%}.feedback-star[data-v-0b9d9e68]:after{content:"\\E408"}.feedback-star.active[data-v-0b9d9e68]{color:#ffb400}.feedback-star.active[data-v-0b9d9e68]:after{content:"\\E438"}uni-button.feedback-submit[data-v-0b9d9e68]{background-color:#1bb76e;color:#fff;margin:%?20?%}body.?%PAGE?%[data-v-0b9d9e68]{background-color:#efeff4}',""])},d023:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""}}},onLoad:function(){},methods:{close:function(e){this.imageList.splice(e,1)},chooseMsg:function(){var e=this;uni.showActionSheet({itemList:this.msgContents,success:function(t){e.sendDate.content=e.msgContents[t.tapIndex]}})},chooseImg:function(){var e=this;uni.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:8-this.imageList.length,success:function(t){e.imageList=e.imageList.concat(t.tempFilePaths)}})},chooseStar:function(e){this.sendDate.score=e},previewImage:function(){uni.previewImage({urls:this.imageList})},send:function(){var e=this;console.log(JSON.stringify(this.sendDate));this.imageList.map(function(e,t){return{name:"image"+t,uri:e}});uni.uploadFile({url:"https://service.dcloud.net.cn/feedback",filePath:"_doc/uniapp_temp_1548756772133/compressed/1548756832849.jpg",name:"image",success:function(t){200===t.statusCode&&(uni.showToast({title:"反馈成功!"}),e.imageList=[],e.sendDate={score:0,content:"",contact:""})},fail:function(e){uni.showToast({title:"失败",icon:"none"}),console.log(e)}})}}};t.default=a},d840:function(e,t,i){var a=i("bb72");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("cba2ba1e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
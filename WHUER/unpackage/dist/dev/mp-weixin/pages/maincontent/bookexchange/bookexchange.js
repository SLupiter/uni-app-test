(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/maincontent/bookexchange/bookexchange"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/26231/Documents/HBuilderProjects/WHUER/pages/maincontent/bookexchange/bookexchange.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























































































































var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");



var _uniDrawer = _interopRequireDefault(__webpack_require__(/*! ../../../components/uni-drawer.vue */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\components\\uni-drawer.vue"));
var _uniIcon = _interopRequireDefault(__webpack_require__(/*! ../../../components/uni-icon.vue */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\components\\uni-icon.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  components: {
    uniDrawer: _uniDrawer.default,
    uniIcon: _uniIcon.default },

  data: function data() {
    return {
      rightDrawerVisible: false,
      listData: [],
      nextPage: "",
      page: 1,
      reLoad: true,
      searchData: {},
      getting: false };


  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(['isLogin'])),

  methods: {
    bindClick: function bindClick(e) {
      console.log(e);
      var bname = e.mp.currentTarget.dataset.bname;
      var bowner = e.mp.currentTarget.dataset.bowner;
      var bid = e.mp.currentTarget.dataset.bid;
      if (this.isLogin) {
        uni.navigateTo({
          url: './post?bname=' + bname + '&bowner=' + bowner + '&bid=' + bid,
          success: function success(res) {},
          fail: function fail() {},
          complete: function complete() {} });

      } else {

        uni.navigateTo({
          url: '../../user/login/login',
          success: function success(res) {},
          fail: function fail() {},
          complete: function complete() {} });


      }
    },
    gouser: function gouser() {
      uni.navigateTo({
        url: '../../user/pwd/pwd',
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {} });

    },
    dislike: function dislike(key) {var _this = this;
      uni.showModal({
        content: '不感兴趣？',
        success: function success(res) {
          if (res.confirm) {
            _this.listData.splice(key, 1);
          }
        } });

    },
    formSubmit: function formSubmit(e) {
      this.reLoad = true;
      var formData = e.detail.value;
      if (formData.status == "true") {
        formData.status = true;
      } else
      {
        formData.status = false;
      }
      for (var val in formData) {
        //耗时一个下午的重大发现，数组与json用法的区别，如何遍历两者，如何在
        //vue中动态添加遍历并添加json数据
        this.$set(this.searchData, val, formData[val]);
      }
      console.log(e);
      console.log(this.searchData.status + this.searchData.country);

      this.getList();


    },
    formReset: function formReset(e) {
      console.log("清空数据");
      this.chosen = '';
    },
    closeRightDrawer: function closeRightDrawer() {
      this.chosen = '';
      this.rightDrawerVisible = false;

    },
    getList: function getList() {var _this2 = this;
      //防止多次点击getList
      if (this.getting) {
        return;
      }
      this.getting = true;


      var url = 'https://api.thinker.ink/v1/books/';
      if (!this.reLoad) {

        url = this.nextPage;
        if (url == '') {
          uni.showToast({
            icon: 'none',
            title: '无更多数据',
            mask: false,
            duration: 1500 });

          return;
        }
      }
      console.log('路径是');
      console.log(url);
      uni.showLoading({
        title: '正在获取数据',
        mask: false });

      uni.request({
        url: url,
        method: 'GET',
        data: this.searchData,
        success: function success(res) {
          uni.hideLoading();
          _this2.getting = false;

          _this2.searchData = {};
          console.log(res.data.count);
          if (res.data.count == 0) {
            uni.showToast({

              title: '没有数据',
              mask: false,
              duration: 1500 });

          }
          console.log(res);
          if (!_this2.reLoad) {
            res.data.data.forEach(function (news) {
              _this2.listData = _this2.listData.concat(res.data.data);
              console.log(_this2.listData);

            });
          } else {
            _this2.listData = res.data.data;
          }
          _this2.nextPage = res.data.next;
          _this2.reLoad = false;
          console.log(_this2.nextPage);
          console.log(_this2.listData[0].images[0]);
        },
        fail: function fail(res) {
          _this2.getting = false;

          _this2.searchData = {};
          uni.hideLoading();
          console.log(JSON.stringify(res));
        },
        complete: function complete() {} });


    },

    confirm: function confirm(e) {
      this.reLoad = true;
      this.searchData.search = e.detail.value;
      console.log(this.searchData);

      this.getList();

    } },

  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    console.log("tab顶部键" + e.index);

    switch (e.index) {
      case 2:
        console.log("点了评分");
        this.searchData.ordering = "level";
        this.reLoad = true;
        console.log(JSON.stringify(this.searchData));
        this.getList();
        break;
      case 1:
        console.log("点了距离");
        this.searchData.ordering = "place";
        this.reLoad = true;
        console.log(JSON.stringify(this.searchData));
        this.getList();
        break;
      case 0:
        this.rightDrawerVisible = !this.rightDrawerVisible;
        break;
      default:
        break;}


  },
  onBackPress: function onBackPress() {
    // 返回按钮监听
    if (this.rightDrawerVisible) {
      this.chosen = '';
      this.rightDrawerVisible = false;
      return true;
    }
  },
  onLoad: function onLoad() {
    this.getList();
  },
  onReachBottom: function onReachBottom() {
    this.reLoad = false;
    this.getList();
    console.log('bottom');
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.reLoad = true;
    this.getList();
    uni.stopPullDownRefresh();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/26231/Documents/HBuilderProjects/WHUER/pages/maincontent/bookexchange/bookexchange.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=template&id=312becd0&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/26231/Documents/HBuilderProjects/WHUER/pages/maincontent/bookexchange/bookexchange.vue?vue&type=template&id=312becd0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("view", { staticClass: "header" }, [
        _c(
          "view",
          { staticClass: "input-view", attrs: { fixed: "true" } },
          [
            _c("uni-icon", {
              attrs: {
                type: "search",
                size: "22",
                color: "#666666",
                mpcomid: "684237fc-0"
              }
            }),
            _c("input", {
              staticClass: "input",
              attrs: {
                "confirm-type": "search",
                type: "text",
                placeholder: "输入搜索关键词",
                eventid: "684237fc-0"
              },
              on: { confirm: _vm.confirm }
            })
          ],
          1
        )
      ]),
      _vm._l(_vm.listData, function(data, key) {
        return _c(
          "view",
          {
            key: key,
            staticClass: "list-cell",
            attrs: { "hover-class": "uni-list-cell-hover" }
          },
          [
            _c("view", { staticClass: "media-list" }, [
              _c(
                "view",
                {
                  staticClass: "media-image-left",
                  attrs: {
                    "data-bname": data.name,
                    "data-bowner": data.nickname,
                    "data-bid": data.bid,
                    eventid: "684237fc-2-" + key
                  },
                  on: { click: _vm.bindClick }
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: "media-title media-title2 name",
                      attrs: { eventid: "684237fc-1-" + key },
                      on: { tap: _vm.gouser }
                    },
                    [_vm._v(_vm._s(data.nickname))]
                  ),
                  _c("text", { staticClass: "media-title media-title2" }, [
                    _vm._v(_vm._s(data.name))
                  ]),
                  _vm._m(0, true)
                ]
              ),
              _c("view", { staticClass: "media-foot" }, [
                _c(
                  "view",
                  {
                    staticClass: "media-info",
                    attrs: {
                      "data-bname": data.name,
                      "data-bowner": data.nickname,
                      "data-bid": data.bid,
                      eventid: "684237fc-3-" + key
                    },
                    on: { click: _vm.bindClick }
                  },
                  [
                    _c("text", { staticClass: "info-text" }, [
                      _vm._v(_vm._s(data.level))
                    ]),
                    _c("text", { staticClass: "info-text" }, [
                      _vm._v(_vm._s(data.language))
                    ]),
                    _c("text", { staticClass: "info-text" }, [
                      _vm._v(_vm._s(data.country))
                    ]),
                    _c("text", { staticClass: "info-text" }, [
                      _vm._v(_vm._s(data.types))
                    ]),
                    _c("text", { staticClass: "info-text" }, [
                      _vm._v(_vm._s(data.place))
                    ]),
                    _c("text", { staticClass: "info-text" }, [
                      _vm._v(_vm._s(data.status ? "已交换" : "未交换"))
                    ])
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: "max-close-view",
                    attrs: { eventid: "684237fc-4-" + key },
                    on: {
                      click: function($event) {
                        _vm.dislike(key)
                      }
                    }
                  },
                  [_vm._m(1, true)]
                )
              ])
            ])
          ]
        )
      }),
      _c(
        "uni-drawer",
        {
          attrs: {
            visible: _vm.rightDrawerVisible,
            mode: "right",
            eventid: "684237fc-7",
            mpcomid: "684237fc-6"
          },
          on: { close: _vm.closeRightDrawer }
        },
        [
          _c(
            "view",
            { staticClass: "uni-padding-wrap" },
            [
              _c(
                "form",
                {
                  attrs: { eventid: "684237fc-6" },
                  on: { submit: _vm.formSubmit, reset: _vm.formReset }
                },
                [
                  _c(
                    "view",
                    [
                      _c("view", { staticClass: "uni-title" }, [
                        _vm._v("状态")
                      ]),
                      _c(
                        "radio-group",
                        {
                          staticClass: "uni-flex",
                          attrs: { name: "status", mpcomid: "684237fc-1" }
                        },
                        [
                          _c(
                            "label",
                            [
                              _c("radio", { attrs: { value: "true" } }),
                              _vm._v("已交换")
                            ],
                            1
                          ),
                          _c(
                            "label",
                            [
                              _c("radio", { attrs: { value: "false" } }),
                              _vm._v("未交换")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    [
                      _c("view", { staticClass: "uni-title" }, [
                        _vm._v("地点")
                      ]),
                      _c(
                        "radio-group",
                        {
                          staticClass: "uni-column",
                          attrs: { name: "place", mpcomid: "684237fc-2" }
                        },
                        [
                          _c(
                            "view",
                            { staticClass: "uni-flex" },
                            [
                              _c(
                                "label",
                                [
                                  _c("radio", { attrs: { value: "1" } }),
                                  _vm._v("信部")
                                ],
                                1
                              ),
                              _c(
                                "label",
                                [
                                  _c("radio", { attrs: { value: "2" } }),
                                  _vm._v("文理学部")
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "view",
                            { staticClass: " uni-flex" },
                            [
                              _c(
                                "label",
                                [
                                  _c("radio", { attrs: { value: "3" } }),
                                  _vm._v("工部")
                                ],
                                1
                              ),
                              _c(
                                "label",
                                [
                                  _c("radio", { attrs: { value: "4" } }),
                                  _vm._v("医学部")
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    [
                      _c("view", { staticClass: "uni-title" }, [
                        _vm._v("国家")
                      ]),
                      _c(
                        "radio-group",
                        {
                          staticClass: "uni-flex",
                          attrs: { name: "country", mpcomid: "684237fc-3" }
                        },
                        [
                          _c(
                            "label",
                            [
                              _c("radio", { attrs: { value: "in" } }),
                              _vm._v("国内")
                            ],
                            1
                          ),
                          _c(
                            "label",
                            [
                              _c("radio", { attrs: { value: "out" } }),
                              _vm._v("国外")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    [
                      _c("view", { staticClass: "uni-title" }, [
                        _vm._v("语言")
                      ]),
                      _c(
                        "radio-group",
                        {
                          staticClass: "uni-flex",
                          attrs: { name: "language", mpcomid: "684237fc-4" }
                        },
                        [
                          _c(
                            "label",
                            [
                              _c("radio", { attrs: { value: "ch" } }),
                              _vm._v("中文")
                            ],
                            1
                          ),
                          _c(
                            "label",
                            [
                              _c("radio", { attrs: { value: "en" } }),
                              _vm._v("英文")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    [
                      _c("view", { staticClass: "uni-title" }, [
                        _vm._v("类型")
                      ]),
                      _c(
                        "radio-group",
                        {
                          staticClass: "uni-flex",
                          attrs: { name: "types", mpcomid: "684237fc-5" }
                        },
                        [
                          _c(
                            "label",
                            [
                              _c("radio", { attrs: { value: "1" } }),
                              _vm._v("教辅")
                            ],
                            1
                          ),
                          _c(
                            "label",
                            [
                              _c("radio", { attrs: { value: "2" } }),
                              _vm._v("课外")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: "uni-btn-v uni-common-mt" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn-submit ",
                          attrs: {
                            size: "mini",
                            formType: "submit",
                            type: "primary",
                            eventid: "684237fc-5"
                          },
                          on: { tap: _vm.closeRightDrawer }
                        },
                        [_vm._v("Submit")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: "uni-btn-v uni-common-mt" },
                    [
                      _c(
                        "button",
                        {
                          attrs: {
                            type: "warn",
                            size: "mini",
                            formType: "reset"
                          }
                        },
                        [_vm._v("Reset")]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "image-section image-section-left" }, [
      _c("image", {
        staticClass: "image-list1 image-list2",
        attrs: { src: "../../../static/book_real.jpg" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "close-view" }, [
      _c("text", { staticClass: "close" }, [_vm._v("×")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\main.js?{\"page\":\"pages%2Fmaincontent%2Fbookexchange%2Fbookexchange\"}":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/26231/Documents/HBuilderProjects/WHUER/main.js?{"page":"pages%2Fmaincontent%2Fbookexchange%2Fbookexchange"} ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _bookexchange = _interopRequireDefault(__webpack_require__(/*! ./pages/maincontent/bookexchange/bookexchange.vue */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_bookexchange.default));

/***/ }),

/***/ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue":
/*!*******************************************************************************************************!*\
  !*** C:/Users/26231/Documents/HBuilderProjects/WHUER/pages/maincontent/bookexchange/bookexchange.vue ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bookexchange_vue_vue_type_template_id_312becd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookexchange.vue?vue&type=template&id=312becd0& */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=template&id=312becd0&");
/* harmony import */ var _bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookexchange.vue?vue&type=script&lang=js& */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _bookexchange_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookexchange.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bookexchange_vue_vue_type_template_id_312becd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bookexchange_vue_vue_type_template_id_312becd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/26231/Documents/HBuilderProjects/WHUER/pages/maincontent/bookexchange/bookexchange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/26231/Documents/HBuilderProjects/WHUER/pages/maincontent/bookexchange/bookexchange.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./bookexchange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/26231/Documents/HBuilderProjects/WHUER/pages/maincontent/bookexchange/bookexchange.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./bookexchange.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=template&id=312becd0&":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/26231/Documents/HBuilderProjects/WHUER/pages/maincontent/bookexchange/bookexchange.vue?vue&type=template&id=312becd0& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_template_id_312becd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./bookexchange.vue?vue&type=template&id=312becd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\pages\\maincontent\\bookexchange\\bookexchange.vue?vue&type=template&id=312becd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_template_id_312becd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_1_5_4_20190126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_bookexchange_vue_vue_type_template_id_312becd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\26231\\Documents\\HBuilderProjects\\WHUER\\main.js?{\"page\":\"pages%2Fmaincontent%2Fbookexchange%2Fbookexchange\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/maincontent/bookexchange/bookexchange.js.map
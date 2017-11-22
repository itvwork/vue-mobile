webpackJsonp([2],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_user_vue__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_user_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_user_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_d1b271e8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_user_vue__ = __webpack_require__(385);
var disposed = false
var normalizeComponent = __webpack_require__(91)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_user_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_d1b271e8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_user_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\view\\user.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1b271e8", Component.options)
  } else {
    hotAPI.reload("data-v-d1b271e8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    title: {
      type: String,
      default: "上传封面"
    },
    info: {
      type: String,
      default: "警告内容"
    },
    name: {
      type: String,
      default: ''
    }

  },
  data: function data() {
    return {
      toggle: false,
      shows: false
    };
  },
  created: function created() {},

  methods: {
    show: function show() {
      this.toggle = false;
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.onpopstate = function (e) {
      _this.toggle = false;
    };
  },

  directives: {
    append: {
      // 指令的定义
      inserted: function inserted(el) {
        var nodes = document.body.childNodes;
        var arr = [];
        for (var i = 0, len = nodes.length; i < len; i++) {
          if (nodes[i].nodeType == 1 && nodes[i].name == window.location.pathname) {
            arr.push(nodes[i]);
          }
        }
        for (var _i in arr) {
          document.body.removeChild(arr[_i]);
        }
        document.body.appendChild(el);
        return "";
      }
    }
  }
};

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        title: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: 'text'
        },
        less: {
            type: String,
            default: 'fixed'
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },

        titleWidth: {
            type: String,
            default: '16mm'
        }
    },
    data: function data() {
        return {
            errCode: 0
        };
    },

    methods: {
        alert: function (_alert) {
            function alert() {
                return _alert.apply(this, arguments);
            }

            alert.toString = function () {
                return _alert.toString();
            };

            return alert;
        }(function () {
            alert('错');
        })
    },
    components: {}
};

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)(undefined);
// imports


// module
exports.push([module.i, "\n.vuk-log {\n  width: .8rem;\n  max-width: 70mm;\n  position: fixed;\n  z-index: 999;\n  background-color: white;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  overflow: hidden;\n}\n.vuk-log .log-title {\n  text-align: center;\n  font-size: 5.4mm;\n  color: #333;\n  padding: 3mm 0mm;\n}\n.vuk-log .log-info {\n  text-align: center;\n  padding-top: 0mm;\n  padding-bottom: 5mm;\n  color: #888;\n  font-size: 4mm;\n}\n.vuk-log .btn-log-sure {\n  width: 100%;\n  height: 12mm;\n  line-height: 12mm;\n  position: relative;\n  font-size: 4.2mm;\n  display: block;\n  text-align: center;\n  color: #FF9900;\n}\n.vuk-log .btn-log-sure:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #aaa;\n  color: #aaa;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.vuk-alertx {\n  position: absolute;\n  z-index: 9999;\n  top: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)(undefined);
// imports


// module
exports.push([module.i, "\n.vuk-text {\n  position: relative;\n  height: 11mm;\n  box-sizing: border-box;\n  margin: 0px;\n  line-height: 11mm;\n  overflow: hidden;\n  border-spacing: 0px;\n  display: -webkit- flex;\n  display: box;\n  display: -webkit- box;\n  display: flex;\n}\n.vuk-text:after {\n  content: ' ';\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #aaa;\n  color: #aaa;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n  font-size: 0px;\n}\n.vuk-text .vuk-text-title {\n  padding-left: 5mm;\n}\n.vuk-text .vuk-text-input {\n  flex: 1;\n  position: relative;\n}\n.vuk-text input {\n  height: 100%;\n  width: 100%;\n  padding-right: 8mm;\n  box-sizing: border-box;\n}\n.vuk-text .icon {\n  display: block;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  font-size: 5mm;\n}\n.vuk-text .err:before {\n  content: '\\E75E';\n  color: #FF9900;\n}\n.vuk-text .pass:before {\n  color: #3CC51F;\n  content: '\\E75F';\n}\n", ""]);

// exports


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_241baa36_hasScoped_false_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(364);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(366)
}
var normalizeComponent = __webpack_require__(91)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_241baa36_hasScoped_false_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\VukAlert\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-241baa36", Component.options)
  } else {
    hotAPI.reload("data-v-241baa36", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_294766af_hasScoped_false_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(365);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(367)
}
var normalizeComponent = __webpack_require__(91)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_294766af_hasScoped_false_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\VukText\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-294766af", Component.options)
  } else {
    hotAPI.reload("data-v-294766af", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [{ name: "append", rawName: "v-append" }],
      staticClass: "vuk-alert",
      attrs: { name: _vm.name }
    },
    [
      _c(
        "transition",
        {
          attrs: {
            name: "custom-classes-transition",
            "enter-active-class": "ani2 fadeIn",
            "leave-active-class": "animated fadeOut"
          }
        },
        [
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.toggle,
                expression: "toggle"
              }
            ],
            staticClass: "vuk-bg",
            on: {
              click: function($event) {
                _vm.toogle = false
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            name: "custom-classes-transition",
            "enter-active-class": "animated zoomIn",
            "leave-active-class": "animated zoomOut"
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.toggle,
                  expression: "toggle"
                }
              ],
              staticClass: "vuk-log"
            },
            [
              _c("h4", { staticClass: "log-title", attrs: { m: "" } }, [
                _vm._v(_vm._s(_vm.title))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "log-info", attrs: { m: "" } }, [
                _vm._v(_vm._s(_vm.info))
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn-log-sure",
                  on: {
                    click: function($event) {
                      _vm.show()
                    }
                  }
                },
                [_vm._v("确定")]
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-241baa36", esExports)
  }
}

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vuk-text" }, [
    _vm.title
      ? _c(
          "div",
          { staticClass: "vuk-text-title", style: { width: _vm.titleWidth } },
          [_vm._v("\n        " + _vm._s(_vm.title) + "\n    ")]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "vuk-text-input", attrs: { m: "" } }, [
      _c("input", { attrs: { type: _vm.type, placeholder: _vm.placeholder } }),
      _vm._v(" "),
      _c("i", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.errCode > 0,
            expression: "errCode>0"
          }
        ],
        staticClass: "icon",
        class: { err: _vm.errCode == 2, pass: _vm.errCode == 1 },
        on: {
          click: function($event) {
            _vm.alert()
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-294766af", esExports)
  }
}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(360);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(137)("1ff0781f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/.css-loader@0.28.7@css-loader/index.js!../../../node_modules/.vue-loader@13.5.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-241baa36\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.less-loader@4.0.5@less-loader/dist/cjs.js!../../../node_modules/.vue-loader@13.5.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue", function() {
     var newContent = require("!!../../../node_modules/.css-loader@0.28.7@css-loader/index.js!../../../node_modules/.vue-loader@13.5.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-241baa36\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.less-loader@4.0.5@less-loader/dist/cjs.js!../../../node_modules/.vue-loader@13.5.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(361);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(137)("5c13b638", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/.css-loader@0.28.7@css-loader/index.js!../../../node_modules/.vue-loader@13.5.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-294766af\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.less-loader@4.0.5@less-loader/dist/cjs.js!../../../node_modules/.vue-loader@13.5.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue", function() {
     var newContent = require("!!../../../node_modules/.css-loader@0.28.7@css-loader/index.js!../../../node_modules/.vue-loader@13.5.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-294766af\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/.less-loader@4.0.5@less-loader/dist/cjs.js!../../../node_modules/.vue-loader@13.5.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VukText = __webpack_require__(363);

var _VukText2 = _interopRequireDefault(_VukText);

var _index = __webpack_require__(362);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//

exports.default = {
  components: {
    VukText: _VukText2.default,
    VukAlert: _index2.default
  },
  data: function data() {
    return {
      list: [],
      warn: '',
      'user': 'warn'
    };
  },
  activated: function activated() {},
  created: function created() {

    var self = this;
    console.log(window.history);
    setTimeout(function () {

      self.list = [{
        title: '111111111111'
      }, {
        title: '22222222'
      }, {
        title: '3333333333'
      }, {
        title: '44444444444'
      }];
    }, 2000);
  },

  methods: {
    show: function show() {
      tips.show();
      this.user = '我没钱';
      this.$refs.alert.toggle = true;
    }
  }
};

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "wrap-main", attrs: { m: "" } },
    [
      _c("vuk-text"),
      _vm._v(" "),
      _c("vuk-alert", {
        ref: "alert",
        attrs: { name: "/user", title: _vm.user }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              _vm.show()
            }
          }
        },
        [_vm._v("alert")]
      ),
      _vm._v(" "),
      _vm._l(_vm.list, function(item, index) {
        return _c("button", [_vm._v(_vm._s(item.title))])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-d1b271e8", esExports)
  }
}

/***/ })

});
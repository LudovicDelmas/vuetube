/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvuetube"] = self["webpackChunkvuetube"] || []).push([["src_views_SignUp_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/SignUp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/SignUp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"./node_modules/firebase/dist/index.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'signup',\n  data: function data() {\n    return {\n      email: '',\n      password: '',\n      isAuthenticated: false,\n      error: null\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth().onAuthStateChanged(function (user) {\n      if (user) {\n        _this.isAuthenticated = true;\n\n        _this.$router.push('/dashboard');\n      }\n    });\n  },\n  methods: {\n    signUp: function signUp() {\n      var _this2 = this;\n\n      console.log('Sign up');\n      firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth().createUserWithEmailAndPassword(this.email, this.password)[\"catch\"](function (error) {\n        return _this2.error = error.message;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://vuetube/./src/views/SignUp.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/views/SignUp.vue":
/*!******************************!*\
  !*** ./src/views/SignUp.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SignUp_vue_vue_type_template_id_6f83b81c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=6f83b81c& */ \"./src/views/SignUp.vue?vue&type=template&id=6f83b81c&\");\n/* harmony import */ var _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js& */ \"./src/views/SignUp.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _SignUp_vue_vue_type_template_id_6f83b81c___WEBPACK_IMPORTED_MODULE_0__.render,\n  _SignUp_vue_vue_type_template_id_6f83b81c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/SignUp.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://vuetube/./src/views/SignUp.vue?");

/***/ }),

/***/ "./src/views/SignUp.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/views/SignUp.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/SignUp.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://vuetube/./src/views/SignUp.vue?");

/***/ }),

/***/ "./src/views/SignUp.vue?vue&type=template&id=6f83b81c&":
/*!*************************************************************!*\
  !*** ./src/views/SignUp.vue?vue&type=template&id=6f83b81c& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_6f83b81c___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_6f83b81c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_6f83b81c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignUp.vue?vue&type=template&id=6f83b81c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/SignUp.vue?vue&type=template&id=6f83b81c&\");\n\n\n//# sourceURL=webpack://vuetube/./src/views/SignUp.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/SignUp.vue?vue&type=template&id=6f83b81c&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/SignUp.vue?vue&type=template&id=6f83b81c& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"columns\" }, [\n    _c(\"div\", { staticClass: \"column is-4 is-offset-4\" }, [\n      _c(\"h1\", { staticClass: \"title\" }, [_vm._v(\"Sign Up\")]),\n      _vm._v(\" \"),\n      _c(\n        \"form\",\n        {\n          on: {\n            submit: function($event) {\n              $event.preventDefault()\n              return _vm.signUp($event)\n            }\n          }\n        },\n        [\n          _c(\"div\", { staticClass: \"field\" }, [\n            _c(\"div\", { staticClass: \"control\" }, [\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.email,\n                    expression: \"email\"\n                  }\n                ],\n                staticClass: \"input\",\n                attrs: { type: \"email\", placeholder: \"Email\" },\n                domProps: { value: _vm.email },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.email = $event.target.value\n                  }\n                }\n              })\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"field\" }, [\n            _c(\"div\", { staticClass: \"control\" }, [\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.password,\n                    expression: \"password\"\n                  }\n                ],\n                staticClass: \"input\",\n                attrs: { type: \"password\", placeholder: \"Password\" },\n                domProps: { value: _vm.password },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.password = $event.target.value\n                  }\n                }\n              })\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"field\" }, [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _vm.error\n              ? _c(\"article\", { staticClass: \"message is-danger\" }, [\n                  _c(\"div\", { staticClass: \"message-body\" }, [\n                    _vm._v(\n                      \"\\n            \" + _vm._s(_vm.error) + \"\\n          \"\n                    )\n                  ])\n                ])\n              : _vm._e()\n          ])\n        ]\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"control\" }, [\n      _c(\"button\", { staticClass: \"button is-success\" }, [_vm._v(\"Submit\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vuetube/./src/views/SignUp.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);
(self.webpackChunkvuetube=self.webpackChunkvuetube||[]).push([[267],{267:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",{staticClass:"title has-text-centered"},[e._v("Dashboard")]),e._v(" "),s("div",{staticClass:"tabs"},[s("ul",[s("li",{class:{"is-active":"Newest"===e.activeCategory}},[s("a",{on:{click:function(t){return e.setCategory("Newest")}}},[e._v("Newest")])]),e._v(" "),e._l(e.categories,(function(t,a){return s("li",{key:a,class:{"is-active":e.activeCategory===t.title}},[s("a",{on:{click:function(s){return e.setCategory(t.title)}}},[e._v(e._s(t.title))])])}))],2)])])};a._withStripped=!0;const i={name:"dashboard",data:function(){return{categories:[],activeCategory:"Newest"}},firestore:{categories:s(699).db.collection("categories")},methods:{setCategory:function(e){this.activeCategory=e}}};var c=(0,s(900).Z)(i,a,[],!1,null,null,null);c.options.__file="src/components/Dashboard.vue";const r=c.exports}}]);
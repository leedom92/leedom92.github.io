(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20949e7c"],{"34a7":function(t,e,a){},"3b6a":function(t,e,a){"use strict";a("34a7")},"4a59":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-header-wrapper",[a("a-card",{attrs:{bordered:!1}},[a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[a("info",{attrs:{title:"我的待办",value:"8个任务",bordered:!0}})],1),a("a-col",{attrs:{sm:8,xs:24}},[a("info",{attrs:{title:"本周任务平均处理时间",value:"32分钟",bordered:!0}})],1),a("a-col",{attrs:{sm:8,xs:24}},[a("info",{attrs:{title:"本周完成任务数",value:"24个"}})],1)],1)],1),a("a-card",{staticStyle:{"margin-top":"24px"},attrs:{bordered:!1,title:"标准列表"}},[a("div",{attrs:{slot:"extra"},slot:"extra"},[a("a-radio-group",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("a-radio-button",{attrs:{value:"all"}},[t._v("全部")]),a("a-radio-button",{attrs:{value:"processing"}},[t._v("进行中")]),a("a-radio-button",{attrs:{value:"waiting"}},[t._v("等待中")])],1),a("a-input-search",{staticStyle:{"margin-left":"16px",width:"272px"}})],1),a("div",{staticClass:"operate"},[a("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed",icon:"plus"},on:{click:t.add}},[t._v("添加")])],1),a("a-list",{attrs:{size:"large",pagination:{showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50}}},t._l(t.data,(function(e,r){return a("a-list-item",{key:r},[a("a-list-item-meta",{attrs:{description:e.description}},[a("a-avatar",{attrs:{slot:"avatar",size:"large",shape:"square",src:e.avatar},slot:"avatar"}),a("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])],1),a("div",{attrs:{slot:"actions"},slot:"actions"},[a("a",{on:{click:function(a){return t.edit(e)}}},[t._v("编辑")])]),a("div",{attrs:{slot:"actions"},slot:"actions"},[a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",[t._v("编辑")])]),a("a-menu-item",[a("a",[t._v("删除")])])],1),a("a",[t._v("更多"),a("a-icon",{attrs:{type:"down"}})],1)],1)],1),a("div",{staticClass:"list-content"},[a("div",{staticClass:"list-content-item"},[a("span",[t._v("Owner")]),a("p",[t._v(t._s(e.owner))])]),a("div",{staticClass:"list-content-item"},[a("span",[t._v("开始时间")]),a("p",[t._v(t._s(e.startAt))])]),a("div",{staticClass:"list-content-item"},[a("a-progress",{staticStyle:{width:"180px"},attrs:{percent:e.progress.value,status:e.progress.status?e.progress.status:null}})],1)])],1)})),1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[a("a-form-item",{attrs:{label:"任务名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入任务名称"}]}],expression:"['title', {rules:[{required: true, message: '请输入任务名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"开始时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["startAt",{rules:[{required:!0,message:"请选择开始时间"}]}],expression:"['startAt', {rules:[{required: true, message: '请选择开始时间'}]}]"}],staticStyle:{width:"100%"},attrs:{valueFormat:"YYYY-MM-DD HH:mm"}})],1),a("a-form-item",{attrs:{label:"任务负责人",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner",{rules:[{required:!0,message:"请选择开始时间"}]}],expression:"['owner', {rules:[{required: true, message: '请选择开始时间'}]}]"}]},[a("a-select-option",{attrs:{value:0}},[t._v("付晓晓")]),a("a-select-option",{attrs:{value:1}},[t._v("周毛毛")])],1)],1),a("a-form-item",{attrs:{label:"产品描述",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}]})],1)],1)},o=[],l=(a("d3b7"),a("88bc")),i=a.n(l),c=["title","startAt","owner","description"],u={name:"TaskForm",props:{record:{type:Object,default:null}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},form:this.$form.createForm(this)}},mounted:function(){this.record&&this.form.setFieldsValue(i()(this.record,c))},methods:{onOk:function(){return new Promise((function(t){t(!0)}))},onCancel:function(){return new Promise((function(t){t(!0)}))},handleSubmit:function(){var t=this.form.validateFields;this.visible=!0,t((function(t,e){}))}}},p=u,d=a("2877"),f=Object(d["a"])(p,s,o,!1,null,null,null),m=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-info"},[a("span",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.value))]),t.bordered?a("em"):t._e()])},b=[],h={name:"Info",props:{title:{type:String,default:""},value:{type:String,default:""},bordered:{type:Boolean,default:!1}}},w=h,g=(a("3b6a"),Object(d["a"])(w,v,b,!1,null,"79fa4e49",null)),y=g.exports,C=[];C.push({title:"Alipay",avatar:"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",description:"那是一种内在的东西， 他们到达不了，也无法触及的",owner:"付晓晓",startAt:"2018-07-26 22:44",progress:{value:90}}),C.push({title:"Angular",avatar:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",description:"希望是一个好东西，也许是最好的，好东西是不会消亡的",owner:"曲丽丽",startAt:"2018-07-26 22:44",progress:{value:54}}),C.push({title:"Ant Design",avatar:"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",description:"生命就像一盒巧克力，结果往往出人意料",owner:"林东东",startAt:"2018-07-26 22:44",progress:{value:66}}),C.push({title:"Ant Design Pro",avatar:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",description:"城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",owner:"周星星",startAt:"2018-07-26 22:44",progress:{value:30}}),C.push({title:"Bootstrap",avatar:"https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",description:"那时候我只会想自己想要什么，从不想自己拥有什么",owner:"吴加好",startAt:"2018-07-26 22:44",progress:{status:"exception",value:100}});var _={name:"StandardList",components:{TaskForm:m,Info:y},data:function(){return{data:C,status:"all"}},methods:{add:function(){this.$dialog(m,{record:{},on:{ok:function(){},cancel:function(){},close:function(){}}},{title:"新增",width:700,centered:!0,maskClosable:!1})},edit:function(t){this.$dialog(m,{record:t,on:{ok:function(){},cancel:function(){},close:function(){}}},{title:"操作",width:700,centered:!0,maskClosable:!1})}}},j=_,x=(a("7128"),Object(d["a"])(j,r,n,!1,null,"9fcba204",null));e["default"]=x.exports},7128:function(t,e,a){"use strict";a("fa6c")},"88bc":function(t,e,a){(function(e){var a=1/0,r=9007199254740991,n="[object Arguments]",s="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",i="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,u=i||c||Function("return this")();function p(t,e,a){switch(a.length){case 0:return t.call(e);case 1:return t.call(e,a[0]);case 2:return t.call(e,a[0],a[1]);case 3:return t.call(e,a[0],a[1],a[2])}return t.apply(e,a)}function d(t,e){var a=-1,r=t?t.length:0,n=Array(r);while(++a<r)n[a]=e(t[a],a,t);return n}function f(t,e){var a=-1,r=e.length,n=t.length;while(++a<r)t[n+a]=e[a];return t}var m=Object.prototype,v=m.hasOwnProperty,b=m.toString,h=u.Symbol,w=m.propertyIsEnumerable,g=h?h.isConcatSpreadable:void 0,y=Math.max;function C(t,e,a,r,n){var s=-1,o=t.length;a||(a=k),n||(n=[]);while(++s<o){var l=t[s];e>0&&a(l)?e>1?C(l,e-1,a,r,n):f(n,l):r||(n[n.length]=l)}return n}function _(t,e){return t=Object(t),j(t,e,(function(e,a){return a in t}))}function j(t,e,a){var r=-1,n=e.length,s={};while(++r<n){var o=e[r],l=t[o];a(l,o)&&(s[o]=l)}return s}function x(t,e){return e=y(void 0===e?t.length-1:e,0),function(){var a=arguments,r=-1,n=y(a.length-e,0),s=Array(n);while(++r<n)s[r]=a[e+r];r=-1;var o=Array(e+1);while(++r<e)o[r]=a[r];return o[e]=s,p(t,this,o)}}function k(t){return S(t)||O(t)||!!(g&&t&&t[g])}function A(t){if("string"==typeof t||P(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}function O(t){return F(t)&&v.call(t,"callee")&&(!w.call(t,"callee")||b.call(t)==n)}var S=Array.isArray;function z(t){return null!=t&&B(t.length)&&!q(t)}function F(t){return N(t)&&z(t)}function q(t){var e=E(t)?b.call(t):"";return e==s||e==o}function B(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}function E(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function N(t){return!!t&&"object"==typeof t}function P(t){return"symbol"==typeof t||N(t)&&b.call(t)==l}var $=x((function(t,e){return null==t?{}:_(t,d(C(e,1),A))}));t.exports=$}).call(this,a("c8ba"))},fa6c:function(t,e,a){}}]);
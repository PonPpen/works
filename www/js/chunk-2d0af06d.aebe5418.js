(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af06d"],{"0d25":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vip"},[e("Header",{attrs:{title:"学习"}}),t.skeleton?e("van-skeleton",{attrs:{row:13}}):t._e(),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(t){return e("van-cell",{key:t,attrs:{title:t}})})),1)],1)},s=[],a=e("0418"),o=e("b50c"),l={components:{Header:a["a"],Tabs:o["a"]},data:function(){return{list:[],skeleton:!1,loading:!1,finished:!1}},created:function(){var t=this;this.skeleton=!0,setTimeout((function(){t.skeleton=!1}),500)},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var n=0;n<10;n++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)}),500)}}},d=l,r=e("2877"),c=Object(r["a"])(d,i,s,!1,null,null,null);n["default"]=c.exports}}]);
(function(e){function n(n){for(var o,a,i=n[0],s=n[1],u=n[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(d.length)d.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,a=1;a<t.length;a++){var i=t[a];0!==r[i]&&(o=!1)}o&&(c.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},a={app:0},r={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1a1fc911":"1f06e0a8","chunk-258903d8":"91207cf1","chunk-2d0af06d":"aebe5418","chunk-2d0c910a":"dad19d46","chunk-2d2252a2":"e1077370","chunk-2d238467":"f8b068fd","chunk-65a3b148":"6193b5d5","chunk-79a74dd2":"fd1a6ba7","chunk-7e39ebe0":"8a9acb1e"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-258903d8":1,"chunk-79a74dd2":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-1a1fc911":"31d6cfe0","chunk-258903d8":"e9000b87","chunk-2d0af06d":"31d6cfe0","chunk-2d0c910a":"31d6cfe0","chunk-2d2252a2":"31d6cfe0","chunk-2d238467":"31d6cfe0","chunk-65a3b148":"31d6cfe0","chunk-79a74dd2":"737f1ae9","chunk-7e39ebe0":"31d6cfe0"}[e]+".css",r=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===o||l===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],f.parentNode.removeChild(f),t(c)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,t[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0418":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"nav-bar"},[t("van-nav-bar",{attrs:{fixed:"",border:"",title:e.title},on:{"click-left":e.onClick,"click-right":e.onClickRight}},[t("van-icon",{attrs:{slot:"left",name:e.leftshow1?"ellipsis":"arrow-left"},slot:"left",model:{value:e.leftshow1,callback:function(n){e.leftshow1=n},expression:"leftshow1"}}),t("van-icon",{attrs:{slot:"right",name:"like-o"},slot:"right"})],1),t("van-popup",{style:{height:"100%",width:"60%"},attrs:{position:"left",closeable:"","get-container":"body"},model:{value:e.show,callback:function(n){e.show=n},expression:"show"}},[t("van-cell-group",{staticStyle:{"margin-top":"50px"}},[t("van-cell",{attrs:{title:"首页"},on:{click:function(n){return e.routerPush("/")}}}),t("van-cell",{attrs:{title:"学习"},on:{click:function(n){return e.routerPush("/study")}}}),t("van-cell",{attrs:{title:"功能1"},on:{click:function(n){return e.routerPush("/modules/foo1")}}}),t("van-cell",{attrs:{title:"功能2"},on:{click:function(n){return e.routerPush("/modules/foo2")}}}),t("van-cell",{attrs:{title:"功能3"},on:{click:function(n){return e.routerPush("/modules/foo3")}}})],1)],1),t("van-share-sheet",{attrs:{title:"立即分享给好友",options:e.options},model:{value:e.showShare,callback:function(n){e.showShare=n},expression:"showShare"}})],1)},a=[],r=(t("ac1f"),t("1276"),{props:{title:String},data:function(){return{leftshow1:!0,show:!1,showShare:!1,options:[[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}]]}},created:function(){var e=location.hash.split("/")[1];""===e||"home"===e||"study"===e||"work"===e||"me"===e?(this.leftshow1=!0,console.log("1："+e)):(this.leftshow1=!1,console.log("2："+e))},methods:{onClick:function(){!0===this.leftshow1?this.show=!0:this.$router.go(-1)},onClickRight:function(){this.showShare=!0},routerPush:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log(e),this.$router.push({path:e,query:n}),this.show=!1}}}),c=r,i=t("2877"),s=Object(i["a"])(c,o,a,!1,null,"7c87fb16",null);n["a"]=s.exports},"08f9":function(e,n,t){"use strict";t.r(n);var o=t("96eb"),a=t.n(o),r=a.a.Random,c=function(){for(var e=[],n=0;n<10;n++){var t={title:r.csentence(5,30),thumbnail:r.dataImage("500x450","mock的图片"),author_name:r.cname(),date:r.date()+" "+r.time()};e.push(t)}return{articles:e}};a.a.setup({timeout:"200 - 400"});var i="123456";function s(e){var n=JSON.parse(e.body);return Object.assign(n,{vCode:i})}function u(e){var n=JSON.parse(e.body);return n.code===i?{code:1,text:"登录成功"}:{code:2,text:"验证码有误，登录失败"}}a.a.mock("/news/index","post",c),a.a.mock("/getVerificatCode","post",s),a.a.mock("/login","post",u)},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:{"platform-android":!0},attrs:{id:"app"}},[t("router-view")],1)},r=[],c={created:function(){},mounted:function(){},methods:{}},i=c,s=(t("5c0b"),t("2877")),u=Object(s["a"])(i,a,r,!1,null,null,null),l=u.exports,d=(t("99af"),t("d3b7"),t("284c")),f=t("8c4f"),h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main-div"},[t("keep-alive",[t("router-view")],1),t("Tabs")],1)},m=[],p=t("0418"),g=t("b50c"),b={components:{Header:p["a"],Tabs:g["a"]},data:function(){return{active:0,nowPath:""}},created:function(){},updated:function(){},methods:{}},v=b,w=Object(s["a"])(v,h,m,!1,null,"aa1d2762",null),k=w.exports,y=[{path:"/",redirect:"/home"},{path:"/",name:"Main",component:k,children:[{path:"/home",name:"home",component:function(){return t.e("chunk-258903d8").then(t.bind(null,"df8c"))}},{path:"/study",name:"study",component:function(){return t.e("chunk-2d0af06d").then(t.bind(null,"0d25"))}},{path:"/work",name:"work",component:function(){return t.e("chunk-2d238467").then(t.bind(null,"ff4e"))}},{path:"/me",name:"me",component:function(){return t.e("chunk-2d0c910a").then(t.bind(null,"580a"))}}]},{path:"/modules/details",name:"workDetails",component:function(){return t.e("chunk-1a1fc911").then(t.bind(null,"23c5"))}}],E="/modules",S=[{path:E+"/foo1",name:"Foo1",component:function(){return t.e("chunk-7e39ebe0").then(t.bind(null,"b5b3"))}},{path:E+"/foo2",name:"Foo2",component:function(){return t.e("chunk-65a3b148").then(t.bind(null,"cb30"))}},{path:E+"/foo3",name:"Foo3",component:function(){return t.e("chunk-2d2252a2").then(t.bind(null,"e2dc"))}}],T=[].concat(Object(d["a"])(y),Object(d["a"])(S),[{path:"/404",name:"404",meta:{id:404,title:"404"},component:function(){return t.e("chunk-79a74dd2").then(t.bind(null,"e371"))}},{path:"*",redirect:"/404"}]);o["a"].use(f["a"]);var P=function(){return new f["a"]({scrollBehavior:function(){return{y:0}},routes:T})},_=P(),O=f["a"].prototype.push;f["a"].prototype.push=function(e){return O.call(this,e).catch((function(e){return e}))};var I=_,C=t("2f62");o["a"].use(C["a"]);var A=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=(t("0d03"),t("ac1f"),t("1276"),t("d399")),R=t("6850");o["a"].use(L["a"]);var B=function(){document.addEventListener("deviceready",(function(){StatusBar.show(),Object(R["p"])(),Object(R["h"])()}),!1),document.addEventListener("backbutton",(function(e){N()}),!1)},N=function(){var e=(new Date).getTime(),n=location.hash.split("/")[1];console.log(n),""===n||"home"===n||"study"===n||"work"===n||"me"===n?(new Date).getTime()-e<2e3?navigator.app.exitApp():(e=(new Date).getTime(),Object(L["a"])("再按一次退出应用")):history.back()};B();var x=t("b970"),D=(t("157a"),t("a27e"));t("08f9"),o["a"].config.productionTip=!1,o["a"].prototype.axios=D["a"],o["a"].use(x["a"]),new o["a"]({router:I,store:A,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var o=t("9c0c"),a=t.n(o);a.a},6850:function(e,n,t){"use strict";t.d(n,"q",(function(){return i})),t.d(n,"j",(function(){return s})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return l})),t.d(n,"i",(function(){return d})),t.d(n,"l",(function(){return f})),t.d(n,"n",(function(){return h})),t.d(n,"p",(function(){return m})),t.d(n,"k",(function(){return p})),t.d(n,"o",(function(){return g})),t.d(n,"g",(function(){return b})),t.d(n,"e",(function(){return v})),t.d(n,"a",(function(){return w})),t.d(n,"f",(function(){return k})),t.d(n,"h",(function(){return y})),t.d(n,"b",(function(){return S})),t.d(n,"m",(function(){return T}));t("a4d3"),t("e01a"),t("d3b7");var o=t("2fa7"),a=t("2b0e"),r=t("d399"),c=t("2241");a["a"].use(r["a"],c["a"]);var i=function(){return new Promise((function(e,n){function t(n){e(n)}function o(e){n(e)}navigator.camera.getPicture(t,o,{quality:50,destinationType:Camera.DestinationType.FILE_URI,sourceType:0})}))},s=function(){return new Promise((function(e,n){var t=window.ImagePicker;t.getPictures((function(n){e(n)}),(function(e){n(e)}),{maximumImagesCount:6,width:1920,height:1440,quality:100})}))},u=function(){return new Promise((function(e,n){cordova.plugins.barcodeScanner.scan((function(n){e(n)}),(function(e){n(e)}),{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,saveHistory:!0,prompt:"在扫描区域内放置二维码",resultDisplayDuration:500,formats:"QR_CODE,PDF_417",orientation:"portrait",disableAnimations:!0,disableSuccessBeep:!1})}))},l=function(e){cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE,e,(function(e){alert("encode success: "+e)}),(function(e){alert("encoding failed: "+e)}))},d=function(e){return new Promise((function(n,t){function o(e){n(e)}function a(e){t(e)}navigator.vibrate(500),navigator.geolocation.getCurrentPosition(o,a,{maximumAge:3e4,timeout:3e4,enableHighAccuracy:e})}))},f=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o="/src/assets/back_button.png",a="/src/assets/close_button.png",r={statusbar:{color:"#FFFFFF"},toolbar:{height:44,color:"#FFFFFF"},title:{color:"#000000",staticText:t,showPageTitle:""===t!==!0},closeButton:{wwwImage:a,wwwImagePressed:a,wwwImageDensity:2,align:"left",event:"closePressed"},backButton:{wwwImage:o,wwwImagePressed:o,wwwImageDensity:2,align:"left",event:"backPressed"},backButtonCanClose:!0,disableAnimation:!0};cordova.ThemeableBrowser.open(e,!0===n?"_blank":"_system",r).addEventListener("backPressed",(function(e){console.log("back pressed")})).addEventListener("helloPressed",(function(e){console.log("hello pressed")})).addEventListener("sharePressed",(function(e){console.log(e.url)})).addEventListener(cordova.ThemeableBrowser.EVT_ERR,(function(e){console.error(e)})).addEventListener(cordova.ThemeableBrowser.EVT_WRN,(function(e){console.log(e)}))};function h(e){window.cordova&&window.cordova.plugins.settings?(console.log("openNativeSettingsTest is active"),window.cordova.plugins.settings.open(e,(function(){console.log("opened settings")}),(function(){console.log("failed to open settings")}))):console.log("openNativeSettingsTest is not active!")}function m(){function e(e){switch(Object(r["a"])(e),e){case window.SyncStatus.UP_TO_DATE:console.log("该应用程序与配置的部署完全更新。");break;case window.SyncStatus.UPDATE_INSTALLED:console.log("一个可用的更新已经安装，并将在回调函数返回后立即运行，或者下次应用程序恢复/重新启动时运行，具体取决于InstallMode在SyncOptions.");break;case window.SyncStatus.UPDATE_IGNORED:console.log("该应用程序有一个可选的更新，最终用户选择忽略它");break;case window.SyncStatus.ERROR:console.log("在sync行动。在与服务器通信、下载或解压缩更新时，这可能是一个错误。控制台日志应该包含更多关于发生了什么的信息。在这种情况下没有应用任何更新。");break;case window.SyncStatus.IN_PROGRESS:console.log("另一个同步已在运行，因此此同步尝试已被中止。");break;case window.SyncStatus.CHECKING_FOR_UPDATE:console.log("正在查询CodePush服务器以获得更新。");break;case window.SyncStatus.AWAITING_USER_ACTION:console.log("更新可用，并向最终用户显示确认对话框。(仅在updateDialog使用)");break;case window.SyncStatus.DOWNLOADING_PACKAGE:console.log("正在从CodePush服务器下载可用的更新。");break;case window.SyncStatus.INSTALLING_UPDATE:console.log("下载并即将安装一个可用的更新。");break}}function n(e){console.log("Downloading "+e.receivedBytes+" of "+e.totalBytes+" bytes.")}window.codePush.sync(e,Object(o["a"])({installMode:window.InstallMode.ON_NEXT_RESUME,updateDialog:!0},"updateDialog",{updateTitle:"更新提示",optionalUpdateMessage:"有新版本了，是否更新？",optionalInstallButtonLabel:"立即更新",optionalIgnoreButtonLabel:"稍后",mandatoryContinueButtonLabel:"继续",mandatoryUpdateMessage:"必须安装的更新可用。"}),n)}function p(e){Baiduasrtts.initTTSconfig((function(e){}),(function(e){})),Baiduasrtts.synthesizeSpeech(e,(function(e){}),(function(e){}))}function g(){return new Promise((function(e,n){Baiduasrtts.startSpeechRecognize(null,(function(n){e(n)}),(function(e){n(e)}))}))}function b(){return new Promise((function(e,n){Baiduasrtts.closeSpeechRecognize(null,(function(n){e(n)}),(function(e){n(e)}))}))}function v(){return new Promise((function(e,n){Baiduasrtts.cancelSpeechRecognize(null,(function(n){e(n)}),(function(e){n(e)}))}))}function w(){return new Promise((function(e,n){Baiduasrtts.addEventListener((function(n){if(n){switch(n.type){case"asrReady":document.getElementById("v_status").innerHTML="识别工作开始，开始采集及处理数据";break;case"asrBegin":document.getElementById("v_status").innerHTML="检测到用户开始说话";break;case"asrEnd":document.getElementById("v_status").innerHTML="本地声音采集结束，等待识别结果返回并结束录音";break;case"asrText":var t=JSON.parse(n.message),o=t["results_recognition"];document.getElementById("v_result").innerHTML=o;break;case"asrFinish":var a=document.getElementById("v_result").innerHTML;Baiduasrtts.synthesizeSpeech(a,(function(e){}),(function(e){}));break;case"asrCancel":break;default:break}e(n)}}),(function(e){document.getElementById("v_status").innerHTML="未检测到语音识别数据",n(e)}))}))}function k(){return new Promise((function(e,n){var t=cordova.plugins.permissions;t.checkPermission(t.WRITE_EXTERNAL_STORAGE,(function(n){n.hasPermission||t.requestPermission(t.WRITE_EXTERNAL_STORAGE,(function(n){n.hasPermission?e(res):console.log("申请失败")}),(function(e){console.log(e)}))}),(function(e){console.log(e),n(err)}))}))}function y(){window.sqlitePlugin.openDatabase({name:"my.db",location:"default",androidDatabaseImplementation:2},(function(e){e.transaction((function(e){E()}),(function(e){console.log("Open database ERROR: "+JSON.stringify(e))}))}))}function E(){db.transaction((function(e){e.executeSql("CREATE TABLE customerAccounts (firstname, lastname, acctNo)")}),(function(e){console.log("transaction error: "+e.message)}),(function(){console.log("transaction ok")}))}function S(e,n,t){db.transaction((function(o){var a="INSERT INTO customerAccounts (firstname, lastname, acctNo) VALUES (?,?,?)";o.executeSql(a,[e,n,t],(function(e,n){console.log("insertId: "+n.insertId+" -- probably 1"),console.log("rowsAffected: "+n.rowsAffected+" -- should be 1")}),(function(e,n){console.log("INSERT error: "+n.message)}))}),(function(e){console.log("transaction error: "+e.message)}),(function(){console.log("transaction ok")}))}function T(){return new Promise((function(e,n){db.transaction((function(n){var t="SELECT firstname, lastname, acctNo FROM customerAccounts WHERE acctNo > 100";n.executeSql(t,[],(function(n,t){e(t);for(var o=0;o<t.rows.length;o++)console.log("First name: "+t.rows.item(o).firstname+", Acct: "+t.rows.item(o).acctNo)}),(function(e,n){console.log("SELECT error: "+n.message)}))}),(function(e){console.log("transaction error: "+e.message)}),(function(){console.log("transaction ok")}))}))}},"9c0c":function(e,n,t){},a27e:function(e,n,t){"use strict";t("d3b7");var o=t("bc3a"),a=t.n(o);function r(e,n){return new Promise((function(t,o){a.a.get(e,n).then((function(e){t(e.data)})).catch((function(e){o(e.data)}))}))}function c(e,n){return new Promise((function(t,o){a.a.post(e,n).then((function(e){t(e.data)})).catch((function(e){o(e)}))}))}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{method:null,url:null,params:null};return new Promise((function(n,t){"get"==e.method?n(r(e.url,e.params)):"post"==e.method&&n(c(e.url,e.params))}))}a.a.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.interceptors.request.use((function(e){var n=localStorage.getItem("userToken");return n&&(e.headers.accessToken=n),e}),(function(e){return Promise.reject(e)})),a.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["a"]=i},b50c:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("van-tabbar",{attrs:{route:"","active-color":"#07c160","inactive-color":"#000"}},e._l(e.tabs,(function(n,o){return t("van-tabbar-item",{key:o,attrs:{label:n.label,icon:n.icon,to:n.to}},[e._v(e._s(n.label))])})),1)},a=[],r={data:function(){return{tabs:[{label:"首页",icon:"home-o",to:"/home"},{label:"学习",icon:"friends-o",to:"/study"},{label:"工作",icon:"search",to:"/work"},{label:"我的",icon:"setting-o",to:"/me"}]}},methods:{changeTabbar:function(e){switch(console.log(e),e){case 0:this.$router.push({name:"ShoppingMall"});break;case 1:this.$router.push({name:"CategoryList"});break;case 2:this.$router.push({name:"Cart"});break;case 3:this.$router.push({name:"MyIndex"});break}}}},c=r,i=t("2877"),s=Object(i["a"])(c,o,a,!1,null,"6d1bdbaf",null);n["a"]=s.exports}});
(function(e){function t(t){for(var n,o,u=t[0],l=t[1],c=t[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"input-group"},[r("div",{staticClass:"form-outline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchedQuery,expression:"searchedQuery"}],staticClass:"form-control",attrs:{type:"search",id:"searchForm"},domProps:{value:e.searchedQuery},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.apiCall(["movie","tv"],e.searchedQuery)},input:function(t){t.target.composing||(e.searchedQuery=t.target.value)}}}),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.apiCall(["movie","tv"],e.searchedQuery)}}},[r("span",[e._v("cerca")])])])]),r("ul",[e._l(e.apiData.movie,(function(t,n){return r("li",{key:"movie_"+n},[e._v(" "+e._s("Titolo: "+t[e.returnMovieOrSeriesKey("movie","title")]+", Titolo originale: "+t[e.returnMovieOrSeriesKey("movie","original_title")]+", Lingua originale: "+t[e.returnMovieOrSeriesKey("movie","original_language")]+", Voto: "+t[e.returnMovieOrSeriesKey("movie","vote_average")])+" "),r("img",{attrs:{src:e.createFlagUrl(t.flag),alt:"flag_"+t.flag}})])})),e._l(e.apiData.tv,(function(t,n){return r("li",{key:"tvShow_"+n},[e._v(" "+e._s("Titolo: "+t[e.returnMovieOrSeriesKey("tv","title")]+", Titolo originale: "+t[e.returnMovieOrSeriesKey("tv","original_title")]+", Lingua originale: "+t[e.returnMovieOrSeriesKey("tv","original_language")]+", Voto: "+t[e.returnMovieOrSeriesKey("tv","vote_average")])+" "),r("img",{attrs:{src:e.createFlagUrl(t.flag),alt:"flag_"+t.flag}})])}))],2)])},i=[],o=(r("d3b7"),r("159b"),r("caad"),r("2532"),r("bc3a")),u=r.n(o),l={name:"App",components:{},data:function(){return{apiKey:"0100ff849241e864745d64742edcb728",apiBaseUrl:"https://api.themoviedb.org/3",apiEndpoints:{movie:"/search/movie",tv:"/search/tv"},apiData:{movie:[],tv:[]},languageCodes:["it","pt","es","en","ja","de","fr","sv","hr","ar"],countryCodes:["it","pt","es","us","jp","de","fr","sv","hr","ar"],searchedQuery:""}},methods:{apiCall:function(e,t){var r=this;e.forEach((function(e){u.a.get(r.apiBaseUrl+r.apiEndpoints[e],{params:{api_key:r.apiKey,query:t}}).then((function(t){r.apiData[e]=[],t.data.results.forEach((function(t){var n=t.original_language;console.log(n);var a=n;if(r.languageCodes.includes(n)){switch(n){case"en":a="us";break;case"ja":a="jp";break}t["flag"]=a}r.apiData[e].push(t)}))}))}))},createFlagUrl:function(e){var t="";return this.countryCodes.includes(e)&&(t="https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(e.toUpperCase(),".svg")),t},returnMovieOrSeriesKey:function(e,t){if("movie"===e){if("title"===t)return"title";if("original_title"===t)return"original_title";if("original_language"===t)return"original_language";if("vote_average"===t)return"vote_average"}else{if("title"===t)return"name";if("original_title"===t)return"original_name";if("original_language"===t)return"original_language";if("vote_average"===t)return"vote_average"}}},computed:{},mounted:function(){}},c=l,s=(r("5c0b"),r("2877")),p=Object(s["a"])(c,a,i,!1,null,null,null),f=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.c4d4b647.js.map
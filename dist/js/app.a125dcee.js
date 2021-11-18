(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header",{on:{startSearch:t.setSearchQuery}}),a("Main",{attrs:{apiData:this.apiData}})],1)},i=[],s=a("bc3a"),o=a.n(s),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-container"},[a("h1",[t._v("BOOLFLIX")]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{type:"text",placeholder:"search","aria-label":"search","aria-describedby":"button-addon2"},domProps:{value:t.searchQuery},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.startSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:t.startSearch}},[t._v("Search")])])])},c=[],u={name:"Header",data:function(){return{searchQuery:""}},methods:{startSearch:function(){this.$emit("startSearch",this.searchQuery)}}},p=u,d=a("2877"),h=Object(d["a"])(p,l,c,!1,null,null,null),f=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"cards-container"},[t._l(t.apiData["movie"],(function(t,e){return a("Card",{key:"movie_"+e,attrs:{data:t}})})),t._l(t.apiData["tv"],(function(t,e){return a("Card",{key:"tvShow_"+e,attrs:{data:t}})}))],2)])},g=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("img",{staticClass:"poster",attrs:{src:t.posterPath,alt:"Poster: "+t.title}}),a("div",{staticClass:"card-text"},[a("img",{staticClass:"flag",attrs:{src:t.flagUrl,alt:"flag_"+t.data.original_language}}),a("h3",{staticClass:"card-title"},[a("strong",[t._v(t._s(t.title))])]),""!==t.originalTitle?a("div",{staticClass:"original-title"},[a("strong",[t._v("Titolo originale")]),t._v(": "+t._s(t.originalTitle))]):t._e(),a("div",{staticClass:"vote"},[a("span",[a("strong",[t._v("Voto")]),t._v(": "+t._s(t.vote)+"/5")]),t._l(t.vote,(function(t){return a("i",{key:t,staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}})})),t._l(5-t.vote,(function(t){return a("i",{key:t,staticClass:"fa fa-star-o",attrs:{"aria-hidden":"true"}})}))],2),""!==t.overview?a("p",{staticClass:"overview"},[a("strong",[t._v("Overview")]),t._v(": "+t._s(t.overview))]):t._e()])])},_=[],y=(a("b0c0"),{name:"Card",props:{data:Object},data:function(){return{flagCodes:{it:"it",pt:"pt",es:"es",en:"us",ja:"jp",de:"de",fr:"fr",sv:"sv",hr:"hr",ar:"ar"},images:{imageBaseUrl:"https://image.tmdb.org/t/p/",poster_sizes:["w92","w154","w185","w342","w500","w780","original"]}}},computed:{title:function(){return this.data.title||this.data.name},originalTitle:function(){return this.data.original_title===this.data.title||this.data.original_name||this.data.name?"":this.data.original_title||this.data.original_name},posterPath:function(){return this.data.poster_path?this.images.imageBaseUrl+this.images.poster_sizes[3]+this.data.poster_path:"https://via.placeholder.com/300x450?text=No+poster+found"},flagUrl:function(){if(!this.flagCodes[this.data.original_language])return"https://via.placeholder.com/55x40?text=No+flag+found";var t=this.flagCodes[this.data.original_language];return"https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(t.toUpperCase(),".svg")},vote:function(){var t=0===this.data.vote_average?0:Math.ceil(this.data.vote_average/2);return t},overview:function(){return this.data.overview||""}}}),b=y,C=Object(d["a"])(b,m,_,!1,null,null,null),w=C.exports,O={name:"Main",components:{Card:w},props:{apiData:Object}},x=O,j=Object(d["a"])(x,v,g,!1,null,null,null),k=j.exports,S={name:"App",components:{Main:k,Header:f},data:function(){return{apiKey:"0100ff849241e864745d64742edcb728",apiBaseUrl:"https://api.themoviedb.org/3",apiEndpoints:{movie:"/search/movie",tv:"/search/tv"},apiData:{movie:[],tv:[]},searchedQuery:""}},methods:{apiCall:function(){var t=this,e=function(e){if(Object.hasOwnProperty.call(t.apiEndpoints,e)){var a=t.apiEndpoints[e];o.a.get(t.apiBaseUrl+a,{params:{api_key:t.apiKey,query:t.searchedQuery}}).then((function(a){t.apiData[e]=a.data.results}))}};for(var a in this.apiEndpoints)e(a)},setSearchQuery:function(t){this.searchedQuery=t,this.apiCall()}}},P=S,Q=(a("5c0b"),Object(d["a"])(P,n,i,!1,null,null,null)),E=Q.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.a125dcee.js.map
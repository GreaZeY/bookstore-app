(this["webpackJsonpmy-movie-list"]=this["webpackJsonpmy-movie-list"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(0),s=a(21),r=a.n(s),i=(a(77),a(11)),o=a(12),l=a(5),u=(a(78),a(56)),j=a.n(u),d=a(6),b=a(8),O=a.n(b),p=a(15),f="LOGIN_REQUEST",m="LOGIN_SUCCESS",h="LOGIN_FAIL",v="REGISTER_USER_REQUEST",x="REGISTER_USER_SUCCESS",g="REGISTER_USER_FAIL",E="LOAD_USER_REQUEST",y="LOAD_USER_SUCCESS",S="LOAD_USER_FAIL",w="LOGOUT_SUCCESS",_="LOGOUT_FAIL",N="UPDATE_PROFILE_REQUEST",R="UPDATE_PROFILE_SUCCESS",C="UPDATE_PROFILE_RESET",T="UPDATE_PROFILE_FAIL",U="UPDATE_PASSWORD_REQUEST",L="UPDATE_PASSWORD_SUCCESS",A="UPDATE_PASSWORD_RESET",P="UPDATE_PASSWORD_FAIL",F="FORGOT_PASSWORD_REQUEST",D="FORGOT_PASSWORD_SUCCESS",I="FORGOT_PASSWORD_FAIL",k="RESET_PASSWORD_REQUEST",q="RESET_PASSWORD_SUCCESS",M="RESET_PASSWORD_FAIL",V="UPDATE_USER_REQUEST",Q="UPDATE_USER_SUCCESS",B="UPDATE_USER_RESET",G="UPDATE_USER_FAIL",H="DELETE_USER_REQUEST",W="DELETE_USER_SUCCESS",J="DELETE_USER_FAIL",z="DELETE_USER_RESET",$="CLEAR_ERRORS",Y=a(17),K=a.n(Y),X=function(){return function(){var e=Object(p.a)(O.a.mark((function e(t){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:E}),e.next=4,K.a.get("/api/v1/me");case 4:a=e.sent,c=a.data,t({type:y,payload:c.user}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:S,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},Z=function(){return function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.get("/api/v1/logout");case 3:t({type:w}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:_,payload:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},ee=function(){return function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:$});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=a(9),ae=a(57),ce=a.n(ae),ne=a(58),se=a.n(ne),re=a(59),ie=a.n(re),oe="DISCOVER_REQUEST",le="DISCOVER_SUCCESS",ue="DISCOVER_FAIL",je="POPULAR_REQUEST",de="POPULAR_SUCCESS",be="POPULAR_FAIL",Oe="FAVORITE_REQUEST",pe="FAVORITE_SUCCESS",fe="FAVORITE_FAIL",me="ADD_FAVORITE_REQUEST",he="ADD_FAVORITE_FAIL",ve="REMOVE_FAVORITE_REQUEST",xe="REMOVE_FAVORITE_FAIL",ge="LATEST_REQUEST",Ee="LATEST_SUCCESS",ye="LATEST_FAIL",Se="SEARCH_REQUEST",we="SEARCH_SUCCESS",_e="SEARCH_FAIL",Ne="MOVIE_DETAILS_REQUEST",Re="MOVIE_DETAILS_SUCCESS",Ce="MOVIE_DETAILS_FAIL",Te="CLEAR_ERRORS",Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var c=Object(p.a)(O.a.mark((function c(n){var s,r,i,o;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n({type:oe}),s="/api/v1/".concat(t),r={headers:{"Content-Type":"application/json"}},c.next=6,K.a.post(s,{pageNumber:e,query:a},r);case 6:i=c.sent,o=i.data,n({type:le,payload:o}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),n({type:ue,payload:c.t0.response});case 14:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}()},Le=function(e,t){return function(){var a=Object(p.a)(O.a.mark((function a(c){var n,s,r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c({type:me}),n={headers:{"Content-Type":"application/json"}},"/api/v1/addtofavorites",a.next=6,K.a.post("/api/v1/addtofavorites",{userId:e,movieId:t},n);case 6:s=a.sent,r=s.data,c({type:"ADD_FAVORITE_SUCCESS",payload:r}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),c({type:he,payload:a.t0.response.data.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()},Ae=function(e){return function(){var t=Object(p.a)(O.a.mark((function t(a){var c,n,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:Oe}),c={headers:{"Content-Type":"application/json"}},"/api/v1/getfavlist",t.next=6,K.a.post("/api/v1/getfavlist",{userId:e},c);case 6:n=t.sent,s=n.data,a({type:pe,payload:s}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:fe,payload:t.t0.response.data.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},Pe=function(){return function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:Te});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Fe=a(1),De=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(o.f)(),r=Object(te.d)(),u=Object(d.b)(),b=Object(d.c)((function(e){return e.user})),O=b.isAuthenticated,p=b.user;Object(n.useEffect)((function(){u(X())}),[s,u]),Object(n.useEffect)((function(){!0===O&&u(Ae(p._id))}),[p,O,u]);return Object(Fe.jsxs)("div",{className:"header",children:[Object(Fe.jsxs)("div",{className:"left",children:[Object(Fe.jsx)(i.b,{to:"/",children:Object(Fe.jsx)("img",{draggable:"false",src:"/images/logo.png",alt:"My Movie List"})}),Object(Fe.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),a.trim()&&s.push("/movies/".concat(a))},children:[Object(Fe.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return c(e.target.value)}}),Object(Fe.jsx)("button",{type:"submit",children:Object(Fe.jsx)(j.a,{})})]})]}),Object(Fe.jsxs)("div",{className:"navlinks",children:[Object(Fe.jsx)(i.b,{to:"/popular",children:"Popular"}),Object(Fe.jsx)(i.b,{to:"/latest",children:"Latest"}),O?Object(Fe.jsx)(i.b,{to:"/login?redirect=favorites",children:"Favorites"}):"",O?Object(Fe.jsxs)("div",{className:"profile",children:[Object(Fe.jsx)("div",{className:"avatar",children:Object(Fe.jsx)(i.b,{to:"/profile",children:Object(Fe.jsx)("img",{src:p.avatar.url,alt:p.name})})}),Object(Fe.jsxs)("div",{className:"accMenu",children:[Object(Fe.jsxs)(i.b,{to:"/profile",children:[Object(Fe.jsx)(ce.a,{}),"Your Profile"]}),Object(Fe.jsxs)(i.b,{to:"/favorites",children:[Object(Fe.jsx)(se.a,{}),"Favourites"]}),Object(Fe.jsx)("a",{children:Object(Fe.jsxs)("button",{onClick:function(){u(Z()),r.success("Logged out Successfully")},children:[Object(Fe.jsx)(ie.a,{}),"Logout"]})})]})]}):Object(Fe.jsx)(i.b,{to:"/login",children:Object(Fe.jsx)("button",{children:"Sign In"})})]})]})},Ie=a(13),ke=(a(109),function(){return Object(Fe.jsx)("div",{class:"loading",children:Object(Fe.jsx)("svg",{viewBox:"0 0 80 80",children:Object(Fe.jsx)("circle",{id:"test",cx:"40",cy:"40",r:"32"})})})}),qe=(a(110),function(e){var t=e.movie,a=Object(d.c)((function(e){return e.user})),c=a.isAuthenticated,s=a.user,r=Object(d.c)((function(e){return e.UserFavList})),u=r.loading,j=r.favList,b=Object(d.b)(),O=Object(o.f)(),p=Object(o.g)(),f=Object(te.d)(),m=Object(n.useState)(!1),h=Object(l.a)(m,2),v=h[0],x=h[1],g="https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(t.poster_path);Object(n.useEffect)((function(){x(!1)}),[b,f,p,t]),Object(n.useEffect)((function(){!0===c&&b(Ae(s._id))}),[s,c,b,f,v,p,t]);return Object(n.useEffect)((function(){!0===c&&j&&j.UserFavList.favList.map((function(e){e.id===t.id&&x(!0)}))}),[t,p,u,c,O,b.alert]),Object(Fe.jsx)(n.Fragment,{children:u?"":Object(Fe.jsxs)("div",{className:"cardContainer",children:[Object(Fe.jsx)(i.b,{to:"/".concat(t.id,"/details/").concat(t.title),children:Object(Fe.jsxs)("div",{className:"movieCard",children:[Object(Fe.jsx)("div",{children:Object(Fe.jsx)("img",{dragable:"false",src:g,alt:t.title})}),Object(Fe.jsxs)("div",{className:"info",children:[Object(Fe.jsx)("h1",{children:t.title}),Object(Fe.jsx)("span",{children:t.vote_average})]}),Object(Fe.jsx)("p",{children:t.release_date})]})}),Object(Fe.jsx)("button",{onClick:function(){return e=t.id,void(!1===c?O.push("/login?redirect=favorites"):(x(!0),b(Le(s._id,e)),f.success("Added to favorites")));var e},className:"addToFav",children:"+Add to Favorites"})]},t.id)})}),Me=(a(111),a(60)),Ve=function(e){var t=e.title;return Object(Fe.jsx)(Me.a,{children:Object(Fe.jsx)("title",{children:t})})},Qe=function(e){var t=e.match,a=Object(te.d)(),c=Object(d.b)(),s=Object(n.useState)([]),r=Object(l.a)(s,2),i=r[0],u=r[1],j=Object(n.useState)(1),b=Object(l.a)(j,2),O=b[0],p=b[1],f=Object(o.g)();Object(n.useEffect)((function(){u([]),p(1)}),[f]);var m=Object(d.c)((function(e){return e.movies})),h=m.loading,v=m.error,x=m.movies,g=m.totalPages;return Object(n.useEffect)((function(){v&&(a.error(v),c(Pe())),c(Ue(O,"discover"))}),[c,v,a,O,t.params.query,f]),Object(n.useEffect)((function(){u((function(e){if(x)return[].concat(Object(Ie.a)(e),Object(Ie.a)(x))}))}),[x]),O<=g&&(window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight&&p(O+1)}),Object(n.useEffect)((function(){u([]),p(1)}),[t.params.query]),Object(Fe.jsxs)(n.Fragment,{children:[Object(Fe.jsx)(Ve,{title:"Capital Movies: Discover"}),Object(Fe.jsx)("img",{className:"banner",src:"/images/banner.jpg",alt:"banner"}),Object(Fe.jsx)("div",{className:"imageSpace"}),Object(Fe.jsxs)("div",{className:"imgbackdrop",children:[Object(Fe.jsx)("h1",{children:"What have you watched?"}),"Create your personalized list from tens of thousands of titles on the world\u2019s largest movie database."]}),Object(Fe.jsxs)("div",{className:"discover",children:[Object(Fe.jsx)("h1",{children:"Discover"}),Object(Fe.jsx)("div",{className:"movieContainer",children:i&&i.map((function(e){return Object(Fe.jsx)(qe,{movie:e})}))})]}),Object(Fe.jsx)("div",{className:"loader",children:h?Object(Fe.jsx)(ke,{}):""})]})},Be=function(e){var t=e.match,a=e.history,c=Object(te.d)(),s=Object(d.b)(),r=Object(n.useState)([]),i=Object(l.a)(r,2),o=i[0],u=i[1],j=Object(n.useState)(1),b=Object(l.a)(j,2),O=b[0],p=b[1],f=Object(d.c)((function(e){return e.movies})),m=f.loading,h=f.error,v=f.movies,x=f.totalPages;return Object(n.useEffect)((function(){h&&(c.error(h),s(Pe())),s(Ue(O,"latest"))}),[s,h,c,O,t.params.query]),Object(n.useEffect)((function(){u((function(e){if(v)return[].concat(Object(Ie.a)(e),Object(Ie.a)(v))}))}),[v]),O<=x&&(window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight&&(p(O+1),console.log("hit"))}),Object(n.useEffect)((function(){u([]),p(1)}),[t.params.query,a]),Object(Fe.jsxs)(n.Fragment,{children:[Object(Fe.jsx)(Ve,{title:"Latests"}),Object(Fe.jsxs)("div",{className:"discover",children:[Object(Fe.jsx)("h1",{children:"Latests"}),Object(Fe.jsx)("div",{className:"movieContainer",children:o.map((function(e){return Object(Fe.jsx)(qe,{movie:e})}))})]}),Object(Fe.jsx)("div",{className:"loader",children:m?Object(Fe.jsx)(ke,{}):""})]})},Ge=function(e){var t=e.match,a=e.history,c=Object(te.d)(),s=Object(d.b)(),r=Object(n.useState)([]),i=Object(l.a)(r,2),o=i[0],u=i[1],j=Object(n.useState)(1),b=Object(l.a)(j,2),O=b[0],p=b[1],f=Object(d.c)((function(e){return e.movies})),m=f.loading,h=f.error,v=f.movies,x=f.totalPages;return Object(n.useEffect)((function(){h&&(c.error(h),s(Pe())),s(Ue(O,"popular"))}),[s,h,c,O,t.params.query]),Object(n.useEffect)((function(){u((function(e){if(v)return[].concat(Object(Ie.a)(e),Object(Ie.a)(v))}))}),[v]),O<=x&&(window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight&&(p(O+1),console.log("hit"))}),Object(n.useEffect)((function(){u([]),p(1)}),[t.params.query,a]),Object(Fe.jsxs)(n.Fragment,{children:[Object(Fe.jsx)(Ve,{title:"Popular"}),Object(Fe.jsxs)("div",{className:"discover",children:[Object(Fe.jsx)("h1",{children:"Popular"}),Object(Fe.jsx)("div",{className:"movieContainer",children:o.map((function(e){return Object(Fe.jsx)(qe,{movie:e})}))})]}),Object(Fe.jsx)("div",{className:"loader",children:m?Object(Fe.jsx)(ke,{}):""})]})},He=(a(112),function(e){var t=e.match,a=(e.history,Object(d.b)()),c=Object(te.d)(),s=Object(d.c)((function(e){return e.movieDetails})),r=s.movie,i=s.loading,o=s.error;Object(n.useEffect)((function(){var e;o&&(c.error(o),a(Pe())),console.log("mid",t.params.id),a((e=t.params.id,function(){var t=Object(p.a)(O.a.mark((function t(a){var c,n,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:Ne}),c={headers:{"Content-Type":"application/json"}},t.next=6,K.a.post("/api/v1/moviedetails",{movieId:e},c);case 6:n=t.sent,s=n.data,a({type:Re,payload:s}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:Ce,payload:t.t0.response.data.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()))}),[a,t.params.id,c,o]);var l=r?"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(r.poster_path):"";return Object(Fe.jsx)(n.Fragment,{children:i?Object(Fe.jsx)("div",{className:"LoadingBackdrop",children:Object(Fe.jsx)(ke,{})}):Object(Fe.jsx)(n.Fragment,{children:Object(Fe.jsxs)("div",{className:"detailsContainer",children:[Object(Fe.jsx)("div",{className:"left",children:Object(Fe.jsx)("img",{src:l,alt:r.title})}),Object(Fe.jsxs)("div",{className:"right",children:[Object(Fe.jsx)("h1",{children:r.title}),Object(Fe.jsxs)("p",{className:"rating",children:["Status: ",r.status]}),Object(Fe.jsx)("p",{className:"rating",children:r.release_date}),Object(Fe.jsxs)("p",{className:"vote",children:[r.vote_average," Rating "," (".concat(r.vote_count," votes)")]}),Object(Fe.jsx)("div",{className:"genres",children:r.genres&&r.genres.map((function(e){return Object(Fe.jsxs)("p",{children:["\u2022 ",e.name]})}))}),Object(Fe.jsx)("p",{className:"tagline",children:r.tagline&&r.tagline}),Object(Fe.jsx)("h2",{children:"Synopsis"}),Object(Fe.jsx)("p",{children:r.overview}),Object(Fe.jsxs)("div",{className:"Sinfo",children:[Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)("h3",{children:"Budget"}),Object(Fe.jsxs)("p",{children:[" $",parseInt(r.budget/1e6)," M"]})]}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)("h3",{children:"Revenue"}),Object(Fe.jsxs)("p",{children:[" $",parseInt(r.revenue/1e6)," M"]})]}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)("h3",{children:"Original Language"}),Object(Fe.jsx)("p",{style:{textTransform:"uppercase"},children:r.original_language})]})]}),Object(Fe.jsx)("div",{className:"homepage",children:Object(Fe.jsx)("a",{href:r.homepage,target:"blank",children:"Visit Official Site"})})]})]})})})}),We=function(e){var t=e.match,a=Object(te.d)(),c=Object(d.b)(),s=Object(n.useState)([]),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(n.useState)(1),j=Object(l.a)(u,2),b=j[0],O=j[1],p=Object(d.c)((function(e){return e.movies})),f=p.loading,m=p.error,h=p.movies,v=p.totalPages;return Object(n.useEffect)((function(){m&&(a.error(m),c(Pe())),c(Ue(b,"search",t.params.query))}),[c,m,a,b,t.params.query]),Object(n.useEffect)((function(){o((function(e){if(h)return[].concat(Object(Ie.a)(e),Object(Ie.a)(h))}))}),[h,t.params.query]),Object(n.useEffect)((function(){o([]),O(1)}),[t.params.query]),b<=v&&(window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight&&O(b+1)}),Object(Fe.jsxs)(n.Fragment,{children:[Object(Fe.jsx)(Ve,{title:"Search results for ".concat(t.params.query)}),Object(Fe.jsx)("div",{className:"movieContainer",children:0===i.length?Object(Fe.jsx)("h1",{style:{fontSize:"3vmax",color:"rgb(0, 255, 191)"},children:f?"":"No Results found for ".concat(t.params.query," :(")}):i.map((function(e){return Object(Fe.jsx)(qe,{movie:e})}))}),Object(Fe.jsx)("div",{className:"loader",children:f?Object(Fe.jsx)(ke,{}):""})]})},Je=a(16),ze=(a(113),a(34)),$e=a.n(ze),Ye=a(27),Ke=a.n(Ye),Xe=a(64),Ze=a.n(Xe),et=a(63),tt=a.n(et),at=(a(114),function(){var e=Object(d.b)(),t=Object(te.d)(),a=Object(d.c)((function(e){return e.forgotPassword})),c=a.error,s=a.message,r=a.loading,i=Object(n.useState)(""),o=Object(l.a)(i,2),u=o[0],j=o[1];return Object(n.useEffect)((function(){c&&(t.error(c),e(ee())),s&&t.success(s)}),[e,c,t,s]),Object(Fe.jsx)(n.Fragment,{children:r?Object(Fe.jsx)("div",{className:"LoadingBackdrop",children:Object(Fe.jsx)(ke,{})}):Object(Fe.jsxs)(n.Fragment,{children:[Object(Fe.jsx)(Ve,{title:"Forgot Password"}),Object(Fe.jsxs)("div",{className:"forgotPasswordBox",children:[Object(Fe.jsx)("h2",{className:"forgotPasswordHeading",children:"Forgot Password"}),Object(Fe.jsxs)("form",{className:"forgotPasswordForm",onSubmit:function(t){t.preventDefault();var a=new FormData;a.set("email",u),e(function(e){return function(){var t=Object(p.a)(O.a.mark((function t(a){var c,n,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:F}),c={headers:{"Content-Type":"application/json"}},t.next=5,K.a.post("/api/v1/password/forgot",e,c);case 5:n=t.sent,s=n.data,a({type:D,payload:s.message}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:I,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(a))},children:[Object(Fe.jsxs)("div",{className:"forgotPasswordEmail",children:[Object(Fe.jsx)($e.a,{}),Object(Fe.jsx)("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(Fe.jsx)("input",{type:"submit",value:"Send",className:"forgotPasswordBtn"})]})]})]})})}),ct=function(e){var t=e.history,a=e.location,s=Object(d.b)(),r=Object(te.d)();Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var i=Object(d.c)((function(e){return e.user})),o=i.error,u=i.loading,j=i.isAuthenticated,b=Object(n.useRef)(null),E=Object(n.useRef)(null),y=Object(n.useRef)(null),S=Object(n.useState)(""),w=Object(l.a)(S,2),_=w[0],N=w[1],R=Object(n.useState)(""),C=Object(l.a)(R,2),T=C[0],U=C[1],L=Object(n.useState)({name:"",email:"",password:"",mobileNo:""}),A=Object(l.a)(L,2),P=A[0],F=A[1],D=P.name,I=P.email,k=P.password,q=P.mobileNo,M=Object(n.useState)(void 0),V=Object(l.a)(M,2),Q=V[0],B=V[1],G=Object(n.useState)("/images/Profile.png"),H=Object(l.a)(G,2),W=H[0],J=H[1],z=Object(n.useState)(!1),$=Object(l.a)(z,2),Y=$[0],X=$[1],Z=function(e){if("avatar"===e.target.name){var t=new FileReader;t.onload=function(){2===t.readyState&&t.result&&(J(t.result),B(t.result))},e.target.files[0]&&t.readAsDataURL(e.target.files[0])}else F(Object(c.a)(Object(c.a)({},P),{},Object(Je.a)({},e.target.name,e.target.value)))},ae=a.search?a.search.split("=")[1]:null;Object(n.useEffect)((function(){o&&("Duplicate email Entered."===o?r.error("A user is already registered with this email"):r.error(o),s(ee())),j&&(ae?t.push(ae):window.history.back())}),[s,o,r,t,j,ae]);var ce=function(e,t){"login"===t&&(y.current.classList.add("shiftToNeutral"),y.current.classList.remove("shiftToRight"),document.title="Login",E.current.classList.remove("shiftToNeutralForm"),b.current.classList.remove("shiftToLeft")),"register"===t&&(y.current.classList.add("shiftToRight"),y.current.classList.remove("shiftToNeutral"),document.title="Register",E.current.classList.add("shiftToNeutralForm"),b.current.classList.add("shiftToLeft"))};return Object(Fe.jsx)(n.Fragment,{children:u?Object(Fe.jsx)("div",{className:"LoadingBackdrop",children:Object(Fe.jsx)(ke,{})}):Object(Fe.jsx)(n.Fragment,{children:Object(Fe.jsx)("div",{className:"LoginSignUpContainer",children:Y?Object(Fe.jsx)(at,{}):Object(Fe.jsxs)("div",{className:"LoginSignUpBox",children:[Object(Fe.jsx)(Ve,{title:"Login"}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsxs)("div",{className:"login_signUp_toggle",children:[Object(Fe.jsx)("p",{onClick:function(e){return ce(0,"login")},children:"LOGIN"}),Object(Fe.jsx)("p",{onClick:function(e){return ce(0,"register")},children:"REGISTER"})]}),Object(Fe.jsx)("button",{ref:y})]}),Object(Fe.jsxs)("form",{className:"loginForm",ref:b,onSubmit:function(e){e.preventDefault(),s(function(e,t){return function(){var a=Object(p.a)(O.a.mark((function a(c){var n,s,r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c({type:f}),n={headers:{"Content-Type":"application/json"}},a.next=5,K.a.post("/api/v1/login",{email:e,password:t},n);case 5:s=a.sent,r=s.data,c({type:m,payload:r.user}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),c({type:h,payload:a.t0.response.data.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(_,T))},children:[Object(Fe.jsxs)("div",{className:"loginEmail",children:[Object(Fe.jsx)($e.a,{}),Object(Fe.jsx)("input",{type:"email",placeholder:"Email",required:!0,value:_,onChange:function(e){return N(e.target.value)}})]}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)(Ke.a,{}),Object(Fe.jsx)("input",{type:"password",placeholder:"Password",required:!0,value:T,onChange:function(e){return U(e.target.value)}})]}),Object(Fe.jsx)("p",{className:"forgot",onClick:function(){return X(!0)},children:"Forgot Password?"}),Object(Fe.jsx)("input",{type:"submit",value:"Login",className:"loginBtn"})]}),Object(Fe.jsxs)("form",{className:"signUpForm",ref:E,encType:"multipart/form-data",onSubmit:function(e){e.preventDefault();var t,a=new FormData;a.set("name",D),a.set("email",I),a.set("mobileNo",q),a.set("password",k),Q&&a.set("avatar",Q),s((t=a,function(){var e=Object(p.a)(O.a.mark((function e(a){var c,n,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:v}),c={headers:{"Content-Type":"multipart/form-data"}},e.next=5,K.a.post("/api/v1/register",t,c);case 5:n=e.sent,s=n.data,a({type:x,payload:s.user}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:g,payload:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(Fe.jsxs)("div",{className:"signUpName",children:[Object(Fe.jsx)(tt.a,{}),Object(Fe.jsx)("input",{type:"text",placeholder:"Name",required:!0,name:"name",value:D,onChange:Z})]}),Object(Fe.jsxs)("div",{className:"signUpEmail",children:[Object(Fe.jsx)($e.a,{}),Object(Fe.jsx)("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:I,onChange:Z})]}),Object(Fe.jsxs)("div",{className:"signUpMobileNo",children:[Object(Fe.jsx)(Ze.a,{}),Object(Fe.jsx)("input",{type:"Number",placeholder:"Mobile no.",required:!0,name:"mobileNo",value:q,onChange:Z})]}),Object(Fe.jsxs)("div",{className:"signUpPassword",children:[Object(Fe.jsx)(Ke.a,{}),Object(Fe.jsx)("input",{type:"password",placeholder:"Password",required:!0,name:"password",value:k,onChange:Z})]}),Object(Fe.jsxs)("div",{id:"registerImage",children:[Object(Fe.jsx)("img",{src:W,alt:"Avatar Preview"}),Object(Fe.jsx)("input",{type:"file",name:"avatar",accept:"image/*",onChange:Z})]}),Object(Fe.jsx)("input",{type:"submit",value:"Register",className:"signUpBtn"})]})]})})})})},nt=a(70),st=["component"],rt=function(e){var t=e.component,a=Object(nt.a)(e,st),s=Object(d.c)((function(e){return e.user})),r=s.loading,i=s.isAuthenticated;return Object(Fe.jsx)(n.Fragment,{children:!1===r&&Object(Fe.jsx)(o.b,Object(c.a)(Object(c.a)({},a),{},{render:function(e){return i?Object(Fe.jsx)(t,Object(c.a)({},e)):Object(Fe.jsx)(o.a,{to:"/login"})}}))})},it=(a(116),a(117),a(66)),ot=a.n(it),lt=a(39),ut=a.n(lt),jt=a(65),dt=a.n(jt),bt=function(e){var t=e.history,a=Object(n.useState)(!1),c=Object(l.a)(a,2),s=c[0],r=c[1],o=Object(n.useState)(!1),u=Object(l.a)(o,2),j=u[0],b=u[1],f=Object(n.useState)(""),m=Object(l.a)(f,2),h=m[0],v=m[1],x=Object(n.useState)(""),g=Object(l.a)(x,2),E=g[0],y=g[1],S=Object(n.useState)(),w=Object(l.a)(S,2),_=w[0],A=w[1],F=Object(n.useState)(""),D=Object(l.a)(F,2),I=D[0],k=D[1],q=Object(n.useState)(""),M=Object(l.a)(q,2),V=M[0],Q=M[1],B=Object(n.useState)("/Profile.png"),G=Object(l.a)(B,2),H=G[0],W=G[1],J=Object(n.useState)(""),z=Object(l.a)(J,2),$=z[0],Y=z[1],ae=Object(n.useState)(""),ce=Object(l.a)(ae,2),ne=ce[0],se=ce[1],re=Object(n.useState)(""),ie=Object(l.a)(re,2),oe=ie[0],le=ie[1],ue=Object(d.c)((function(e){return e.user})),je=ue.user,de=ue.loading,be=ue.isAuthenticated,Oe=Object(d.c)((function(e){return e.profile})),pe=Oe.error,fe=Oe.isUpdated,me=Oe.loading,he=Object(d.b)(),ve=Object(te.d)();Object(n.useEffect)((function(){be||t.push("/login")}),[t,be]),Object(n.useEffect)((function(){je&&(v(je.name),y(je.email),W(je.avatar.url),k(je.mobileNo)),pe&&(ve.error(pe),he(ee())),fe&&(ve.success(V),he(X()),he({type:C}))}),[he,pe,ve,t,je,fe,V]);return Object(Fe.jsx)(n.Fragment,{children:de|me?Object(Fe.jsx)("div",{className:"LoadingBackdrop",children:Object(Fe.jsx)(ke,{})}):Object(Fe.jsx)("div",{children:je?Object(Fe.jsxs)("div",{className:"profileContainer",children:[Object(Fe.jsx)(Ve,{title:"".concat(je.name,"'s Profile")}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)("h1",{children:"My Profile"}),s?Object(Fe.jsxs)("div",{class:"profile-pic",children:[Object(Fe.jsx)("label",{class:"-label",for:"file",children:Object(Fe.jsx)(dt.a,{})}),Object(Fe.jsx)("input",{id:"file",type:"file",onChange:function(e){var t=new FileReader;t.onload=function(){2===t.readyState&&(W(t.result),A(t.result))},t.readAsDataURL(e.target.files[0])}}),Object(Fe.jsx)("img",{src:H,alt:je.name})]}):Object(Fe.jsx)("img",{src:je.avatar?je.avatar.url:"",alt:je.name}),s?Object(Fe.jsx)("button",{onClick:function(){if(h===je.name&&E===je.email&&I===je.mobileNo&&H===je.avatar.url)ve.error("Nothing has changed.");else{var e=new FormData;e.set("name",h),e.set("email",E),e.set("avatar",_),e.set("mobileNo",I),he((t=e,function(){var e=Object(p.a)(O.a.mark((function e(a){var c,n,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:N}),c={headers:{"Content-Type":"multipart/form-data"}},e.next=5,K.a.put("/api/v1/me/update",t,c);case 5:n=e.sent,s=n.data,a({type:R,payload:s.success}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:T,payload:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),Q("Profile Updated Successfully")}var t},className:"update",style:{background:"rgb(34, 223, 175)"},children:"Update"}):j?"":Object(Fe.jsx)("button",{onClick:function(){r(!0)},className:"update",children:"Edit Profile"}),Object(Fe.jsx)("button",{onClick:s|j?function(){r(!1),b(!1)}:function(){he(Z()),ve.success("Logged out Successfully")},className:"logout",children:s|j?"Cancel":"Logout"})]}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)("h4",{children:"Full Name"}),s?Object(Fe.jsx)("input",{className:"updateInfo",type:"text",placeholder:"Name",required:!0,name:"name",value:h,onChange:function(e){return v(e.target.value)}}):Object(Fe.jsx)("p",{children:je.name})]}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)("h4",{children:"Email"}),s?Object(Fe.jsx)("input",{className:"updateInfo",type:"email",placeholder:"Email",required:!0,name:"email",value:E,onChange:function(e){return y(e.target.value)}}):Object(Fe.jsx)("p",{children:je.email})]}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)("h4",{children:"Mobile No."}),s?Object(Fe.jsx)("input",{className:"updateInfo",type:"Number",placeholder:"Mobile No.",required:!0,name:"mobileNo",value:I,onChange:function(e){return k(e.target.value)}}):Object(Fe.jsx)("p",{children:je.mobileNo?je.mobileNo:"-"})]}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)("h4",{children:"Joined On"}),Object(Fe.jsx)("p",{children:String(je.createdAt).substr(0,10)})]}),Object(Fe.jsxs)("div",{children:[Object(Fe.jsx)(i.b,{to:"/favorites",children:"My Favorites"}),j?Object(Fe.jsxs)("form",{className:"updatePasswordForm",onSubmit:function(e){e.preventDefault();var t,a=new FormData;a.set("oldPassword",$),a.set("newPassword",ne),a.set("confirmPassword",oe),he((t=a,function(){var e=Object(p.a)(O.a.mark((function e(a){var c,n,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:U}),c={headers:{"Content-Type":"application/json"}},e.next=5,K.a.put("/api/v1/password/update",t,c);case 5:n=e.sent,s=n.data,a({type:L,payload:s.success}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:P,payload:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),Q("Password updated successfully")},children:[Object(Fe.jsxs)("div",{className:"loginPassword",children:[Object(Fe.jsx)(ot.a,{}),Object(Fe.jsx)("input",{type:"password",placeholder:"Old Password",required:!0,value:$,onChange:function(e){return Y(e.target.value)}})]}),Object(Fe.jsxs)("div",{className:"loginPassword",children:[Object(Fe.jsx)(Ke.a,{}),Object(Fe.jsx)("input",{type:"password",placeholder:"New Password",required:!0,value:ne,onChange:function(e){return se(e.target.value)}})]}),Object(Fe.jsxs)("div",{className:"loginPassword",children:[Object(Fe.jsx)(ut.a,{}),Object(Fe.jsx)("input",{type:"password",placeholder:"Confirm Password",required:!0,value:oe,onChange:function(e){return le(e.target.value)}})]}),Object(Fe.jsx)("button",{className:"update",style:{margin:0,marginTop:"1vmax",width:"100%",background:"rgb(34, 223, 175)"},type:"submit",children:"Update Password"})]}):"",j||s?"":Object(Fe.jsx)("button",{onClick:function(){return b(!0)},className:"update",style:{width:"100%",background:"rgb(68, 68, 68)",margin:0,marginTop:"1.2vmax"},children:"Change Password"})]})]})]}):""})})},Ot=(a(118),function(e){var t=e.history,a=e.match,c=Object(d.b)(),s=Object(te.d)(),r=Object(d.c)((function(e){return e.forgotPassword})),i=r.error,o=r.success,u=r.loading,j=Object(n.useState)(""),b=Object(l.a)(j,2),f=b[0],m=b[1],h=Object(n.useState)(""),v=Object(l.a)(h,2),x=v[0],g=v[1];return Object(n.useEffect)((function(){i&&(s.error(i),c(ee())),o&&(s.success("Password Updated Successfully"),c(X()),t.push("/"))}),[c,i,s,t,o]),Object(Fe.jsx)(n.Fragment,{children:u?Object(Fe.jsx)("div",{className:"LoadingBackdrop",children:Object(Fe.jsx)(ke,{})}):Object(Fe.jsxs)(n.Fragment,{children:[Object(Fe.jsx)(Ve,{title:"Change Password"}),Object(Fe.jsx)("div",{className:"resetPasswordContainer",children:Object(Fe.jsxs)("div",{className:"resetPasswordBox",children:[Object(Fe.jsx)("h2",{className:"resetPasswordHeading",children:"Update Password"}),Object(Fe.jsxs)("form",{className:"resetPasswordForm",onSubmit:function(e){e.preventDefault();var t,n,s=new FormData;s.set("password",f),s.set("confirmPassword",x),c((t=a.params.token,n=s,function(){var e=Object(p.a)(O.a.mark((function e(a){var c,s,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:k}),c={headers:{"Content-Type":"application/json"}},e.next=5,K.a.put("/api/v1/password/reset/".concat(t),n,c);case 5:s=e.sent,r=s.data,a({type:q,payload:r.success}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:M,payload:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(Fe.jsxs)("div",{className:"loginPassword",children:[Object(Fe.jsx)(Ke.a,{}),Object(Fe.jsx)("input",{type:"password",placeholder:"New Password",required:!0,value:f,onChange:function(e){return m(e.target.value)}})]}),Object(Fe.jsxs)("div",{className:"loginPassword",children:[Object(Fe.jsx)(ut.a,{}),Object(Fe.jsx)("input",{type:"password",placeholder:"Confirm Password",required:!0,value:x,onChange:function(e){return g(e.target.value)}})]}),Object(Fe.jsx)("input",{type:"submit",value:"Update",className:"resetPasswordBtn"})]})]})})]})})}),pt=(a(119),function(e){var t=e.movie,a=(e.favTab,Object(d.c)((function(e){return e.user}))),c=a.isAuthenticated,s=a.user,r=Object(d.c)((function(e){return e.UserFavList})).favList,o=Object(d.b)(),u=Object(te.d)(),j=Object(n.useState)(!1),b=Object(l.a)(j,2),f=b[0],m=b[1],h=t?"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(t.poster_path):"";Object(n.useEffect)((function(){!0===c&&o(Ae(s._id))}),[s,c,o,u]);var v=function(e,t){var a,c;m(!1),o((a=s._id,c=t,function(){var e=Object(p.a)(O.a.mark((function e(t){var n,s,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:ve}),n={headers:{"Content-Type":"application/json"}},e.next=6,K.a.post("/api/v1/remfromfav",{userId:a,movieId:c},n);case 6:s=e.sent,r=s.data,t({type:"REMOVE_FAVORITE_SUCCESS",payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:xe,payload:e.t0.response.data.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())),u.success("Removed from favorites")};return Object(n.useEffect)((function(){c&&r.UserFavList.favList.map((function(e){e.id===t.id&&m(!0)}))}),[t,c,r]),Object(Fe.jsx)(n.Fragment,{children:f?Object(Fe.jsxs)("div",{className:"cardContainer",children:[Object(Fe.jsx)(i.b,{to:"/".concat(t.id,"/details/").concat(t.title),children:Object(Fe.jsxs)("div",{className:"movieCard",children:[Object(Fe.jsx)("div",{children:Object(Fe.jsx)("img",{dragable:"false",src:h,alt:t.title})}),Object(Fe.jsxs)("div",{className:"info",children:[Object(Fe.jsx)("h1",{children:t.title}),Object(Fe.jsx)("span",{children:t.vote_average})]}),Object(Fe.jsx)("p",{children:t.release_date})]})}),f?Object(Fe.jsx)("button",{onClick:function(e){return v(0,t.id)},style:{background:"red"},id:t.id,className:"addToFav",children:"Remove"}):Object(Fe.jsx)("button",{onClick:function(){return e=t.id,m(!0),o(Le(s._id,e)),void u.success("Added to favorites");var e},className:"addToFav",children:"+Add to Favorites"})]},t.id):""})}),ft=function(){var e=Object(d.c)((function(e){return e.user})),t=e.user,a=e.isAuthenticated,c=Object(d.c)((function(e){return e.UserFavList})),s=c.favList,r=c.loading,i=Object(d.b)();return Object(n.useEffect)((function(){!0===a&&i(Ae(t._id))}),[t,a,i]),Object(Fe.jsxs)(n.Fragment,{children:[Object(Fe.jsx)(Ve,{title:"Favorites"}),Object(Fe.jsxs)("div",{className:"discover",children:[Object(Fe.jsx)("h1",{children:"Favorites"}),Object(Fe.jsxs)("div",{className:"movieContainer",children:[!1===r?s&&s.UserFavList.favList.map((function(e){return Object(Fe.jsx)(pt,{movie:e})})):""," "]})]})]})};var mt=function(){return Object(Fe.jsxs)(i.a,{children:[Object(Fe.jsx)(De,{}),Object(Fe.jsx)(o.b,{exact:!0,path:"/",component:Qe}),Object(Fe.jsx)(o.b,{exact:!0,path:"/latest",component:Be}),Object(Fe.jsx)(o.b,{exact:!0,path:"/popular",component:Ge}),Object(Fe.jsx)(o.b,{exact:!0,path:"/:id/details/:title",component:He}),Object(Fe.jsx)(o.b,{exact:!0,path:"/movies/:query",component:We}),Object(Fe.jsx)(o.b,{exact:!0,path:"/login",component:ct}),Object(Fe.jsx)(rt,{exact:!0,path:"/profile",component:bt}),Object(Fe.jsx)(o.b,{exact:!0,path:"/password/reset/:token",component:Ot}),Object(Fe.jsx)(rt,{exact:!0,path:"/favorites",component:ft})]})},ht=a(35),vt=a(68),xt=a(67),gt=Object(ht.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movies:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:case je:case Se:case ge:return{loading:!0,movies:[]};case le:case de:case we:case Ee:return{loading:!1,movies:t.payload.results,totalPages:t.payload.total_pages,moviesCount:t.payload.total_results};case ue:case be:case _e:case ye:return{loading:!1,error:t.payload};case Te:return Object(c.a)(Object(c.a)({},e),{},{errors:null});default:return e}},movieDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movie:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(c.a)({loading:!0},e);case Re:return{loading:!1,movie:t.payload};case Ce:return{loading:!1,error:t.payload};case Te:return Object(c.a)(Object(c.a)({},e),{},{errors:null});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case v:case E:return{loading:!0,isAuthenticated:!1};case m:case x:case y:return Object(c.a)(Object(c.a)({},e),{},{loading:!1,isAuthenticated:!0,user:t.payload});case w:return{loading:!1,user:null,isAuthenticated:!1};case h:case g:return Object(c.a)(Object(c.a)({},e),{},{loading:!1,isAuthenticated:!1,user:null,error:t.payload});case S:return{loading:!1,isAuthenticated:!1,user:null,error:t.payload};case _:return Object(c.a)(Object(c.a)({},e),{},{loading:!1,error:t.payload});case $:return Object(c.a)(Object(c.a)({},e),{},{error:null});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:case U:case V:case H:return Object(c.a)(Object(c.a)({},e),{},{loading:!0});case R:case L:case Q:return Object(c.a)(Object(c.a)({},e),{},{loading:!1,isUpdated:t.payload});case W:return Object(c.a)(Object(c.a)({},e),{},{loading:!1,isDeleted:t.payload.success,message:t.payload.message});case T:case P:case G:case J:return Object(c.a)(Object(c.a)({},e),{},{loading:!1,error:t.payload});case C:case A:case B:return Object(c.a)(Object(c.a)({},e),{},{isUpdated:!1});case z:return Object(c.a)(Object(c.a)({},e),{},{isDeleted:!1});case $:return Object(c.a)(Object(c.a)({},e),{},{error:null});default:return e}},forgotPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:case k:return Object(c.a)(Object(c.a)({},e),{},{loading:!0,error:null});case D:return Object(c.a)(Object(c.a)({},e),{},{loading:!1,message:t.payload});case q:return Object(c.a)(Object(c.a)({},e),{},{loading:!1,success:t.payload});case I:case M:return Object(c.a)(Object(c.a)({},e),{},{loading:!1,error:t.payload});case $:return Object(c.a)(Object(c.a)({},e),{},{error:null});default:return e}},UserFavList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movie:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:case ve:case Oe:return Object(c.a)({loading:!0},e);case pe:return{loading:!1,favList:t.payload};case fe:case he:case xe:return{loading:!1,error:t.payload};case Te:return Object(c.a)(Object(c.a)({},e),{},{errors:null});default:return e}}}),Et=[vt.a],yt=Object(ht.createStore)(gt,{},Object(xt.composeWithDevTools)(ht.applyMiddleware.apply(void 0,Et))),St=a(69),wt={timeout:5e3,position:te.b.BOTTOM_CENTER,transition:te.c.SCALE};r.a.render(Object(Fe.jsx)(d.a,{store:yt,children:Object(Fe.jsx)(te.a,Object(c.a)(Object(c.a)({template:St.a},wt),{},{children:Object(Fe.jsx)(mt,{})}))}),document.getElementById("root"))},77:function(e,t,a){},78:function(e,t,a){}},[[122,1,2]]]);
//# sourceMappingURL=main.fb58e9a3.chunk.js.map
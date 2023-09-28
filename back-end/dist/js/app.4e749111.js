(function(){var t={4965:function(t,e,r){"use strict";r(7658);var i=r(144),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view"),e("FooterSection")],1)},o=[],s=function(){var t=this,e=t._self._c;return e("div",[t.$auth.loading?t._e():e("div",{staticClass:"auth-controls"},[t.$auth.isAuthenticated?t._e():e("button",{on:{click:t.login}},[t._v("Log in")]),t.$auth.isAuthenticated?e("button",{on:{click:t.logout}},[t._v("Log out")]):t._e()]),e("div",{attrs:{id:"nav-bar"}},[e("router-link",{attrs:{to:"/home",id:"home-link"}},[e("h1",[t._v("MODA")])]),e("router-link",{attrs:{to:"/products",id:"products-link"}},[e("button",[t._v("Products")])]),e("router-link",{attrs:{to:"/cart",id:"cart-link"}},[e("button",[t._v("Shopping Cart")])])],1)])},n=[],c={name:"NavBar",methods:{login(){this.$auth.loginWithRedirect()},logout(){this.$auth.logout({returnTo:window.location.origin})}}},u=c,l=r(1001),d=(0,l.Z)(u,s,n,!1,null,"63c40f1c",null),p=d.exports,h=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-container"},[e("h6",[t._v(" copyright all rights reserved © MODA.inc ")]),e("div",{staticClass:"footer-links"},[e("router-link",{staticClass:"link",attrs:{to:"/terms"}},[t._v("Terms & Conditions")]),e("router-link",{staticClass:"link",attrs:{to:"/privacy"}},[t._v("Privacy Policy")])],1)])},m=[],f={data(){return{email:""}}},v=f,g=(0,l.Z)(v,h,m,!1,null,"2cdc9371",null),_=g.exports,y={name:"App",components:{NavBar:p,FooterSection:_}},b=y,C=(0,l.Z)(b,a,o,!1,null,null,null),P=C.exports,w=r(8345),k=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"page-wrap"}},[e("h1",[t._v(" Shopping Cart ")]),e("ProductsList",{attrs:{products:t.cartItems},on:{"remove-from-cart":function(e){return t.removeFromCart(e)}}}),e("h3",{attrs:{id:"total-price"}},[t._v("Total: $"+t._s(t.totalPrice))]),e("stripe-checkout",{ref:"checkoutRef",attrs:{mode:"payment",pk:t.publishablekey,"line-items":t.lineItems,"success-url":t.successUrl,"cancel-url":t.cancelUrl},on:{loading:e=>t.loading=e}}),e("button",{attrs:{id:"checkout-button"},on:{click:t.submit}},[t._v("Proceed to Checkout")])],1)},I=[],x=r(1804),Z=r(6154),S=function(){var t=this,e=t._self._c;return t.products.length>0?e("div",t._l(t.products,(function(r){return e("ProductsListItem",{key:r.id,attrs:{product:r},on:{"remove-from-cart":function(e){return t.$emit("remove-from-cart",e)}}})})),1):e("p",[t._v("You haven't added anything to your cart yet!")])},T=[],q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-container"},[e("img",{staticClass:"product-image",attrs:{src:t.product.imageUrl}}),e("div",{staticClass:"details-wrap"},[e("h3",[t._v(t._s(t.product.name))]),e("p",[t._v("$"+t._s(t.product.price))])]),e("button",{staticClass:"remove-button",on:{click:function(e){return t.$emit("remove-from-cart",t.product.id)}}},[t._v("Remove From Cart")])])},O=[],$={name:"ProductsListItem",props:["product"]},A=$,U=(0,l.Z)(A,q,O,!1,null,"0b6fbc06",null),M=U.exports,j={name:"ProductsList",props:["products"],components:{ProductsListItem:M}},L=j,F=(0,l.Z)(L,S,T,!1,null,null,null),W=F.exports,N={name:"CartPage",components:{ProductsList:W,StripeCheckout:x.ki},data(){return{cartItems:[],publishablekey:"pk_test_51NuxwCH60eFhhlLtQWU64j3Svb7B8k4VfEZGfTLucL5aI6kzYFjwMYWTa2Eb8lUTfnmGBIUjEo9idiEa16xMIdra00QTnMPgiY",loading:!1,successUrl:"http://localhost:8080/success",cancelUrl:"http://localhost:8080/error"}},computed:{totalPrice(){return this.cartItems.reduce(((t,e)=>t+Number(e.price)),0)},lineItems(){return this.cartItems.map((t=>({price:t.stripePriceId,quantity:t.quantity||1})))}},methods:{async removeFromCart(t){const e=await Z.Z.delete(`/api/users/12345/cart/${t}`);this.cartItems=e.data},async submit(){try{await this.$refs.checkoutRef.redirectToCheckout(),this.emptyCart()}catch(t){console.error("Error during checkout:",t)}}},async emptyCart(){await Z.Z.post("/api/users/12345/cart/empty"),this.cartItems=[]},async created(){const t=await Z.Z.get("/api/users/12345/cart");this.cartItems=t.data}},R=N,E=(0,l.Z)(R,k,I,!1,null,"58312d9a",null),G=E.exports,B=function(){var t=this,e=t._self._c;return t.product?e("div",{attrs:{id:"page-wrap"}},[e("div",{attrs:{id:"img-wrap"}},[e("img",{attrs:{src:t.product.imageUrl}})]),e("div",{attrs:{id:"product-details"}},[e("h1",[t._v(t._s(t.product.name))]),e("h3",{attrs:{id:"price"}},[t._v("$"+t._s(t.product.price))]),e("p",[t._v("Average rating: "+t._s(t.product.averageRating))]),t.itemIsInCart||t.showSuccessMessage?t._e():e("button",{attrs:{id:"add-to-cart"},on:{click:t.addToCart}},[t._v("Add to Cart")]),!t.itemIsInCart&&t.showSuccessMessage?e("button",{staticClass:"green-button",attrs:{id:"add-to-cart"}},[t._v("Successfully added item to cart!")]):t._e(),t.itemIsInCart?e("button",{staticClass:"grey-button",attrs:{id:"add-to-cart"}},[t._v("Item is already in cart!")]):t._e(),e("h4",[t._v("Description")]),e("p",[t._v(t._s(t.product.description))])])]):e("NotFoundPage")},D=[],z=function(){var t=this,e=t._self._c;return e("h1",[t._v(" 404: Page Not Found ")])},H=[],Q={name:"NotFoundPage"},Y=Q,V=(0,l.Z)(Y,z,H,!1,null,"029a4b13",null),J=V.exports,K={name:"ProductDetailPage",components:{NotFoundPage:J},data(){return{product:{},cartItems:[],showSuccessMessage:!1}},computed:{itemIsInCart(){return this.cartItems.some((t=>t.id===this.product.id))}},methods:{async addToCart(){await Z.Z.post("/api/users/12345/cart",{productId:this.$route.params.id}),this.showSuccessMessage=!0,setTimeout((()=>{this.$router.push("/products")}),1500)}},async created(){const t=await Z.Z.get(`/api/products/${this.$route.params.id}`),e=t.data;this.product=e;const{data:r}=await Z.Z.get("/api/users/12345/cart");this.cartItems=r}},X=K,tt=(0,l.Z)(X,B,D,!1,null,"1eccc4c4",null),et=tt.exports,rt=function(){var t=this,e=t._self._c;return e("div",[e("HighlightImage"),e("div",{staticClass:"filter-section"},[e("label",[t._v("By Category:")]),e("button",{on:{click:function(e){return t.setCategory("all")}}},[t._v("All")]),e("button",{on:{click:function(e){return t.setCategory("Men")}}},[t._v("Men")]),e("button",{on:{click:function(e){return t.setCategory("Women")}}},[t._v("Women")]),e("button",{on:{click:function(e){return t.setCategory("Unisex")}}},[t._v("Unisex")])]),e("ProductsGrid",{attrs:{products:t.filteredProducts}})],1)},it=[],at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid-wrap"},t._l(t.products,(function(t){return e("ProductsGridItem",{key:t.id,attrs:{product:t}})})),1)},ot=[],st=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-item"},[e("img",{attrs:{src:t.product.imageUrl}}),e("h3",{staticClass:"product-name"},[t._v(" "+t._s(t.product.name)+" ")]),e("p",{staticClass:"product-price"},[t._v(" $"+t._s(t.product.price))]),e("router-link",{attrs:{to:"/products/"+t.product.id}},[e("button",[t._v(" View Details ")])])],1)},nt=[],ct={name:"ProductsGridItem",props:["product"]},ut=ct,lt=(0,l.Z)(ut,st,nt,!1,null,"efb9eee2",null),dt=lt.exports,pt={name:"ProductsGrid",props:["products"],components:{ProductsGridItem:dt}},ht=pt,mt=(0,l.Z)(ht,at,ot,!1,null,"22477eb9",null),ft=mt.exports,vt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("v-row",{staticClass:"grid"},[e("v-col",{attrs:{cols:"6"}},[e("v-img",{staticClass:"image",attrs:{src:r(810),alt:"main"}})],1),e("v-col",{attrs:{cols:"6"}},[e("v-card-text",{staticClass:"text"},[e("span",[t._v("Fall / Winter 2023")]),e("br"),e("br"),t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad obcaecati sunt repudiandae alias? Molestiae nisi accusamus consequatur, laboriosam dicta mollitia magnam qui nihil commodi voluptatibus incidunt adipisci quos quod quasi. "),e("br"),e("br"),t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae repudiandae id deleniti laudantium, nihil exercitationem sed alias quod molestiae atque facilis deserunt ab, magnam saepe earum. Debitis, corporis doloribus? ")])],1)],1)},gt=[],_t=r(4244),yt=r.n(_t),bt=yt(),Ct=(0,l.Z)(bt,vt,gt,!1,null,"27c80bf2",null),Pt=Ct.exports,wt={name:"ProductsPage",components:{ProductsGrid:ft,HighlightImage:Pt},data(){return{allProducts:[],filteredProducts:[],selectedCategory:"all"}},methods:{async fetchProducts(){try{const t=await Z.Z.get("/api/products");this.allProducts=t.data,this.filterProducts()}catch(t){console.error("Error fetching products:",t)}},filterProducts(){"all"===this.selectedCategory?this.filteredProducts=this.allProducts:this.filteredProducts=this.allProducts.filter((t=>t.category===this.selectedCategory))},setCategory(t){this.selectedCategory=t,this.filterProducts()}},created(){this.fetchProducts()}},kt=wt,It=(0,l.Z)(kt,rt,it,!1,null,"f80c4e1a",null),xt=It.exports,Zt=function(){var t=this,e=t._self._c;return e("v-row",{staticClass:"grid"},[e("v-col",{attrs:{cols:"2"}},[e("v-card-text",{staticClass:"text"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui amet voluptatibus libero maxime distinctio aliquam, in quo corporis, est cumque eveniet debitis voluptates vitae. Expedita soluta distinctio quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique consequuntur optio iste corrupti perferendis. Mollitia exercitationem deleniti iusto quam vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, debitis non exercitationem, dolorum quis placeat quisquam hic, quasi pariatur tempora accusamus voluptates mollitia sapiente consectetur eos. Perspiciatis, mollitia? Impedit, tenetur. ")])],1),e("v-col",{attrs:{cols:"10"}},[e("div",{staticStyle:{position:"relative"}},[e("v-img",{attrs:{src:t.coverImage,cover:"",height:"100%"}}),e("v-btn",{staticClass:"centered-btn",staticStyle:{"z-index":"1"},on:{click:t.goToProducts}},[t._v("New Arrivals")])],1)])],1)},St=[],Tt={name:"HomePage",data(){return{coverImage:r(7581)}},methods:{goToProducts(){this.$router.push({name:"Products"})}}},qt=Tt,Ot=(0,l.Z)(qt,Zt,St,!1,null,"bb6ed69e",null),$t=Ot.exports,At=function(){var t=this;t._self._c;return t._m(0)},Ut=[function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Payment Successful!")]),e("p",[t._v("Thank you for your purchase.")]),e("a",{attrs:{href:"/products"}},[t._v(" Shop More ")])])}],Mt={name:"SuccessPage",async created(){try{await Z.Z.post("/api/users/12345/cart/empty")}catch(t){console.error("Error emptying the cart:",t)}}},jt=Mt,Lt=(0,l.Z)(jt,At,Ut,!1,null,null,null),Ft=Lt.exports,Wt=function(){var t=this;t._self._c;return t._m(0)},Nt=[function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Payment Failed")]),e("a",{attrs:{href:"/"}},[t._v(" Try Again ")])])}],Rt={},Et=(0,l.Z)(Rt,Wt,Nt,!1,null,null,null),Gt=Et.exports;i["default"].use(w.ZP);const Bt=[{path:"/products",name:"Products",component:xt},{path:"/products/:id",name:"ProductDetail",component:et},{path:"/cart",name:"Cart",component:G},{path:"/",name:"Home",component:$t},{path:"/home",name:"Home",component:$t},{path:"*",name:"404 Page",component:J},{path:"/success",name:"Success",component:Ft},{path:"/error",name:"Error",component:Gt}],Dt=new w.ZP({mode:"history",base:"/",routes:Bt});var zt=Dt,Ht=r(5464),Qt=r.n(Ht),Yt=(r(8556),JSON.parse('{"n":"dev-0gkixjujxtsbzrg2.us.auth0.com","I":"arBZolfGruOZG0wiBwQszWlrtjZwNm16"}')),Vt=r(4713);const Jt=()=>window.history.replaceState({},document.title,window.location.pathname);let Kt;const Xt=({onRedirectCallback:t=Jt,redirectUri:e=window.location.origin,...r})=>Kt||(Kt=new i["default"]({data(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{async loginWithPopup(t,e){this.popupOpen=!0;try{await this.auth0Client.loginWithPopup(t,e),this.user=await this.auth0Client.getUser(),this.isAuthenticated=await this.auth0Client.isAuthenticated(),this.error=null}catch(r){this.error=r,console.error(r)}finally{this.popupOpen=!1}this.user=await this.auth0Client.getUser(),this.isAuthenticated=!0},async handleRedirectCallback(){this.loading=!0;try{await this.auth0Client.handleRedirectCallback(),this.user=await this.auth0Client.getUser(),this.isAuthenticated=!0,this.error=null}catch(t){this.error=t}finally{this.loading=!1}},loginWithRedirect(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup(t){return this.auth0Client.getTokenWithPopup(t)},logout(t){return this.auth0Client.logout(t)}},async created(){this.auth0Client=await(0,Vt._A)({...r,authorizationParams:{redirect_uri:e,...r.authorizationParams}});try{if(window.location.search.includes("code=")&&window.location.search.includes("state=")){const{appState:e}=await this.auth0Client.handleRedirectCallback();this.error=null,t(e)}}catch(i){this.error=i}finally{this.isAuthenticated=await this.auth0Client.isAuthenticated(),this.user=await this.auth0Client.getUser(),this.loading=!1}}}),Kt),te={install(t,e){t.prototype.$auth=Xt(e)}};i["default"].use(te,{domain:Yt.n,clientId:Yt.I,onRedirectCallback:t=>{zt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),i["default"].config.productionTip=!1,i["default"].use(Qt());const ee=new(Qt())({});new i["default"]({router:zt,render:t=>t(P),vuetify:ee}).$mount("#app")},4244:function(){},7581:function(t,e,r){"use strict";t.exports=r.p+"img/cover.3baf0fc8.jpg"},810:function(t,e,r){"use strict";t.exports=r.p+"img/main.06289d36.jpg"}},e={};function r(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,i,a,o){if(!i){var s=1/0;for(l=0;l<t.length;l++){i=t[l][0],a=t[l][1],o=t[l][2];for(var n=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((function(t){return r.O[t](i[c])}))?i.splice(c--,1):(n=!1,o<s&&(s=o));if(n){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,a,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,s=i[0],n=i[1],c=i[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(c)var l=c(r)}for(e&&e(i);u<s.length;u++)o=s[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},i=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(4965)}));i=r.O(i)})();
//# sourceMappingURL=app.4e749111.js.map
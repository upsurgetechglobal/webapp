"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[52,1060,5704,5864],{3923:($,I,s)=>{s.d(I,{$o:()=>u,_G:()=>v,Vq:()=>R,SQ:()=>l});var u=function(e){return e.Loaded="applePayLoaded",e.FailedToLoad="applePayFailedToLoad",e.Completed="applePayCompleted",e.Canceled="applePayCanceled",e.Failed="applePayFailed",e.DidSelectShippingContact="applePayDidSelectShippingContact",e.DidCreatePaymentMethod="applePayDidCreatePaymentMethod",e}(u||{}),v=function(e){return e.Loaded="googlePayLoaded",e.FailedToLoad="googlePayFailedToLoad",e.Completed="googlePayCompleted",e.Canceled="googlePayCanceled",e.Failed="googlePayFailed",e}(v||{}),R=function(e){return e.Loaded="paymentFlowLoaded",e.FailedToLoad="paymentFlowFailedToLoad",e.Opened="paymentFlowOpened",e.Created="paymentFlowCreated",e.Completed="paymentFlowCompleted",e.Canceled="paymentFlowCanceled",e.Failed="paymentFlowFailed",e}(R||{}),l=function(e){return e.Loaded="paymentSheetLoaded",e.FailedToLoad="paymentSheetFailedToLoad",e.Completed="paymentSheetCompleted",e.Canceled="paymentSheetCanceled",e.Failed="paymentSheetFailed",e}(l||{})},52:($,I,s)=>{s.r(I),s.d(I,{FeedbackPage:()=>j});var u=s(467),v=s(177),R=s(4341),l=s(4742),e=s(4438),D=s(9568),F=s(3656);const T=()=>[];function E(x,C){if(1&x){const P=e.RV6();e.j41(0,"ion-button",5),e.bIt("click",function(){e.eBV(P);const b=e.XpG();return e.Njj(b.close())}),e.EFF(1),e.k0s()}if(2&x){const P=e.XpG();e.R7$(),e.JRh(P.text.cancel)}}function t(x,C){1&x&&e.nrm(0,"ion-icon",9)}function a(x,C){if(1&x&&(e.j41(0,"ion-item",10)(1,"ion-label",11),e.EFF(2),e.j41(3,"ion-badge",12),e.nrm(4,"ion-icon",13),e.EFF(5),e.k0s(),e.j41(6,"small",14),e.EFF(7),e.k0s()()()),2&x){const P=C.$implicit;e.R7$(2),e.SpI("",P.name," "),e.R7$(3),e.SpI(" ",P.star,".0"),e.R7$(2),e.JRh(P.comment)}}function S(x,C){if(1&x&&(e.j41(0,"ion-content",6)(1,"h3"),e.EFF(2),e.k0s(),e.DNE(3,t,1,0,"ion-icon",7),e.nrm(4,"br")(5,"br"),e.DNE(6,a,8,3,"ion-item",8),e.k0s()),2&x){const P=e.XpG();e.R7$(2),e.JRh(P.data.item.name),e.R7$(),e.Y8G("ngForOf",e.lJ4(3,T).constructor(P.roundRating(P.data.item.rating))),e.R7$(3),e.Y8G("ngForOf",P.data.item.ratings)}}let j=(()=>{var x;class C{constructor(g,b){this.otherService=g,this.navParams=b,this.data=b.get("data");const d=localStorage.getItem("app_lang");null!==d&&(this.text=JSON.parse(d),this.text=this.text.text)}ngOnInit(){}close(g=[]){var b=this;return(0,u.A)(function*(){b.otherService.closeModel(g)})()}roundRating(g){return Math.round(g)}}return(x=C).\u0275fac=function(g){return new(g||x)(e.rXU(D.G),e.rXU(F.y8))},x.\u0275cmp=e.VBU({type:x,selectors:[["app-feedback"]],decls:5,vars:2,consts:[[1,"ion-no-border"],["color","light"],["slot","end"],["color","medium",3,"click",4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","medium",3,"click"],[1,"ion-padding"],["name","star","color","primary",4,"ngFor","ngForOf"],["lines","none",4,"ngFor","ngForOf"],["name","star","color","primary"],["lines","none"],[1,"ion-text-wrap"],["color","dark",2,"float","right"],["name","star"],[2,"margin-top","5px","display","block"]],template:function(g,b){1&g&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.DNE(3,E,2,1,"ion-button",3),e.k0s()()(),e.DNE(4,S,7,4,"ion-content",4)),2&g&&(e.R7$(3),e.Y8G("ngIf",b.text),e.R7$(),e.Y8G("ngIf",b.data))},dependencies:[l.bv,l.In,l.Jm,l.QW,l.W9,l.eU,l.iq,l.uz,l.he,l.ai,v.MD,v.Sq,v.bT,R.YN],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-item[_ngcontent-%COMP%]{border-radius:10px;margin-top:15px}"]}),C})()},1060:($,I,s)=>{s.r(I),s.d(I,{ItemPage:()=>N});var u=s(467),v=s(177),R=s(4341),l=s(4742),e=s(4531),D=s(52),F=s(7564),T=s(5864),E=s(5704),t=s(4438),a=s(2068),S=s(8870),j=s(9568);const x=["content"],C=_=>({"mobile-selected-category":_});function P(_,y){1&_&&(t.j41(0,"ion-col",16),t.nrm(1,"ion-skeleton-text",17),t.k0s()),2&_&&(t.R7$(),t.Y8G("animated",!0))}function g(_,y){1&_&&(t.j41(0,"ion-row")(1,"ion-col",18),t.nrm(2,"ion-skeleton-text",19),t.k0s()()),2&_&&(t.R7$(2),t.Y8G("animated",!0))}function b(_,y){if(1&_&&(t.j41(0,"div",7)(1,"ion-grid",8),t.nrm(2,"ion-skeleton-text",9)(3,"ion-skeleton-text",10)(4,"br")(5,"ion-skeleton-text",11)(6,"br"),t.j41(7,"ion-row"),t.DNE(8,P,2,1,"ion-col",12),t.k0s(),t.nrm(9,"br"),t.j41(10,"ion-row")(11,"ion-col",13),t.nrm(12,"ion-skeleton-text",14),t.k0s(),t.j41(13,"ion-col",13),t.nrm(14,"ion-skeleton-text",14),t.k0s(),t.j41(15,"ion-col",13),t.nrm(16,"ion-skeleton-text",14),t.k0s(),t.j41(17,"ion-col",13),t.nrm(18,"ion-skeleton-text",14),t.k0s()(),t.nrm(19,"br"),t.DNE(20,g,3,1,"ion-row",15),t.k0s()()),2&_){const r=t.XpG(2);t.R7$(),t.Y8G("fixed",!0),t.R7$(),t.Y8G("animated",!0),t.R7$(),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(3),t.Y8G("ngForOf",r.fakeData),t.R7$(4),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(2),t.Y8G("ngForOf",r.fakeData)}}function d(_,y){if(1&_){const r=t.RV6();t.j41(0,"ion-segment-button",27),t.bIt("click",function(){const o=t.eBV(r).$implicit,c=t.XpG(4);return t.Njj(c.selectProducts(o.id))}),t.nrm(1,"img",28),t.j41(2,"span",29),t.EFF(3),t.k0s()()}if(2&_){const r=y.$implicit,n=t.XpG(4);t.Y8G("ngClass",t.eq3(3,C,n.cat_id==r.id)),t.R7$(),t.Y8G("src",r.img,t.B4B),t.R7$(2),t.JRh(r.name)}}function f(_,y){if(1&_&&(t.j41(0,"ion-segment",25),t.DNE(1,d,4,5,"ion-segment-button",26),t.k0s()),2&_){const r=t.XpG(3);t.R7$(),t.Y8G("ngForOf",r.categories_list)}}function m(_,y){if(1&_){const r=t.RV6();t.j41(0,"ion-list")(1,"ion-item",31),t.bIt("click",function(){const o=t.eBV(r).$implicit,c=t.XpG(4);return t.Njj(c.selectProducts(o.id))}),t.j41(2,"ion-row",32)(3,"ion-col",33),t.nrm(4,"img",34),t.k0s(),t.j41(5,"ion-col",35)(6,"h3",36),t.EFF(7),t.k0s()()()()()}if(2&_){const r=y.$implicit,n=t.XpG(4);t.R7$(),t.Y8G("ngClass",n.cat_id==r.id?"selected_category":"non_selected_category"),t.R7$(3),t.FS9("src",r.img,t.B4B),t.R7$(3),t.JRh(r.name)}}function i(_,y){if(1&_&&(t.j41(0,"ion-card-content",30),t.DNE(1,m,8,3,"ion-list",15),t.k0s()),2&_){const r=t.XpG(3);t.R7$(),t.Y8G("ngForOf",r.categories_list)}}function p(_,y){if(1&_&&(t.j41(0,"h3",37),t.EFF(1),t.k0s()),2&_){const r=t.XpG(3);t.R7$(),t.JRh(r.selectedCatName)}}function h(_,y){if(1&_){const r=t.RV6();t.j41(0,"ion-button",56),t.bIt("click",function(){t.eBV(r);const o=t.XpG().$implicit,c=t.XpG(4);return t.Njj(c.add_to_cart(o))}),t.EFF(1),t.k0s()}if(2&_){const r=t.XpG().$implicit,n=t.XpG(4);t.R7$(),t.SpI(" ",null!=r&&r.subscribed_item?"Subscribe":n.text.add,"")}}function k(_,y){if(1&_){const r=t.RV6();t.j41(0,"div",57)(1,"button",58),t.bIt("click",function(){t.eBV(r);const o=t.XpG().$implicit,c=t.XpG(4);return t.Njj(c.decrement(o))}),t.EFF(2,"-"),t.k0s(),t.j41(3,"span",59)(4,"p",60),t.EFF(5),t.k0s()(),t.j41(6,"button",61),t.bIt("click",function(){t.eBV(r);const o=t.XpG().$implicit,c=t.XpG(4);return t.Njj(c.increment(o))}),t.EFF(7,"+ "),t.k0s()()}if(2&_){const r=t.XpG().$implicit;t.R7$(5),t.JRh(r.qty)}}function M(_,y){if(1&_&&(t.j41(0,"ion-col",39)(1,"ion-card",40)(2,"ion-row")(3,"ion-col",13),t.nrm(4,"img",41),t.k0s(),t.j41(5,"ion-col",42)(6,"span",43),t.EFF(7),t.k0s(),t.j41(8,"span",44),t.EFF(9),t.nI1(10,"currency"),t.k0s(),t.nrm(11,"br"),t.k0s(),t.j41(12,"ion-col",18)(13,"div",45),t.EFF(14,"Order via App and get "),t.j41(15,"span"),t.EFF(16,"Upto 40% OFF"),t.k0s(),t.EFF(17," with "),t.j41(18,"strong"),t.EFF(19,"VIP"),t.k0s()()(),t.j41(20,"ion-col",46)(21,"ion-row",47)(22,"ion-col",48),t.nrm(23,"ion-icon",49),t.j41(24,"span",50),t.EFF(25,"Premium Sourcing"),t.k0s()(),t.j41(26,"ion-col",48),t.nrm(27,"ion-icon",51),t.j41(28,"span",50),t.EFF(29,"Hourly Flash Deals"),t.k0s()(),t.j41(30,"ion-col",48),t.nrm(31,"ion-icon",52),t.j41(32,"span",50),t.EFF(33,"Delivery by 7 AM"),t.k0s()()()(),t.j41(34,"ion-col",21)(35,"p",53),t.EFF(36),t.k0s()(),t.j41(37,"ion-col",21),t.DNE(38,h,2,1,"ion-button",54)(39,k,8,1,"div",55),t.k0s()()()()),2&_){const r=y.$implicit,n=t.XpG(4);t.Y8G("size",n.isMobile?12:4),t.R7$(4),t.FS9("src",r.img,t.B4B),t.R7$(),t.xc7("padding",n.isMobile?"":"15px 10px"),t.R7$(2),t.JRh(r.name),t.R7$(2),t.SpI("",t.i5U(10,11,r.price,"INR")," "),t.R7$(25),t.Y8G("size",n.isMobile?12:8),t.R7$(2),t.SpI("Order Premium Quality ",r.name," Online"),t.R7$(),t.Y8G("size",n.isMobile?12:4),t.R7$(),t.Y8G("ngIf",!(null!=r&&r.cart_added)),t.R7$(),t.Y8G("ngIf",null==r?null:r.cart_added)}}function G(_,y){if(1&_&&(t.j41(0,"ion-row"),t.DNE(1,M,40,14,"ion-col",38),t.k0s()),2&_){const r=t.XpG(3);t.R7$(),t.Y8G("ngForOf",r.filteredItems)}}function w(_,y){if(1&_&&(t.j41(0,"div"),t.DNE(1,f,2,1,"ion-segment",20),t.j41(2,"ion-card")(3,"ion-row")(4,"ion-col",21),t.DNE(5,i,2,1,"ion-card-content",22),t.k0s(),t.j41(6,"ion-col",21),t.DNE(7,p,2,1,"h3",23)(8,G,2,1,"ion-row",24),t.k0s()()()()),2&_){const r=t.XpG(2);t.HbH(r.isMobile?"":"ion-padding"),t.R7$(),t.Y8G("ngIf",r.isMobile),t.R7$(),t.HbH(r.isMobile?"":"category_card"),t.R7$(2),t.Y8G("size",r.isMobile?12:2),t.R7$(),t.Y8G("ngIf",!r.isMobile),t.R7$(),t.xc7("padding",r.isMobile?"":"5px 25px"),t.Y8G("size",r.isMobile?12:10),t.R7$(),t.Y8G("ngIf",r.isMobile),t.R7$(),t.Y8G("ngIf",r.filteredItems)}}function z(_,y){if(1&_&&(t.j41(0,"ion-content",4),t.DNE(1,b,21,10,"div",5)(2,w,9,12,"div",6),t.k0s()),2&_){const r=t.XpG();t.Y8G("fullscreen",!0),t.R7$(),t.Y8G("ngIf",!r.data),t.R7$(),t.Y8G("ngIf",r.data)}}(0,e.kz)();let N=(()=>{var _;class y{constructor(n,o,c,O,A){this.server=n,this.route=o,this.router=c,this.otherService=O,this.modalCtrl=A,this.fakeData=[1,2,3,4,5,6],this.type=2,this.isMobile=!1,this.allItem=[],this.filteredItems=[],this.selectedItms=[],this.total=0,this.payble_amount=0,this.hasClick=!1,this.show=!0,this.selectedCatName="",this.categoryItemsMap={1:[1,2,6],2:[5],3:[3,4]},this.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],this.otherService.statusBar("#ffffff",2),this.cat_id=this.route.snapshot.paramMap.get("id");const B=localStorage.getItem("app_lang");null!==B&&(this.text=JSON.parse(B),this.text=this.text.text),"null"==localStorage.getItem("cart_no")||null==localStorage.getItem("cart_no")?(this.cart_no=Math.floor(2e9*Math.random())+1,localStorage.setItem("cart_no",this.cart_no)):this.cart_no=localStorage.getItem("cart_no"),this.checkScreenSize(),null==localStorage.getItem("lang_id")&&localStorage.setItem("lang_id","0")}onResize(n){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ngOnInit(){}ionViewDidEnter(){this.loadData()}loadData(){var n=this;return(0,u.A)(function*(){n.server.item({store_id:1,cat_id:n.cat_id}).subscribe(o=>{const c=o.data;localStorage.setItem("admin_setting",JSON.stringify(c.admin)),localStorage.setItem("app_lang",JSON.stringify(c.lang)),localStorage.setItem("lang_id","0"),n.text=c.lang.text,n.data=c,n.filteredItems=c.item;const O=localStorage.getItem("selectedItms");n.selectedItms=O?JSON.parse(O):[],n.selectedItms.length>0&&n.CalculateTotal(),n.loadCategoriesData(),n.getSavedAddress(),n.setItem(),n.selectProducts(n.cat_id)})})()}selectProducts(n){var o=this;return(0,u.A)(function*(){o.cat_id=n,o.selectedCategory(o.cat_id),o.server.item({store_id:1,cat_id:n}).subscribe(c=>{o.filteredItems=c.data.item,console.log("Filtered Items with cart status:",o.filteredItems)})})()}loadCategoriesData(){var n=this;return(0,u.A)(function*(){n.server.homepage().subscribe(o=>{n.categories_list=o.data.cate,n.selectedCategory(n.cat_id)})})()}selectedCategory(n){const o=this.categories_list.find(c=>(null==c?void 0:c.id)==n);this.selectedCatName=o?o.name:""}getSavedAddress(){this.server.checkoutData().subscribe(n=>{this.checkout_data=n.data,this.savedAddress=this.checkout_data.address})}setItem(){var n=this;return(0,u.A)(function*(){const o=new Map;for(const c of n.data.item)n.chkFilter(c)&&o.set(c.id,c);n.allItem=Array.from(o.values()).map(c=>({...c,subscribed_item:/fruit/i.test(c.name)})),console.log(n.allItem)})()}ic(){var n=this;return(0,u.A)(function*(){n.allItem=[],n.setItem()})()}goBack(){var n=this;return(0,u.A)(function*(){return n.otherService.goBack()})()}chkFilter(n){return 1==this.type||(2==this.type?1==n.breakfast:3==this.type?1==n.lunch:4!=this.type||1==n.dinner)}add_to_cart(n){var o=this;return(0,u.A)(function*(){n.subscribed_item?(n.qty=1,localStorage.setItem("subscribed_items",JSON.stringify(n)),o.router.navigate(["/subscribed-cart"],{replaceUrl:!0})):(n.cart_added=!0,n.qty=1,o.hasClick=!0,o.server.add_to_cart({cart_no:o.cart_no,item_id:n.id,price:n.price,item_type:o.type,qty:1,store_id:n.store_id,days:o.days}).subscribe(O=>{o.hasClick=!1,o.otherService.triggerLoadData.emit(),o.otherService.toast(o.text.added)}))})()}detail(n){const o=this.selectedItms.find(c=>c.id===n.id);o?(o.quantity+=1,o.selected_price=Number(n.price)*Number(o.quantity)):(n.quantity=1,n.selected_price=n.price,this.selectedItms.push(n)),this.CalculateTotal()}increment(n){n.qty<10&&(this.filteredItems.find(c=>c.id===n.id).qty+=1,this.otherService.triggerLoadData.emit(),this.addToCart(n,"increment"))}decrement(n){n.qty>1?(this.filteredItems.find(c=>c.id===n.id).qty-=1,this.otherService.triggerLoadData.emit(),this.addToCart(n,"decrement")):this.removefromcart(n)}removefromcart(n){var o=this;return(0,u.A)(function*(){o.server.getCart(n.cart_id).subscribe(c=>{n.cart_added=!1,o.otherService.triggerLoadData.emit(),o.otherService.toast(o.text.removed)})})()}addToCart(n,o){this.server.add_to_cart({cart_no:this.cart_no,item_id:n.id,mode:o,qty:1,store_id:n.store_id}).subscribe(O=>{this.hasClick=!1})}CalculateTotal(){this.total=this.selectedItms.reduce((n,o)=>n+(Number(o.selected_price)||0),0),localStorage.setItem("selectedItms",JSON.stringify(this.selectedItms))}removeItem(n){this.selectedItms=this.selectedItms.filter(o=>o.id!=n.id),this.CalculateTotal()}getAddress(){var n=this;return(0,u.A)(function*(){const o={data:n.savedAddress,store_id:n.data.store.id},c=yield n.modalCtrl.create({component:F.AddressPage,animated:!0,mode:"ios",componentProps:o});return c.onDidDismiss().then(O=>{console.log(O),O.data.id&&(n.address=O.data)}),yield c.present()})()}startDate(){var n=this;return(0,u.A)(function*(){if(!n.sub_time)return n.otherService.toast(n.text.sub_time);if(!n.start_date)return;n.otherService.showLoading();const o={plan:n.sub_time,start_date:n.start_date,cart_no:localStorage.getItem("cart_no"),user_id:localStorage.getItem("user_id"),store_id:n.checkout_data.store.id};n.server.getAmount(o).subscribe(c=>{n.cal=c,n.otherService.hideLoading(),console.log(n.cal.summery)})})()}getOffer(){var n=this;return(0,u.A)(function*(){const o=yield n.modalCtrl.create({component:T.OfferPage,animated:!0,mode:"ios",componentProps:{data:n.checkout_data.offer}});return o.onDidDismiss().then(c=>{c.data.code&&(n.offer=c.data,n.applyOffer())}),yield o.present()})()}applyOffer(){var n=this;return(0,u.A)(function*(){if(1==n.offer.type){const o=n.cal.total*n.offer.value/100;n.payble_amount=n.total-o,n.save=o.toFixed(1)}else n.payble_amount=n.total-n.offer.value,n.save=n.offer.value})()}validate(){return!!(this.sub_time&&this.start_date&&this.address)}placeOrder(){var n=this;return(0,u.A)(function*(){n.validate()?n.total>n.checkout_data.user.wallet?n.openpaymentsModel({amount:n.total-n.checkout_data.user.wallet,stripe_key:n.checkout_data.stripe_id}):n.checkout():n.otherService.toast(n.text.all_field)})()}openpaymentsModel(n){var o=this;return(0,u.A)(function*(){const c=yield o.modalCtrl.create({component:E.PaymentPage,animated:!0,mode:"ios",componentProps:{data:n}});return c.onDidDismiss().then(O=>{O.data?o.checkout():o.otherService.toast(o.text.payment_cancel)}),yield c.present()})()}checkout(){var n=this;return(0,u.A)(function*(){n.hasClick=!0;const o={user_id:localStorage.getItem("user_id"),cart_no:localStorage.getItem("cart_no"),cal:n.cal,address:n.address.id,plan:n.sub_time,total:n.total,discount:n.save,store_id:n.checkout_data.store.id,notes:localStorage.getItem("order_notes")&&"undefined"!=localStorage.getItem("order_notes")?localStorage.getItem("order_notes"):null};console.log(o)})()}custom(){return localStorage.setItem("custom_data",JSON.stringify(this.data.custom)),localStorage.setItem("store_data",JSON.stringify(this.data.store)),this.otherService.redirect("custom")}openModel(n,o){var c=this;return(0,u.A)(function*(){const O=yield c.modalCtrl.create({component:D.FeedbackPage,animated:!0,mode:"ios",componentProps:{data:{item:n,type:o}}});return O.onDidDismiss().then(A=>{}),yield O.present()})()}}return(_=y).\u0275fac=function(n){return new(n||_)(t.rXU(a.Z),t.rXU(S.nX),t.rXU(S.Ix),t.rXU(j.G),t.rXU(l.W3))},_.\u0275cmp=t.VBU({type:_,selectors:[["app-item"]],viewQuery:function(n,o){if(1&n&&t.GBs(x,5),2&n){let c;t.mGM(c=t.lsd())&&(o.content=c.first)}},hostBindings:function(n,o){1&n&&t.bIt("resize",function(O){return o.onResize(O)},!1,t.tSv)},decls:5,vars:1,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],[3,"fullscreen",4,"ngIf"],[3,"fullscreen"],["class","ion-padding",4,"ngIf"],[3,"class",4,"ngIf"],[1,"ion-padding"],[3,"fixed"],[1,"sek",3,"animated"],[1,"sek2",3,"animated"],[1,"sek3",3,"animated"],["size","2",4,"ngFor","ngForOf"],["size","3"],[1,"sek5",3,"animated"],[4,"ngFor","ngForOf"],["size","2"],[1,"sek4",3,"animated"],["size","12"],[1,"sek6",3,"animated"],["scrollable","","mode","md","class","cat-menu",4,"ngIf"],[3,"size"],["class","scrollable-content",4,"ngIf"],["class","headTitle",4,"ngIf"],[4,"ngIf"],["scrollable","","mode","md",1,"cat-menu"],["class","cat-card",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"cat-card",3,"click","ngClass"],[1,"cat-img",3,"src"],[1,"cat-name"],[1,"scrollable-content"],["lines","none",3,"click","ngClass"],[1,"cat_row"],["size","4",1,"cat_img_col"],[1,"cat_img",3,"src"],["size","8",1,"cat_title_col"],[1,"cat_title"],[1,"headTitle"],["style","margin-bottom: 10px;",3,"size",4,"ngFor","ngForOf"],[2,"margin-bottom","10px",3,"size"],[1,"product_card"],[3,"src"],["size","9"],[1,"iname"],[1,"actual_price"],[1,"discount"],["size","12",1,"prod_desc"],[1,"feature-row"],["size","4",1,"feature-col"],["name","ribbon-outline",1,"feature-icon"],[1,"feature-text"],["name","flash-outline",1,"feature-icon"],["name","time-outline",1,"feature-icon"],[1,"footer"],["color","primary","expand","block","shape","round","color","dark","size","medium","class","add_btn",3,"click",4,"ngIf"],["class","quantity-field",4,"ngIf"],["color","primary","expand","block","shape","round","color","dark","size","medium",1,"add_btn",3,"click"],[1,"quantity-field"],[1,"value-button","decrease-button",3,"click"],[1,"number"],[2,"margin-top","-2px"],[1,"value-button","increase-button",3,"click"]],template:function(n,o){1&n&&(t.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t.nrm(3,"ion-back-button"),t.k0s()()(),t.DNE(4,z,3,3,"ion-content",3)),2&n&&(t.R7$(4),t.Y8G("ngIf",o.text))},dependencies:[l.bv,l.Jm,l.QW,l.b_,l.I9,l.hU,l.W9,l.lO,l.eU,l.iq,l.uz,l.nf,l.ln,l.Gp,l.eP,l.ds,l.ai,l.Je,l.el,v.MD,v.YU,v.Sq,v.bT,v.oe,R.YN],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light) }.scrollable-content[_ngcontent-%COMP%]{height:80vh;overflow-y:auto;border-right:3px solid whitesmoke;scrollbar-width:thin;scrollbar-color:transparent transparent}.scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0}.card_title[_ngcontent-%COMP%]{width:100%;font-weight:700;background-color:var(--ion-color-dark);padding:10px}.card_title[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:var(--ion-color-light)}.category_card[_ngcontent-%COMP%]{width:100%;box-shadow:0 5px 15px #0000001a}.product_card[_ngcontent-%COMP%]{box-shadow:0 0 #0003;border:2px solid var(--ion-color-light);background:#f5f5f5;padding:20px;border-radius:12px;width:unset;transition:transform .2s;transition:transform .4s ease,box-shadow .4s ease;margin:0}.product_card[_ngcontent-%COMP%]:hover{border:2px solid var(--ion-color-dark);transform:scale(1.005);box-shadow:0 12px 24px #00000080;background-color:#fff}.discount[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fff,#fff3cd);padding:8px;font-size:11px;margin:8px 0;border-radius:5px;text-align:center;color:#000;white-space:nowrap}.discount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#28a745;font-weight:700}.prod_desc[_ngcontent-%COMP%]{border-top:1px solid whitesmoke;border-bottom:1px solid whitesmoke;font-size:12px}.feature-row[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.feature-col[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:5px}.feature-icon[_ngcontent-%COMP%]{font-size:20px;color:#333}.footer[_ngcontent-%COMP%]{font-weight:600;font-size:10px;line-height:15px}.feature-text[_ngcontent-%COMP%]{font-size:10px}ion-list[_ngcontent-%COMP%]{--background: white;background:#fff;padding:0}.cat-menu[_ngcontent-%COMP%]{background:transparent;padding:10px;overflow-x:auto;display:flex;gap:10px;border-bottom:none!important;margin-top:10px}ion-segment-button.cat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:10px;background:#fff;border-radius:8px;box-shadow:0 2px 6px #0000001a;width:auto;max-width:200px;min-width:-moz-fit-content;min-width:fit-content;flex:0 0 auto;text-align:center}.cat-img[_ngcontent-%COMP%]{width:40px;height:40px;object-fit:contain;margin-bottom:6px}.cat-name[_ngcontent-%COMP%]{font-size:12px;color:#333;white-space:normal;word-break:break-word;padding:0 4px;text-transform:capitalize}.mobile-selected-category[_ngcontent-%COMP%]{border:2px solid var(--ion-color-dark);box-shadow:0 0 8px #007aff4d}.selected_category[_ngcontent-%COMP%]{border:2px solid var(--ion-color-dark);border-radius:10px;border-left:10px solid var(--ion-color-dark);color:var(--ion-color-dark);cursor:pointer;--background: white;background:#fff}.non_selected_category[_ngcontent-%COMP%]{border:2px solid white;border-radius:10px;--background: white;background:#fff;border-left:10px solid white;cursor:pointer}ion-fab[_ngcontent-%COMP%]{margin-top:20px}.iname[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;color:var(--ion-color-dark);white-space:nowrap}.iname_price[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.total[_ngcontent-%COMP%]{font-weight:600;font-size:20px;text-align:right;color:#000}.trash_icon[_ngcontent-%COMP%]{margin-top:3px;color:#d00101;cursor:pointer}.white[_ngcontent-%COMP%]{background-color:#fff}.top[_ngcontent-%COMP%]{padding:10px 20px;margin-top:20px}.cont[_ngcontent-%COMP%]{padding:10px;margin-top:2%}swiper-slide[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: var(--ion-color-light)}.code[_ngcontent-%COMP%]{letter-spacing:3px}.top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:700}.offer[_ngcontent-%COMP%]{border:1px solid #d1d1d1;border-radius:10px;background-color:#fff;font-size:15px}.buttonDiv[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{background-color:var(--ion-color-dark);padding:10px;border-radius:50%;color:#fff}.buttonDiv[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;text-align:center;padding:10px 0}.buttonDiv[_ngcontent-%COMP%]{margin-top:-5%}.day[_ngcontent-%COMP%]{background-color:var(--ion-color-light);padding:10px;width:auto!important;text-align:center;border-radius:5px}.sek[_ngcontent-%COMP%]{width:100%;height:150px;border-radius:10px}.sek2[_ngcontent-%COMP%]{width:80%;height:50px;border-radius:10px;margin-left:10%;margin-top:-10%}.sek3[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:10px}.sek4[_ngcontent-%COMP%]{height:30px;border-radius:10px}.sek5[_ngcontent-%COMP%]{height:30px;border-radius:5px}.sek6[_ngcontent-%COMP%]{height:50px;width:100%;border-radius:10px}.badgeRow[_ngcontent-%COMP%]{float:right;margin-right:10px}.address[_ngcontent-%COMP%]{float:right;margin-top:5px}.desc[_ngcontent-%COMP%]{display:block;margin-top:5px}.ddays[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.swipe[_ngcontent-%COMP%]{background-color:#fff;padding:10px}.own[_ngcontent-%COMP%]{float:right;border:1px solid #607d8b;padding:5px;border-radius:5px;font-size:14px}.dtime[_ngcontent-%COMP%]{font-size:14px;padding:10px}.avial[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.item_desc[_ngcontent-%COMP%]{display:block;margin-top:10px;color:gray;font-size:15px}.actual_price[_ngcontent-%COMP%]{font-size:18px;display:block;margin-top:5px;font-weight:700;color:var(--ion-color-dark)}.add_btn[_ngcontent-%COMP%]{margin-top:10px;font-size:12px}.total_price[_ngcontent-%COMP%]{font-size:13px;font-weight:500;display:block;margin-top:18px;color:#b5b4b4}.price[_ngcontent-%COMP%]{font-size:18px;display:block;margin-top:20px;font-weight:700}img[_ngcontent-%COMP%]{border-radius:5px}.topBtn[_ngcontent-%COMP%]{margin-top:15px}.quantity-field[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:70px;height:25px}.number[_ngcontent-%COMP%]{border-top:1px solid #ddd;border-bottom:1px solid #ddd;text-align:center;background-color:1px solid #fff;margin:0;width:60px;height:100%;padding:0;outline:none}.address[_ngcontent-%COMP%]{--min-height: 40px !important;--padding-start: 20px;--padding-end: 20px;--background: var(--ion-color-light);width:100%}.cat_row[_ngcontent-%COMP%], .cat_img_col[_ngcontent-%COMP%], .cat_title_col[_ngcontent-%COMP%]{display:flex;align-items:center}.cat_title_col[_ngcontent-%COMP%]{height:100%}.cat_title[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#000;margin:0}.cat_img[_ngcontent-%COMP%]{width:10rem;height:auto}.quantity-field[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100px;height:30px;margin-top:20px}.quantity-field[_ngcontent-%COMP%]   .value-button[_ngcontent-%COMP%]{border:1px solid #ddd;margin:0;width:40px;height:100%;padding:0;background:#eee;outline:none;cursor:pointer}.quantity-field[_ngcontent-%COMP%]   .value-button[_ngcontent-%COMP%]:hover{background:#e6e6e6}.quantity-field[_ngcontent-%COMP%]   .value-button[_ngcontent-%COMP%]:active{background:#d2d2d2}.quantity-field[_ngcontent-%COMP%]   .decrease-button[_ngcontent-%COMP%]{margin-right:-4px;border-radius:8px 0 0 8px;color:#d00101;font-size:25px;cursor:pointer}.quantity-field[_ngcontent-%COMP%]   .increase-button[_ngcontent-%COMP%]{margin-left:-4px;border-radius:0 8px 8px 0;color:green;font-size:25px;cursor:pointer}.number[_ngcontent-%COMP%]{border-top:1px solid #ddd;border-bottom:1px solid #ddd;text-align:center;background-color:1px solid #fff;margin:0;width:60px;height:100%;padding:5px 15px;outline:none;display:inline;font-size:20px}.number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.cat_menu[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;color:#000!important}"]}),y})()},5864:($,I,s)=>{s.r(I),s.d(I,{OfferPage:()=>P});var u=s(467),v=s(177),R=s(4341),l=s(4742),e=s(4438),D=s(9568),F=s(3656);function T(g,b){if(1&g){const d=e.RV6();e.j41(0,"ion-button",4),e.bIt("click",function(){e.eBV(d);const m=e.XpG();return e.Njj(m.close())}),e.EFF(1),e.k0s()}if(2&g){const d=e.XpG();e.R7$(),e.JRh(d.text.cancel)}}function E(g,b){if(1&g&&(e.j41(0,"p",8),e.EFF(1),e.k0s()),2&g){const d=e.XpG(2);e.R7$(),e.JRh(d.text.no_offer)}}function t(g,b){if(1&g&&(e.j41(0,"ion-item",13)(1,"ion-avatar",14),e.nrm(2,"img",15),e.k0s(),e.j41(3,"ion-label",16)(4,"b"),e.EFF(5),e.k0s(),e.j41(6,"span",17),e.EFF(7),e.k0s()()()),2&g){const d=e.XpG().$implicit;e.R7$(5),e.JRh(d.code),e.R7$(2),e.JRh(d.desc)}}function a(g,b){if(1&g){const d=e.RV6();e.j41(0,"div",11),e.bIt("click",function(){const m=e.eBV(d).$implicit,i=e.XpG(3);return e.Njj(i.setOffer(m))}),e.DNE(1,t,8,2,"ion-item",12),e.k0s()}if(2&g){const d=b.$implicit,f=e.XpG(3);e.R7$(),e.Y8G("ngIf","SUBSCRIPTION"==f.type&&"SUBSCRIPTION"==d.subscription)}}function S(g,b){if(1&g&&(e.j41(0,"ion-item",13)(1,"ion-avatar",14),e.nrm(2,"img",15),e.k0s(),e.j41(3,"ion-label",16)(4,"b"),e.EFF(5),e.k0s(),e.j41(6,"span",17),e.EFF(7),e.k0s()()()),2&g){const d=e.XpG().$implicit;e.R7$(5),e.JRh(d.code),e.R7$(2),e.JRh(d.desc)}}function j(g,b){if(1&g){const d=e.RV6();e.j41(0,"div",11),e.bIt("click",function(){const m=e.eBV(d).$implicit,i=e.XpG(3);return e.Njj(i.setOffer(m))}),e.DNE(1,S,8,2,"ion-item",12),e.k0s()}if(2&g){const d=b.$implicit,f=e.XpG(3);e.R7$(),e.Y8G("ngIf","NORMAL"==f.type&&"NORMAL"==d.subscription)}}function x(g,b){if(1&g&&(e.j41(0,"div")(1,"ion-note",9),e.EFF(2),e.k0s(),e.nrm(3,"br")(4,"br"),e.DNE(5,a,2,1,"div",10)(6,j,2,1,"div",10),e.k0s()),2&g){const d=e.XpG(2);e.R7$(2),e.JRh(d.text.avilable_offer),e.R7$(3),e.Y8G("ngForOf",d.data),e.R7$(),e.Y8G("ngForOf",d.data)}}function C(g,b){if(1&g&&(e.j41(0,"ion-content",5),e.DNE(1,E,2,1,"p",6)(2,x,7,3,"div",7),e.k0s()),2&g){const d=e.XpG();e.R7$(),e.Y8G("ngIf",d.data&&0==d.data.length),e.R7$(),e.Y8G("ngIf",d.data&&d.data.length>0)}}let P=(()=>{var g;class b{constructor(f,m){this.otherService=f,this.navParams=m,this.data=m.get("data"),this.type=m.get("type"),console.log("this.type",this.type);const i=localStorage.getItem("app_lang");null!==i&&(this.text=JSON.parse(i),this.text=this.text.text)}ngOnInit(){}close(f=null){var m=this;return(0,u.A)(function*(){m.otherService.closeModel(f)})()}setOffer(f){var m=this;return(0,u.A)(function*(){m.otherService.closeModel(f)})()}}return(g=b).\u0275fac=function(f){return new(f||g)(e.rXU(D.G),e.rXU(F.y8))},g.\u0275cmp=e.VBU({type:g,selectors:[["app-offer"]],decls:5,vars:2,consts:[[1,"ion-no-border"],["slot","end"],["color","medium",3,"click",4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","medium",3,"click"],[1,"ion-padding"],["align","center",4,"ngIf"],[4,"ngIf"],["align","center"],[2,"color","black"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["lines","none","detail","","style","cursor: pointer;",4,"ngIf"],["lines","none","detail","",2,"cursor","pointer"],["slot","start"],["src","assets/discount-icon.png"],[1,"ion-text-wrap"],[2,"display","block","margin-top","5px"]],template:function(f,m){1&f&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.DNE(3,T,2,1,"ion-button",2),e.k0s()()(),e.DNE(4,C,3,2,"ion-content",3)),2&f&&(e.R7$(3),e.Y8G("ngIf",m.text),e.R7$(),e.Y8G("ngIf",m.data&&m.text))},dependencies:[l.bv,l.mC,l.Jm,l.QW,l.W9,l.eU,l.uz,l.he,l.JI,l.ai,v.MD,v.Sq,v.bT,R.YN],styles:["ion-item[_ngcontent-%COMP%]{margin-top:20px;--min-height: 50px !important;border-radius:5px}ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}.ion-text-wrap[_ngcontent-%COMP%]{color:#000}ion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]{--background: white !important;color:#000!important}"]}),b})()},5704:($,I,s)=>{s.r(I),s.d(I,{PaymentPage:()=>b});var u=s(467),v=s(177),R=s(4341),l=s(4742),e=s(5083),D=s(3923);const F=(0,e.F3)("Stripe",{web:()=>s.e(1651).then(s.bind(s,1651)).then(d=>new d.StripeWeb)});var T=s(1594),E=s(9350),a=s(4438),S=s(3656),j=s(9568),x=s(1626),C=s(2068);function P(d,f){if(1&d){const m=a.RV6();a.j41(0,"ion-button",4),a.bIt("click",function(){a.eBV(m);const p=a.XpG();return a.Njj(p.close())}),a.EFF(1),a.k0s()}if(2&d){const m=a.XpG();a.R7$(),a.JRh(m.text.cancel)}}function g(d,f){if(1&d){const m=a.RV6();a.j41(0,"ion-content",5)(1,"h3",6),a.EFF(2,"You have insufficient balance in your wallet. Please add "),a.j41(3,"strong"),a.EFF(4),a.k0s(),a.EFF(5," to continue."),a.k0s(),a.nrm(6,"br")(7,"br"),a.j41(8,"ion-row")(9,"ion-col",7),a.nrm(10,"img",8),a.k0s(),a.nrm(11,"br"),a.j41(12,"ion-col",9)(13,"ion-button",10),a.bIt("click",function(){a.eBV(m);const p=a.XpG();return a.Njj(p.addAmountToWallet())}),a.EFF(14),a.nI1(15,"currency"),a.k0s()()()()}if(2&d){const m=a.XpG();a.R7$(4),a.Lme("",m.setting.currency,"",m.data.amount,""),a.R7$(10),a.SpI("Add ",a.i5U(15,3,m.data.amount,"INR")," to Wallet")}}let b=(()=>{var d;class f{constructor(i,p,h,k){this.navParams=i,this.otherService=p,this.http=h,this.server=k,this.options={key:"",amount:0,name:"",description:"The Daily Fruit",image:"",order_id:"",handler:function(z){var N=new CustomEvent("payment.success",{detail:z,bubbles:!0,cancelable:!0});window.dispatchEvent(N)},prefill:{name:"",email:"",contact:""},notes:{address:""},theme:{color:"#3399cc"}},this.message="Not yet stared",this.paymentId="",this.error="",this.data=i.get("data"),this.user_id=localStorage.getItem("user_id");const M=localStorage.getItem("admin_setting"),G=localStorage.getItem("user_data");null!==M&&(this.setting=JSON.parse(M)),null!==G&&(this.user=JSON.parse(G));const w=localStorage.getItem("app_lang");null!==w&&(this.text=JSON.parse(w),this.text=this.text.text),F.initialize({publishableKey:this.data.stripe_key}),this.meta={counsumer_id:778383,consumer_mac:"sdjksfhsd887f8s"},this.customizations={title:"Wallet Recharge",description:"Wallet Recharge",logo:"https://dicont.s3.amazonaws.com/static/flow-logos/flutterwave-logo.png"},this.customerDetails={name:this.user.name,email:this.user.email,phone_number:this.user.phone}}ngOnInit(){}addAmountToWallet(){var i=this;return(0,u.A)(function*(){if(i.data.amount){const p={user_id:i.user_id,amount:i.data.amount,notes:"Add To Wallet\xa0Razorpay"};(yield i.server.createRazorpayOrder(p)).subscribe(h=>{i.options.key=h.razor_key.replace(/\r\n/g,""),i.options.order_id=h.order_id,i.options.amount=Number(h.amount),i.options.name="The Daily Fruit",i.options.prefill.name="The Daily Fruit",i.options.prefill.email="support@thedailyfruit.in",i.options.prefill.contact="9998887776",i.payNow()})}else i.otherService.toast(i.text.enter_amount)})()}payNow(){if(typeof Razorpay>"u")console.error("Razorpay is not loaded yet.");else{var i=new Razorpay(this.options);i.open(),i.on("payment.failed",function(p){console.error("Payment failed",p.error)})}}onPaymentSuccess(i){var p=this;return(0,u.A)(function*(){let h=i.detail,k={razorpay_order_id:null==h?void 0:h.razorpay_order_id,razorpay_payment_id:null==h?void 0:h.razorpay_payment_id,razorpay_signature:null==h?void 0:h.razorpay_signature};(yield p.server.verifyRazorpayOrder(k)).subscribe(M=>{p.otherService.triggerLoadData.emit(),p.otherService.closeModel(M)}),p.message="Success Payment"})()}updateWallet(i=null){var p=this;return(0,u.A)(function*(){const h={amount:p.data.amount,user_id:localStorage.getItem("user_id"),trans_id:i,payment_method:p.payment_method,notes:"Wallet Recharge"};p.server.updateWallet(h).subscribe(k=>{p.payment_method=null,p.otherService.toast(p.text.payment_added),p.close(i)})})()}close(i=null){var p=this;return(0,u.A)(function*(){p.otherService.closeModel(i)})()}httpPost(){const i={user:localStorage.getItem("user_id"),total:this.data.amount};return this.http.post(this.server.getApiUrl()+"stripePayment",i).pipe((0,T.$)())}paymentSheet(){var i=this;return(0,u.A)(function*(){i.payment_method=1;try{F.addListener(D.SQ.Completed,()=>{});const p=i.httpPost(),{paymentIntent:h,ephemeralKey:k,customer:M}=yield function t(d,f){const m="object"==typeof f;return new Promise((i,p)=>{let k,h=!1;d.subscribe({next:M=>{k=M,h=!0},error:p,complete:()=>{h?i(k):m?i(f.defaultValue):p(new E.G)}})})}(p);yield F.createPaymentSheet({paymentIntentClientSecret:h,customerId:M,customerEphemeralKeySecret:k,merchantDisplayName:i.setting.app_name});const G=yield F.presentPaymentSheet();G&&G.paymentResult===D.SQ.Completed?i.updateWallet(i.splitAndJoin(h)):i.otherService.toast(i.text.payment_cancel)}catch{i.otherService.toast(i.text.payment_cancel)}})()}splitAndJoin(i){return i.split("_").slice(0,2).join("_")}payWithRazorpay(){return(0,u.A)(function*(){})()}}return(d=f).\u0275fac=function(i){return new(i||d)(a.rXU(S.y8),a.rXU(j.G),a.rXU(x.Qq),a.rXU(C.Z))},d.\u0275cmp=a.VBU({type:d,selectors:[["app-payment"]],hostBindings:function(i,p){1&i&&a.bIt("payment.success",function(k){return p.onPaymentSuccess(k)},!1,a.tSv)},decls:5,vars:2,consts:[[1,"ion-no-border"],["slot","end"],["color","medium",3,"click",4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","medium",3,"click"],[1,"ion-padding"],[2,"color","black"],["size","12",2,"text-align","center"],["src","assets/razorpay.gif",2,"width","40%","height","auto","border-radius","25px"],["size","12"],["mode","ios","expand","block","color","dark","id","open-modal","expand","block",3,"click"]],template:function(i,p){1&i&&(a.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),a.DNE(3,P,2,1,"ion-button",2),a.k0s()()(),a.DNE(4,g,16,6,"ion-content",3)),2&i&&(a.R7$(3),a.Y8G("ngIf",p.text),a.R7$(),a.Y8G("ngIf",p.data&&p.text))},dependencies:[l.bv,l.Jm,l.QW,l.hU,l.W9,l.eU,l.ln,l.ai,v.MD,v.bT,v.oe,R.YN],styles:["ion-item[_ngcontent-%COMP%]{border-radius:5px;--min-height:60px;border:1px solid #f1f1f1}ion-toolbar[_ngcontent-%COMP%]{--background: white}ion-thumbnail[_ngcontent-%COMP%]{width:32px;height:32px}"]}),f})()}}]);
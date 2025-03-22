"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5704,5864,7564,9738],{3923:(B,O,c)=>{c.d(O,{$o:()=>h,_G:()=>C,Vq:()=>R,SQ:()=>d});var h=function(o){return o.Loaded="applePayLoaded",o.FailedToLoad="applePayFailedToLoad",o.Completed="applePayCompleted",o.Canceled="applePayCanceled",o.Failed="applePayFailed",o.DidSelectShippingContact="applePayDidSelectShippingContact",o.DidCreatePaymentMethod="applePayDidCreatePaymentMethod",o}(h||{}),C=function(o){return o.Loaded="googlePayLoaded",o.FailedToLoad="googlePayFailedToLoad",o.Completed="googlePayCompleted",o.Canceled="googlePayCanceled",o.Failed="googlePayFailed",o}(C||{}),R=function(o){return o.Loaded="paymentFlowLoaded",o.FailedToLoad="paymentFlowFailedToLoad",o.Opened="paymentFlowOpened",o.Created="paymentFlowCreated",o.Completed="paymentFlowCompleted",o.Canceled="paymentFlowCanceled",o.Failed="paymentFlowFailed",o}(R||{}),d=function(o){return o.Loaded="paymentSheetLoaded",o.FailedToLoad="paymentSheetFailedToLoad",o.Completed="paymentSheetCompleted",o.Canceled="paymentSheetCanceled",o.Failed="paymentSheetFailed",o}(d||{})},7762:(B,O,c)=>{c.d(O,{L:()=>C});const C=(0,c(5083).F3)("Geolocation",{web:()=>c.e(2920).then(c.bind(c,2920)).then(R=>new R.GeolocationWeb)})},7564:(B,O,c)=>{c.r(O),c.d(O,{AddressPage:()=>y});var h=c(467),C=c(177),R=c(4341),d=c(4742),o=c(7762),t=c(4438),F=c(3656),A=c(9568),e=c(1208),j=c(2068);const n=["map"];function $(u,M){if(1&u){const b=t.RV6();t.j41(0,"ion-button",12),t.bIt("click",function(){t.eBV(b);const r=t.XpG();return t.Njj(r.close())}),t.EFF(1),t.k0s()}if(2&u){const b=t.XpG();t.R7$(),t.JRh(b.text.cancel)}}function T(u,M){if(1&u){const b=t.RV6();t.j41(0,"ion-item",17),t.bIt("click",function(){const r=t.eBV(b).$implicit,f=t.XpG(2);return t.Njj(f.close(r))}),t.j41(1,"ion-label"),t.EFF(2),t.j41(3,"small",18),t.EFF(4),t.k0s()()()}if(2&u){const b=M.$implicit;t.R7$(2),t.JRh(b.type),t.R7$(2),t.JRh(b.address)}}function P(u,M){if(1&u&&(t.j41(0,"ion-accordion-group")(1,"ion-accordion",13)(2,"ion-item",14)(3,"ion-label"),t.EFF(4),t.k0s()(),t.j41(5,"div",15),t.DNE(6,T,5,2,"ion-item",16),t.k0s()()()),2&u){const b=t.XpG();t.R7$(4),t.JRh(b.text.saved_address),t.R7$(2),t.Y8G("ngForOf",b.data)}}function I(u,M){if(1&u){const b=t.RV6();t.j41(0,"ion-button",19),t.bIt("click",function(){t.eBV(b);const r=t.XpG();return t.Njj(r.saveAddress())}),t.EFF(1),t.k0s()}if(2&u){const b=t.XpG();t.R7$(),t.JRh(b.text.save_address)}}function k(u,M){1&u&&(t.j41(0,"ion-button",20),t.nrm(1,"ion-spinner",21),t.k0s())}let y=(()=>{var u;class M{constructor(s,r,f,m,p,g,E){this.navParams=s,this.platform=r,this.zone=f,this.otherService=m,this.mapService=p,this.server=g,this.alertCtrl=E,this.type="Home",this.autocompleteItems=[],this.show=!0,this.hasClick=!1,this.data=s.get("data"),this.store_id=s.get("store_id");const D=localStorage.getItem("app_lang");null!==D&&(this.text=JSON.parse(D),this.text=this.text.text)}ngOnInit(){this.getCurrentLocation()}requestLocationPermission(){var s=this;return(0,h.A)(function*(){try{"granted"===(yield o.L.requestPermissions()).location?s.getCurrentLocation():s.showAlert("Permission Denied","Please allow location access in your app or browser settings.")}catch(r){s.showAlert("Error","Unable to request location permission."),console.error("Permission request error",r)}})()}getCurrentLocation(){var s=this;return(0,h.A)(function*(){try{const r=yield o.L.getCurrentPosition();s.latitude=r.coords.latitude,s.longitude=r.coords.longitude,console.log("Latitude:",s.latitude,"Longitude:",s.longitude)}catch(r){1===r.code?s.showAlert("Location Permission Denied","Please allow location access in your app or browser settings."):s.showAlert("Error","Failed to get your location."),console.error("Error getting location",r)}})()}showAlert(s,r){var f=this;return(0,h.A)(function*(){f.otherService.confirmPernissions(s,r).then(m=>{f.close()})})()}setType(s){this.type=s}ionViewDidEnter(){var s=this;return(0,h.A)(function*(){s.platform.ready().then(()=>{s.loadMap()})})()}close(s=[]){var r=this;return(0,h.A)(function*(){r.otherService.closeModel(s)})()}loadMap(){var s=this;return(0,h.A)(function*(){s.map=null,s.show=!0;let r=yield s.mapService.getMap();s.map=yield new google.maps.Map(s.mapElement.nativeElement,r),s.show=!1,s.map.addListener("tilesloaded",(0,h.A)(function*(){s.lat=s.map.center.lat(),s.lng=s.map.center.lng()}))})()}UpdateSearchResults(){this.GoogleAutocomplete.getPlacePredictions({input:this.autocomplete},(s,r)=>{this.autocompleteItems=[],this.zone.run(()=>{s.forEach(f=>{this.autocompleteItems.push(f)})})})}SelectSearchResult(s){const r=new google.maps.Geocoder;new google.maps.InfoWindow,this.placeid=s.place_id,r.geocode({placeId:this.placeid},(m,p)=>{"OK"===p?m[0]?(this.map.setZoom(16),this.map.setCenter(m[0].geometry.location)):window.alert("No results found"):window.alert("Geocoder failed due to: "+p)}),this.ClearAutocomplete()}ClearAutocomplete(){this.autocompleteItems=[],this.autocomplete=""}saveAddress(){var s=this;return(0,h.A)(function*(){if(s.lat=s.latitude,s.lng=s.longitude,!s.address||s.address.length<4||!s.lat||!s.lng)return s.otherService.toast(s.text.correct_detail);let r={type:s.type,address:s.address,floor:s.floor,landmark:s.landmark,lat:s.latitude,lng:s.longitude,user_id:localStorage.getItem("user_id"),store_id:s.store_id};s.hasClick=!0,s.server.saveAddress(r).subscribe(f=>{s.hasClick=!1,s.close(f.latest)})})()}}return(u=M).\u0275fac=function(s){return new(s||u)(t.rXU(F.y8),t.rXU(F.OD),t.rXU(t.SKi),t.rXU(A.G),t.rXU(e.u),t.rXU(j.Z),t.rXU(d.hG))},u.\u0275cmp=t.VBU({type:u,selectors:[["app-address"]],viewQuery:function(s,r){if(1&s&&t.GBs(n,5),2&s){let f;t.mGM(f=t.lsd())&&(r.mapElement=f.first)}},decls:31,vars:23,consts:[[1,"ion-no-border"],["slot","end"],["color","medium",3,"click",4,"ngIf"],[1,"ion-padding"],[4,"ngIf"],[2,"font-weight","bold"],["size","4",3,"click"],["name","address","label-placement","floating","fill","outline","mode","md",3,"ngModelChange","label","ngModel","disabled"],["name","floor","label-placement","floating","fill","outline","mode","md",3,"ngModelChange","label","ngModel","disabled"],["name","landmark","label-placement","floating","fill","outline","mode","md",3,"ngModelChange","label","ngModel","disabled"],["mode","ios","expand","block","color","dark","type","submit",3,"click",4,"ngIf"],["mode","ios","expand","block","color","dark","type","button",4,"ngIf"],["color","medium",3,"click"],["value","first"],["slot","header","color","light",1,"h"],["slot","content",1,"ion-padding"],["style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[2,"cursor","pointer",3,"click"],[2,"color","gray","margin-top","5px","display","block"],["mode","ios","expand","block","color","dark","type","submit",3,"click"],["mode","ios","expand","block","color","dark","type","button"],["name","crescent"]],template:function(s,r){1&s&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t.DNE(3,$,2,1,"ion-button",2),t.k0s()()(),t.j41(4,"ion-content")(5,"div",3),t.DNE(6,P,7,2,"ion-accordion-group",4),t.j41(7,"p",5),t.EFF(8),t.k0s(),t.nrm(9,"br"),t.j41(10,"ion-row")(11,"ion-col",6),t.bIt("click",function(){return r.setType("Home")}),t.j41(12,"span"),t.EFF(13),t.k0s()(),t.j41(14,"ion-col",6),t.bIt("click",function(){return r.setType("Office")}),t.j41(15,"span"),t.EFF(16),t.k0s()(),t.j41(17,"ion-col",6),t.bIt("click",function(){return r.setType("Other")}),t.j41(18,"span"),t.EFF(19),t.k0s()()(),t.nrm(20,"br")(21,"br"),t.j41(22,"ion-input",7),t.mxI("ngModelChange",function(m){return t.DH7(r.address,m)||(r.address=m),m}),t.k0s(),t.nrm(23,"br"),t.j41(24,"ion-input",8),t.mxI("ngModelChange",function(m){return t.DH7(r.floor,m)||(r.floor=m),m}),t.k0s(),t.nrm(25,"br"),t.j41(26,"ion-input",9),t.mxI("ngModelChange",function(m){return t.DH7(r.landmark,m)||(r.landmark=m),m}),t.k0s(),t.nrm(27,"br")(28,"br"),t.DNE(29,I,2,1,"ion-button",10)(30,k,2,0,"ion-button",11),t.k0s()()),2&s&&(t.R7$(3),t.Y8G("ngIf",r.text),t.R7$(3),t.Y8G("ngIf",r.data&&r.data.length>0),t.R7$(2),t.JRh(r.text.add_new_address),t.R7$(4),t.HbH("Home"==r.type?"typeSelected":"type"),t.R7$(),t.JRh(r.text.home),t.R7$(2),t.HbH("Office"==r.type?"typeSelected":"type"),t.R7$(),t.JRh(r.text.office),t.R7$(2),t.HbH("Other"==r.type?"typeSelected":"type"),t.R7$(),t.JRh(r.text.other),t.R7$(3),t.FS9("label",r.text.com_address),t.R50("ngModel",r.address),t.Y8G("disabled",r.hasClick),t.R7$(2),t.FS9("label",r.text.floor),t.R50("ngModel",r.floor),t.Y8G("disabled",r.hasClick),t.R7$(2),t.FS9("label",r.text.landmark),t.R50("ngModel",r.landmark),t.Y8G("disabled",r.hasClick),t.R7$(3),t.Y8G("ngIf",!r.hasClick),t.R7$(),t.Y8G("ngIf",r.hasClick))},dependencies:[d.bv,d.xk,d.YH,d.Jm,d.QW,d.hU,d.W9,d.eU,d.$w,d.uz,d.he,d.ln,d.w2,d.ai,d.Gw,C.MD,C.Sq,C.bT,R.YN,R.BC,R.vS],styles:["ion-row[_ngcontent-%COMP%]{text-align:center}ion-toolbar[_ngcontent-%COMP%]{--background: white}.type[_ngcontent-%COMP%]{background-color:var(--ion-color-light);padding:10px 15px;border-radius:5px}.typeSelected[_ngcontent-%COMP%]{background-color:var(--ion-color-dark);color:#fff;padding:10px 15px;border-radius:5px}#map[_ngcontent-%COMP%]{width:100%;height:45vh}.map-wrapper[_ngcontent-%COMP%]{position:relative}.map-wrapper[_ngcontent-%COMP%]   #map_center[_ngcontent-%COMP%]{position:absolute;z-index:99;height:40px;width:40px;top:50%;left:50%;margin-left:-21px;margin-top:-41px}.h[_ngcontent-%COMP%]{--min-height:10px !important}ion-accordion[_ngcontent-%COMP%]{border-radius:10px;margin-bottom:40px}"]}),M})()},9738:(B,O,c)=>{c.r(O),c.d(O,{CheckoutPage:()=>J});var h=c(467),C=c(177),R=c(4341),d=c(4742),o=c(3804),t=c(7564),F=c(5704),A=c(5864),e=c(4438),j=c(2068),n=c(9568);const $=()=>[0,1];function T(l,v){if(1&l&&(e.j41(0,"ion-title"),e.EFF(1),e.k0s()),2&l){const i=e.XpG();e.R7$(),e.JRh(i.text.checkout_title)}}function P(l,v){1&l&&e.nrm(0,"ion-skeleton-text",11),2&l&&e.Y8G("animated",!0)}function I(l,v){if(1&l&&(e.j41(0,"div"),e.DNE(1,P,1,1,"ion-skeleton-text",10),e.k0s()),2&l){const i=e.XpG(2);e.R7$(),e.Y8G("ngForOf",i.fakeData)}}function k(l,v){1&l&&(e.j41(0,"ion-col",26),e.nrm(1,"img",27),e.k0s())}function y(l,v){if(1&l&&(e.j41(0,"small",28),e.EFF(1),e.k0s()),2&l){const i=e.XpG(3);e.R7$(),e.JRh(i.address.address)}}function u(l,v){if(1&l&&(e.j41(0,"ion-select-option",29),e.EFF(1),e.k0s()),2&l){const i=v.$implicit;e.Y8G("value",i.id),e.R7$(),e.JRh(i.title)}}function M(l,v){if(1&l&&(e.j41(0,"ion-select-option",29),e.EFF(1),e.k0s()),2&l){const i=v.$implicit;e.Y8G("value",i),e.R7$(),e.JRh(i)}}function b(l,v){if(1&l&&(e.j41(0,"ion-row")(1,"ion-col",33),e.EFF(2),e.k0s(),e.j41(3,"ion-col",34),e.EFF(4),e.k0s(),e.j41(5,"ion-col",35),e.EFF(6),e.k0s(),e.j41(7,"ion-col",35),e.EFF(8),e.k0s()()),2&l){const i=v.$implicit,a=e.XpG(4);e.R7$(2),e.Lme("",i.item," - ",i.type,""),e.R7$(2),e.LHq("",a.text.start," : ",i.start," | ",a.text.valid," : ",i.end,""),e.R7$(2),e.Lme("",a.text.total_day_count," : ",i.dayCount,""),e.R7$(2),e.ZXR("",a.text.amount," : ",i.currency,"",i.price," x ",i.dayCount," = ",i.currency,"",i.total_price,"")}}function s(l,v){if(1&l&&(e.j41(0,"h3"),e.EFF(1),e.k0s()),2&l){const i=e.XpG(4);e.R7$(),e.E5c("",i.text.payable_amount," : ",i.cal.currency,"",i.cal.total,"")}}function r(l,v){if(1&l&&(e.j41(0,"h3",36),e.EFF(1),e.j41(2,"s"),e.EFF(3),e.k0s(),e.EFF(4),e.k0s()),2&l){const i=e.XpG(4);e.R7$(),e.SpI("",i.text.payable_amount," : "),e.R7$(2),e.Lme("",i.cal.currency,"",i.cal.total,""),e.R7$(),e.Lme(" ",i.cal.currency,"",i.total,"")}}function f(l,v){if(1&l&&(e.j41(0,"div",30),e.DNE(1,b,9,14,"ion-row",31)(2,s,2,3,"h3",2)(3,r,5,5,"h3",32),e.k0s()),2&l){const i=e.XpG(3);e.R7$(),e.Y8G("ngForOf",i.cal.summery),e.R7$(),e.Y8G("ngIf",!i.save),e.R7$(),e.Y8G("ngIf",i.save)}}function m(l,v){if(1&l&&(e.j41(0,"small",39),e.EFF(1),e.k0s()),2&l){const i=e.XpG(4);e.R7$(),e.E5c("",i.text.you_save," ",i.cal.currency,"",i.save,"")}}function p(l,v){if(1&l){const i=e.RV6();e.j41(0,"ion-item",14),e.bIt("click",function(){e.eBV(i);const _=e.XpG(3);return e.Njj(_.getOffer())}),e.j41(1,"label"),e.EFF(2),e.DNE(3,m,2,3,"small",37),e.k0s(),e.nrm(4,"ion-icon",38),e.k0s()}if(2&l){const i=e.XpG(3);e.R7$(2),e.SpI("",i.text.discount_offers," "),e.R7$(),e.Y8G("ngIf",i.save)}}function g(l,v){if(1&l){const i=e.RV6();e.j41(0,"ion-button",40),e.bIt("click",function(){e.eBV(i);const _=e.XpG(3);return e.Njj(_.placeOrder())}),e.EFF(1),e.k0s()}if(2&l){const i=e.XpG(3);e.R7$(),e.JRh(i.text.checkout_button)}}function E(l,v){if(1&l){const i=e.RV6();e.j41(0,"div")(1,"ion-row"),e.DNE(2,k,2,0,"ion-col",12),e.j41(3,"ion-col",13)(4,"ion-item",14),e.bIt("click",function(){e.eBV(i);const _=e.XpG(2);return e.Njj(_.getAddress())}),e.j41(5,"label"),e.EFF(6),e.DNE(7,y,2,1,"small",15),e.k0s(),e.nrm(8,"ion-icon",16),e.k0s(),e.nrm(9,"br"),e.j41(10,"p",17),e.EFF(11),e.k0s(),e.j41(12,"ion-item",18)(13,"ion-select",19),e.mxI("ngModelChange",function(_){e.eBV(i);const x=e.XpG(2);return e.DH7(x.sub_time,_)||(x.sub_time=_),e.Njj(_)}),e.bIt("ionChange",function(){e.eBV(i);const _=e.XpG(2);return e.Njj(_.startDate())}),e.DNE(14,u,2,2,"ion-select-option",20),e.k0s(),e.nrm(15,"ion-icon",21),e.k0s(),e.nrm(16,"br"),e.j41(17,"p",17),e.EFF(18),e.k0s(),e.j41(19,"ion-item",18)(20,"ion-select",22),e.mxI("ngModelChange",function(_){e.eBV(i);const x=e.XpG(2);return e.DH7(x.start_date,_)||(x.start_date=_),e.Njj(_)}),e.bIt("ionChange",function(){e.eBV(i);const _=e.XpG(2);return e.Njj(_.startDate())}),e.DNE(21,M,2,2,"ion-select-option",20),e.k0s(),e.nrm(22,"ion-icon",21),e.k0s(),e.nrm(23,"br"),e.DNE(24,f,4,3,"div",23)(25,p,5,2,"ion-item",24)(26,g,2,1,"ion-button",25),e.k0s()()()}if(2&l){const i=e.XpG(2);e.R7$(2),e.Y8G("ngIf",!i.isMobile),e.R7$(),e.Y8G("size",i.isMobile?12:6),e.R7$(3),e.SpI("",i.text.delivery_address," "),e.R7$(),e.Y8G("ngIf",i.address),e.R7$(4),e.JRh(i.text.checkout_desc),e.R7$(2),e.FS9("label",i.text.sub_time_title),e.R50("ngModel",i.sub_time),e.R7$(),e.Y8G("ngForOf",i.data.time),e.R7$(4),e.JRh(i.text.starting_date_desc),e.R7$(2),e.FS9("label",i.text.start_date),e.R50("ngModel",i.start_date),e.R7$(),e.Y8G("ngForOf",i.data.dates),e.R7$(3),e.Y8G("ngIf",i.cal),e.R7$(),e.Y8G("ngIf",i.cal&&i.cal.total),e.R7$(),e.Y8G("ngIf",!i.isMobile)}}function D(l,v){if(1&l&&(e.j41(0,"ion-content",5)(1,"ion-grid",9),e.DNE(2,I,2,1,"div",2)(3,E,27,15,"div",2),e.k0s()()),2&l){const i=e.XpG();e.R7$(),e.Y8G("fixed",!0),e.R7$(),e.Y8G("ngIf",!i.data),e.R7$(),e.Y8G("ngIf",i.data)}}function G(l,v){if(1&l&&(e.j41(0,"ion-button",41),e.EFF(1),e.k0s()),2&l){const i=e.XpG();e.R7$(),e.JRh(i.text.checkout_button)}}function L(l,v){1&l&&(e.j41(0,"ion-button",42),e.nrm(1,"ion-spinner",43),e.k0s())}function U(l,v){if(1&l&&(e.j41(0,"p",50),e.EFF(1),e.k0s()),2&l){const i=e.XpG(3);e.R7$(),e.LHq("",i.text.you_have_to," ",i.cal.currency,"",i.total-i.data.user.wallet," ",i.text.add_more,"")}}function N(l,v){if(1&l){const i=e.RV6();e.j41(0,"ion-button",51),e.bIt("click",function(){e.eBV(i);const _=e.XpG(3);return e.Njj(_.placeOrder())}),e.EFF(1),e.k0s()}if(2&l){const i=e.XpG(3);e.R7$(),e.JRh(i.text.checkout_button)}}function X(l,v){1&l&&(e.j41(0,"ion-button",42),e.nrm(1,"ion-spinner",43),e.k0s())}function W(l,v){if(1&l&&(e.j41(0,"div",45)(1,"h3",46),e.EFF(2),e.k0s(),e.j41(3,"ion-item")(4,"ion-label"),e.EFF(5),e.j41(6,"span",47),e.EFF(7),e.k0s()()(),e.j41(8,"ion-item")(9,"ion-label"),e.EFF(10),e.j41(11,"span",47),e.EFF(12),e.k0s()()(),e.DNE(13,U,2,4,"p",48),e.nrm(14,"br"),e.DNE(15,N,2,1,"ion-button",49)(16,X,2,0,"ion-button",7),e.k0s()),2&l){const i=e.XpG(2);e.R7$(2),e.JRh(i.text.summery),e.R7$(3),e.SpI("",i.text.total_amount," "),e.R7$(2),e.Lme("",i.cal.currency,"",i.total,""),e.R7$(3),e.SpI("",i.text.wallet_amount," "),e.R7$(2),e.Lme("",i.cal.currency,"",i.data.user.wallet,""),e.R7$(),e.Y8G("ngIf",i.total>i.data.user.wallet),e.R7$(2),e.Y8G("ngIf",!i.hasClick),e.R7$(),e.Y8G("ngIf",i.hasClick)}}function Y(l,v){1&l&&(e.j41(0,"ion-modal",44),e.DNE(1,W,17,10,"ng-template"),e.k0s()),2&l&&e.Y8G("initialBreakpoint",1)("breakpoints",e.lJ4(2,$))}(0,o.kz)();let J=(()=>{var l;class v{constructor(a,_,x){this.server=a,this.otherService=_,this.modalCtrl=x,this.fakeData=[1,2,3,4,5,6],this.hasClick=!1,this.show=!0,this.isMobile=!1,this.otherService.statusBar("#ffffff",2);const S=localStorage.getItem("app_lang");null!==S&&(this.text=JSON.parse(S),this.text=this.text.text),this.checkScreenSize()}onResize(a){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ngOnInit(){}ionViewDidEnter(){this.loadData()}loadData(){var a=this;return(0,h.A)(function*(){a.server.checkoutData().subscribe(_=>{a.data=_.data,console.log("this.data",a.data),a.savedAddress=a.data.address})})()}validate(){return!!(this.sub_time&&this.start_date&&this.address)}getAddress(){var a=this;return(0,h.A)(function*(){const _={data:a.savedAddress,store_id:a.data.store.id},x=yield a.modalCtrl.create({component:t.AddressPage,animated:!0,mode:"ios",componentProps:_});return x.onDidDismiss().then(S=>{console.log(S),S.data.id&&(a.address=S.data)}),yield x.present()})()}startDate(){var a=this;return(0,h.A)(function*(){if(!a.sub_time)return a.otherService.toast(a.text.sub_time);if(!a.start_date)return;a.otherService.showLoading();const _={plan:a.sub_time,start_date:a.start_date,cart_no:localStorage.getItem("cart_no"),user_id:localStorage.getItem("user_id"),store_id:a.data.store.id};a.server.getAmount(_).subscribe(x=>{a.cal=x,a.total=a.cal.total,a.otherService.hideLoading(),console.log(a.cal.summery)})})()}checkout(){var a=this;return(0,h.A)(function*(){a.hasClick=!0;const _={user_id:localStorage.getItem("user_id"),cart_no:localStorage.getItem("cart_no"),cal:a.cal,address:a.address.id,plan:a.sub_time,total:a.total,discount:a.save,store_id:a.data.store.id,notes:localStorage.getItem("order_notes")&&"undefined"!=localStorage.getItem("order_notes")?localStorage.getItem("order_notes"):null};a.server.placeOrder(_).subscribe(x=>{1==x.done?(a.show=!1,localStorage.removeItem("order_notes"),a.otherService.redirect("success")):a.otherService.toast(x.error),a.hasClick=!1})})()}placeOrder(){var a=this;return(0,h.A)(function*(){a.validate()?a.total>a.data.user.wallet?a.openModel({amount:a.total-a.data.user.wallet,stripe_key:a.data.stripe_id}):a.checkout():a.otherService.toast(a.text.all_field)})()}openModel(a){var _=this;return(0,h.A)(function*(){const x=yield _.modalCtrl.create({component:F.PaymentPage,animated:!0,mode:"ios",componentProps:{data:a}});return x.onDidDismiss().then(S=>{S.data?_.checkout():_.otherService.toast(_.text.payment_cancel)}),yield x.present()})()}getOffer(){var a=this;return(0,h.A)(function*(){const _=yield a.modalCtrl.create({component:A.OfferPage,animated:!0,mode:"ios",componentProps:{data:a.data.offer}});return _.onDidDismiss().then(x=>{x.data.code&&(a.offer=x.data,a.applyOffer())}),yield _.present()})()}applyOffer(){var a=this;return(0,h.A)(function*(){if(1==a.offer.type){const _=a.cal.total*a.offer.value/100;a.total=a.cal.total-_,a.save=_.toFixed(1)}else a.total=a.cal.total-a.offer.value,a.save=a.offer.value})()}}return(l=v).\u0275fac=function(a){return new(a||l)(e.rXU(j.Z),e.rXU(n.G),e.rXU(d.W3))},l.\u0275cmp=e.VBU({type:l,selectors:[["app-checkout"]],hostBindings:function(a,_){1&a&&e.bIt("resize",function(S){return _.onResize(S)},!1,e.tSv)},decls:12,vars:5,consts:[[1,"ion-no-border"],["color","dark"],[4,"ngIf"],["slot","start"],["class","ion-padding",4,"ngIf"],[1,"ion-padding"],["mode","ios","expand","block","color","dark","id","open-modal","expand","block",4,"ngIf"],["mode","ios","color","dark","expand","block",4,"ngIf"],["trigger","open-modal",3,"initialBreakpoint","breakpoints",4,"ngIf"],[3,"fixed"],["class","sek1",3,"animated",4,"ngFor","ngForOf"],[1,"sek1",3,"animated"],["size","6",4,"ngIf"],[3,"size"],["lines","none","detail","",1,"address",3,"click"],["class","address",4,"ngIf"],["name","location-outline","slot","start","color","dark"],[1,"desc"],["lines","none",1,"address"],["placeholder","Select","interface","popover","name","sub_time",3,"ngModelChange","ionChange","label","ngModel"],[3,"value",4,"ngFor","ngForOf"],["name","calendar-outline","slot","start","color","dark"],["placeholder","Select","interface","popover","name","start_date",3,"ngModelChange","ionChange","label","ngModel"],["class","sum",4,"ngIf"],["lines","none","detail","","class","address",3,"click",4,"ngIf"],["mode","ios","expand","block","color","dark","id","open-modal","expand","block",3,"click",4,"ngIf"],["size","6"],["src","assets/checkout.webp"],[1,"address"],[3,"value"],[1,"sum"],[4,"ngFor","ngForOf"],["style","font-size: 16px;",4,"ngIf"],["size","12"],["size","12",1,"start"],["size","12",1,"amount"],[2,"font-size","16px"],["class","discount",4,"ngIf"],["name","receipt-outline","slot","start","color","dark"],[1,"discount"],["mode","ios","expand","block","color","dark","id","open-modal","expand","block",3,"click"],["mode","ios","expand","block","color","dark","id","open-modal","expand","block"],["mode","ios","color","dark","expand","block"],["name","crescent"],["trigger","open-modal",3,"initialBreakpoint","breakpoints"],[1,"block","ion-padding"],[2,"margin-left","15px"],[2,"float","right"],["align","center","style","font-size: 14px;color:gray",4,"ngIf"],["mode","ios","color","dark","expand","block",3,"click",4,"ngIf"],["align","center",2,"font-size","14px","color","gray"],["mode","ios","color","dark","expand","block",3,"click"]],template:function(a,_){1&a&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1),e.DNE(2,T,2,1,"ion-title",2),e.j41(3,"ion-buttons",3),e.nrm(4,"ion-back-button"),e.k0s()()(),e.DNE(5,D,4,3,"ion-content",4),e.j41(6,"ion-footer",0)(7,"ion-toolbar")(8,"div",5),e.DNE(9,G,2,1,"ion-button",6)(10,L,2,0,"ion-button",7)(11,Y,2,3,"ion-modal",8),e.k0s()()()),2&a&&(e.R7$(2),e.Y8G("ngIf",_.text),e.R7$(3),e.Y8G("ngIf",_.text),e.R7$(4),e.Y8G("ngIf",!_.hasClick&&_.isMobile),e.R7$(),e.Y8G("ngIf",_.hasClick&&_.isMobile),e.R7$(),e.Y8G("ngIf",_.cal&&_.cal.total&&_.address&&_.show))},dependencies:[d.bv,d.Jm,d.QW,d.hU,d.W9,d.M0,d.lO,d.eU,d.iq,d.uz,d.he,d.ln,d.Nm,d.Ip,d.ds,d.w2,d.BC,d.ai,d.Sb,d.Je,d.el,C.MD,C.Sq,C.bT,R.YN,R.BC,R.vS],styles:["ion-item[_ngcontent-%COMP%]{border-radius:10px;color:#000!important}.sum[_ngcontent-%COMP%]{border:1px solid #d9d9d9;margin-bottom:20px;background-color:#f3efe1;border-radius:10px}.sum[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{border-bottom:1px solid #d9d9d9;padding:10px}.sum[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:5px 10px;font-size:20px}.block[_ngcontent-%COMP%]{width:100%;height:300px}ion-modal[_ngcontent-%COMP%]{--height: auto}.address[_ngcontent-%COMP%]{--min-height: 60px !important;--padding-start: 20px;--padding-end: 20px;--background: var(--ion-color-light)}.sek1[_ngcontent-%COMP%]{width:96%;height:50px;border-radius:10px;margin-left:2%;margin-top:10%}.address[_ngcontent-%COMP%]{display:block;margin-top:5px;color:gray}.desc[_ngcontent-%COMP%]{font-size:14px;color:gray}.amount[_ngcontent-%COMP%]{font-size:14px}.start[_ngcontent-%COMP%]{font-size:14px;margin-top:10px}.discount[_ngcontent-%COMP%]{display:block;margin-top:5px;color:red}"]}),v})()},5864:(B,O,c)=>{c.r(O),c.d(O,{OfferPage:()=>T});var h=c(467),C=c(177),R=c(4341),d=c(4742),o=c(4438),t=c(9568),F=c(3656);function A(P,I){if(1&P){const k=o.RV6();o.j41(0,"ion-button",4),o.bIt("click",function(){o.eBV(k);const u=o.XpG();return o.Njj(u.close())}),o.EFF(1),o.k0s()}if(2&P){const k=o.XpG();o.R7$(),o.JRh(k.text.cancel)}}function e(P,I){if(1&P&&(o.j41(0,"p",8),o.EFF(1),o.k0s()),2&P){const k=o.XpG(2);o.R7$(),o.JRh(k.text.no_offer)}}function j(P,I){if(1&P){const k=o.RV6();o.j41(0,"ion-item",11),o.bIt("click",function(){const u=o.eBV(k).$implicit,M=o.XpG(3);return o.Njj(M.setOffer(u))}),o.j41(1,"ion-avatar",12),o.nrm(2,"img",13),o.k0s(),o.j41(3,"ion-label",14)(4,"b"),o.EFF(5),o.k0s(),o.j41(6,"span",15),o.EFF(7),o.k0s()()()}if(2&P){const k=I.$implicit;o.R7$(5),o.JRh(k.code),o.R7$(2),o.JRh(k.desc)}}function n(P,I){if(1&P&&(o.j41(0,"div")(1,"ion-note",9),o.EFF(2),o.k0s(),o.nrm(3,"br")(4,"br"),o.DNE(5,j,8,2,"ion-item",10),o.k0s()),2&P){const k=o.XpG(2);o.R7$(2),o.JRh(k.text.avilable_offer),o.R7$(3),o.Y8G("ngForOf",k.data)}}function $(P,I){if(1&P&&(o.j41(0,"ion-content",5),o.DNE(1,e,2,1,"p",6)(2,n,6,2,"div",7),o.k0s()),2&P){const k=o.XpG();o.R7$(),o.Y8G("ngIf",k.data&&0==k.data.length),o.R7$(),o.Y8G("ngIf",k.data&&k.data.length>0)}}let T=(()=>{var P;class I{constructor(y,u){this.otherService=y,this.navParams=u,this.data=u.get("data");const M=localStorage.getItem("app_lang");null!==M&&(this.text=JSON.parse(M),this.text=this.text.text)}ngOnInit(){}close(y=null){var u=this;return(0,h.A)(function*(){u.otherService.closeModel(y)})()}setOffer(y){var u=this;return(0,h.A)(function*(){u.otherService.closeModel(y)})()}}return(P=I).\u0275fac=function(y){return new(y||P)(o.rXU(t.G),o.rXU(F.y8))},P.\u0275cmp=o.VBU({type:P,selectors:[["app-offer"]],decls:5,vars:2,consts:[[1,"ion-no-border"],["slot","end"],["color","medium",3,"click",4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","medium",3,"click"],[1,"ion-padding"],["align","center",4,"ngIf"],[4,"ngIf"],["align","center"],[2,"color","black"],["lines","none","detail","",3,"click",4,"ngFor","ngForOf"],["lines","none","detail","",3,"click"],["slot","start"],["src","assets/discount-icon.png"],[1,"ion-text-wrap"],[2,"display","block","margin-top","5px"]],template:function(y,u){1&y&&(o.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o.DNE(3,A,2,1,"ion-button",2),o.k0s()()(),o.DNE(4,$,3,2,"ion-content",3)),2&y&&(o.R7$(3),o.Y8G("ngIf",u.text),o.R7$(),o.Y8G("ngIf",u.data&&u.text))},dependencies:[d.bv,d.mC,d.Jm,d.QW,d.W9,d.eU,d.uz,d.he,d.JI,d.ai,C.MD,C.Sq,C.bT,R.YN],styles:["ion-item[_ngcontent-%COMP%]{margin-top:20px;--min-height: 50px !important;border-radius:5px}ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}"]}),I})()},5704:(B,O,c)=>{c.r(O),c.d(O,{PaymentPage:()=>s});var h=c(467),C=c(177),R=c(4341),d=c(4742),o=c(5083),t=c(3923);const F=(0,o.F3)("Stripe",{web:()=>c.e(1651).then(c.bind(c,1651)).then(r=>new r.StripeWeb)});var A=c(1594),e=c(9350),n=c(4438),$=c(3656),T=c(9568),P=c(1626),I=c(2068);function k(r,f){if(1&r){const m=n.RV6();n.j41(0,"ion-button",4),n.bIt("click",function(){n.eBV(m);const g=n.XpG();return n.Njj(g.close())}),n.EFF(1),n.k0s()}if(2&r){const m=n.XpG();n.R7$(),n.JRh(m.text.cancel)}}function y(r,f){1&r&&n.nrm(0,"ion-spinner",13)}function u(r,f){if(1&r){const m=n.RV6();n.j41(0,"ion-item",8),n.bIt("click",function(){n.eBV(m);const g=n.XpG(2);return n.Njj(g.paymentSheet())}),n.j41(1,"ion-thumbnail",9),n.nrm(2,"img",12),n.k0s(),n.j41(3,"ion-label"),n.EFF(4),n.k0s(),n.DNE(5,y,1,0,"ion-spinner",11),n.k0s()}if(2&r){const m=n.XpG(2);n.R7$(4),n.JRh(m.text.credit),n.R7$(),n.Y8G("ngIf",1==m.payment_method)}}function M(r,f){1&r&&n.nrm(0,"ion-spinner",13)}function b(r,f){if(1&r){const m=n.RV6();n.j41(0,"ion-content",5)(1,"h3"),n.EFF(2),n.j41(3,"ion-badge",6),n.EFF(4),n.k0s()(),n.nrm(5,"br")(6,"br"),n.DNE(7,u,6,2,"ion-item",7),n.nrm(8,"br"),n.j41(9,"ion-item",8),n.bIt("click",function(){n.eBV(m);const g=n.XpG();return n.Njj(g.payWithRazorpay())}),n.j41(10,"ion-label"),n.EFF(11),n.k0s(),n.j41(12,"ion-thumbnail",9),n.nrm(13,"img",10),n.k0s(),n.DNE(14,M,1,0,"ion-spinner",11),n.k0s(),n.nrm(15,"br")(16,"br")(17,"br")(18,"br"),n.j41(19,"b"),n.EFF(20,"For stripe use these Test card detail : "),n.k0s(),n.j41(21,"p"),n.EFF(22,"Card No : 4242 4242 4242 4242"),n.k0s(),n.j41(23,"p"),n.EFF(24,"Exp. 12/25 CVV : 321"),n.k0s()()}if(2&r){const m=n.XpG();n.R7$(2),n.SpI("",m.text.select_payment_method," "),n.R7$(2),n.Lme("",m.setting.currency,"",m.data.amount,""),n.R7$(3),n.Y8G("ngIf",m.setting.stripe_key),n.R7$(4),n.SpI(" ",m.text.upi,""),n.R7$(3),n.Y8G("ngIf",2==m.payment_method)}}let s=(()=>{var r;class f{constructor(p,g,E,D){this.navParams=p,this.otherService=g,this.http=E,this.server=D,this.data=p.get("data");const G=localStorage.getItem("admin_setting"),L=localStorage.getItem("user_data");null!==G&&(this.setting=JSON.parse(G)),null!==L&&(this.user=JSON.parse(L));const U=localStorage.getItem("app_lang");null!==U&&(this.text=JSON.parse(U),this.text=this.text.text),F.initialize({publishableKey:this.data.stripe_key}),this.meta={counsumer_id:778383,consumer_mac:"sdjksfhsd887f8s"},this.customizations={title:"Wallet Recharge",description:"Wallet Recharge",logo:"https://dicont.s3.amazonaws.com/static/flow-logos/flutterwave-logo.png"},this.customerDetails={name:this.user.name,email:this.user.email,phone_number:this.user.phone}}ngOnInit(){}updateWallet(p=null){var g=this;return(0,h.A)(function*(){const E={amount:g.data.amount,user_id:localStorage.getItem("user_id"),trans_id:p,payment_method:g.payment_method,notes:"Wallet Recharge"};g.server.updateWallet(E).subscribe(D=>{g.payment_method=null,g.otherService.toast(g.text.payment_added),g.close(p)})})()}close(p=null){var g=this;return(0,h.A)(function*(){g.otherService.closeModel(p)})()}httpPost(){const p={user:localStorage.getItem("user_id"),total:this.data.amount};return this.http.post(this.server.getApiUrl()+"stripePayment",p).pipe((0,A.$)())}paymentSheet(){var p=this;return(0,h.A)(function*(){p.payment_method=1;try{F.addListener(t.SQ.Completed,()=>{console.log("PaymentSheetEventsEnum.Completed")});const g=p.httpPost();console.log(g);const{paymentIntent:E,ephemeralKey:D,customer:G}=yield function j(r,f){const m="object"==typeof f;return new Promise((p,g)=>{let D,E=!1;r.subscribe({next:G=>{D=G,E=!0},error:g,complete:()=>{E?p(D):m?p(f.defaultValue):g(new e.G)}})})}(g);yield F.createPaymentSheet({paymentIntentClientSecret:E,customerId:G,customerEphemeralKeySecret:D,merchantDisplayName:p.setting.app_name});const L=yield F.presentPaymentSheet();console.log("result: ",L),L&&L.paymentResult===t.SQ.Completed?p.updateWallet(p.splitAndJoin(E)):p.otherService.toast(p.text.payment_cancel)}catch{p.otherService.toast(p.text.payment_cancel)}})()}splitAndJoin(p){const g=p.split("_").slice(0,2).join("_");return console.log(g),g}payWithRazorpay(){var p=this;return(0,h.A)(function*(){RazorpayCheckout.open({description:"Pay Now",image:"https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png",currency:"INR",key:p.setting.razor_key,amount:100*p.data.amount,name:p.user.name,prefill:{email:p.user.email,contact:p.user.phone},theme:{color:"#2196f3"},modal:{ondismiss:function(){alert("dismissed")}}},G=>{p.updateWallet(Date.now())},G=>{p.otherService.toast(p.text.payment_cancel)})})()}}return(r=f).\u0275fac=function(p){return new(p||r)(n.rXU($.y8),n.rXU(T.G),n.rXU(P.Qq),n.rXU(I.Z))},r.\u0275cmp=n.VBU({type:r,selectors:[["app-payment"]],decls:5,vars:2,consts:[[1,"ion-no-border"],["slot","end"],["color","medium",3,"click",4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","medium",3,"click"],[1,"ion-padding"],["color","dark",2,"float","right","margin-top","5px"],["lines","none","detail","",3,"click",4,"ngIf"],["lines","none","detail","",3,"click"],["slot","start"],["src","assets/razor.png"],["name","crescent","slot","end",4,"ngIf"],["src","assets/stripe.png"],["name","crescent","slot","end"]],template:function(p,g){1&p&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n.DNE(3,k,2,1,"ion-button",2),n.k0s()()(),n.DNE(4,b,25,6,"ion-content",3)),2&p&&(n.R7$(3),n.Y8G("ngIf",g.text),n.R7$(),n.Y8G("ngIf",g.data&&g.text))},dependencies:[d.bv,d.In,d.Jm,d.QW,d.W9,d.eU,d.uz,d.he,d.w2,d.Zx,d.ai,C.MD,C.bT,R.YN],styles:["ion-item[_ngcontent-%COMP%]{border-radius:5px;--min-height:60px;border:1px solid #f1f1f1}ion-toolbar[_ngcontent-%COMP%]{--background: white}ion-thumbnail[_ngcontent-%COMP%]{width:32px;height:32px}"]}),f})()},1208:(B,O,c)=>{c.d(O,{u:()=>o});var h=c(467),C=c(7762),R=c(4438),d=c(3158);let o=(()=>{var t;class F{constructor(e){this.nativeGeocoder=e}getLocation(){const e=C.L.getCurrentPosition();return console.log("data ",e),e}getMap(){return(0,h.A)(function*(){const e=yield C.L.getCurrentPosition();return{center:yield new google.maps.LatLng(e.coords.latitude,e.coords.longitude),zoom:16,mapTypeId:google.maps.MapTypeId.ROADMAP}})()}getAddress(e,j){var n=this;return(0,h.A)(function*(){return yield n.nativeGeocoder.reverseGeocode(e,j,{useLocale:!0,maxResults:5}).then(function(){var T=(0,h.A)(function*(P){n.address="";let I=[];for(let[k,y]of Object.entries(P[0]))y.length>0&&I.push(y);I.reverse();for(let k of I)n.address+=k+", ";n.address=n.address.slice(0,-2)});return function(P){return T.apply(this,arguments)}}()).catch(T=>{}),console.log("Address  "+n.address),n.address})()}}return(t=F).\u0275fac=function(e){return new(e||t)(R.KVO(d.K))},t.\u0275prov=R.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),F})()}}]);
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[448,2068],{448:(v,d,o)=>{o.r(d),o.d(d,{PasswordPage:()=>e});var i=o(467),g=o(177),p=o(4341),l=o(4742),r=o(4438),u=o(2068),c=o(9568);function _(n,h){1&n&&(r.j41(0,"ion-button",12),r.EFF(1,"Reset Password"),r.k0s())}function t(n,h){1&n&&(r.j41(0,"ion-button",13),r.nrm(1,"ion-spinner",14),r.k0s())}let e=(()=>{var n;class h{constructor(a,s){this.server=a,this.otherService=s,this.hasClick=!1,this.isMobile=!1,this.user_id=localStorage.getItem("temp_user_id"),this.checkScreenSize()}onResize(a){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ngOnInit(){}ionViewWillEnter(){this.otherService.statusBar("#ffffff",1)}reset(a){var s=this;return(0,i.A)(function*(){if(0==a.password.length||a.password!=a.c_password)return s.otherService.toast("Confirm password not match");s.hasClick=!0,s.server.resetPassword(a,s.user_id).subscribe(S=>{s.hasClick=!1,s.otherService.toast("Password changed successfully"),s.otherService.redirect("login","root")})})()}}return(n=h).\u0275fac=function(a){return new(a||n)(r.rXU(u.Z),r.rXU(c.G))},n.\u0275cmp=r.VBU({type:n,selectors:[["app-password"]],hostBindings:function(a,s){1&a&&r.bIt("resize",function(f){return s.onResize(f)},!1,r.tSv)},decls:20,vars:7,consts:[["form","ngForm"],[1,"ion-no-border"],["color","dark"],[1,"ion-padding"],[3,"fixed"],[3,"size"],["src","assets/reset.avif"],[3,"ngSubmit"],["type","password","label","Password","name","password","ngModel","","label-placement","floating","fill","outline","mode","md",3,"disabled"],["type","password","label","Confirm Password","name","c_password","ngModel","","label-placement","floating","fill","outline","mode","md",3,"disabled"],["mode","ios","expand","block","color","dark","type","submit",4,"ngIf"],["mode","ios","expand","block","color","dark","type","button",4,"ngIf"],["mode","ios","expand","block","color","dark","type","submit"],["mode","ios","expand","block","color","dark","type","button"],["name","crescent"]],template:function(a,s){if(1&a){const S=r.RV6();r.j41(0,"ion-header",1),r.nrm(1,"ion-toolbar",2),r.k0s(),r.j41(2,"ion-content",3),r.nrm(3,"br"),r.j41(4,"ion-grid",4)(5,"ion-row")(6,"ion-col",5),r.nrm(7,"img",6),r.k0s(),r.j41(8,"ion-col",5)(9,"form",7,0),r.bIt("ngSubmit",function(){r.eBV(S);const I=r.sdS(10);return r.Njj(s.reset(I.value))}),r.j41(11,"h2"),r.EFF(12,"Set Your New Password"),r.k0s(),r.nrm(13,"br")(14,"ion-input",8)(15,"br")(16,"ion-input",9)(17,"br"),r.DNE(18,_,2,0,"ion-button",10)(19,t,2,0,"ion-button",11),r.k0s()()()()()}2&a&&(r.R7$(4),r.Y8G("fixed",!0),r.R7$(2),r.Y8G("size",s.isMobile?12:6),r.R7$(2),r.Y8G("size",s.isMobile?12:6),r.R7$(6),r.Y8G("disabled",s.hasClick),r.R7$(2),r.Y8G("disabled",s.hasClick),r.R7$(2),r.Y8G("ngIf",!s.hasClick),r.R7$(),r.Y8G("ngIf",s.hasClick))},dependencies:[l.bv,l.Jm,l.hU,l.W9,l.lO,l.eU,l.$w,l.ln,l.w2,l.ai,l.Gw,g.MD,g.bT,p.YN,p.qT,p.BC,p.cb,p.vS,p.cV],encapsulation:2}),h})()},2068:(v,d,o)=>{o.d(d,{Z:()=>r});var i=o(6354);var p=o(4438),l=o(1626);let r=(()=>{var u;class c{constructor(t){this.http=t,this.url="http://ec2-13-203-97-31.ap-south-1.compute.amazonaws.com/admin/api/"}welcome(){return this.http.get(this.url+"welcome").pipe((0,i.T)(t=>t))}homepage(){return this.http.get(this.url+"homepage?lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(t=>t))}view(t){return this.http.get(this.url+"view?lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&type="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}item(t){return this.http.get(this.url+"getItem?store_id="+t+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}add_to_cart(t){return this.http.post(this.url+"add_to_cart",t).pipe((0,i.T)(e=>e))}getCart(t=0){return this.http.get(this.url+"getCart?cart_no="+localStorage.getItem("cart_no")+"&cart_remove_id="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}signup(t){return this.http.post(this.url+"signup",t).pipe((0,i.T)(e=>e))}login(t){return this.http.post(this.url+"login",t).pipe((0,i.T)(e=>e))}resendCode(t){return this.http.get(this.url+"resendCode?id="+t).pipe((0,i.T)(e=>e))}verifyOtp(t,e){return this.http.post(this.url+"verifyOtp?id="+e,t).pipe((0,i.T)(n=>n))}forgot(t){return this.http.post(this.url+"forgot",t).pipe((0,i.T)(e=>e))}resetPassword(t,e){return this.http.post(this.url+"resetPassword?id="+e,t).pipe((0,i.T)(n=>n))}checkoutData(){return this.http.get(this.url+"checkoutData?user_id="+localStorage.getItem("user_id")+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(t=>t))}saveAddress(t){return this.http.post(this.url+"saveAddress",t).pipe((0,i.T)(e=>e))}getAddress(){return this.http.get(this.url+"getAddress?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(t=>t))}getAmount(t){return this.http.post(this.url+"getAmount",t).pipe((0,i.T)(e=>e))}updateDays(t){return this.http.post(this.url+"updateDays?cart_no="+localStorage.getItem("cart_no"),t).pipe((0,i.T)(e=>e))}placeOrder(t){return this.http.post(this.url+"placeOrder",t).pipe((0,i.T)(e=>e))}updateWallet(t){return this.http.post(this.url+"updateWallet",t).pipe((0,i.T)(e=>e))}getWallet(t=0){return this.http.get(this.url+"getWallet?user_id="+localStorage.getItem("user_id")+"&amount="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}subscription(){return this.http.get(this.url+"subscription?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(t=>t))}mark(t){return this.http.post(this.url+"mark",t).pipe((0,i.T)(e=>e))}undo(t){return this.http.get(this.url+"undo?id="+t).pipe((0,i.T)(e=>e))}account(){return this.http.get(this.url+"account?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(t=>t))}deleteAccount(){return this.http.get(this.url+"deleteAccount?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(t=>t))}deleteAddress(t){return this.http.get(this.url+"deleteAddress?user_id="+localStorage.getItem("user_id")+"&id="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}updateData(t){return this.http.post(this.url+"updateData?user_id="+localStorage.getItem("user_id"),t).pipe((0,i.T)(e=>e))}stop(t){return this.http.get(this.url+"stop?user_id="+localStorage.getItem("user_id")+"&detail_id="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}customCart(t){return this.http.post(this.url+"customCart",t).pipe((0,i.T)(e=>e))}review(t){return this.http.post(this.url+"review",t).pipe((0,i.T)(e=>e))}search(t){return this.http.get(this.url+"search?q="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(e=>e))}language(){return this.http.get(this.url+"language").pipe((0,i.T)(t=>t))}page(){return this.http.get(this.url+"page?lid="+localStorage.getItem("lang_id")).pipe((0,i.T)(t=>t))}contact(t){return this.http.post(this.url+"contact",t).pipe((0,i.T)(e=>e))}getApiUrl(){return this.url}}return(u=c).\u0275fac=function(t){return new(t||u)(p.KVO(l.Qq))},u.\u0275prov=p.jDH({token:u,factory:u.\u0275fac,providedIn:"root"}),c})()}}]);
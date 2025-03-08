"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2068],{2068:(d,o,a)=>{a.d(o,{Z:()=>h});var r=a(6354);var p=a(4438),g=a(1626);let h=(()=>{var i;class s{constructor(t){this.http=t,this.url="http://ec2-13-203-97-31.ap-south-1.compute.amazonaws.com/dashboard/api/"}welcome(){return this.http.get(this.url+"welcome").pipe((0,r.T)(t=>t))}homepage(){return this.http.get(this.url+"homepage?lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(t=>t))}view(t){return this.http.get(this.url+"view?lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&type="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(e=>e))}item(t){return this.http.get(this.url+"getItem?store_id="+t+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(e=>e))}add_to_cart(t){return this.http.post(this.url+"add_to_cart",t).pipe((0,r.T)(e=>e))}getCart(t=0){return this.http.get(this.url+"getCart?cart_no="+localStorage.getItem("cart_no")+"&cart_remove_id="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(e=>e))}signup(t){return this.http.post(this.url+"signup",t).pipe((0,r.T)(e=>e))}login(t){return this.http.post(this.url+"login",t).pipe((0,r.T)(e=>e))}resendCode(t){return this.http.get(this.url+"resendCode?id="+t).pipe((0,r.T)(e=>e))}verifyOtp(t,e){return this.http.post(this.url+"verifyOtp?id="+e,t).pipe((0,r.T)(l=>l))}forgot(t){return this.http.post(this.url+"forgot",t).pipe((0,r.T)(e=>e))}resetPassword(t,e){return this.http.post(this.url+"resetPassword?id="+e,t).pipe((0,r.T)(l=>l))}checkoutData(){return this.http.get(this.url+"checkoutData?user_id="+localStorage.getItem("user_id")+"&cart_no="+localStorage.getItem("cart_no")+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(t=>t))}saveAddress(t){return this.http.post(this.url+"saveAddress",t).pipe((0,r.T)(e=>e))}getAddress(){return this.http.get(this.url+"getAddress?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(t=>t))}getAmount(t){return this.http.post(this.url+"getAmount",t).pipe((0,r.T)(e=>e))}updateDays(t){return this.http.post(this.url+"updateDays?cart_no="+localStorage.getItem("cart_no"),t).pipe((0,r.T)(e=>e))}placeOrder(t){return this.http.post(this.url+"placeOrder",t).pipe((0,r.T)(e=>e))}updateWallet(t){return this.http.post(this.url+"updateWallet",t).pipe((0,r.T)(e=>e))}getWallet(t=0){return this.http.get(this.url+"getWallet?user_id="+localStorage.getItem("user_id")+"&amount="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(e=>e))}subscription(){return this.http.get(this.url+"subscription?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(t=>t))}mark(t){return this.http.post(this.url+"mark",t).pipe((0,r.T)(e=>e))}undo(t){return this.http.get(this.url+"undo?id="+t).pipe((0,r.T)(e=>e))}account(){return this.http.get(this.url+"account?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(t=>t))}deleteAccount(){return this.http.get(this.url+"deleteAccount?user_id="+localStorage.getItem("user_id")+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(t=>t))}deleteAddress(t){return this.http.get(this.url+"deleteAddress?user_id="+localStorage.getItem("user_id")+"&id="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(e=>e))}updateData(t){return this.http.post(this.url+"updateData?user_id="+localStorage.getItem("user_id"),t).pipe((0,r.T)(e=>e))}stop(t){return this.http.get(this.url+"stop?user_id="+localStorage.getItem("user_id")+"&detail_id="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(e=>e))}customCart(t){return this.http.post(this.url+"customCart",t).pipe((0,r.T)(e=>e))}review(t){return this.http.post(this.url+"review",t).pipe((0,r.T)(e=>e))}search(t){return this.http.get(this.url+"search?q="+t+"&lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(e=>e))}language(){return this.http.get(this.url+"language").pipe((0,r.T)(t=>t))}page(){return this.http.get(this.url+"page?lid="+localStorage.getItem("lang_id")).pipe((0,r.T)(t=>t))}contact(t){return this.http.post(this.url+"contact",t).pipe((0,r.T)(e=>e))}getApiUrl(){return this.url}}return(i=s).\u0275fac=function(t){return new(t||i)(p.KVO(g.Qq))},i.\u0275prov=p.jDH({token:i,factory:i.\u0275fac,providedIn:"root"}),s})()}}]);
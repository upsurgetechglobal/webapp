"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[448],{448:(w,c,r)=>{r.r(c),r.d(c,{PasswordPage:()=>p});var m=r(467),_=r(177),t=r(4341),n=r(4742),e=r(4438),f=r(2068),P=r(9568);function g(i,a){1&i&&(e.j41(0,"ion-button",12),e.EFF(1,"Reset Password"),e.k0s())}function h(i,a){1&i&&(e.j41(0,"ion-button",13),e.nrm(1,"ion-spinner",14),e.k0s())}let p=(()=>{var i;class a{constructor(o,s){this.server=o,this.otherService=s,this.hasClick=!1,this.isMobile=!1,this.user_id=localStorage.getItem("temp_user_id"),this.checkScreenSize()}onResize(o){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ngOnInit(){}ionViewWillEnter(){this.otherService.statusBar("#ffffff",1)}reset(o){var s=this;return(0,m.A)(function*(){if(0==o.password.length||o.password!=o.c_password)return s.otherService.toast("Confirm password not match");s.hasClick=!0,s.server.resetPassword(o,s.user_id).subscribe(d=>{s.hasClick=!1,s.otherService.toast("Password changed successfully"),s.otherService.redirect("login","root")})})()}}return(i=a).\u0275fac=function(o){return new(o||i)(e.rXU(f.Z),e.rXU(P.G))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-password"]],hostBindings:function(o,s){1&o&&e.bIt("resize",function(u){return s.onResize(u)},!1,e.tSv)},decls:20,vars:7,consts:[["form","ngForm"],[1,"ion-no-border"],["color","dark"],[1,"ion-padding"],[3,"fixed"],[3,"size"],["src","assets/login.png"],[3,"ngSubmit"],["type","password","label","Password","name","password","ngModel","","label-placement","floating","fill","outline","mode","md",3,"disabled"],["type","password","label","Confirm Password","name","c_password","ngModel","","label-placement","floating","fill","outline","mode","md",3,"disabled"],["mode","ios","expand","block","color","dark","type","submit",4,"ngIf"],["mode","ios","expand","block","color","dark","type","button",4,"ngIf"],["mode","ios","expand","block","color","dark","type","submit"],["mode","ios","expand","block","color","dark","type","button"],["name","crescent"]],template:function(o,s){if(1&o){const d=e.RV6();e.j41(0,"ion-header",1),e.nrm(1,"ion-toolbar",2),e.k0s(),e.j41(2,"ion-content",3),e.nrm(3,"br"),e.j41(4,"ion-grid",4)(5,"ion-row")(6,"ion-col",5),e.nrm(7,"img",6),e.k0s(),e.j41(8,"ion-col",5)(9,"form",7,0),e.bIt("ngSubmit",function(){e.eBV(d);const b=e.sdS(10);return e.Njj(s.reset(b.value))}),e.j41(11,"h2"),e.EFF(12,"Set Your New Password"),e.k0s(),e.nrm(13,"br")(14,"ion-input",8)(15,"br")(16,"ion-input",9)(17,"br"),e.DNE(18,g,2,0,"ion-button",10)(19,h,2,0,"ion-button",11),e.k0s()()()()()}2&o&&(e.R7$(4),e.Y8G("fixed",!0),e.R7$(2),e.Y8G("size",s.isMobile?12:6),e.R7$(2),e.Y8G("size",s.isMobile?12:6),e.R7$(6),e.Y8G("disabled",s.hasClick),e.R7$(2),e.Y8G("disabled",s.hasClick),e.R7$(2),e.Y8G("ngIf",!s.hasClick),e.R7$(),e.Y8G("ngIf",s.hasClick))},dependencies:[n.bv,n.Jm,n.hU,n.W9,n.lO,n.eU,n.$w,n.ln,n.w2,n.ai,n.Gw,_.MD,_.bT,t.YN,t.qT,t.BC,t.cb,t.vS,t.cV],encapsulation:2}),a})()}}]);
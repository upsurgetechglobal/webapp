"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6944],{6944:(P,_,i)=>{i.r(_),i.d(_,{ContactPage:()=>C});var d=i(467),m=i(177),s=i(4341),a=i(4742),g=i(4531),t=i(4438),u=i(2068),b=i(9568);function f(e,c){if(1&e&&(t.j41(0,"ion-button",12),t.EFF(1),t.k0s()),2&e){const n=t.XpG(2);t.R7$(),t.JRh(n.text.send)}}function h(e,c){1&e&&(t.j41(0,"ion-button",13),t.nrm(1,"ion-spinner",14),t.k0s())}function p(e,c){if(1&e){const n=t.RV6();t.j41(0,"ion-content",4)(1,"h3"),t.EFF(2),t.k0s(),t.j41(3,"p"),t.EFF(4),t.k0s(),t.nrm(5,"br"),t.j41(6,"form",5,0),t.bIt("ngSubmit",function(){t.eBV(n);const o=t.sdS(7),r=t.XpG();return t.Njj(r.send(o.value))}),t.nrm(8,"ion-input",6)(9,"br")(10,"ion-input",7)(11,"br")(12,"ion-input",8)(13,"br")(14,"ion-textarea",9)(15,"br"),t.DNE(16,f,2,1,"ion-button",10)(17,h,2,0,"ion-button",11),t.k0s()()}if(2&e){const n=t.XpG();t.R7$(2),t.JRh(n.text.contact_title),t.R7$(2),t.JRh(n.text.contact_desc),t.R7$(4),t.Y8G("disabled",n.hasClick),t.R7$(2),t.Y8G("disabled",n.hasClick),t.R7$(2),t.Y8G("disabled",n.hasClick),t.R7$(2),t.Y8G("disabled",n.hasClick),t.R7$(2),t.Y8G("ngIf",!n.hasClick),t.R7$(),t.Y8G("ngIf",n.hasClick)}}(0,g.kz)();let C=(()=>{var e;class c{constructor(l,o){this.server=l,this.otherService=o,this.hasClick=!1,this.otherService.statusBar("#ffffff",2);const r=localStorage.getItem("app_lang");null!==r&&(this.text=JSON.parse(r),this.text=this.text.text)}ngOnInit(){}send(l){var o=this;return(0,d.A)(function*(){o.hasClick=!0,o.server.contact(l).subscribe(r=>{o.hasClick=!1,o.otherService.toast(o.text.contact_msg),o.otherService.redirect("home")})})()}}return(e=c).\u0275fac=function(l){return new(l||e)(t.rXU(u.Z),t.rXU(b.G))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-contact"]],decls:5,vars:1,consts:[["form","ngForm"],[1,"ion-no-border"],["slot","start"],["class","ion-padding",4,"ngIf"],[1,"ion-padding"],[3,"ngSubmit"],["label","Your name","name","name","ngModel","","label-placement","floating","fill","outline","mode","md",3,"disabled"],["label","Phone","name","phone","ngModel","","label-placement","floating","fill","outline","mode","md",3,"disabled"],["label","Email","name","email","ngModel","","label-placement","floating","fill","outline","mode","md",3,"disabled"],["label","Your Message","name","msg","ngModel","","label-placement","floating","fill","outline","mode","md",1,"msg",3,"disabled"],["mode","ios","expand","block","color","dark","type","submit",4,"ngIf"],["mode","ios","expand","block","color","dark","type","button",4,"ngIf"],["mode","ios","expand","block","color","dark","type","submit"],["mode","ios","expand","block","color","dark","type","button"],["name","crescent"]],template:function(l,o){1&l&&(t.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-buttons",2),t.nrm(3,"ion-back-button"),t.k0s()()(),t.DNE(4,p,18,8,"ion-content",3)),2&l&&(t.R7$(4),t.Y8G("ngIf",o.text))},dependencies:[a.bv,a.Jm,a.QW,a.W9,a.eU,a.$w,a.w2,a.nc,a.ai,a.Gw,a.el,m.MD,m.bT,s.YN,s.qT,s.BC,s.cb,s.vS,s.cV],styles:["img[_ngcontent-%COMP%]{width:50%;margin-left:30%;margin-top:2%}p[_ngcontent-%COMP%]{font-family:auto;color:gray;line-height:1}h3[_ngcontent-%COMP%]{margin-top:15%}.msg[_ngcontent-%COMP%]{height:100px}"]}),c})()}}]);
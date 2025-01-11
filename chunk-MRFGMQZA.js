import{a as X,b as Y}from"./chunk-BGN6SG7W.js";import{a as Q,b as W,e as oe}from"./chunk-5AIYEGTS.js";import{a as ae,b as re}from"./chunk-HBQJSGWX.js";import{b as U}from"./chunk-QVEUBH3L.js";import"./chunk-ZYJUV5XG.js";import"./chunk-DEISXDYI.js";import{a as te,b as ie}from"./chunk-NJCDU44W.js";import"./chunk-UO4YIRZN.js";import{b as G,d as M,t as N}from"./chunk-FPRDNMDM.js";import{b as ne}from"./chunk-RQJZXVNX.js";import{f as Z,g as ee}from"./chunk-HCNXDCWO.js";import{e as $,f as J,h as K}from"./chunk-JYZVUONC.js";import"./chunk-3QUMKSCK.js";import"./chunk-VCULGW3R.js";import{f as D,g as F}from"./chunk-WDIEPIKR.js";import{n as j,t as H}from"./chunk-ZK23MP3G.js";import"./chunk-CPK25FJV.js";import{$ as u,Ab as p,Ba as h,Bd as L,Ea as c,Hd as T,Ia as y,Ja as C,Jc as k,Md as z,Oa as r,Pa as s,Qa as f,S as v,T as I,Ua as x,Va as g,Wa as d,Zb as O,_,_c as q,db as w,eb as b,fb as S,ic as P,kc as R,lc as E,ma as B,pb as V,qa as o,sd as A,zb as l}from"./chunk-GXBNLHHJ.js";import"./chunk-TWZW5B45.js";function le(t,m){if(t&1&&(r(0,"div",19),f(1,"i",20),l(2,"iconSmClass"),r(3,"span",21),b(4),l(5,"translate"),s()()),t&2){let e=d(2);o(),y(p(2,3,e.data().info.icon)),o(3),S(p(5,5,e.data().info.label))}}function pe(t,m){if(t&1&&(r(0,"div",19),f(1,"i"),l(2,"iconSmClass"),r(3,"span",21),b(4),l(5,"translate"),s()()),t&2){let e=m;o(),y(p(2,3,e.icon)),o(3),S(p(5,5,e.label))}}function se(t,m){if(t&1&&h(0,pe,6,7,"div",19),t&2){let e,i=m.$implicit,n=d(2);C((e=n.gameInfo[i.value])?0:-1,e)}}function de(t,m){if(t&1){let e=x();r(0,"p-dropdown",22),g("onChange",function(n){_(e);let a=d(2);return u(a.setMod(n.value))}),s()}if(t&2){let e=d(2);c("filter",!0)("autofocusFilter",!e.contentSvc.isMobile())("ngModel",e.modId())("options",e.modOptions())}}function ce(t,m){t&1&&f(0,"p-divider")}function me(t,m){if(t&1){let e=x();r(0,"span",14)(1,"span",23),f(2,"i",24),s(),r(3,"p-dropdown",25),l(4,"translate"),g("onChange",function(n){_(e);let a=d(2);return u(a.setState(a.states()[n.value]))}),s()()}if(t&2){let e=d(2);o(3),c("placeholder",p(4,2,"landing.loadSavedState"))("options",e.stateOptions())}}function _e(t,m){if(t&1){let e=x();r(0,"button",26),l(1,"translate"),g("click",function(){let n=_(e),a=d(2);return u(a.router.navigateByUrl(n))}),s()}t&2&&c("label",p(1,1,"landing.loadLastState"))}function ue(t,m){if(t&1){let e=x();r(0,"p-card")(1,"div",3)(2,"div",4),f(3,"img",5),s(),f(4,"div",6),l(5,"translate"),r(6,"p-dropdown",7),g("onChange",function(n){_(e);let a=d();return u(a.setGame(n.value))}),h(7,le,6,7,"ng-template",8)(8,se,1,1,"ng-template",9),s(),h(9,de,1,4,"p-dropdown",10),r(10,"button",11),l(11,"translate"),g("click",function(){_(e);let n=w(15),a=d();return u(n.clickOpen("item",a.settings().availableItemIds))}),s(),r(12,"button",12),l(13,"translate"),g("click",function(){_(e);let n=w(18),a=d();return u(n.clickOpen("recipe",a.settings().availableRecipeIds))}),s(),r(14,"lab-picker",13,0),l(16,"translate"),g("selectId",function(n){_(e);let a=d();return u(a.selectItem(n))}),s(),r(17,"lab-picker",13,1),l(19,"translate"),g("selectId",function(n){_(e);let a=d();return u(a.selectRecipe(n))}),s(),h(20,ce,1,0,"p-divider")(21,me,5,4,"span",14)(22,_e,2,3,"button",15),f(23,"p-divider")(24,"button",16),l(25,"translate"),f(26,"button",17),l(27,"translate"),r(28,"p-checkbox",18),l(29,"translate"),g("onChange",function(n){_(e);let a=d();return u(a.preferencesSvc.apply({bypassLanding:n.checked}))}),s()()()}if(t&2){let e,i=d();o(4),c("innerHTML",p(5,16,"landing.welcome"),B),o(2),c("ngModel",i.data().game)("options",i.gameOptions),o(3),C(i.data().flags.has("mods")?9:-1),o(),c("label",p(11,18,"landing.addItems")),o(2),c("label",p(13,20,"landing.addMachines")),o(2),c("header",p(16,22,"landing.selectAnItem")),o(3),c("header",p(19,24,"landing.selectARecipe")),o(3),C(i.stateOptions().length||i.routerSvc.stored()?20:-1),o(),C(i.stateOptions().length?21:-1),o(),C((e=i.routerSvc.stored())?22:-1,e),o(2),c("label",p(25,26,"landing.help")),o(2),c("label",p(27,28,"landing.skip")),o(2),c("binary",!0)("label",p(29,30,"landing.bypass"))("ngModel",i.preferencesSvc.state().bypassLanding)}}function fe(t,m){t&1&&f(0,"p-progressSpinner")}var We=(()=>{class t{constructor(){this.router=v(R),this.route=v(P),this.contentSvc=v(G),this.objectivesSvc=v(N),this.preferencesSvc=v(A),this.routerSvc=v(U),this.settingsSvc=v(z),this.modId=this.settingsSvc.modId,this.mod=this.settingsSvc.mod,this.data=this.settingsSvc.dataset,this.settings=this.settingsSvc.settings,this.states=this.settingsSvc.modStates,this.stateOptions=this.settingsSvc.stateOptions,this.modOptions=this.settingsSvc.modOptions,this.gameInfo=T,this.gameOptions=q}selectItem(e){this.objectivesSvc.create({targetId:e,value:k.one,unit:L.Items,type:M.Output}),this.router.navigate(["list"],{relativeTo:this.route,queryParamsHandling:"preserve"})}selectRecipe(e){this.objectivesSvc.create({targetId:e,value:k.one,unit:L.Machines,type:M.Output}),this.router.navigate(["list"],{relativeTo:this.route,queryParamsHandling:"preserve"})}setState(e){e&&this.router.navigate(["list"],{queryParams:this.routerSvc.toParams(e),relativeTo:this.route})}setGame(e){this.setMod(T[e].modId)}setMod(e){this.router.navigate([e])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=I({type:t,selectors:[["lab-landing"]],standalone:!0,features:[V],decls:5,vars:4,consts:[["addItemPicker",""],["addRecipePicker",""],[1,"position-absolute","bottom-0","mb-3"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-center"],["src","factoriolab.webp","alt","FactorioLab","height","128","width","128"],[1,"mt-2",3,"innerHTML"],["styleClass","my-2 w-100",3,"onChange","ngModel","options"],["pTemplate","selectedItem"],["pTemplate","item"],["styleClass","mb-2 w-100",3,"filter","autofocusFilter","ngModel","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",3,"click","label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"click","label"],[3,"selectId","header"],[1,"p-inputgroup"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-question","routerLink","wizard","queryParamsHandling","preserve",1,"mt-2","p-button-help",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-forward","routerLink","list","queryParamsHandling","preserve",1,"mt-2","mb-3","p-button-outlined",3,"label"],[3,"onChange","binary","label","ngModel"],[1,"d-flex","align-items-center"],[1,"mx-1"],[1,"ms-3"],["styleClass","mb-2 w-100",3,"onChange","filter","autofocusFilter","ngModel","options"],[1,"p-inputgroup-addon"],[1,"fa-solid","fa-file-import"],["styleClass","w-100",3,"onChange","placeholder","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"click","label"]],template:function(i,n){i&1&&(h(0,ue,30,32,"p-card")(1,fe,1,0,"p-progressSpinner"),r(2,"span",2),b(3),l(4,"async"),s()),i&2&&(C(n.mod()!=null?0:1),o(3),S(p(4,2,n.contentSvc.version$)))},dependencies:[O,K,$,J,E,F,D,j,W,Q,ie,te,Y,X,ee,Z,re,ae,ne,oe,H],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh}"],changeDetection:0})}}return t})();export{We as LandingComponent};

import{d as a,r as c,g as r,Z as p,$ as d,h as i,i as m,j as _,c as u,m as t,l as v}from"./index-9af005a6.js";const f={class:"scroll-y"},g=v("div",{class:"font-bold mb-10px"},"Tab KeepAlive Demo",-1),b=a({name:"TabKeepAlive"}),x=a({...b,setup(h){const e=c({pageUrl:""}),s=r(1);return s.value=2,p(()=>{console.log("onActivated")}),d(()=>{console.log("onDeactivated")}),(A,o)=>{const l=i("el-input");return m(),_("div",f,[g,u(l,{modelValue:t(e).pageUrl,"onUpdate:modelValue":o[0]||(o[0]=n=>t(e).pageUrl=n),style:{width:"200px"},placeholder:"input to test TabKeepAlive"},null,8,["modelValue"])])}}});export{x as default};
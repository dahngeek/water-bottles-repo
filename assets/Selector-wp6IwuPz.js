import{g as n,a as l}from"./axios-orQBUaNG.js";import{_ as i,c as o,a as e,F as d,r as h,o as r,t as u}from"./index-4kGO6-FK.js";const p={data(){return{products:null}},methods:{beforeEnter(t){t.style.opacity="0",t.style.transform="translateY(-100px)"},enter(t){n.to(t,{duration:1,y:0,opacity:1})},fetch(){l.get("/products.json").then(t=>{console.log(t),this.products=t.data.products})},convertToSlug(t){return t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}},mounted(){this.fetch()}},m={class:"container mx-auto pt-12 bg-white"},_=e("div",{class:"relative flex items-end font-bold"},[e("h2",{class:"text-2xl"},"Select a product")],-1),f={class:"mt-10"},x={class:"-m-3.5 flex"},g=["onClick"],b=["src"],v={class:"font-semibold"};function y(t,S,w,k,a,c){return r(),o("section",m,[_,e("div",f,[e("ul",x,[(r(!0),o(d,null,h(a.products,s=>(r(),o("li",{onClick:$=>t.$router.push({path:`/product/${c.convertToSlug(s.name)}`,params:{product:s}}),class:"m-3.5 h-60 w-60 border-dashed border-2 border-black-500 px-2 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl"},[e("img",{class:"max-h-40",src:s.icon,alt:""},null,8,b),e("span",v,u(s.name),1)],8,g))),256))])])])}const j=i(p,[["render",y]]);export{j as default};

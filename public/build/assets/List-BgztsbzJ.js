import{_ as x}from"./AuthenticatedLayout-Ba7xemZF.js";import{u as f,H as b,L as i}from"./index-Cdzi6Rxy.js";import{g,o,c as r,a,u as c,w as n,F as l,b as e,f as h,r as y,t as _,h as w}from"./app-DxYfRDHF.js";import"./ApplicationLogo-DxNSdqhY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Area Management ",-1),k={class:"py-6"},C={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},L={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},N={class:"p-6 bg-white border-b border-gray-200"},B={class:"flex items-center justify-between mb-6"},V={class:"w-full bg-gray-100"},A=e("thead",null,[e("tr",null,[e("th",{class:"border px-4 py-2 w-32"},"ID"),e("th",{class:"border px-4 py-2"},"Name"),e("th",{class:"border px-4 py-2 w-32"}," Action ")])],-1),D={class:"text-center"},F={class:"border px-4 py-2"},E={class:"border px-4 py-2"},H={class:"border px-4 py-2"},I={class:"flex flex-col space-y-2"},M=["onClick"],$={key:0},j=e("td",{colspan:"4",class:"border px-4 py-2 text-center"}," Không có danh mục nào. ",-1),K=[j],P={__name:"List",props:["areas"],setup(p){const d=p,u=f();function m(s){confirm("Bạn có chắc chắn muốn xóa không?")&&u.delete(route("area.destroy",s))}return g(()=>{}),(s,S)=>(o(),r(l,null,[a(c(b),{title:"List Area"}),a(x,null,{header:n(()=>[v]),default:n(()=>[e("div",k,[e("div",C,[e("div",L,[e("div",N,[e("div",B,[a(c(i),{class:"px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",href:s.route("area.create")},{default:n(()=>[h(" Create ")]),_:1},8,["href"])]),e("table",V,[A,e("tbody",D,[(o(!0),r(l,null,y(d.areas,t=>(o(),r("tr",{key:t.id},[e("td",F,_(t.id),1),e("td",E,_(t.area_name),1),e("td",H,[e("div",I,[a(c(i),{tabIndex:"1",class:"px-4 py-2 text-sm text-center text-white bg-blue-500 rounded",href:s.route("area.edit",t.id)},{default:n(()=>[h(" Edit ")]),_:2},1032,["href"]),e("button",{onClick:T=>m(t.id),class:"px-2 py-1 bg-red-500 text-white text-center rounded hover:bg-red-600"}," Delete ",8,M)])])]))),128)),d.areas&&d.areas.length===0?(o(),r("tr",$,K)):w("",!0)])])])])])])]),_:1})],64))}};export{P as default};

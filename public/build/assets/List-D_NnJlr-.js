import{_ as x}from"./AuthenticatedLayout-Ba7xemZF.js";import{u as g,H as b,L as i}from"./index-Cdzi6Rxy.js";import{g as f,o,c as r,a,u as n,w as d,F as l,b as e,f as h,r as y,t as _,h as w}from"./app-DxYfRDHF.js";import"./ApplicationLogo-DxNSdqhY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Category Management ",-1),C={class:"py-6"},k={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},L={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},N={class:"p-6 bg-white border-b border-gray-200"},B={class:"flex items-center justify-between mb-6"},I={class:"w-full table-fixed"},V=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"px-4 py-2 border w-16"},"ID"),e("th",{class:"px-4 py-2 border w-1/2"}," Category "),e("th",{class:"px-4 py-2 border w-1/2"}," Image "),e("th",{class:"px-4 py-2 border w-32"}," Action ")])],-1),D={class:"border px-4 py-2"},F={class:"border px-4 py-2"},$={class:"border px-4 py-2"},j=["src"],E={class:"border px-4 py-2"},H={class:"flex flex-col space-y-2"},M=["onClick"],A={key:0},K=e("td",{colspan:"4",class:"border px-4 py-2 text-center"}," Không có danh mục nào. ",-1),S=[K],Q={__name:"List",props:["categories"],setup(p){const c=p,m=g();function u(s){confirm("Bạn có chắc chắn muốn xóa không?")&&m.delete(route("category.destroy",s))}return f(()=>{}),(s,T)=>(o(),r(l,null,[a(n(b),{title:"List Category"}),a(x,null,{header:d(()=>[v]),default:d(()=>[e("div",C,[e("div",k,[e("div",L,[e("div",N,[e("div",B,[a(n(i),{class:"px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",href:s.route("category.create")},{default:d(()=>[h(" Create ")]),_:1},8,["href"])]),e("table",I,[V,e("tbody",null,[(o(!0),r(l,null,y(c.categories,t=>(o(),r("tr",{key:t.id,class:"text-center"},[e("td",D,_(t.id),1),e("td",F,_(t.category_name),1),e("td",$,[e("img",{src:`/storage/${t.image}`,alt:"Category Image",class:"mx-auto",style:{width:"100px",height:"100px","object-fit":"cover"}},null,8,j)]),e("td",E,[e("div",H,[a(n(i),{tabIndex:"1",className:"px-4 py-2 text-sm text-white bg-blue-500 rounded",href:s.route("category.edit",t.id)},{default:d(()=>[h(" Edit ")]),_:2},1032,["href"]),e("button",{onClick:q=>u(t.id),class:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"}," Delete ",8,M)])])]))),128)),c.categories&&c.categories.length===0?(o(),r("tr",A,S)):w("",!0)])])])])])])]),_:1})],64))}};export{Q as default};

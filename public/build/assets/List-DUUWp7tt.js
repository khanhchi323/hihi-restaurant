import{_ as m}from"./AuthenticatedLayout-CQ5b8MkG.js";import{u as f,H as y,L as h}from"./index-rh5esCcf.js";import{g,o as s,c as o,a as d,u as l,w as n,F as _,b as e,f as p,r as w,t as i,h as u}from"./app-ZvP4eItq.js";import"./ApplicationLogo-EjvNrlPK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Table Management ",-1),v={class:"py-6"},C={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},L={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},B={class:"p-6 bg-white border-b border-gray-200"},N={class:"flex items-center justify-between mb-6"},T={class:"w-full table-fixed"},V=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"px-4 py-2 border w-16"},"ID"),e("th",{class:"px-4 py-2 border"},"Table"),e("th",{class:"px-4 py-2 border"},"Area"),e("th",{class:"px-4 py-2 border w-32"}," Action ")])],-1),D={class:"border px-4 py-2"},F={class:"border px-4 py-2"},A={class:"border px-4 py-2"},E={key:0},H={class:"border px-4 py-2"},I={class:"flex flex-col space-y-2"},M=["onClick"],$={key:0},j=e("td",{colspan:"4",class:"border px-4 py-2 text-center"}," Không có bàn nào. ",-1),K=[j],Q={__name:"List",props:["tables","areas"],setup(a){const c=a,b=f();function x(r){confirm("Bạn có chắc chắn muốn xóa không?")&&b.delete(route("table.destroy",r))}return g(()=>{}),(r,S)=>(s(),o(_,null,[d(l(y),{title:"List Table"}),d(m,null,{header:n(()=>[k]),default:n(()=>[e("div",v,[e("div",C,[e("div",L,[e("div",B,[e("div",N,[d(l(h),{class:"px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",href:r.route("table.create")},{default:n(()=>[p(" Create ")]),_:1},8,["href"])]),e("table",T,[V,e("tbody",null,[(s(!0),o(_,null,w(c.tables,t=>(s(),o("tr",{key:t.id,class:"text-center"},[e("td",D,i(t.id),1),e("td",F,i(t.table_name),1),e("td",A,[a.areas&&a.areas[t.area_id]?(s(),o("span",E,i(a.areas[t.area_id].area_name),1)):u("",!0)]),e("td",H,[e("div",I,[d(l(h),{tabIndex:"1",class:"px-4 py-2 text-sm text-white bg-blue-500 rounded",href:r.route("table.edit",t.id)},{default:n(()=>[p(" Edit ")]),_:2},1032,["href"]),e("button",{onClick:q=>x(t.id),class:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"}," Delete ",8,M)])])]))),128)),c.tables&&c.tables.length===0?(s(),o("tr",$,K)):u("",!0)])])])])])])]),_:1})],64))}};export{Q as default};

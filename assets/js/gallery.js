(async()=>{try{
 const B=document.body;OAG.root=B.dataset.root;
 OAG.site=await OAG.j(OAG.root+'data/site.json');OAG.fill();
 const p=await OAG.j(B.dataset.json);
 document.title=p.title+' — '+OAG.site.brand.name;ct.textContent=p.title;cd.textContent=p.subtitle;
 const all=p.designs.filter(d=>d.status==='active');
 sort.innerHTML=OAG.site.ui.sorts.map(s=>`<option value="${s.k}">${s.l}</option>`).join('');
 const draw=()=>{const t=q.value.trim();const l=all.filter(d=>(d.name+d.description).includes(t));
  l.sort(sort.value==='price'?(a,b)=>a.price-b.price:(a,b)=>a.order-b.order);
  grid.replaceChildren(...l.map(OAG.card));state.textContent=l.length?'':OAG.site.ui.empty};
 q.oninput=sort.onchange=draw;draw();
}catch{state.textContent='تعذّر تحميل القسم. شغّل الموقع عبر سيرفر.'}})();

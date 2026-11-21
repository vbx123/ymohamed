(async()=>{try{
 OAG.site=await OAG.j('data/site.json');OAG.fill();
 const cats=(await OAG.j('data/categories.json')).filter(c=>c.active).sort((a,b)=>a.order-b.order);
 document.getElementById('tiles').innerHTML=cats.map(c=>`<a class="tile" href="${c.page}" style="background:${c.cover};color:${c.ink}">${c.name}</a>`).join('');
}catch{document.body.insertAdjacentHTML('beforeend','<p style="padding:20px">تعذّر تحميل البيانات. شغّل الموقع عبر سيرفر محلي أو GitHub Pages.</p>')}})();

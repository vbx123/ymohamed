const OAG={root:'',
 async j(u){const r=await fetch(u);if(!r.ok)throw new Error(u);return r.json()},
 wa(msg){return `https://wa.me/${OAG.site.whatsapp}?text=${encodeURIComponent(msg)}`},
 fill(){document.title=OAG.site.brand.name;
  document.querySelectorAll('[data-t]').forEach(e=>{const v=e.dataset.t.split('.').reduce((a,k)=>a?.[k],OAG.site);if(v)e.textContent=v});
  const b=document.getElementById('back');if(b)b.setAttribute('aria-label',OAG.site.ui.back);
  const q=document.getElementById('q');if(q)q.placeholder=OAG.site.ui.search},
 card(d){const b=document.createElement('button');b.className='card';
  b.innerHTML=`<div class="th" style="background:${d.thumb}">${d.badge?`<span class="tag">${d.badge}</span>`:''}</div><div class="in"><h3>${d.name}</h3><span>${d.price} ${d.currency}</span></div>`;
  b.onclick=()=>OAG.open(d);return b},
 async open(d){const S=OAG.site,M=S.modal;document.getElementById('m')?.remove();
  const url=new URL(d.preview,new URL(OAG.root,location.href)).href;
  const msg=S.wa.design.replace('{name}',d.name).replace('{id}',d.id).replace('{price}',d.price+' '+d.currency).replace('{url}',url);
  const m=document.createElement('dialog');m.id='m';
  m.innerHTML=`<div class="mh"><div><h3>${d.name}</h3><small>${d.price} ${d.currency}</small></div><button class="x" aria-label="${M.close}">✕</button></div><div class="pv">${S.ui.loading}</div><div class="mf"><a class="btn" target="_blank" rel="noopener" href="${OAG.wa(msg)}">${M.order}</a><a class="btn ghost" target="_blank" rel="noopener" href="${url}">${M.full}</a></div>`;
  document.body.append(m);document.body.style.overflow='hidden';m.showModal();
  m.querySelector('.x').onclick=()=>m.close();m.onclick=e=>{if(e.target===m)m.close()};
  m.onclose=()=>{m.querySelector('iframe')?.remove();document.body.style.overflow='';m.remove()};
  const pv=m.querySelector('.pv');
  try{if(new URL(url).origin===location.origin){const r=await fetch(url,{method:'HEAD'});if(!r.ok)throw 0}
   const f=document.createElement('iframe');f.title=d.name;f.allow='autoplay; fullscreen';f.sandbox='allow-scripts allow-same-origin allow-forms allow-popups allow-modals';f.src=url;pv.replaceWith(f)}catch{pv.textContent=S.ui.error}}
};

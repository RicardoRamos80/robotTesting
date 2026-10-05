
const KEY='rt_lang';
function applyLang(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-es][data-en]').forEach(el=>{
    el.textContent=el.dataset[lang];
  });
  localStorage.setItem(KEY,lang);
}
applyLang(localStorage.getItem(KEY)||'es');
document.querySelectorAll('#langToggle').forEach(btn=>btn.addEventListener('click',()=>{
  applyLang(document.documentElement.lang==='es'?'en':'es');
}));
const menu=document.querySelector('.menu'), nav=document.querySelector('.site-header nav');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));

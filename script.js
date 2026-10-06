
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
if(menu&&nav){
 menu.setAttribute('aria-expanded','false');
 menu.addEventListener('click',(e)=>{e.stopPropagation();const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'✕':'☰';});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));
 document.addEventListener('click',(e)=>{if(!nav.contains(e.target)&&!menu.contains(e.target)){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}});
}

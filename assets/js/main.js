
const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
const saved=localStorage.getItem('eg-theme');
document.querySelectorAll('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));

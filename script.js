var h=document.getElementById('header'),m=document.getElementById('menu');window.addEventListener('scroll',function(){h.classList.toggle('scrolled',window.scrollY>30)});m.addEventListener('click',function(){var o=h.classList.toggle('menu-open');m.setAttribute('aria-expanded',o?'true':'false')});document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){h.classList.remove('menu-open');m.setAttribute('aria-expanded','false')})});

// Imagens reais da referência enviada anteriormente
var hero=document.querySelector('.hero-media');if(hero)hero.style.backgroundImage="url('assets/hero.svg')";
var about=document.querySelector('.about-image img');if(about)about.src='assets/about.svg';

// Endereço do estúdio
var contact=document.querySelector('.contact-inner > div:first-child');if(contact){var address=document.createElement('p');address.className='studio-address';address.textContent='📍 Rua Exemplo, 123 — Centro, Belo Horizonte/MG';contact.appendChild(address);}
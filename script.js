var h=document.getElementById('header'),m=document.getElementById('menu');window.addEventListener('scroll',function(){h.classList.toggle('scrolled',window.scrollY>30)});if(m){m.addEventListener('click',function(){var o=h.classList.toggle('menu-open');m.setAttribute('aria-expanded',o?'true':'false')})}document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){h.classList.remove('menu-open');if(m)m.setAttribute('aria-expanded','false')})});

var hero=document.querySelector('.hero-media');if(hero)hero.style.backgroundImage="url('assets/hero.svg')";
var about=document.querySelector('.about-image img');if(about)about.src='assets/about.svg';

var galleryImages=[
'https://images.unsplash.com/photo-1714787283989-0c9595dcbf90?auto=format&fit=crop&q=88&w=1200',
'https://images.unsplash.com/photo-1559577638-ccfeeb3eca64?auto=format&fit=crop&q=88&w=1200',
'https://images.unsplash.com/photo-1598816639574-47ef99da24fd?auto=format&fit=crop&q=88&w=1200',
'https://images.unsplash.com/photo-1570459528211-1318e6f9b782?auto=format&fit=crop&q=88&w=1200',
'https://images.unsplash.com/photo-1764697550885-c38301d31651?auto=format&fit=crop&q=88&w=1200'
];document.querySelectorAll('.gallery img').forEach(function(img,i){if(galleryImages[i])img.src=galleryImages[i];});

var contact=document.querySelector('.contact-inner > div:first-child');if(contact&&!contact.querySelector('.studio-address')){var address=document.createElement('p');address.className='studio-address';address.textContent='📍 Rua Exemplo, 123 — Centro, Belo Horizonte/MG';contact.appendChild(address);}

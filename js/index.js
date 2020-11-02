const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
 
};


const navitems = document.querySelectorAll('.container a');
for (var i = 0; i < Object.entries(siteContent.nav).length - 1; i++) {
  navitems[i].textContent = Object.entries(siteContent.nav)[i][1];
}

const logo = document.getElementsByClassName('logo')[0].setAttribute('src', Object.entries(siteContent.nav)[6][1])
const mainContent = Object.entries(siteContent)[2][1]
const header = document.getElementById('cta-img').setAttribute('src', Object.entries(siteContent.cta)[2][1])
const midPage = document.getElementsByClassName('middle-img')[0].setAttribute('src', Object.entries((mainContent))[4][1])

const title = document.getElementsByTagName('h1')
title[0].textContent = siteContent.cta.h1


const button = document.getElementsByTagName('button')
button[0].textContent = siteContent.cta.button

const cont = document.querySelectorAll('.contact h4');
cont[0].textContent = Object.entries(siteContent.contact)[0][1]
const content = document.querySelectorAll('.contact p');
content[0].textContent = siteContent.contact.address
content[1].textContent = siteContent.contact.phone
content[2].textContent = siteContent.contact.email

const footer1 = document.getElementsByTagName('footer')
footer1[0].textContent = siteContent.footer.copyright;

const mainContentHeader = document.querySelectorAll('.text-content h4');
const data = Object.entries(siteContent)[2][1];
const data2 = Object.entries(data)[0][1];
mainContentHeader[0].textContent = Object.entries(data)[0][1];
mainContentHeader[1].textContent = Object.entries(data)[2][1];
mainContentHeader[2].textContent = Object.entries(data)[5][1];
mainContentHeader[3].textContent = Object.entries(data)[7][1];
mainContentHeader[4].textContent = Object.entries(data)[9][1];

const mainContents = document.querySelectorAll('.text-content p');
mainContents[0].textContent = Object.entries(data)[1][1];
mainContents[1].textContent = Object.entries(data)[3][1];
mainContents[2].textContent = Object.entries(data)[6][1];
mainContents[3].textContent = Object.entries(data)[8][1];
mainContents[4].textContent = Object.entries(data)[10][1];


var node = document.createElement("A");              
node.setAttribute('href', "#")
const navItems = document.getElementsByTagName('nav')[0]

var node2 = document.createElement("A");               
node2.setAttribute('href', "#")

navItems.appendChild(node);
navItems.appendChild(node2);

node.textContent = "item1"
node2.textContent = "item2"

const navColor = document.querySelectorAll('a')

for (var i = 0; i < navColor.length; i++) {
  navColor[i].style.color = 'green';
}
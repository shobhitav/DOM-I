const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

const newnavItem = document.createElement('a');
newnavItem.textContent = 'Future';
let navElement = document.querySelector('nav');
navElement.appendChild(newnavItem);
newnavItem.style.color = 'red';


const otherNewNavItem = document.createElement('a');
otherNewNavItem.textContent = 'Suggestions';
let navElement1 = document.querySelector('nav');
navElement1.prepend(otherNewNavItem);
otherNewNavItem.style.color = 'red';


navItems.forEach(function (currentValue) {
  currentValue.style.color = 'green';
})


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

const header = document.querySelector('.cta .cta-text h1');
header.textContent = siteContent["cta"]["h1"];

const newbutton = document.querySelector('.cta .cta-text button');
newbutton.textContent = siteContent["cta"]["button"];

const allHeader = document.querySelectorAll('.text-content h4');
allHeader[0].textContent = siteContent["main-content"]["features-h4"];
allHeader[1].textContent = siteContent["main-content"]["about-h4"];
allHeader[2].textContent = siteContent["main-content"]["services-h4"];
allHeader[3].textContent = siteContent["main-content"]["product-h4"];
allHeader[4].textContent = siteContent["main-content"]["vision-h4"];
// featureHeader[5].textContent=siteContent["main-content"]["-h4"];
const allPara = document.querySelectorAll('.text-content p');
allPara[0].textContent = siteContent["main-content"]["features-content"];
allPara[1].textContent = siteContent["main-content"]["about-content"];
allPara[2].textContent = siteContent["main-content"]["services-content"];
allPara[3].textContent = siteContent["main-content"]["product-content"];
allPara[4].textContent = siteContent["main-content"]["vision-content"];

let longImg = document.getElementById("middle-img");
longImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
const footerHeader = document.querySelector('.contact h4');
footerHeader.textContent = siteContent["contact"]["contact-h4"];
const footerPara = document.querySelectorAll('.contact p');
footerPara[0].textContent = siteContent["contact"]["address"];
footerPara[1].textContent = siteContent["contact"]["phone"];
footerPara[2].textContent = siteContent["contact"]["email"];
const copyRight = document.querySelector('footer p');
copyRight.textContent = siteContent["footer"]["copyright"];
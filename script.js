// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({
behavior:'smooth'
});

});

});

// ACTIVE NAVBAR LINK

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")
=== "#" + current){

link.classList.add("active");

}

});

});

// GALLERY MODAL

function openModal(imageSrc){

document.getElementById(
"modalImage"
).src = imageSrc;

const modal =
new bootstrap.Modal(
document.getElementById(
"galleryModal"
));

modal.show();

}

const specialBadge = document.getElementById("specialBadge");

const specials = [
    {text:"☕ Sunday Special: Caramel Latte", color:"bg-danger"},
    {text:"🥐 Monday Special: Butter Croissant", color:"bg-primary"},
    {text:"🍫 Tuesday Special: Chocolate Mocha", color:"bg-dark"},
    {text:"🧁 Wednesday Special: Blueberry Muffin", color:"bg-info"},
    {text:"🍰 Thursday Special: Cheesecake Delight", color:"bg-success"},
    {text:"🥪 Friday Special: Avocado Toast", color:"bg-warning"},
    {text:"☕ Saturday Special: Hazelnut Cappuccino", color:"bg-secondary"}
];

const today = new Date().getDay();

specialBadge.textContent = specials[today].text;
specialBadge.classList.add(specials[today].color);

// RESERVATION FORM

document.getElementById(
"reservationForm"
).addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name.length < 3){

alert(
"Name must be at least 3 characters"
);

return;

}

if(!emailRegex.test(email)){

alert("Enter a valid email");

return;

}

alert(
"Table Reserved Successfully!"
);

e.target.reset();

});

// CONTACT FORM

document.getElementById(
"contactForm"
).addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById(
"contactName"
).value.trim();

const email =
document.getElementById(
"contactEmail"
).value.trim();

const message =
document.getElementById(
"message"
).value.trim();

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name.length < 3){

alert("Invalid Name");

return;

}

if(!emailRegex.test(email)){

alert("Invalid Email");

return;

}

if(message.length < 10){

alert(
"Message should contain at least 10 characters"
);

return;

}

alert(
"Message Sent Successfully!"
);

e.target.reset();

});

// TODAY'S SPECIAL

const day = new Date().getDay();

if(day !== 0 && day !== 6){

document.getElementById(
"specialBadge"
).style.display = "none";

}

// DARK MODE

const darkBtn =
document.getElementById(
"darkModeBtn"
);

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle(
"dark-mode"
);

localStorage.setItem(
"theme",
document.body.classList.contains(
"dark-mode"
)
);

});

if(localStorage.getItem("theme")
=== "true"){

document.body.classList.add(
"dark-mode"
);

}
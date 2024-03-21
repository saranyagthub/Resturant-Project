const header=document.querySelector("header");

window.addEventListener("scroll",function(){
header.toggle("sticky",window.scrollY>80);

});
let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navlist.classList.toggle('open');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navlist.classList.remove('open');
}


const sr=ScrollReveal({
    origin:'top',distance:'85px',duration:2500,reset:true,
})
sr.reveal('.home-text',{delay:300});
sr.reveal('.home-img',{delay:400});
sr.reveal('.container',{delay:400});
sr.reveal('.reservation',{});
sr.reveal('.imgabout',{});
sr.reveal('.imgcontent',{delay:300});
sr.reveal('.exp,.chefs',{});
sr.reveal('.middle-text',{});
sr.reveal('.menu_card,.inner-gallery',{delay:500});
sr.reveal('.profile',{delay:300});
sr.reveal('.reviewcontent,.footer-brand',{delay:300});









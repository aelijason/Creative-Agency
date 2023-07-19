//Designed & Developed by Farhad Ahmed || Codeaims 

//sticky header
const navbar = document.querySelector('.header');

window.onscroll = () => {
    if(window.scrollY > 100){
        navbar.classList.add('background-color');
        navbar.classList.add('border-b');
    }
    else{
        navbar.classList.remove('background-color');
        navbar.classList.remove('border-b');

    }
}
// Toggle 
const toggle = document.querySelector('.toggle');
const navbarMenu = document.querySelector('.navbar-menu');

toggle.onclick = () =>{
    navbarMenu.classList.toggle('open');
    const isOpen = navbarMenu.classList.contains('open');
    toggle.name = isOpen ? 'close-outline' : 'menu-outline' ;
}

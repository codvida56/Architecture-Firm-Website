
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }
    });
});


const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/* Dropdown functionality for mobile */
const dropdownItems = document.querySelectorAll('.nav__item--dropdown');

dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from closing the menu
        const dropdownMenu = item.querySelector('.dropdown-menu');
        const isVisible = dropdownMenu.style.display === 'flex';

        // Hide all dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });

        // Toggle current dropdown
        if (!isVisible) {
            dropdownMenu.style.display = 'flex';
        }
    });
});

/* Close dropdowns when clicking outside */
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
    });
});




const dropdownItems2 = document.querySelectorAll('.nav__item--dropdown2');


dropdownItems2.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation(); 
        event.preventDefault(); 

        
        const dropdownMenu = item.querySelector('.dropdown-menu2');
        const isVisible = dropdownMenu.classList.contains('show-menu'); 

     
        document.querySelectorAll('.dropdown-menu2').forEach((menu) => {
            menu.classList.remove('show-menu'); 
        });

       
        if (!isVisible) {
            dropdownMenu.classList.add('show-menu'); 
        }
    });
});


document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu2').forEach((menu) => {
        menu.classList.remove('show-menu'); 
    });
});



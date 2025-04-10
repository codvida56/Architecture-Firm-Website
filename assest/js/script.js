
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










// counters script


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter h3');
    counters.forEach(counter => {
        counter.innerText = '0+';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');

            const increment = target / 200;

            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}+`;
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = `${target}+`;
            }
        };

        updateCounter();
    });
});





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











document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter-2 h3');

    function updateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const increment = target / 200;
        let count = 0;

        function update() {
            if (count < target) {
                count += increment;
                if (count > target) count = target; 
                counter.textContent = Math.ceil(count) + '+';
                requestAnimationFrame(update); 
            }
        }

        update();
    }

    function handleScroll() {
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                updateCounter(counter);
                
                window.removeEventListener('scroll', handleScroll);
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});









document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button33');
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('video-frame');
    const closeButton = document.querySelector('.close-button');
    const videoUrl = 'https://player.vimeo.com/video/25428289?h=e1206007f9';

    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        iframe.src = videoUrl;
        overlay.style.display = 'flex'; 
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        iframe.src = ''; 
    });

    
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            iframe.src = '';
        }
    });
});









var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}







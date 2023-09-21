// ? SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    
// ? MENU SHOW
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


// ? MENU HIDDEN
// Validate if constant exists
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


// ? REMOVE MENU MOBILE
// After a nav__link is clicked, the menu is removed
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {  
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(link => {
    link.addEventListener('click', linkAction)
})


// ? SHADOW HEADER
const shadowHeader = () => {
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                        :header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // !RECAPTCHA VALIDATION
      const captchaResponse = grecaptcha.getResponse();

      if (!captchaResponse.length > 0) {
        throw new Error("Captcha not complete")
      }

      const fd = new FormData(e.target);
      const params = new URLSearchParams(fd);

      fetch('http://httpbin.org/post', {
        method: 'POST',
        body:params,
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))

    // !serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_2i2x59q','template_iial8ue','#contact-form','D3RDCWoDTgZprtvhs')
    
  .then((result) => {
     // Show sent message
    contactMessage.textContent = 'Message sent successfully ✅'
    // Remove message after five seconds
    setTimeout(() => {
        contactMessage.textContent = ''
    }, 5000)
    // Clear input fields
    contactForm.reset()
  }, ()=> {
    // Show error message
    contactMessage.textContent = 'Error sending message ❌'
    // Remove message after five seconds
    setTimeout(() => {
        contactMessage.textContent = ''
    }, 5000)

  }) 


}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
const scrollUp = document.getElementById('scroll-up')
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}   

window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
        
}

window.addEventListener('scroll',scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains('iconTheme') ? 'ri-moon-line' : 'ri-sun-line'

//We validate if the user previously chose a theme
if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
//Activate the theme manually
themeButton.addEventListener('click', () => {
    //Add or remove the dark theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //Save the selected theme
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: 'бОрх',
    duration: 2500,
    delay: 400,
// reset: true // Animations repeat
})
sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(` .services__card, .projects__card`, {interval: 100})


/*=============== POPUP ON ABOUT PAGE ===============*/

        // JavaScript to show the pop-up when the link is clicked
        document.getElementById("popupLink").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the link from navigating
            document.getElementById("popup").style.display = "block";
        });
    
        // JavaScript to close the pop-up
        function closePopup() {
            document.getElementById("popup").style.display = "none";
        }

        // JavaScript to show the pop-up when the link is clicked
        document.getElementById("popupLink2").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the link from navigating
            document.getElementById("popup2").style.display = "block";
        });
    
        // JavaScript to close the pop-up
        function closePopup2() {
            document.getElementById("popup2").style.display = "none";
        }

        // JavaScript to show the pop-up when the link is clicked
        document.getElementById("popupLink1").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the link from navigating
            document.getElementById("popup1").style.display = "block";
        });
    
        // JavaScript to close the pop-up
        function closePopup1() {
            document.getElementById("popup1").style.display = "none";
        }
        
        // JavaScript to show the pop-up when the link is clicked
        document.getElementById("popupLink3").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the link from navigating
            document.getElementById("popup3").style.display = "block";
        });
    
        // JavaScript to close the pop-up
        function closePopup3() {
            document.getElementById("popup3").style.display = "none";
        }
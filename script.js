function toggleMenu(){
    const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.hamburger-icon')
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

const typed = new Typed ('.multiple-text', {
    strings: ['Frontend Developer','Help My Life 🥲!'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})

ScrollReveal().reveal({
    distance: '1000px',
    duration: 2000,
    delay: 200,
});

// ScrollReveal().reveal('.section__pic-container,.section__text', {origin:'right'})
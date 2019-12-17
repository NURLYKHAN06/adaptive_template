// Preview autoslide
let slides = document.querySelectorAll('.preview-slider .slide')
let index = -1;

function switchSlide(){
    if(index == slides.length - 1) index = -1;

    index++;
    slides.forEach(slide => slide.classList.remove('active'))
    slides[index].classList.add('active')
}

setInterval(switchSlide,2500)


// Services tabs
let serviceTabLinks = document.querySelectorAll('.services-wrap .links-tab a'),
    serviceSliders = document.querySelectorAll('.services-slider-wrap .slider-wrap')

serviceTabLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault()
        serviceTabLinks.forEach(item => item.classList.remove('active'))
        event.target.classList.add('active')

        if(event.target.classList.contains('tab-services-legal')){
            serviceSliders[0].classList.remove('active')
            serviceSliders[1].classList.add('active')
        } else {
            serviceSliders[1].classList.remove('active')
            serviceSliders[0].classList.add('active')
        }
    })
})

serviceTabLinks[1].click()

// Menu 
let btnMenu = document.querySelector('.btn-menu-toggle'),
    mainMenu = document.querySelector('header nav.main-nav')


btnMenu.addEventListener('click', event => {
    btnMenu.classList.toggle('active')
    mainMenu.classList.toggle('active')
    document.body.classList.toggle('menu-active')

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})


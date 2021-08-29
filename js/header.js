function header() {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    // Scroll header 
    window.addEventListener('scroll', function() {
        const header = $('.header')
        const scroll = $('.scroll')
     
        header.classList.toggle("sticky", window.scrollY > 0)
        scroll.classList.toggle("scroll__active", window.scrollY > 0)
        
    });
    
    onscroll = function () {
    const sections = $$('section')
    var scrollPosition = document.documentElement.scrollTop;
    sections.forEach((section) => {
        if(scrollPosition >= section.offsetTop - section.offsetHeight *0.25 &&
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight *0.25
        ) {
                var currentId = section.attributes.id.value
                removeAllActiveClasses()
                addActiveClass(currentId)
        }
    })

    }
    var removeAllActiveClasses = function() {
        $$('.header__mid-link').forEach((el) => {
            el.classList.remove('active')
        });

    };
    var addActiveClass = function (id) {
        var selector = `.header__mid-link[href="#${id}"]`;
        $(selector).classList.add('active');
    }
    const header__mid__item = $$('.header__mid-item')
    const header__mid__link = $$('.header__mid-link')
    header__mid__item.forEach((item, index) => {
        const link__active = header__mid__link[index]
        item.onclick = function () {
    
            $('.header__mid-link.active').classList.remove('active')
            link__active.classList.add('active')
        }
    });
  
    const navbar__icon = $('.navbar__icon')
    navbar__icon.onclick = function () {
        $('.fa-bars').classList.toggle('fa-times')
        $('.header__mid').classList.toggle('header__mid-active')
        console.log("toi day");
    }
}


header()
export default header
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        fixedNavigation.init();
        scrollTrigger.init();
        testimonialsSlide.init();
        ourTeamSlide.init();

        scrollSpy.init();
    })

    //global variables
    const header = document.querySelector('.header');
    const galleryItems = document.querySelectorAll('.works__item');
    const screenPosition = window.innerHeight / 1.2;
    const links = document.querySelectorAll('.gnb__link');
    const fixedNavigation = {
        init() {
            this.fixedNavigation();
        },
        fixedNavigation() {
            window.addEventListener('scroll', this.handleScrollFixedNavigation);
        },
        handleScrollFixedNavigation() {
            if (header) {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    header.classList.add('header--fixed');
                } else {
                    header.classList.remove('header--fixed');
                }
            }
        }
    }

    const scrollTrigger = {
        init() {
            this.scrollTrigger();
        },
        scrollTrigger() {
            window.addEventListener('scroll', this.handleScrollTrigger);
        },
        handleScrollTrigger() {
            if (galleryItems) {
                galleryItems.forEach(item => {
                    let galleryPositon = item.getBoundingClientRect().top;
                    if (galleryPositon < screenPosition) {
                        item.classList.add('active');
                    }
                });
            }
        }
    }

    const ourTeamSlide = {
        init() {
            this.ourTeamSlide();
        },
        ourTeamSlide() {
            const ourTeamSlider = new Swiper(".ourteam .swiper", {
                direction: "horizontal",
                speed: 500,
                slidesPerView: 4,
                spaceBetween: 30,
                effect: "slide",
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },

                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },

                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            })
        }
    }


    const testimonialsSlide = {
        init() {
            this.testimonialsSlide();
        },
        testimonialsSlide() {
            const testimonialsSlide = new Swiper(".testimonials .swiper", {
                direction: "horizontal",
                speed: 500,
                slidesPerView: 1,
                effect: "fade",
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            })
        }
    }

    const scrollSpy = {
        init() {
            this.scrollSpy();
        },
        scrollSpy() {
            links.forEach(item => {
               item.addEventListener('click', (e) => {
                    e.preventDefault()
                    const id = item.dataset.link;
                    const section = document.querySelector(`#${id}`);
                    if(section) {
                        const headerHeight = header.offsetHeight;
                        const sectionPosition = section.offsetTop - headerHeight;
                        window.scrollTo({
                            top: sectionPosition - headerHeight,
                            behavior: "smooth"
                        });
                    }
               })
            })
        },
    }
})()
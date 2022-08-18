(() => {
    document.addEventListener('DOMContentLoaded', () => {
        fixedNavigation.init();
        scrollTrigger.init();
        testimonialsSlide.init();
        ourTeamSlide.init();
        scrollSpy.init();
        backToTop.init();
        activeMenuLink.init()
    })

    //global variables
    const header = document.querySelector('.header');
    const galleryItems = document.querySelectorAll('.works__item');
    const screenPosition = window.innerHeight;
    const links = document.querySelectorAll('.gnb__link');
    const backToTopBtn = document.querySelector('.backtotop')

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


    const activeMenuLink = {
        init() {
            this.activeMenuLink();
        },
        activeMenuLink() {
            window.addEventListener('scroll', () => {
                const sectionList = ['features', 'works', 'ourteam', 'testimonials', 'download'];
                sectionList.forEach(section => {
                    const currentSection = document.querySelector(`#${section}`)

                    currentSectionPosition = currentSection.getBoundingClientRect().top

                    const linkActive = document.querySelector(`[data-link=${section}]`);
                    if(currentSection) {
                        console.log(screenPosition);
                        if(currentSectionPosition < screenPosition - 600) {
                            links.forEach(link => {
                                link.classList.remove('active')
                            })
                            linkActive.classList.add('active')
                        }
                    }
                    if(window.pageYOffset == 0)  {
                        links.forEach(link => {
                            link.classList.remove('active')
                        })
                    }
                })
            })
        },
    }


    const backToTop = {
        init() {
            this.backToTop();
        },
        backToTop() {
            window.addEventListener('scroll', this.handleScrollDisplayBackToTop)
            backToTopBtn.addEventListener('click', this.handleCickBackToTop)
        },
        handleCickBackToTop() {
            if(backToTop) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        },
        handleScrollDisplayBackToTop() {
            if(backToTop) {
                if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    backToTopBtn.classList.add('active')
                }else {
                    backToTopBtn.classList.remove('active')
                }
           }
        }
    }
})()
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        fixedNavigation.init();
        scrollTrigger.init();
        testimonialsSlide.init();
        ourTeamSlide.init();
        scrollSpy.init();
        backToTop.init();
        activeMenuLink.init();
        toggleMenu.init();
    })

    //global variables
    const header = document.querySelector('.header');
    const galleryItems = document.querySelectorAll('.works__item');
    const navigation = document.querySelector('.gnb')
    const gnbItems = document.querySelectorAll('.gnb__item');
    const links = document.querySelectorAll('.gnb__link');
    const backToTopBtn = document.querySelector('.backtotop');
    const menuBtn = document.querySelector('.toggle-menu');
    const featureItems = document.querySelectorAll('.features__item');
    const ourTeams = document.querySelectorAll('.ourteam__item');
    const bannerTitle = document.querySelector('.banner__title');
    const bannerSubtitle = document.querySelector('.banner__subtitle');
    const bannerBtn = document.querySelector('.js-banner-btn')
    const bannerText = ['banner__title', 'banner__subtitle', 'js-banner-btn'];
    const screenPosition = window.innerHeight;

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
            if (bannerTitle) {
                bannerTitle.classList.add('active')
                bannerTitle.style.transitionDelay = '.2s';
            }
            if (bannerSubtitle) {
                bannerSubtitle.classList.add('active')
                bannerSubtitle.style.transitionDelay = '.4s';
            }
            if (bannerBtn) {
                bannerBtn.classList.add('active')
                bannerBtn.style.transitionDelay = '.6s';
            }
            window.addEventListener('scroll', this.handleScrollTrigger);
        },
        handleScrollTrigger() {
            if (galleryItems) {
                galleryItems.forEach(image => {
                    let galleryPositon = image.getBoundingClientRect().top;
                    if (galleryPositon < screenPosition) {
                        image.classList.add('active');
                    }
                });
            }

            if (featureItems) {
                featureItems.forEach((feature, idx) => {
                    let featurePositon = feature.getBoundingClientRect().top
                    if (idx > 0) {
                        feature.style.transitionDelay = `${(idx / 10) * 1.2}s`
                    }
                    if (featurePositon < screenPosition) {
                        feature.classList.add('active')
                    }
                })
            }

            if (ourTeams) {
                ourTeams.forEach((member, idx) => {
                    let ourTeamPositon = member.getBoundingClientRect().top
                    if (idx > 0) {
                        member.style.transitionDelay = `${(idx / 10) * 1.2}s`
                    }
                    if (ourTeamPositon < screenPosition) {
                        member.classList.add('active')
                    }
                })
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
                breakpoints: {
                    320: {
                        slidesPerView: 1,

                    },

                    1024: {
                        slidesPerView: 2,

                    },

                    1025: {
                        slidesPerView: 4,

                    }
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
                    if (section) {
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
                    if (currentSection) {
                        if (currentSectionPosition < screenPosition - 600) {
                            links.forEach(link => {
                                link.classList.remove('active')
                            })
                            linkActive.classList.add('active')
                        }
                    }
                    if (window.pageYOffset === 0) {
                        links.forEach(link => {
                            link.classList.remove('active')
                        })
                    }
                })
            })
        },
    }

    const toggleMenu = {
        init() {
            this.toggleMenu()
        },
        toggleMenu() {
            if (menuBtn) {
                menuBtn.addEventListener('click', this.handleClickToggleMenu)
            }
        },
        handleClickToggleMenu() {
            gnbItems.forEach((item, idx) => {
                item.classList.remove('active')
                if (idx > 0) {
                    item.style.transitionDelay = '0s'
                }
            })
            if (navigation.classList.contains('active')) {
                navigation.classList.remove('active')
                document.body.style.overflowY = 'auto'
            }
            else {
                gnbItems.forEach((item, idx) => {
                    item.classList.add('active')
                    if (idx > 0) {
                        item.style.transitionDelay = `${idx / 10}s`
                    }
                    item.addEventListener('click', () => {
                        navigation.classList.remove('active')
                        menuBtn.classList.remove('active')
                    })
                })
                navigation.classList.add('active')
                document.body.style.overflowY = 'hidden'
            }

            if (menuBtn.classList.contains('active')) {
                menuBtn.classList.remove('active')
            } else {
                menuBtn.classList.add('active')
            }

            if (navigation.classList.contains('active')) {
                bannerText.forEach(item => {
                    const element = document.querySelector(`.${item}`)
                    element.classList.add('hidden')
                })

            } else {
                bannerText.forEach(item => {
                    const element = document.querySelector(`.${item}`)
                    element.classList.remove('hidden')
                })
            }
        }
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
            if (backToTop) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        },
        handleScrollDisplayBackToTop() {
            if (backToTop) {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    backToTopBtn.classList.add('active')
                } else {
                    backToTopBtn.classList.remove('active')
                }
            }
        }
    }
})()
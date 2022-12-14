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
        textAnimation.init();
    })

    //global variables
    const header = document.querySelector('.header');
    const galleryItems = document.querySelectorAll('.works__item');
    const navigation = document.querySelector('.gnb')
    const gnbItems = document.querySelectorAll('.gnb__item');
    const links = document.querySelectorAll('.gnb__link');
    const bannerTitle = document.querySelector('.banner__title');
    const bannerSubtitle = document.querySelector('.banner__subtitle span');
    const bannerBtn = document.querySelector('.banner__btn')
    const menuBtn = document.querySelector('.toggle-menu');
    const featureItems = document.querySelectorAll('.features__item');
    const ourTeams = document.querySelectorAll('.ourteam__item');
    const testimonials = document.querySelector('.testimonials');
    const downloadElements = ['download__title', 'download__subtitle', 'download__btn'];
    const backToTopBtn = document.querySelector('.backtotop');
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
            if (bannerSubtitle) {
                bannerSubtitle.classList.add('is-active')
                bannerSubtitle.style.transitionDelay = '.3s';
            }
            if (bannerBtn) {
                bannerBtn.classList.add('is-active')
                bannerBtn.style.transitionDelay = '.4s';
            }

            window.addEventListener('scroll', this.handleScrollTrigger);
        },
        handleScrollTrigger() {
            if (galleryItems) {
                galleryItems.forEach(image => {
                    const galleryPositon = image.getBoundingClientRect().top;
                    if (galleryPositon < screenPosition) {
                        image.classList.add('is-active');
                    }
                });
            }

            if (featureItems) {
                featureItems.forEach((feature, idx) => {
                    const featurePositon = feature.getBoundingClientRect().top
                    if (idx > 0) {
                        feature.style.transitionDelay = `${(idx / 10) * 1.2}s`;
                    }
                    if (featurePositon < screenPosition) {
                        feature.classList.add('is-active');
                    }
                })
            }

            if (ourTeams) {
                ourTeams.forEach((member, idx) => {
                    const ourTeamPositon = member.getBoundingClientRect().top;
                    if (idx > 0) {
                        member.style.transitionDelay = `${(idx / 10) * 1.2}s`;
                    }
                    if (ourTeamPositon < screenPosition) {
                        member.classList.add('is-active');
                    }
                })
            }

            if (testimonials) {
                const testimonialsPosition = testimonials.getBoundingClientRect().top;
                if (testimonialsPosition < screenPosition) {
                    testimonials.style.transitionDelay = '.2s';
                    testimonials.classList.add('is-active');
                }
            }

            if (downloadElements) {
                downloadElements.forEach((item, idx) => {
                    const element = document.querySelector(`.${item}`);
                    const elementPositon = element.getBoundingClientRect().top;
                    if (elementPositon < screenPosition) {
                        element.style.transitionDelay = `.${idx + 1}s`;
                        element.classList.add('is-active');
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
                    e.preventDefault();
                    const id = item.dataset.link;
                    const section = document.querySelector(`#${id}`);
                    if (section) {
                        const headerHeight = header.offsetHeight;
                        const sectionPosition = section.offsetTop - headerHeight;
                        window.scrollTo({
                            top: sectionPosition - headerHeight + 50,
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
                    const currentSection = document.querySelector(`#${section}`);

                    currentSectionPosition = currentSection.getBoundingClientRect().top;
                    const linkActive = document.querySelector(`[data-link=${section}]`);
                    if (currentSection) {
                        if (currentSectionPosition < screenPosition - 600) {
                            links.forEach(link => {
                                link.classList.remove('is-active');
                            })
                            linkActive.classList.add('is-active');
                        }
                    }
                    if (window.pageYOffset === 0) {
                        links.forEach(link => {
                            link.classList.remove('is-active');
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
                menuBtn.addEventListener('click', this.handleClickToggleMenu);
            }
        },
        handleClickToggleMenu() {
            gnbItems.forEach((item, idx) => {
                item.classList.remove('is-active');
                if (idx > 0) {
                    item.style.transitionDelay = '0s';
                }
            })
            if (navigation.classList.contains('is-active')) {
                navigation.classList.remove('is-active');
                document.body.style.overflowY = 'auto';
            }
            else {
                gnbItems.forEach((item, idx) => {
                    item.classList.add('is-active');
                    if (idx > 0) {
                        item.style.transitionDelay = `${idx / 10}s`;
                    }
                    item.addEventListener('click', () => {
                        navigation.classList.remove('is-active');
                        menuBtn.classList.remove('is-active');
                        document.body.style.overflowY = 'auto';
                    })
                })
                navigation.classList.add('is-active')
                document.body.style.overflowY = 'hidden';
            }

            if (menuBtn.classList.contains('is-active')) {
                menuBtn.classList.remove('is-active');
            } else {
                menuBtn.classList.add('is-active');
            }
        }
    }

    const textAnimation = {
        init() {
            this.textAnimation();
        },
        textAnimation() {
            const bannerText = bannerTitle.textContent;
            const wordList = [];
            bannerTitle.textContent = '';
            const textList = bannerText.split(' ');
            const textLength = textList.length;
            for (let i = 0; i < textLength; i++) {
                if (textList[i] === '') {
                    wordList.push(text[i]);
                } else if (i === 3) {
                    wordList.push(`<span class="banner__text-wrap"><span class="banner__title-txt" style="animation-delay:${(i * 0.1)}s">${textList[i]}</span></br></span>`);
                } else {
                    wordList.push(`<span class="banner__text-wrap"><span class="banner__title-txt" style="animation-delay:${(i * 0.1)}s">${textList[i]}</span></span>`);
                }
            }
            bannerTitle.innerHTML = wordList.join('');
        }
    }

    const backToTop = {
        init() {
            this.backToTop();
        },
        backToTop() {
            window.addEventListener('scroll', this.handleScrollDisplayBackToTop);
            backToTopBtn.addEventListener('click', this.handleCickBackToTop);
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
                    backToTopBtn.classList.add('is-active');
                } else {
                    backToTopBtn.classList.remove('is-active');
                }
            }
        }
    }
})()
document.addEventListener('DOMContentLoaded', function () {
    // --- Dark Mode Toggle ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            if (sunIcon) sunIcon.style.display = 'inline-block';
            if (moonIcon) moonIcon.style.display = 'none';
        } else {
            document.documentElement.classList.remove('dark-mode');
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'inline-block';
        }
    }

    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    applyTheme(currentTheme);

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            let newTheme = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isPanelOpening = mobileMenu.classList.toggle('nav-open');
            mobileMenuButton.setAttribute('aria-expanded', String(isPanelOpening));
        });
    }

    // --- Header Hide on Scroll ---
    const header = document.querySelector('header');
    if (header) {
        let lastScrollY = window.scrollY;
        const headerHeight = header.offsetHeight;
        const scrollThreshold = 5;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY) <= scrollThreshold) {
                return;
            }

            if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
                // Scrolling Down and past the header: add the hide class
                header.classList.add('header--hidden-on-scroll');
            } else {
                // Scrolling Up or at the top (or not past header): remove the hide class
                if (currentScrollY < lastScrollY || currentScrollY <= headerHeight) {
                    header.classList.remove('header--hidden-on-scroll');
                }
            }
            lastScrollY = currentScrollY;
        });
    } else {
        console.warn('Header element not found for scroll behavior.');
    }

    // --- Hero Section Video Fallback (Image when JS is ready) ---
    const heroVideo = document.getElementById('hero-video');
    const heroSnapshotImage = document.getElementById('hero-snapshot-image');

    if (heroVideo && heroSnapshotImage) {
        heroSnapshotImage.style.opacity = '0';
        heroSnapshotImage.style.visibility = 'hidden';

        heroVideo.addEventListener('loadeddata', () => {
            heroSnapshotImage.style.transition = 'opacity 0.5s ease-out, visibility 0s linear 0.5s';
            heroSnapshotImage.style.opacity = '0';
            heroSnapshotImage.style.visibility = 'hidden';
        }, { once: true });

        heroVideo.addEventListener('error', () => {
            heroSnapshotImage.style.transition = 'opacity 0.5s ease-out, visibility 0s linear';
            heroSnapshotImage.style.opacity = '1';
            heroSnapshotImage.style.visibility = 'visible';
        });

        const onVideoReady = () => {
            heroVideo.classList.add('is-loaded'); // Only add is-loaded to video, as image is handled by opacity/visibility
        };

        if (heroVideo.readyState >= 4) { // HAVE_ENOUGH_DATA
            onVideoReady();
        } else {
            heroVideo.addEventListener('canplaythrough', onVideoReady, { once: true });
        }
    } else {
        if (document.getElementById('hero-section')) {
            // Removed console.warns for cleaner console if elements are intentionally missing on certain pages
        }
    }

    // --- Right Side Page Background Updater (for Services Page Swiper) ---
    const pageRightBgContainer = document.querySelector('.page-right-background-image');

    function updateRightSidePageBackground(swiperInstance) {
        // IMPORTANT: Check if we are on the service page. If not, hide the container and return.
        const isServicePage = document.body.classList.contains('service-page');
        if (!isServicePage) {
            if (pageRightBgContainer) {
                pageRightBgContainer.style.opacity = '0';
                pageRightBgContainer.style.backgroundImage = 'none'; // Clear any previously set image
            }
            return; // Stop execution if not on the service page
        }

        // Only proceed if the container is found and Swiper instance/slides are valid
        if (!pageRightBgContainer || !swiperInstance || !swiperInstance.slides || !swiperInstance.slides.length) {
            if(pageRightBgContainer) pageRightBgContainer.style.opacity = '0'; // Hide if something is missing
            return;
        }

        const middleSlide = swiperInstance.slides[swiperInstance.activeIndex];
        if (!middleSlide) {
            pageRightBgContainer.style.opacity = '0'; // Hide if no valid slide
            return;
        }

        const bgImageElement = middleSlide.querySelector('.service-card-home__background-image');
        if (bgImageElement && bgImageElement.src) {
            const imageUrl = bgImageElement.src;
            const activeOpacity = getComputedStyle(pageRightBgContainer).getPropertyValue('--active-opacity').trim() || '0.10';

            if (pageRightBgContainer.style.backgroundImage !== `url("${imageUrl}")`) {
                pageRightBgContainer.style.backgroundImage = `url("${imageUrl}")`;
            }
            pageRightBgContainer.style.opacity = activeOpacity;
        } else {
            pageRightBgContainer.style.backgroundImage = 'none';
            pageRightBgContainer.style.opacity = '0';
        }
    }


    // --- Swiper Initializations ---
    if (typeof Swiper !== 'undefined') {

        // --- Home Page Services Swiper ---
        if (document.querySelector('.services-home-swiper') && !document.querySelector('.services-page-carousel .services-home-swiper')) {
            const homePageSwiper = new Swiper('.services-home-swiper', {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 20,
                loop: true,
                pagination: {
                    el: '.services-home-swiper .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.services-home-swiper .swiper-button-next',
                    prevEl: '.services-home-swiper .swiper-button-prev',
                },
                on: {
                    init: function (swiper) {
                        if (pageRightBgContainer && getComputedStyle(pageRightBgContainer).display !== 'none') {
                            updateRightSidePageBackground(swiper);
                        } else if (pageRightBgContainer) {
                             pageRightBgContainer.style.opacity = '0';
                        }
                    },
                    slideChangeTransitionEnd: function (swiper) {
                        if (pageRightBgContainer && getComputedStyle(pageRightBgContainer).display !== 'none') {
                            updateRightSidePageBackground(swiper);
                        }
                    },
                    resize: function(swiper) {
                        if (pageRightBgContainer && getComputedStyle(pageRightBgContainer).display !== 'none') {
                            updateRightSidePageBackground(swiper);
                        } else if (pageRightBgContainer) {
                            pageRightBgContainer.style.opacity = '0';
                        }
                    }
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 15,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        centeredSlides: true,
                    },
                }
            });
        }


        // --- Services Page Carousel Swiper ---
        // This is the section we are adjusting for the services overview page
        if (document.querySelector('.services-page-carousel .services-home-swiper')) {
            const servicesPageSwiper = new Swiper('.services-page-carousel .services-home-swiper', {
                slidesPerView: 3, // Explicitly show 3 slides on larger screens
                centeredSlides: false, // Do not center the entire group of slides, let them align left
                spaceBetween: 20,
                loop: true, // Keep looping if desired

                pagination: {
                    el: '.services-page-carousel .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.services-page-carousel .swiper-button-next',
                    prevEl: '.services-page-carousel .swiper-button-prev',
                },
                on: {
                    init: function (swiper) {
                        if (pageRightBgContainer && getComputedStyle(pageRightBgContainer).display !== 'none') {
                            updateRightSidePageBackground(swiper);
                        } else if (pageRightBgContainer) {
                             pageRightBgContainer.style.opacity = '0';
                        }
                    },
                    slideChangeTransitionEnd: function (swiper) {
                        if (pageRightBgContainer && getComputedStyle(pageRightBgContainer).display !== 'none') {
                            updateRightSidePageBackground(swiper);
                        }
                    },
                    resize: function(swiper) {
                        if (pageRightBgContainer && getComputedStyle(pageRightBgContainer).display !== 'none') {
                            updateRightSidePageBackground(swiper);
                        } else if (pageRightBgContainer) {
                            pageRightBgContainer.style.opacity = '0';
                        }
                    }
                },
                breakpoints: {
                    0: { // Mobile
                        slidesPerView: 1.2,
                        spaceBetween: 15,
                        centeredSlides: true, // Keep centered for mobile for a 'peeking' effect
                    },
                    768: { // Tablet
                        slidesPerView: 2, // Show 2 slides on tablet
                        spaceBetween: 20,
                        centeredSlides: false, // Align left for tablet
                    },
                    1024: { // Desktop (or larger screens)
                        slidesPerView: 3, // Show 3 slides on desktop
                        spaceBetween: 20,
                        centeredSlides: false, // Align left for desktop
                    }
                }
            });
        }

    } // End of if (typeof Swiper !== 'undefined')


    // --- Testimonial Swiper ---
    if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial-swiper')) {
        const testimonialSwiperEl = document.querySelector('.testimonial-swiper');
        let autoplayDelay = 5000;

        if (testimonialSwiperEl && testimonialSwiperEl.dataset.autoplayDelay) {
            const parsedDelay = parseInt(testimonialSwiperEl.dataset.autoplayDelay, 10);
            if (!isNaN(parsedDelay) && parsedDelay > 0) {
                autoplayDelay = parsedDelay;
            }
        }

        const testimonialSwiper = new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: autoplayDelay,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonial-swiper .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.testimonial-swiper .swiper-button-next',
                prevEl: '.testimonial-swiper .swiper-button-prev',
            },
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            if (hrefAttribute && hrefAttribute.length > 1 && hrefAttribute.startsWith('#')) {
                try {
                    const targetElement = document.querySelector(hrefAttribute);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    console.warn(`Smooth scroll failed for selector: ${hrefAttribute}`, error);
                }
            }
        });
    });

}); // End of DOMContentLoaded
jQuery(document).ready(function ($) {
    // ДЛЯ ОТКРЫТИЯ МОДАЛКИ
    function openModalOrMenu(trigger, targetSelector) {
        $(trigger).addClass('active');
        $('body').css('overflow-y', 'hidden');
        $(targetSelector).on('click', function (e) {
            if (e.target === this) {
                $(this).removeClass('active');
                $('body').css('overflow-y', 'initial');
            }
        });
    }

    // ДЛЯ ЗАКРЫТИЯ МОДАЛКИ, КОГДА ПРОКЛИКАНО ЗА ПРЕДЕЛЫ МОДАЛКИ
    function closeModalOrMenu(trigger) {
        $(trigger).removeClass('active');
        $('body').css('overflow-y', 'initial');
    }

    // ДЛЯ ВЫБОРА HREF ДЛЯ МОДАЛКИ
    $('a.getModal').on('click', function (e) {
        e.preventDefault();
        let triggerHref = $(this).attr('href');
        openModalOrMenu(triggerHref, triggerHref);
    });


    // ДЛЯ ЗАКРЫТИЯ МОБИЛЬНОГО МЕНЮ
    $('.mobile-menu__close, .mobile-menu, .mobile-menu a').on('click', function () {
        closeModalOrMenu($(this).parents('.mobile-menu'));
    });

    // toggler ДЛЯ АККОРДИОНА
    $('.accordion__item').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
    })

    $('.opening__down').on('click', function (e) {
        e.preventDefault();
        const parentSection = $(this).closest('section');
        const nextSection = parentSection.next('section');
        if (nextSection.length) {
            $('html, body').animate({
                scrollTop: nextSection.offset().top
            }, 100);
        }
    });

    $('.events__slider').each(function (index, element) {
        let mainSlider = new Swiper(element, {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            loop: true,
            navigation: {
                prevEl: $(element).find('.events__arrow--left').get(0),
                nextEl: $(element).find('.events__arrow--right').get(0),
            },
        });
    });

    $('.cards__view').each(function (index, element) {
        let mainSlider = new Swiper(element, {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            loop: true,
            navigation: {
                prevEl: $(element).find('.cards__arrow--left').get(0),
                nextEl: $(element).find('.cards__arrow--right').get(0),
            },
        });
    });
});

// МАСКА ДЛЯ ТЕЛЕФОНА В input[type='tel']
let maskedPhones = document.querySelectorAll("input[type='tel']");
for (var i = 0; i < maskedPhones.length; i++) {
    new IMask(maskedPhones[i], {
        mask: '+{7} (000) 000-00-00',
        placeholder: {
            show: 'always'
        }
    });
}

// ДЛЯ ЗАКРЫТИЯ МОДАЛКИ, КОГДА ПРОКЛИКАНО ЗА ПРЕДЕЛЫ МОДАЛКИ - УНИВЕРСАЛЬНЫЙ
let body = document.querySelector('body')
function closeModal(modalName, reverse = false) {
    modalName = document.querySelector(modalName)
    window.addEventListener('click', function (e) {
        if (reverse) {
            if (e.target === modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        } else {
            if (e.target !== modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        }

    })
}
closeModal('.mobile-menu', true)


function createTab(tabName, contentName, selectName) {
    tabName = document.querySelectorAll(tabName);
    contentName = document.querySelectorAll(contentName);
    const select = document.querySelector(selectName);

    if (select) {
        let tabsArray = Array.from(tabName);
        tabsArray.map((tab, tabIndex) => {
            tab.addEventListener('click', function (e) {
                e.preventDefault();
                for (let tabAll of tabName) tabAll.classList.remove('active');
                this.classList.add('active');

                for (let tabsContents of contentName) tabsContents.classList.remove('active');
                contentName[tabIndex].classList.add('active');
                select.selectedIndex = tabIndex;
            });
        });

        select.addEventListener('change', function () {
            let selectedIndex = this.selectedIndex;

            for (let tabAll of tabName) tabAll.classList.remove('active');
            for (let tabsContents of contentName) tabsContents.classList.remove('active');

            tabName[selectedIndex].classList.add('active');
            contentName[selectedIndex].classList.add('active');
        });
    }
}
createTab('.rest .tabs__item', '.rest .tabs__content', '.rest .tabs__select');
createTab('.gallery .tabs__item', '.gallery .tabs__content', '.gallery .tabs__select');


// SWIPER слайдеры
const welcomeSlider = new Swiper('.welcome__slider', {
    loop: true,
    slidesPerView: 1,
    speed: 1500,
    // autoplay: true,
    // autoplaySpeed: 4000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        prevEl: ".welcome__arrow--left",
        nextEl: ".welcome__arrow--right",
    },

});

const offerSlider = new Swiper('.offer__slider', {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 3.5,
    centeredSlides: true,
    navigation: {
        prevEl: ".arrow--left",
        nextEl: ".arrow--right",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2.5,
        },

        1400: {
            slidesPerView: 3.5,
        },
    }
});

const reviewsSlider = new Swiper('.reviews__slider', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    navigation: {
        prevEl: ".arrow--left",
        nextEl: ".arrow--right",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2.5,
        },

        1400: {
            spaceBetween: 0,
            slidesPerView: 3,
        },
    }
});

let cardsTrigger = new Swiper("#cardMini", {
    slidesPerView: 5,
    spaceBetween: 15,
    freeMode: true,
    watchSlidesProgress: true,
    loop: false,
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 'auto',
        },

        620: {
            slidesPerView: 'auto',
        },

        1024: {
            slidesPerView: 'auto',
        },

        1400: {
            slidesPerView: 5,
        },
    }
});


let cardsSlider = new Swiper("#cardMain", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: false,
    thumbs: {
        swiper: cardsTrigger,
    },
    navigation: {
        prevEl: ".card__arrow--left",
        nextEl: ".card__arrow--right",
    },
});

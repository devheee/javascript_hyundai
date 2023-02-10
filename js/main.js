//top banner

const TOP_BANNER = document.querySelector('#header .topBanner');
const TOP_BANNER_BTN = document.querySelector('#header i');
const MAIN_SLIDE_NAV = document.querySelector('#mainVisual .slide_nav');
const MAIN_SLIDE_NAV_LI = document.querySelectorAll('#mainVisual .slide_nav>li');
const MAIN_SLIDE_NUM = document.querySelector('#mainVisual .num');

const TOP_BANNER_HANDLER = () => {
    TOP_BANNER.classList.add('on');
}

TOP_BANNER_BTN.addEventListener('click', TOP_BANNER_HANDLER);

const TOP_BANNER_SLIDE_OPTION = {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".dots",
        clickable: true,
    },
}

const TOP_BANNER_SLIDE = new Swiper('.topBanner', TOP_BANNER_SLIDE_OPTION);

//gnb

const HD_WRAP = document.querySelector('#header .hdWap');

const HD_WRAP_HANDLER = () => {
    let SCT = window.scrollY;
    //console.log('스크롤량 : ', SCT);
    //HD_WRAP.classList.toggle('on');
    SCT > 0
        ? HD_WRAP.classList.add('on')
        : HD_WRAP.classList.remove('on');
}

window.addEventListener('scroll', HD_WRAP_HANDLER)




const MAIN_VISUAL_SLIDE_OPTION = {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // }
    // navigation: {
    //     nextEl: "#mainVisual .arrows>div:nth-child(1)",
    //     prevEl: "#mainVisual .arrows>div:nth-child(2)",
    // }
    on: {
        slideChangeTransitionStart: function () {
            console.log(this.realIndex, MAIN_SLIDE_NAV_LI);
            let idx = this.realIndex;
            let total = this.slides.length;
            MAIN_SLIDE_NAV_LI.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_NAV_LI[idx].classList.add('on');
            MAIN_SLIDE_NUM.innerHTML = `<strong>${0}${idx + 1}</strong> / <span>${0}${total - 2}</span>`;
        }
    }
}
const MAIN_VISUAL_SLIDE = new Swiper('.mainSlide', MAIN_VISUAL_SLIDE_OPTION);

const MAIN_VISUAL_SLIDE_ARROWS = document.querySelectorAll('#mainVisual .arrows>div')
console.log(MAIN_VISUAL_SLIDE_ARROWS[0]);


MAIN_VISUAL_SLIDE_ARROWS[0].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev()
})
MAIN_VISUAL_SLIDE_ARROWS[1].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext()
})


//e.target

const MAIN_SLIDE_NAV_HANDLER = e => {
    e.preventDefault();
    // console.log(e.target);
    // for (let i = 0; i < MAIN_SLIDE_NAV_LI.length; i++) {
    //     MAIN_SLIDE_NAV_LI[i].classList.remove('on')
    // }
    const TG = e.target.parentElement;
    //console.log(MAIN_SLIDE_NAV_LI, [...MAIN_SLIDE_NAV_LI]);
    const I = [...MAIN_SLIDE_NAV_LI].indexOf(TG);
    //console.log(I)
    //$(this).parent().index();
    //TG.classList.add('on')
    MAIN_VISUAL_SLIDE.slideTo(I + 1);
}

MAIN_SLIDE_NAV.addEventListener('click', MAIN_SLIDE_NAV_HANDLER)

const PF_LEFT_SLIDE_OPTION = {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    initalSlide: 1,
    navigation: {
        nextEl: "#mainPortfolio .arrows li:nth-child(2)",
        prevEl: "#mainPortfolio .arrows li:nth-child(1)"
    }
    // watchSlidesProgress: true,
    // autoplay: {
    //     delay: 3000,
    // }
}

const PF_LEFT_SLIDE = new Swiper('.pf_left_slide', PF_LEFT_SLIDE_OPTION);

const PF_RIGHT_SLIDE_OPTION = {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    slideToClickedSlide: true,
    // watchSlidesProgress: true,
    // thumbs: {
    //     swiper: PF_LEFT_SLIDE,
    // }
}

const PF_RIGHT_SLIDE = new Swiper('.pf_right_slide', PF_RIGHT_SLIDE_OPTION);
PF_LEFT_SLIDE.controller.control = PF_RIGHT_SLIDE;
PF_RIGHT_SLIDE.controller.control = PF_LEFT_SLIDE;

const MS_CONTENT = document.querySelectorAll('#mainSolution .Ms_content .content')
const MS_NUM = document.querySelector('#mainSolution .num')

const MS_SLIDE_OPTION = {
    loop: true,
    spaceBetween: 100,
    centerdSlides: true,
    slidesPerView: "auto",
    slideActiveClass: "on",
    on: {
        slideChangeTransitionStart: function () {
            console.log(this, this.realIndexm, this.slides.length);
            let idx = this.realIndex;
            let total = this.slides.length;
            // for (let i = 0; i < MS_CONTENT.length; i++) {
            //     MS_CONTENT[i].classList.remove('on');
            // }
            MS_NUM.innerHTML = `<strong>${idx < 10 ? '0' : ''}${idx + 1}</strong> / <span>${total < 10 ? '0' : ''}${total}</span>`;

            MS_CONTENT.forEach(it => it.classList.remove('on'));
            MS_CONTENT[idx].classList.add('on');
        }
    },
    navigation: {
        nextEl: "#mainSolution .arrows li:nth-child(2)",
        prevEl: "#mainSolution .arrows li:nth-child(1)"
    },
    pagination: {
        el: "#mainSolution .dots",
        clickable: true,
    },
}
const MS_SLIDE = new Swiper('.Ms_slide', MS_SLIDE_OPTION)
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
    SCT > 0
        ? HD_WRAP.classList.add('on')
        : HD_WRAP.classList.remove('on');
}

window.addEventListener('scroll', HD_WRAP_HANDLER);

const MAIN_VISUAL_SLIDE_OPTION = {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // navigation: {
    //     nextEl: "#mainVisual .arrows>div:nth-child(1)",
    //     prevEl: "#mainVisual .arrows>div:nth-child(2)",
    // },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this, this.realIndex, MAIN_SLIDE_NAV_LI);
            let idx = this.realIndex;
            let total = this.slides.length;
            MAIN_SLIDE_NAV_LI.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_NAV_LI[idx].classList.add('on');
            MAIN_SLIDE_NUM.innerHTML = `<strong>${idx < 9 ? 0 : ''}${idx + 1}</strong> / <span>${total - 2}</span>`;
        }
    }
}

const MAIN_VISUAL_SLIDE = new Swiper('.mainSlide', MAIN_VISUAL_SLIDE_OPTION);

const MAIN_VISUAL_SLIDE_ARROWS = document.querySelectorAll('#mainVisual .arrows>div');
console.log(MAIN_VISUAL_SLIDE_ARROWS[0]);

MAIN_VISUAL_SLIDE_ARROWS[0].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev();
});
MAIN_VISUAL_SLIDE_ARROWS[1].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext();
});

//???????????? ??????... e.target --> 

const MAIN_SLIDE_NAV_HANDLER = e => {
    e.preventDefault();
    //console.log(e.target);
    // for (let i = 0; i < MAIN_SLIDE_NAV_LI.length; i++) {
    //     MAIN_SLIDE_NAV_LI[i].classList.remove('on')
    // }
    const TG = e.target.parentElement;
    //console.log(MAIN_SLIDE_NAV_LI, [...MAIN_SLIDE_NAV_LI]);
    const I = [...MAIN_SLIDE_NAV_LI].indexOf(TG);
    //console.log(I)
    //$(this).parent().index();
    //TG.classList.add('on');
    MAIN_VISUAL_SLIDE.slideTo(I + 1);
}


MAIN_SLIDE_NAV.addEventListener('click', MAIN_SLIDE_NAV_HANDLER);

const PF_LEFT_SLIDE_OPTION = {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    initialSlide: 1,
    navigation: {
        nextEl: "#mainPortfolio .arrows li:nth-child(2)",
        prevEl: "#mainPortfolio .arrows li:nth-child(1)",
    },
}
const PF_LEFT_SLIDE = new Swiper('.pf_left_slide', PF_LEFT_SLIDE_OPTION);

const PF_RIGHT_SLIDE_OPTION = {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    touchRatio: 0.2,
    initialSlide: 1,
    slideToClickedSlide: true, // ????????? ??????????????? ??????
    loopAdditionalSlides: 1, // ???????????? ?????? ??? ????????? ?????????????????? ?????? ??????????????? ???????????? ?????? ?????? ??????
}
const PF_RIGHT_SLIDE = new Swiper('.pf_right_slide', PF_RIGHT_SLIDE_OPTION);

PF_LEFT_SLIDE.controller.control = PF_RIGHT_SLIDE;
PF_RIGHT_SLIDE.controller.control = PF_LEFT_SLIDE;

//https://shadesign.tistory.com/entry/swiper-slide-%EC%B4%9D%EC%A0%95%EB%A6%AC%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%81%EC%9A%A9-%EC%98%B5%EC%85%98
//https://www.biew.co.kr/entry/Swiper-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-Swiper-2%EA%B0%9C-%EC%97%B0%EB%8F%99%EA%B3%BC-%EC%A0%9C%EC%96%B4Controller

const MS_CONTENT = document.querySelectorAll('#mainSolution .Ms_content .content');
const MS_NUM = document.querySelector('#mainSolution .num');

const MS_SLIDE_OPTION = {
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,
    slidesPerView: "auto",
    slideActiveClass: "on",
    on: {
        slideChangeTransitionStart: function () {
            console.log(this, this.realIndex, this.slides.length);
            let idx = this.realIndex;
            let total = MS_CONTENT.length;
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
        prevEl: "#mainSolution .arrows li:nth-child(1)",
    },

    pagination: {
        el: '#mainSolution .dots',
        clickable: true,
    },



}
const MS_SLIDE = new Swiper('.Ms_slide', MS_SLIDE_OPTION);

// ????????? ????????????????????? youtube ??????

let player;
const Y_OPTION = {
    //height: '100%',
    //width: '100%',
    videoId: 'raw3Nu0_mBQ',
}
function onYouTubeIframeAPIReady() {
    player = new YT.Player('main_movie01', Y_OPTION);
}

// pp.onClick = function () {
//     console.log('btn')
// }

// const Y_PLAY_BTN = document.querySelector('#pp');
// const Y_PAUSE_BTN = document.querySelector('#pp2');
// const Y_PLAY_VIDEO = () => {
//     player.playVideo();
// };
// const Y_PAUSE_VIDEO = () => {
//     player.pauseVideo();
// };

// Y_PLAY_BTN.addEventListener('click', Y_PLAY_VIDEO);
// Y_PAUSE_BTN.addEventListener('click', Y_PAUSE_VIDEO);


const V_BTN = document.querySelector('.video_btn');

let SW = true;
const V_SWITCH = e => {
    const tg = e.target;
    tg.classList.toggle('on');
    // SW ?  player.playVideo() : player.pauseVideo();
    if (SW) {
        player.playVideo();
    } else {
        player.pauseVideo();
    }

    SW = !SW;
}
V_BTN.addEventListener('click', V_SWITCH);

// let SW : ????????????, ??????????????? ??????????????? ????????? ?????? ????????? ??????????

// <div id='pp' onClick ={()=> console.log('btn')}/>;

// cosnt [on, setOn] = useState(true);
// <button onClick ={()=>setOn(!on)} className={on ? 'on' : ''}</button>

const MOVIE_UL = document.querySelector('#mainMovie .link')
const UL_CSS = `
display:flex;
gap:50px;
width:1200px;
margin:60px auto 0 auto;
text-align:center;
`

MOVIE_UL.style.cssText = UL_CSS;
//[...MOVIE_UL.children][0].classList.add('on');


const MOVIE_LINK = [
    { title: "IT Technology", desc: "IT ????????? ???????????? ????????? ????????? ?????????" },
    { title: "Green Technology", desc: "??????????????? ???????????? ????????????" }
]

// MOVIE_UL.innerHTML = `<li>
// <strong>${MOVIE_LINK[0].title}</strong>
// <span>${MOVIE_LINK[0].desc}</span>
// </li>`;

// for (let i = 0; i < MOVIE_LINK.length; i++) {
//     MOVIE_UL.innerHTML = `<li>
//     <strong>${MOVIE_LINK[0].title}</strong>
//     <span>${MOVIE_LINK[0].desc}</span>
//     </li>`;
// }

for (it of MOVIE_LINK) {
    MOVIE_UL.innerHTML += `<li>
        <strong>${it.title}</strong>
        <span>${it.desc}</span>
        </li>`;
}

const STRONG = document.querySelectorAll('#mainMovie .link strong');

for (it of STRONG) {
    it.style.display = 'block';
}


console.log([...MOVIE_UL.children][0]);
[...MOVIE_UL.children][0].classList.add('on');

const MOVIE_UL_TOGGLE = e => {
    //?????? li?????? class??? ??????, ????????? ?????? class??? ?????????
    //click ????????? ?????? ????????????
    let idx = [...MOVIE_UL.children].indexOf(e.target.parentElement)
    console.log(idx);

    for (it of [...MOVIE_UL.children]) {
        it.classList.remove('on')
    };
    [...MOVIE_UL.children][idx].classList.add('on');
}

MOVIE_UL.addEventListener('click', MOVIE_UL_TOGGLE)
// MOVIE_LINK.map(it => {
//     MOVIE_UL.innerHTML = `<li>
//     <strong>${MOVIE_LINK[0].title}</strong>
//     <span>${MOVIE_LINK[0].desc}</span>
//     </li>`;
// })


// footer .t_right li a click ?????? a ????????? ??????????????? ??????
// ?????? li????????? on??? ??????.
// ??? ??? ??????????????? class on ?????????.
const T_RIGHT = document.querySelectorAll('#footer .t_right li>a');
const T_RIGHT_BTN = document.querySelectorAll('#footer .t_right button');

console.log(T_RIGHT, T_RIGHT_BTN);

T_RIGHT_BTN.forEach(it => {
    it.addEventListener('click', () => {
        it.closest('li').classList.remove('on');
        // it.parentElement.parentElement.classList.remove('on');
    })
})

const R_TAB = (it, idx) => {
    // T_RIGHT.forEach(it => it.classList.remove('on'));
    // it.classList.add('on');
    // const sbr = [...T_RIGHT].filter(el => el !== it);
    // console.log(sbr)

    for (el of T_RIGHT) {
        if (el !== it) {
            el.parentElement.classList.remove('on')
        }
    }
    //sbr.forEach(it => it.parentElement.classList.remove('on'));
    it.parentElement.classList.toggle('on');

}

T_RIGHT.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        R_TAB(it, idx)
    });
})

// const [on, setOn] = useSate('')
// {
//     <li className={on}></li>
//     <a onClick = {()=>setOn(!on)}></a>
// }


const TO_TOP = document.querySelector('#topTop');
const BODY = document.querySelector('html, body');

// ???????????? 500?????? ????????? ????????? ??? ????????? ????????? ????????? ?????????

//console.log(window);
const TOGGLE_TOP_BTN = () => {
    //console.log(window.scrollY);
    let SCT = window.scrollY;

    // SCT>500
    //  ? TO_TOP.classList.add('on')
    //  : TO_TOP.classList.remove('on')

    if (SCT > 500) {
        TO_TOP.classList.add('on')
    } else {
        TO_TOP.classList.remove('on')
    }
}

window.addEventListener('scroll', TOGGLE_TOP_BTN);

const WINDOW_TOP = () => {
    // $('html, body).animate({scrollTo:0}, 1000);
    // BODY.scrollTo({ top: 0, behavior: "smooth" });
    gsap.to(BODY, { duration: 0.5, scrollTo: 0 })
};

TO_TOP.addEventListener('click', WINDOW_TOP);
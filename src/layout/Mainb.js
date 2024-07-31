import React from 'react';
import '../css/mainb.css';
import Slider from '../component/Mainbanner'



function Mainb() {

    return (
        <section id="main_slide_je">
        <div className="swiper mySwiper je_Mainswiper">
            <div className="swiper-wrapper">
                <Slider></Slider>
            </div>
            {/* 스와이퍼 페이지네이션 */}
            <div className="swiper-pagination"></div>
        </div>
        </section>
    )
}

export default Mainb

import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import '../css/mainb.css';



function Mainb() {
    useEffect(() => {
        const swiperje = new SwiperCore("#je_Mainswiper", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
        });
    }, []);
    return (
        <section id="main_slide_je">
        <div className="swiper mySwiper je_Mainswiper" id="je_Mainswiper">
            <div className="swiper-wrapper">
                {/* 메인배너 2번 영상 */}
                <div className="swiper-slide d-flex align-items-center justify-content-between">
                    <div className="mainbannerLeft">
                        <div className="mb-4">
                            <h1 className="mainbannerText">모두가 행복한 공간으로,</h1>
                            <h1 className="mainbannerText">“와요(WAYO)”!</h1>
                        </div>
                        <div className="mb-5">
                            <h6 className="mainbannerText_kr">“와요(WAYO)” 공식 유튜브 리뉴얼!</h6>
                        </div>
                        <div><a href="javascript:void(0)" className="mainvideo">영상 더보기</a></div>
                    </div>
                    <div>
                        <iframe width="1242" height="700" className="mainbanner_Video"
                            src="https://www.youtube.com/embed/RWRm1vHZN8A?si=KUt8OAz0PFLwfhsb"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                </div>
                {/* 메인배너1번 유기견 홍보 */}
                <div className="swiper-slide d-flex align-items-center justify-content-between">
                    <div className="mainbannerLeft">
                        <div className="mb-4">
                            <h1 className="mainbannerText_en">Would you be </h1>
                            <h1 className="mainbannerText_en">My Family?</h1>
                        </div>
                        <div className="mb-5">
                            <h6 className="mainbannerText_kr">연간 유기동물 수 약 13만 마리,</h6>
                            <h6 className="mainbannerText_kr">버려진 생명들은 여전히 가족을 기다리고 있습니다.</h6>
                        </div>
                        <div><a href="javascript:void(0)" className="mainActing">유기동물 보호 활동</a></div>
                    </div>
                    <div className="main_back"></div>
                </div>
                {/* 메인배너 3번 콜라보 */}
                <div className="swiper-slide d-flex align-items-center justify-content-between">
                    <div className="mainbannerLeft">
                        <div className="mb-4">
                            <img src="/img/main_collabo_txt.png" alt="콜라보로고" />
                        </div>
                        <div className="mb-5">
                            <h1 className="mainbannerText mb-3">콜라보 5월 한정 이벤트</h1>
                            <h6 className="mainbanner_text">와요 10시간 이상 이용자들에게</h6>
                            <h6 className="mainbanner_text">15ml 스프레이 일일 선착순 100명 증정(~5/15)</h6>
                            <h6 className="mainbanner_text">이지세이프 클립+워킹세이프 스프레이 120ml 기간 한정 15%할인</h6>
                        </div>
                    </div>
                    <div>
                        <img src="/img/main_collabo.jpg" alt="콜라보상품" className="maincollabo" />
                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
        </section>
    )
}

export default Mainb

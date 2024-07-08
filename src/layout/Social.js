import React from 'react';
import SocialSwiper from '../component/socialSwiper'
import SocialLi from '../component/socialLi'

function Social() {

    return (
        <section id="social_program" className="margin">
        <div className="container position-relative">
            <h2>사회 공헌 프로그램</h2>
            <div className="row">
                <div className="col d-flex p-0 sp_je">
                    {/* <!-- Swiper --> */}
                    <div className="swiper mySwiper" id="jeSwiper">
                        <div className="swiper-wrapper">
                        <SocialSwiper swipertext="유기견 봉사활동" src="/img/sp_volunteer.jpg" alt="유기견봉사활동"/>
                        <SocialSwiper swipertext="배우 김효진x와요 특별한 인터뷰" src="/img/sp_interview.jpg" alt="특별인터뷰"/>
                        <SocialSwiper swipertext="유기동물 보호소 산책봉사" src="/img/sp_walkingvolunteer.jpg" alt="보호소 산책봉사"/>
                    </div>
                        {/* <!-- 스와이퍼 이동버튼 --> */}
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        
                    </div>

                </div>
                {/* <!-- 프로그램 일정 --> */}
                <div className="col ps-0 sp_je" >
                    <div className="d-flex justify-content-between align-items-center px-3 pe-3 box">
                        <h5 className="pt-1">프로그램 일정</h5>
                        <span className="pt-1"><a href="javascript:void(0)"><h6>더보기</h6></a></span>
                    </div>
                   
                        <ul className="spNews px-0 pb-0">
                            <SocialLi atext01="2024.03.12" atext02="국제 강아지의 날 봉사활동자 모집" />  
                            <SocialLi atext01="2024.04.06" atext02="서울시 유기견 보호소 봉사활동" />
                            <SocialLi atext01="2024.04.28" atext02="반려동물 인식 교육 프로그램 안내" />
                            <SocialLi atext01="2024.04.04" atext02="동물 용품 기부에 관한 공지사항" />
                        </ul>
                </div>
            </div>
        </div>
    </section>   
    )
}

export default Social

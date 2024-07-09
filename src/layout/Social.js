import React from 'react';
import socialDB from '../data/socialDB.json'
import SocialSW from '../component/socialswip'
import '../css/social.css'

function Social() {

    return (
    <section id="social_program" className="margin">
            <div className="container position-relative">
                <h2>사회 공헌 프로그램</h2>
                <div className="row">
                    <div className="col d-flex p-0 sp_je">
                        {/* <!-- Swiper --> */}
                        <div className="swiper mySwiper" id="jeSwiper">
                            <div class="swiper-wrapper">
                                <SocialSW></SocialSW>
                            </div>
                        </div>
                            {/* <!-- 스와이퍼 이동버튼 --> */}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                            
                    </div>                    
                    {/* <!-- 프로그램 일정 --> */}
                    <div className="col ps-0 sp_je" >
                        <div className="d-flex justify-content-between align-items-center px-3 pe-3 box">
                            <h5 className="pt-1">프로그램 일정</h5>
                            <span className="pt-1"><a href="javascript:void(0)"><h6>더보기</h6></a></span>
                        </div>
                    
                        <ul className="spNews px-0 pb-0">
                            {
                                socialDB["schedule"].map((e, i)=>{
                                    return(
                                        <li>
                                            <a href={e.href} className={e.cls[0]}>
                                                <span className={e.cls[1]}>{e.date}</span>
                                                <span className={e.cls[2]}>{e.event}</span>
                                                <span className={e.cls[3]}></span>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
    </section>   
    )
}

export default Social

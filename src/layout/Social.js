import React from 'react';
import socialDB from '../data/socialDB.json'
import Socialswiper from '../component/Socialswiper'
import '../css/social.css'
import {Socialdiv, Socialul, Sociala, Socialspan01,Socialspan02,Socialspan03} from '../commonui/socialui'

function Social() {

    return (
    <section id="social_program" className="margin">
            <div className="container">
                <h2>사회 공헌 프로그램</h2>
                <div className="row">
                        {/* <!-- Swiper --> */}
                        <Socialswiper></Socialswiper>                  
                    {/* <!-- 프로그램 일정 --> */}
                    <div className="col-md-6 ps-3" >
                        <Socialdiv>
                            <h5 className="pt-1">프로그램 일정</h5>
                            <span className="pt-1"><a href="javascript:void(0)"><h6>더보기</h6></a></span>
                        </Socialdiv>
                    
                        <Socialul>
                            {
                                socialDB["schedule"].map((e, i)=>{
                                    return(
                                        <li>
                                            <Sociala href="javascript:void(0)">
                                                <Socialspan01>{e.date}</Socialspan01>
                                                <Socialspan02>{e.event}</Socialspan02>
                                                <Socialspan03></Socialspan03>
                                            </Sociala>
                                        
                                        </li>
                                    )
                                })
                            }
                        </Socialul>
                    </div>
                </div>
            </div>
    </section>   
    )
}

export default Social

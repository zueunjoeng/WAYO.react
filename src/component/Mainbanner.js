import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'; 
import '../css/mainb.css';
import mainbDB from '../data/mainbDB.json'
import {Mswiper, Ptext02,Ptext03 } from '../commonui/mainbui'
import { Link } from 'react-router-dom';

const BannerSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination]}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }}
            pagination={{ clickable: true }} 
        >
            {mainbDB["banner01"].map((v, i) => {
                const textArray = v.text.split('|');
                const subtextArray = v.subtext.split('|');
    
                return (
                    <SwiperSlide key={`banner01${i}`}>
                        <div className='d-flex align-items-center justify-content-around swiperdiv'>
                            <Mswiper>
                                <div className="mb-4">
                                    {i === 2 && subtextArray.length > 0 ? ( <img src="/img/main_collabo_txt.png" alt="콜라보로고" className='collabologo mb-3'/>) : null}
                                    <Ptext02>{textArray[0]}</Ptext02>
                                    <Ptext02>{textArray[1]}</Ptext02>
                                </div>
                                <div className="mb-5 swipsubtext">
                                    <Ptext03>{subtextArray[0]}</Ptext03>

                                   {subtextArray.length === 2 ? (
                                    <Ptext03>{subtextArray[1]}</Ptext03>) : subtextArray.length > 1 && subtextArray[2] 
                                    ? (<><Ptext03>{subtextArray[1]}</Ptext03> <Ptext03>{subtextArray[2]}</Ptext03></>) : null}
   
                                </div>
                             {v.btn ? (
                                <div>
                                    <Link
                                    to={"javascript:void(0)"}
                                    className={`mainActing ${ i === 2 ? "hide-on-mobile" : ""}`}
                                    >
                                    {v.btn}
                                    </Link>
                                </div>
                                ) : null}
                            </Mswiper>
                            {i === 0 && textArray[0] ? (
                                        <div className="main_back"></div>
                                    ) : i === 1 && textArray.length > 1 ? (
                                        <div>
                                            <iframe
                                                width="1242"
                                                height="700"
                                                className="mainbanner_Video"
                                                src="https://www.youtube.com/embed/RWRm1vHZN8A?si=KUt8OAz0PFLwfhsb"
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : i === 2 && subtextArray.length > 0 ? (
                                        <div className="maincollabo"> </div>
                                    ) : null}
                        </div>
                    </SwiperSlide>
                );
            })}
          
        </Swiper>
    );
}

export default BannerSlider;
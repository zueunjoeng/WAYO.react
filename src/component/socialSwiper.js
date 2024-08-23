import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../css/social.css'; 
import socialDB from '../data/socialDB.json'
import {Swieprdiv01,Swieprdiv02} from '../commonui/socialui'


const Banner = () => {
    return (

            <Swiper className='jeSwiper col-md-6 d-flex p-0 position-relative'
                //spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination, Navigation]}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                
                {
                socialDB["socialswiper"].map((v, i) => (
                    
                    <SwiperSlide key={i} className='swiperimg'>
                                <Swieprdiv01></Swieprdiv01>
                                <Swieprdiv02>{v.text}</Swieprdiv02>
                                <img src={v.src} /> 
                        </SwiperSlide>
                    ))
                }
            <div className='swiperbutton'>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>     
            </Swiper>

                               

    );
}

export default Banner;

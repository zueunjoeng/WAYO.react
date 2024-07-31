import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'; 
import socialDB from '../data/socialDB.json'
import {Swieprdiv01,Swieprdiv02} from '../commonui/socialui'


const Banner = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
        >
            
            {
              socialDB["socialswiper"].map((v, i) => (
                
                  <SwiperSlide key={i}>
                            <Swieprdiv01></Swieprdiv01>
                            <Swieprdiv02>{v.text}</Swieprdiv02>
                            <img src={v.src} /> 
                    </SwiperSlide>
                ))
            }
            
        </Swiper>
    );
}

export default Banner;

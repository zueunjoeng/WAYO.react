import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'; 
import socialDB from '../data/socialDB.json'


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
        >
            {
              socialDB["swiper"].map((v, i) => (
                
                  <SwiperSlide key={i} className={v.cls[0]}>
                            <div className={v.cls[1]}></div>
                            <div className={v.cls[2]}>{v.text}</div>
                            <img src={v.src} /> 
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default Banner;

import React from 'react'

function SocialSwiper(props) {
    return (
    <div className="swiper-slide">
        <div className="slide-overlay"></div>
        <div className="sp_text">{props.swipertext}</div>
        <img src={props.src} alt={props.alt} />
    </div>

    )
}

export default SocialSwiper

import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Downloads.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper';
import SwiperCore from "swiper"
import slider1 from "../../assets/d1.webp"
import slider2 from "../../assets/d3.webp"
import slider3 from "../../assets/d2.webp"

const Downloads = () => {
  const { t } = useTranslation()
  SwiperCore.use([Autoplay, EffectFade])
  return (
    <div className='Downloads'>
      <div className='banner'>
        <Swiper
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log('slide change')}
      effect="fade"
        autoplay={{ "disableOnInteraction": false, "delay": 3000 }}
        loop={true}
      speed={1500}
      preventClicks={true}
      slidesPerView={1}
      direction={"horizontal"}
      spaceBetween={10}
      centeredSlides={true}
      >
        <SwiperSlide><img src={slider2} className="slide" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} className="slide" alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider1} className="slide" alt="" /></SwiperSlide>
        </Swiper>
      <div className='download-button-wrapper'>
        <p>{t("download-client")}</p>
        <FontAwesomeIcon icon={faCloudArrowDown} className="icon"/>
        </div>
      </div>
      
        <div className='requirements'>

        </div>
    </div>
  )
}

export default Downloads
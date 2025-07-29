import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './Slider1.css'

function Slider() {

    return (

        <>

            <Swiper

                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                slidesPerView={1}
            >

                <SwiperSlide>
                    
                    <img 
                    
                        src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1753814555/2025_Placements_1600x66602-01-mi_hr7tmy.png" 
                        alt="Slider image 1" 
                        
                    />

                </SwiperSlide>
                <SwiperSlide>
                    
                    <img 
                    
                        src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1753814923/WhatsApp_Image_2025-05-29_at_12_cqhzuj.png" 
                        alt="Slider image 2" 
                        
                    />

                </SwiperSlide>
                <SwiperSlide>
                    
                    <img 
                    
                        src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1753815065/1_rnogcy.png" 
                        alt="Slider image 2" 
                        
                    />

                </SwiperSlide>
                <SwiperSlide>
                    
                    <img 
                    
                        src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1753815246/3_wernjx.png" 
                        alt="Slider image 2" 
                        
                    />

                </SwiperSlide>
                <SwiperSlide>
                    
                    <img 
                    
                        src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1753815301/1-3_oz6cvv.png" 
                        alt="Slider image 2" 
                        
                    />

                </SwiperSlide>

            </Swiper>

        </>

    )

}

export default Slider
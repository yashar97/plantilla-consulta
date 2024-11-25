import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const TestimonialCarrusel = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <div className="testimonial-quote-image">
                                <img src="images/icon-testimonial-quote.svg" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <p>"El trato fue excelente, me hicieron sentir muy cómodo en todo momento. El resultado final superó todas mis expectativas. ¡Estoy muy feliz!"</p>
                            </div>
                        </div>
                        <div className="testimonial-body">
                            <div className="author-image">
                                <figure className="image-anime">
                                    <img src="images/author-1.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="author-content">
                                <h3>roberto aragón</h3>
                                <p>ingeniero de software</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <div className="testimonial-quote-image">
                                <img src="images/icon-testimonial-quote.svg" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <p>"Estoy completamente satisfecho con el servicio. El equipo fue muy profesional y mi sonrisa nunca había lucido tan bien. ¡Gracias por todo!"</p>
                            </div>
                        </div>
                        <div className="testimonial-body">
                            <div className="author-image">
                                <figure className="image-anime">
                                    <img src="images/author-2.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="author-content">
                                <h3>cristhian mendez</h3>
                                <p>Profesor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="testimonial-item">
                        <div className="testimonial-header">
                            <div className="testimonial-quote-image">
                                <img src="images/icon-testimonial-quote.svg" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <p>"El equipo dental fue increíble. Me explicaron todo el proceso y me hicieron sentir muy tranquilo. El resultado fue mucho mejor de lo esperado."</p>
                            </div>
                        </div>
                        <div className="testimonial-body">
                            <div className="author-image">
                                <figure className="image-anime">
                                    <img src="images/author-3.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="author-content">
                                <h3>tomas romero</h3>
                                <p>diseñador</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default TestimonialCarrusel
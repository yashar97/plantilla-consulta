import { useEffect } from "react"
import Swiper from "swiper"
import 'swiper/swiper-bundle.css';


const CompanyCarrusel = () => {

    useEffect(() => {

        const swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        })

        return () => swiper.destroy();

    }, []);

    return (
        <div className="col-lg-8">
            {/* company Carousel Start */}
            <div className="company-carousel">
                <div className="swiper companies_logo_slider">
                    <div className="swiper-wrapper">
                        {/* company Logo Start */}
                        <div className="swiper-slide">
                            <div className="company-logo">
                                <img src="images/client-logo-1.svg" alt="" />
                            </div>
                        </div>
                        {/* company Logo End */}
                        {/* company Logo Start */}
                        <div className="swiper-slide">
                            <div className="company-logo">
                                <img src="images/client-logo-2.svg" alt="" />
                            </div>
                        </div>
                        {/* company Logo End */}
                        {/* company Logo Start */}
                        <div className="swiper-slide">
                            <div className="company-logo">
                                <img src="images/client-logo-3.svg" alt="" />
                            </div>
                        </div>
                        {/* company Logo End */}
                        {/* company Logo Start */}
                        <div className="swiper-slide">
                            <div className="company-logo">
                                <img src="images/client-logo-1.svg" alt="" />
                            </div>
                        </div>
                        {/* company Logo End */}
                        {/* company Logo Start */}
                        <div className="swiper-slide">
                            <div className="company-logo">
                                <img src="images/client-logo-2.svg" alt="" />
                            </div>
                        </div>
                        {/* company Logo End */}
                        {/* company Logo Start */}
                        <div className="swiper-slide">
                            <div className="company-logo">
                                <img src="images/client-logo-3.svg" alt="" />
                            </div>
                        </div>
                        {/* company Logo End */}
                    </div>
                </div>
            </div>
            {/* company Carousel End */}
        </div>
    )
}

export default CompanyCarrusel
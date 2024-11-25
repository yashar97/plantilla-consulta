import { Link } from "react-router-dom"
import TestimonialCarrusel from "../components/TestimonialCarrusel"

const Inicio = () => {
    return (
        <div>
            <div className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* Hero Content Start */}
                            <div className="hero-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h1 className="text-anime-style-2" data-cursor="-opaque">Experiencia <span>Dental Excelencia</span> con un toque gentil </h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.25s">Nuestra clínica dental combina tecnología de vanguardia con un trato personalizado para garantizar sonrisas saludables y duraderas que te harán feliz.</p>
                                </div>
                                {/* Section Title End */}
                                {/* Hero Content Body Start */}
                                <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                                    <Link to='/cita' className="btn-default">Separa tu cita ahora</Link>
                                </div>
                                {/* Hero Content Body End */}
                            </div>
                            {/* Hero Content End */}
                        </div>
                        <div className="col-lg-6">
                            {/* Hero Image Start */}
                            <div className="hero-image">
                                {/* Hero Img Start */}
                                <div className="hero-img">
                                    <figure>
                                        <img src="images/hero-img.png" alt="" />
                                    </figure>
                                </div>
                                {/* Hero Img End */}
                                {/* Hero Image Tag Start */}
                                <div className="export-dantist-box">
                                    <div className="icon-box">
                                        <figure className="image-anime">
                                            <img src="images/dantist-doctor-img.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="export-dantist-content">
                                        <h3>dr. Clara Sanchez</h3>
                                        <p>Dentista</p>
                                    </div>
                                </div>
                                {/* Hero Image Tag End */}
                                {/* Hero Icon List Start */}
                                <div className="hero-icon-list">
                                    <div className="hero-icon-box-1">
                                        <img src="images/icon-hero-theeth-1.svg" alt="" />
                                    </div>
                                    <div className="hero-icon-box-2">
                                        <img src="images/icon-hero-theeth-2.svg" alt="" />
                                    </div>
                                    <div className="hero-icon-box-3">
                                        <img src="images/icon-hero-theeth-3.svg" alt="" />
                                    </div>
                                </div>
                                {/* Hero Icon List End */}
                                {/* Icon Start Image Start */}
                                <div className="icon-star-image">
                                    <img src="images/icon-star.svg" alt="" />
                                </div>
                                {/* Icon Start Image End */}
                            </div>
                            {/* Hero Image End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section End */}
            {/* Call To Action Start */}
            <div className="cta-box">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* Cta Box Item Start */}
                            <div className="cta-box-item wow fadeInUp">
                                <div className="icon-box">
                                    <img src="images/icon-cta-phone.svg" alt="" />
                                </div>
                                <div className="cta-box-content">
                                    <h3>¿Urgencia dental?</h3>
                                    <p>Llámanos: 987 828 745</p>
                                </div>
                            </div>
                        </div>
                        {/* Cta Box Item End */}
                        {/* Cta Box Item Start */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="cta-box-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="icon-box">
                                    <img src="images/icon-cta-time.svg" alt="" />
                                </div>
                                <div className="cta-box-content">
                                    <h3>Horarios de atención</h3>
                                    <p>Lunes a Sábado / 9am - 9pm</p>
                                </div>
                            </div>
                        </div>
                        {/* Cta Box Item End */}
                        <div className="col-lg-4 col-md-12 col-12">
                            {/* Cta Box Btn Start */}
                            <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.5s">
                                <a href="cita.html" className="btn-default btn-highlighted">Separa tu cita ahora</a>
                            </div>
                            {/* Cta Box Btn End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Call To Action End */}
            {/* Our Serviceds Section Start */}
            <div className="our-services">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Nuestros servicios</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Servicios de Alta</span> Calidad para Ti.</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">Estamos comprometidos con las iniciativas ecológicas.</p>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            {/* Service Item Start */}
                            <div className="service-item wow fadeInUp">
                                <div className="icon-box">
                                    <div className="img">
                                        <img src="images/icon-services-1.svg" alt="" />
                                    </div>
                                </div>
                                <div className="service-body">
                                    <h3>Cuidado general</h3>
                                    <p>Salud bucal integral. Sonrisas saludables siempre a tu alcance.</p>
                                </div>
                                <div className="read-more-btn">
                                    <a href="#">Leer más</a>
                                </div>
                            </div>
                            {/* Service Item End */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Service Item Start */}
                            <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
                                <div className="icon-box">
                                    <div className="img">
                                        <img src="images/icon-services-2.svg" alt="" />
                                    </div>
                                </div>
                                <div className="service-body">
                                    <h3>implantes dentales</h3>
                                    <p>Belleza y función en un solo tratamiento. Implantes dentales.</p>
                                </div>
                                <div className="read-more-btn">
                                    <a href="#">Leer más</a>
                                </div>
                            </div>
                            {/* Service Item End */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Service Item Start */}
                            <div className="service-item wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon-box">
                                    <div className="img">
                                        <img src="images/icon-services-3.svg" alt="" />
                                    </div>
                                </div>
                                <div className="service-body">
                                    <h3>estética y cosmética</h3>
                                    <p>Belleza y salud bucal. Odontología estética personalizada.</p>
                                </div>
                                <div className="read-more-btn">
                                    <a href="#">Leer más</a>
                                </div>
                            </div>
                            {/* Service Item End */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Service Item Start */}
                            <div className="service-item wow fadeInUp" data-wow-delay="0.75s">
                                <div className="icon-box">
                                    <div className="img">
                                        <img src="images/icon-services-4.svg" alt="" />
                                    </div>
                                </div>
                                <div className="service-body">
                                    <h3>dientes blancos</h3>
                                    <p>Blancura natural. Sonríe con confianza siempre sin preocupaciones.</p>
                                </div>
                                <div className="read-more-btn">
                                    <a href="#">Leer más</a>
                                </div>
                            </div>
                            {/* Service Item End */}
                        </div>
                        <div className="col-lg-12">
                            {/* Service Box Footer Start */}
                            <div className="services-box-footer wow fadeInUp" data-wow-delay="1s">
                                <a href="servicios.html" className="btn-default">ver todos los servicios</a>
                            </div>
                            {/* Service Box Footer End */}
                        </div>
                    </div>
                </div>
                {/* Icon Start Image Start */}
                <div className="icon-star-image">
                    <img src="images/icon-star.svg" alt="" />
                </div>
                {/* Icon Start Image End */}
            </div>
            {/* Our Serviceds Section End */}
            <br /><br /><br /><br />
            {/* Why Choose Us Section Start */}
            <div className="why-choose-us">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">¿por qué escogernos?</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Diagnóstico de</span> enfermedades dentales</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">Estamos comprometidos con las iniciativas ecológicas.</p>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 order-1">
                            {/* Why Choose Box Start */}
                            <div className="why-choose-box-1">
                                {/* Why Choose Item Start */}
                                <div className="why-choose-item wow fadeInUp">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src="images/icon-why-us-1.svg" alt="" />
                                    </div>
                                    {/* Icon Box End */}
                                    {/* Why Choose Content Start */}
                                    <div className="why-choose-content">
                                        <h3>Doctores experimentados</h3>
                                        <p>Ofrecemos atención dental amable con doctores expertos.</p>
                                    </div>
                                    {/* Why Choose Content End */}
                                </div>
                                {/* Why Choose Item End */}
                                {/* Why Choose Item Start */}
                                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src="images/icon-why-us-2.svg" alt="" />
                                    </div>
                                    {/* Icon Box End */}
                                    {/* Why Choose Content Start */}
                                    <div className="why-choose-content">
                                        <h3>atención personalizada</h3>
                                        <p>Ofrecemos una atención dental totalmente personalizada para ti.</p>
                                    </div>
                                    {/* Why Choose Content End */}
                                </div>
                                {/* Why Choose Item End */}
                                {/* Why Choose Item Start */}
                                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src="images/icon-why-us-3.svg" alt="" />
                                    </div>
                                    {/* Icon Box End */}
                                    {/* Why Choose Content Start */}
                                    <div className="why-choose-content">
                                        <h3>opciones de pago flexibles</h3>
                                        <p>Contamos con opciones de pago flexibles para tu comodidad.</p>
                                    </div>
                                    {/* Why Choose Content End */}
                                </div>
                                {/* Why Choose Item End */}
                            </div>
                            {/* Why Choose Box Start */}
                        </div>
                        <div className="col-lg-4 order-lg-1 order-md-2 order-1">
                            {/* Why Choose Image Start */}
                            <div className="why-choose-image wow fadeInUp">
                                <figure>
                                    <img src="images/why-choose-us-img.png" alt="" />
                                </figure>
                            </div>
                            {/* Why Choose Image End */}
                        </div>
                        <div className="col-lg-4 col-md-6 order-lg-2 order-md-1 order-2">
                            {/* Why Choose Box Start */}
                            <div className="why-choose-box-2">
                                {/* Why Choose Item Start */}
                                <div className="why-choose-item wow fadeInUp">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src="images/icon-why-us-4.svg" alt="" />
                                    </div>
                                    {/* Icon Box End */}
                                    {/* Why Choose Content Start */}
                                    <div className="why-choose-content">
                                        <h3>servicios de emergencia</h3>
                                        <p>Disponemos de servicios de emergencia dental cuando los necesites.</p>
                                    </div>
                                    {/* Why Choose Content End */}
                                </div>
                                {/* Why Choose Item End */}
                                {/* Why Choose Item Start */}
                                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src="images/icon-why-us-5.svg" alt="" />
                                    </div>
                                    {/* Icon Box End */}
                                    {/* Why Choose Content Start */}
                                    <div className="why-choose-content">
                                        <h3>comentarios de los pacientes</h3>
                                        <p>Lee los comentarios de nuestros pacientes satisfechos.</p>
                                    </div>
                                    {/* Why Choose Content End */}
                                </div>
                                {/* Why Choose Item End */}
                                {/* Why Choose Item Start */}
                                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                                    {/* Icon Box Start */}
                                    <div className="icon-box">
                                        <img src="images/icon-why-us-6.svg" alt="" />
                                    </div>
                                    {/* Icon Box End */}
                                    {/* Why Choose Content Start */}
                                    <div className="why-choose-content">
                                        <h3>última tecnología</h3>
                                        <p>Contamos con la última tecnología para un tratamiento eficiente.</p>
                                    </div>
                                    {/* Why Choose Content End */}
                                </div>
                                {/* Why Choose Item End */}
                            </div>
                            {/* Why Choose Box Start */}
                        </div>
                    </div>
                </div>
                {/* Icon Start Image Start */}
                <div className="icon-star-image">
                    <img src="images/icon-star.svg" alt="" />
                </div>
                {/* Icon Start Image End */}
            </div>
            {/* Why Choose Us Section End */}
            {/* Our Team Start */}
            <div className="our-team">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">nuestro equipo</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Nuestro amigable</span> Equipo de Dentistas</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">Estamos comprometidos con las iniciativas ecológicas.</p>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            {/* Team Member Item Start */}
                            <div className="team-member-item wow fadeInUp">
                                {/* Team Image Start */}
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="images/team-1.jpg" alt="" />
                                    </figure>
                                    {/* Team Social Icon Start */}
                                    <div className="team-social-icon">
                                        <ul>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-youtube" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter" /></a></li>
                                        </ul>
                                    </div>
                                    {/* Team Social Icon End */}
                                </div>
                                {/* Team Image End */}
                                {/* Team Content Start */}
                                <div className="team-content">
                                    <h3>dr.johan Gómez</h3>
                                    <p>líder dentista</p>
                                </div>
                                {/* Team Content End */}
                            </div>
                            {/* Team Member Item End */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Team Member Item Start */}
                            <div className="team-member-item wow fadeInUp" data-wow-delay="0.25s">
                                {/* Team Image Start */}
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="images/team-2.jpg" alt="" />
                                    </figure>
                                    {/* Team Social Icon Start */}
                                    <div className="team-social-icon">
                                        <ul>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-youtube" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter" /></a></li>
                                        </ul>
                                    </div>
                                    {/* Team Social Icon End */}
                                </div>
                                {/* Team Image End */}
                                {/* Team Content Start */}
                                <div className="team-content">
                                    <h3>dr.miguel vásquez</h3>
                                    <p>senior dentista</p>
                                </div>
                                {/* Team Content End */}
                            </div>
                            {/* Team Member Item End */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Team Member Item Start */}
                            <div className="team-member-item wow fadeInUp" data-wow-delay="0.5s">
                                {/* Team Image Start */}
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="images/team-3.jpg" alt="" />
                                    </figure>
                                    {/* Team Social Icon Start */}
                                    <div className="team-social-icon">
                                        <ul>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-youtube" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter" /></a></li>
                                        </ul>
                                    </div>
                                    {/* Team Social Icon End */}
                                </div>
                                {/* Team Image End */}
                                {/* Team Content Start */}
                                <div className="team-content">
                                    <h3>dr. alison valera</h3>
                                    <p>ortodoncista</p>
                                </div>
                                {/* Team Content End */}
                            </div>
                            {/* Team Member Item End */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Team Member Item Start */}
                            <div className="team-member-item wow fadeInUp" data-wow-delay="0.75s">
                                {/* Team Image Start */}
                                <div className="team-image">
                                    <figure className="image-anime">
                                        <img src="images/team-4.jpg" alt="" />
                                    </figure>
                                    {/* Team Social Icon Start */}
                                    <div className="team-social-icon">
                                        <ul>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-youtube" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram" /></a></li>
                                            <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter" /></a></li>
                                        </ul>
                                    </div>
                                    {/* Team Social Icon End */}
                                </div>
                                {/* Team Image End */}
                                {/* Team Content Start */}
                                <div className="team-content">
                                    <h3>dr.rafael aldave</h3>
                                    <p>periodontista</p>
                                </div>
                                {/* Team Content End */}
                            </div>
                            {/* Team Member Item End */}
                        </div>
                    </div>
                </div>
                {/* Icon Start Image Start */}
                <div className="icon-star-image">
                    <img src="images/icon-star.svg" alt="" />
                </div>
                {/* Icon Start Image End */}
            </div>
            {/* Our Team End */}
            {/* Our Testiminial Start */}
            <div className="our-testimonials">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">testimonial</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Que dicen</span> Nuestros Clientes</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.25s">Estamos comprometidos con las iniciativas ecológicas.</p>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            {/* Testiminial Image Start */}
                            <div className="testimonial-image">
                                <div className="testimonial-img">
                                    <figure className="image-anime">
                                        <img src="images/testimonials-img.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* Terstimonial Rating Box Start */}
                                <div className="testimonial-rating-box">
                                    {/* Counter Item Start */}
                                    <div className="rating-counter-item">
                                        <div className="rating-counter-number">
                                            <h3><span className="counter">4.7</span>/5</h3>
                                        </div>
                                        <div className="rating-counter-content">
                                            <p>Esta es la puntuación luego de visitar nuestros locales</p>
                                        </div>
                                    </div>
                                    {/* Counter Item End */}
                                    {/* Service Rating Start */}
                                    <div className="service-rating">
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-regular fa-star" />
                                            </li>
                                            <li>por un excelente servicio</li>
                                        </ul>
                                    </div>
                                    {/* Service Rating End */}
                                </div>
                                {/* Terstimonial Rating Box End */}
                            </div>
                            {/* Testiminial Image End */}
                        </div>
                        <div className="col-lg-7">
                            {/* Testimonial Slider Start */}
                            <div className="testimonial-slider">
                                <div className="swiper">
                                    <div className="swiper-wrapper" data-cursor-text="Drag">
                                        <TestimonialCarrusel />
                                    </div>
                                    <div className="testimonial-btn">
                                        <div className="testimonial-button-prev" />
                                        <div className="testimonial-button-next" />
                                    </div>
                                </div>
                            </div>
                            {/* Testimonial Slider End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Testiminial End */}
            {/* Footer Start */}
        </div>

    )
}

export default Inicio
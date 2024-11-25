
const Cita = () => {
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-2" data-cursor="-opaque"><span>Reserva</span> tu cita</h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="./">home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page"> Reserva tu cita</li>
                                    </ol>
                                </nav>
                            </div>
                            {/* Page Header Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* Page Appointment Start */}
            <div className="page-book-appointment">
                <div className="container">
                    <div className="book-appointment-form">
                        <div className="row section-row">
                            <div className="col-lg-12">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">reserva</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque"><span>A un paso de</span> tu sonrisa soñada</h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="appointment-form wow fadeInUp">
                                    {/* Form Start */}
                                    <form id="appointmentForm" action="#" method="POST" data-toggle="validator">
                                        <div className="row">
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Ingresa Nombre" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="email" name="email" className="form-control" id="email" placeholder="Ingresa Email" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="phone" className="form-control" id="phone" placeholder="Teléfono" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <select name="services" className="form-control form-select" id="services" required>
                                                    <option value disabled selected>seleccione servicio</option>
                                                    <option value="general_dental_care">cuidado general</option>
                                                    <option value="dental_implants">implantes dentales</option>
                                                    <option value="cosmetic_dentistry">estética y cosmética</option>
                                                    <option value="teeth_whitening">dientes blancos</option>
                                                    <option value="pediatric_dental_care">dental pediátrica</option>
                                                    <option value="advanced_oral_care">cuidado avanzado</option>
                                                    <option value="comfort_dentistry">odontología confort</option>
                                                    <option value="smile_renewal">renovación de sonrisa</option>
                                                </select>
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-12 mb-5">
                                                <input type="date" name="date" className="form-control" id="date" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn-default">Reserva tu cita</button>
                                                <div id="msgSubmit" className="h3 hidden" />
                                            </div>
                                        </div>
                                    </form>
                                    {/* Form End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Appointment End */}
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
                                    <figure className="reveal image-anime">
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
                                        {/* Testimonial Slide Start */}
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
                                        {/* Testimonial Slide End */}
                                        {/* Testimonial Slide Start */}
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
                                        {/* Testimonial Slide End */}
                                        {/* Testimonial Slide Start */}
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
                                        {/* Testimonial Slide End */}
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
        </div>

    )
}

export default Cita
import React from 'react'

const Contacto = () => {
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-2" data-cursor="-opaque">Contact<span> Us</span></h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="./">home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">contact us</li>
                                    </ol>
                                </nav>
                            </div>
                            {/* Page Header Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* Page Contact Start */}
            <div className="page-contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-us-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">info de contacto</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Conecta</span> Cerca &amp; Lejos </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.25s">Para atención dental de emergencia o para programar una cita, comuníquese con nuestra oficina al visitar nuestra clínica.
                                    </p>
                                </div>
                                {/* Section Title End */}
                                {/* Contact US Info Start */}
                                <div className="contact-us-info">
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* Contact US Item Start */}
                                            <div className="contact-us-item wow fadeInUp">
                                                {/* Icon Box Start */}
                                                <div className="icon-box">
                                                    <img src="images/icon-location.svg" alt="" />
                                                </div>
                                                {/* Icon Box End */}
                                                {/* Contact Us Content Start */}
                                                <div className="contact-info-content">
                                                    <h3>visítanos</h3>
                                                    <p>Av. Javier Prado Este 1633 - San Borja</p>
                                                </div>
                                                {/* Contact Us Content End */}
                                            </div>
                                            {/* Contact Us Item End */}
                                        </div>
                                        <div className="col-md-6">
                                            {/* Contact US Item Start */}
                                            <div className="contact-us-item wow fadeInUp" data-wow-delay="0.25s">
                                                {/* Icon Box Start */}
                                                <div className="icon-box">
                                                    <img src="images/icon-phone.svg" alt="" />
                                                </div>
                                                {/* Icon Box End */}
                                                {/* Contact Us Content Start */}
                                                <div className="contact-info-content">
                                                    <h3>contáctanos</h3>
                                                    <p>985 125 521</p>
                                                    <p>995 654 147</p>
                                                </div>
                                                {/* Contact Us Content End */}
                                            </div>
                                            {/* Contact Us Item End */}
                                        </div>
                                        <div className="col-md-6">
                                            {/* Contact US Item Start */}
                                            <div className="contact-us-item wow fadeInUp" data-wow-delay="0.5s">
                                                {/* Icon Box Start */}
                                                <div className="icon-box">
                                                    <img src="images/icon-clock.svg" alt="" />
                                                </div>
                                                {/* Icon Box End */}
                                                {/* Contact Us Content Start */}
                                                <div className="contact-info-content">
                                                    <h3>horarios de atención</h3>
                                                    <p>Lun a Vier : 10am a 6pm</p>
                                                    <p>Sab : 10AM a 5PM</p>
                                                </div>
                                                {/* Contact Us Content End */}
                                            </div>
                                            {/* Contact Us Item End */}
                                        </div>
                                        <div className="col-md-6">
                                            {/* Contact US Item Start */}
                                            <div className="contact-us-item wow fadeInUp" data-wow-delay="0.75s">
                                                {/* Icon Box Start */}
                                                <div className="icon-box">
                                                    <img src="images/icon-mail.svg" alt="" />
                                                </div>
                                                {/* Icon Box End */}
                                                {/* Contact Us Content Start */}
                                                <div className="contact-info-content">
                                                    <h3>escíbenos</h3>
                                                    <p>dentair@gmail.com</p>
                                                    <p>contacto@gmail.com</p>
                                                </div>
                                                {/* Contact Us Content End */}
                                            </div>
                                            {/* Contact Us Item End */}
                                        </div>
                                    </div>
                                </div>
                                {/* Contact US Info End */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Google Map Start */}
                            <div className="google-map">
                                {/* Google Map Iframe Start */}
                                <div className="google-map-iframe">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.363044740582!2d-77.00525956908791!3d-12.087280196026612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c866d9f6acb7%3A0x5f59f1afccb63205!2sAv.%20Javier%20Prado%20Este%2C%20Lima!5e0!3m2!1ses!2spe!4v1730922291047!5m2!1ses!2spe" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                                {/* Google Map Iframe End */}
                            </div>
                            {/* Google Map End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Contact End */}
            {/* Contact Form Start */}
            <div className="contact-us-form">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* Contact Us Image Start */}
                            <div className="contact-us-img">
                                <figure className="image-anime">
                                    <img src="images/contact-us-img.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Contact Us Image End */}
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">escríbenos</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Ponte</span> en contacto</h2>
                                </div>
                                {/* Section Title End */}
                                <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.25s">
                                    <div className="row">
                                        <div className="form-group col-md-6 mb-4">
                                            <input type="text" name="name" className="form-control" id="fullname" placeholder="Ingresa nombre" required />
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
                                            <input type="text" name="subject" className="form-control" id="subject" placeholder="Asunto" required />
                                            <div className="help-block with-errors" />
                                        </div>
                                        <div className="form-group col-md-12 mb-5">
                                            <textarea name="msg" className="form-control" id="msg" rows={5} placeholder="Mensaje" required defaultValue={""} />
                                            <div className="help-block with-errors" />
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn-default">enviar mensaje</button>
                                            <div id="msgSubmit" className="h3 hidden" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contacto
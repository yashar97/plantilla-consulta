import CompanyCarrusel from "../components/CompanyCarrusel"

const Nosotros = () => {

    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-2" data-cursor="-opaque"><span>Sobre</span> Nosotros</h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="./">Inicio</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">nosotros</li>
                                    </ol>
                                </nav>
                            </div>
                            {/* Page Header Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* Page About Us Start */}
            <div className="about-us page-about-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* About Image Start */}
                            <div className="about-image">
                                <div className="about-img-1">
                                    <figure className="image-anime reveal">
                                        <img src="images/about-us-img-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="about-img-2">
                                    <figure className="image-anime reveal">
                                        <img src="images/about-us-img-2.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* About Experience Circle Start */}
                                <div className="about-experience">
                                    <figure>
                                        <img src="images/about-experience-circle.png" alt="" />
                                    </figure>
                                </div>
                                {/* About Experience Circle End */}
                            </div>
                            {/* About Image End */}
                        </div>
                        <div className="col-lg-6">
                            {/* About Content Start */}
                            <div className="about-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">sobre nosotros</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Su viaje a </span> una sonrisa más saludable comienza <span>aquí</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.25s">En nuestra clínica dental, ofrecemos atención de calidad con un equipo profesional y tecnología avanzada, para lograr una sonrisa saludable y confiable.</p>
                                </div>
                                {/* Section Title End */}
                                {/* About Us Body Start */}
                                <div className="about-us-body wow fadeInUp" data-wow-delay="0.5s">
                                    <ul>
                                        <li>equipo experimentado</li>
                                        <li>servicios integrales</li>
                                        <li>tecnología de punta</li>
                                        <li>servicios de emergencia dental</li>
                                    </ul>
                                </div>
                                {/* About Us Body End */}
                            </div>
                            {/* About Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page About Us End */}
            {/* Insurance Company Logo Slider Start */}
            <div className="insurance-company-carousel">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="insurance-carousel-title">
                                <h3>Ellos confia en nuestra experiencia</h3>
                            </div>
                        </div>
                        <CompanyCarrusel />
                    </div>
                </div>
            </div>
            {/* Insurance Company Logo Slider End */}
            {/* How It Work Start */}
            <div className="how-it-work about-how-it-work">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="how-it-work-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">como trabajamos</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Que hacemos</span> por tus dientes</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.25s">Cuidamos de tu salud dental con tratamientos personalizados, asegurando una sonrisa saludable y brillante.</p>
                                </div>
                                {/* Section Title End */}
                                {/* How Work Accordion Start */}
                                {/* FAQ Accordion Start */}
                                <div className="faq-accordion how-work-accordion" id="accordion">
                                    {/* FAQ Item Start */}
                                    <div className="accordion-item wow fadeInUp">
                                        <div className="icon-box">
                                            <img src="images/icon-how-it-work-1.svg" alt="" />
                                        </div>
                                        <h2 className="accordion-header" id="heading1">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                reservar una cita
                                            </button>
                                        </h2>
                                        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Reserva tu cita fácilmente. Contáctanos hoy y asegúrate de recibir la mejor atención para tu salud dental.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}
                                    {/* FAQ Item Start */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                        <div className="icon-box">
                                            <img src="images/icon-how-it-work-2.svg" alt="" />
                                        </div>
                                        <h2 className="accordion-header" id="heading2">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                ¿Qué afecciones tratamos?
                                            </button>
                                        </h2>
                                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Tratamos una amplia variedad de afecciones dentales, desde caries y problemas en las encías hasta infecciones, abscesos, dientes sensibles, maloclusiones y bruxismo, todo con el objetivo de mantener tu salud bucal en su mejor estado y asegurar una sonrisa saludable.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}
                                    {/* FAQ Item Start */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="icon-box">
                                            <img src="images/icon-how-it-work-3.svg" alt="" />
                                        </div>
                                        <h2 className="accordion-header" id="heading3">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                atención experta
                                            </button>
                                        </h2>
                                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Brindamos atención dental experta, con un equipo altamente capacitado que utiliza las últimas técnicas y tecnología para garantizar tu bienestar bucal.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}
                                </div>
                                {/* FAQ Accordion End */}
                                {/* How Work Accordion End */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* How It Work Image Start */}
                            <div className="how-it-work-img">
                                <figure className="image-anime">
                                    <img src="images/how-it-work-img.jpg" alt="" />
                                </figure>
                            </div>
                            {/* How It Work Image End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* How It Work End */}
            {/* Dental Process Start */}
            <div className="dental-process">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">proceso de implante dental</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque"><span>Lo guiamos a </span> unos dientes <span>óptimos</span></h2>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            {/* Dental Process Item Start */}
                            <div className="dental-process-item wow fadeInUp">
                                {/* Dental Process Image Start */}
                                <div className="dental-process-image">
                                    <div className="dental-process-img">
                                        <figure className="image-anime">
                                            <img src="images/dental-process-img-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="dental-process-number">
                                        <h3>01</h3>
                                    </div>
                                </div>
                                {/* Dental Process Image End */}
                                {/* Dental Process Content Start */}
                                <div className="dental-process-content">
                                    <h3>exámen inicial </h3>
                                    <p>En el examen inicial, evaluamos tu salud bucal y planificamos el tratamiento de implantes para asegurar su éxito.</p>
                                </div>
                                {/* Dental Process Content End */}
                            </div>
                            {/* Dental Process Item End */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Dental Process Item Start */}
                            <div className="dental-process-item wow fadeInUp" data-wow-delay="0.25s">
                                {/* Dental Process Image Start */}
                                <div className="dental-process-image">
                                    <div className="dental-process-img">
                                        <figure className="image-anime">
                                            <img src="images/dental-process-img-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="dental-process-number">
                                        <h3>02</h3>
                                    </div>
                                </div>
                                {/* Dental Process Image End */}
                                {/* Dental Process Content Start */}
                                <div className="dental-process-content">
                                    <h3>extracción dental</h3>
                                    <p>La extracción dental se realiza con cuidado para asegurar tu bienestar y prevenir complicaciones.</p>
                                </div>
                                {/* Dental Process Content End */}
                            </div>
                            {/* Dental Process Item End */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Dental Process Item Start */}
                            <div className="dental-process-item wow fadeInUp" data-wow-delay="0.5s">
                                {/* Dental Process Image Start */}
                                <div className="dental-process-image">
                                    <div className="dental-process-img">
                                        <figure className="image-anime">
                                            <img src="images/dental-process-img-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="dental-process-number">
                                        <h3>03</h3>
                                    </div>
                                </div>
                                {/* Dental Process Image End */}
                                {/* Dental Process Content Start */}
                                <div className="dental-process-content">
                                    <h3>injerto óseo</h3>
                                    <p>En el injerto óseo, restauramos el hueso perdido para asegurar la colocación exitosa de implantes dentales.</p>
                                </div>
                                {/* Dental Process Content End */}
                            </div>
                            {/* Dental Process Item End */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Dental Process Item Start */}
                            <div className="dental-process-item wow fadeInUp" data-wow-delay="0.75s">
                                {/* Dental Process Image Start */}
                                <div className="dental-process-image">
                                    <div className="dental-process-img">
                                        <figure className="image-anime">
                                            <img src="images/dental-process-img-4.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="dental-process-number">
                                        <h3>04</h3>
                                    </div>
                                </div>
                                {/* Dental Process Image End */}
                                {/* Dental Process Content Start */}
                                <div className="dental-process-content">
                                    <h3>colocación de la corona</h3>
                                    <p>Durante la colocación de la corona, aseguramos un ajuste perfecto para restaurar la forma y función dental.</p>
                                </div>
                                {/* Dental Process Content End */}
                            </div>
                            {/* Dental Process Item End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Dental Process End */}
            {/* Footer Start */}

        </div>

    )
}

export default Nosotros
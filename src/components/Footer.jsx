
const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* About Footer Start */}
                        <div className="about-footer">
                            {/* Footer Logo Start */}
                            <div className="footer-logo">
                                <img src="images/footer-logo.svg" alt="" />
                            </div>
                            {/* Footer Logo End */}
                            {/* About Footer Content Start */}
                            <div className="about-footer-content">
                                <p>En nuestra clínica dental, ofrecemos atención amable, profesional y tratamientos de la más alta calidad, enfocados en la salud bucal y estética.</p>
                            </div>
                            {/* About Footer Content End */}
                        </div>
                        {/* About Footer End */}
                    </div>
                    <div className="col-lg-3 col-md-4">
                        {/* Footer Quick Links Start */}
                        <div className="footer-links footer-quick-links">
                            <h3>links rápidos</h3>
                            <ul>
                                <li><a href="./">inicio</a></li>
                                <li><a href="nosotros.html">nosotros</a></li>
                                <li><a href="servicios.html">servicios</a></li>
                                <li><a href="cita.html">agendar cita</a></li>
                            </ul>
                        </div>
                        {/* Footer Quick Links End */}
                    </div>
                    <div className="col-lg-3 col-md-4">
                        {/* Footer Social Links Start */}
                        <div className="footer-links footer-social-links">
                            <h3>redes sociales</h3>
                            <ul>
                                <li><a href="#">facebook</a></li>
                                <li><a href="#">instagram</a></li>
                                <li><a href="#">youtube</a></li>
                                <li><a href="#">twitter</a></li>
                            </ul>
                        </div>
                        {/* Footer Social Links End */}
                    </div>
                    <div className="col-lg-2 col-md-4">
                        {/* Footer Contact Links Start */}
                        <div className="footer-links footer-contact-links">
                            <h3>contáctanos</h3>
                            <ul>
                                <li><a href="#">dentaire@gmail.com</a></li>
                                <li><a href="#">987 654 154</a></li>
                            </ul>
                        </div>
                        {/* Footer Contact Links End */}
                    </div>
                </div>
                {/* Footer Copyright Section Start */}
                <div className="footer-copyright">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Footer Copyright Start */}
                            <div className="footer-copyright-text">
                                <p>Copyright © 2024 Todos los derechos reservados.</p>
                            </div>
                            {/* Footer Copyright End */}
                        </div>
                    </div>
                </div>
                {/* Footer Copyright Section End */}
            </div>
        </footer>
    )
}

export default Footer
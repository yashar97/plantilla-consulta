import { Link } from "react-router-dom"

const Registro = () => {
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-2" data-cursor="-opaque"><span>Create</span> una cuenta</h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to='/'>Inicio</Link></li>
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
                                    <h3 className="wow fadeInUp">Registro</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque"><span>A un paso de</span> tu sonrisa soñada</h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="appointment-form wow fadeInUp">
                                    {/* Form Start */}
                                    <form id="appointmentForm" action="#" method="POST">
                                        <div className="row">
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Nombres" required />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="email" name="email" className="form-control" id="email" placeholder="Apellidos" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="phone" className="form-control" id="phone" placeholder="DNI" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="phone" className="form-control" id="phone" placeholder="correo" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="phone" className="form-control" id="phone" placeholder="contraseña" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="phone" className="form-control" id="phone" placeholder="confirmar contraseña" required />
                                                <div className="help-block with-errors" />
                                            </div>
                                            {/* <div className="form-group col-md-12 mb-5">
                                                <input type="date" name="date" className="form-control" id="date" required />
                                                <div className="help-block with-errors" />
                                            </div> */}
                                            <div className="col-md-12">
                                                <button type="submit" className="btn-default">Registrarme</button>
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
        </div>
    )
}

export default Registro
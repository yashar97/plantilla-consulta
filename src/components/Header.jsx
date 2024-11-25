import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* Logo Start */}
                        <a className="navbar-brand" href="./">
                            <img src="images/logo.svg" alt="Logo" />
                        </a>
                        {/* Logo End */}
                        {/* Main Menu Start */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    {/* <li className="nav-item"><a className="nav-link" href="./">Inicio</a></li> */}
                                    <li className="nav-item"><Link to='/' className="nav-link">Inicio</Link></li>
                                    <li className="nav-item"><Link to='/nosotros' className="nav-link">Nosotros</Link></li>
                                    <li className="nav-item"><Link to='/servicios' className="nav-link">Servicios</Link></li>
                                    <li className="nav-item"><Link to='/contacto' className="nav-link">Contacto</Link></li>
                                </ul>
                            </div>
                            {/* Let’s Start Button Start */}
                            <div className="header-btn d-inline-flex">
                                <Link to="/cita" className="btn-default">Separa tu cita</Link>
                            </div>
                            {/* Let’s Start Button End */}
                        </div>
                        {/* Main Menu End */}
                        <div className="navbar-toggle" />
                    </div>
                </nav>
                <div className="responsive-menu" />
            </div>
        </header>
    )
}

export default Header
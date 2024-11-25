import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./paginas_publicas/Inicio"
import Principal from "./layouts/Principal"
import Nosotros from './paginas_publicas/Nosotros'
import Servicios from "./paginas_publicas/Servicios"
import Contacto from "./paginas_publicas/Contacto"
import Cita from "./paginas_publicas/Cita"
import Registro from "./paginas_publicas/Registro"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />}>
                    <Route index element={<Inicio />} />
                    <Route path="nosotros" element={< Nosotros />} />
                    <Route path="servicios" element={< Servicios />} />
                    <Route path="contacto" element={< Contacto />} />
                    <Route path="cita" element={< Cita />} />
                </Route>

                <Route path="/registro">
                    <Route index element={<Registro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
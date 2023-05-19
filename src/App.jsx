import './App.css'
import { Routes , Route } from 'react-router-dom'
import Animacion from './Animacion/Animacion'
import Inicio from './Inicio/Inicio'
import Proyectos from './Proyectos/Proyectos'
import SobreMi from './SobreMi/SobreMi'
import Menu from './Menu/Menu'



function App() {
  
  return (
    <div>
      <Menu/>
        <Routes>
          <Route path="/portfolio/" element={<Inicio />} />
          <Route path="/portfolio/proyectos" element={<Proyectos />} />
          <Route path="/portfolio/sobremi" element={<SobreMi />} />
        </Routes>   
    </div>
  )
}

export default App

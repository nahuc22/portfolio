import './App.css'
import Inicio from './Inicio/Inicio.jsx'
function App() {

  return (
    <div>
      <Inicio/>   
      <video autoPlay loop muted class="videoBackground">
                    <source src="/videos/videobg.webm" type="video/mp4" />
      </video>
    </div>
  )
}

export default App

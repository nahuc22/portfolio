import './App.css'
import backgroundVideo from './assets/videobg.mp4';
import Inicio from './Inicio/Inicio.jsx'
function App() {

  return (
    <div>
      <Inicio/>   
      <video autoPlay loop muted class="videoBackground">
                    <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default App

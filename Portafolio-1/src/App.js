import './App.css'
import Contacto from './Components/Contacto';
import Descripcion from './Components/Descripcion';
import Header from "./Components/Header"
import Proyectos from './Components/Proyectos';
import SobreMi from './Components/SobreMi';
import Tecnologias from './Components/Tecnologias';

function App() {
  return (
    <div className='body'>
        <div className='inicio'>
          <Header/>
          <SobreMi/>
        </div>
        <Descripcion/>
        <Tecnologias/>
        <Proyectos/>
        <Contacto/>
        
    </div>
  );
}

export default App;

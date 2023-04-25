import React, { useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from "@fortawesome/free-solid-svg-icons"
const Index = () => {
    const [estado, setEstado] = useState(false)
    return (
    <>
        {
            estado === false
            ?
            <>
                <header>
                    <h1>Portafolio</h1>
                        <nav>
                            <input type="checkbox" id="check"/>
                            <label htmlFor="check" className='checkbtn'>
                            <FontAwesomeIcon className='bar' icon={faBars}/>
                            </label>
                            <ul>
                                <li><a href='#sobre' className='a-Header' onClick={() => setEstado(!estado)}>Sobre mi</a></li>
                                <li><a href='#tecnologias' className='a-Header' onClick={() => setEstado(!estado)}>Tecnologias</a></li>
                                <li><a href='#proyectos' className='a-Header' onClick={() => setEstado(!estado)}>Proyectos</a></li>
                                <li><a href='#contacto' className='a-Header' onClick={() => setEstado(!estado)}>Contacto</a></li>
                            </ul>
                        </nav>
                </header>
            </>
        
            :

            <div>
            <header>
                <h1>Portafolio</h1>
                    <nav>
                        <input type="checkbox" id="check"/>
                        <label htmlFor="check" className='checkbtn'>
                        <FontAwesomeIcon className='bar' icon={faBars}/>
                        </label>
                        <ul>
                                <li><a href='#sobre' className='a-Header' onClick={() => setEstado(!estado)}>Sobre mi</a></li>
                                <li><a href='#tecnologias' className='a-Header' onClick={() => setEstado(!estado)}>Tecnologias</a></li>
                                <li><a href='#proyectos' className='a-Header' onClick={() => setEstado(!estado)}>Proyectos</a></li>
                                <li><a href='#contacto' className='a-Header' onClick={() => setEstado(!estado)}>Contacto</a></li>
                            </ul>
                    </nav>
            </header>
        </div>

        }

    </>
)
}

export default Index
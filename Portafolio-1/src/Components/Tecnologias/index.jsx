import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3, faGitAlt, faSass, faBootstrap,faGithub}from'@fortawesome/free-brands-svg-icons'
import "./estilos.css"
const Tecnologias = () => {
    const [estado, setEstado] = useState(false)
    

    console.log(estado)

    return (
        <>
            <div className="boton">
                <input type="checkbox" id="btn-switch" onClick={() => setEstado(!estado)}/>
                <label htmlFor="btn-switch" className='lbl-switch'></label>
            </div>
            <div className='tecnologias' id="tecnologias">
            <h1>Tecnologias</h1>
                {
                    estado === false
                    ?
                    <>
                        <div className='tecno1'>
                            <button><FontAwesomeIcon className='icon html5' icon={faHtml5}/></button>
                            <button><FontAwesomeIcon className='icon css' icon={faCss3}/></button>
                            <button><FontAwesomeIcon className='icon git' icon={faGitAlt}/></button>
                            <button><FontAwesomeIcon className='icon git1' icon={faGithub}/></button>
                        </div>

                        <div className='tecno2'>
                            <button><FontAwesomeIcon className='icon sass' icon={faSass}/></button>
                            <button><FontAwesomeIcon className='icon boostrap' icon={faBootstrap}/></button>
                            <button><FontAwesomeIcon className='icon js' icon={faJs}/></button>
                            <button><FontAwesomeIcon className='icon react' icon={faReact}/></button>
                        </div>
                    </>
                    :
                    <>
                    <div className='tecno1'>
                        <button><FontAwesomeIcon className='icon html52' icon={faHtml5}/></button>
                        <button><FontAwesomeIcon className='icon css2' icon={faCss3}/></button>
                        <button><FontAwesomeIcon className='icon git2' icon={faGitAlt}/></button>
                        <button><FontAwesomeIcon className='icon git12' icon={faGithub}/></button>
                    </div>

                    <div className='tecno2'>
                        <button><FontAwesomeIcon className='icon sass2' icon={faSass}/></button>
                        <button><FontAwesomeIcon className='icon boostrap2' icon={faBootstrap}/></button>
                        <button><FontAwesomeIcon className='icon js2' icon={faJs}/></button>
                        <button><FontAwesomeIcon className='icon react2' icon={faReact}/></button>
                    </div>
                </>
                }
                


            </div>
        </>
    )
}

export default Tecnologias
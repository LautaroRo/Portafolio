import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Contacto = () => {
    console.log(faLocationDot)
    return (
    <div className='formulario'>
        <h1 className='logo'>Contactame</h1>
        <div className="content">
            <div className="contact-wrapper" id="contacto">
                <div className="contact-form">
                    <form action="">
                        <p>
                            <label>Nombre</label>
                            <input type="text" name='nombre' />
                        </p>

                        <p>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </p>

                        <p>
                            <label>Motivo</label>
                            <input type="text" name='motivo' />
                        </p>

                        <p className='block'>
                            <label>Mensaje</label>
                            <textarea name="mensaje" rows="3"></textarea>
                        </p>
                        <p className='block'>
                            <button type="submit">
                                Enviar
                            </button>
                        </p>
                    </form>
                </div>
                    <div className="contact-info">
                        <h2>Mas Info</h2>
                        <ul className='ul'>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Cordoba Argentina
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+54 9 351-341-3701
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>lautarorodriguezovalle@gmail.com
                            </li>
                        </ul>
                        <p>
                            React developer junior sin experiencia laboral, con muchas ganas de aprender y trabajar.
                        </p>

                        <p>
                            Lautaro Rodriguez Ovalle
                        </p>
                    </div>
                
            </div>
        </div>
    </div>
    )
}

export default Contacto
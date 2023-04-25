import React, { useRef } from 'react';
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2"
const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const input1 = document.getElementById("input1")
        const input2 = document.getElementById("input2")
        const input3 = document.getElementById("input3")
        const input4 = document.getElementById("input4")
        
        if(input1.value.length > 2 || input3.value.length > 4 || input4.value.length > 5){
            emailjs.sendForm("service_6td7czh", "template_l7sg8cu", form.current, "zLduDFw1jxUYLdXlK")
            
            .then(()=>{
                input1.value= ""
                input2.value= ""
                input3.value= ""
                input4.value= ""
    
                Swal.fire({
                    title:"Formulario Enviado",
                    text:`Muchas gracias por comunicarte. En breve estaremos respondiendo`,
                    icon:"success",
                    background:"black",
                    color:"white"
                })
            })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Profavor complete el formulario'
                })
            }
        }

    return (
    <div className='formulario'>
        <h1 className='logo'>Contactame</h1>
        <div className="content">
            <div className="contact-wrapper" id="contacto">
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <p>
                            <label>Nombre</label>
                            <input type="text" name='user_name' id="input1"/>
                        </p>

                        <p>
                            <label>Email</label>
                            <input type="email" name='user_email' id="input2" required/>
                        </p>

                        <p>
                            <label>Motivo</label>
                            <input type="text" name="message" id="input3"/>
                        </p>

                        <p className='block'>
                            <label>Mensaje</label>
                            <textarea name="message"id="input4" rows="3"></textarea>
                        </p>
                        <p className='block'>
                            <button type="submit" value="Send">
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
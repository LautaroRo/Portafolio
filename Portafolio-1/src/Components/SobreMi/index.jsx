import React from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from "@fortawesome/free-solid-svg-icons"
const SobreMi = () => {
    return (
    <>
        <div className='container-Mi'>
            <h2>Lautaro Rodriguez</h2>
            <h3>Desarrollodor front end</h3>
            <a className='btonAnimated' href='#sobre'><FontAwesomeIcon className='arrow' icon={faArrowDown} /></a>
        </div>
    </>
)
}

export default SobreMi
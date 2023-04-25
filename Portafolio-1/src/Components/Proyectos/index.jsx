import React, { useEffect, useState } from 'react'
import Proyecto1 from "../../Assets/Proyecto1/img1.jpeg"
import Proyecto2 from "../../Assets/Proyecto2/img2.jpeg"
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {faGithub}from'@fortawesome/free-brands-svg-icons'

const Proyectos = () => {
    const fila = document.getElementById("slider")

    const activo = (e) =>{
        e.preventDefault()
        const valor = e.target.name
        if (fila){
            fila.scrollLeft = valor * fila.offsetWidth
            document.querySelector(" .activo").classList.remove("activo")
            e.target.classList.add("activo")
        }else{
            console.log("error")
            const fila1 = document.getElementById("slider")

            const valor = e.target.name
            if (fila1){
                fila1.scrollLeft = valor * fila1.offsetWidth
                document.querySelector(" .activo").classList.remove("activo")
                e.target.classList.add("activo")
            }
        }
    }

    const sumar = () =>{
        try{
            fila.scrollLeft += fila.offsetWidth
            const indicarActivo = document.querySelector(" .activo")

            if(indicarActivo.nextSibling){
                indicarActivo.nextSibling.classList.add("activo")
                indicarActivo.classList.remove("activo")
            }


        }catch{
            const fila1 = document.getElementById("slider")
            fila1.scrollLeft += fila1.offsetWidth
            const indicarActivo = document.querySelector(" .activo")

            if(indicarActivo.nextSibling){
                indicarActivo.nextSibling.classList.add("activo")
                indicarActivo.classList.remove("activo")
            }
        }
    }

    const restar = () =>{
            try {
                fila.scrollLeft -= fila.offsetWidth
                const indicarActivo = document.querySelector(" .activo")

            if(indicarActivo.previousSibling){
                indicarActivo.previousSibling.classList.add("activo")
                indicarActivo.classList.remove("activo")
            }
        }
        catch{
            console.log(fila)
            const fila1 = document.getElementById("slider")
            fila1.scrollLeft -= fila1.offsetWidth
            const indicarActivo = document.querySelector(" .activo")

        if(indicarActivo.previousSibling){
            indicarActivo.previousSibling.classList.add("activo")
            indicarActivo.classList.remove("activo")
        }
        }

    }
    return (
        
        <div className="container-Proyectos" id="proyectos">
            <h1>Proyectos</h1>
            <div className="slider-container" id="slider">
                    <div className="slider-view">
                        <div className='slide'>
                            <img src={Proyecto1}  id="slide"></img>
                            <div className="capa">
                                <h3 className='Titulo-Proyecto'>Tienda de Autos</h3>
                                <div className="Posicion-A">
                                    <div>
                                    <a className='LinkGit' href='https://github.com/LautaroRo/Practicando-con-css' target='_blank'><FontAwesomeIcon className='icono' icon={faGithub}></FontAwesomeIcon></a>
                                    </div>
                                    <div>
                                    <a className='LinkGit' href='https://practicando-con-css.vercel.app/' target='_blank'>Deploy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slide'>
                            <img src={Proyecto2}  id="slide"></img>
                            <div className="capa">
                            <h3 className='Titulo-Proyecto'>Calculadora</h3>
                                <div className="Posicion-A">
                                    <div>
                                        <a className='LinkGit' href='https://github.com/LautaroRo/Calculadora.git' target='_blank'><FontAwesomeIcon className='icono' icon={faGithub}></FontAwesomeIcon></a>
                                    </div>
                                    <div>
                                        <a className='LinkGit' href='https://calculadora-three-brown.vercel.app/' target='_blank'>Deploy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="containerBtons">
            <button className='bton1' onClick={ restar}><FontAwesomeIcon className='icon1' icon={faArrowLeft}/></button>
                <div className="links">
                        <button id="a" name="0" className='activo' onClick={activo}>1</button>
                        <button id="a" name="1" className="" onClick={activo}>2</button>
                </div>
            <button className='bton1' onClick={ sumar}><FontAwesomeIcon className='icon1' icon={faArrowRight}/></button>
            </div>
        </div>
        
    )
}

export default Proyectos
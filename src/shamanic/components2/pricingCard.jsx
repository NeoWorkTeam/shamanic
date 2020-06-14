
import React from 'react'
import topCard from '../img/lp2/topCard.png'
import Storage from '../components/storage'
import Shopping from '../img/Shopping-Cart.png'

const storage = Storage()


const gotoSales = () => {
    document.location.href = storage.url_start_program
}

const Card = () => {

    return    (
        <div className="pricingCard">

            <div className="wrapper">
                    <h3> 50% de Descuento</h3>
                    <h2>$147 USD</h2>
                    <p>
                        <span className="cardSubtitleLeft">Precio Regular</span>
                        <span className="cardSubtitleRight"><s>$297</s>USD</span>
                        </p>
                    <ul>
                        <li>Siete Sesiones de Clases Grabadas</li>
                        <li>Siete Transcripciones de las Sesiones</li>
                        <li>Extractos del Libro de Ceremonia</li>
                        <li>Introducción al Viaje Chamánico</li>
                        <li>Grupo de Facebook con un chamán experto para responder tus preguntas</li>
                    </ul>
                    <h4 onClick={ () => gotoSales()}>  
                    <img src={Shopping} alt="shopping" width="50px" className="shoppingCard"></img>
                    Obtén tu Curso 
                    </h4>
            </div>
        </div>
    )
}

export default Card
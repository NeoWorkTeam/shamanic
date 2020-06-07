
import React from 'react'
import topCard from '../img/lp2/topCard.png'


const Card = () => {

    return    (
        <div className="pricingCard">
        <img src={topCard} alt="title" className="topCard" ></img>

            <div className="wrapper">

                    <h2>$147 USD</h2>
                    <p>
                        <span className="cardSubtitleLeft">Precio Regular</span>
                        <span className="cardSubtitleRight"><s>$297</s>USD</span>
                        </p>
                    <ul>
                        <li>Siete Sesiones de Clases Grabadas </li>
                        <li>Siete Transcriptiones de las Sesiones </li>
                        <li>Extractos del Libro de Ceremonia</li>
                        <li> Introducción al Viaje Chamánico  </li>
                        <li>Grupo de Facebook con un chamán experto para responder tus preguntas</li>
                    </ul>
                    <h4> Obtén tu Curso </h4>
            </div>
        </div>
    )
}

export default Card
import React from 'react';
import { connect } from 'react-redux';



const Titulares = ({ titulares,quitarTitular }) => (

    <section>
    <h2>Titulares</h2>
    <div className="contenedor-jugadores">
        {
            titulares.map( j => (
                <article className="jugador" key={j.id}>
                    <img src={j.foto}  alt={j.nombre} />
                    <h3>{j.nombre}</h3>
                    <div>
                        <button onClick={ () => quitarTitular(j) } > Quitar </button>
                    </div>
                </article>
            ))
               
        }
     </div>
</section>
)


const mapStateToProps = state => ({
    titulares:state.titulares
})

const mapDispatchToProps = dispatch =>({
    quitarTitular(jugador){
        dispatch({
            type:"QUITAR_TITULAR",
            jugador
        })
    }
}) 

export default connect(mapStateToProps,mapDispatchToProps)(Titulares)
import React from 'react';
import { connect } from 'react-redux';


const Suplentes = ({ suplentes,quitarSuplente }) => (

    <section>
    <h2>Suplentes</h2>
    <div className="contenedor-jugadores">
        {
            suplentes.map( j => (
                <article className="jugador" key={j.id}>
                    <img src={j.foto}  alt={j.nombre} />
                    <h3>{j.nombre}</h3>
                    <div>
                        <button onClick={ () => quitarSuplente(j)  } > Quitar </button>
                    </div>
                </article>
            ))
               
        }
     </div>
</section>
)


const mapStateToProps = state => ({
    suplentes:state.suplentes
})

const mapDispatchToProps = dispatch =>({
   
    quitarSuplente(jugador){
        dispatch({
            type:"QUITAR_SUPLENTE",
            jugador:jugador
        })

    }


}) 

export default connect(mapStateToProps,mapDispatchToProps)(Suplentes)
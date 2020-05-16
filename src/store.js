import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const initialState = {
    jugadores:[{
      "nombre":"Lennon",
      "id":1,
      "foto":"https://www.dmpgroup.com/hubfs/Roster%20Images/John%20Lennon%20Roster%20Pic.jpg"  
    },{
        "nombre":"Damien",
        "id":2,
        "foto":"https://cde.peru.com//ima/0/1/3/0/0/1300627/380x300/damien-rice.png"  
      },{
        "nombre":"Richard",
        "id":3,
        "foto":"https://i.pinimg.com/236x/fb/df/39/fbdf392bb1de92d950adf36c7db41c00--king-richard-art-final.jpg"  
      }],
    titulares:[],
    suplentes:[]

}


const reducerEntrenador = ( state = initialState , action  ) => {
  
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter( j => j.id !== action.jugador.id  )
        }
    }


    if(action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter( j => j.id !== action.jugador.id  )
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            titulares: state.titulares.filter( j => j.id !== action.jugador.id  )
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            suplentes: state.suplentes.filter( j => j.id !== action.jugador.id  )
        }
    }


    
    


  
    return state
}

export default createStore(reducerEntrenador, composeWithDevTools(applyMiddleware(logger)))
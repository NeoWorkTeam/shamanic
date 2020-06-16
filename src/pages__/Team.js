import React from 'react';
import Jugadores from '../components/jugadores/Jugadores'
import EquipoSeleccionado from '../components/equipoSeleccionado/EquipoSeleccionado'
import '../components/jugadores/style.scss'


const Team = () => (

    <React.Fragment>
    <h2>Mi Equipo</h2>
    <Jugadores></Jugadores>
    <EquipoSeleccionado></EquipoSeleccionado>
    </React.Fragment>

)


export default Team
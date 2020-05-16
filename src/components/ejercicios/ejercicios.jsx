import React ,{ useState }  from 'react';

const Listas = () => {


    const estadoInicial = [
        {id:1, texto:"tarea1"},
        {id:2, texto:"tarea2"},
        {id:3, texto:"tarea3"},
        {id:4, texto:"tarea4"}
    ]

    const [lista,setLista] = useState(estadoInicial)
 
    const validar = () =>  (<h2> 2 </h2>)

    const agregarElemento = () => {

        setLista([...lista,{ id:10,texto:'tarea10' }])
            
    }

    return (
        <div>

            {
                lista.map((item ,index ) => (

                         <h4 key= { item.id } > { item.texto } </h4>

                        
                    )
                )   
            }
                <button onClick={ () =>  agregarElemento() } > Add </button>

        </div>
    )


}

export default Listas
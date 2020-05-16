import React from 'react';



const Formulario = () => {


    const [name,setName] = React.useState("")
    const [email,setEmail] = React.useState("")

    return (
            <form>
                <input 
                className="form-control mb-2" 
                name="nombre" 
                placeholder="Nombre"
                onChange={ (e) => setName(e.target.value) }
                >

                </input>
                <input className="form-control mb-2" name="email" placeholder="Email"
                onChange={ (e) => setEmail(e.target.value) }
                ></input>
                <button className="btn btn-primary"> Save </button>
            </form>
        )
}

export default Formulario
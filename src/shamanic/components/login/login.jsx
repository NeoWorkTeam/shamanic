import React from 'react'
import { auth,db } from "../../../firebase"
import { withRouter } from 'react-router-dom'

const Login = (props) => {

    const [error,setError] = React.useState('')

    const procesarDatos = e => {

        e.preventDefault()
    
        if(!email.trim()){
            setError('Ingrese Email')
            return
        }

        if(!pass.trim()){
            setError('Ingrese Password')
            return
        }

        if(pass.length < 5){
            setError(' Password no Valid debe tener mas de 6 caracteres ')
            return
        }
       
    
        setError(null)

        if(esRegistro){
            registrar()
        }else{
            Login()
        }

        return 
    
    }




    const [ esRegistro,setEsRegistro ] = React.useState('')
    const [ email,setEmail ] = React.useState('')
    const [ pass,setPass ] = React.useState('')



    const Login = React.useCallback( async () => {

        try {

           const resp =  await auth.signInWithEmailAndPassword(email,pass)
           setEmail('')
           setPass('')
           setError(null)
           props.history.push('/admin')
            

        } catch (error) {
            setError(error.message)  
        }


    },[email,pass] )


    const registrar = React.useCallback( async () => {

        try {
            const resp =    await auth.createUserWithEmailAndPassword(email,pass)
            await db.collection('Usuarios').doc(resp.user.email).set({
                email: resp.user.email,
                uid: resp.user.uid
            })

            setEmail('')
            setPass('')
            setError(null)

        } catch (error) {
            setError(error.message)   
        }
    },[email,pass] )

        return (
            <div className="mt-5">
                <div className="row justify-content-center">
                    <div className=" col-12 col-sm-8 col-md-6 col-xl-4" >
                    <h3> {
                    esRegistro ? 'Registro' : ' Login'
                    } </h3>
                        <form onSubmit={ procesarDatos } >
                    {
                        error && ( 
                            <div className="alert alert-danger">{ error }</div>
                        )
                    }

                                                <input 
                                                onChange={ e => setEmail(e.target.value) }
                                                type="email"
                                                className="form-control mb-2"
                                                placeholder="Email"
                                                value={ email }
                                                />

                                                <input 
                                                type="password"
                                                className="form-control  mb-2"
                                                placeholder="Password"
                                                onChange={ e => setPass(e.target.value) }
                                                value= { pass }

                                                />

                                                <button  type='submit' className="btn btn-dark btn-lg btn-block" > 
                                                {
                                                     
                                                     esRegistro ? ' Registrarse ' : ' Acceder'
                                                     
                                                     }
                                                 </button>

                                                 <button type='button' className="btn btn-info btn-sm btn-block"
                                                 onClick = {( )=> setEsRegistro(!esRegistro) }
                                                 > 
                                                     {
                                                     
                                                     esRegistro ? ' Eres neowork ? ' : 'No tienes Cuenta ?'
                                                     
                                                     }
                                                 </button>

                                    </form>



                    </div>


                </div>
                
                
            </div>

        )





} 

export default  withRouter(Login) 
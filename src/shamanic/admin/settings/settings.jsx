import React from 'react'
import { Container } from 'react-bootstrap'
import { firebase } from "../../components/firebase"
import Table from "./tableSettings"

function Settings(){


    const [tareas,setTareas] = React.useState([])
    const [active,setActive] = React.useState(false)


    React.useEffect(() => {

        const obtenerData = async () => {

                try {

                    const db = firebase.firestore()
                    const data = await  db.collection('Settings').get()
                    const arrayData = data.docs.map(doc => ({ id: doc.id,...doc.data() }))
                
                    setTareas(arrayData)

                    if(data.docs){
                        setActive(true)
                    }
    
                } catch (error) {
                    
                }

        }

        obtenerData()

        },[])

            if( active ) return (
            <Container>
                <Table tareas={tareas}  />
            </Container>)
            else return ''


    }

    

          


export default Settings
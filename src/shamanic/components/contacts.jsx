import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import { firebase } from "./firebase"

const Contacts = () => {

    const [contacts,setContacts] = React.useState([])


    React.useEffect(()=> {

        const obtenerDatos = async () => {

            try{

                const db = firebase.firestore()
                const data = await db.collection('Contacts').get()

                const arrayData = await data.docs.map(
                    doc=>({
                        id: doc.id, ...doc.data()
                        })
                )

                console.log(arrayData)


            }catch(error){



            }
       
        }


        obtenerDatos()

        

    },[])


    const [data,setData] = useState({
        "id":1,
        "title1":"Shamanic Journeying",
        "title2":"with",
        "title3":"Sandra Ingerman",
        "iframe":"http://neowork.co/Banner.mp4"
        })
     
        return (<Container id="section01" className="section">
            <Row>
            ss
            </Row>
        </Container>)

}


export default Contacts





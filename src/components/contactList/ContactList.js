import React,{Component} from 'react';
import { Container,Row,Col,Table} from 'react-bootstrap'
import Loading from '../loading/Loading';


class ContactList extends Component {

    state = {
        data:[],
        loading:true,
        error:null
    }
   
    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () => {

        try {

            let res = await fetch('http://localhost:8000/api/contacts')
            let data = await res.json()
            
            this.setState({
                data,
                loading:false
            })

        } catch (error) {

            this.setState({
                loading:false,
                error
            })


        }

       
    }

    render(){

        if(this.state.loading)
        return <Loading></Loading>

        if(this.state.error)
        return <Container>Error Cargando la Data</Container>

        return (
            <Container className="contenedor" >
            <Row>
                <Col xs={12}>
                    <h2>{this.props.title}</h2> 
                </Col>  
            </Row>
            <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>


                { 
               this.state.data.map((contact,index)=> { 
                    return ( <tr>
                        <td>{index+1}</td>
                        <td>{contact.fullname}</td>
                        <td>{contact.email}</td>
                        <td>{contact.message}</td>
                        </tr>)
                })
               }

                   
                </tbody>
                </Table>
            </Row>
        </Container>
        )
    }
}

export default ContactList
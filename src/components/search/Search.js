import React , {useState} from 'react'
import {Container,Col,Row,Form,Button} from 'react-bootstrap'
import createBrowserHistory from 'history/createBrowserHistory';

export default () => {

    const [searchText,setSearchText] = useState('')

    const history = createBrowserHistory({forceRefresh:true});

    const handleSearchTextChange = e => {
        setSearchText(e.target.value)
    }

    const handleSearchTextClick = e =>{
        history.push(`/Results?movieName=${searchText}`)
    }

    const handleCleanTextClick = e =>{
            setSearchText('')
    }

    return  ( 
    <Container>
                <Row>
                <Col xs={12} md={12} >
                <h2>Buscador</h2>
            </Col>
                </Row>
                <Row>  
                <Col xs={12} md={12} >
                <p> :::: { searchText } ::::</p> 
                </Col> 
                </Row>
                <Row> 
                <Col xs={12} md={8} >
                    <Form.Control
                    type="text" 
                    className="form-control"
                    placeholder="Text"
                    onChange={handleSearchTextChange}
                    value={searchText}
                    ></Form.Control> 
                </Col>   
                <Col    >
                <Button variant="primary"
                onClick={handleSearchTextClick}
                >Buscar</Button>
                </Col>   
                <Col >
                <Button 
                onClick={handleCleanTextClick}
                variant="secondary">Reset</Button>
                </Col>   
                
                </Row>

    </Container>
    )


}







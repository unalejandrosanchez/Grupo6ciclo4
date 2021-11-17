//Atajo tecaldo: imr
import React from 'react';
import { Container, Col, Row, Card} from 'react-bootstrap';
import './index.css';

import Menu from '../../components/navbar/navbar';

// imagen de portada para login 
import image1 from '../../public/img/learnAdd.png'



//Atajo tecaldo: ccc
export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            var1: '',
        }
    }

    unaFuncion(){
        alert("esto e suna funcion");
    }
    render() { 
        return (  
            <Container>

                <Menu/>

                <Row>   
                    <Col 
                        sm={12}  
                        xs={12} 
                        md={{span:4, offset:2}} 
                        lg={{span:5, offset:1}} 
                        xl={{span:5, offset:1}}
                    >

                        <Card id="options-dashboard">
                            <Card.Body>
                                <Card.Text> Crear Topico </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={image1} />
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}
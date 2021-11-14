//Atajo tecaldo: imr
import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import './login.css';
import axios from 'axios';
import {APIHOST as host} from '../app.json'
import {isNull, isNUll} from 'util';
import Cookies from 'universal-cookie';
import {calculaEspiracionSesion} from '../helper/helper';

const cookies = new Cookies();

//Atajo tecaldo: ccc
export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            user: '',
            pass:'',

        }
    }

    sigIn(){

        axios.post(`${host}/usuarios/login`,{
            usuario : this.state.user,
            pass: this.state.pass,
        })
        .then((response) => {
            console.log(response);
            var data = response.data;
            console.log(data.token);
            if(isNull(data.token)){
                alert('Usuario y/o contraseña invalidas');
            }else{

                cookies.set('_s', data.token,{
                    path:'/',
                    expires: calculaEspiracionSesion(),
                });
            }
        })
        .catch((err) =>{
            console.log(err);
        });

        // alert(`usuario:${this.state.user} - Contraseña: ${this.state.pass}`);
    }
    render() { 
        return (  
            <Container id="login-container">

               

                <Row>   
                    
                    <Col 
                        sm={12}  
                        xs={12} 
                        md={{span:4, offset:4}} 
                        lg={{span:4, offset:4}} 
                        xl={{span:4, offset:4}}
                    >

                        <Row>
                            <Col>
                                <h2> Iniciar Sesión </h2> 
                            </Col>
                        </Row> 

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Usuario </Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su nombre de usuario" 
                                    onChange={(e)=>
                                        this.setState({user: e.target.value})
                                    }
                                />
                            </Form.Group>
                            
                            <Form.Group className="mb-5">
                                <Form.Label>Contraseña </Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su contraseña"
                                    onChange={(e)=>
                                        this.setState({pass: e.target.value})
                                    }
                                />
                            </Form.Group>
                            <Button variant="primary"
                                onClick={()=>{ this.sigIn(); }}
                            > Iniciar sesión </Button>
                        </Form>
                    </Col>
                </Row>


            </Container>
        );
    }
}
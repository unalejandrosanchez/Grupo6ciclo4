//Atajo tecaldo: imr
import React from 'react';
import { Container, Form, Button, Col, Row, Image } from 'react-bootstrap';
import './login.css';
import axios from 'axios';
import {APIHOST as host} from '../../app.json'
import {isNull} from 'util';
import Cookies from 'universal-cookie';
import {calculaEspiracionSesion} from '../helper/helper';

// imagen de portada para login 
import image1 from '../../public/img/loginBanner.png'

import Loading from '../loading/loading';

const cookies = new Cookies();


//Atajo tecaldo: ccc
export default class login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {  
            loading: false,
            user: '',
            pass:'',

        }
    }

    sigIn(){

        this.setState( {loading:true} );

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

            this.setState( {loading:false} );
        })
        .catch((err) =>{
            console.log(err);
            this.setState( {loading:false} );
        });

        // alert(`usuario:${this.state.user} - Contraseña: ${this.state.pass}`);
    }
    render() { 
        return (  
            <Container id="login-container">

                <Loading show={this.state.loading} />

                <Row>   
                    <Col sm={12}  
                        xs={12} 
                        md={{span:4, offset:0}} 
                        lg={{span:6, offset:0}} 
                        xl={{span:6, offset:0}}>
                        <Image src={ image1 } fluid />
                    </Col>
                    
                    <Col 
                        sm={12}  
                        xs={12} 
                        md={{span:4, offset:2}} 
                        lg={{span:5, offset:1}} 
                        xl={{span:5, offset:1}}
                    >

                        <Row id="titulo-Login">
                            <Col>

                                <h2> Login </h2> <br/>
                                <p> Ingrese sus datos de cuenta para continuar. </p> 
                            </Col>
                        </Row> 
                        <hr/>
                        <Form>
                            <Form.Group className="mt-5 mb-3">
                                <Form.Label>Ingrese su Email  </Form.Label>
                                <Form.Control type="email" placeholder="ejemplo@dominio.com" rounded  
                                    onChange={(e)=>
                                        this.setState({user: e.target.value})
                                    }
                                />
                            </Form.Group>
                            
                            <Form.Group className="mt-4 mb-5">
                                <Form.Label>Ingrese su contraseña </Form.Label>
                                <Form.Control type="password" placeholder="*****"
                                    onChange={(e)=>
                                        this.setState({pass: e.target.value})
                                    }
                                />
                            </Form.Group>
                            <Button variant="outline-info" onClick={()=>{ this.sigIn(); }} > Iniciar sesión </Button>
                        </Form>
 
                        <Row id="login-options"> 
                            <span> No tiene una cuenta?  - <a href="/registro"> Registrese  </a></span>
                        </Row>
                        
                    </Col>

                    <Col>
                    </Col>
                </Row>


            </Container>
        );
    }
}

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button, Container, Row, Col} from 'react-bootstrap';


function App() {
  return (

    <div className="p-5">
      <Container>
        <Row className="h-100 justify-content-center align-items-center minh-100">
            <Col md={6}>
                <h3> Registro de administrador </h3>
                <p> Digite los siguientes datos para hacer el registro de un Usuario Admin </p>
                <hr></hr> 
                <div class="pt-5" />
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2"> Nombres </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Nombres del admin" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2"> Apellidos </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Apellidos del admin" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2"> Correo </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Ingrese un correo" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2"> Contraseña </Form.Label>
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Ingrese una contraseña" />
                        </Col>
                    </Form.Group>

                    <div class="pt-5" />

                    <Button variant="primary" type="submit"> Registrar </Button>
                </Form>
            </Col>
        </Row>

      </Container>
    </div>
  );
}


export default App;

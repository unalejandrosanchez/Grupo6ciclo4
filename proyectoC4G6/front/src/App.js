
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button, Container, Row, Col} from 'react-bootstrap';


function App() {
  return (

    <div className="p-5">
      <Container>
      <div class="bg"></div>
        <Row className="h-100 justify-content-center align-items-center minh-100">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario </Form.Label>
                <Form.Control type="email" placeholder="Ingrese su nombre de usuario" />
              </Form.Group>
            
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label>Contraseña </Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
              </Form.Group>
              <Button variant="primary" type="submit"> Iniciar sesión </Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </div>
  );
}


export default App;

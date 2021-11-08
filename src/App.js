import logo from './logo.svg';
import { Form,Button, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //en la pagina de bootstrap se encuentra tablas botones alertas etc

function App() {
  return (
    <div className="App">

    <Container>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address
    </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button> 
  </Form> 
  </Container>

    </div>
  );
}

export default App;

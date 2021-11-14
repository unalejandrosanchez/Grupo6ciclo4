import React from "react";
import { Container, Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import './navbar.css'

// Font awesome iconos 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Navbar bg="primary" expand="lg" id="minavbar">
                <Container>
                    <Navbar.Brand href="#home" id="navbarTitle"> Learn Thread - Dashboard </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <DropdownButton id="dropdown-basic-button" title="Carlos David D.">
                        <Dropdown.Header>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <Dropdown.Item href="#/action-1"> Mi perfil </Dropdown.Item>
                        </Dropdown.Header>
                        <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
                    </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        );
    }
}

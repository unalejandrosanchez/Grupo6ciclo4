import React from 'react';
import {Container, Row, } from 'react-bootstrap';
//import './empleados.css';
import DataGrid from '../../../grid/grid';
import Menu from '../../../navbar/navbar';

const columns = [{
    dataField: '_id',
    text: 'ID',
    hidden: true,
}, {
    dataField: 'nombre',
    text: 'Nombre'
}, {
    dataField: 'apellido_p',
    text: 'Primer apellido'
}, {
    dataField: 'apellido_m',
    text: 'Segundo apellido'
}, {
    dataField: 'telefono',
    text: 'Telefono'
}, {
    dataField: 'mail',
    text: 'Corre Electronico'
}, {
    dataField: 'direccion',
    text: 'Direccion'
},

];

export default class EmpleadosBuscar  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.onClickEditButton= this.onClickEditButton.bind(this);
    }

    componentDidMount(){
    }

    onClickEditButton(row){
        this.props.setIdEmpleado(row._id);
        this.props.changeTab('Editar');
    }

    render() {         
        return(


            <Container id= "empleados-buscar-container">
                <Menu/>

                <Row>
                    <h2>BUSCAR EMPLEADOS</h2>
                </Row>
                <Row>
                    <DataGrid url="/empleados" columns={columns}
                    showEditButton = {true}
                    onClickEditButton={this.onClickEditButton} />
                </Row>

            </Container>
        );

    }
}


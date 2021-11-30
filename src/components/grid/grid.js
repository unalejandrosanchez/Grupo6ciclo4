import React from 'react';
import {request} from '../helper/helper';
import { Row, Col, Button} from 'react-bootstrap';
//import './empleados.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone,
    SizePerPageDropdownStandalone  } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Loading from '../loading/loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {isUndefined} from 'util';

//barra search
const { SearchBar } = Search;

export default class DataGrid  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loading:false,
            rows: []
        };

        if(this.props.showEditButton && !this.existsColumn('Editar'))
        this.props.columns.push(this.getEditButton());
            
    }

componentDidMount(){
    this.getData();
}

getData(){
    this.setState({loading: true});
    request
    .get(this.props.url)
    .then((response)=>{
        this.setState({rows: response.data,
        loading: false,})
    })
    .catch((err)=>{
        this.setState({loading: false})
        console.error(err);
    });
}


existsColumn(colText){
    let col = this.props.columns.find((column) => column.text === colText);
    return !isUndefined(col);
}

getEditButton (){
    return{
    text:'Editar',
    formatter: (cell, row) =>{

        return (
            <Button onClick ={()=> this.props.onClickEditButton(row)}>
            <FontAwesomeIcon icon ={faEdit}/>
            </Button>
        );
    },

    };

}

    render() {
        
        const options = {
            custom: true,
            totalSize: this.state.rows.length
            };


        return ( 
            <>
            <Loading show={this.state.loading}/>

            <ToolkitProvider
                keyField="tp"
                data={ this.state.rows }
                columns={ this.props.columns }
                search
                >
                {
                    props => (
                    <>
                        
                        <hr />
                        <PaginationProvider
                                pagination={ paginationFactory(options) }
                                >
                                {
                                    ({
                                    paginationProps,
                                    paginationTableProps
                                    }) => (
                                    <>
                                    <Row>
                                    <Col>
                                    <SizePerPageDropdownStandalone { ...paginationProps }/>
                                    </Col>

                                    <Col>    
                                    <SearchBar { ...props.searchProps } />
                                    </Col>
                                    </Row>
                                        <BootstrapTable
                                        keyField="bt"
                                        data={ this.state.rows }
                                        columns={ this.props.columns }
                                        { ...paginationTableProps }
                                        {...props.baseProps }
                                        />
                                        <PaginationListStandalone { ...paginationProps } />
                                    </>
                                    )
                                }
                    </PaginationProvider>
                                        
                    </>
                    )
                }
                </ToolkitProvider>
                </>
        );
    }
}



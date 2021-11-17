import React from "react";
import { Spinner, Button } from "react-bootstrap";

import './loading.css';


export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: false,
         }
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps);

        if(nextProps.show !== this.state.show){
            this.setState( {show: nextProps.show} )
        }
    }

    render() { 
        return (
            <>
                { this.state.show ? (
                    <div id="loading-backdrop">
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            &nbsp; Cargando...
                        </Button>
                    </div>

                ):null }
            </>
        );
    }
}
 
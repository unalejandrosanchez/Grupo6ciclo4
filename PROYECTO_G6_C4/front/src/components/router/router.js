import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "../login/login";

export default function AppRouter(){
    return(
        <Router> 
            <Switch>
                <Route exact path= {["/", "/login"]} component={Login}/>
                <Route exact path= {["/home", "/login"]} component={Home}/>

                {/* funcion lambda para rutas que on existen  */}
                <Route exact path= {"*"} component={()=> (
                    <h2 style={{marginTop: 200 }}> 404  <br/> Pagina No encontrada </h2>
                )}/>
            </Switch>
        </Router>
    )
}

function Home(){
    return[
        <div>
            <h2> Este es home </h2>
        </div>
    ]
}
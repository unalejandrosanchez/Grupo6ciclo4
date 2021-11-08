const Empleado = require("../models/empleados.model");

let response = {
    msg:   "",
    exito: false
}


//Funcion para crear
exports.create = function(req, res){
    let empleado = new Empleado({
        nombre:     req.body.nomb,
        apellido_p: req.body.apellido_a,
        apellido_m: req.body.apellido_m,
        telefono:   req.body.telefono,
        email:      req.body.email,
        direccion:  req.body.direccion
    });

    empleado.save(function(err){
        if(err){
            console.log=false,
            response.exito = false,
            response.msg= "Error al guardar el empleado",
            res.json(response)
            return;
        }

        //Hasta Aqui quedo la clase del 26 oct 2021...
    });

    response.exito = true;
    response.msg= "El empleado se guardo correctamente.";
    res.json(response);
    // res.status(200).json(empleado);
}


// Funcion para buscar todos 
exports.find= function(req, res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}


// Funcion para buscar solo uno 
exports.findOne = function(req, res){
    Empleado.findOne( {_id: req.params.id} ,function(err, empleado){
        res.json(empleado)
    })
}

// Funcion para actualizar solo uno 
exports.update = function(req, res){
    
    let empleado= {
        nombre:     req.body.nomb,
        apellido_p: req.body.apellido_a,
        apellido_m: req.body.apellido_m,
        telefono:   req.body.telefono,
        email:      req.body.email,
        direccion:  req.body.direccion
    }

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
        if(err){
            cosole.log(err),
            response.exito = false,
            response.msg = "Error al cambiar datos del empleado",
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Los datos del empleado se han actualizado",
        res.json(response)
    });
}

// Funcion para eliminar un empleado 
exports.remove = function(req, res){
    Empleado.findByIdAndRemove({_id: req.params.id}, function(err){

        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al remover los datos del empleado.",
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Los datos del empleado se han removido",
        res.json(response)

    })
}
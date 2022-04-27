const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const {espacio} = require('../models/espacio');


// Obtener todos los envios
router.get('/api/espacio', (req, res) => {
    espacio.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Encontrar por estado
router.get('/api/espacio/disponible', (req, res) => {
    espacio.find({estado: "disponible"},(err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});

// Cargar espacio
router.post('/api/espacio/add', (req, res) => {
    const emp = new espacio({
        inmueble: req.body.inmueble,    
        cantidad_visitantes: req.body.cantidad_visitantes,
        fecha: req.body.fecha,    
        hora_inicio: req.body.hora_inicio,    
        hora_fin:req.body.hora_fin,    
        estado:req.body.estado 
    });
    emp.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, status: 'Se registró el inmueble', addespacio: data})
        } else {
           console.log(err);
        }
    });
});

// Actualizar estado
router.put('/api/espacio/actualizar/:id', (req, res) => {


    const emp = {
        estado:"ocupado"  
    };
    espacio.updateOne({inmueble:req.params.id}, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, status: 'Se ha actualizado el estado', updatenvios: data})
        } else {
            console.log(err);
        }
    });
});

module.exports = router;

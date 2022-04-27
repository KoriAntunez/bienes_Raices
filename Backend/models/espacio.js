let mongoose = require('mongoose');



// espacio Schema
const espacio = mongoose.model('espacio', {
    inmueble: {
        type: String,
        required: true,
    },
    cantidad_visitantes:{
        type: String,
        required: true,
    },    
    fecha: {
        type: String,
        required: true,
    },    
    hora_inicio: {
        type: String,
        required: true,
    },    
    hora_fin: {
        type: String,
        required: true,
    },    
    estado: {
        type: String,
        required: true,
    }
});



module.exports = {espacio}
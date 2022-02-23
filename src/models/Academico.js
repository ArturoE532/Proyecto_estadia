const {Schema, model} = require('mongoose');

const AcademicoSchema = new Schema({
    tipo: {
        type: String,
        required:true
    },
    carrera: {
        type: String,
        required: true
    },
    institucion: {
        type: String,
        required: true
    },
    fecha_inicio: {
        type: String,
        required: true
    },
    fecha_termino: {
        type: Date,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Academico', AcademicoSchema);
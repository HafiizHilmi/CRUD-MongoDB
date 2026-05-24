const mongoose = require('mongoose');

const mataKuliahSchema = new mongoose.Schema({
    nama_mk: { type: String, required: true },
    pengajar: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Dosen',
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Mata_Kuliah', mataKuliahSchema);
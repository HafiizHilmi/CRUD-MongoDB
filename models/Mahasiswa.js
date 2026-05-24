const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
    nrp: { type: String, required: true, unique: true },
    nama: { type: String, required: true },
    mk_yang_diambil: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mata_Kuliah' }]
}, { timestamps: true });

module.exports = mongoose.model('Mahasiswa', mahasiswaSchema, 'Mahasiswa');
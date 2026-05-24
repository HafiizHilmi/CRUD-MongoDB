const mongoose = require('mongoose');

const dosenSchema = new mongoose.Schema({
    nip: { type: String, required: true, unique: true },
    nama: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Dosen', dosenSchema);
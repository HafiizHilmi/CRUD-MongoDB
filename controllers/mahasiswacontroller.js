const Mahasiswa = require('../models/Mahasiswa');

exports.getMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find().populate('mk_yang_diambil');
        res.status(200).json(mahasiswa);
    } catch (error) {
        res.status(500).json({ error: 'ERR_500' });
    }
};

exports.getMahasiswaById = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findById(req.params.id).populate('mk_yang_diambil');
        if (!mahasiswa) return res.status(404).json({ error: 'ERR_404' });
        res.status(200).json(mahasiswa);
    } catch (error) {
        res.status(500).json({ error: 'ERR_500' });
    }
};

exports.createMahasiswa = async (req, res) => {
    try {
        const { nrp, nama, mk_yang_diambil } = req.body;
        const mahasiswaBaru = await Mahasiswa.create({ nrp, nama, mk_yang_diambil });
        res.status(201).json(mahasiswaBaru);
    } catch (error) {
        res.status(400).json({ error: 'ERR_400' });
    }
};

exports.updateMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, 
            runValidators: true 
        });
        if (!mahasiswa) return res.status(404).json({ error: 'ERR_404' });
        res.status(200).json(mahasiswa);
    } catch (error) {
        res.status(400).json({ error: 'ERR_400' });
    }
};

exports.deleteMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);
        if (!mahasiswa) return res.status(404).json({ error: 'ERR_404' });
        res.status(200).json({ message: 'Data mahasiswa berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: 'ERR_500' });
    }
};
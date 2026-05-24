const MataKuliah = require('../models/MataKuliah');

exports.getMatkul = async (req, res) => {
    try {
        const matkul = await MataKuliah.find().populate('pengajar');
        res.status(200).json(matkul);
    } catch (error) {
        res.status(500).json({ error: 'ERR_500' });
    }
};

exports.getMatkulById = async (req, res) => {
    try {
        const matkul = await MataKuliah.findById(req.params.id).populate('pengajar');
        if (!matkul) return res.status(404).json({ error: 'ERR_404' });
        res.status(200).json(matkul);
    } catch (error) {
        res.status(500).json({ error: 'ERR_500' });
    }
};

exports.createMatkul = async (req, res) => {
    try {
        const { nama_mk, pengajar } = req.body;
        const matkulBaru = await MataKuliah.create({ nama_mk, pengajar });
        res.status(201).json(matkulBaru);
    } catch (error) {
        res.status(400).json({ error: 'ERR_400' });
    }
};

exports.updateMatkul = async (req, res) => {
    try {
        const matkul = await MataKuliah.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, 
            runValidators: true 
        });
        if (!matkul) return res.status(404).json({ error: 'ERR_404' });
        res.status(200).json(matkul);
    } catch (error) {
        res.status(400).json({ error: 'ERR_400' });
    }
};

exports.deleteMatkul = async (req, res) => {
    try {
        const matkul = await MataKuliah.findByIdAndDelete(req.params.id);
        if (!matkul) return res.status(404).json({ error: 'ERR_404' });
        res.status(200).json({ message: 'Data mata kuliah berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: 'ERR_500' });
    }
};

const Dosen = require('../models/Dosen');

exports.getDosen = async (req, res) => {
    try {
        const dosen = await Dosen.find();
        res.status(200).json(dosen);
    } catch (error) {
        res.status(500).json({ error: 'ERR_500' });
    }
};

exports.getDosenById = async (req, res) => {
    try {
        const dosen = await Dosen.findById(req.params.id);
        if (!dosen) return res.status(404).json({ error: 'ERR_404' });
        res.status(200).json(dosen);
    } catch (error) {
        res.status(500).json({ error: 'ERR_500' });
    }
};

exports.createDosen = async (req, res) => {
    try {
        const { nip, nama } = req.body;
        const dosenBaru = await Dosen.create({ nip, nama });
        res.status(201).json(dosenBaru);
    } catch (error) {
        res.status(400).json({ error: 'ERR_400' });
    }
};

exports.updateDosen = async (req, res) => {
    try {
        const dosen = await Dosen.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!dosen) return res.status(404).json({ error: 'ERR_404' });
        res.status(200).json(dosen);
    } catch (error) {
        res.status(400).json({ error: 'ERR_400' });
    }
};

exports.deleteDosen = async (req, res) => {
    try {
        const dosen = await Dosen.findByIdAndDelete(req.params.id);
        if (!dosen) return res.status(404).json({ error: 'ERR_404' });
        res.status(200).json({ message: 'Data dosen berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: 'ERR_500' });
    }
};

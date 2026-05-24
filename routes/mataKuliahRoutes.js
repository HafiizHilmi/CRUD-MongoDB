const express = require('express');
const router = express.Router();
const { getMatkul, createMatkul, updateMatkul, deleteMatkul } = require('../controllers/matakuliahcontroller');

router.get('/', getMatkul);
router.post('/', createMatkul);
router.put('/:id', updateMatkul);
router.delete('/:id', deleteMatkul);

module.exports = router;   
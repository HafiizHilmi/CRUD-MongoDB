const express = require('express');
const router = express.Router();

const { 
    getMahasiswa, 
    getMahasiswaById, 
    createMahasiswa, 
    updateMahasiswa, 
    deleteMahasiswa 
} = require('../controllers/mahasiswacontroller');

router.get('/', getMahasiswa);
router.get('/:id', getMahasiswaById);
router.post('/', createMahasiswa);
router.put('/:id', updateMahasiswa);
router.delete('/:id', deleteMahasiswa);

module.exports = router;
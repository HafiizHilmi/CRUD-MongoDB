const express = require('express');
const router = express.Router();
const { 
    getDosen, 
    getDosenById, 
    createDosen, 
    updateDosen, 
    deleteDosen 
} = require('../controllers/dosencontroller');

router.get('/', getDosen);
router.get('/:id', getDosenById);
router.post('/', createDosen);
router.put('/:id', updateDosen);
router.delete('/:id', deleteDosen);

module.exports = router;

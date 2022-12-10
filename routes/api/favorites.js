const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');

router.post('/new', favoritesCtrl.create);
router.get('/:id', favoritesCtrl.index);
router.delete('/:id', favoritesCtrl.deleteBody);










module.exports = router;
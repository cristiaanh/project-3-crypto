const express = require('express');
const router = express.Router();
const currenciesCtrl = require('../../controllers/api/currencies');

router.post('/:id', currenciesCtrl.create);

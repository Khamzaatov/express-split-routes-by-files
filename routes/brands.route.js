const { Router } = require('express');

const router = Router()

const { controllerBrand } = require('../controllers/brands.controller')

router.get('/brands', controllerBrand.brand2)

router.post('/brands/:news', controllerBrand.brand1)

router.delete('/brands/:id', controllerBrand.brand3)

module.exports = router


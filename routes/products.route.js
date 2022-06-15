const { Router } = require('express')

const router = Router()


const product = [
    'Апельсин', 
    'Мандарин'
]

const { controllerProducts } = require('../controllers/products.controller')

router.get('/products', controllerProducts.product1)


router.get('/products/:id', controllerProducts.product2)

router.post('/products/:id', controllerProducts.prodect3)

router.delete('/products/:id', controllerProducts.product4)


module.exports = router

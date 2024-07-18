const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Rotta per ottenere tutti i prodotti
router.post('/products/create', productsController.createProduct)
router.get('/products/', productsController.getAllProducts);

// Rotta per ottenere prodotti per ID
router.post('/products/:id', productsController.getProductById);

// Rotta per ottenere prodotti per categoria
router.post('/products/:category', productsController.getProductByCategory);

// Rotta per aggiornare un prodotto
router.post('/products/update', productsController.updateProduct);

// Rotta per rimuovere un prodotto
router.delete('/products/remove/:id', productsController.deleteProduct);

module.exports = router;
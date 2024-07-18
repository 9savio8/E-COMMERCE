const express = require('express');
const router = express.Router();
const productsController = require('../controllers/cartsController');

// Rotta per ottenere tutti i prodotti
router.get('/products/getAll', productsController.getAllProducts);

// Rotta per ottenere prodotti per ID
router.post('/products/:id', productsController.getProductById);

// Rotta per ottenere prodotti per categoria
router.post('/products/:category', productsController.getProductByCategory);

// Rotta per aggiornare un prodotto
router.post('/products/update', productsController.updateProduct);

// Rotta per rimuovere un prodotto
router.delete('/products/remove/:id', productsController.deleteProduct);

module.exports = router;
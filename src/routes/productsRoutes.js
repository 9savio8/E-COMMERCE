const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Rotta per ottenere tutti i prodotti
router.get('/getAll', productsController.getAllProducts);

// Rotta per ottenere prodotti per ID
router.post('/:id', productsController.getProductById);

// Rotta per ottenere prodotti per categoria
router.post('/:category', productsController.getProductByCategory);

// Rotta per aggiornare un prodotto
router.post('/update', productsController.updateProduct);

// Rotta per rimuovere un prodotto
router.delete('/remove/:id', productsController.deleteProduct);

module.exports = router;
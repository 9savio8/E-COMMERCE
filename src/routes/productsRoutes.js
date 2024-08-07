const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const verifyToken = require('../middleware/authentication');  
const verifyAdmin = require('../middleware/authorization');

// Rotta per ottenere tutti i prodotti

router.post('/create',[verifyToken,verifyAdmin], productsController.createProduct)

router.get('/getAll', productsController.getAllProducts);

// Rotta per ottenere prodotti per ID
router.get('/:id', productsController.getProductById);

// Rotta per ottenere prodotti per categoria
//router.get('/:category', productsController.getProductByCategory);

// Rotta per aggiornare un prodotto
router.put('/update/:id',[verifyToken,verifyAdmin], productsController.updateProduct);


// Rotta per rimuovere un prodotto
router.delete('/remove/:id',[verifyToken,verifyAdmin], productsController.deleteProduct);

module.exports = router;
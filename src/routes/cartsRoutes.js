const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartsController');
const verifyToken = require('../middleware/authentication');  

// Rotta per ottenere il contenuto del carrello
router.get('/', cartController.getCart);

// Rotta per aggiungere un prodotto al carrello
router.post('/add', verifyToken, cartController.addToCart);

// Rotta per rimuovere un prodotto dal carrello
router.delete('/remove/:id', cartController.removeFromCart);

// Rotta per svuotare il carrello
router.delete('/clear',verifyToken, cartController.clearCart);

module.exports = router;

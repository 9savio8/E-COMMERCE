const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Rotta per ottenere il contenuto del carrello
router.get('/cart', cartController.getCart);

// Rotta per aggiungere un prodotto al carrello
router.post('/cart/add/:id', cartController.addToCart);

// Rotta per rimuovere un prodotto dal carrello
router.delete('/cart/remove/:id', cartController.removeFromCart);

// Rotta per svuotare il carrello
router.delete('/cart/clear', cartController.clearCart);

module.exports = router;

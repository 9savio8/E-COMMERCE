const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartsController');

// Rotta per ottenere il contenuto del carrello
router.get('/', cartController.getCart);

// Rotta per aggiungere un prodotto al carrello
router.post('/add', cartController.addToCart);

// Rotta per rimuovere un prodotto dal carrello
router.delete('/remove/:id', cartController.removeFromCart);

// Rotta per svuotare il carrello
router.delete('/clear', cartController.clearCart);

module.exports = router;

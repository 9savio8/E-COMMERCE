const { Op } = require('sequelize');
const Product = require('../models/products');

// Restituisce il contenuto attuale del carrello dell'utente
exports.getCart = (req, res) => {
    res.status(200).json(cart);
};

// Aggiunge un prodotto al carrello dell'utente
exports.addToCart = (req, res) => {
    const { product } = req.params;
    const { quantity } = req.body;
    
    const productInCart = cart.find(product => product.id === id);
    if (productInCart) {
        productInCart.quantity += quantity;
    } else {
        cart.push({ id, quantity });
    }
    res.status(201).json(cart);
};

// Rimuove un prodotto dal carrello dell'utente
exports.removeFromCart = (req, res) => {
    const { id } = req.params;
    cart = cart.filter(item => item.id !== id);
    res.status(200).json(cart);
};

// Svuota il carrello dell'utente
exports.clearCart = (req, res) => {
    cart = [];
    res.status(200).json(cart);
};

const { Op } = require('sequelize');
const carts= require('../models/cartsModel');


// Restituisce il contenuto attuale del carrello dell'utente
exports.getCart = (req, res) => {
    res.status(200).json(carts);
};

// Aggiunge un prodotto al carrello dell'utente
exports.addToCart = async (req, res) => {
    const idProduct  = req.body.idProduct;
    const quantity = req.body.quantity;
    const idUser=req.idUser;
    var prodotti=[];
    const userCart = await carts.findOne({
        where: { usersid: idUser },
      });

    if (userCart) {
        for(var i=0; i<userCart.products.length;i++){
            if(userCart.products[i].idProduct==idProduct){
                userCart.products[i].quantity=parseInt(userCart.products[i].quantity)+parseInt(quantity);
            }else{
                userCart.products.push({ idProduct, quantity });
            }
        }

        await carts.update(
            { products : userCart.products },
            { where: { usersid: idUser } }
        );
    } else {
         prodotti.push({ idProduct, quantity });
         carts.create({usersid:idUser, products:prodotti});
         res.status(200).json({ message: 'Prodotto aggiunto al carrello' });

    }
    res.status(201).json(carts);
};

// Rimuove un prodotto dal carrello dell'utente
exports.removeFromCart = (req, res) => {
    const id = req.params.id;
    cart = cart.filter(item => item.id !== id);
    res.status(200).json(cart);
};

// Svuota il carrello dell'utente
exports.clearCart = async (req, res) => {
    try {
        const idUser=req.idUser;
        const deleted = await carts.destroy({
            where: { usersid: idUser }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

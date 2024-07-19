//const { Op } = require('sequelize');

const carts = require('../models/cartsModel');
const Orders = require('../models/ordersModel');

// Crea un nuovo ordine
exports.createOrder = async (req, res) => {
    try {
        const { ordersId, totalPrice, cartsId, usersId, name, surname, address, cap, city, region, nation, time } = req.body;
        const carlo = await carts.findByPk(cartsId) 
        const newOrder = await Orders.create({
            ordersId,
            totalPrice,
            products: carlo.products,
            usersId,
            name,
            surname,
            address,
            cap,
            city,
            region,
            nation,
            time
        });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni tutti gli ordini
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni un ordini per id
exports.getOrderById = async (req, res) => {
    try {
        const ordersId = req.params.id;
        const order = await Orders.findByPk(ordersId);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Aggiorna un ordine
// Alessandro non crede sia utile o sicuro poter aggiornare ogni singola colonna di Orders, e nel dubbio lascia commentato 
exports.updateOrder = async (req, res) => {
    try {
        const { ordersId, /*totalPrice, products,*/ usersId, name, surname, address, cap, city, region, nation, time } = req.body;
        const [updated] = await Orders.update(
            { 
            ordersId,
            // totalPrice,
            // products,
            // usersId,
            name,
            surname,
            address,
            cap,
            city,
            region,
            nation,
            time },
            { where: { 
                ordersId: ordersId,
                // totalPrice: totalPrice,
                // products: products,
                usersId: usersId,
                name: name,
                surname: surname,
                address: address,
                cap: cap,
                city: city,
                region: region,
                nation: nation,
                time:time
             } }
        );
        if (updated) {
            const updatedOrder = await Orders.findByPk(id);
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Elimina un ordine
exports.deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Orders.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


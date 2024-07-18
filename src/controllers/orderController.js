const { Op } = require('sequelize');
const Product = require('../models/productsModel');
const orders = require('../models/ordersModel');

// Crea un nuovo ordine
exports.createOrder = async (req, res) => {
    try {
        const { ordersId, totalPrice, products, usersId, name, surname, address, cap, city, region, nation, time } = req.body;
        const newOrder = await orders.create({
            ordersId,
            totalPrice,
            products,
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
        const orders = await orders.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni un ordini per id
exports.getOrderById = async (req, res) => {
    try {
        const { ordersId } = req.params;
        const order = await Product.findByPk(ordersId);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Aggiorna un ordine
exports.updateOrder = async (req, res) => {
    try {
        const { ordersId, totalPrice, products, usersId, name, surname, address, cap, city, region, nation, time } = req.body;
        const [updated] = await category.update(
            { 
            ordersId,
            totalPrice,
            products,
            usersId,
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
                totalPrice: totalPrice,
                products: products,
                isersId: usersId,
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
            const updatedOrder = await orders.findByPk(id);
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
        const { id } = req.params;
        const deleted = await orders.destroy({
            where: { ordersId: id }
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


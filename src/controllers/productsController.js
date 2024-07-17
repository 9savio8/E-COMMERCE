const { Op } = require('sequelize');
const Product = require('../models/products');

// Crea un nuovo prodotto
exports.createProduct = async (req, res) => {
    try {
        const { Name, Price, Quantity, info, category} = req.body;
        const newProduct = await Product.create({
            Name,
            Price,
            Quantity,
            info,
            category
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni tutti i prodotti
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni un prodotto per nome
exports.getProductById = async (req, res) => {
    try {
        const { Name } = req.params;
        const product = await Product.findByPk(Name);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni un prodotto per categoria
exports.getProductByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const product = await Product.findByCategory(category);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Aggiorna un prodotto
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { Name, Price, Quantity, info } = req.body;
        const [updated] = await Product.update(
            { Name, Price, Quantity, info },
            { where: { Productsid: id } }
        );
        if (updated) {
            const updatedProduct = await Product.findByPk(id);
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Elimina un prodotto
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.destroy({
            where: { Productsid: id }
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

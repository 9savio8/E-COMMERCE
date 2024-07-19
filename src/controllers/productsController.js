const products = require('../models/productsModel');

// Crea un nuovo prodotto
exports.createProduct = async (req, res) => {
    try {
        const { name, price, quantity, info, idcategory} = req.body;
        const newProduct = await products.create({
            name,
            price,
            quantity,
            info,
            idcategory
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni tutti i prodotti
exports.getAllProducts = async (req, res) => {
    try {
        const productz = await products.findAll();
        res.status(200).json(productz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni un prodotto per nome
exports.getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await products.findByPk(id);
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
        const product = await products.findByCategory(category);
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
        const  id  = req.params.id;
        const { name, price, quantity, info } = req.body;
        const [updated] = await Product.update(
            { name, price, quantity, info },
            { where: { Productsid: id } }
        );
        if (updated) {
            const updatedProduct = await products.findByPk(id);
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
        const deleted = await products.destroy({
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

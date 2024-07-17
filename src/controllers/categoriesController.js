const { Op } = require('sequelize');
const Product = require('../models/products');

// Crea un nuova categoria
exports.createCategory = async (req, res) => {
    try {
        const { Name} = req.body;
        const newProduct = await Product.create({
            Name
        });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni tutte le categorie
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Product.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni un categoria per nome
exports.getCategoryById = async (req, res) => {
    try {
        const { name } = req.params;
        const category = await Product.findByPk(name);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Aggiorna una categoria
exports.updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const [updated] = await category.update(
            { name },
            { where: { name: name } }
        );
        if (updated) {
            const updatedCategory = await category.findByPk(id);
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Elimina una categoria
exports.deleteCategory = async (req, res) => {
    try {
        const { name } = req.params;
        const deleted = await category.destroy({
            where: { name: name }
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

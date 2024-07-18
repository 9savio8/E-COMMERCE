const { Op } = require('sequelize');
const categoriesModel = require('../models/categoriesModel');

// Crea un nuova categoria
exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = await categoriesModel.create({name:name});
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni tutte le categorie
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await categoriesModel.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Ottieni un categoria per nome
exports.getCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await categoriesModel.findByPk(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ error: 'Model not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Aggiorna una categoria
exports.updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const updated = await categoriesModel.update(
            { name : name },
            { where: { Categoriesid: id } }
        );
        if (updated) {
            const updatedCategory = await categoriesModel.findByPk(id);
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Elimina una categoria
exports.deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params)
        const deleted = await categoriesModel.destroy({
            where: { Categoriesid: id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

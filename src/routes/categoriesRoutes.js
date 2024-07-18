const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');  

router.post('/add',categoriesController.createCategory)
router.get('/all',categoriesController.getAllCategories)
router.get('/id/:id',categoriesController.getCategoryById)
router.post('/update',categoriesController.updateCategory)
router.delete('/delete',categoriesController.deleteCategory)

module.exports = router;
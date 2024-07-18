const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');  

router.post('/add',categoriesController.createCategory)
router.get('/',categoriesController.getAllCategories)
router.get('/id/:id',categoriesController.getCategoryById)
router.put('/update/:id',categoriesController.updateCategory)
router.delete('/delete/:id',categoriesController.deleteCategory)

module.exports = router;
const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const verifyToken = require('../middleware/authentication');  
const verifyAdmin = require('../middleware/authorization');  

router.post('/add',[verifyToken,verifyAdmin],categoriesController.createCategory)
router.get('/',categoriesController.getAllCategories)
router.get('/id/:id',categoriesController.getCategoryById)
router.put('/update/:id',verifyToken,categoriesController.updateCategory)
router.delete('/delete/:id',verifyToken,categoriesController.deleteCategory)

module.exports = router;
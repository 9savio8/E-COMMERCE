const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

//Rotte per ottenere tutti gli ordini
router.get('/', orderController.getAllOrders);

//Rotte per creare nuovo ordine
router.post('/create', orderController.createOrder);

//Rotte per ottenere ordini per ID
router.post('/:id', orderController.getOrderById);

//Rotte per aggiornare un ordine 
router.post('/update', orderController.updateOrder);

//Rotte per eliminare un ordine
router.delete('/delete', orderController.deleteOrder);

module.exports = router;
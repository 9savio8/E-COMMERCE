const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

//Rotte per ottenere tutti gli ordini
router.get('/orders', orderController.getAllOrders);

//Rotte per creare nuovo ordine
router.post('/orders', orderController.createOrder);

//Rotte per ottenere ordini per ID
router.post('/orders/:id', orderController.getOrderById);

//Rotte per aggiornare un ordine 
router.post('/orders/update', orderController.updateOrder);

//Rotte per eliminare un ordine
router.delete('/orders/delete', orderController.deleteOrder);

module.exports = router;
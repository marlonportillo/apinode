const express = require('express');
const router = express.Router();

const StockContController = require('../Controllers/StockController');


router.get('/getStocks',StockContController.GetStocks);
router.post('/addStocks',StockContController.AddStock);
router.post('/getstocksbybook',StockContController.getStockbybook);
router.delete('/delStock/:id',StockContController.DeleteStock);
router.put('/upd-Stock/:id',StockContController.UpdateStock);

module.exports = router;
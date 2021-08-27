const Stock = require('../Models/StockModel');


function AddStock(req,res){
     let stock = new Stock({
        Book: req.body.Book,
        Quantity: req.body.Quantity
     });

     stock.save((error,result) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if ( !result ){
            return res.status(400).json({
                error: true,
                message: `Client error: ${error}`,
                code: 20
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });
     })
}

function getStockbybook(req,res){
    let stock = new Stock({
        Book: req.body.Book,
        Quantity: req.body.Quantity
     });
     Stock.find({Book:stock.Book},(error,result) =>{
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }
        if (result === null){
            return res.status(400).json({
                error: true,
                message: `Not Found`,
                code: 30
            });
        }
        if (result.length === 0){
            return res.status(400).json({
                error: true,
                message: `Not Found`,
                code: 30
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });
     }).populate("Book")
     
}

function GetStocks (req,res){
    Stock.find().exec( (error,contacts) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: contacts,
            code: 10
        });
    });
}

function DeleteStock (req,res){
    const Stock_id = req.params.id;
    Stock.deleteOne({_id: Stock_id}, (error, result) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if (result === null){
            return res.status(400).json({
                error: true,
                message: `Not Found`,
                code: 30
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });

    });
}

function UpdateStock (req,res){
    const Stock_id = req.params.id;
    const data = req.body;
    Stock.findByIdAndUpdate(Stock_id,data,{ new: true}, (error,result) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if ( !result ){
            return res.status(400).json({
                error: true,
                message: 'Not found',
                code: 30
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });
    });
}

module.exports = {
    GetStocks,
    AddStock,
    DeleteStock,
    UpdateStock,
    getStockbybook
};
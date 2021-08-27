const Book = require('../Models/BooksModel');
const Users = require('../Models/UsersModel');
const Rols = require('../Models/RolModel');


function AddBook(req,res){
     let book = new Book({
        createdAt: req.body.createdAt,
        publishDate: req.body.publishDate,
        Author: req.body.Author,
        Genre: req.body.Genre,
        title: req.body.title,
        User:req.body.User
     });
     if (req.body.Rol == "Librarian"){
        book.save((error,result) => {
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
     }else{
        return res.status(401).json({
            error: true,
            message: `Client error: unauthorized`,
            code: 20
        });
     }

     
}

function GetBooks (req,res){
    Book.find().populate('Author').exec( (error,contacts) => {
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
function GetById(req,res){
    const User_id = req.params.id;
    Book.findById({_id :User_id},(error,result) => {
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

function DeleteBook (req,res){
    const book_id = req.params.id;
    Book.deleteOne({_id: book_id}, (error, result) => {
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

function UpdateBook (req,res){
    const book_id = req.params.id;
    const data = req.body;
    Book.findByIdAndUpdate(book_id,data,{ new: true}, (error,result) => {
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
    GetBooks,
    AddBook,
    DeleteBook,
    UpdateBook,
    GetById
};
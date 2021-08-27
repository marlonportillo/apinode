const User = require('../Models/UsersModel');


function AddUser(req,res){
     let user = new User({
        
        Firstname: req.body.Firstname,
        Lasttname: req.body.Lasttname,
        Rol: req.body.Rol,
        email: req.body.email,
      
     });
     if (req.body.RolSend == "Librarian"){
        user.save((error,result) => {
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

function LogIn(req,res){
    let user = new User({
        
        Firstname: req.body.Firstname,
        Lasttname: req.body.Lasttname,
        Rol: req.body.Rol,
        email: req.body.email,
        
     });
     User.find({email:user.email},(error,result) =>{
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
     }).populate("Rol")
}
function GetUsers (req,res){
    User.find().populate('Rol').exec( (error,contacts) => {
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
    User.findById({_id :User_id},(error,result) => {
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
function DeleteUser (req,res){
    const User_id = req.params.id;
    User.deleteOne({_id: User_id}, (error, result) => {
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

function UpdateUser (req,res){
    const User_id = req.params.id;
    const data = req.body;
    User.findByIdAndUpdate(User_id,data,{ new: true}, (error,result) => {
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
    GetUsers,
    AddUser,
    DeleteUser,
    UpdateUser,
    GetById,
    LogIn
};
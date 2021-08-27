const Rol = require('../Models/RolModel');


function AddRol(req,res){
     let rol = new Rol({
        
        Rol: req.body.Rol,
        
        
     });

     rol.save((error,result) => {
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

function GetRols (req,res){
    Rol.find().exec( (error,contacts) => {
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
    Rol.findById({_id :User_id},(error,result) => {
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

function DeleteRol (req,res){
    const Rol_id = req.params.id;
    Rol.deleteOne({_id: Rol_id}, (error, result) => {
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

function UpdateRol (req,res){
    const Rol_id = req.params.id;
    const data = req.body;
    Rol.findByIdAndUpdate(Rol_id,data,{ new: true}, (error,result) => {
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
    GetRols,
    AddRol,
    DeleteRol,
    UpdateRol,
    GetById
};
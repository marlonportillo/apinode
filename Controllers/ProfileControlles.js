const Profile = require("../Models/ProfileModel");
const Books = require('../Models/BooksModel');

function AddProfiel (req,res){
    let profile = new Profile({
        Book:req.body.Book,
        Usuario:req.body.Usuario
    })
    
        profile.save((error,result) => {
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
function deleteprofile(req,res){
    let profile = new Profile({
        Book:req.body.Book,
        Usuario:req.body.Usuario
    })
    Profile.deleteMany({ Book:profile.Book, Usuario:profile.Usuario },(error,result)=>{
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
            data: result,
            code: 10
        });

    })
}



function GetAllProfile (req,res){
   
    var agg = [
        
        {$group: {
          _id:{
              User:"$Usuario", 
              Book:"$Book" 
          } 
          ,
          count: { $sum: 1 }
          
        }}
      ];
      
    Profile.aggregate(agg,(error,result ) =>{
         if(error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
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


function getbyUser (req,res){
    let profile = new Profile({
        Book:req.body.Book,
        Usuario:req.body.Usuario
    })
    Profile.find({Usuario:profile.Usuario},(error,result) =>{
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
     }).populate('Book').populate('Usuario')
}



function getbyUserBook (req,res){
    let profile = new Profile({
        Book:req.body.Book,
        Usuario:req.body.Usuario
    })
    Profile.find({Usuario:profile.Usuario,Book:profile.Book},(error,result) =>{
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
     })
}



module.exports ={
   
    AddProfiel,
    getbyUser,
    GetAllProfile,
    deleteprofile,
    getbyUserBook
}
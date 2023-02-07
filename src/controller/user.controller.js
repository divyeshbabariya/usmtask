const userModel = require('../model/user.model')
const status = require('http-status');

// ADD USER 

exports.UserAdd=async(req,res)=>{

    try {

        const email= req.body.email;
        const verifyEmail = await userModel.find({ email: email });
        if(verifyEmail[0]==null)
        {

            const userData = new userModel({
                name:req.body.name,
                email:req.body.email,
                dob:req.body.dob
            })
            const saveData = await userData.save();

            res.status(status.CREATED).json(
                {
                    message: "USER ADD SUCCESFULLY",
                    status: true,
                    code: 201,
                    data: saveData
                });
        }
        else
        {
            res.status(status.CONFLICT).json(
                {
                    message: "EMAIL ALREADY EXISTS",
                    status: true,
                    code: 409,
                    statusCode: 0
                });
        }
        
    } catch (error) 
    {

        res.status(status.INTERNAL_SERVER_ERROR).json({
            message: "SOMETHING WENT WRONG",
            status: false,
            code: 500,
            error: error.message
        });
    }
}


// USER VIEW BY ID

exports.userViewById = async(req,res)=>{

    try {
        const id = req.params.id;
        const ViewData = await userModel.findById({_id:id})

        if(ViewData)
        {
            res.status(status.OK).json({
                message: "VIEW USER SUCCESFULLY",
                status: true,
                code: 200,
                data: ViewData
            })
        }
        else
        {
            res.status(status.NOT_FOUND).json(
                {
                    message: "USER NOT EXISTS !",
                    status: true,
                    code: 404
                }
            )
        }
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            message: "SOMETHING WENT WRONG",
            status: false,
            code: 500,
            error: error.message
        });
    }
}

// USER DELETE


exports.userDeleteById = async(req,res)=>{

    try {

        const id = req.params.id;
        await userModel.deleteOne({_id:id});

            res.status(status.OK).json({
                message: "USER DELETE SUCCESFULLY",
                status: true,
                code: 200
            })
        
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            message: "SOMETHING WENT WRONG",
            status: false,
            code: 500,
            error: error.message
        });
    }
}
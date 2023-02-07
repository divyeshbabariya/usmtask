const mongoose = require('mongoose');


const useSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
},{
    timestamps:true
},
{
    collection:"users",
})

module.exports=mongoose.model('users',useSchema)
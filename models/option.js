const mongoose = require("mongoose") ;

const optionSchema = new mongoose.Schema({
//    stores the option text
    text: {
        type:String ,
        required:true ,
        unique : true ,
    } ,
    votes :{
        type:Number ,
        default:0
    },
    // stores the relevant question for the option
    question :{
        type :mongoose.Types.ObjectId ,
        ref:"Questions"
    },
    link_to_vote:{
        type :String 
    }
}) ;


const Options = mongoose.model("Options",optionSchema) ;
module.exports =Options ;
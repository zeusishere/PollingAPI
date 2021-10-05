const mongoose =require("mongoose") ;
const {Schema} = mongoose;
const questionSchema = new Schema ({
    // stores the question
    title:{
        type:String ,
        required : true ,
    },
    // stores an array of options available to the question
    options: [ {
            type:mongoose.Types.ObjectId ,
             ref:"Options"
      
    }]
}) ;
const Questions = mongoose.model("Questions", questionSchema) ;
module.exports = Questions ;
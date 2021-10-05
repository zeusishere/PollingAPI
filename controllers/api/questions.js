const Questions = require("../../models/questions");
const Options = require("../../models/option") ;

// action to view a question
module.exports.viewQuestion = async (req, res) => {
    try {
        let question = await Questions.findById(req.params.id);
        if (question) {
            question=await question.populate({path:"options"}) ;
            return res.json((question));
        }
    }
    catch (err) {
        return res.json({ message: "Question not Found in the Database  !" });
    }
}
// action to create a new question
module.exports.createQuestion = async (req, res) => {
    console.log(req.hostname) ;
    try {
        if (req.body.title) {
            let question = await Questions.create({ title: req.body.title });
            return res.json({
                message: "created the question successfully ! ",
                data: question
            });
        }
    }
    catch (err) {
        // console.log("err is :", err)
        return res.json({ message: "Error creating a new question ! question title cannot be empty " })
    }
}
//  action to add a new option to a given question
module.exports.createOption = async (req, res) => {

    try {
       
         if(req.body.option.length == 0)
        {
            return res.json({message:"cannot add empty option"})
        }
        let question = await Questions.findById(req.params.id);
        console.log(question) ;
        if (question )
        {
            let createdOption = await new Options({text:req.body.option , question:req.params.id }) ;
            // create a link to vote for the object
            createdOption.link_to_vote = `https://${req.hostname}/options/${createdOption._id}/add_vote` ;
            createdOption.save();
            question.options.push(createdOption._id);
            question.save();
            let body = await question.populate({path:"options"}) ;
            console.log("body is " ,createdOption)
            res.json({
                "message": "successfully added option",
                body: body
            });
        }
       
    }
    catch (err) {
        console.log(err)
        return res.json({ message: "Something went wrong ! cannot add option" });
    }
}
// action to delete a question with associated options
module.exports.deleteQuestion =async  (req, res) =>
{
        // the fn below deletes question if found and return the count of deleted question
        console.log(typeof (req.params.id))
        let question = await Questions.findByIdAndDelete( req.params.id );
        console.log(question) ;
        if(question  ) 
        {
          await Options.remove({question:req.params.id}) ;
         return res.json({
            "message": "successfully deleted question",
            body: question
        });
        }
    
    
        return res.json({ message: " cannot delete ! Question not Found in the Database  " });

}
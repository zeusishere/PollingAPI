const Questions = require("../../models/questions");
const Options = require("../../models/option");
// action to delete an option
module.exports.deleteOption = async (req, res) => {
     try 
     {  
        //  delete option from Options collection
        let deletedOption = await Options.findByIdAndDelete(req.params.id);
        // delete the respective option from options array of concerned  Question document
        let q = await Questions.updateOne(
            { id: deletedOption.question },
            { $pull: { options: { $in: [req.params.id] } } }
        ) ;
        res.json({ message: "deleted option successfully" })

    }
     catch(err)
    {
        res.json({ message: "there was some error deleting the option" })
    }
} ;
// increment the votes for an option to a question
module.exports.addVote =async (req ,res) =>
{
    try
    {
        // increment the votes for the option
    let updatedOption = await  Options.findByIdAndUpdate(req.params.id ,{ $inc : {votes:1 } },{new:true} );
    if(updatedOption )
    return res.json({message:"successfully voted !",
        body:updatedOption         
})
else
throw "no such option" ;
    } catch(err)
    {
        return res.json({message:"There was some error while voting !"}) ;
    }

}
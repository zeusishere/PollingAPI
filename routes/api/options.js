const optionsController = require("../../controllers/api/options");
const express= require("express") ;
const router = express.Router() ;
router.delete("/:id/delete", optionsController.deleteOption ) ;
router.post("/:id/add_vote",optionsController.addVote ) ;

module.exports = router ;
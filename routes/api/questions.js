const questionsController = require("../../controllers/api/questions");
const express= require("express") ;
const router = express.Router() ;
router.get("/:id", questionsController.viewQuestion ) ;
router.post("/create",  questionsController.createQuestion ) ;
router.post("/:id/options/create", questionsController.createOption) ;
router.delete("/:id/delete",questionsController.deleteQuestion )
module.exports = router ;
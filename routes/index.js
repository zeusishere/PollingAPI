const { application } = require("express");
const express= require("express") ;
const router = express.Router() ;
// redirecting to api/questions
router.use("/questions",require("./api/questions")) ;
// redirecting to application/options
router.use("/options",require("./api/options")) ;
module.exports = router ;
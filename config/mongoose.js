const mongoose = require("mongoose") ;
// mongoose.connect('mongodb+srv://shubham:2424554@cluster0.e6nsv.mongodb.net/CvsDb?retryWrites=true&w=majority') ;
mongoose.connect('mongodb+srv://shubham:2424554@cluster0.zhez0.mongodb.net/PollingAPI?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }) ;
const db = mongoose.connection ;
db.on("error", console.error.bind(console,"connection error :cannot connect to the db") ) ;
db.once("open" , ()=>
{
    console.log("we have successfully connected to db")
} );


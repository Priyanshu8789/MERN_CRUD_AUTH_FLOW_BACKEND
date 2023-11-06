const mongoose = require("mongoose");

const DB = "mongodb+srv://Priyanshuji:Pandey1@cluster0.fza1w4y.mongodb.net/MERN_CRUD?retryWrites=true&w=majority"
mongoose.connect(DB,{
        useUnifiedTopology:true,
        useNewUrlParser:true
}).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err);
    
})



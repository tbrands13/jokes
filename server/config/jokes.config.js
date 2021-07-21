const mongoose = require("mongoose");
const db_name = "jokes_db";

mongoose.connect(`mongodb://localhost/${db_name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("You're good to go boss"))
    .catch((err)=>console.log("Something went wrong chief",err))
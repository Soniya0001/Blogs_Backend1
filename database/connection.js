const mongoose =require("mongoose");
const connection = async() =>{
    try{
        await mongoose.connect(`${process.env.MONGO_DB_URI}`)
        .then(() => console.log("Connected to the database"))
    }catch(error){
        console.log(error)
    }
};

connection();
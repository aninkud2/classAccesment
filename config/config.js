
const mongoose =  require("mongoose");
const Db =  "mongodb+srv://ajoluwatimilehin:1PIfh4Sn05TcpKoN@cluster0.q2hofto.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(Db).then(()=>{
    console.log("Database Connected Successfully!")
}).catch((error)=>{
    console.log(error.message)
})

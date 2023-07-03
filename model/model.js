const mongoose = require ('mongoose')

const foodModel = new mongoose.Schema({
  
    branch:{type:String,required:[true,"branch is required"],unique:true},
    
    adress:{type:String,required:true},
    refMax: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
           
    }],
    
    citizenMeal: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment" 
    }],
       
    chickwizz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }]



},
 {timestamps: true}
)
const ress = mongoose.model('blogPost', foodModel)
module.exports = ress



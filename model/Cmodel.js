const mongoose = require ('mongoose')

const foodModel = new mongoose.Schema({
    refmax: {
        type:Object,
    
    },
    citizenMeal: {
      
        type:Object},
       
    chickwizz: {
        type: Object,
    
    },
   link:{type:mongoose.Schema.Types.ObjectId, ref: "blogPost"}
},



  {timestamps: true
})
const food = mongoose.model('comment', foodModel)
module.exports = food;
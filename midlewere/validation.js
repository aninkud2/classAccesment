const Validator = require('fastest-validator')

const validator = new Validator();

const createfoodSchema = {
    citizenMeal:{
        type:"Object",
        required:true,
    },
    
    chickwizz:{
        type:"Object",
        required:true,
    },

};
module.exports ={
    validator,
    createfoodSchema
}
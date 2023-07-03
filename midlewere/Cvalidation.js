const Validator = require('fastest-validator')

const validator = new Validator();

const createcommentSchema = {
    refmax:{
        type:"Object",
        required:true,
    },
    
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
    createcommentSchema
}
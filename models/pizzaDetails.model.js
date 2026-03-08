const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const pizzaDetailsSchema = new Schema({
    pizzaName:String,
    pizzaPrice:Number,
    size:String,
    imageUrl:String,
    mealType:{
        type:String,
        enum:['veg','nonveg'],
        default:'veg'
    },

})

module.exports = mongoose.model('pizzaDetails',pizzaDetailsSchema)
const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    "productName":{
        type:String,
        require:true
    },
    "productPrice":Number,
    "productQuantity":Number,
    "productInStock":String,
    "createdAt":{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("product",productSchema)
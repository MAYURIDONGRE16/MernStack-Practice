const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
  "userName":String,
  "userEmail":{
    type:String,
    require:true,
    unique:true
  },
  "userPass":String,

    "createdAt":{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("user",userSchema)
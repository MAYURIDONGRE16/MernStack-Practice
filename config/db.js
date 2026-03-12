const mongoose=require('mongoose')
const connection=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/userdb')
        console.log('db connected successfully')
        console.log(mongoose.connection.readyState)
    }catch(err){
        console.log('db connection failed',err)
    }
}
connection()

module.exports=connection
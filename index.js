const express=require('express')
const app=express()


app.use(express.urlencoded({extended:true}))


app.use(express.static('public/'))

const connection=require('./config/db')

const userchema = require('./model/userSchema');
const userSchema = require('./model/userSchema');

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render("login.ejs")
})

app.post('/dashboard',async(req,res)=>{
    
    try{

        const result=new userSchema(req.body)
        await result.save()
        res.render('dashboard.ejs')
        

    }catch(err){
        console.log("server error",err)
    }
})

app.get('/view_users',async(req,res)=>{
    try {
        const result=await userchema.find()
        

        const obj={data:result}
        res.render("view_user.ejs",obj)

    } catch (error) {
        console.log('data not found')
    }
})

app.get('/delete-user/:id',async(req,res)=>{
    try {
       var id=req.params.id
       await userSchema.findByIdAndDelete(id)
       res.redirect('/view_users')
    } catch (error) {
        console.log('cannot delete user',err)
    }
})

app.get('/edit-user/:id',async(req,res)=>{
    try {
        var id=req.params.id
        const result=await userSchema.findById(id)
         const obj={data:result}
         res.render('update_user.ejs',obj)
    } catch (error) {
        console.log('internal server error',error)
    }
})

app.post('/update-user/:id',async(req,res)=>{
    try {
        var id=req.params.id
        await userSchema.findByIdAndUpdate(id,req.body)
        res.redirect('/view_users')

    } catch (error) {
        console.log('cannot update user',error)
    }
})

const productSchema=require('./model/productSchema')

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.post('/submit-product',async(req,res)=>{
    try{
        const result=new productSchema(req.body)
        await result.save()
        // console.log('product added')
        res.redirect('/view-products')
    }catch(err){
        console.log('internal server error')
        console.log(err)
        // res.send('internal server error')
    }
})

app.get('/view-products',async(req,res)=>{
    try{
        const result=await productSchema.find()
        

        const obj={data:result}
        res.render('view_product.ejs',obj)
        // console.log('product data fetched')

    }catch(err){
        console.log('error while fetching data',err)
    }
})

app.get('/delete-product/:id',async(req,res)=>{

    try{
        
        var id=req.params.id
        await productSchema.findByIdAndDelete(id)
        // res.send('product deleted'+id)
        res.redirect('/view-products')
        

    }catch(err){
        console.log('error while deleting',err)
    }
    
})

const HOST='127.0.0.1'
const PORT=3000

app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})
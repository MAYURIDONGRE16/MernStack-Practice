const express=require('express')
const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.static('public/'))

const connection=require('./config/db')

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
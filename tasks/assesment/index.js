const express=require('express')

const app=express()


app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/user',(req,res)=>{
    res.render('user.ejs')
})

const PORT=5000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})
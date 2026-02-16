const express=require('express');
const app=express()

app.use((express.static('public/')))

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/about',(req,res)=>{

    const skill=['html','css','jss','mongodb']
    const obj={
        'id':1,
        'name':'mayuri',
        'email':'mayuri@gmail.com'
    }

    const onBoard=false
    const result={skill:skill,obj:obj,onBoard:onBoard}
    res.render('about.ejs',result)
})

app.get('/contact',(req,res)=>{
    res.render  ('contact.ejs')
})

app.use((req,res)=>{
    // res.send('404 page not found')
    res.render('pagenotfound.ejs')
})

const PORT=3000;
const HOST='127.0.0.1';
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})
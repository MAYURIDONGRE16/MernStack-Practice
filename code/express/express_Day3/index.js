const express=require('express');

const app=express();

app.use(express.static('public/'))

app.get('/',(req,res)=>{
    // res.send('<h1>server is running</h1>')

    // use to render html pages
    res.render('home.ejs')
})

app.get('/about',(req,res)=>{

    const obj={
        "name":'mayuri',
        "email":'mayuri@2003'
    }
    // res.send(obj)

    // result acts as en envolope but we have to execcess data only
    const result={data:obj}

    res.render('about.ejs',result)

    // res.send('<h1>about</h1>')
})

app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

app.use((req,res)=>{
    res.send('<h1>404 Page Not Found</h1>')
})

const PORT=3000;
const HOST='127.0.0.1';
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})
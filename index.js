const express=require('express')

const app=express()


app.use(express.static('public/'))

var url=require('url')

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})

app.get('/saveform',(req,res)=>{

    var urldata=url.parse(req.url,true)
    // res.send(urldata.query)
    // data must be passed in an obhect
    const obj={data:urldata.query}

    res.render('dashboard.ejs',obj)

    // res.send('form is successfully submited')
})

// http: url method
// //127.0.0.1:3000-port
// /saveform -pathname
// ?
// username=mayuri
// &userId=mayuridongre190%40gmail.com
// &userpass=bfefe
// &address=kjnfkjdfd

app.use((req,res)=>{
    res.send('404 page not found')
})

const PORT=3000;
const HOST='127.0.0.1';
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})
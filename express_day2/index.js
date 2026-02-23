const express=require('express');

const app=express();
// middleware to serve static file
app.use(express.static('public/'))


const menu=`
    <ul>
<li ><a href="/">home </a> </li>
<li ><a href="/contact">contact </a> </li>
<li ><a href="/about">about </a> </li>
</ul>

`

app.get('/',(req,res)=>{
    res.send(menu+"<h1>Home page</h1>")
})

app.get('/contact',(req,res)=>{

    const obj={
        name:'mayuri',
        email:'mayuri@gmail.com'
    }
    res.send(obj)
    // res.send(menu+"<h1>contact page</h1>")
})

app.get('/about', (req, res) => {
    res.send(menu + `
        <h1>about page</h1>
        <img src="download.jpg" alt="laptop"/>
    `)
})

// fallback routing middleware
app.use((req,res)=>{
    res.send('<h1>page not found</h1>'+menu)
    

})

const PORT='3000'
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT} `)
})
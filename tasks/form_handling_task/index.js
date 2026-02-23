const express=require('express')

const app=express()

var url=require('url')

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render('product_details.ejs')
})

app.post('/saveform',(req,res)=>{

    const obj={data:req.body}

    // const urldata=url.parse(req.url,true)
    // console.log(urldata.query)
    res.render('dashboard.ejs',obj)
})


const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})
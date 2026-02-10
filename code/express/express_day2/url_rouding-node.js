const http = require('http')
const url = require('url')
const app = http.createServer((req, res) => {

    const urldata = url.parse(req.url, true)
    console.log(urldata)

    if(urldata.pathname==='/'){
        res.write('home page')
    }
    
    else if(urldata.pathname === '/contact'){
        res.write('contact page')
    }
    else if(urldata.pathname === '/about'){
        res.write('about page')
    }
    else{
        res.write('page not found')
    }

    res.end()
})
const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT} `)
})
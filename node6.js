const http=require('http');
const app=http.createServer((req,res)=>{


    // method-to write html code we need built-in method
    res.writeHead(200,{'content-type':'text/html'})

    res.write("<input type=text placeholder='enter your name' />")

    res.write("<h1 style='color:red;background-color:aqua;padding:30px'>hello</h1>")

    res.end();
})

const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT} `)
})
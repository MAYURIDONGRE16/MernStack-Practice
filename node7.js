const http=require('http');
const url=require('url');

const app=http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text/html'})

    res.write("<h1 style=>Node server started</h1>");
    console.log(undefined + 1);
    console.log(null + 1);
    console.log(true + false);
    console.log("5" + 3);

    console.log("5" - 3);

    console.log("5" * "2");
    console.log("5" / 0);
    console.log(NaN + 1);
    console.log(typeof NaN);

    console.log(typeof null);
console.log(10 == "10");

console.log(false == "0");
console.log(false ==="0");
console.log([] + []);
console.log([] + {});







    res.end();

})

const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT}`);
})
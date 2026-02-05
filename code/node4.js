const http=require('http')
const url=require('url')


const app=http.createServer((req,res)=>
    {
    res.write("<h1>Node js up...</h1>");

    // const url_link="https://www.google.com/search?q=iphone&oq=iphone&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyDQgBEC4YsQMYgAQY5QQyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyDQgEEC4YsQMYgAQY5QQyDQgFEC4YsQMYgAQY5QQyDQgGEC4YsQMYgAQY5QQyDQgHEC4YsQMYgAQY5QQyDQgIEC4YsQMYgAQY5QTSAQgxNDQ2ajBqN6gCCLACAfEFIibx7BkEjA7xBSIm8ewZBIwO&sourceid=chrome&ie=UTF-8"



    const url_link="http://127.0.0.1:3000/about?q=hello+dear&name=mayuri&email=mayuri@gmail.com"
    const result=url.parse(url_link,true)
    // res.write(JSON.stringify(result))
    console.log(result)
    res.end("response end")

})

const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT} `)
})
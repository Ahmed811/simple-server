// const http=require('http')

// let app=http.createServer(function (req,res){
//     if(req.url=="/")
//         res.end('hello to my server')
//     else if(req.url=="/about")
//         res.end("about")
//     else
//         res.end("ERORR 404")
// })


// app.listen(4000)

const express=require('express')
const app=express()

app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send(`
    <form action="/answer" method="POST">
        <p>what is the color of the sky</p>
        <input name="skyColor"/>
        <button>submit answer</button>
    </form>
    `)
})

app.post('/answer',(req,res)=>{
 if(req.body.skyColor.toUpperCase()=="BLUE"){
     res.send(`<p>congratulation</p>
       <a href="/">back to home</a>`)
 }else{
    res.send(`<p>wrong</p>  <a href="/">back to home</a>`)
 }
})

app.get('/answer',(req,res)=>{
res.send('nothing here')
})
app.listen(4000,console.log("server running"))
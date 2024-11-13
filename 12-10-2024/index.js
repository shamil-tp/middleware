let loginPage = (req,res)=>{
    return res.render('TEMP');
}
let middleWare =(req,res,next)=>{
    console.log(req.url)
    next()
}
const express = require('express')
const app = express()
app.set('view engine','ejs')
app.set('views','VIEWS')
app.use(middleWare)
app.get('/hi',(req,res)=>{
    return res.send("<h1>hello</h1>")
})
app.get('/login',loginPage)
app.listen(3030)
//work aavanam!important
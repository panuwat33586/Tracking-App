require('./models/User')
const express = require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const authRoutes=require('./routes/authRoutes')
const requireAuth=require('./middlewares/requireAuth')

const app =express()

app.use(bodyParser.json())
app.use(authRoutes)

const mongoUri=
'mongodb+srv://panuwat33586:xialmiao@cluster0-r82tl.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useCreateIndex:true
});
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance')
})
mongoose.connection.on('error',(err)=>{
    console.log('Error connection to mongo',err)
})

app.get('/',requireAuth,(req,res)=>{
  res.send(`Your email: ${req.user.email}`)
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})


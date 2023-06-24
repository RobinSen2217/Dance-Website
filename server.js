// Importing modules
const express=require('express')
const fs=require('fs')
const path=require('path')
const app=express()
const mongoose=require('mongoose')
const port=80


// Setting up Mongoose stuff
mongoose.connect('mongodb://127.0.0.1:27017/footworkSite',{useNewUrlParser:true,useUnifiedTopology:true})

var contactSchema=mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    address:String,
    concern:String
})
var contactModel=mongoose.model('DanceContact',contactSchema)

// Setting Static stuff
app.use('/static',express.static('static'))

// Setting views and view engine
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

// Setting form stuff
app.use(express.urlencoded())

//Setting endpoints
app.get('/',(req,res)=>{
    res.status(200).render('home.pug')
})
app.get('/Contact',(req,res)=>{
    res.status(200).render('contact.pug',{'title':'Contact'})})

app.post('/Contact',(req,res)=>{
    var contactData=new contactModel(req.body)
    contactData.save().then(()=>{
        res.status(200).render('contactSubmitted.pug',{'title':'Submitted'})
    }).catch(()=>{
        res.status(400).send('Item not saved to database.Some Error occured...')
    })
})
app.get('/Events',(req,res)=>{
    res.status(200).render('events.pug',{'title':'Events'})})

//Running the server
app.listen(port,()=>{
    console.log('server is running successfully')
})
const express = require('express')
const app = express()
const path = require('path')
const  dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 4000
app.get('/', (req,res) => {
    res.send(`Hello man Welcome again`)
})
app.get('/page2',(req,res) => {
    res.sendFile(path.join(__dirname, "form.html"))
})
app.listen(4000,()=>{
    console.log(`Server is Running PORT ${PORT}`);
})
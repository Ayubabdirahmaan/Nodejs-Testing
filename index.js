import express from 'express'
const app = express()


app.get('/', (req,res) => {
    res.send(`Hello man`)
})

app.listen(4000,()=>{
    console.log('Server is Runing 4000');
})
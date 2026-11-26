import express from 'express'
const app = express()
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 4000


app.get('/', (req,res) => {
    res.send(`Hello man Welcome again`)
})

app.listen(PORT,()=>{
    console.log(`Server is Running PORT ${PORT}`);
})
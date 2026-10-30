const express=require('express')
const cors=require('cors')
require('dotenv').config()
//const db=require("./config/db")
const routes=require('./routes')
const app=express();
app.use(cors()) //optional
app.use(express.json())
app.use('/api', routes)
const PORT=process.env.PORT;
app.listen(PORT, ()=>{
    console.log('Server is walking on port ${PORT}');
})
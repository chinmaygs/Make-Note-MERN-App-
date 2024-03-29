const connectDB = require("./Db/connext")
const cors=require('cors')
const express=require("express")
const noterouter=require("./Router/note")

const app=express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/Note',noterouter.router)


const start=async ()=>{
    try{
        await connectDB('Enter DB URL...')
        console.log("DB Connected")
        app.listen(3000,console.log("server on 3000!!"))

    }
    catch(error){
        console.log('error')
    }
}
start()

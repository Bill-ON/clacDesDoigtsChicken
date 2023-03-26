const express = require('express')
const app = express()
const mongoose = require('mongoose')

const urlDB = "mongodb+srv://chicken:nugget@cluster0.tpcwyun.mongodb.net/?retryWrites=true&w=majority"

async function connectDB() {
    try {
        await mongoose.connect(urlDB);
        console.log("Connected to DB");
    } catch(e) {
        console.error(e);
    }
}

connectDB();


app.use(express.json())

app.get('/', async (req, res) => {
    res.json("Hello There")
})

const chickenRouter = require('./routes/chicken')
app.use('/chicken', chickenRouter)

app.listen(3007, () => console.log('Server Started on port 3007'))


require("./config/config")

const express = require('express')
const router = require('./router/router')
const Router = require('./router/Crouter')

const PORT = 7890;
const app = express()
app.use(express.json())

app.use('/api',router)
app.use('/api',Router)

app.get('/',(req,res) => {
    res.status(200).json({ 
        message: "WELCOME"
        }) 
})




app.listen(PORT, () => {
    console.log(`Server is running on port:` + PORT)
  })


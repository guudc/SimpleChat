const express = require('express')
const { prompt } = require('./src/controller/control')
const fs = require('fs')
const app = express()
const port = 3000
const path = __dirname  + "/web/"
app.use(express.json())
//Configuring route
app.post('/chat', prompt)
app.get("*", (req, res) =>{
    let tm = req.url
    if(fs.existsSync(path + tm)){
        res.sendFile(path + tm)
    }
    else{
        res.status(404).json({
            success: false,
            message: "Page not found",
            error: {
                statusCode: 404,
                message:
                    "You are trying to access a route that is not defined on this server."
            }
        })
    }
})
app.listen(port, () => {
  console.log(`Web app running at http://localhost:${port}`)
})
const express = require('express')
const app = express()

const path = require('path')

const Rollbar = require("rollbar");

const rollbar = new Rollbar({
  accessToken: '28fecf32b2b340ea9985d37e9d62e652',
  captureUncaught: true,
  captureUnhandledRejections: true
});
rollbar.log("Hello World")

app.use(express.static("public"))
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public'))
rollbar.info('html file served successfully')
})

app.get('/endpoint', (req,res) => {
    functionNull()
    rollbar.error("the endpoint doesnt exist")
})

const port = process.env.PORT || 4005

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`)
})
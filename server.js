const express = require('express')
const app = express()

app.get('/', (req, res) => [
    res.send("Helllo node api")
])
app.listen(3003, ()=> {
    console.log(`Port is running on 3003`)
})
app.listen(3003, ()=> {
    console.log(`Port is running on 3003`)
})

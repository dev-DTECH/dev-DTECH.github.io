let express = require('express')
let app =express()

app.use(express.static("./"))

app.listen(process.env.PORT || 3000 ,() =>{
    console.log('server on fire')
} )
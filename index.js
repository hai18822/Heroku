const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('sdfsdfdsf')
})

app.listen(8000,()=>{
    console.log('port: 8000');
})
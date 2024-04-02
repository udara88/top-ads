const express = require('express')
const app = express()

const posts = [
    {
        username:'isuru',
        title:'Post 1'
    },
    {
        username:'dewanga',
        title:'Post 2'
    }
]

app.listen(3001,()=>{
    console.log('Server is runing on port 3001')
})
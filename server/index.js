const express = require('express')
const path = require('path')
const port = process.env.PORT || 3009
const app = express()
// this assumes that all your app files
// `build` directory relative to where your server.js is
app.use(express.static(__dirname + '/build'))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(port)
console.log("Server started on port " + port)
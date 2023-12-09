const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
    console.log('Started listening to port 3000');
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'))
})

app.get("/blogs", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/blogs.html'))
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/views/404.html')) 
})
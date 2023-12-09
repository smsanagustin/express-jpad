const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
    console.log('Started listening to port 3000');
})

app.use(express.urlencoded( { extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'))
})

app.get("/blogs", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/blogs.html'))
})

app.post('/blogs', (req, res) => {
    console.log(req.body)
})

app.get('/blogs/:blogid', (req, res) => {
    res.send(req.params.blogid)
})

app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/create_blog.html'))
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/views/404.html')) 
})
const express = require('express');
const path = require('path');
const app = express();
const blogRoutes = require('./routes/blogRoutes');

app.listen(3000, () => {
    console.log('Started listening to port 3000');
})

app.use(express.urlencoded( { extended: true }));
app.use(blogRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'))
})

app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/create_blog.html'))
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/views/404.html')) 
})
const path = require('path');

const viewBlogs = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views/blogs.html'))
}

const printFormValues = (req, res) => {
    console.log(req.body)
}

const printBlogid = (req, res) => {
    res.send(req.params.blogid)
}

module.exports = { viewBlogs, printFormValues, printBlogid }
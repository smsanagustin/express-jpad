const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/blogs", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views/blogs.html'))
})

router.post('/blogs', (req, res) => {
    console.log(req.body)
})

router.get('/blogs/:blogid', (req, res) => {
    res.send(req.params.blogid)
})

module.exports = router;
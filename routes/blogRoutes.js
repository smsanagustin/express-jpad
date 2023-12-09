const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get("/", blogController.viewBlogs)
router.post('/', blogController.printFormValues)
router.get('/:blogid', blogController.printBlogid)

module.exports = router;
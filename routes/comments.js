const express = require('express');

const router = express.Router();

const CommentsController = require('../controller/comments_controller');

router.post('/create', CommentsController.create);

module.exports = router;
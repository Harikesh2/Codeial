const express = require('express');

const router = express.Router();

const postController = require('../controller/post_controller');

router.post('/create', postController.create);
router.get('/destory/:id', passport.checkAuthentication , postController.destory);

module.exports = router;
const express = require('express');
const CommentController = require('../controllers/CommentController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/', authMiddleware, CommentController.createComment);
router.get('/', CommentController.getComments);

module.exports = router;
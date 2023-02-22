const Comment = require('../models/Comment');

class CommentController {
    async createComment(req, res) {
        try {
            const comment = await Comment.create({
                text: req.body.text,
                userId: req.user.id
            });
            res.status(201).json(comment);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }

    async getComments(req, res) {
        try {
            const comments = await Comment.findAll();
            res.json(comments);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}

module.exports = new CommentController();
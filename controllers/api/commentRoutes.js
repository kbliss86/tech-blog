const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// create a comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            // use the id from the session
            user_id: req.session.user_id
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// get comments for specific post 
router.get('/post/:id', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: { post_id: req.params.id },
            include: [{ model: User, attributes: ['username'] }]
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a comment
router.put('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, {
            where: { id: req.params.id }
        });
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: { id: req.params.id }
        });
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
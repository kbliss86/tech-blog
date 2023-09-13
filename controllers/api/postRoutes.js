const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//retrieve all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username'] }, { model: Comment, attributes: ['comment_text', 'user_id', 'post_id'] }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//need to add withAuth to this route
//retrieve a single post
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] }, { model: Comment, attributes: ['comment_text', 'created_At', 'user_id', 'post_id'], include: [{ model: User, attributes: ['username'] }] }],
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        const post = postData.get({ plain: true });
        console.log(post);
        res.render('post', { post, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

//create a new post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            post_title: req.body.post_title,
            post_text: req.body.post_text,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

//update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(
            {
                post_title: req.body.post_title,
                post_text: req.body.post_text,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            }
        );
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
// get all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User }, { model: Comment }],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});
// get specific post
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ['username'] },
                { model: Comment, 
                    include: [{User, attributes: ['username'] }],
            }
        ]
        });
        const post = postData.get({ plain: true });
        res.render('homepage', { post });
        } catch (err) {
            res.status(500).json(err);
        }
    });
// // Get login page
// router.get('/login', async (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/');
//         return;
//     }
//     res.render('login');
// });
// // Get signup page
// router.get('/signup', async (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/');
//         return;
//     }
//     res.render('signup');
// });

module.exports = router;
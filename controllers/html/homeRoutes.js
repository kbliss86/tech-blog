const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');



// Get login page
router.get('/login', async (req, res) => {
    console.log("login route");
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
// Get signup page
router.get('/signup', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

//prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['username', 'ASC']],
        });
        const users = userData.map((project) => project.get({ plain: true }));

        const postData = await Post.findAll({
            include: [{ model: User }, { model: Comment }],
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            users,
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// // get specific post
// router.get('/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             include: [
//                 { model: User, attributes: ['username'] },
//                 { model: Comment, 
//                     include: [{User, attributes: ['username'] }],
//             }
//         ]
//         });
//         const post = postData.get({ plain: true });
//         res.render('homepage', { post });
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     });


module.exports = router;
const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

// Redirect from root to /home
router.get('/', (req, res) => {
    res.redirect('/home');
});

//set up HTML routes
router.use('/home', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
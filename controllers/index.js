const router = require('express').Router();

app.get('/', (req, res) => {
    res.redirect('/home');
});

const apiRoutes = require('./api/index.js');
const homeRoutes = require('./html/index.js');

//set up routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
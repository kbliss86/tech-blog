const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./html/homeRoutes');
// const dashboardRoutes = require('./html/dashboardRoutes');

// router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;
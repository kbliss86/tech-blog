const router = require('express').Router();

const apiRoutes = require('./api/index.js');
const homeRoutes = require('./html/homeRoutes');
// const dashboardRoutes = require('./html/dashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;
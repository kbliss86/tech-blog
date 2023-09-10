const router = require('express').Router();
const routes = require('./userRoutes');

router.use('/users', routes);

module.exports = router;
const router = require('express').Router();
const routes = require('./userRoutes.js');
const postRoutes = require('./postRoutes.js');
const commentRoutes = require('./commentRoutes.js');

//set up API routes
router.use('/users', routes);
router.use('/post', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
const router = require('express').Router();
const routes = require('./userRoutes.js');
const postRoutes = require('./postRoutes.js');
const commentRoutes = require('./commentRoutes.js');

console.log("before users")
router.use('/users', routes);
console.log("after users")
console.log("before posts")
router.use('/post', postRoutes);
console.log("after posts")
console.log("before comments")
router.use('/comments', commentRoutes);
console.log("after comments")

module.exports = router;
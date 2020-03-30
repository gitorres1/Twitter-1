var express = require('express');
var router = express.Router();
const followerController = require ('../controllers/follower.controller'); 
/**
 * POST Route to create user
 */
router.post ('/', followerController.createFollower);
/**
 * GET Route to list all users
 */
router.get('/', followerController.findAllFollowers);
/**
 * GET Route to find user by id
 */
router.get('/:idFollower', followerController.findOneFollower);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idFollower',followerController.updateFollower);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:follower', followerController.deleteFollowerByFollower);
/**
 * DELETE Route to delete all users
 */
router.delete ('/', followerController.deleteAllFollowers);

 // Export router
module.exports = router;
var express = require('express');
var router = express.Router();
const tweetController = require ('../controllers/tweet.controller'); 
/**
 * POST Route to create user
 */
router.post ('/', tweetController.createTweet);
/**
 * GET Route to list all users
 */
router.get('/', tweetController.findAllTweets);
/**
 * GET Route to find user by id
 */
router.get('/:idTweet', tweetController.findOneTweet);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idTweet',tweetController.updateTweet);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:tweet', tweetController.deleteTweetByTweet);
/**
 * DELETE Route to delete all users
 */
router.delete ('/', tweetController.deleteAllTweets);

 // Export router
module.exports = router;
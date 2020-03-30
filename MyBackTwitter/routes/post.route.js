var express = require('express');
var router = express.Router();
const postController = require ('../controllers/post.controller'); 

/**
 * GET Route to list all posts
 */
router.get('/', postController.findAllPosts);
/**
 * GET Route to find post by id
 */
router.get('/:idPost', postController.findOnePost);
/**
 * POST Route to create post
 */
router.post ('/', postController.createPost);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idPost',postController.updatePost);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:username',postController.deletePostByUsername);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',postController.deleteAllPosts);

/**
 * TASK:
 * CREATE THE ROUTES _________________________________________________________ 
 */
  
module.exports = router;
const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an tweet
 * @param {*} userObject JSON Object with User information
 */
async function createTweet (req, res) {      
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newTweetObject = {// CREATING THE OBJECT TO PERSIST
        tweet: req.body.tweet
    }
    dbManager.Tweet.create(newTweetObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * GEt all users
 */
async function findAllTweets (req, res){
    try {
        const tweets = await dbManager.Tweet.findAll ();//Execute query
        res.json({ data: tweets });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Get user by id
 */
async function findOneTweet (req, res){
    try {
        const { idTweet } = req.params;//Execute query
        const tweet = await dbManager.Tweet.findOne({ where: { idTweet: idTweet } });
        res.json(tweet);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update user
 */
async function updateTweet (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newTweetObject = {// CREATING THE OBJECT TO PERSIST
        tweet: req.body.tweet
    }
    const { idTweet } = req.params;//Execute query
    console.log("tweet: " + idTweet);
    dbManager.Tweet.update(newTweetObject, { where: { idTweet: idTweet } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newTweetObject); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Delete an existen user by username
 * @param {*} req 
 * @param {*} res 
 */
function deleteTweetByTweet (req, res){ 
    const { tweet } = req.params;//Execute query
    dbManager.Tweet.destroy( { where: { tweet: tweet } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * @param {*} req 
 * @param {*} res 
 */
function deleteAllTweets (req, res){
    dbManager.Tweet.destroy( { where: {} } )// EXECUTING THE DESTROY QUERY - INSERT THE OBJECT INTO DATABASE 
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.createTweet = createTweet; 
exports.findAllTweets = findAllTweets; 
exports.findOneTweet = findOneTweet; 
exports.updateTweet = updateTweet;
exports.deleteTweetByTweet = deleteTweetByTweet;
exports.deleteAllTweets = deleteAllTweets;
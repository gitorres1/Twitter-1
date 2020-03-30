const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an Follower
 * @param {*} userObject JSON Object with User information
 */
async function createFollower (req, res) {      
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newFollowerObject = {// CREATING THE OBJECT TO PERSIST
        followername: req.body.followername,
        creation_date: req.body.creation_date,
        idUser: req.body.idUser
    }
    dbManager.Follower.create(newFollowerObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function findAllFollowers (req, res){
    try {
        const Followers = await dbManager.Follower.findAll ();//Execute query
        res.json({ data: Followers });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Get user by id
 */
async function findOneFollower (req, res){
    try {
        const { idFollower } = req.params;//Execute query
        const Follower = await dbManager.Follower.findOne({ where: { idFollower: idFollower } });
        res.json(Follower);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update user
 */
async function updateFollower (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newFollowerObject = {// CREATING THE OBJECT TO PERSIST
        followername: req.body.followername,
        creation_date: req.body.creation_dater,
        idUser: req.body.idUser
    }
    const { idFollower } = req.params;//Execute query
    console.log("Follower: " + idFollower);
    dbManager.Follower.update(newFollowerObject, { where: { idFollower: idFollower } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newFollowerObject); }
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
function deleteFollowerByFollower (req, res){ 
    const { follower } = req.params;//Execute query
    dbManager.Follower.destroy( { where: { followername: follower } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
function deleteAllFollowers (req, res){
    dbManager.Follower.destroy( { where: {} } )// EXECUTING THE DESTROY QUERY - INSERT THE OBJECT INTO DATABASE 
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.createFollower = createFollower; 
exports.findAllFollowers = findAllFollowers; 
exports.findOneFollower = findOneFollower; 
exports.updateFollower = updateFollower;
exports.deleteFollowerByFollower = deleteFollowerByFollower;
exports.deleteAllFollowers = deleteAllFollowers;
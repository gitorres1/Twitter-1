const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
async function createUser (req, res) {    
    console.log(req.body);
    if (!req.body) {// verifica si el contenido esta vacio
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newUserObject = {// creacion de objeto
        username: req.body.username,
        creation_date: req.body.creation_date
    }
    dbManager.User.create(newUserObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// imprimir error en la consola
            res.status(500).send({ message: "*******rror occurred********" });// mensaje de error
        }
    );
}


exports.createUser = createUser;
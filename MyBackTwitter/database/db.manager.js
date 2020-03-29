const Sequelize = require ('sequelize');
const sequelizeConnection = require('./db.connection');

// import models

const UserModel = require ('../models/user.model');
const PostModel = require ('../models/post.model');


//init

const User= UserModel (sequelizeConnection, Sequelize);
const Post= PostModel (sequelizeConnection, Sequelize);

User.hasMany (Post, { foreingKey: 'idPost', sourceKey: 'idUser'});
post.belongsTo (User, { foreingKey: 'idUser', sourceKey: 'idPost'});


const models = {
    User: User,
    Post: Post
}


const db = {
    ...models,
    sequelizeConnection
}


module.exports = db;
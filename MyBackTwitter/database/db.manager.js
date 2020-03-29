const Sequelize = require ('sequelize');
const sequelizeConnection = require('./db.connection');

// import models

const UserModel = require ('../models/user.models');
const PostModel = require ('../models/post.models');


//init

const User= UserModel (sequelizeConnection, Sequelize);
const Post= PostModel (sequelizeConnection, Sequelize);

//forangkey
User.hasMany(Post, { foreignKey: 'idPost', sourceKey: 'idUser' });
Post.belongsTo( User, { foreignKey: 'idUser', sourceKey: 'idPost' });




const models = {
    User: User,
    Post: Post
}


const db = {
    ...models,
    sequelizeConnection
}


module.exports = db;
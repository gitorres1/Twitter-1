const dbconfig = require ('./db.config');
const sequelize = require ('sequelize');


const sequelizeConnetion = new sequelize(
dbconfig.DB,
dbconfig.USER,
dbconfig.PASSWORD,
{
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    operatiorsAliases: false,
    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    }
}

);



module.exports = sequelizeConnetion;
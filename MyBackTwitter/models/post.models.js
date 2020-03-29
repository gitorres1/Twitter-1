module.exports = (sequelize, Sequelize) =>{
    const Post = sequelize.define ("Post", {
        idPost: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
            message: Sequelize.STRING,
            creation_date: Sequelize.DATE
        },{
            tableName: "post"
        }
    
    );
    return Post;
}




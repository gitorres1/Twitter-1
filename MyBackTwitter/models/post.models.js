module.exports = (sequelize, Sequelize ) => {
    const Post = sequelize.define ('Post',
        {
            idPost:{
                type = Sequelize.INTEGER,
                primaryKEY: true,
                autoincrement: true
            },
            message: Sequelize.STRING,
            creation_date: Sequelize.DATE
        },{
            tableName: "post"
        }
    
    );
    return User;
}
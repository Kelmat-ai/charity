module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define('users', {
        // attributes
        user_id : {
        type: Sequelize.STRING,
        primaryKey: true,
        },
        username: {
        type: Sequelize.STRING
        // allowNull defaults to true
        },
        password: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        admin: {type: Sequelize.BOOLEAN},
        createdat: {type: Sequelize.DATE},
        updatedat: {type: Sequelize.DATE},
        }, {
            timestamps: false
        // options
        });
  
    return users;
  };
module.exports = (sequelize, Sequelize) => {
const charities = sequelize.define('chars', {
    // attributes
    id : {
    type: Sequelize.STRING,
    primaryKey: true,
    },
    charity_name: {
    type: Sequelize.STRING
    // allowNull defaults to true
    },
    website: {type: Sequelize.STRING},
    affiliation: {type: Sequelize.STRING},
    post_code: {type: Sequelize.STRING},
    city: {type: Sequelize.STRING},
    address: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    phone_number: {type: Sequelize.STRING},
    area_of_impact: {type: Sequelize.STRING},
    createdAt: {type: Sequelize.DATE},
    updatedAt: {type: Sequelize.DATE},
    }, {
    // options
    });

    return charities;
};
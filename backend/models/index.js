// const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    host     : process.env.PGHOST,
    user     : process.env.PGUSER,
    password : process.env.PGPASSWORD,
    database : process.env.PGDATABASE,
    dialect: 'postgres',
        });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./userModel.js")(sequelize, Sequelize);

module.exports = db;
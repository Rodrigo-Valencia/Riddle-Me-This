const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    'mysql://nvndth4bjksma9sz:l139shfz7dplamm2@eanl4i1omny740jw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gar2th1s4qvk1929'
);

module.exports = sequelize;
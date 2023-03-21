

//for this connection to work, you need a .env file with these creditials: (input your user and password)
// DB_NAME=ecommerce_db
// DB_USER=<your mysql username>
// DB_PW=<your mysql password>
// DB_HOST=localhost
// DB_PORT=3306



//needed code
require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PW,
      {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;

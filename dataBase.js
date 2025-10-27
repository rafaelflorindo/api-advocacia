/*const {Sequelize} = require ("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite", 
    storage:"./database.sqlite",
})


module.exports = sequelize;
*/

//npm install mysql2
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("projetoadvocacia", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306, // porta padrão do MySQL
    logging: false // opcional: remove logs SQL no console
});

module.exports = sequelize;

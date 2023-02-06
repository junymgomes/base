import Sequelize from "sequelize"

const sequelize = new Sequelize('basenodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
  });

  export default sequelize;
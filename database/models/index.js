import sequelize from "sequelize";
import "dotenv/config";
const sequelize =new sequelize(process.env.DB_NAME,process.env.DB_USERNAME, process.env.DB_PASSWORD || '',{
    host:process.env.DB_HOST,
    dialect:"mysql2"
});

export default sequelize;
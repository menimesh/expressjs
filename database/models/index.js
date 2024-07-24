import {Sequelize} from "sequelize";
import "dotenv/config";
const seq =new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME, process.env.DB_PASSWORD || '',{
    host:process.env.DB_HOST,
    dialect:"mysql"
});

export default seq;

// import { Sequelize } from 'sequelize';
// import 'dotenv/config';

// const sequelizeInstance = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD || '', // Handle empty password
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//   }
// );

// export default sequelizeInstance;

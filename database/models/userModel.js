import { DataTypes } from "sequelize";
import connection  from "./index.js";


const userModel=connection.define("User",{
 id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true,
 },
 username: {
  type: DataTypes.STRING,
  allowNull:false,
 },
 location: {
    type: DataTypes.STRING,
    allowNull:false,
   },
                            //   set(value){
                            //     this.setDataValue("username",value+ "Mr.");
                            //   },

})
export default userModel;

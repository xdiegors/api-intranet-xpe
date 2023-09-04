import Sequelize from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const database = new Sequelize(process.env.DB_CON, {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

export default database;

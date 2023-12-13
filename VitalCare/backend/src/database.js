import dotenv from "dotenv";
import Sequelize from "sequelize";
dotenv.config();

const database = new Sequelize({
  dialect: "postgres",
  username: process.env.DB_USERNAME || "avnadmin",
  password: process.env.DB_PASSWORD || "AVNS_Y_RqTKynOcQDiBvfAuP",
  host: process.env.DB_HOST || "vympnzaq-natan.a.aivencloud.com",
  port: process.env.DB_PORT || 24055,
  database: process.env.DB_NAME || "defaultdb",
  dialectOptions: {
    ssl: process.env.DB_SSL === "true" || true,
    // Adicione a seguinte opção para aceitar certificados autoassinados
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default database;

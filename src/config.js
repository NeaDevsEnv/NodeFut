import { config } from "dotenv";
config();

export default{
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabse: process.env.DB_DATABASE || '',
};
import dotenv from 'dotenv';


const Mysql = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    UserName: process.env.DB_USERNAME,
    Password: process.env.DB_PASSWORD || ""

}
const serverConfig = {
    port: 1337,
    host: "localhost"
}
const config = {
    data: Mysql,
    serverInfo: serverConfig
};

export default config;
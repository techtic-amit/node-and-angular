import config from "../../config/default";
import mysql from 'mysql';
import log from "../logger";


const params = {
    user: "root",
    password: config.data.Password,
    host: config.data.host,
    database: config.data.database || "spanish-learning"
}
log.info("DATA BASE INFO ", params.password)
const connect = async () => new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params);
    connection.connect((err) => {
        if (err) {
            reject(err);
            log.info(err);
            return;
        }
        log.info("successfully connected");
        resolve(connection);
    })

})

const Query = async (connection: mysql.Connection, query: string) => new Promise((resolve, reject) => {
    connection.query(query, connection, (err, result) => {
        if (err) {
            reject(err);
            log.info(err);
            return;
        }

        resolve(result);
    })
})



export default { connect, Query };
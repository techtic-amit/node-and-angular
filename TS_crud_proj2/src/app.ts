import express from 'express';
import config from '../config/default';
import log from './logger';
import routes from './routes';
var cors = require('cors')
const port = config.serverInfo.port;
const host = config.serverInfo.host;

const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`)


    routes(app);

})
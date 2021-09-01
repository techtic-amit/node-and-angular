import { Express, Request, Response } from "express";
import connect from "./db/connect";
import log from "./logger";
export default function (app: Express) {

    app.get("/api/test1", (req, res) => {
        let query = "SELECT id, name, image, created_at, updated_at, deleted_at FROM topics;"
        connect.connect().then(conn => {
            connect.Query(conn, query)
                .then(results => {
                    return res.status(200).json({
                        results
                    })
                }).catch((err) => {
                    log.error(err);
                    return res.status(500).json({
                        message: err.message,
                        err
                    })
                })
                .finally(() => {
                    conn.end();
                })


        }).catch((err) => {
            log.error(err);
            return res.status(500).json({
                message: err.message,
                err
            })
        })
    });


    app.post("/api/insertTopic", function (req, res) {
        var params = req.body;
        log.info(params)
        let insertQuery = `INSERT INTO topics(name, image)
        VALUES('${params.topicTitle}','${params.imgUrl}');`

        connect.connect().then(conn => {
            connect.Query(conn, insertQuery)
                .then(results => {
                    return res.status(200).json({
                        results
                    })
                }).catch((err) => {
                    log.error(err);
                    return res.status(500).json({
                        message: err.message,
                        err
                    })
                })
                .finally(() => {
                    conn.end();
                })
        }).catch((err) => {
            log.error(err);
            return res.status(500).json({
                message: err.message,
                err
            })
        })

    });

    app.post("/api/updateTopic", function (req, res) {
        var params = req.body;
        log.info(params)
        let updateQuery = `UPDATE topics
        SET name='${params.newTitle}'
        WHERE id=${params.id}`

        connect.connect().then(conn => {
            connect.Query(conn, updateQuery)
                .then(results => {
                    return res.status(200).json({
                        results
                    })
                }).catch((err) => {
                    log.error(err);
                    return res.status(500).json({
                        message: err.message,
                        err
                    })
                })
                .finally(() => {
                    conn.end();
                })
        }).catch((err) => {
            log.error(err);
            return res.status(500).json({
                message: err.message,
                err
            })
        })

    });

}


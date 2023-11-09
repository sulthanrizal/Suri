import { db } from "./Connect.js";

export function loginUsername(username) {
    return new Promise(function (resolve, reject) {
        db.get(`SELECT * FROM login WHERE username = ? `, [username], (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
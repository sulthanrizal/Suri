import { db } from "./connect.js";

export default class Mahasiswa {
    constructor(obj) {
        this.nim = obj.nim
        this.namasiswa = obj.namasiswa
    }
    save() {
        db.run(`INSERT INTO Mahasiswa VALUES (?,?)`, [this.nim, this.namasiswa], (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
    static find(next) {
        db.all(`SELECT * FROM Mahasiswa `, (err, data) => {
            if (err) console.log(data)
            next(data)
        })
    }
    static look(nim) {
        return new Promise(function (resolve, reject) {
            db.get(`SELECT * FROM Mahasiswa WHERE nim = ? `, [nim], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
    static create(nim, nama) {
        const databaru = new Mahasiswa({ nip: nim, namadosen: nama })
        return databaru.save()
    }
    static delete(nim) {
        return new Promise(function (resolve, reject) {
            db.run(`DELETE FROM Mahasiswa WHERE nim = ?`, [nim], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}
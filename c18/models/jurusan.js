import { db } from "./Connect.js"

export default class Jurusan {
    constructor(obj) {
        this.kodejurusan = obj.kodejurusan
        this.namajurusan = obj.namajurusan
    }
    save() {
        db.run("INSERT INTO Jurusan VALUES (?,?)", [this.kodejurusan, this.namajurusan], (err) => {
            if (err) {
                console.log(err)
            }
        })
    }

    static find(next) {
        db.all("SELECT * FROM Jurusan ", (err, data) => {
            if (err) console.log(data)
            next(data)
        })
    }

    static look(kodejurusan) {
        return new Promise(function (resolve, reject) {
            db.get("SELECT * FROM Jurusan WHERE kodejurusan = ?", [kodejurusan], (err, data) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(data)
                }
            })
        })
    }


    static create(kodejurusan, nama) {
        const databaru = new Jurusan({ kodejurusan: kodejurusan, namajurusan: nama })
        return databaru.save()
    }

    static delete(kodejurusan) {
        return new Promise(function (resolve, reject) {
            db.run("DELETE FROM Jurusan WHERE kodejurusan = ? ", [kodejurusan], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}
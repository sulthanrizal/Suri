import { db } from "./connect"

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
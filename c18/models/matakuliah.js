import { db } from "./connect";

export default class MataKuliah {
    constructor(obj) {
        this.idmatkul = obj.idmatkul
        this.matkul = obj.matkul
        this.sks = obj.sks
    }
}
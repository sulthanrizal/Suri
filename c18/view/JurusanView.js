import Table from "cli-table"
import { barrier } from "../university.db"

export function showJurusan(data = []) {
    var table = new Table({
        head: ['Kode Jurusan', "Nama Jurusan"],
        colWidths: [15, 30]
    })

    data.forEach((item) => {
        table.push([item.kodejurusan, item.namajurusan])
    })
    console.log(table.toString())

}

export function submenu() {
    barrier()
    console.log(`
        Silahkan pilih opsi dibawah ini :
        [1] Daftar Jurusan 
        [2] Cari Jurusan 
        [3] Tambah Jurusan
        [4] Hapus Jurusan
        [5] Kembali
        `)
    barrier()
}


export function search(data) {
    console.log(`
    =========================================
    Detail Jurusan dengan code : ${data.kodejurusan}
    Kode Jurusan : ${data.kodejurusan}
    Nama Jurusan : ${data.namajurusan}
    `)
}
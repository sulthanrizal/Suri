import { lines } from "../c18.js"
import Table from "cli-table"



export function showJurusan(data = []) {
    var table = new Table({
        head: ["NIM", "Nama", "Tanggal Lahir", "alamat", "Kode Jurusan", "Nama Jurusan"],
        colWidths: [15, 25, 15, 15, 15, 30]
    })

    data.forEach((item) => {
        table.push([item.nim, item.nama, item.lahir, item.alamat, item.kodejurusan, item.namajurusan])
    })
    console.log(table.toString())

}


export function submenu() {
    lines()
    console.log(`
        Silahkan pilih opsi dibawah ini :
        [1] Daftar Jurusan 
        [2] Cari Jurusan 
        [3] Tambah Jurusan
        [4] Hapus Jurusan
        [5] Kembali
        `)
    lines()
}



export function search(data) {
    lines()
    console.log(`
    Detail Jurusan dengan code : "${data.nim}"
    NIM          : ${data.nim}
    Nama         : ${data.nama}
    Kode Jurusan : ${data.kodejurusan}
    Nama Jurusan : ${data.namajurusan}
    `)
}


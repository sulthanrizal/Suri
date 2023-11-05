import { lines } from "../c18.js"
import Table from "cli-table"



export function showMahasiswa(data = []) {
    var table = new Table({
        head: ["NIM", "Nama", "Tanggal Lahir", "alamat", "Kode Jurusan", "Nama Jurusan"],
        colWidths: [15, 25, 15, 15, 15, 30]
    })

    data.forEach((item) => {
        table.push([item.nim, item.namasiswa, item.lahir, item.alamat, item.kodejurusan, item.namajurusan])
    })
    console.log(table.toString())

}


export function submenu() {
    lines()
    console.log(`
        Silahkan pilih opsi dibawah ini :
        [1] Daftar Mahasiswa 
        [2] Cari Mahasiswa 
        [3] Tambah Mahasiswa
        [4] Hapus Mahasiswa
        [5] Kembali
        `)
    lines()
}




export function showSearch(data) {
    lines()
    console.log(`
    Detail Mahasiswa dengan NIM : "${data.nim}"
    NIM          : ${data.nim}
    Nama         : ${data.namasiswa}
    Alamat       : ${data.alamat}
    Jurusan      : ${data.idjurusan}
    `)
}


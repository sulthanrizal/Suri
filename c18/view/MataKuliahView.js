import { lines } from "../c18.js"
import Table from "cli-table"



export function showMataKuliah(data = []) {
    var table = new Table({
        head: ['Kode Mata Kuliah', "Mata Kuliah", "Jumlah SKS"],
        colWidths: [15, 40, 15]
    })

    data.forEach((item) => {
        table.push([item.idmatkul, item.matkul, item.sks])
    })
    console.log(table.toString())

}


export function submenu() {
    lines()
    console.log(`
        Silahkan pilih opsi dibawah ini :
        [1] Daftar Mata Kuliah 
        [2] Cari Mata Kuliah 
        [3] Tambah Mata Kuliah
        [4] Hapus Mata Kuliah
        [5] Kembali
        `)
    lines()
}



export function search(data) {
    lines()
    console.log(`
    Detail Mata Kuliah dengan code : "${data.kodejurusan}"
    Kode Jurusan : ${data.kodejurusan}
    Nama Jurusan : ${data.namajurusan}
    `)
}


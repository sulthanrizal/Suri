import { lines } from "../c18.js"
import Table from "cli-table"



export function showDosen(data = []) {
    var table = new Table({
        head: ['NIP', "Nama Dosen"],
        colWidths: [15, 30]
    })

    data.forEach((item) => {
        table.push([item.nip, item.namadosen])
    })
    console.log(table.toString())

}


export function submenu() {
    lines()
    console.log(`
        Silahkan pilih opsi dibawah ini :
        [1] Daftar Dosen 
        [2] Cari Dosen 
        [3] Tambah Dosen
        [4] Hapus Dosen
        [5] Kembali
        `)
    lines()
}



export function search(data) {
    lines()
    console.log(`
    Detail Jurusan dengan code : "${data.nip}"
    NIP          : ${data.nip}
    Nama Dosen   : ${data.namadosen}
    `)
}


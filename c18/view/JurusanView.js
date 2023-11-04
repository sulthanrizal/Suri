import { lines } from "../c18.js"
import Table from "cli-table"



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
showJurusan()




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
submenu()



export function showSearch(data) {
    lines()
    console.log(`
    Detail Jurusan dengan code : "${data.kodejurusan}" :
    Kode Jurusan : ${data.kodejurusan}
    Nama Jurusan : ${data.namajurusan}
    `)
}
showSearch({})


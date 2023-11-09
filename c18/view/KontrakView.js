import Table from 'cli-table'
import { lines } from '../c18.js';


export function showKontrak(data = []) {
    let table = new Table({
        head: ['ID', 'NIM', 'Nama', 'Mata Kuliah', 'Dosen', 'Nilai']
        , colWidths: [5, 15, 25, 25, 15, 10]
    });

    data.forEach((item) => {
        table.push([item.idkontrak, item.nim, item.nama, item.matkul, item.dosen, item.nilai ? item.nilai : ""])
    })

    console.log(table.toString());
}

export function submenu() {
    lines()
    console.log(`
    Silahkan pilih opsi di bawah ini :
    [1] Daftar Kontrak
    [2] Cari Kontrak
    [3] Tambah Kontrak
    [4] Hapus Kontrak
    [5] Update Nilai
    [6] Kembali
            `)
    lines()
}

export function tabelKontrak(data = []) {
    var table = new Table({
        head: ['ID', 'NIM', 'Kode Mata Kuliah', 'NIP', 'Nilai']
        , colWidths: [5, 15, 15, 15, 10]
    });

    data.forEach((item) => {
        table.push([item.idkontrak, item.nim, item.idmatkul, item.nip, item.nilai ? item.nilai : " "])
    })

    console.log(table.toString());
}

export function tabelKontrakForUpdate(data = []) {
    var table = new Table({
        head: ['ID', 'Kode Mata Kuliah', 'Nilai']
        , colWidths: [5, 15, 10]
    });

    data.forEach((item) => {
        table.push([item.idkontrak, item.idmatkul, item.nilai ? item.nilai : " "])
    })

    console.log(table.toString());
}
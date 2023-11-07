import { rl } from "../models/connect.js";
import Kontrak from "../models/kontrak.js";
import Mahasiswa from "../models/mahasiswa.js";
// import MataKuliah from "../models/matakuliah.js";
// import { showDosen } from "../view/DosenView.js";
import { showKontrak, submenu, tabelKontrak } from "../view/KontrakView.js";
import { showMahasiswa } from "../view/MahasiswaView.js";
// import { showMataKuliah } from "../view/MataKuliahView.js";



export default class KontrakController {
    static menu() {
        submenu()
        rl.question(`Masukan salah satu nomor dari opsi diatas: `, async (answer) => {
            switch (answer) {
                case "1":
                    KontrakController.list()
                    break;
                case "2":
                    KontrakController.search()
                    break;
                default:
                    console.log(`Nomor yang anda masukan tidak sesuai , silahkan coba lagi.`)
                    break;
            }
        })
    }

    static list() {
        Kontrak.find().then((data) => {
            showKontrak(data)
            KontrakController.menu()
        }).catch(() => {
            console.log(`Terjadi kesalahan pada data , silahkan coba lagi`)
        })
    }

    static search() {
        Mahasiswa.find().then((data) => {
            showMahasiswa(data)
            rl.question(`Masukan NIM Mahasiswa : `, async (answer) => {
                const kontrak = await Kontrak.look(answer)
                if (kontrak) {
                    console.log(`Daftar kontrak mahasiswa dengan NIM ${answer} adalah : `)
                    tabelKontrak(kontrak)
                    KontrakController.menu()
                } else {
                    console.log(`NIM yang anda masukan tidak tersedia ,silahkan coba lagi.`)
                    KontrakController.search()
                }
            })
        })
    }

    //     static add() {
    //         console.log(`Lengkapi data dibawah ini : `)
    //         Kontrak.find(function (data) {
    //             showKontrak(data)
    //             rl.question(`Masukan NIM Mahasiswa : `, (nim) => {
    //                 MataKuliah.find(function (data) {
    //                     showMataKuliah(data)
    //                     rl.question(`Masukan Kode Mata Kuliah : `, (idmatkul) => {
    //                         showDosen.find(function (data) {
    //                             showDosen(data)
    //                             rl.question(`Masukan NIP Dosen : `, (nip) => {

    //                             })
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     }
}
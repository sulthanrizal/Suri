import { rl } from "../models/connect.js";
import Mahasiswa from "../models/mahasiswa.js";
import { showMahasiswa, showSearch, submenu } from "../view/MahasiswaView.js";
import { home } from "../c18.js";



export default class MahasiswaController {
    static menu() {
        submenu()
        rl.question(`Masukan salah satu nomor dari opsi diatas : `, (answer) => {
            switch (answer) {
                case "1":
                    MahasiswaController.list()
                    break;
                case "2":
                    MahasiswaController.search()
                    break;
                case "3":
                    MahasiswaController.add()
                    break;
                case "4":
                    MahasiswaController.delete()
                    break;
                case "5":
                    home()
                    break;
                default:
                    console.log(`Nomor yang anda masukan tidak sesuai , silahkan coba lagi`)
                    MahasiswaController.menu()
                    break;
            }
        })
    }

    static list() {
        Mahasiswa.find(function (data) {
            showMahasiswa(data)
            MahasiswaController.menu()
        })
    }
    static search() {
        rl.question(`Masukan NIM Mahasiswa : `, async (answer) => {
            try {
                const data = await Mahasiswa.look(answer)
                showSearch(data)
                MahasiswaController.menu()
            } catch (e) {
                console.log(`Terjadi Kesalahan`)
                MahasiswaController.menu()
            }
        })
    }

    static add() {
        console.log(`Lengkapi data dibawah ini : `)
        Mahasiswa.find(function (data) {
            showMahasiswa(data)
            rl.question(`NIM Mahasiswa : `, async (nim) => {
                rl.question(`Nama Mahasiswa : `, async (namadosen) => {
                    if (await Mahasiswa.look(nim)) {
                        console.log(`NIM Mahasiswa sudah terdaftar di database , silahkan coba lagi.`)
                        MahasiswaController.menu()
                    } else {
                        Mahasiswa.create(nim, namadosen)
                        console.log(`Dosen telah ditambahkan didatabase`)
                        MahasiswaController.menu()
                    }
                })
            })
        })
    }
    static delete() {
        rl.question(`Masukan NIM Mahasiswa : `, async (nim) => {
            const mahasiswa = await Mahasiswa.look(nim)
            if (mahasiswa) {
                Mahasiswa.delete(nim).then(() => {
                    console.log(`Data Mahasiswa ${nim} telah dihapus`)
                })
            } else {
                console.log(`NIM yang anda masukan tidak tersedia , silahkan coba lagi`)
                Mahasiswa.menu()
            }
        })
    }
}


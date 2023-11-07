import { rl } from "../models/Connect.js";
import Mahasiswa from "../models/Mahasiswa.js";
import { showMahasiswa, showSearch, submenu } from "../view/MahasiswaView.js";
import { showJurusan } from "../view/JurusanView.js";
import Jurusan from "../models/Jurusan.js";
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
        Mahasiswa.find().then((data) => {
            showMahasiswa(data)
            MahasiswaController.menu()
        }).catch(() => {
            console.log(`Terjadi kesalahan pada data ,silahkan coba lagi`)
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
                console.log(`Mahasiswa dengan nim ${answer} ,tidak terdaftar`)
                MahasiswaController.menu()
            }
        })
    }

    static add() {
        console.log(`Lengkapi data di bawah ini :`)
        Mahasiswa.find().then((data) => {
            showMahasiswa(data);
            rl.question(`NIM : `, (nim) => {
                rl.question(`Nama : `, (namasiswa) => {
                    rl.question(`Tanggal Lahir : `, (lahir) => {
                        rl.question(`Alamat : `, (alamat) => {
                            Jurusan.find(function (data) {
                                showJurusan(data)
                                rl.question(`Kode Jurusan : `, async (idjurusan) => {
                                    if (await Mahasiswa.look(nim)) {
                                        console.log(`NIM telah tersedia di database, silahkan coba lagi.`)
                                        MahasiswaController.menu()
                                    } else {
                                        Mahasiswa.create(nim, namasiswa, lahir, alamat, idjurusan, function () {
                                            console.log(`Mahasiswa telah ditambahkan`)
                                            Mahasiswa.find().then((data) => {
                                                showMahasiswa(data)
                                                MahasiswaController.menu()
                                            }).catch(() => {
                                                console.log(`Terjadi kesalahan pada data ,silahkan coba lagi`)
                                                MahasiswaController.menu()
                                            })
                                            MahasiswaController.menu()
                                        });
                                    }
                                })
                            })
                        })
                    })
                })
            })
        }).catch(() => {
            console.log(`Terjadi kesalahan pada data, silahkan coba lagi`)
            MahasiswaController.menu();
        })
    }
    static delete() {
        rl.question(`Masukan NIM Mahasiswa : `, async (nim) => {
            const mahasiswa = await Mahasiswa.look(nim)
            if (mahasiswa) {
                Mahasiswa.delete(nim).then(() => {
                    console.log(`Data Mahasiswa ${nim} telah dihapus`)
                    MahasiswaController.menu()
                })
            } else {
                console.log(`NIM yang anda masukan tidak tersedia , silahkan coba lagi`)
                MahasiswaController.menu()
            }
        })
    }
}


import { lines } from "../c18.js";
import { rl } from "../models/Connect.js";
import Dosen from "../models/Dosen.js";
import Mahasiswa from "../models/Mahasiswa.js";
import MataKuliah from "../models/Matakuliah.js";
import Kontrak from "../models/kontrak.js";
import { showDosen } from "../view/DosenView.js";
import { showKontrak, tabelKontrak, tabelKontrakForUpdate } from "../view/KontrakView.js";
import { submenu } from "../view/KontrakView.js";
import { showMahasiswa } from "../view/MahasiswaView.js";
import { showMataKuliah } from "../view/MataKuliahView.js";







export default class KontrakController {
    static menu() {
        submenu()
        rl.question(`Masukan salah satu nomor dari opsi diatas : `, (answer) => {
            switch (answer) {
                case "1":
                    KontrakController.list()
                    break;
                case "2":
                    KontrakController.search()
                    break;
                case "3":
                    KontrakController.add()
                    break;
                case "4":
                    KontrakController.delete()
                    break;
                case "5":
                    KontrakController.update()
                    break;
                default:
                    console.log(`Nomor yang anda masukan tidak sesuai , silahkan coba lagi.`)
                    KontrakController.menu()
                    break;
            }
        })
    }


    static list() {
        Kontrak.find().then((data) => {
            showKontrak(data);
            KontrakController.menu();
        }).catch((err) => {
            console.log(err)
            console.log(`Terjadi kesalahan pada data ,silahkan coba lagi.`)
            KontrakController.menu();
        })
    }

    static search() {
        Mahasiswa.find().then((data) => {
            showMahasiswa(data)
            rl.question(`Masukan NIM mahasiswa : `, async (answer) => {
                const kontrak = await Kontrak.look(answer)
                if (kontrak) {
                    console.log(`Daftar kontrak mahasiswa dengan NIM ${answer} adalah : `)
                    tabelKontrak(kontrak)
                    KontrakController.menu()
                } else {
                    console.log(`NIM yang anda masukan tidak tersedia didatabse , silahkan coba lagi.`)
                    KontrakController.menu()
                }
            })
        })
    }

    static add() {
        console.log(`Lengkapi data  dibawah ini : `)
        Mahasiswa.find().then((data) => {
            showMahasiswa(data)
            rl.question(`Masukan NIM : `, (nim) => {
                MataKuliah.find(function (data) {
                    showMataKuliah(data)
                    rl.question(`Masukan Kode Mata Kuliah : `, (idmatkul) => {
                        Dosen.find(function (data) {
                            showDosen(data)
                            rl.question(`Masukan NIP Dosen :`, (nip) => {
                                if (nim, idmatkul, nip) {
                                    Kontrak.create(nim, idmatkul, nip, function () {
                                        console.log(`Kontrak telah di tambah`)
                                        Kontrak.find().then((data) => {
                                            showKontrak(data)
                                            KontrakController.menu()
                                        })
                                    })
                                } else {
                                    console.log(`Kontrak Mahasiswa telah tersedia, silahkan coba lagi`)
                                    KontrakController.menu()
                                }
                            })
                        })
                    })
                })
            })
        })
    }

    static delete() {
        rl.question(`Masukan ID Kontrak : `, async (idkontrak) => {
            const kontrak = await Kontrak.look(idkontrak)
            if (kontrak) {
                Kontrak.delete(idkontrak).then(() => {
                    console.log(`Data Kontrak dengan ID ${idkontrak} , telah dihapus`)
                    KontrakController.menu()
                })
            } else {
                console.log(`ID yang anda masukan tidak terdaftar di kontrak , silahkan cobal lagi.`)
                KontrakController.menu()
            }
        })
    }

    static update() {
        Kontrak.find().then((data) => {
            showKontrak(data)
            rl.question(`Masukan NIM mahasiswa : `, async (nim) => {
                const kontrak = await Kontrak.look(nim)
                if (kontrak) {
                    lines()
                    console.log(`Detail mahasiswa denga NIM "${nim}" : `)
                    tabelKontrakForUpdate(kontrak)
                    lines()
                    rl.question(`masukan id yang akan dirubah nilainya : `, async (idkontrak) => {
                        if (await Kontrak.findofUpdate(idkontrak, nim)) {
                            lines()
                            rl.question(`tulis nilai yang baru : `, async (nilai) => {
                                lines()
                                await Kontrak.update(nilai, nim, idkontrak)
                                console.log(`nilai telah di update.`)
                                Kontrak.find().then((data) => {
                                    showKontrak(data)
                                    KontrakController.menu()
                                })
                            })
                        } else {
                            console.log(`ID Kontrak dan NIM Mahasiswa yang anda masukan tidak tersedia , silahkan coba lagi.`)
                            KontrakController.menu()
                        }
                    })
                } else {
                    console.log(`NIM yang anda masukan tidak tersedia di kontrak , silahkan coba lagi.`)
                    KontrakController.menu()
                }
            })
        }).catch(() => {
            console.log(`Terjadi kesalaha pada data , silahkan coba lagi.`)
            KontrakController.menu()
        })
    }
}
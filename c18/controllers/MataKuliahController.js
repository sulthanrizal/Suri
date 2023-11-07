import { home } from "../c18.js";
import { rl } from "../models/connect.js";
import MataKuliah from "../models/matakuliah.js";
import { showMataKuliah, showSearch, submenu } from "../view/MataKuliahView.js";



export default class MataKuliahController {
    static menu() {
        submenu()
        rl.question(`Masukan salah satu nomor dari opsi diatas :`, (answer) => {
            switch (answer) {
                case "1":
                    MataKuliahController.list()
                    break;
                case "2":
                    MataKuliahController.search()
                    break;
                case "3":
                    MataKuliahController.add()
                    break;
                case "4":
                    MataKuliahController.delete()
                    break;
                case "5":
                    home()
                    break;
                default:
                    console.log(`Nomor yang anda masukan tidak sesuai , silhakan coba lagi`)
                    MataKuliahController.menu()
                    break;
            }
        })
    }


    static list() {
        MataKuliah.find(function (data) {
            showMataKuliah(data)
            MataKuliahController.menu()
        })
    }

    static search() {
        rl.question(`Masukan Kode Mata Kuliah : `, async (answer) => {
            try {
                const data = await MataKuliah.look(answer)
                showSearch(data)
                MataKuliahController.menu()
            } catch (e) {
                console.log(`Terjadi Kesalahan`)
                MataKuliahController.search()
            }
        })
    }
    static add() {
        console.log(`Lengkapi data dibawah ini : `)
        MataKuliah.find(function (data) {
            showMataKuliah(data)
            rl.question(`Kode Mata Kuliah : `, async (idmatkul) => {
                rl.question(`Nama Mata Kuliah : `, async (matkul) => {
                    rl.question(`Jumlah SKS : `, async (sks) => {
                        if (await MataKuliah.look(idmatkul)) {
                            console.log(`Kode Mata Kuliah sudah terdaftar di database , silahkan coba lagi.`)
                            MataKuliahController.menu()
                        } else {
                            MataKuliah.create(idmatkul, matkul, sks)
                            console.log(`Mata Kuliah telah di tambahkan di database`)
                            MataKuliahController.menu()
                        }
                    })
                })
            })
        })
    }

    static delete() {
        rl.question(`Masukan Kode Mata Kuliah : `, async (idmatkul) => {
            const matakuliah = await MataKuliah.look(idmatkul)
            if (matakuliah) {
                MataKuliah.delete(idmatkul).then(() => {
                    console.log(`Data Mata Kuliah ${idmatkul} telah dihapus`)
                    MataKuliahController.menu()
                })
            } else {
                console.log(`Kode Mata Kuliah yang anda masukan tidak terdaftar , silahkan coba lagi`)
                MataKuliahController.menu()
            }
        })
    }
}
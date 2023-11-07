import Jurusan from "../models/Jurusan.js";
import { rl } from "../models/Connect.js";
import { showJurusan, showSearch, submenu } from "../view/JurusanView.js";
import { home } from "../c18.js";


export default class JurusanController {
    static menu() {
        submenu()
        rl.question(`Masukan salah satu nomor dari opsi diatas : `, (answer) => {
            switch (answer) {
                case "1":
                    JurusanController.list()
                    break;
                case "2":
                    JurusanController.search()
                    break;
                case "3":
                    JurusanController.add()
                    break;
                case "4":
                    JurusanController.delete()
                    break;
                case "5":
                    home()
                    break;
                default:
                    console.log(`Nomor yang anda masukan tidak sesuai , silahkan coba lagi`)
                    JurusanController.menu()
                    break;
            }
        })
    }
    static list() {
        Jurusan.find(function (data) {
            showJurusan(data)
            JurusanController.menu()
        })
    }

    static search() {
        rl.question(`Masukan Kode Jurusan : `, async (answer) => {
            try {
                const data = await Jurusan.look(answer)
                showSearch(data)
                JurusanController.menu()
            } catch (e) {
                console.log("Terjadi kesalahan")
                JurusanController.menu()
            }
        })
    }

    static add() {
        console.log("Lengkapi data dibawah ini : ")
        Jurusan.find(function (data) {
            showJurusan(data)
            rl.question("Kode Jurusan : ", async (kodejurusan) => {
                rl.question("Nama Jurusan : ", async (namajuruan) => {
                    if (await Jurusan.look(kodejurusan)) {
                        console.log("Kode Jurusan sudah terdaftar di database , silahkan coba lagi.")
                        JurusanController.menu()
                    } else {
                        Jurusan.create(kodejurusan, namajuruan)
                        console.log(`Jurusan telah ditambahkan di database`)
                        JurusanController.menu()
                    }
                })
            })
        })
    }

    static delete() {
        rl.question("Masukan Kode Jurusan : ", async (kodejurusan) => {
            const jurusan = await Jurusan.look(kodejurusan)
            if (jurusan) {
                Jurusan.delete(kodejurusan).then(() => {
                    console.log(`Data Jurusan ${kodejurusan} telah dihapus`)
                    JurusanController.menu()
                })
            } else {
                console.log(`Kode Jurusan yang anda masukan tidak terdaftar , silahkan coba lagi`)
                JurusanController.menu()
            }
        })
    }
}

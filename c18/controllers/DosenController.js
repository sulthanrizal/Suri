
import { rl } from "../models/connect.js";
import Dosen from "../models/dosen.js";
import { showDosen, showSearch } from "../view/DosenView.js";
import { submenu } from "../view/DosenView.js";
import { home } from "../c18.js";



export default class DosenController {
    static menu() {
        submenu()
        rl.question(`Masukan salah satu nomor dari opsi diatas : `, (answer) => {
            switch (answer) {
                case "1":
                    DosenController.list()
                    break;
                case "2":
                    DosenController.search()
                    break;
                case "3":
                    DosenController.add()
                    break;
                case "4":
                    DosenController.delete()
                    break;
                case "5":
                    home()
                    break;
                default:
                    console.log(`Nomor yang anda masukan tidak sesuai , silahkan coba lagi`)
                    DosenController.menu()
                    break;

            }
        })
    }
    static list() {
        Dosen.find(function (data) {
            showDosen(data)
            DosenController.menu()
        })
    }
    static search() {
        rl.question(`Masukan NIP Dosen : `, async (answer) => {
            try {
                const data = await Dosen.look(answer)
                showSearch(data)
                DosenController.menu()
            } catch (e) {
                console.log(`Terjadi kesalahan`)
                DosenController.search()
            }
        })
    }
    static add() {
        console.log(`Lengkapi data di bawah ini :`)
        Dosen.find(function (data) {
            showDosen(data)
            rl.question(`NIP Dosen : `, async (nip) => {
                rl.question(`Nama Dosen : `, async (namadosen) => {
                    if (await Dosen.look(nip)) {
                        console.log(`NIP telah tersedia di database, silahkan coba lagi.`)
                        Dosen.menu()
                    } else {
                        Dosen.create(nip, namadosen);
                        console.log(`Dosen telah ditambahkan ke database`)
                        DosenController.menu()
                    }
                })
            })
        })
    }
    static delete() {
        rl.question(`Masukan NIP Dosen : `, async (nip) => {
            const dosen = await Dosen.look(nip)
            if (nip) {
                Dosen.delete(nip).then(() => {
                    console.log(`Data Dosen ${nip} telah dihapus`)
                    DosenController.menu()
                })
            }
        })
    }
}


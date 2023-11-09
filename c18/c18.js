import DosenController from "./controllers/DosenController.js"
import JurusanController from "./controllers/JurusanController.js"
import KontrakController from "./controllers/KontrakController.js"
import LoginController from "./controllers/LoginController.js"
import MahasiswaController from "./controllers/MahasiswaController.js"
import MataKuliahController from "./controllers/MataKuliahController.js"

import { rl } from "./models/Connect.js"


export function welcome() {
    lines()
    console.log(`Welcome to Universitas Pendidikan Indonesia \n Jl. Setiabudhi No.25 `)
    lines()
    LoginController.login()
}


export function exit() {
    lines()
    console.log(`Anda telah keluar`)
    welcome()
}


export function lines() {
    let line = ""
    for (let i = 0; i < 100; i++)
        line += "="
    return console.log(line)
}

export function home() {
    lines()
    console.log(`
    silahkan pilih opsi dibawah ini :
    [1] Mahasiswa 
    [2] Jurusan
    [3] Dosen
    [4] Mata Kuliah
    [5] Kontrak
    [6] Keluar
    `)
    lines()

    rl.question("Masukan salah satu nomor dari opsi diatas : ", (index) => {
        switch (index) {
            case "1":
                MahasiswaController.menu()
                break;
            case "2":
                JurusanController.menu()
                break;
            case "3":
                DosenController.menu()
                break;
            case "4":
                MataKuliahController.menu()
                break;
            case "5":
                KontrakController.menu()
                break;
            case "6":
                exit()
            default:
                console.log(`Nomor yang anda masukan tidak sesuai , silahkan coba lagi`)
                home()
                break;
        }
    })
}
welcome()

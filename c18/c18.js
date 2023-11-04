import DosenController from "./controllers/DosenController.js"
import JurusanController from "./controllers/JurusanController.js"
import MahasiswaController from "./controllers/MahasiswaController.js"
// import MataKuliahController from "./controllers/MataKuliahController"
import { rl } from "./models/connect.js"



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
            default:
                console.log(`Nomor yang anda masukan tidak sesuai , silahkan coba lagi`)
                break;
        }
    })
}

home()

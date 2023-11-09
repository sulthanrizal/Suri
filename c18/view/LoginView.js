import { lines } from "../c18.js";


export function showLogin(data) {
    lines()
    console.log(`Welcome ,${data.username} . Your acces level is : ${data.role.toUpperCase()}`)
}

export function welcome() {
    lines()
    console.log(`Welcome to Universitas Pendidikan Indonesia \n Jl. Setiabudhi No.25`)
    lines()
}

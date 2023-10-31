const { rejects } = require("assert")
const fs = require("fs")
const { resolve } = require("path")



const bacaData = file => new Promise(function (resolve, rejects) {
    fs.readFile(file, "utf-8", (err, data) => {

        if (err) {
            rejects("Gagal Baca Data")
        } else {
            resolve(data)
        }
    })
})

bacaData("data.txt").then((e) => {
    console.log(e)
}).catch((a) => {
    console.log("Eror", a)
})


// ini ketika menggunakan return maka dia akan promise lagi atau pending lagi 
// cara munculinnya harus di then lagi ,seperti dibawah ini :
const u = bacaData("data.txtt").then((e) => {
    return e
}).catch((a) => {
    return "Eror", a
})
u.then(hasil => console.log("Ini Hasilnya ", hasil))

// ini menggunakan then yang eror nya
bacaData("data.txs").then((e) => {
    console.log(e)
}, (a) => {
    console.log("Eror", a)
})
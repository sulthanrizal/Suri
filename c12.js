
if (process.argv[2]) {
    const fs = require("fs")
    const data = fs.readFileSync(`${process.argv[2]}`, "utf-8")
    const quest = JSON.parse(data)
    const readline = require("node:readline")
    const readl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Jawaban : "
    })
    console.log("Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini 'data.json'. Untuk bermain, jawablah dengan jawaban sesuai",
        "Gunakan 'skip' untuk menangguhkan pertanyaannya , dan di akhir pertanyaan akan di tanya lagi.")

    let counter = 0
    let salah = 0

    console.log("Pertanyaan : " + quest[counter].definition)

    readl.prompt()
    readl.on("line", (jawaban) => {
        if (jawaban.toString().toLowerCase() == quest[counter].term) {
            console.log("Anda Beruntung !\n")
            counter++
            salah = 0
            if (counter == quest.length) {
                console.log("Anda Berhasil \n")
                readl.close()
            }
            console.log("Pertanyaan : " + quest[counter].definition)
        } else if (jawaban.toString().toLowerCase() == "skip") {
            quest.push(quest[counter])
            counter++
            salah = 0
            console.log("Pertanyaan : " + quest[counter].definition)
        } else {
            salah++
            console.log(`Anda Kurang Beruntung , Anda salah ${salah} silahkan coba lagi`)
        }
        readl.prompt()
    }).on("close", () => {
        process.exit(0)
    })
} else {
    console.log("Tolong serta kan nama file sebagai inputan soal-soalnya , Misalnya 'node c12.js  data.json' . \n")
    process.exit()
}



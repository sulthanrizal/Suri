const fs = require("fs");

const data = fs.readFileSync("data.json", "utf-8")
const readline = require("node:readline")
const quest = JSON.parse(data)
const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Tebakan : "
});

console.log("Selamat datang di permainan Tebak Kata , silahkan isi jawaban dengan benar ya!")

let counter = 0

console.log("Pertanyaan : " + quest[counter].definition)

readl.prompt();
readl.on("line", (jawaban) => {
    if (jawaban.toString().toLowerCase() == quest[counter].term) {
        console.log("Selamat Anda Benar!")
        counter++
        if (counter == quest.length) {
            console.log("Hore , Anda Menang!")

        }
        console.log("Pertanyaan : " + quest[counter].definition)
    } else {
        console.log("Wkwkwk , Anda Kurang Beruntung!")
    }
    readl.prompt()
}).on("close", () => {
    process.exit(0)
})







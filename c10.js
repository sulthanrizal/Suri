const readline = require("node:readline")
const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "tulis kalimatmu disini > "
})

readl.prompt()

readl.on("line", (line) => {
    let result = []
    let output = []
    result = line.split(" ")


    for (let i = 0; i < result.length; i++) {
        if (result[i].charAt(0) === "a" || result[i].charAt(0) === "i" || result[i].charAt(0) === "u" || result[i].charAt(0) === "e" || result[i].charAt(0) === "o") {
            output.push(result[i])
        } else {
            output.push(result[i].slice(1) + result[i][0] + "nyo")
        }

    }
    console.log("hasil konversi : " + output.join(" "))

    readl.prompt();
}).on("close", () => {
    console.log("Good bye!")
    process.exit(0)
})


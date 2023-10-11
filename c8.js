function pola(str) {
    let penampung = []
    let penampung1 = str.split(" ")

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (penampung1[0].replace("#", i) * penampung1[2] == penampung1[4].replace("#", j)) {
                penampung.push(i, j)
            }
        }
    }
    return penampung
}
console.log(pola("42#3 * 188 = 80#204"))
console.log(pola("8#61 * 895 = 78410#5"))



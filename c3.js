function romawi(n) {
    let str = ""
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    for (let romawi in roman) {
        while (n >= roman[romawi]) {
            str += romawi
            n -= roman[romawi]
        }
    }
    return str
}
console.log("Script Testing untuk Konversi Romawi\n")
console.log("input | expected | result")
console.log("------|----------|=======")
console.log("4     | IV       |", romawi(4))
console.log("9     | IX       |", romawi(9))
console.log("13    | XIII     |", romawi(13))
console.log("1453  | MCDLIII  |", romawi(1453))
console.log("1646  | MDCXLVI  |", romawi(1646))
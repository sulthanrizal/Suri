function weirdMultiply(sentence) {
    if (sentence < 10) {
        return sentence

    }

    let penampung1 = sentence.toString()
    let penampung = penampung1.split("")
    let kali = 1

    for (let i = 0; i < penampung.length; i++) {
        kali *= penampung[i]

    }
    return weirdMultiply(kali)
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));



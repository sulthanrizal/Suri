function stringManiplation(word) {
    var penampung = []
    if (word.charAt(0) === "a" || word.charAt(0) === "i" || word.charAt(0) === "u" || word.charAt(0) === "e" || word.charAt(0) === "o") {
        penampung = word
    } else {
        penampung = word.slice(1) + word.charAt(0) + "nyo"
    }
    console.log(penampung)
}
stringManiplation("ayam")
stringManiplation("bebek")


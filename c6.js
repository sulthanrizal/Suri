function sentencesManipulation(setence) {
    let penampungAwal = []
    let penampungAkhir = []
    penampungAwal = setence.split(" ")

    for (let i = 0; i < penampungAwal.length; i++) {
        if (penampungAwal[i].charAt(0) === "a" || penampungAwal[i].charAt(0) === "i" || penampungAwal[i].charAt(0) === "u" || penampungAwal[i].charAt(0) === "e" || penampungAwal[i].charAt(0) === "o") {
            penampungAkhir.push(penampungAwal[i])
        } else {
            penampungAkhir.push(penampungAwal[i].slice(1) + penampungAwal[i][0] + "nyo")
        }

    }
    console.log(penampungAkhir.join(" "))
}
sentencesManipulation("ibu pergi ke pasar bersama aku")

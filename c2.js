function deretKaskus(n) {

    let penampung = []
    for (let i = 1; i <= n; i++) {
        if ((i * 3) % 5 === 0 && (i * 3) % 6 === 0) {
            penampung.push("KAKUS")
        } else if ((i * 3) % 5 === 0) {
            penampung.push("KAS")
        } else if ((i * 3) % 6 === 0) {
            penampung.push("KUS")
        } else {
            penampung.push((i * 3))
        }
    }
    return penampung
}
console.log(deretKaskus(10))






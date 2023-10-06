function sum() {
    let angka = 0
    for (let i = 0; i < arguments.length; i++) {
        angka = angka + arguments[i]


    }
    console.log(angka)




}
sum(1, 2, 7)
sum(1, 4)
sum(11)
sum(10, 3, 6, 7, 9)
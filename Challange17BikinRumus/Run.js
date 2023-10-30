import Calculator, { PI } from "./c17.js"

const cal = new Calculator()

cal.penambahan(10).pengurangan(5).hasil()// 1 + 10 - 5 = 6
cal.penambahan(3).perkalian(4).pembagian(6).hasil()// 6 + 3 * 4 / 6 = 6
cal.rumus = 7 // set jari jari
console.log(`nilai sekarang : ${cal.rumus}`)
cal.perkalian(2).perkalian(PI).hasil()// keliling lingkaran dengan jari jari 7 => 2 rumus Pi rumus r = 44
cal.rumus = 7 // set jari jari
cal.squere().perkalian(PI).hasil()// luas lingkarang dengan jari jari = 7 = Pi rumus r pangkat 2 = 154
cal.rumus = 4
cal.exponent(3).hasil()// 4 pangkat 3 = 64
cal.squereRoot().hasil()// akar pangkat 2 dari 64 = 8

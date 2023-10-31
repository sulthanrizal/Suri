import Calculator, { PI } from "./c17.js"

const cal = new Calculator()

cal.add(10).substract(5).result()// 1 + 10 - 5 = 6
cal.add(3).multiply(4).divide(6).result()// 6 + 3 * 4 / 6 = 6
cal.rumus = 7 // set jari jari
console.log(`nilai sekarang : ${cal.rumus}`)
cal.multiply(2).multiply(PI).result()// keliling lingkaran dengan jari jari 7 => 2 rumus Pi rumus r = 44
cal.rumus = 7 // set jari jari
cal.squere().multiply(PI).result()// luas lingkarang dengan jari jari = 7 = Pi rumus r pangkat 2 = 154
cal.rumus = 4
cal.exponent(3).result()// 4 pangkat 3 = 64
cal.squereRoot().result()// akar pangkat 2 dari 64 = 8

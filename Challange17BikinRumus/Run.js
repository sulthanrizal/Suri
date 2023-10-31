import Calculator, { PI } from "./c17.js"

const calc = new Calculator()

calc.add(10).substract(5).result()// 1 + 10 - 5 = 6
calc.add(3).multiply(4).divide(6).result()// 6 + 3 * 4 / 6 = 6
calc.x = 7 // set jari jari
console.log(`nilai sekarang : ${calc.x}`)
calc.multiply(2).multiply(PI).result()// keliling lingkaran dengan jari jari 7 => 2 x Pi x r = 44
calc.x = 7 // set jari jari
calc.squere().multiply(PI).result()// luas lingkarang dengan jari jari = 7 = Pi x r pangkat 2 = 154
calc.x = 4
calc.exponent(3).result()// 4 pangkat 3 = 64
calc.squereRoot().result()// akar pangkat 2 dari 64 = 8

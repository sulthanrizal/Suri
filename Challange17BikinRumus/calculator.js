export const PI = 22 / 7

export default class Calculator {
    constructor(rumus) {
        this.rumus = rumus || 1
    }
    add(value) {
        this.rumus += value
        return this
    }
    substract(value) {
        this.rumus -= value
        return this
    }
    divide(value) {
        this.rumus /= value
        return this
    }
    multiply(value) {
        this.rumus *= value
        return this
    }
    squere() {
        this.rumus = Math.pow(this.rumus, 2)
        return this
    }
    exponent(value) { // Bilangan Pangkat
        this.rumus = Math.pow(this.rumus, value)
        return this
    }
    squereRoot() { // 
        this.rumus = Math.sqrt(this.rumus)
        return this
    }
    result() {
        console.log(this.rumus)
        return this
    }
}
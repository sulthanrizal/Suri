export const PI = 22 / 7

export default class Calculator {
    constructor(rumus) {
        this.rumus = rumus || 1
    }
    penambahan(value) {
        this.rumus += value
        return this
    }
    pengurangan(value) {
        this.rumus -= value
        return this
    }
    pembagian(value) {
        this.rumus /= value
        return this
    }
    perkalian(value) {
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
    hasil() {
        console.log(this.rumus)
        return this
    }
}
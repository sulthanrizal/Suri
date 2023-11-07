class Tyre {
    constructor(brand, size) {
        this.brand = brand
        this.size = size


    }
}

class Car {
    constructor(year, sn) {
        this.varian
        this.sn = sn
        this.door
        this.warranty
        this.year = year
    }
    static modeAngka() {
        const chars = "123343mdvmodkbnokbkmovdsms"
        let modeNumber = "", indexRandom, charRandom
        for (let i = 0; i < 36; i++) {
            indexRandom = Math.floor(Math.random() * chars.length)
            charRandom = chars.slice(indexRandom, indexRandom + 1)
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                indexRandom = -1
                charRandom = "-"
            }
            modeNumber += charRandom
        } return modeNumber
    }

}

class Agya extends Car {
    constructor(year, sn) {
        super(year, sn)
        this.varian = "Agya"
        this.door = 5
        this.seat = 5
        this.brand = "Dunlop "
        this.size = 15
        this.warranty = 3
    }


}
class Avanza extends Car {
    constructor(year, sn) {
        super(year, sn)
        this.varian = "Avanza"
        this.door = 5
        this.seat = 5
        this.brand = "Bridgeston "
        this.size = 17
        this.warranty = 3
    }

}

class CarFactory {
    constructor() {
        this.cars = [];
    }
    produce(year) {
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.cars.push(new Agya(year, Car.modeAngka()))
        } for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.cars.push(new Avanza(year, Car.modeAngka()))
        } return this.cars

    }
    result() {
        console.log(" hasil product: ")
        this.cars.forEach((car, index) => {
            console.log(`
no.${index + 1}       
varian   : ${car.varian}
sn       : ${car.sn}
door     : ${car.door}
seat     : ${car.seat} seater
tyre     : ${car.brand} ${car.size} inch
year     : ${car.year}
warranty : ${car.warranty} year
           `)
        })
    }

    guaranteeSimulation(simulationYear) {
        console.log("hasil simulasi garansi mobil pada tahun 2025:")
        this.cars.forEach((car, index) => {
            console.log(`
no.${index + 1}       
varian   : ${car.varian}
sn       : ${car.sn}
door     : ${car.door}
seat     : ${car.seat} seater
tyre     : ${car.brand} ${car.size} inch
year     : ${car.year}
warranty : ${car.warranty} year                
            `)
            console.log(`status on ${simulationYear} this guarantee status ${(car.year + car.warranty >= simulationYear) ? 'active' : 'expired'}`)
        })


    }
}

const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)
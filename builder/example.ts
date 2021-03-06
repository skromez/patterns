class Car {
    seats: number
    engine: number
    tripComputer: boolean
    gps: boolean
}

class Manual {
    seats: number
    engine: number
    tripComputer: boolean
    gps: boolean
}

interface Builder {
    reset(): void
    setSeats(amount: number): void
    setEngine(hp: number): void
    setTripComputer(): void
    setGPS(): void
}

class CarBuilder implements Builder {
    private car: Car

    reset() {
        this.car = new Car()
    }

    setSeats(amount: number) {
        this.car.seats = amount
    }

    setEngine(hp: number) {
        this.car.engine = hp
    }

    setGPS() {
        this.car.gps = true
    }

    setTripComputer() {
        this.car.tripComputer = true
    }

    getResult(): Car {
        return this.car
    }
}

class ManualBuilder implements Builder {
    manual: Manual
    reset() {
        this.manual = new Manual()
    }

    setSeats(amount: number) {
        this.manual.seats = amount
    }

    setEngine(hp: number) {
        this.manual.engine = hp
    }

    setGPS() {
        this.manual.gps = true
    }

    setTripComputer() {
        this.manual.tripComputer = true
    }

    getResult(): string {
        return `Manual for the car which has:
        ${this.manual.seats} seats,
        GPS: ${this.manual.gps},
        ${this.manual.engine} horse power engine,
        trip computer: ${!!this.manual.tripComputer}
        `
    }
}

class Director {
    constructSportCar(builder: Builder) {
        builder.reset()
        builder.setSeats(2)
        builder.setEngine(700)
        builder.setTripComputer()
        builder.setGPS()
    }

    constructSUVCar(builder: Builder) {
        builder.reset()
        builder.setSeats(8)
        builder.setEngine(1200)
        builder.setGPS()
    }
}

class Application {
    makeCar() {
        const director = new Director()
        const carBuilder = new CarBuilder()
        const manualBuilder = new ManualBuilder()

        director.constructSportCar(carBuilder)
        director.constructSportCar(manualBuilder)
        const car = carBuilder.getResult()
        const manual = manualBuilder.getResult()

        director.constructSUVCar(carBuilder)
        director.constructSUVCar(manualBuilder)
        const suvCar = carBuilder.getResult()
        const suvManual = manualBuilder.getResult()
    }
}

const app = new Application()
app.makeCar()

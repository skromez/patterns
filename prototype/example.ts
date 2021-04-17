abstract class Shape {
    x: number
    y: number
    color: string

    constructor(source: Shape) {
        this.x = source?.x || 0
        this.y = source?.y || 0
        this.color = source?.color || 'red'
    }

    abstract clone(): Shape
}

class Rectangle extends Shape {
    width: number
    height: number

    constructor(source?: Rectangle) {
        super(source);
        this.width = source?.width || 0
        this.height = source?.height || 0
    }

    clone(): Shape {
        return new Rectangle(this);
    }
}

class Circle extends Shape {
    radius: number

    constructor(source?: Circle) {
        super(source);
        this.radius = source?.radius || 0
    }

    clone(): Shape {
        return new Circle(this);
    }
}

class Application {
    shapes: Shape[] = []

    constructor() {
        const circle = new Circle()
        circle.x = 10
        circle.y = 10
        circle.radius = 20
        this.shapes.push(circle)

        const rectangle = new Rectangle()
        rectangle.width = 20
        rectangle.height = 10
        rectangle.y = 50
        rectangle.color = 'blue'

        this.shapes.push(rectangle)
    }

    cloneAllShapes() {
        const shapesCopy: Shape[] = []
        for (const shape of this.shapes) {
            shapesCopy.push(shape.clone())
        }
        console.log(this.shapes)
        console.log(shapesCopy)
    }
}

const app = new Application()
app.cloneAllShapes()

var config = {OS: "Windows"}
interface Button {
    paint(): void
}

interface CheckBox {
    paint(): void
}

class WinButton implements Button {
    paint() {
        // paint Windows style button
    }
}

class WinCheckBox implements CheckBox {
    paint() {
        // point Windows style checkbox
    }
}

class MacButton implements Button {
    paint() {
        // point Mac OS style button
    }
}

class MacCheckBox implements CheckBox {
    paint() {
        // point Mac OS style checkbox
    }
}

interface GUIFactory {
    createButton(): Button
    createCheckBox(): CheckBox
}

class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton()
    }
    createCheckBox(): CheckBox {
        return new WinCheckBox()
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton()
    }
    createCheckBox(): CheckBox {
        return new MacCheckBox()
    }
}

class Application {
    private factory: GUIFactory
    private button: Button
    constructor(factory: GUIFactory) {
        this.factory = factory
    }

    createButton() {
        this.button = this.factory.createButton()
    }

    paint() {
       this.button.paint()
    }
}

class ApplicationConfiguration {
    factory: GUIFactory

    constructor() {
        this.configure()
    }

    configure() {
        if (config.OS === "Windows") {
            this.factory = new WinFactory()
        } else if (config.OS === "Mac OS") {
            this.factory = new MacFactory()
        } else {
            throw new Error("Unknown operation system")
        }
    }
}
const appConfig = new ApplicationConfiguration()

const app = new Application(appConfig.factory)
app.createButton()
app.paint()

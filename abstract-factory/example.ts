import { Button } from './interfaces/button';
import { GUIFactory } from './interfaces/guiFactory';
import { ApplicationConfiguration } from './config/appConfig';

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

const { factory } = new ApplicationConfiguration()

const app = new Application(factory)
app.createButton()
app.paint()

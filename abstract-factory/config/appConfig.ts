import { GUIFactory } from "../interfaces/guiFactory";
import { MacFactory } from "../factories/macOSFactory";
import { config } from "./env";
import { WinFactory } from '../factories/windowsFactory';

export class ApplicationConfiguration {
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

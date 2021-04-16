var env = {OS: "Windows"}

interface Button {
    render(): void
    onClick(func: Function): void
}

class WindowsButton implements Button {
    render() {
        // Render windows button
    }

    onClick(func: Function) {
        func()
    }
}

class HTMLButton implements Button {
    render() {
        // Render HTML button
    }

    onClick(func: Function) {
        func()
    }
}

abstract class Dialog {
    render() {
        const okButton: Button = this.createButton()
        okButton.onClick((dialog) => {
            dialog.close()
        })
        okButton.render()
    }
    abstract createButton(): Button
}

class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton()
    }
}

class WebDialog extends Dialog {
    createButton(): Button {
        return new HTMLButton()
    }
}

class Application {
    dialog: Dialog

    initialize() {
        if (env.OS === "Windows") {
            this.dialog = new WindowsDialog()
        } else if (env.OS === "Web") {
            this.dialog = new WebDialog()
        } else {
            throw new Error("Unknown operation system")
        }
    }

    bootstrap() {
        this.initialize()
        this.dialog.render()
    }
}

const app = new Application()
app.bootstrap()

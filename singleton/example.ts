class Database {
    private static instance: Database
    public static getInstance() {
        if (!this.instance) {
            this.instance = new Database()
        }
        return this.instance
    }
}

class Application {
    main() {
        const db1 = Database.getInstance()
        const db2 = Database.getInstance()
        console.log(db1 === db2)
    }
}

const app = new Application()
app.main()

const express = require('express')
const mysql = require('mysql2/promise')

const app = express()
const port = 8080

app.get("/", (req, res) => {
    res.send("Index api-test")
})

app.get("/users", async (req, res) => {
    try {
        const connection = await connectionMySQL()
        const [results] = await connection.query('SELECT * FROM `users`')
        
        res.json(results)
    } catch (err) {
        res.send("please, reload decker....")
    }
})

app.listen(port, () => {
    console.log(`Server running at http:///localhost:${port}.`)
})

const connectionMySQL = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'db-test',
            user: 'root',
            password: 'root',
            database: 'db-test'
        })
        return connection
    } catch (err) {
        return "Connection failed."
    }
}
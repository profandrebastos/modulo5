import sqlite3 from 'sqlite3'

sqlite3.verbose()
let db = new sqlite3.Database
//('D:\GitHub\modulo5\js\aula11\atividade1\src\infra\database.db')
let db = new sqlite3.Database('./src/infra/database.db')

export default db;
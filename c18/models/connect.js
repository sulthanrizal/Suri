import path from "path"
import sqlite3 from "sqlite3"
import readline from "readline"

const __dirname = path.resolve()
const dbpath = path.join(__dirname, "db", "university.db")

export const db = new sqlite3.Database(dbpath)
export const rl = readline.createInterface({ input: process.stdin, output: process.stdout })




insert into Mahasiswa values
    ("2022070001", "Abaz", "2002-09-12", "Semarang"),
    ("2022070002", "Faisal", "2001-11-30", "Medan"),
    ("2022070003", "Lutfhi", "2000-12-23", "Bali"),
    ("2022070004", "Dimas", "1999-08-11", "Surabaya"),
    ("2022070005", "Ikhsan", "2000-01-29", "Balikpapan"),
    ("2022070006", "Eril", "2001-02-17", "Makasar"),
    ("2022070007", "Zafran", "2001-06-01", "Bandung"),
    ("2022070008", "Emir", "2000-10-10", "Cianjur"),
    ("2022070009", "Zakka", "1998-12-07", "Lampung"),
    ("2022070010", "Agung", "2002-09-13", "Bandung");


const sql = require('mssql')
require('dotenv').config()

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  requestTimeout: 300000,
  pool: {
    max: 40,
    min: 1,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
}

const pool = new sql.ConnectionPool(sqlConfig);
const poolConnection = pool.connect();
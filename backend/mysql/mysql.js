const mysql = require('mysql2');

const setting = {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password : process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'voicekid',
    waitForConnections: true,
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT || 20,
    queueLimit: 0
}

module.exports = {
    setting: setting,
    pool: mysql.createPool(setting)
}

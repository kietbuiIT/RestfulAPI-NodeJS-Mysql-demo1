const mysql = require('mysql2/promise');
const cofig = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection(cofig.db);
    const [result, ] = await connection.execute(sql, params);


    return result;
}

module.exports = {
    query
}

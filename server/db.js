const sql = require ('mssql')
const config = {
    user: 'nros' // cập nhật lại
    password: '123' //cập nhật lại
    server: 'localhost'
    database: 'RENTALAPARTMENT'
}
const poolPromise = new sql.ConnectionPool(config).connect().then(pool=>{
    console.log('Connected to MSSQL')
    return pool
}).catch(err => console.log('Connection failed!', err))

module.exports = {
    sql, poolPromise
}
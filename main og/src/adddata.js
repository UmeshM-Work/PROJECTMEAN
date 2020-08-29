const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const datacon = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gaana'
}
let adduser = async(input) => {


    const con = mysql.createConnection(datacon);

    await con.connectAsync();

    let sql = "INSERT INTO USER(fname,email,dept,pass)VALUES(?,?,?,?)"

    con.queryAsync(sql, [input.fname, input.email, input.dept, input.pass]);

    await con.endAsync();
}
module.exports = { adduser }
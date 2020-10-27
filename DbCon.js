const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'blue.cs.sonoma.edu',
    user: 'dspot_cs470fl20',
    password: 'dest_bshj2020',
    database: 'dspot_cs470fl20'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

con.query('SELECT * FROM locations', (err,rows) => {
    if (err) throw err;

    rows.forEach((row)=> {
        console.log(`${row.city} has zipcode ${row.zipcode}`);
    })
})
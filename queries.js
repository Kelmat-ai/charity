const { Pool } = require('pg')
const dotenv = require('dotenv');
dotenv.config();

// pools will use environment variables
// for connection information
const pool = new Pool({
  host     : process.env.PGHOST,
  user     : process.env.PGUSER,
  password : process.env.PGPASSWORD,
  database : process.env.PGDATABASE
})

pool.query('SELECT * FROM "chars";', (err, res) => {
  // console.log(err, res)
  pool.end()
})


// console.log(charities)
// pool.query('SELECT * FROM "chars" WHERE id = 1;', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// let query = 'SELECT * FROM "chars" WHERE affiliation =' + "'ONGA'";
// pool.query(query, (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
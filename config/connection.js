// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  host: "s0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "iz0qagdcsklyrsb0",
  password: "pz4pqikel8k8jpjt",
  database: "dwsvqw805jrrv9ax"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

// Export connection for our ORM to use.
module.exports = connection;
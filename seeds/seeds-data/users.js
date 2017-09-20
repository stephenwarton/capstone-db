const bcrypt = require('bcrypt');

module.exports = [
  {
    "email": "simba@lionking.com",
    "password": bcrypt.hashSync("mufasa", 3)
  },
  {
    "email": "mario@nintendo.com",
    "password": bcrypt.hashSync("luigis", 3)
  }
];

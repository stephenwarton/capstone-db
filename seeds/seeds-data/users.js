const bcrypt = require('bcrypt');

module.exports = [
  {
    "username": "simba",
    "email": "simba@lionking.com",
    "password": bcrypt.hashSync("mufasa", 3)
  },
  {
    "username": "mario",
    "email": "mario@nintendo.com",
    "password": bcrypt.hashSync("luigi", 3)
  }
];

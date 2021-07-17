const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = process.env.NODEPORT
const cors = require('cors');
app.use(cors());
app.use(express.json());
const db = require("./models");
const User = db.user;

db.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
    });

db.sequelize.sync()

// function initial() {
//     User.create({
//       user_id: 1,
//       username: "user1",
//       password: '1234',
//       admin: true,
//       email: 'joaomoreira9495@gmail.com',
//       createdat: Date.now(),
//       updatedat: Date.now(),
//     });
// }
// initial();

     // charities.sync() Now the `chars` table in the database corresponds to the model definition
    // Note: using `force: true` will drop the table if it already exists

require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/charityRoutes')(app);

app.listen(port, () => console.log(`Backend listening on port ${port}`))
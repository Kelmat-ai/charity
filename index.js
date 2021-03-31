const express = require('express')
const Sequelize = require('sequelize')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = process.env.NODEPORT
const cors = require('cors');
const sequelize = new Sequelize({
    host     : process.env.PGHOST,
    user     : process.env.PGUSER,
    password : process.env.PGPASSWORD,
    database : process.env.PGDATABASE,
    dialect: 'postgres',
      })

sequelize.authenticate().then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});
app.use(cors());
app.use(express.json());

const charities = sequelize.define('chars', {
    // attributes
    id : {
    type: Sequelize.STRING,
    primaryKey: true,
    },
    charity_name: {
    type: Sequelize.STRING
    // allowNull defaults to true
    },
    website: {type: Sequelize.STRING},
    affiliation: {type: Sequelize.STRING},
    post_code: {type: Sequelize.STRING},
    city: {type: Sequelize.STRING},
    address: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    phone_number: {type: Sequelize.STRING},
    area_of_impact: {type: Sequelize.STRING},
    createdAt: {type: Sequelize.STRING},
    updatedAt: {type: Sequelize.STRING},
    }, {
    // options
    });

    charities.sync()
     // charities.sync() Now the `chars` table in the database corresponds to the model definition
    // Note: using `force: true` will drop the table if it already exists

// app.get('/', (req, res) => res.json({message: "Hello World"}))

app.post('/chars', async (req, res) => {
    try {
    const newChar = new charities(req.body)
    await newChar.save()
    res.json({ charity: newChar }) // Returns the new charity that is created in the database  
    } catch(error) {
    console.error(error)
    } 
})
app.get('/charities/:charId', async (req, res) => {
    const charId = req.params.charId
    try {
    const charitySelected = await charities.findAll({
    where: {
    id: charId }
    })
    res.json({ charitySelected })
    } catch(error) {
    console.error(error)
    }
})

app.get('/:charAffiliation', async (req, res) => {
    const charAffiliation = req.params.charAffiliation
    console.log(charAffiliation)
    try {
    const charitySelected = await charities.findAll({
    where: {
    affiliation: charAffiliation }
    })
    res.json({ charitySelected })
    } catch(error) {
    console.error(error)
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
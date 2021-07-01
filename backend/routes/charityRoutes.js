const db = require("../models")
const { Op } = require("sequelize")
const charities = db.charities

module.exports = function(app) {

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

app.get('/listing/:charAffiliation', async (req, res) => {
    const charAffiliation = req.params.charAffiliation
    // const db = require("../models")
    console.log('23')
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

app.get('/search', async (req, res) => {
    query = String(req.query.search_query)
    try {
    const charitySelected = await charities.findAll({
    where: {
    [Op.or]: [ {affiliation: query}, {website: query}, {post_code: query}, {city: query}, {address: query}, {email: query}, {phone_number: query}, {area_of_impact: query} ]
        }
    })
    console.log(charitySelected)
    res.json({ charitySelected })
    } catch(error) {
    console.error(error)
    }
})

}
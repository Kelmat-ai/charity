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

}
const express = require('express');
const { route } = require('./frontend');
const router = express.Router()



//Animal info - a RESTful API
//Animal object: { species, favoritefood}
let fakeDb = [
    {species: 'monkey', favoriteFood: 'banana'},
    {species: 'cat', favoriteFood: 'mouse' },
    {species: 'tapir', favoriteFood: 'leaves'}
]

//GET animals
router.get('/', (req, res) => {
    console.log('GET /animals/');
    res.send(fakeDb)

})


//POST animals
router.post('/', (req, res) => {
    console.log('POST /animals/', req.body);
    // I vanliga fall får vi datan från klienten - i req objektet
//let newAnimal = { species: 'kea', favoriteFood: 'rabbits' }

// På riktigt 
let newAnimal = req.body 

fakeDb.push(newAnimal)
res.send('Added new animal')

})


// PUT animals
router.put('/',(req, res) => {
    console.log('PUT /animals');
    let replaceAnimal = { species: 'seagull', favoriteFood: 'fish'}
    let lastIndex = fakeDb.length - 1
    fakeDb[lastIndex] = replaceAnimal
    res.send('Animal replaced')

})


// DELETE animals

router.delete('/', (req, res) => {
    console.log('Delete /animals');
    fakeDb = []
    res.send('Deleted all animals')
})



module.exports = router
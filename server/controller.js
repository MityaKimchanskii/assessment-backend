const houses = require('./db.json')
let globalId = 4

module.exports = {
    getFavorites: (req, res) => res.status(200).send(favorites),
    deleteFavorite: (req, res) => {
        let index = favorites.findIndex(elem => elem.id === +req.params.id)
        favorites.splice(index, 1)
        res.status(200).send(favorites)
    },
    createFavorite: (req, res) => {
        let { name, city, movie } = req.body
        let newFavorite = {
            id: globalId,
            name, 
            city,
            movie
        }
        favorites.push(newFavorite)
        res.status(200).send(favorites)
        globalId++
    }
    // updateFavorite: (req, res) => {
    //     let { id } = req.params
    //     let { type } = req.body
    //     let index = favorites.findIndex(elem => +elem.id === +id)

    //     if (favorites[index].price <= 10000 && type === 'minus') {
    //         houses[index].price = 0
    //         res.status(200).send(houses)
    //     } else if (type === 'plus') {
    //         houses[index].price += 10000
    //         res.status(200).send(houses)
    //     } else if (type === 'minus') {
    //         houses[index].price -= 10000
    //         res.status(200).send(houses)
    //     } else {
    //         res.sendStatus(400)
    //     }
    // }
}
const model = require('../database').getInstance()

module.exports = {
    allTech: async () => {
const laptop = model.getModels('Laptop')

        return laptop.findAll({})
    },

    newLaptop: async (laptopObj) => {
        let laptop = model.getModels('Laptop')

        return laptop.create(laptopObj, {new: true})
    }
}

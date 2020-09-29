const techService = require('../services/tech.service');

module.exports = {
    AllTech: async (req, res) => {
        try {
        let alltech = await techService.allTech()

        res.json(alltech)

        }
        catch (e) {
            console.log(e)
        }

    },

    NewLaptop: async (req, res) => {
        try {
            let newLaptop = await techService.newLaptop(req.body)

            res.json(newLaptop);
        }
        catch (e) {
            console.log(e)
        }
    }
}

const {Router} = require('express');
const techController = require('../controllers/tech.controller');
const midlleware = require('../midlleware/laptop.midlleware')

const techRouter = Router();

techRouter.get('/',  techController.AllTech )
techRouter.post('/new', midlleware, techController.NewLaptop)

module.exports = techRouter

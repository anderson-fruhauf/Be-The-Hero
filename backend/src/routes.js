const express = require('express')
const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const routes = express.Router()

/**
 * Session
 */
routes.post('/session', SessionController.create)


/**
 * ongs routs
 */
routes.get('/ongs', OngController.index)
routes.post('/ongs',OngController.create)


/**
 * incidents routs
 */
routes.post('/incidents',IncidentController.create)
routes.get('/incidents',IncidentController.index)
routes.delete('/incidents/:id',IncidentController.delete)

/**
 * Profile routs
 */
routes.get('/profile', ProfileController.index)


module.exports = routes
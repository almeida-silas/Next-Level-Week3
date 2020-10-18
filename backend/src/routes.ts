import { Router } from 'express'
import upload from './config/upload'

import OrphanagesController from './Controllers/OrphanagesController'

const routes = Router()

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.store)

export default routes

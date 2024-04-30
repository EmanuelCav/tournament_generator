import { Router } from 'express'

import * as eventCtrl from '../controller/event.ctrl'

const router = Router()

router.get('/events', eventCtrl.events)
router.get('/events/:id', eventCtrl.event)
router.post('/events', eventCtrl.createEvent)
router.delete('/events/:id', eventCtrl.removeEvent)
router.put('/events/:id', eventCtrl.updateEvent)

export default router
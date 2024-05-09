import { Router } from 'express'

import * as eventCtrl from '../controller/event.ctrl'

import auth from '../middleware/auth/auth'
import eventValid from '../middleware/validation/validation/event.valid'

import { upload } from '../helper/multer'

const router = Router()

router.get('/events', eventCtrl.events)
router.get('/events/:id', auth, eventCtrl.event)
router.post('/events', auth, upload.single("file"), eventValid, eventCtrl.createEvent)
router.delete('/events/:id', auth, eventCtrl.removeEvent)
router.put('/events/:id', auth, eventCtrl.updateEvent)

export default router
import { Router } from 'express'

import * as eventCtrl from '../controller/event.ctrl'

import auth from '../middleware/auth/auth'
import permission from '../middleware/auth/permission';

import eventValid from '../middleware/validation/validation/event.valid'

import { upload } from '../helper/multer'

const router = Router()

router.get('/events', permission, eventCtrl.events)
router.get('/events/users', auth, eventCtrl.userEvents)
router.get('/events/:id', auth, eventCtrl.event)
router.post('/events', auth, upload.single("file"), eventValid, eventCtrl.createEvent)
router.delete('/events/:id', auth, eventCtrl.removeEvent)
router.delete('/events/:eid/competitors/:cid', auth, eventCtrl.removeCompetitor)
router.put('/events/:id', auth, eventCtrl.updateEvent)
router.put('/events/:eid/competitors/:cid', auth, eventCtrl.updateRole)
router.patch('/events/competitors/:id', auth, eventCtrl.joinEvent)

export default router
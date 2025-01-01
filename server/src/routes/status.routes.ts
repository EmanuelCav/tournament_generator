import { Router } from 'express'

import * as statusCtrl from '../controller/status.ctrl'

import statusValid from '../middleware/validation/validation/status.valid'

import auth from '../middleware/auth/auth'
import admin from '../middleware/auth/admin'

const router = Router()

router.get('/status', auth, statusCtrl.status)
router.get("/welcome", statusCtrl.welcome)
router.post('/status', [auth, admin], statusValid, statusCtrl.createStatus)
router.delete('/status/:id', [auth, admin], statusCtrl.removeStatus)

export default router
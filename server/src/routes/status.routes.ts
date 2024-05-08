import { Router } from 'express'

import * as stastusCtrl from '../controller/status.ctrl'

import statusValid from '../middleware/validation/validation/status.valid'

import auth from '../middleware/auth/auth'
import admin from '../middleware/auth/admin'

const router = Router()

router.get('/status', auth, stastusCtrl.status)
router.post('/status', [auth, admin], statusValid, stastusCtrl.createStatus)
router.delete('/status/:id', [auth, admin], stastusCtrl.removeStatus)

export default router
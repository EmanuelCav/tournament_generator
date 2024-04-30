import { Router } from 'express'

import * as roleCtrl from '../controller/role.ctrl'

import roleValid from '../middleware/validation/validation/role.valid'

import auth from '../middleware/auth/auth'
import admin from '../middleware/auth/admin'

const router = Router()

router.get('/roles', [auth, admin], roleCtrl.roles)
router.post('/roles', [auth, admin], roleValid, roleCtrl.createRole)
router.delete('/roles/:id', [auth, admin], roleCtrl.removeRole)

export default router
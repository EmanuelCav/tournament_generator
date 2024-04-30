import { Router } from 'express'

import * as roleCtrl from '../controller/role.ctrl'

import roleValid from '../middleware/validation/validation/role.valid'

const router = Router()

router.get('/roles', roleCtrl.roles)
router.post('/roles', roleValid, roleCtrl.createRole)
router.delete('/roles/:id', roleCtrl.removeRole)

export default router
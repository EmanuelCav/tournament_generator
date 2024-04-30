import { Router } from 'express'

import * as roleCtrl from '../controller/role.ctrl'

const router = Router()

router.get('/roles', roleCtrl.roles)
router.post('/roles', roleCtrl.createRole)
router.delete('/roles/:id', roleCtrl.removeRole)

export default router
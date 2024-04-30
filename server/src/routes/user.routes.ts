import { Router } from 'express'

import * as userCtrl from '../controller/user.ctrl'

const router = Router()

router.get('/users', userCtrl.users)
router.post('/users/login', userCtrl.login)
router.post('/users/register', userCtrl.register)
router.delete('/users/:id', userCtrl.removeUser)

export default router
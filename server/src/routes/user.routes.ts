import { Router } from 'express'

import * as userCtrl from '../controller/user.ctrl'

import createUserValid from '../middleware/validation/validation/createUser.valid'

const router = Router()

router.get('/users', userCtrl.users)
router.post('/users/login', userCtrl.login)
router.post('/users/register', createUserValid, userCtrl.register)
router.post('/users/create', createUserValid, userCtrl.createUser)
router.delete('/users/:id', userCtrl.removeUser)

export default router
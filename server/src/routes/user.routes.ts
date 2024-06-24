import { Router } from 'express'

import * as userCtrl from '../controller/user.ctrl'

import createUserValid from '../middleware/validation/validation/createUser.valid'
import loginUserValid from '../middleware/validation/validation/login.valid'

import verificationMail from '../middleware/auth/verificationMail'
import auth from '../middleware/auth/auth'
import admin from '../middleware/auth/admin'

const router = Router()

router.get('/users', userCtrl.users)
router.post('/users/login', loginUserValid, userCtrl.login)
router.post('/users/register', createUserValid, userCtrl.register)
router.post('/users/generate', userCtrl.generateUser)
router.post('/users/autologin/:nickname', userCtrl.autoLogin)
router.post('/users/subscriptions/:id', [auth, admin], createUserValid, userCtrl.createUser)
router.delete('/users/:id', [auth, admin], userCtrl.removeUser)
router.put('/users', verificationMail, userCtrl.updateStatus)

export default router
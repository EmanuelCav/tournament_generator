import { Router } from 'express'

import * as refereeCtrl from '../controller/referee.ctrl'

import createRefereeValid from '../middleware/validation/validation/referee.valid'

import auth from '../middleware/auth/auth'

const router = Router()

router.post('/referee/competitor/:cid', auth, createRefereeValid, refereeCtrl.createReferee)
router.delete('/referee/:rid/competitor/:cid', auth, refereeCtrl.removeReferee)
router.put('/referee/:rid/competitor/:cid', auth, createRefereeValid, refereeCtrl.updateReferee)

export default router
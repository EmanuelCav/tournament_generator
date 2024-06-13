import { Router } from 'express'

import * as refereeCtrl from '../controller/referee.ctrl'

import createRefereeValid from '../middleware/validation/validation/referee.valid'

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/referees/events/:id', auth, refereeCtrl.referees)
router.post('/referees/competitors/:cid', auth, createRefereeValid, refereeCtrl.createReferee)
router.delete('/referees/:rid/competitors/:cid', auth, refereeCtrl.removeReferee)
router.put('/referees/:rid/competitors/:cid', auth, createRefereeValid, refereeCtrl.updateReferee)

export default router
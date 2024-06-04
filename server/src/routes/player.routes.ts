import { Router } from 'express'

import * as playerCtrl from '../controller/player.ctrl'

import createPlayerValid from '../middleware/validation/validation/player.valid'

import auth from '../middleware/auth/auth'

const router = Router()

router.post('/player/team/:tid/competitor/:cid', auth, createPlayerValid, playerCtrl.createPlayer)
router.delete('/player/:pid/competitor/:cid', auth, playerCtrl.removePlayer)
router.put('/player/:pid/competitor/:cid', auth, createPlayerValid, playerCtrl.updatePlayer)

export default router
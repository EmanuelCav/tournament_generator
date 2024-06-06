import { Router } from 'express'

import * as playerCtrl from '../controller/player.ctrl'

import createPlayerValid from '../middleware/validation/validation/player.valid'

import auth from '../middleware/auth/auth'

const router = Router()

router.post('/players/teams/:tid/competitors/:cid', auth, createPlayerValid, playerCtrl.createPlayer)
router.delete('/players/:pid/competitors/:cid', auth, playerCtrl.removePlayer)
router.put('/players/:pid/competitors/:cid', auth, createPlayerValid, playerCtrl.updatePlayer)

export default router
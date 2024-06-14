import { Router } from 'express'

import * as playerCtrl from '../controller/player.ctrl'

import createPlayerValid from '../middleware/validation/validation/player.valid'
import updatePlayerDataValid from '../middleware/validation/validation/playerData.valid'

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/players/events/:id', playerCtrl.players)
router.post('/players/teams/:tid/competitors/:cid', auth, createPlayerValid, playerCtrl.createPlayer)
router.delete('/players/:pid/competitors/:cid', auth, playerCtrl.removePlayer)
router.put('/players/:pid/competitors/:cid', auth, createPlayerValid, playerCtrl.updatePlayer)
router.put('/data/players/:pid/competitors/:cid', auth, updatePlayerDataValid, playerCtrl.updatePlayerData)

export default router
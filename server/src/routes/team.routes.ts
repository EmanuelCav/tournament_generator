import { Router } from 'express'

import * as teamCtrl from '../controller/team.ctrl'

import auth from '../middleware/auth/auth'
import teamValid from '../middleware/validation/validation/team.valid'

import { upload } from '../helper/multer'

const router = Router()

router.get('/teams/positions/:id', teamCtrl.generatePositions)

router.patch('/teams/events/:id', auth, upload.single("file"), teamValid, teamCtrl.addTeam)
router.patch('/teams/:tid/events/:eid', auth, teamCtrl.removeTeam)
router.patch('/teams/:id', auth, teamCtrl.joinTeam)

router.put('/teams/:tid/events/:eid', auth, upload.single("file"), teamValid, teamCtrl.updateTeam)

export default router
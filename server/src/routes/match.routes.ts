import { Router } from "express";

import * as matchCtrl from '../controller/match.ctrl';

import auth from '../middleware/auth/auth';

const router = Router()

router.patch('/matchs/events/:id', auth, matchCtrl.generateMatch)
router.patch('/matchs/restart/events/:id', auth, matchCtrl.restartMatch)
router.put('/matchs/:mid/events/:eid', auth, matchCtrl.addRefereeMatch)
router.put('/campus/matchs/:mid/events/:eid', auth, matchCtrl.addCampusMatch)
router.put('/score/matchs/:mid/events/:eid', auth, matchCtrl.updateScore)
router.put('/schedule/matchs/:mid/events/:eid', auth, matchCtrl.updateDate)

export default router
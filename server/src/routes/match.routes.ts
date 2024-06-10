import { Router } from "express";

import * as matchCtrl from '../controller/match.ctrl';

import auth from '../middleware/auth/auth';

const router = Router()

router.patch('/matchs/events/:id', auth, matchCtrl.generateMatch)
router.put('/matchs/:mid/events/:eid', auth, matchCtrl.addRefereeMatch)

export default router
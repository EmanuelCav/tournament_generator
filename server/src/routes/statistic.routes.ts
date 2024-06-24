import { Router } from 'express'

import * as statisticsCtrl from '../controller/statistics.ctrl';

import statisticValid from '../middleware/validation/validation/statistic.valid';

import auth from '../middleware/auth/auth'

const router = Router()

router.post('/statistics/events/:eid/competitors/:cid', auth, statisticValid, statisticsCtrl.createStatistics)
router.delete('/statistics/:sid/competitors/:cid', auth, statisticsCtrl.removeStatistics)
router.put('/statistics/:sid/competitors/:cid', auth, statisticValid, statisticsCtrl.updateStatistics)

export default router
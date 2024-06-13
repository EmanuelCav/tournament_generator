import { Router } from 'express'

import * as campusCtrl from '../controller/campus.ctrl'

import createCampusValid from '../middleware/validation/validation/campus.valid'

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/campus/events/:id', auth, campusCtrl.campus)
router.post('/campus/competitors/:cid', auth, createCampusValid, campusCtrl.createCampus)
router.delete('/campus/:id/competitors/:cid', auth, campusCtrl.removeCampus)
router.put('/campus/:id/competitors/:cid', auth, createCampusValid, campusCtrl.updateCampus)

export default router
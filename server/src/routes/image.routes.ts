import { Router } from 'express'

import * as imageCtrl from '../controller/image.ctrl'

import auth from '../middleware/auth/auth'
import admin from '../middleware/auth/admin'

import { upload } from '../helper/multer'

const router = Router()

router.get('/images', [auth, admin], imageCtrl.images)
router.post('/images', [auth, admin], upload.single("file"), imageCtrl.createImage)

export default router
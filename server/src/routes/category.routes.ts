import { Router } from 'express'

import * as categoriesCtrl from '../controller/category.ctrl'

import categoryValid from '../middleware/validation/validation/category.valid'

import auth from '../middleware/auth/auth'
import admin from '../middleware/auth/admin'

const router = Router()

router.get('/categories', auth, categoriesCtrl.categories)
router.post('/categories', [auth, admin], categoryValid, categoriesCtrl.createCategory)
router.delete('/categories/:id', [auth, admin], categoriesCtrl.removeCategory)

export default router
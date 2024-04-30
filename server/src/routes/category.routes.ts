import { Router } from 'express'

import * as categoryCtrl from '../controller/category.ctrl'

import categoryValid from '../middleware/validation/validation/category.valid'

const router = Router()

router.get('/categories', categoryCtrl.categories)
router.post('/categories', categoryValid, categoryCtrl.createCategory)
router.delete('/categories/:id', categoryCtrl.removeCategory)

export default router
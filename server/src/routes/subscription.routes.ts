import { Router } from 'express'

import * as subscriptionsCtrl from '../controller/subscription.ctrl'

import subscriptionValid from '../middleware/validation/validation/subscription.valid'

import auth from '../middleware/auth/auth'
import admin from '../middleware/auth/admin'

const router = Router()

router.get('/subscriptions', subscriptionsCtrl.subscriptions)
router.post('/subscriptions', [auth, admin], subscriptionValid, subscriptionsCtrl.createSubscription)
router.delete('/subscriptions/:id', [auth, admin], subscriptionsCtrl.removeSubscription)
router.patch('/subscriptions/:id', [auth, admin],  subscriptionsCtrl.addDescriptionSubscription)

export default router
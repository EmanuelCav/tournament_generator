import { Router } from 'express'

import * as commentCtrl from '../controller/comment.ctrl'

import auth from '../middleware/auth/auth'

const router = Router()

router.patch('/comments/events/:id', auth, commentCtrl.createComment)
router.delete('/comments/:id', auth, commentCtrl.removeComment)

export default router
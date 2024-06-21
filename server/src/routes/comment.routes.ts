import { Router } from 'express'

import * as commentCtrl from '../controller/comment.ctrl'

import auth from '../middleware/auth/auth'

const router = Router()

router.post('/comments/events/:id', auth, commentCtrl.createComment)

export default router
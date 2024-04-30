import { Router } from 'express'

import * as commentCtrl from '../controller/comment.ctrl'

const router = Router()

router.patch('/comments/events/:id', commentCtrl.createComment)
router.delete('/comments/:id', commentCtrl.removeComment)

export default router
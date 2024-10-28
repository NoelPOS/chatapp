import express from 'express'
import { sendMessage, getMessages } from '../controllers/message.controllers.js'
import protectRoute from '../middlewares/protectRoute.js'

const router = express.Router()

router.post('/:id', getMessages)

router.post('/send/:id', sendMessage)

export default router

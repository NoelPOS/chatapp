import express from 'express'
import protectRoute from '../middlewares/protectRoute.js'
import { getUsers } from '../controllers/user.controllers.js'

const router = express.Router()

router.get('/', getUsers)

export default router

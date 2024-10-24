import express from 'express'
import dotenv from 'dotenv'
import connectDB from './dbconnect/db.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import messageRoutes from './routes/message.routes.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
// for cookie passing
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/messages', messageRoutes)

app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`)
})

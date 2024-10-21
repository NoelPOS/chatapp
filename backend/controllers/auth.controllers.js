import { configDotenv } from 'dotenv'
import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
  const { fullname, username, password, confirmpassword, gender, profilePic } =
    req.body

  if (password !== confirmpassword) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  const user = await User.findOne({ username })

  if (user) {
    return res.status(400).json({ message: 'User already exists' })
  }

  // Hash password

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Profile pic

  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

  const newUser = new User({
    fullname,
    username,
    password: hashedPassword,
    gender,
    profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
  })

  if (newUser) {
    await newUser.save()
    return res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilePic,
    })
  } else {
    return res.status(400).json({ error: 'Invalid user data' })
  }
}

export const login = (req, res) => {
  res.send('Login route')
}

export const logout = (req, res) => {
  res.send('Logout route')
}

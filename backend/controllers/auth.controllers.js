import { configDotenv } from 'dotenv'
import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'
import generateTokenandCookie from '../utils/generateToken.js'

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body

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
    let profilePic = ''
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
      generateTokenandCookie(newUser._id, res)
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
  } catch (error) {
    console.log('Error in signup controller', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' })
    }

    generateTokenandCookie(user._id, res)

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    })
  } catch (err) {
    console.log('Error in login controller', err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const logout = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 })
    res.status(200).json({ message: 'Logged out successfully' })
  } catch (err) {
    console.log('Error in logout controller', err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
}

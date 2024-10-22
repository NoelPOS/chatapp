import User from '../models/User.model.js'

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({
      _id: { $ne: req.user },
    }).select('-password')

    res.status(200).json(users)
  } catch (err) {
    console.log('Error in getUsers controller: ', err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
}

import jwt from 'jsonwebtoken'

const generateTokenandCookie = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  const options = {
    maxAge: 30 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS
    sameSite: 'strict', // CSRF
    secure: process.env.NODE_ENV !== 'development', // HTTPS
  }

  res.cookie('jwt', token, options)

  return token
}

export default generateTokenandCookie

import jwt from 'jsonwebtoken'

const generateTokenandCookie = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: 'strict', // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== 'development',
  })

  console.log('Token from generate token js', token)
}

export default generateTokenandCookie

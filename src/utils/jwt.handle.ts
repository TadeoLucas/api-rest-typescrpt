import { sign, verify } from "jsonwebtoken"

const JWT: string = process.env.JWT_SECRET || 'tsa'

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT, {
    expiresIn: "2h"
  })
  return jwt
}

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT)
  return isOk
}

export { generateToken, verifyToken }
import { compare, hash } from 'bcryptjs'

const encrypt = async (password: string): Promise<string> => {
  const pass = password.toString()
  const passwordHash: string = await hash(pass, 8)
  return passwordHash
}

const verifyCript = async (password: string, passwordHash: string) => {
  const isCorrect: boolean = await compare(password, passwordHash)
  return isCorrect
}

export { encrypt, verifyCript }
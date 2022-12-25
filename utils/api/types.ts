export interface ILoginDto {
  email: string
  password: string
}

export interface ICreateUserDto extends ILoginDto {
  fullName: string
}

export interface IResponseUserDto {
  createAt: string
  email: string
  fullName: string
  id: number
  token: string
  updatedAt: string
}

import axios, { AxiosInstance } from 'axios'
import { IComment, ICreateUserDto, ILoginDto, IResponseUserDto } from './types'

export const UserApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<ICreateUserDto[]>('users')
    return data
  },

  async register(dto: ICreateUserDto) {
    const { data } = await instance.post<ICreateUserDto, { data: IResponseUserDto }>('auth/register', dto)
    return data
  },

  async login(dto: ILoginDto) {
    const { data } = await instance.post<ILoginDto, { data: IResponseUserDto }>('auth/login', dto)
    return data
  },

  async getMe() {
    const { data } = await instance.get<IResponseUserDto>('users/me')
    return data
  },
})
